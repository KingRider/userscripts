// ==UserScript==
// @name         Anti Adblock Detector
// @namespace    http://sandroalvares.com.br
// @version      0.1
// @description  So you can continue browsing ad-free
// @author       KingRider
// @match        http*://*/*
// @exclude      https://docs.google.com/*
// @exclude      https://translate.google.com/*
// @grant        none

// @updateURL     https://github.com/KingRider/userscripts/raw/master/Anti%20Adblock%20Detector.user.js
// @downloadURL   https://github.com/KingRider/userscripts/raw/master/Anti%20Adblock%20Detector.user.js

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
