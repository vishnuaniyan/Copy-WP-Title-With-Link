// File 3: content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getContent") {
      const title = getWordPressTitle();
      const url = window.location.href;
      const clipboardContent = `${title} - ${url}`;
      copyToClipboard(clipboardContent);
    }
  });
  
  function getWordPressTitle() {
    const titleElement = document.querySelector('h1.dtItle.HeadingMain1');
    return titleElement ? titleElement.textContent.trim() : '';
  }
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Title and URL copied to clipboard: ' + text);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }