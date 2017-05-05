// ==UserScript==
// @name         Zendesk Custom Previewer with keypress
// @namespace    http://sandroalvares.com.br
// @version      v1.0
// @description  Page Customization to execute preview with ur key press Ctrl+Q
// @author       KingRider
// @match        https://*.zendesk.com/hc/admin/appearance*
// @match        http://*.zendesk.com/hc/admin/appearance*
// @require      http://code.jquery.com/jquery-1.9.1.min.js
// ==/UserScript==

(function() {
    for (x=0; x < frames.length; x++) {
        if (frames[x].frameElement.id == 'preview-frame') {
            janela = frames[x].frameElement.src;
        }
    }
    $(window).bind('keypress', function(e) {
        var code = e.keyCode || e.which;
        var control = e.ctrlKey || e.metaKey;
        if (code == 17 && control && janela) {
            window.open(janela);
        }
    });
})();