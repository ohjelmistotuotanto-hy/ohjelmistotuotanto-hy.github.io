(() => {
  const PREFIX = 'ohtu-checkbox';

  const storage = (() => {
    try {
      const key = `${PREFIX}-test`;
      window.localStorage.setItem(key, key);
      window.localStorage.removeItem(key);
      return window.localStorage;
    } catch (e) {
      return null;
    }
  })();

  // avain muodostetaan sivun polusta, lähimmän edeltävän otsikon id:stä ja
  // checkboxin järjestysnumerosta otsikon alla, jolloin muutokset muiden
  // tehtävien teksteihin eivät sotke tallennettuja rasteja
  const assignKeys = (checkboxes) => {
    const counters = {};
    const headings = Array.from(document.querySelectorAll('.post-content h2[id], .post-content h3[id]'));

    return checkboxes.map((checkbox) => {
      let section = 'top';

      headings.forEach((heading) => {
        if (heading.compareDocumentPosition(checkbox) & Node.DOCUMENT_POSITION_FOLLOWING) {
          section = heading.id;
        }
      });

      counters[section] = (counters[section] || 0) + 1;
      return `${PREFIX}:${window.location.pathname}:${section}:${counters[section]}`;
    });
  };

  const init = () => {
    if (!storage) {
      return;
    }

    const checkboxes = Array.from(document.querySelectorAll('.post-content input[type="checkbox"]'));
    const keys = assignKeys(checkboxes);

    checkboxes.forEach((checkbox, i) => {
      const key = keys[i];
      checkbox.checked = storage.getItem(key) === '1';

      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          storage.setItem(key, '1');
        } else {
          storage.removeItem(key);
        }
      });
    });

    document.querySelectorAll('.checkbox-reset').forEach((button) => {
      button.addEventListener('click', () => {
        if (!window.confirm('Tyhjennetäänkö kaikki tämän sivun rastit?')) {
          return;
        }

        keys.forEach((key) => storage.removeItem(key));
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
