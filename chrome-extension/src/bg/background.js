var HTTPS_PROTOCOL = 'https://';
var HTTP_PROTOCOL = 'http://';

function isHttp(string) {
  return string.indexOf(HTTP_PROTOCOL) === 0;
}

function getProtocol(url) {
  if (isHttp(url)) {
    return HTTP_PROTOCOL;
  }
  return HTTPS_PROTOCOL;
}

chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    for (var i = 0; i < details.responseHeaders.length; ++i) {
      if (details.responseHeaders[i].name.toLowerCase() == 'x-frame-options') {
        details.responseHeaders.splice(i, 1);
        return {
          responseHeaders: details.responseHeaders
        };
      }
    }
  },
  {
    urls: ['<all_urls>']
  },
  ['blocking', 'responseHeaders']
);

chrome.browserAction.onClicked.addListener(function(tab) {
  var protocol = getProtocol(tab.url);
  var sizzyUrl = protocol + 'sizzy.co' + '?url=' + tab.url;
  chrome.tabs.create({url: sizzyUrl});
});
