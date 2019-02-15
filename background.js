
// chrome.runtime.onInstalled.addListener(function() {
//   // add an action here
// });
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'github.com'},
    })
    ],
        actions: [new chrome.declarativeContent.RequestContentScript({"js":["abc.js"]})]
  }]);
});
