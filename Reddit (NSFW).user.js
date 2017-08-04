// ==UserScript==
// @name         Reddit (NSFW)
// @namespace    http://sandroalvares.com.br
// @version      v0.1
// @description  Reddit - Community - Forum
// @author       KingRider
// @match        http://www.reddit.com/r/*
// @match        https://www.reddit.com/r/*
// @require      https://code.jquery.com/jquery-1.9.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    $('div#header-bottom-left img').hide();
    $('div.usertext-body.may-blank-within.md-container div.md p a').hide();
})();