(() => {
  const getHeadings = () => {
    return Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'));
  };

  const addAnchor = (heading) => {
    const id = heading.getAttribute('id');

    if (!id) {
      return;
    }

    const anchor = document.createElement('a');

    anchor.setAttribute('href', `#${id}`);
    anchor.classList.add('heading-anchor');

    anchor.innerHTML = '#';

    heading.prepend(anchor);
  };

  const addHeadingAnchors = () => {
    const headings = getHeadings();

    headings.forEach((heading) => {
      addAnchor(heading);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    addHeadingAnchors();
  });
})();
