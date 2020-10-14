document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get({ https: false, auto: true }, function (items) {
        document.getElementById('https').checked = items.https;
        document.getElementById('auto').checked = items.auto;
    });
});
document.getElementById('https').addEventListener('click', function () {
    const https = document.getElementById('https').checked;
    chrome.extension.getBackgroundPage().config.https = https;
    chrome.storage.sync.set({ https: https });
});
document.getElementById('auto').addEventListener('click', function () {
    const auto = document.getElementById('auto').checked;
    chrome.extension.getBackgroundPage().config.auto = auto;
    chrome.storage.sync.set({ auto: auto });
});