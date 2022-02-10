// ==UserScript==
// @name         PixLR Editor - Ads Removed
// @namespace    http://www.sandroalvares.com.br
// @version      0.35
// @description  PixLR Editor - Ads Removed
// @author       Sandro Alvares
// @match        http*://pixlr.com/br/e/
// @grant        none

// @updateURL    https://github.com/KingRider/userscripts/raw/master/PixLR%20Editor%20-%20Ads%20Removed.user.js
// @downloadURL  https://github.com/KingRider/userscripts/raw/master/PixLR%20Editor%20-%20Ads%20Removed.user.js

// ==/UserScript==

(function() {
	//$('body').removeProp();
	var tempo = setInterval(function() {
		/*
        if ($('body').css('padding-right')) {
			$('body').css('padding-right', 'initial').css('min-height','0px').css('margin','0');
			$('div[class^=ad]').remove();
		}
        */
        if (document.querySelectorAll('div#right\-space').length > 0) {
            document.querySelectorAll('div#right\-space')[0].style.display = 'none';
            document.querySelectorAll('body div#workspace')[0].style.right = 0;
            clearInterval(tempo);
        }
		//if ($('iframe').length > 0) { $('iframe').remove(); }
	}, 1000);
})();
