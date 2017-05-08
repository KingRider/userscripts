// ==UserScript==
// @name         YoutubeAudio
// @namespace    http://sandroalvares.com.br
// @version      v1.31
// @description  Youtube Audio without video
// @author       KingRider
// @match        https://*.youtube.com/watch*
// @match        http://*.youtube.com/watch*
// @require      http://code.jquery.com/jquery-1.9.1.min.js
// @updateURL    https://github.com/KingRider/userscripts/raw/master/Google%20Anti-SEO%20Links.user.js
// @downloadURL  https://github.com/KingRider/userscripts/raw/master/Google%20Anti-SEO%20Links.user.js
// ==/UserScript==

(function() {
    //(window.getComputedStyle(savideo, null).getPropertyValue('visibility') == 'visible')

    var removervideo = setInterval(function() { satela(); clearInterval(removervideo); }, 1000);
    $(window).bind('keypress', function(e) {
        var code = e.keyCode || e.which;
        var control = e.ctrlKey || e.metaKey;
        if (code == 17 && control) { satela(); }
    });

    function satela() {
        var savideo1 = document.querySelectorAll('#player');
        for (vd1=0;vd1 < savideo1.length; vd1++) {
            if (savideo1[vd1].style.visibility != 'hidden') {
                savideo1[vd1].style.visibility = 'hidden';
            } else {
                savideo1[vd1].style.visibility = '';
            }
        }
        var savideo2 = document.querySelectorAll('#movie_player');
        for (vd2=0;vd2 < savideo2.length; vd2++) {
            if (savideo2[vd2].style.visibility != 'hidden') {
                savideo2[vd2].style.visibility = 'hidden';
            } else {
                savideo2[vd2].style.visibility = '';
            }
        }
        if (document.getElementById('related').style.visibility != 'hidden') {
            document.getElementById('related').style.visibility = 'hidden';
        } else {
            document.getElementById('related').style.visibility = '';
        }
        /*if (document.getElementById('watch7-container').style.visibility != 'hidden') {
            document.getElementById('watch7-container').style.visibility = 'hidden';
        } else {
            document.getElementById('watch7-container').style.visibility = '';
        }*/
    }
})();