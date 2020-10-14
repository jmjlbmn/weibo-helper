document.addEventListener('DOMContentLoaded', function () {
    if (location.host == 't.cn') {
        chrome.storage.sync.get({ auto: false }, function (items) {
            if (items.auto) {
                var link = document.querySelectorAll('p.link');
                if (link.length == 1) {
                    let a = document.createElement("a");
                    a.href = link[0].innerText;
                    a.click();
                }
            }
        });
    }
});