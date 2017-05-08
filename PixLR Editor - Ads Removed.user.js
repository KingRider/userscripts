// ==UserScript==
// @name         PixLR Editor - Ads Removed
// @namespace    http://www.sandroalvares.com.br
// @version      0.21
// @description  PixLR Editor - Ads Removed
// @author       Sandro Alvares
// @match        https://pixlr.com/editor/
// @grant        none
// ==/UserScript==

(function() {
    $('body').removeProp();
	setTimeout(function() {
		if ($('body').css('padding-right')) {
			$('body').css('padding-right', 'initial');
		}
	}, 1000);
})();