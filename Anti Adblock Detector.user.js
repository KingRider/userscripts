// ==UserScript==
// @name         Anti Adblock Detector
// @namespace    http://sandroalvares.com.br
// @version      0.60
// @description  So you can continue browsing ad-free
// @author       KingRider

// @match        *://*/*

// @exclude      *://*.google.com/*
// @exclude      *://github.com/*
// @exclude      *://*.playplus.com/*
// @exclude      *://twitter.com/*
// @exclude      *://*.ultimatix.*/*
// @exclude      *://legacygames.com/*
// @exclude      *://xvideos.com/*
// @exclude      *://*.gov.br/*
// @exclude      *://*.adblockplus.org/*
// @exclude      *://*.alienwarearena.com/*
// @exclude      *://greasyfork.org/*
// @exclude      *://*.amazon.com*/*
// @exclude      *://*.shein.com*/*
// @exclude      *://www.magazineluiza.com.br/*
// @exclude      *://*.youtube.*/*
// @exclude      *://happymod*.*/*
// @exclude      *://sanet.*/*
// @exclude      *://adguard.*/*
// @exclude      *://meutim.tim.com.br/*
// @exclude      *://*.nubank.com.br/*
// @exclude      *://*.kaspersky.*
// @exclude      *://tarisglobal.*
// @exclude      *://steamcommunity.com/*
// @exclude      *://rentry.org/*
// @exclude      *://*.correios.com.br/*
// @exclude      *://*.mercadolivre.com.br/*
// @exclude      *://surfshark.com/*
// @exclude      *://www.hardmob.com.br/threads/*
// @exclude      *://www.facebook.com/messages/*
// @exclude      *://x.com/*
// @exclude      *://*.apdata.com.br/*
// @exclude      *://shopee.com.br/*
// @exclude      *://shopee.com/*
// @exclude      *://*.steampowered.com/*
// @exclude      *://*.twitch.tv/*
// @exclude      *://*.ext-twitch.tv/*
// @exclude      *://*.ttvnw.net/*

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
        if (window.location.href.indexOf('tvfree') > 0) {
            for (var adb1 = 0; adb1 < document.querySelectorAll('h3').length; adb1++) {
                if (document.querySelectorAll('h3')[adb1]) {
                    if (document.querySelectorAll('h3')[adb1].innerText.toLowerCase().indexOf('adblock detected') > 0 && document.querySelectorAll('h3')[adb1].parentElement.parentElement.parentElement.style.display != 'none') {
                        document.querySelectorAll('h3')[adb1].parentElement.parentElement.parentElement.style.display = 'none';
                        console.log('adb1');
                        quebrascroll();
                    }
                }
            }
        }

        // https://megacanaisonline.me/
        if (window.location.href.indexOf('megacanaisonline') > 0) {
            for (var adb2 = 0; adb2 < document.querySelectorAll('h2').length; adb2++) {
                if (document.querySelectorAll('h2')[adb2]) {
                    if (document.querySelectorAll('h2')[adb2].innerText.toLowerCase().indexOf('adblock detected') > 0 && document.querySelectorAll('h2')[adb2].parentElement.parentElement.parentElement.parentElement.style.display != 'none') {
                        document.querySelectorAll('h2')[adb2].parentElement.parentElement.style.display = 'none';
                        console.log('adb2');
                        quebrascroll();
                    }
                }
            }
        }

