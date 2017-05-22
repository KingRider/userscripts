// ==UserScript==
// @name         YoutubeAudio
// @namespace    http://sandroalvares.com.br
// @version      v2.01
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
        sahide('div[class*="player-api"]'); // Hidden video
        sahide('div[id*="theater-background"]'); // Hidden background from video
        sahide('div[id*="sidebar-contents"]'); // Hidden Sidebar near playlist

        /*
        sahide('div[class^="player"]');
        //sahide('#movie_player'); // not exist and before version exist
        sahide('div[id*="related"]');
        //sahide('div[id^="placeholder-player"]', 1);
        */
    }

    //-- FUNC HIDDEN
    function sahide(elem, tipo = 0) {
        var satipo = '';
        var saelem = document.querySelectorAll(elem);
        for (sah=0; sah < saelem.length; sah++) {
            if (saelem[sah]) {
                if (tipo === 0) {
                    if (saelem[sah].style.visibility != 'hidden') {
                        saelem[sah].style.visibility = 'hidden';
                        satipo = 'hidden [ON]';
                    } else {
                        saelem[sah].style.visibility = '';
                        satipo = 'hidden [OFF]';
                    }
                } else {
                    if (saelem[sah].style.display != 'none') {
                        saelem[sah].style.display = 'none';
                        satipo = 'none [ON]';
                    } else {
                        saelem[sah].style.display = '';
                        satipo = 'none [OFF]';
                    }
                }
                console.log(elem + ' / ' + tipo + ' / ' + satipo);
            } else {
                console.log("Erro: " + elem);
            }
        }
    }
})();