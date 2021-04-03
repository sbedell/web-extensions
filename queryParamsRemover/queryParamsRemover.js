/**
 *  Remove fbclid and utm_ query params 
 */

"use strict";

function stripBadQueryParams(request) {
  // console.log("Intercepting this request: ", JSON.stringify(request));
  const targetQueryParams = ["fbclid", "gclid", "utm_source", "utm_medium", "utm_term",
                            "utm_campaign",  "utm_content", "utm_name"];

  let requestedUrl = new URL(request.url);
  let match = false;

  targetQueryParams.forEach(name => {
    if (requestedUrl.searchParams.has(name)) {
      requestedUrl.searchParams.delete(name);
      match = true;
    }
  });

  // Return the stripped URL if a match is found. Otherwise, pass the URL on as normal {cancel: false}
  return match ? {redirectUrl: requestedUrl.href} : {cancel: false};
}

/** 
*  Event listener for onBeforeRequest (HTTP Requests)
*  
*  Info for the RequestFilter: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter
*  Info on Types: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/ResourceType
*  
*/
const apiInterface = (typeof browser != "undefined") ? browser : chrome;

apiInterface.webRequest.onBeforeRequest.addListener(
  stripBadQueryParams,
  {
    // Filters: Match all HTTP and HTTPS URLs.
    urls: ["http://*/*", "https://*/*"],
    types: ["main_frame", "sub_frame", "ping"]
  },
  ["blocking"]
);
