(() => {
  const headingText = (heading) => {
    const clone = heading.cloneNode(true);
    clone.querySelectorAll('.heading-anchor').forEach((anchor) => anchor.remove());
    return clone.textContent.trim();
  };

  // chapters (h2) with their sections (h3)
  const buildList = (headings) => {
    const list = document.createElement('ul');
    let sublist = null;

    headings.forEach((heading) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.setAttribute('href', `#${heading.id}`);
      link.textContent = headingText(heading);
      item.appendChild(link);

      if (heading.tagName === 'H2') {
        sublist = document.createElement('ul');
        item.appendChild(sublist);
        list.appendChild(item);
      } else if (sublist) {
        sublist.appendChild(item);
      } else {
        list.appendChild(item);
      }
    });

    list.querySelectorAll('ul').forEach((ul) => {
      if (!ul.children.length) {
        ul.remove();
      }
    });

    return list;
  };

  const buildSidebar = () => {
    const sidebar = document.querySelector('.sidebar-toc');

    if (!sidebar) {
      return;
    }

    const headings = Array.from(document.querySelectorAll('.post-content h2, .post-content h3'))
      .filter((heading) => heading.id);

    if (headings.length === 0) {
      return;
    }

    sidebar.appendChild(buildList(headings));
    sidebar.hidden = false;
    document.body.classList.add('has-sidebar-toc');

    const header = document.querySelector('.site-header');
    const wide = window.matchMedia('(min-width: 1100px)');
    const links = new Map(Array.from(sidebar.querySelectorAll('a'))
      .filter((link) => link.getAttribute('href').startsWith('#'))
      .map((link) => [link.getAttribute('href').slice(1), link]));

    // on narrow screens the list opens as a drawer from a button
    const toggle = document.createElement('button');
    toggle.className = 'sidebar-toc-toggle';
    toggle.setAttribute('aria-label', 'Sisällys');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<svg viewBox="0 0 18 15" width="18" height="15" aria-hidden="true">'
      + '<rect y="0" width="18" height="3" rx="1.5" fill="#424242"/>'
      + '<rect y="6" width="18" height="3" rx="1.5" fill="#424242"/>'
      + '<rect y="12" width="18" height="3" rx="1.5" fill="#424242"/></svg>';

    const backdrop = document.createElement('div');
    backdrop.className = 'sidebar-toc-backdrop';

    const setOpen = (open) => {
      sidebar.classList.toggle('open', open);
      backdrop.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));

      const active = sidebar.querySelector('a.active');
      if (open && active) {
        active.scrollIntoView({ block: 'center' });
      }
    };

    toggle.addEventListener('click', () => setOpen(!sidebar.classList.contains('open')));
    backdrop.addEventListener('click', () => setOpen(false));
    sidebar.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        setOpen(false);
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    });

    document.body.appendChild(backdrop);
    document.body.appendChild(toggle);

    // the header is sticky and only partly visible after scrolling, so follow its bottom edge
    const update = () => {
      const top = Math.max(header ? header.getBoundingClientRect().bottom : 0, 0);
      sidebar.style.top = wide.matches ? `${top + 16}px` : '';

      const current = headings.filter((heading) => heading.getBoundingClientRect().top < top + 80).pop();
      links.forEach((link) => link.classList.remove('active'));

      if (current) {
        const link = links.get(current.id);
        link.classList.add('active');
      }
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    wide.addEventListener('change', () => setOpen(false));
    update();
  };

  document.addEventListener('DOMContentLoaded', () => {
    buildSidebar();
  });
})();
