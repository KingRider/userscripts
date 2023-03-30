// ==UserScript==
// @name         Anti Adblock Detector
// @namespace    http://sandroalvares.com.br
// @version      0.38
// @description  So you can continue browsing ad-free
// @author       KingRider
// @match        http*://*/*
// @exclude      http*://*.google.com/*
// @exclude      http*://*.github.com/*
// @exclude      http*://*.youtube.com/*
// @exclude      http*://*.playplus.com/*
// @grant        none

// @updateURL     https://github.com/KingRider/userscripts/raw/master/Anti%20Adblock%20Detector.user.js
// @downloadURL   https://github.com/KingRider/userscripts/raw/master/Anti%20Adblock%20Detector.user.js

// ==/UserScript==

(function() {

    //
    // Chrome Extension (depends on whether your browser is working? if not use here code with TamperMonkey):
    // https://chrome.google.com/webstore/detail/anti-adblock-detector/kjhdffcfinhkdfbbhjlfoadcdfgihmlp?hl=pt-BR
    //
    // TamperMonkey Extension:
    // https://www.google.com/search?q=tampermonkey

    setInterval(function() {

        for (var adb1 = 0; adb1 < document.querySelectorAll('h3').length; adb1++) {
            if (document.querySelectorAll('h3')[adb1]) {
                if (document.querySelectorAll('h3')[adb1].innerText.indexOf('Adblock Detected') >= 0 && document.querySelectorAll('h3')[adb1].parentElement.parentElement.parentElement.style.display != 'none') {
                    document.querySelectorAll('h3')[adb1].parentElement.parentElement.parentElement.style.display = 'none';
                }
            }
        }
        for (var adb2 = 0; adb2 < document.querySelectorAll('h2').length; adb2++) {
            if (document.querySelectorAll('h2')[adb2]) {
                if (document.querySelectorAll('h2')[adb2].innerText.indexOf('Adblock Detected') >= 0 && document.querySelectorAll('h2')[adb2].parentElement.parentElement.parentElement.parentElement.style.display != 'none') {
                    document.querySelectorAll('h2')[adb2].parentElement.parentElement.parentElement.parentElement.style.display = 'none';
                }
            }
        }
        for (var adb3 = 0; adb3 < document.querySelectorAll('span').length; adb3++) {
            if (document.querySelectorAll('span')[adb3]) {
                if (document.querySelectorAll('span')[adb3].innerText.indexOf('ncios detectado') >= 0 && document.querySelectorAll('span')[adb3].parentElement.parentElement.parentElement.parentElement.style.display != 'none') {
                    document.querySelectorAll('span')[adb3].parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
                }
            }
        }

        (function() {
            var style=document.createElement('style');
            style.innerHTML='*{user-select: auto !important;} ::selection{background-color: blue !important; color: white !important}';
            document.body.appendChild(style);
            document.body.style.cssText = 'overflow:initial!important;';
            document.body.onselectstart=function(){return true};
            document.body.oncontextmenu=function(){return true};
            document.body.onmousedown=function(){return true};
            document.onkeydown=function(){return true};
        })();

    }, 800);

})();
