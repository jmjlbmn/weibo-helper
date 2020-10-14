window.config = { https: false, auto: true };

chrome.storage.sync.get(config, function (items) {
  window.config = items;
  chrome.storage.sync.set(items);
});
chrome.webRequest.onBeforeRequest.addListener(
  details => {
    if (window.config.https) {
      if (details.method == "GET" && details.url.startsWith("http://t.cn")) {
        return {
          redirectUrl: details.url.replace("http", "https")
        };
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
