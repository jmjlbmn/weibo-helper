chrome.webRequest.onBeforeRequest.addListener(
  req => {
    if (req.method == "GET" && req.url.startsWith("http://t.cn")) {
      return {
        redirectUrl: req.url.replace("http", "https")
      };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

console.log("load");
