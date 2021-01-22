// ==UserScript==
// @name         Mostrar a senha F8
// @namespace    http://sandroalvares.com.br
// @version      0.1
// @description  Mostrar a senha para alerta
// @author       KingRider
// @match        http*://*/*
// @exclude      https://docs.google.com/*
// @grant        none
// ==/UserScript==

(function() {

    document.onkeydown = function(evt) {
        document.onkeyup = function(event) {
            if (event.key == "F2" || event.keyCode == 119){ // https://keycode.info/
                if (document.querySelectorAll('input[type=password]')[0].value != "") {
                    if (document.querySelectorAll('input[type=password]').length==1) {
                        alert(document.querySelectorAll('input[type=password]')[0].value);
                    } else {
                        if (document.querySelectorAll('input[type=password]').length>1 || document.querySelectorAll('input[type=password]').length!=0) {
                            alert("Tem mais campo da senha são "+document.querySelectorAll('input[type=password]').length);
                        }
                    }
                }
            }
        }
    };

})();