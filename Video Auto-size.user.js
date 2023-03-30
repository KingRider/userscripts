// ==UserScript==
// @name         Video Auto-size
// @namespace    http://www.sandroalvares.com.br
// @version      1.183
// @description  Auto-size @2021 + 2022 + 2023
// @author       Sandro Alvares
// @match        http*://*.band.uol.com.br/ao-vivo*
// @match        http*://*.sbt.com.br/ao-vivo*
// @match        http*://multicanais.tv/*
// @match        http*://multicanais.vip/*
// @match        http*://multicanais.video/*
// @match        http*://multicanais.vc/*
// @match        http*://multicanais.top/assistir-*
// @match        http*://futeboltotal.net.br/assistir*
// @match        http*://futeboltotal.org/assistir*
// @match        http*://www.xvideos.com/*
// @match        http*://www.xnxx.com/*
// @match        http*://redecanaistv.net/*
// @match        http*://www.sbtvideos.com.br/aovivo*
// @match        http*://tv0800.xyz/canais/assistir-*
// @match        http*://tv0800.com/canais/assistir-*
// @match        http*://tvfree.xyz/canais/assistir-*
// @match        http*://megacanais.com/*-ao-vivo*/*
// @match        http*://*.nowonline.com.br/player/*/no-ar*
// @match        http*://*.clarotvmais.com.br/player/*/no-ar*
// @match        http*://globoplay.globo.com/tv-globo/ao-vivo/*
// @match        http*://www.playplus.com/live/liveEvent/*
// @grant        none

// @updateURL     https://github.com/KingRider/userscripts/raw/master/Video%20Auto-size.user.js
// @downloadURL   https://github.com/KingRider/userscripts/raw/master/Video%20Auto-size.user.js

// ==/UserScript==

