/**
 * Trying to switch logos from news sites to the Onion and Clickhole logos lol
 */

let apiInterface = (typeof browser != "undefined") ? browser : chrome;

let clickholeLogo1 = apiInterface.runtime.getURL("images/clickholelogo.png");
let clickholeLogo2 = apiInterface.runtime.getURL("images/clickholeLogo2.png");
let onionLogo = apiInterface.runtime.getURL("images/TheOnionLogo.png");
let resistanceHoleLogo = apiInterface.runtime.getURL("images/resistanceHoleLogo.png");
let patriotHoleLogo = apiInterface.runtime.getURL("images/patriotHoleLogo.png");

// ok cool yeah this works
alert(onionLogo);
