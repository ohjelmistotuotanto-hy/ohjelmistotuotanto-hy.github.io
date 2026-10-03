(() => {
  const COPY_TEXT = 'Kopioi';
  const COPIED_TEXT = 'Kopioitu!';
  const FAILED_TEXT = 'Ei onnistunut';

  const copyToClipboard = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    textarea.remove();

    if (!ok) {
      throw new Error('copy failed');
    }
  };

  const showStatus = (button, text) => {
    button.textContent = text;
    clearTimeout(button.resetTimer);
    button.resetTimer = setTimeout(() => {
      button.textContent = COPY_TEXT;
    }, 1500);
  };

  const addCopyButton = (pre) => {
    const code = pre.querySelector('code') || pre;

    const wrapper = document.createElement('div');
    wrapper.classList.add('code-copy-wrapper');
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('code-copy-button');
    button.textContent = COPY_TEXT;
    button.setAttribute('aria-label', 'Kopioi koodi leikepöydälle');

    button.addEventListener('click', async () => {
      try {
        await copyToClipboard(code.innerText.replace(/\n$/, ''));
        showStatus(button, COPIED_TEXT);
      } catch (e) {
        showStatus(button, FAILED_TEXT);
      }
    });

    wrapper.appendChild(button);
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.post-content pre, .home pre').forEach((pre) => {
      addCopyButton(pre);
    });
  });
})();
