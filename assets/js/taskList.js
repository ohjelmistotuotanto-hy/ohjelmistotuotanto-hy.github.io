(() => {
  // numbered task headings, e.g. "3. Gitin alkeet", and optional extra tasks
  const TASK_HEADING = /^(\d+\.|Bonustehtävä|Vapaaehtoinen)/;

  const headingText = (heading) => {
    const clone = heading.cloneNode(true);
    clone.querySelectorAll('.heading-anchor').forEach((anchor) => anchor.remove());
    return clone.textContent.trim();
  };

  const buildTaskList = () => {
    const container = document.querySelector('.tehtavalista');

    if (!container) {
      return;
    }

    const list = container.querySelector('ul');
    const headings = Array.from(document.querySelectorAll('.post-content h3'))
      .filter((heading) => heading.id && TASK_HEADING.test(headingText(heading)));

    headings.forEach((heading) => {
      const item = document.createElement('li');
      const link = document.createElement('a');

      link.setAttribute('href', `#${heading.id}`);
      link.textContent = headingText(heading);

      item.appendChild(link);
      list.appendChild(item);
    });

    if (headings.length > 0) {
      container.hidden = false;
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    buildTaskList();
  });
})();
