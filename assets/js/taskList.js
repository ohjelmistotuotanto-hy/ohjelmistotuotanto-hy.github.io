(() => {
  const headingText = (heading) => {
    const clone = heading.cloneNode(true);
    clone.querySelectorAll('.heading-anchor').forEach((anchor) => anchor.remove());
    return clone.textContent.trim();
  };

  const linkTo = (heading) => {
    const link = document.createElement('a');
    link.setAttribute('href', `#${heading.id}`);
    link.textContent = headingText(heading);
    return link;
  };

  // chapters (h2) with their sections (h3), used on the genai page
  const buildSectionList = (container, list) => {
    let sublist = null;

    document.querySelectorAll('.post-content h2, .post-content h3').forEach((heading) => {
      if (!heading.id) {
        return;
      }

      const item = document.createElement('li');
      item.appendChild(linkTo(heading));

      if (heading.tagName === 'H2') {
        sublist = document.createElement('ul');
        item.appendChild(sublist);
        list.appendChild(item);
      } else if (sublist) {
        sublist.appendChild(item);
      }
    });

    list.querySelectorAll('ul').forEach((ul) => {
      if (!ul.children.length) {
        ul.remove();
      }
    });

    if (list.children.length > 0) {
      container.hidden = false;
    }
  };

  const buildTaskList = () => {
    const container = document.querySelector('.tehtavalista');

    if (!container) {
      return;
    }

    buildSectionList(container, container.querySelector('ul'));
  };

  document.addEventListener('DOMContentLoaded', () => {
    buildTaskList();
  });
})();
