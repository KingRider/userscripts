// ==UserScript==
// @name         Mostrar a senha F8
// @namespace    http://sandroalvares.com.br
// @version      2.5
// @description  Mostrar a senha para alerta
// @author       KingRider
// @match        *://*/*
// @exclude      *://*.google.com/*
// @exclude      *://*.twitch.tv/*
// @exclude      *://*.ext-twitch.tv/*
// @exclude      *://*.ttvnw.net/*
// @grant        none

// @updateURL     https://github.com/KingRider/userscripts/raw/master/Mostrar%20a%20senha%20F8.user.js
// @downloadURL   https://github.com/KingRider/userscripts/raw/master/Mostrar%20a%20senha%20F8.user.js

// ==/UserScript==

(function() {

    var tempof8 = setInterval(function() {
        document.onkeydown = function(evt) {
            document.onkeyup = function(event) {
                if (event.key == "F2" || event.keyCode == 119){ // https://keycode.info/
                    if (document.querySelectorAll('input[type=password]').length > 0) {
                        for (var x=0; x < document.querySelectorAll('input[type=password]').length; x++) {
                            //document.querySelectorAll('input[type=password]')[x].type = 'senha';
                            if (document.querySelectorAll('input[type=password]')[x].getAttribute('type') == 'password') {
                                document.querySelectorAll('input[type=password]')[x].setAttribute('type', 'text');
                            }
                        }
                        clearInterval(tempof8);
                    }
                }
            }
        };
    }, 1000);

})();
