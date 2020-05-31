const uuid = "FCFB2A52_C7DC_4B44_B242_0DC15B13CA12";

chrome.browserAction.onClicked.addListener(function (tab) {
    if (!tab.url.match(/^(http|https|ftp|file)/)) {
        alert("Can't hide fixed elements in this type of page.");
        return;
    }
    chrome.tabs.executeScript(tab.id, {
        "code": "window." + uuid
    }, function (r) {
        if (chrome.runtime.lastError) {
            alert("Unable to communicate with tab:\n" + chrome.runtime.lastError.message);
            return;
        }
        var toggle = function() {
            if (chrome.runtime.lastError) {
                alert("Unable to communicate with tab:\n" + chrome.runtime.lastError.message);
                return;
            }
            chrome.tabs.sendMessage(tab.id, uuid + ":toggle");
        };
        if (r[0]) {
            toggle();
        } else {
            chrome.tabs.executeScript(tab.id, {
                "file": "content.js"
            }, toggle);
        }
    });
});
