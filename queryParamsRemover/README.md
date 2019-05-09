# Query Params Remover
## Browser extension to remove fbclid and utm_ query params from URLs before they load.
For now, the full list of query params that get stripped out of URLs are "fbclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", and "utm_brand".

--- 

### Firefox installation
This is working and usable right now. It still needs to be signed via [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) before you can "actually" install it locally or via the AMO site... just gonna do temporary loading for now.
1. Go to "about:debugging" in the URL bar
2. Click "Load Temporary Add-on"
3. Navigate to the folder of the add-on / extension you want to install
4. Double click on `manifest.json` and it should load and show up in your add-ons list

Note - This is just temporary loading/installing, so it will be uninstalled every time the browser exits. Damn it Mozilla :(.

--- 
### Chrome/Chromium/Brave installation
1. Menu -> "More Tools" -> Extensions menu
2. Toggle Developer mode on
3. Click "Load unpacked"
4. Click and "Open" on the folder of the add-on you want to install in dev mode 

This should stay installed even when exiting / restarting. Might get a notification pop up warning you about dev mode though. 