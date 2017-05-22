// ==UserScript==
// @name         YoutubeAudio
// @namespace    http://sandroalvares.com.br
// @version      v2.0
// @description  Youtube Audio without video
// @author       KingRider
// @match        https://*.youtube.com/watch*
// @match        http://*.youtube.com/watch*
// @require      http://code.jquery.com/jquery-1.9.1.min.js
// @updateURL    https://github.com/KingRider/userscripts/raw/master/YoutubeAudio.user.js
// @downloadURL  https://github.com/KingRider/userscripts/raw/master/YoutubeAudio.user.js
// ==/UserScript==

(function() {
    //(window.getComputedStyle(savideo, null).getPropertyValue('visibility') == 'visible')

    //-- LOOP
    var removervideo = setInterval(function() { satela(); clearInterval(removervideo); }, 1000);

    //-- KEY Q
    $(window).bind('keypress', function(e) {
        var code = e.keyCode || e.which;
        var control = e.ctrlKey || e.metaKey;
        if (code == 17 && control) { satela(); }
    });

    //-- HIDE ADS & VIDEO
    function satela() {
        sahide(document.querySelectorAll('.player-api'));
        sahide(document.querySelectorAll('#player'));
        sahide(document.querySelectorAll('#movie_player'));
        sahide(document.querySelectorAll('div[id*="related"]'));
        sahide(document.querySelectorAll('div[id*="sidebar-contents"]'));
    }

    //-- FUNC HIDDEN
    function sahide(elem) {
        for (sah=0; sah < elem.length; sah++) {
            if (elem[sah]) {
                if (elem[sah].style.visibility != 'hidden') {
                    elem[sah].style.visibility = 'hidden';
                } else {
                    elem[sah].style.visibility = '';
                }
            } else {
                console.log("Erro: " + elem);
            }
        }
    }
})();