// ==UserScript==
// @name         Video Auto-size
// @namespace    http://www.sandroalvares.com.br
// @version      0.80
// @description  Auto-size @2021 + 2022
// @author       Sandro Alvares
// @include      http*://*.band.uol.com.br/ao-vivo*
// @include      http*://*.sbt.com.br/ao-vivo*
// @include      http*://multicanais.tv/*
// @include      http*://futeboltotal.net.br/assistir*
// @include      http*://futeboltotal.org/assistir*
// @include      http*://www.xvideos.com/*
// @include      http*://www.xnxx.com/*
// @include      http*://redecanaistv.net/*
// @include      http*://www.sbtvideos.com.br/aovivo
// @include      http*://tv0800.xyz/canais/assistir-*
// @grant        none

// updateURL     https://github.com/KingRider/userscripts/raw/master/Video%20Auto-size.user.js
// downloadURL   https://github.com/KingRider/userscripts/raw/master/Video%20Auto-size.user.js

// ==/UserScript==

(function() {
    var conta = 0;
    var tempo = setInterval(function() {
        // TV 0800
        if (window.location.href.indexOf('tv0800.xyz') > 0) {
            if (document.querySelectorAll('div.content.right').length > 0) {
                if (document.querySelectorAll('div.div-btns').length > 0) {
                    document.querySelectorAll('div.div-btns')[0].style.display = 'none'; // botao reportar erro video
                    //var temp = document.querySelectorAll('div.div-btns')[0]; temp.parentNode.removeChild(temp);
                }
                document.querySelectorAll('div.content.right')[0].style.width = '1400px';
                // Cabeçalho menu top
                document.querySelectorAll('div.hbox')[0].style.display = 'none';
                document.querySelectorAll('header#header')[0].style.display = 'none';
                document.querySelectorAll('div#contenedor')[0].style.margin = '0 auto 0';
            }
            clearInterval(tempo);
        }
        // Band Ao-vivo
        if (window.location.href.indexOf('band.uol') > 0) {
            if (document.querySelectorAll('nav.channel').length > 0) {
                document.querySelectorAll('nav.channel')[0].style.display = 'none';
            }
            if (document.querySelectorAll('iframe').length > 0) {
                document.querySelectorAll('iframe')[0].parentElement.style.width = '1250px';
            }
            if (document.querySelectorAll('h2.title').length > 0) {
                document.querySelectorAll('h2.title')[0].style.color = 'white';
            }
            for (var y=0; y < document.querySelectorAll('div').length; y++) {
                if (document.querySelectorAll('div')[y].style.zIndex > 0) {
                    document.querySelectorAll('div')[y].style.display = 'none';
                }
            }
            document.body.style.background = '#262626';
            clearInterval(tempo);
        }
        // SBT
        if (window.location.href.indexOf('sbt.com.br') > 0) {
            if (document.querySelectorAll('button[type="submit"]').length > 0) {
                document.querySelectorAll('button[type="submit"]')[5].click();
            }
            if (document.querySelectorAll('section')[4] != '') {
                document.getElementsByClassName('header')[0].style.display = 'none';
                document.querySelectorAll('section.live')[0].style.background = '#363636';
            }
            if (document.querySelectorAll('section')[4].style.width = "1250px") {
                document.querySelectorAll('section')[4].style = "width: 1250px; margin-left: -150px;";
            }
            clearInterval(tempo);
        }
        // FutebolTotal-net-br
        if (window.location.href.indexOf('futeboltotal.net.br') > 0) {
            if (top.document.querySelectorAll('div.elementor-section-wrap section').length > 0) {
                top.document.querySelectorAll('div.elementor-section-wrap section')[0].style.display = 'none';
                top.document.querySelectorAll('div nav')[0].style.display = 'none';
                //top.document.body.style.background = '#363636';
            }
            var fut = 0;
            for (fut = 0; fut < document.querySelectorAll('div section div.elementor-container').length; fut++) {
                document.querySelectorAll('div section div.elementor-container')[fut].classList.remove('elementor-container');
                document.querySelectorAll('div section')[fut].style.background = '#363636';
            }
            if (top.document.querySelectorAll('iframe#streamIframe')[0].width != "1250") {
                top.document.querySelectorAll('iframe#streamIframe')[0].style.marginTop = '-100px';
                top.document.querySelectorAll('iframe#streamIframe')[0].width = '1250';
                top.document.querySelectorAll('iframe#streamIframe')[0].height = '704';
                //document.querySelectorAll('section')[4].style = "width: 1250px; margin-left: -150px;";
            }
        }
        // FutebolTotal-org
        if (window.location.href.indexOf('futeboltotal.org') > 0) {
            if (top.document.querySelectorAll('button[title="Play Video"]').length > 0) {
                top.document.querySelectorAll('button[title="Play Video"]')[0].click();
            }
            if (top.document.querySelectorAll('div.elementor-section-wrap section').length > 0) {
                if (document.querySelectorAll('div.elementor-col-100').length > 0) {
                    for (var q=0; q < document.querySelectorAll('div.elementor-col-100').length-1; q++) {
                        top.document.querySelectorAll('div.elementor-col-100')[q].style.display = 'none';
                    }
                }
                if (top.document.querySelectorAll('header').length > 0) {
                    top.document.querySelectorAll('header')[0].style.display = 'none';
                }
                top.document.body.style.background = '#363636';
                top.document.querySelectorAll('div.elementor-section-wrap')[0].style.display = 'none';
                if (top.document.querySelectorAll('div figure').length > 0) {
                    top.document.querySelectorAll('div figure')[0].style.display = 'none';
                }
                /*
                for (var q = 0; q < document.querySelectorAll('div section').length; q++) {
                    top.document.querySelectorAll('div section')[q].style.display = 'none';
                }
                */
            }
            if (top.document.querySelectorAll('div.ast-container').length > 0) {
                top.document.querySelectorAll('div.ast-container')[0].classList.remove('ast-container');
            }
            if (top.document.querySelectorAll('div.elementor-container.elementor-column-gap-default').length > 0) {
                //top.document.querySelectorAll('div.elementor-container')[0].style.width = '1250';
                //top.document.querySelectorAll('div.elementor-container')[0].style.height = '704';
                top.document.querySelectorAll('div.elementor-container')[0].classList.remove('elementor-container');
                top.document.querySelectorAll('div.elementor-column-gap-default')[0].classList.remove('elementor-column-gap-default');
            }
            /*
            if (document.querySelectorAll('div[autoplay=true]').length > 0) {
                document.querySelectorAll('div[autoplay=true]')[0].style.display = 'margin-top: 30px';
            }
            */
            //document.querySelectorAll('div.elementor-section-wrap')[0].style.display = 'none';
            //document.querySelectorAll('div.elementor-widget-container')[0].style.display = 'none';
            document.querySelectorAll('article')[0].style.display = 'none';
            document.querySelectorAll('div[data-elementor-type="footer"]')[0].style.display = 'none';
            if (top.document.querySelectorAll('iframe#streamIframe')[0].width != "1600") {
                top.document.querySelectorAll('iframe#streamIframe')[0].width = '1600';
                top.document.querySelectorAll('iframe#streamIframe')[0].height = '900';
                //document.querySelectorAll('section')[4].style = "width: 1250px; margin-left: -150px;";
            }
        }
        // Multicanais.tv
        if (window.location.href.indexOf('multicanais') > 0) {
            if (document.querySelectorAll('body header').length > 0) {
                document.querySelectorAll('body header')[0].hidden = true;
            }
            if (document.querySelectorAll('div.vlog-sidebar').length > 0) {
                document.querySelectorAll('div.vlog-sidebar')[0].hidden = true;
            }
            if (document.querySelectorAll('div.vlog-share-single').length > 0) {
                document.querySelectorAll('div.vlog-share-single')[0].style.display = 'none';
                document.querySelectorAll('div.vlog-top-bar')[0].style.display = 'none';
                document.querySelectorAll('div.row')[2].hidden = true;
            }
            if (document.querySelectorAll('div.Player').length > 0) {
                if (document.querySelectorAll('div.Player')[0].style.width != '1250px' && document.querySelectorAll('div.Player')[0].style.height != '704px') {
                    document.querySelectorAll('div.Player')[0].style = 'width: 1250px; height: 704px; margin-left: -105px;';
                    document.querySelectorAll('div.wp-block-button')[0].style.marginTop = '30px';
                    document.querySelectorAll('h1.entry-title')[0].style.fontSize = '15px';
                }
            }
            if (document.querySelectorAll('div.Player iframe').length > 0) {
                if (document.querySelectorAll('div.Player iframe')[0].style.width != '1250px' && document.querySelectorAll('div.Player iframe')[0].style.height != '704px') {
                    document.querySelectorAll('div.Player iframe')[0].style = 'width: 1250px; height: 704px;';
                }
            }
            if (document.getElementsByClassName('has-text-align-center').length > 0) {
                document.getElementsByClassName('has-text-align-center')[0].hidden = true;
            }
        }
        // Redecanaistv.net
        if (window.location.href.indexOf('redecanaistv.net') > 0) {
            if (top.document.querySelectorAll('div.alert.alert-danger').length > 0) {
                top.document.querySelectorAll('div.alert.alert-danger')[0].style.display = 'none';
            }
        }
        // xvideos.com / xnxx.com
        if (window.location.href.indexOf('xvideos.com') > 0 || window.location.href.indexOf('xnxx.com') > 0) {
            if (document.querySelectorAll('div#video\-ad').length > 0) {
                document.querySelectorAll('div#video\-ad')[0].nextElementSibling.style.display = 'none';
                if (document.assistirplayer) {
                    document.assistirplayer.submit();
                }
                if (document.querySelectorAll('div.mobile\-hide').length > 0) {
                    if (document.querySelectorAll('div.mobile\-hide')[0].style.display == '') {
                        if (document.querySelectorAll('div#content')[0].classList.value != "player-enlarged") {
                            document.querySelectorAll('img[title="Tamanho do player duplo"]')[0].click();
                        }
                    }
                }
                if (document.querySelectorAll('img[title="Play"]').length > 0) {
                    document.querySelectorAll('img[title="Play"]')[1].click();
                }
            }
        }
        /*
        if (conta >= 10) {
            clearInterval(tempo);
        }
        conta++;
        */
    }, 1500);
    // Brave Ads
    /*
    var texto = "";
    var teste = setInterval(function() {
        if (frames.length > 0) {
            for (var w=0; w < frames.length; w++) {
                if (frames[w]) {
                    if (document.querySelectorAll('iframe')[w].id != 'myFrame' && document.querySelectorAll('iframe')[w].id != 'streamIframe') {
                    //if (document.querySelectorAll('iframe')[w].src == "" && document.querySelectorAll('iframe')[w].src == "about:blank") {
                        var temp = document.querySelectorAll('iframe')[w]; temp.parentNode.removeChild(temp);
                    }
                }
            }
            //clearInterval(teste);
        }
    }, 10000);
    */
})();