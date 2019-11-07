// ==UserScript==
// @name         PixLR Editor - Ads Removed
// @namespace    http://www.sandroalvares.com.br
// @version      0.26
// @date         07-nov-2019
// @description  PixLR Editor - Ads Removed
// @author       Sandro Alvares
// @match        https://pixlr.com/editor/
// @grant        none
// ==/UserScript==

(function() {
	$('body').removeProp();
	setTimeout(function() {
		if ($('body').css('padding-right')) {
			$('body').css('padding-right', 'initial').css('min-height','0px').css('margin','0');
			$('div[class^=ad]').remove();
		}
		if ($('iframe').length > 0) { $('iframe').remove(); }
	}, 1000);
})();
