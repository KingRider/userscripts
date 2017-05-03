// ==UserScript==
// @name         YoutubeAudio
// @namespace    http://sandroalvares.com.br
// @version      v1.2
// @description  Youtube Audio without video
// @author       KingRider
// @match        https://*.youtube.com/watch*
// @match        http://*.youtube.com/watch*
// @require      http://code.jquery.com/jquery-1.9.1.min.js
// ==/UserScript==

(function() {
    var savideo = document.querySelector('div#player');
    setTimeout(function() {
        if (window.getComputedStyle(savideo, null).getPropertyValue('visibility') == 'visible') {
            //savideo.style.display = 'none'; // Not work!
            savideo.style.visibility = 'hidden';
            /*document.querySelector('div.player-api').style.background = 'transparent';
            document.querySelector('div#placeholder-player').style.height = 0;*/
            document.getElementById('watch7-container').style.visibility = 'hidden';
        }
    }, 500);
    $(window).bind('keypress', function(e) {
        var code = e.keyCode || e.which;
        var control = e.ctrlKey || e.metaKey;
        if (code == 17 && control) {
            if ($('div#player').css('visibility') == 'hidden') {
                $('div#player').css('visibility', '');
                $('div#watch7-container').css('visibility', '');
            } else {
                $('div#player').css('visibility', 'hidden');
                $('div#watch7-container').css('visibility', 'hidden');
            }
        }
    });
})();