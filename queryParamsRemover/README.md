# Query Params Remover
## Browser extension to remove fbclid and "utm_" query params from URLs before they load.

FBclid - Facebook Click Identifier - https://fbclid.com/

utm - Urchin Tracking Module - https://en.wikipedia.org/wiki/UTM_parameters

The full list of query params that get stripped out of URLs are (for now):
- fbclid, 
- gclid, 
- gclsrc, 
- ysclid, 
- dclid, 
- zanpid, 
- msclkid, 
- mc_eid, 
- caff, 
- _openstat, 
- _hsmi, 
- _hsenc, 
- spm, 
- spm_id_from, 
- pf_rd_r, 
- pf_rd_m, 
- pf_rd_i, 
- pf_rd_s, 
- pf_rd_t, 
- pf_rd_p, 
- partner, 
- utm_source, 
- utm_medium, 
- utm_term, 
- utm_campaign, 
- utm_content, 
- utm_name, 
- utm_id, 
- \_\_cft\_\_[0], 
- \_\_tn\_\_, 
- si"

---

### Firefox installation
Available on addons.mozilla.org as of August 2019.

https://addons.mozilla.org/en-US/firefox/addon/remove-fbclid-and-utm/

---
### Chrome / Chromium / Brave installation
1. Menu -> "More Tools" -> Extensions menu
2. Toggle Developer mode on
3. Click "Load unpacked"
4. Click and "Open" on the folder of the add-on you want to install in dev mode 

This should stay installed even when exiting / restarting. Might get a notification pop up warning you about dev mode though. 
Going to look into getting this on the Chrome store soon.

---
### TODOs
1. Add utm_referrer, ?ref, ?ref_url, ?ref_src
- Update - Maybe...these are all pretty fringe and not even requsted by users.
2. Add functionality to remove the FBclid from copying URLs via "Copy Link Location" (right-click menu).
- Update - I think Firefox is already doing this automatically now in their right click menu.
