// ==UserScript==
// @name         Discord - Fast Text
// @namespace    http://sandroalvares.com.br
// @version      0.1
// @description  try to take over the world!
// @author       KingRider 2017
// @match        http://*.discordapp.com/channels/*
// @match        https://*.discordapp.com/channels/*
// @require      http://code.jquery.com/jquery-1.9.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    $(window).bind('keypress', function(e) {
        var code = e.keyCode || e.which;
        var control = e.ctrlKey || e.metaKey;
        if (code == 17 && control) {
            //var tempo = new Date();
            //document.querySelector('textarea').value = 'LF @Magicite :magicite: :magicite: ['+tempo.getTime()+']';
            $('textarea').val('LF @Magicite :magicite: :magicite: ['+$.now()+']');
        }
    });
})();