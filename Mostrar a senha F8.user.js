// ==UserScript==
// @name         Mostrar a senha F8
// @namespace    http://sandroalvares.com.br
// @version      2.0
// @description  Mostrar a senha para alerta
// @author       KingRider
// @match        http*://*/*
// @exclude      https://docs.google.com/*
// @exclude      https://translate.google.com/*
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
                        var x = 0, conta = 1; var texto = "";
                        for (x=0; x<document.querySelectorAll('input[type=password]').length; x++) {
                            if (document.querySelectorAll('input[type=password]')[x].value != "") {
                                texto += (conta)+"º) "+document.querySelectorAll('input[type=password]')[x].value+"\r\n";
                                conta++;
                            }
                        }
                        /*
                        var ativado = setInterval(function() {
                        */
                            if (document.querySelector('input[type="password"]').getAttribute('type') == 'password') {
                                document.querySelector('input[type="password"]').setAttribute('type','text');
                            }
                        /*
                            if (document.querySelector('input[type="password"]').getAttribute('type') == 'text') {
                                clearInterval(ativado);
                            }
                        }, 1500);
                        */
                        alert(texto);
                        clearInterval(tempof8);
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
    }, 1000);

})();
