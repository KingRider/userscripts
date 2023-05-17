// ==UserScript==
// @name         Anti Adblock Detector
// @namespace    http://sandroalvares.com.br
// @version      0.455
// @description  So you can continue browsing ad-free
// @author       KingRider
// @match        http*://*/*
// @exclude      http*://*.google.com/*
// @exclude      http*://github.com/*
// @exclude      http*://*.youtube.com/*
// @exclude      http*://*.playplus.com/*
// @exclude      http*://twitter.com/*
// @exclude      http*://*.ultimatix.*/*
// @exclude      http*://legacygames.com/*
// @exclude      http*://xvideos.com/*
// @exclude      http*://*.gov.br/*
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

    var conta_anti = 0;
    var tempo_anti = setInterval(function() {

        // TVfree
        for (var adb1 = 0; adb1 < document.querySelectorAll('h3').length; adb1++) {
            if (document.querySelectorAll('h3')[adb1]) {
                if (document.querySelectorAll('h3')[adb1].innerText.indexOf('Adblock Detected') > 0 && document.querySelectorAll('h3')[adb1].parentElement.parentElement.parentElement.style.display != 'none') {
                    document.querySelectorAll('h3')[adb1].parentElement.parentElement.parentElement.style.display = 'none';
                    quebrascroll();
                }
            }
        }

        // https://megacanaisonline.me/
        for (var adb2 = 0; adb2 < document.querySelectorAll('h2').length; adb2++) {
            if (document.querySelectorAll('h2')[adb2]) {
                if (document.querySelectorAll('h2')[adb2].innerText.indexOf('Adblock Detected') > 0 && document.querySelectorAll('h2')[adb2].parentElement.parentElement.parentElement.parentElement.style.display != 'none') {
                    document.querySelectorAll('h2')[adb2].parentElement.parentElement.style.display = 'none';
                    quebrascroll();
                }
            }
        }

/*
        // dailymotion (não funcionado desbloquear pop e estou trabalhando)
        for (var adb3 = 0; adb3 < document.querySelectorAll('span').length; adb3++) {
            if (document.querySelectorAll('span')[adb3]) {
                if (document.querySelectorAll('span')[adb3].innerText.indexOf('ncios detectado') >= 0 && document.querySelectorAll('span')[adb3].parentElement.parentElement.parentElement.parentElement.style.display != 'none') {
                    document.querySelectorAll('span')[adb3].parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
                    //var temp = document.querySelectorAll('span')[adb3]; temp.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(temp);
                }
            }
        }
*/

        for (var adb4 = 0; adb4 < document.querySelectorAll('div').length; adb4++) {
            if (document.querySelectorAll('div')[adb4]) {
                if (document.querySelectorAll('div')[adb4].innerText.indexOf('Adblock') > 0) {
                    document.querySelectorAll('div')[adb4].style.display = 'none';
                    quebrascroll();
                }
            }
        }

        // Project mdpDeblocker
        function check() {};
        function requestAnimationFrame() {};
        function devtoolIsOpening() {};
        document.body.style.filter = '';
        document.body.style.webkitFilter = '';
        for (var sscript = 0; document.querySelectorAll('script').length > sscript; sscript++) {
            if (document.querySelectorAll('script')[sscript].innerText.indexOf('Anti-adblock') > 0) {
                document.querySelectorAll('script')[sscript].remove();
            }
            if (document.querySelectorAll('script')[sscript].innerText.indexOf('|Adblock') > 0) {
                document.querySelectorAll('script')[sscript].remove();
            }
        }
        for (var sstyle = 0; document.querySelectorAll('style').length > sstyle; sstyle++) {
            if (document.querySelectorAll('style')[sstyle].innerText.indexOf('Anti-adblock') > 0) {
                document.querySelectorAll('style')[sstyle].remove();
            }
            if (document.querySelectorAll('style')[sstyle].innerText.indexOf('blur') > 0) {
                document.querySelectorAll('style')[sstyle].remove();
            }
        }
        for (var blur = 0; document.querySelectorAll('div').length > blur; blur++) {
            if (document.querySelectorAll('div')[blur].style.filter !== '') {
                document.querySelectorAll('div')[blur].style.filter = '';
                document.querySelectorAll('div')[blur].style.webkitFilter = '';
            }
        }
        for (var blur2 = 0; document.querySelectorAll('span').length > blur2; blur2++) {
            if (document.querySelectorAll('span')[blur2].style.filter !== '') {
                document.querySelectorAll('span')[blur2].style.filter = '';
                document.querySelectorAll('span')[blur2].style.webkitFilter = '';
            }
        }
        for (var blur3 = 0; document.querySelectorAll('p').length > blur3; blur3++) {
            if (document.querySelectorAll('p')[blur3].style.filter !== '') {
                document.querySelectorAll('p')[blur3].style.filter = '';
                document.querySelectorAll('p')[blur3].style.webkitFilter = '';
            }
        }
        //botao X
        for (var ads = 0; document.querySelectorAll('[id*="ads-"]').length > ads; ads++) {
            if (document.querySelectorAll('[id*="ads-"]')[ads] !== '') {
                document.querySelectorAll('[id*="ads-"]')[ads].parentElement.remove();
            }
        }
        //document.querySelector('style#mdpDeblocker-css').remove();
        /*
        for (var mdp = 0; document.querySelectorAll('[id*="mdpDeblocker-"]').length > mdp; mdp++) {
            if (document.querySelectorAll('[id*="mdpDeblocker-css"]')[mdp] !== '') {
                document.querySelectorAll('[id*="mdpDeblocker-css"]')[mdp].remove();
            }
        }
        for (var mdp2 = 0; document.querySelectorAll('[class*="mdpDeblocker-css"]').length > mdp2; mdp2++) {
            if (document.querySelectorAll('[class*="mdpDeblocker-css"]')[mdp2] !== '') {
                document.querySelectorAll('[class*="mdpDeblocker-css"]')[mdp2].remove();
            }
        }
        */

        function quebrascroll() {
            var style=document.createElement('style');
            style.innerHTML='*{user-select: auto !important;} ::selection{background-color: blue !important; color: white !important}';
            document.body.appendChild(style);
            document.querySelector('html').style.cssText = 'overflow:initial!important;';
            document.body.style.cssText = 'overflow:initial!important;';
            document.body.onselectstart=function(){return true};
            document.body.oncontextmenu=function(){return true};
            document.body.onmousedown=function(){return true};
            document.onkeydown=function(){return true};
        }

        if (conta_anti >= 100) {
            clearInterval(tempo_anti);
            console.log('Terminado!');
        }
        conta_anti++;

    }, 800);

})();
