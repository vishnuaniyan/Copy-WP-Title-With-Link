// File 2: background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, {action: "getContent"});
  });
  