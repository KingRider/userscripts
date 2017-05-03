// ==UserScript==
// @name         YoutubeAudio
// @namespace    http://sandroalvares.com.br
// @version      v1.0
// @description  Youtube Audio without video
// @author       KingRider
// @match        https://*.youtube.com/*
// @match        http://*.youtube.com/*
// ==/UserScript==

(function() {
    var savideo = document.querySelector("div#player");
    setTimeout(function() {
        if (window.getComputedStyle(savideo, null).getPropertyValue("visibility") == "visible") {
            //savideo.style.display = 'none'; // Not work!
            savideo.style.visibility = 'hidden';
            /*document.querySelector("div.player-api").style.background = 'transparent';
            document.querySelector("div#placeholder-player").style.height = 0;*/
            document.getElementById("watch7-container").style.visibility = 'hidden';
        }
    }, 500);
})();