/*
        // dailymotion (não funcionado desbloquear pop e estou trabalhando)
        for (var adb3 = 0; adb3 < document.querySelectorAll('span').length; adb3++) {
            if (document.querySelectorAll('span')[adb3]) {
                if (document.querySelectorAll('span')[adb3].innerText.toLowerCase().indexOf('ncios detectado') >= 0 && document.querySelectorAll('span')[adb3].parentElement.parentElement.parentElement.parentElement.style.display != 'none') {
                    document.querySelectorAll('span')[adb3].parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
                    //var temp = document.querySelectorAll('span')[adb3]; temp.parentElement.parentElement.parentElement.parentElement.parentElement.removeChild(temp);
                    console.log('dailymotion');
                }
            }
        }
*/

        for (var adb4 = 0; adb4 < document.querySelectorAll('div').length; adb4++) {
            if (document.querySelectorAll('div')[adb4] && !window.location.href.indexOf('wiki.fextralife.com') > 0) {
                if (document.querySelectorAll('div')[adb4].innerText.toLowerCase().indexOf('adblock') > 0) {
                    document.querySelectorAll('div')[adb4].style.display = 'none';
                    console.log('adb4');
                    quebrascroll();
                }
            }
            if (document.querySelectorAll('div')[adb4]) {
                if (document.querySelectorAll('div')[adb4].innerText.toLowerCase().indexOf('detectado') > 0) {
                    document.querySelectorAll('div')[adb4].style.display = 'none';
                    console.log('adb5');
                    quebrascroll();
                }
            }
        }

        // Youtube.com
        if (window.location.href.indexOf('youtube.com') > 0) {
            if (document.getElementsByClassName("style-scope ytd-popup-container").length >= 0) {
                if (document.getElementsByClassName("style-scope ytd-popup-container")[0].style.length >= 1) {
                    document.getElementsByClassName("style-scope ytd-popup-container")[0].remove();
                }
            }
        }

        // Wiki Fextralife .com
        if (window.location.href.indexOf('wiki.fextralife.com') > 0) {
            if (document.querySelector('form[action="/ws/authentication/logout"]')) {
                if (document.querySelector('form[action="/ws/authentication/logout"]').style.height != '100px') {
                    document.querySelector('form[action="/ws/authentication/logout"]').style.height = '100px';
                }
            }
            if (document.querySelector('div.fex-main div#wrapper').style.paddingLeft == '') {
                document.querySelector('div.fex-main div#wrapper').style.paddingLeft = 0;
            }
        }

        // Project mdpDeblocker (não utilize youtube.com)
        if (window.location.href.indexOf('youtube.com') == "-1") {

            function check() {};
            function requestAnimationFrame() {};
            function devtoolIsOpening() {};
            document.body.style.filter = '';
            document.body.style.webkitFilter = '';
            for (var sscript = 0; document.querySelectorAll('script').length > sscript; sscript++) {
                if (typeof(document.querySelectorAll('script')[sscript]).innerText != 'undefined') {
                    if (document.querySelectorAll('script')[sscript].innerText.toLowerCase().indexOf('anti-adblock') > 0) {
                        console.log('sscript1');
                        document.querySelectorAll('script')[sscript].remove();
                    }
                    if (document.querySelectorAll('script')[sscript].innerText.toLowerCase().indexOf('|adblock') > 0) {
                        console.log('sscript2');
                        document.querySelectorAll('script')[sscript].remove();
                    }
                    if (document.querySelectorAll('script')[sscript].innerText.toLowerCase().indexOf('blocker') > 0) {
                        console.log('sscript3');
                        document.querySelectorAll('script')[sscript].remove();
                    }
                }
            }
            for (var sstyle = 0; document.querySelectorAll('style').length > sstyle; sstyle++) {
                if (typeof(document.querySelectorAll('style')[sstyle]).innerText != 'undefined') {
                    if (document.querySelectorAll('style')[sstyle].innerText.toLowerCase().indexOf('anti-adblock') > 0) {
                        console.log('sstyle1', sstyle);
                        document.querySelectorAll('style')[sstyle].remove();
                    }
                    if (document.querySelectorAll('style')[sstyle].innerText.toLowerCase().indexOf('blur') > 0) {
                        console.log('sstyle2', sstyle);
                        document.querySelectorAll('style')[sstyle].innerText = document.querySelectorAll('style')[sstyle].innerText.replaceAll('blur', 'xlur');
                        //document.querySelectorAll('style')[sstyle].remove();
                    }
                }
            }
            for (var blur = 0; document.querySelectorAll('div').length > blur; blur++) {
                if (document.querySelectorAll('div')[blur].style.filter !== '') {
                    document.querySelectorAll('div')[blur].style.filter = '';
                    document.querySelectorAll('div')[blur].style.webkitFilter = '';
                    console.log('blur');
                }
            }
            for (var blur2 = 0; document.querySelectorAll('span').length > blur2; blur2++) {
                if (document.querySelectorAll('span')[blur2].style.filter !== '') {
                    document.querySelectorAll('span')[blur2].style.filter = '';
                    document.querySelectorAll('span')[blur2].style.webkitFilter = '';
                    console.log('blur2');
                }
            }
            for (var blur3 = 0; document.querySelectorAll('p').length > blur3; blur3++) {
                if (document.querySelectorAll('p')[blur3].style.filter !== '') {
                    document.querySelectorAll('p')[blur3].style.filter = '';
                    document.querySelectorAll('p')[blur3].style.webkitFilter = '';
                    console.log('blur3');
                }
            }
            //botao X
            /*
        for (var ads = 0; document.querySelectorAll('[id*="ads-"]').length > ads; ads++) {
            if (document.querySelectorAll('[id*="ads-"]')[ads] !== '') {
                //document.querySelectorAll('[id*="ads-"]')[ads].parentElement.remove();
                console.log('ads');
                document.querySelectorAll('[id*="ads-"]')[ads].remove();
            }
        }
        */
            /*
        if (document.querySelector('style#mdpDeblocker-css')) {
            console.log('style#mdp');
            document.querySelector('style#mdpDeblocker-css').remove();
        }
        */
            for (var mdp = 0; document.querySelectorAll('style[id*="mdpDeblocker"]').length > mdp; mdp++) {
                if (document.querySelectorAll('style[id*="mdpDeblocker"]')[mdp] !== '') {
                    console.log('mdp');
                    document.querySelectorAll('style[id*="mdpDeblocker"]')[mdp].remove();
                }
            }
            for (var mdp2 = 0; document.querySelectorAll('style[class*="mdpDeblocker"]').length > mdp2; mdp2++) {
                if (document.querySelectorAll('style[class*="mdpDeblocker"]')[mdp2] !== '') {
                    console.log('mdp2');
                    document.querySelectorAll('style[class*="mdpDeblocker"]')[mdp2].remove();
                }
            }
        }


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
