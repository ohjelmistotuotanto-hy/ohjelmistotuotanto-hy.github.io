(() => {
  const MAX_RESULTS = 20;
  const SNIPPET_RADIUS = 70;

  const indexUrl = document.currentScript.dataset.index;
  let sections = null;
  let loading = null;

  const escapeHtml = (text) =>
    text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const normalize = (text) => text.replace(/\s+/g, ' ').trim();

  // sama algoritmi kuin kramdownin/GFM:n otsikoiden id:issä
  const slug = (heading) =>
    heading
      .replace(/<[^>]+>/g, '')
      .trim()
      .toLowerCase()
      .replace(/[^\p{L}\p{N} _-]/gu, '')
      .replace(/ /g, '-');

  // valtaosa sivuista on indeksissä valmiiksi HTML:nä
  const sectionsFromHtml = (page) => {
    const doc = new DOMParser().parseFromString(page.content, 'text/html');
    const result = [];
    let current = { heading: page.title, id: '', text: '' };

    const walk = (node) => {
      node.childNodes.forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          current.text += child.textContent;
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          if (/^H[1-6]$/.test(child.tagName) && child.id) {
            result.push(current);
            current = { heading: normalize(child.textContent), id: child.id, text: '' };
          } else if (!['SCRIPT', 'STYLE', 'BUTTON'].includes(child.tagName)) {
            walk(child);
            current.text += ' ';
          }
        }
      });
    };

    walk(doc.body);
    result.push(current);
    return result;
  };

  // varalla siltä varalta, että jokin sivu tulee indeksiin raakana markdownina
  const sectionsFromMarkdown = (page) => {
    const result = [];
    let current = { heading: page.title, id: '', text: '' };
    let inCode = false;

    page.content.split('\n').forEach((line) => {
      if (line.trim().startsWith('```')) {
        inCode = !inCode;
      }
      const match = !inCode && line.match(/^#{1,6}\s+(.*)$/);
      if (match) {
        result.push(current);
        const heading = match[1].replace(/<[^>]+>/g, '').trim();
        current = { heading, id: slug(match[1]), text: '' };
      } else {
        current.text += `${line
          .replace(/\{%.*?%\}|\{\{.*?\}\}/g, '')
          .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
          .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
          .replace(/<[^>]+>/g, '')} `;
      }
    });

    result.push(current);
    return result;
  };

  const loadIndex = () => {
    if (!loading) {
      loading = fetch(indexUrl)
        .then((response) => response.json())
        .then((pages) => {
          sections = [];
          pages.forEach((page) => {
            const isHtml = page.content.trimStart().startsWith('<');
            const pageSections = isHtml ? sectionsFromHtml(page) : sectionsFromMarkdown(page);
            pageSections.forEach((section) => {
              const text = normalize(section.text);
              if (!text && !section.id) {
                return;
              }
              sections.push({
                pageTitle: page.title,
                heading: section.heading,
                url: section.id ? `${page.url}#${section.id}` : page.url,
                text,
                headingLower: section.heading.toLowerCase(),
                textLower: text.toLowerCase(),
              });
            });
          });
        });
    }
    return loading;
  };

  const countOccurrences = (haystack, needle) => {
    let count = 0;
    let pos = haystack.indexOf(needle);
    while (pos !== -1) {
      count += 1;
      pos = haystack.indexOf(needle, pos + needle.length);
    }
    return count;
  };

  const search = (query) => {
    const terms = query.toLowerCase().split(/\s+/).filter((term) => term.length >= 2);
    if (terms.length === 0) {
      return [];
    }

    return sections
      .map((section) => {
        let score = 0;
        for (const term of terms) {
          const inHeading = countOccurrences(section.headingLower, term);
          const inText = countOccurrences(section.textLower, term);
          if (inHeading === 0 && inText === 0) {
            return null;
          }
          score += inHeading * 10 + Math.min(inText, 10);
        }
        return { section, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_RESULTS)
      .map(({ section }) => ({ section, terms }));
  };

  const highlight = (text, terms) => {
    let html = escapeHtml(text);
    terms.forEach((term) => {
      const escaped = escapeHtml(term).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      html = html.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
    });
    return html;
  };

  const snippet = (section, terms) => {
    const positions = terms.map((term) => section.textLower.indexOf(term)).filter((pos) => pos !== -1);
    if (positions.length === 0) {
      return section.text.slice(0, SNIPPET_RADIUS * 2);
    }
    const pos = Math.min(...positions);
    const start = Math.max(0, pos - SNIPPET_RADIUS);
    const end = Math.min(section.text.length, pos + SNIPPET_RADIUS);
    return `${start > 0 ? '…' : ''}${section.text.slice(start, end)}${end < section.text.length ? '…' : ''}`;
  };

  const init = () => {
    const header = document.querySelector('.site-header .wrapper');
    if (!header) {
      return;
    }

    const container = document.createElement('div');
    container.className = 'site-search';
    container.innerHTML = `
      <input type="search" class="site-search-input" placeholder="Hae materiaalista…" aria-label="Hae materiaalista" autocomplete="off">
      <div class="site-search-results" hidden></div>
    `;
    const title = header.querySelector('.site-title');
    header.insertBefore(container, title ? title.nextSibling : header.firstChild);

    const input = container.querySelector('.site-search-input');
    const results = container.querySelector('.site-search-results');

    const render = (query) => {
      if (!sections) {
        results.innerHTML = '<div class="site-search-info">Ladataan hakuindeksiä…</div>';
        results.hidden = false;
        return;
      }
      if (query.trim().length < 2) {
        results.hidden = true;
        return;
      }

      const found = search(query);
      if (found.length === 0) {
        results.innerHTML = '<div class="site-search-info">Ei osumia</div>';
      } else {
        results.innerHTML = found
          .map(({ section, terms }) => `
            <a class="site-search-result" href="${section.url}">
              <span class="site-search-result-title">${escapeHtml(section.pageTitle)}${section.heading !== section.pageTitle ? ` › ${highlight(section.heading, terms)}` : ''}</span>
              <span class="site-search-result-snippet">${highlight(snippet(section, terms), terms)}</span>
            </a>`)
          .join('');
      }
      results.hidden = false;
    };

    let timer = null;
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => render(input.value), 150);
    });

    input.addEventListener('focus', () => {
      loadIndex().then(() => render(input.value));
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        results.hidden = true;
        input.blur();
      } else if (event.key === 'Enter') {
        const first = results.querySelector('.site-search-result');
        if (first) {
          window.location.href = first.href;
        }
      } else if (event.key === 'ArrowDown') {
        const first = results.querySelector('.site-search-result');
        if (first) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    results.addEventListener('keydown', (event) => {
      const items = Array.from(results.querySelectorAll('.site-search-result'));
      const index = items.indexOf(document.activeElement);
      if (event.key === 'ArrowDown' && index < items.length - 1) {
        event.preventDefault();
        items[index + 1].focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (index > 0) {
          items[index - 1].focus();
        } else {
          input.focus();
        }
      } else if (event.key === 'Escape') {
        results.hidden = true;
        input.focus();
      }
    });

    // saman sivun sisäisen tuloksen klikkaus sulkee tuloslistan
    results.addEventListener('click', () => {
      results.hidden = true;
    });

    document.addEventListener('click', (event) => {
      if (!container.contains(event.target)) {
        results.hidden = true;
      }
    });

    // "/" siirtää fokuksen hakukenttään
    document.addEventListener('keydown', (event) => {
      const tag = document.activeElement && document.activeElement.tagName;
      if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(tag)) {
        event.preventDefault();
        input.focus();
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
