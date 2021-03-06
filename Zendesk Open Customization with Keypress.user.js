// ==UserScript==
// @name         Zendesk Open Customization with Keypress
// @namespace    http://sandroalvares.com.br
// @version      v1.0
// @description  Open Admin Page Customization to press key CTRL+Q
// @author       KingRider
// @match        http://*.zendesk.com/hc/*
// @match        https://*.zendesk.com/hc/*
// @match        http://taskcenter.mega.com.br/hc/*
// @match        https://taskcenter.mega.com.br/hc/*
// @exclude      http://*.zendesk.com/hc/admin/*
// @exclude      https://*.zendesk.com/hc/admin/*
// @require      http://code.jquery.com/jquery-1.9.1.min.js
// ==/UserScript==

(function() {
    $(window).bind('keypress', function(e) {
        var code = e.keyCode || e.which;
        var control = e.ctrlKey || e.metaKey;
        if (code == 17 && control) {
            window.location.href = '/hc/admin/appearance#editor';
        }
    });
})();