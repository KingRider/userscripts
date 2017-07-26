// ==UserScript==
// @name         Exames - Abril.com.br - Anti-Ad-Blocker
// @namespace    http://sandroalvares.com.br
// @version      0.1
// @description  anti-pop-adblocker
// @author       KingRider 2017
// @match        http://exame.abril.com.br/*
// @match        https://exame.abril.com.br/*
// @require      https://code.jquery.com/jquery-1.9.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    setInterval(function() {
        if ($('div.tp\-modal')) $('div.tp\-modal').remove();
        if ($('[id^=abrAD]')) $('[id^=abrAD]').remove();
    }, 1000);
})();