// ==UserScript==
// @name         InfoJobs - Anti-Ad-Blocker
// @namespace    http://sandroalvares.com.br
// @version      0.2
// @description  try to take over the world!
// @author       KingRider 2016-2017
// @match        http://*.infojobs.com.br/*
// @match        https://*.infojobs.com.br/*
// @require      https://code.jquery.com/jquery-1.9.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    /*$.getScript = function(e) {
        console.log(e);
    }; */
    $('div.headerSEO div').hide();
    $('div.promoBanners').hide();
    $('div[class^="publicity"]').hide();
    $('section[class^="publicity"]').hide();
    $('iframe').hide();
})();