const observer = new MutationObserver(() => {
  const button = document.querySelector('.ytp-ad-skip-button');
  if (button) {
    button.click();
  }
});

observer.observe(document.body, { childList: true, subtree: true }); 