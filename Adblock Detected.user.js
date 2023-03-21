// ==UserScript==
// @name         Adblock Anti-Detected
// @namespace    http://sandroalvares.com.br
// @version      0.1
// @description  Adblock Anti-detector retirar a tela vermelha
// @author       KingRider
// @match        http*://*/*
// @exclude      https://docs.google.com/*
// @exclude      https://translate.google.com/*
// @grant        none

// @updateURL     0
// @downloadURL   0

// ==/UserScript==

(function() {

    setInterval(function() {

        for (var adb = 0; adb < document.querySelectorAll('div h3').length; adb++) {
            if (document.querySelectorAll('div h3')[adb]) {
                if (document.querySelectorAll('div h3')[adb].innerText == 'Adblock Detected' && document.querySelectorAll('div h3')[adb].parentElement.parentElement.parentElement.style.display != 'none') {
                    document.querySelectorAll('div h3')[adb].parentElement.parentElement.parentElement.style.display = 'none';
                }
            }
        }

    }, 800);

})();
