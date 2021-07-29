// ==UserScript==
// @name         Mostrar a senha F8
// @namespace    http://sandroalvares.com.br
// @version      1.52
// @description  Mostrar a senha para alerta
// @author       KingRider
// @match        http*://*/*
// @exclude      https://docs.google.com/*
// @grant        none

// updateURL     https://github.com/KingRider/userscripts/raw/master/Mostrar%20a%20senha%20F8.user.js
// downloadURL   https://github.com/KingRider/userscripts/raw/master/Mostrar%20a%20senha%20F8.user.js

// ==/UserScript==

(function() {

    document.onkeydown = function(evt) {
        document.onkeyup = function(event) {
            if (event.key == "F2" || event.keyCode == 119){ // https://keycode.info/
                if (document.querySelectorAll('input[type=password]')[0].value != "") {
                    var x = 0, texto = "";
                    for (x=0; x<document.querySelectorAll('input[type=password]').length; x++) {
                        texto += (x+1)+"º) "+document.querySelectorAll('input[type=password]')[x].value+"\r\n";
                    }
                    alert(texto);
                    /*
                    if (document.querySelectorAll('input[type=password]').length==1) {
                        alert(document.querySelectorAll('input[type=password]')[0].value);
                    } else {
                        if (document.querySelectorAll('input[type=password]').length>1 || document.querySelectorAll('input[type=password]').length!=0) {
                            alert("Tem mais campo da senha são "+document.querySelectorAll('input[type=password]').length);
                        }
                    }
                    */
                }
            }
        }
    };

})();
