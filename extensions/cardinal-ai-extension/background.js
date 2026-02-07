chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({
    url: chrome.runtime.getURL("cardinal-ai.html")
  });
});