// ==UserScript==
// @name         Canal Globo - Ao Vivo
// @namespace    http://sandroalvares.com.br
// @version      0.1
// @description  Aplicar o video para janela 100%
// @author       KingRider
// @match        http://*.globo.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    setInterval(function() {
        /*if ($('div.player-wrapper-container')) {
            $('div.player-wrapper-container').css({'overflow':'hidden', 'position':'static', 'top':'0px', 'left':'0px', 'width':'100%', 'height':'100%', 'z-index':'9999'});
        }*/
        if ($('.player-section .player-wrapper, .player-section .player-wrapper-container')) {
            $('body').css('overflow','hidden');
            $('.player-section .player-wrapper, .player-section .player-wrapper-container').css('position', 'static');
        }
        if ($('div.clappr-player')) {
            if ($('div.clappr-player').css('z-index') == "0") {
                $('body').css('overflow','hidden');
                $('div.clappr-player').css({'overflow':'hidden', 'position':'absolute', 'top':'0px', 'left':'0px', 'width':'100%', 'height':'100%', 'z-index':'9999'});
            }
        }
    }, 500);
})();