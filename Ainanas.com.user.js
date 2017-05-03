// ==UserScript==
// @name         Ainanas.com
// @namespace    http://sandroalvares.com.br
// @version      v1.01
// @description  Mais Fotos com clicada e menos propaganda
// @author       KingRider
// @match        http://*.ainanas.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    $('#postxt a:nth(0)').hide();
    $('div#sidebar').hide();
    $('p span strong').click();
})();