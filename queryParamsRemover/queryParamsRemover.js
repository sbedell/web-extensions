/**
 *  Remove fbclid and utm_ query params 
 */

"use strict";

function stripBadQueryParams(request) {
  const targetQueryParams = [
    "fbclid",
    "gclid",
    "gclsrc",
    "ysclid",
    "dclid",
    "zanpid",
    "msclkid",
    "mc_eid",
    "caff",
    "_openstat",
    "_hsmi",
    "_hsenc",
    "spm",
    "spm_id_from",
    "pf_rd_r",
    "pf_rd_m",
    "pf_rd_i",
    "pf_rd_s",
    "pf_rd_t",
    "pf_rd_p",
    "partner",
    "utm_source",
    "utm_medium",
    "utm_term",
    "utm_campaign",
    "utm_content",
    "utm_name",
    "utm_id",
    "__cft__[0]",
    "__tn__",
    "si"
  ];

  let requestedUrl = new URL(request.url);
  let match = false;

  for (const paramName of targetQueryParams) {
    if (requestedUrl.searchParams.has(paramName)) {
      requestedUrl.searchParams.delete(paramName);
      match = true;
    }
  }

  // Return the stripped URL if a match is found. Otherwise, pass the URL on as normal {cancel: false}
  if (match) {
    return {
      redirectUrl: requestedUrl.href
    };
  } else {
    return {
      cancel: false
    };
  }
}

/**
*  Event listener for onBeforeRequest (HTTP Requests)
*
*  Info for the RequestFilter: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/RequestFilter
*  Info on Types: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/ResourceType
*
*/
const apiInterface = (typeof browser !== "undefined") ? browser : chrome;

apiInterface.webRequest.onBeforeRequest.addListener(
  stripBadQueryParams,
  {
    // Filters: Match all HTTP and HTTPS URLs.
    urls: ["http://*/*", "https://*/*"],
    types: ["main_frame", "sub_frame", "ping"]
  },
  ["blocking"]
);
