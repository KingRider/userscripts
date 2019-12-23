// ==UserScript==
// @name         Anti Ads per KingRider
// @namespace    http://www.sandroalvares.com.br
// @version      1.92
// @update       23/DEZ/2019
// @description  KILL ADS - MENOS IRRITANTE PROPAGANDA - Solução me envie mensagem particular.
// @author       KingRider @2016 @2019
// @match        http://www.cursors-4u.com/*
// @match        http://*.jogosandroidgratis.com/*
// @match        http://*.infojobs.com.br/*
// @match        http://*.hackintosh.zone/*
// @match        http://*.uploaded.net/*
// @match        http://*.gamepedia.com/*
// @match        https://*.gamepedia.com/*
// @match        http://ovnihoje.com/*
// @match        https://ovnihoje.com/*
// @match        https://*.gamesguideinfo.com/*
// @require      https://code.jquery.com/jquery-1.9.1.min.js
// @grant        none
// ==/UserScript==

(function() {

    //string.prototype.

    /* http://uploaded.net */
    if (window.location.href.match(/uploaded/g)) {
        setInterval(function() {
            //$('div.pico-overlay').css('display', 'none!important');
            //$('div.pico-overlay').remove();
            var x;
            for (x=0; x < document.querySelectorAll(".pico-overlay").length; x++) {
                console.log('uploaded.net');
                document.querySelectorAll(".pico-overlay")[x].parentNode.removeChild(document.querySelectorAll(".pico-overlay")[x]) ;
            }
            //$('div.pico-content').css('display', 'none!important');
            //$('div.pico-content').remove();
            var y;
            for (y=0; y < document.querySelectorAll(".pico-content").length; y++) {
                console.log('uploaded.net');
                document.querySelectorAll(".pico-content")[y].parentNode.removeChild(document.querySelectorAll(".pico-content")[y]);
            }
        }, 1000);
    }

    /* http://www.hackintosh.zone/ */
    //http://www.hackintosh.zone/assets/adcheck.php
    if (window.location.href.match(/hackintosh/g)) {
        var q, texto;
        for (q = 0; q < $('link').length; q++) {
            texto = $('link')[q].href;
            if (texto.indexOf('check') != -1) {
                console.log('hackintosh.zone');
                $('link')[q].remove();
            }
        }
    }

    /* Cursors */
    if (window.location.href.match(/cursors-4u/g)) {
        console.log('Cursors');
        $('div[style="padding: 15px 0 15px 0; overflow:hidden; height:15px; width:728px;"]').hide();
        $('table tr:nth-child(3) table tr:nth(0)').hide();
    }

    /* Jogos Android */
    if (window.location.href.match(/jogosandroidgratis/g)) {
        setTimeout(function() {
            //parent.$('div.content').css('z-index','9999');
            //console.log(1);
            /*
            if (parent.$('body strong:nth(1)').css('z-index') > 999) {
                 $(this).css('display','none');
                 console.log(2);
            }*/
            if ($('#tdcc ~ *').val() !== undefined) {
                console.log("Jogos Android");
                console.log('tdcc');
                $('#tdcc ~ *').css('display','block');
            }
        }, 5000);
     }

    /* Infojobs */
    if (window.location.href.match(/infojobs/g)) {
        if ($('a.js_aBanner')) {
            console.log('Infojobs');
            $('a.js_aBanner').hide();
        }
        if (document.body.innerHTML.search('scorecardresearch') > 10) {
            //document.body.innerHTML = document.body.innerHTML.replace('scorecardresearch', 'infojobs');
            this.stop();
            $('noscript').next().hide();
            this.continue();
        }

        //    if (document.querySelectorAll('script')[i].getAttribute('src')) {
        //        if (document.querySelectorAll('script')[i].getAttribute('src').indexOf('ad') > 1) { document.querySelectorAll('script')[i].getAttribute('src'); }
        //    }
        //}
        /*
        for (var j = 0; j < $('script').length; j++) {
            if ($('script')[j].src) {
                $('script')[j].src = "";
            }
        }
        for (var z = 0; z < $('section').length; z++) {
            if ($('section')[z].getAttribute('class')) {
                if ($('section')[z].getAttribute('class').indexOf('Publicity') > 1) { $('section')[z].remove(); }
            }
        }
        */
    }

    /* gamepedia */
    if (window.location.href.match(/gamepedia/g)) {
        if ($('#bodyContent').next().prop('id') == "siderail") {
            console.log('gamepedia');
            $('#bodyContent').next().remove();
        }
        $('div#socialContainer').hide();
    } // $('div#siderail').css('display', 'none!important');

    /* ovnihoje */
    if (window.location.href.match(/ovnihoje/g)) {
        setTimeout(function() {
            for (x=0; x < document.querySelectorAll('iframe').length; x++) {
                if (document.querySelectorAll('iframe')[x] && document.querySelectorAll('iframe')[x].getAttribute('allowfullscreen') !== true) { // allowfullscreen
                    document.querySelectorAll('iframe')[x].remove();
                }
            }
            document.querySelector('article').removeAttribute('class');
            document.querySelector('aside').remove();
            document.querySelector('div.bottomad.left').remove();
            /*
            for (z=0; z < document.querySelectorAll('[id^=lx_]').length; z++) {
               if (document.querySelectorAll('[id^=lx_]')[z]) {
                   document.querySelectorAll('[id^=lx_]')[z].remove();
               }
            }*/
            for (y=0; y < document.querySelectorAll('ins').length; y++) {
                if (document.querySelectorAll('ins')[y]) {
                    document.querySelectorAll('ins')[y].remove();
                }
            }
            /*
            for (e=0; e < $('iframe').parent().length; e++) {
                if (!$('iframe').parent('body')[e]) {
                    $('iframe').parent()[e].remove();
                }
            }
            //document.querySelectorAll("iframe").forEach(e => e.remove(e));
            */
            setTimeout(function() {
                DISQUS.reset({reload: true});
                for (ad2=0; ad2 < document.querySelectorAll('[data\-role="ad-container"]').length; ad2++) {
                    if (document.querySelectorAll('[data\-role="ad-container"]')[ad2]) {
                        document.querySelectorAll('[data\-role="ad-container"]')[ad2].remove();
                    }
                }
                for (ads=0; ads < document.querySelectorAll('.adsbygoogle').length; ads++) {
                    if (document.querySelectorAll('.adsbygoogle')[ads]) {
                        document.querySelectorAll('.adsbygoogle')[ads].remove();
                    }
                }
            }, 1500);
        }, 1500);
    }

    /* gamesguideinfo.com */
    if (window.location.href.match(/gamesguideinfo.com/g)) {
        setTimeout(function() {
            if ($('div[id*="mcdPlayer"]').length > 0) {
                $('div[id*="mcdPlayer"]').parent().remove();
            }
        }, 1000);
     }
})();