(function() {
    var conta = 0;
    var tempo = setInterval(function() {

        // MegaCanais.com
        if (window.location.href.indexOf('megacanais.com') > 0) {
            if (document.querySelectorAll('div.box\-container div.sections\-container div.row\-container').length > 0) {
                document.querySelectorAll('div.box\-container div.sections\-container div.row\-container')[0].style.display = 'none';
                document.querySelectorAll('div.post\-body div.post\-content')[0].style.display = 'none';
                document.querySelectorAll('div.post\-body iframe')[0].style.height = '800px';
            }
            clearInterval(tempo);
        }
        // nowonline.com.br / clarotvmais.com.br
        if (window.location.href.indexOf('nowonline.com.br/player/') > 0 || window.location.href.indexOf('clarotvmais.com.br/player/') > 0) {
            if (document.querySelectorAll('div[id="player"]')[0].style.width != "1600px") {
                document.querySelectorAll('div[id="player"]')[0].style.top = "10px";
                document.querySelectorAll('div[id="player"]')[0].style.left = "170px";
                document.querySelectorAll('div[id="player"]')[0].style.width = '1600px';
                document.querySelectorAll('div[id="player"]')[0].style.height = '900px';
            }
            if (document.querySelectorAll('div.wrap-loader').length > 0) {
                for (var now = 0; now < document.querySelectorAll('div.wrap-loader').length; now++) {
                    if (document.querySelectorAll('div.wrap-loader')[now].display != 'none') {
                        document.querySelectorAll('div.wrap-loader')[now].display = 'none';
                    }
                }
            }
            if (document.querySelectorAll('span.play-active').length > 0) {
                document.querySelectorAll('span.play-active')[0].click();
            }
        }
        // globoplay.globo.com
        if (window.location.href.indexOf('globoplay.globo.com/tv-globo/ao-vivo/') > 0) {
            if (document.querySelectorAll('header.header')[0].style.display != "none") {
                document.querySelectorAll('header.header')[0].style.display = "none";
            }
            if (document.querySelectorAll('div.media-control-panel__front-layer')[0].style.display != "none") {
                document.querySelectorAll('div.media-control-panel__front-layer')[0].style.display = "none";
            }
        }
        // www.playplus.com/live
        if (window.location.href.indexOf('www.playplus.com/live/liveEvent/') > 0) {
            document.querySelectorAll('div.fixed-top')[0].style.display = 'none';
            document.querySelectorAll('div.nav-space[data-page="onair"]')[0].style.marginTop = 0;
            document.querySelectorAll('header.video-container')[0].style.marginTop = 0;
            document.querySelectorAll('header.video-container')[0].style.paddingTop = 0;
            if (document.querySelectorAll('header.video-container div.row.justify-content-center')[0].style.width != "2222px") {
                document.querySelectorAll('header.video-container div.row.justify-content-center')[0].style.display = "block";
                document.querySelectorAll('header.video-container div.row.justify-content-center')[0].style.width = "2222px";
                document.querySelectorAll('header.video-container div.row.justify-content-center')[0].style.marginTop = "15px";
                document.querySelectorAll('header.video-container div.row.justify-content-center')[0].style.marginLeft = "15px";
                setInterval(function(){
                    if (document.querySelectorAll('div[title="Toggle Play"] i.fa.fa-play').length > 0) {
                        document.querySelectorAll('div[title="Toggle Play"] i.fa.fa-play')[0].click();
                        //dataLayerPlayPauseClick();
                        //document.querySelector("#full__screenContainer > div.player__controls > div.player__button.toggle > i").click()
                    }
                    window.scrollBy(-1000,-1000);
                }, 3000);
                document.body.style.background = '#262626';
            }
            if (document.querySelectorAll('header.video-container div.player')[0].style.width != "100%") {
                document.querySelectorAll('header.video-container div.player')[0].style.width = '100%';
            }
        }
        // cdn.lib.bz
        if (window.location.href.indexOf('cdn.lib.bz') > 0) {
            if (document.querySelectorAll('form').length > 0) {
                document.querySelectorAll('form')[0].classList.remove('form');
            }
            if (document.querySelectorAll('iframe')[0].width != "1600") {
                document.querySelectorAll('iframe')[0].width = '1600';
                document.querySelectorAll('iframe')[0].height = '900';
            }
            if (document.querySelectorAll('div.fp\-ui').length > 0) {
                //document.querySelectorAll('div.fp\-ui')[0].style.display = 'none';
                document.querySelectorAll('div.fp\-ui')[0].classList.remove('fp\-ui');
                clearInterval(tempo);
            }
            if (document.querySelectorAll('[rel="sponsored"]').length > 0) {
                document.querySelectorAll('[rel="sponsored"]')[0].classList.remove('sponsored');
            }
        }
        // TV 0800
        // tvfree
        if (window.location.href.indexOf('tv0800.com') > 0 || window.location.href.indexOf('tvfree.xyz') > 0) {
            if (document.querySelectorAll('div.content.right').length > 0) {
                if (document.querySelectorAll('div.div-btns').length > 0) {
                    if (document.querySelectorAll('div.div-btns')[0].style.display !== 'none') {
                        document.querySelectorAll('div.div-btns')[0].style.display = 'none'; // botao reportar erro video
                    }
                    //var temp = document.querySelectorAll('div.div-btns')[0]; temp.parentNode.removeChild(temp);
                }
                if (document.querySelectorAll('div.content.right')[0].style.width !== '1200px') {
                    document.querySelectorAll('div.content.right')[0].style.width = '1200px';
                }
                // Cabeçalho menu top
                if (document.querySelectorAll('div.hbox')[0].style.display !== 'none') {
                    document.querySelectorAll('div.hbox')[0].style.display = 'none';
                }
                if (document.querySelectorAll('header#header')[0].style.display !== 'none') {
                    document.querySelectorAll('header#header')[0].style.display = 'none';
                }
                document.querySelectorAll('div#contenedor')[0].style.margin = '0 auto 0';
                // Adblock Detected?
                /*
                if (document.querySelectorAll('div.is-detected')[0].style.display !== 'none') {
                    document.querySelectorAll('div.is-detected')[0].style.display = 'none';
                }
                */
                // Texto Lateral Direita
                if (document.querySelectorAll('div.sidebar.right.scrolling')[0].style.display !== 'none') {
                    document.querySelectorAll('div.sidebar.right.scrolling')[0].style.display = 'none';
                }
            }
            //clearInterval(tempo);
        }
        // Band Ao-vivo
        if (window.location.href.indexOf('band.uol') > 0) {
            /*
            if (document.querySelectorAll('nav.channel').length > 0) {
                document.querySelectorAll('nav.channel')[0].style.display = 'none';
            }
            if (document.querySelectorAll('iframe').length > 0) {
                document.querySelectorAll('iframe')[0].parentElement.style.width = '1200px';
            }
            if (document.querySelectorAll('h2.title').length > 0) {
                document.querySelectorAll('h2.title')[0].style.color = 'white';
            }
            for (var y=0; y < document.querySelectorAll('div').length; y++) {
                if (document.querySelectorAll('div')[y].style.zIndex > 0) {
                    document.querySelectorAll('div')[y].style.display = 'none';
                }
            }
            document.querySelectorAll('div#barrauol')[0].style.display = 'none'
            document.body.style.background = '#262626';
            clearInterval(tempo);
display: block;
position: fixed;
top: 50px;
left: 50px;
z-index: 9999;
width: 1250px;
height: 704px
*/
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
            if (document.querySelectorAll('section')[4].style.width = "1400px") {
                document.querySelectorAll('section')[4].style = "width: 1400px; margin-left: -150px;";
            }
            clearInterval(tempo);
        }
        // FutebolTotal-net-br
        if (window.location.href.indexOf('futeboltotal.net.br') > 0) {
            if (top.document.querySelectorAll('div.elementor-section-wrap section').length > 0) {
                top.document.querySelectorAll('div.elementor-section-wrap section')[0].style.display = 'none';
                top.document.querySelectorAll('div nav')[0].style.display = 'none';
                top.document.querySelectorAll('div.elementor-row')[3].style.display = 'none';
                top.document.querySelectorAll('div.elementor-row')[4].style.display = 'none';
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
            //top.document.querySelectorAll('div.play-wrapper')[0].click();
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
                if (top.document.body.style.background == '') {
                    top.document.body.style.background = '#363636';
                }
                if (top.document.querySelectorAll('div.elementor-section-wrap').length > 0) {
                    top.document.querySelectorAll('div.elementor-section-wrap')[0].style.display = 'none';
                }
                if (top.document.querySelectorAll('div figure').length > 0) {
                    top.document.querySelectorAll('div figure')[0].style.display = 'none';
                }
                //top.document.querySelectorAll('div.vjs-control-bar')[0].classList.remove('vjs-control-bar');
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
        // Multicanais.tv / Multicanais.vip
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

        if (conta >= 30) {
            clearInterval(tempo);
            console.log('Terminado!');
        }
        conta++;

    }, 1500);

    // Disable Devtool / Console
    // https://theajack.github.io/disable-devtool/
    // https://cdn.jsdelivr.net/npm/console-ban@4.1.0/dist/console-ban.min.js

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
