// ==UserScript==
// @name         Active Scroll - Press F2
// @namespace    http://sandroalvares.com.br
// @version      v2.500
// @description  Active Scroll a press key F2 - Update 27/Dez/2019
// @author       Sandro Alvares (KingRider)
// @connect      *

// @match        http*://*/*

// @exclude      http*://login.globo.com/*
// @exclude      http*://minhaconta.globo.com/*
// @exclude      http*://*.linkedin.com/*
// @exclude      http*://*.restream.io/*
// @exclude      http*://*.pornhub.com/*
// @exclude      http*://*.bebee.com/*
// @exclude      http*://*.geekhunter.com.br/*
// @exclude      http*://*.gog.com/*
// @exclude      http*://*.diabloimmortal.com/*
// @exclude      http*://*.pontofrio.com.br/*
// @exclude      http*://*.pelando.com.br/*
// @exclude      http*://*.battle.net/*
// @exclude      http*://*.bungie.net/*
// @exclude      http*://*.gov.br/*
// @exclude      http*://*.twitch.tv/*
// @exclude      http*://*.indiegala.com/*
// @exclude      http*://*.nexon.net/*
// @exclude      http*://*.filterblade.xyz/*
// @exclude      http*://*.giveaway.su/*
// @exclude      http*://*.superuser.com/*
// @exclude      http*://*.flow.microsoft.com/*
// @exclude      http*://*.ubi.com/*
// @exclude      http*://*.cloudfront.net/*
// @exclude      https://*.reclameaqui.com.br/*
// @exclude      http*://*.anatel.gov.br/*
// @exclude      http*://*.meliuz.com.br/*
// @exclude      http*://*.carrefour.com.br/*
// @exclude      http*://*.google.com/recaptcha/api2/*
// @exclude      http*://*.catho.com.br/*
// @exclude      http*://*.uipath.com/*
// @exclude      http*://github.com/*
// @exclude      http*://*.sodex*.com.br/*
// @exclude      http*://*.ashleymadison.com/*
// @exclude      http*://*.amazon.com*/*
// @exclude      http*://*.epicgames.com/*
// @exclude      http*://*.itau.com.br/*
// @exclude      http*://*.imgbb.com/*
// @exclude      http*://*.pixlr.com/e*
// @exclude      http*://docs.google.com/*
// @exclude      https://*.projectgenesis.com/*
// @exclude      https://noticias.band.uol.com.br/*
// @exclude      https://www.ifood.com.br/*
// @exclude      https://*.awardspace.net/*
// @exclude      http*://*.apple.com/*
// @exclude      http*://*.gov.br/*
// @exclude      http*://*.humblebundle.com/*
// @exclude      https://*.submarino.com.br/*
// @exclude      http*://*.bandainamcoid.com/*
// @exclude      http*://*.bandainamco-ol.co.jp/*
// @exclude      http*://*.bandainamcostudios.com/*
// @exclude      http*://*.infojobs.com.br/*
// @exclude      http*://*.strongholdkingdoms.com/*
// @exclude      http*://*.facebook.com/ajax/*
// @exclude      http*://*.registro.br/*
// @exclude      http*://pixlr.com/*

// @xrequire     http*://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @grant        none

// @updateURL    https://github.com/KingRider/userscripts/raw/master/Active%20Scroll%20-%20Press%20F2.user.js
// @downloadURL  https://github.com/KingRider/userscripts/raw/master/Active%20Scroll%20-%20Press%20F2.user.js

// ==/UserScript==

(function() {

    // --
    // Generar codigo de teclado
    // --
    // http://keycode.info

    document.onkeydown = function(evt) {

        document.onkeyup = function(event) {
            if (event.key == "F2" || event.keyCode == 113){
                if ($('div button:contains("adblocker")').length>0) {
                    var killnumber1 = parseInt($('div button:contains("adblocker")')[0].className.split(/\s+/).pop().replace(/[^0-9]/g, '').substr(1,20));
                    //$('div:contains(killnumber1)').remove();
                    document.querySelectorAll('div[id*="'+killnumber1+'"]').forEach(el => el.remove());
                    document.querySelectorAll('div[class*="'+killnumber1+'"]').forEach(el => el.remove());
                }
                if ($('div button:contains("Adblocker")').length>0) {
                    var killnumber2 = $('div button:contains("Adblocker")')[0].className.split(/\s+/).pop().replace(/[^0-9]/g, '').substr(1,20);
                    //$('div:contains(killnumber2)').remove();
                    document.querySelectorAll('div[id*="'+killnumber2+'"]').forEach(el => el.remove());
                    document.querySelectorAll('div[class*="'+killnumber2+'"]').forEach(el => el.remove());
                }
                $('div:contains("adblocker")').parent().prev().hide();
                $('div:contains("adblocker")').hide();
                $('span:contains("adblocker")').parent().prev().remove();
                $('span:contains("adblocker")').remove();

                // SuperInteressante - https://super.abril.com.br
                $('div[id*=offer]').remove();
                $('div[class*=offer]').remove();
                //$('div[style*=none]').remove();
                $('div[class*="ad\-top"]').remove();
                $('iframe').remove();
                // ---

                //document.body.style.overflow = "auto";
                $('html').removeAttr('style').css('overflow', 'initial');
                $('body').removeAttr('style').css('overflow', 'initial');
                //window.scrollTo(0,0);
            }
        }

        /*
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key == "Escape" || evt.key == "Esc");
        } else {
            isEscape = (evt.keyCode == 27);
        }
        if (isEscape) {
            alert("Escape");
        }
        */
    };

    // Solicitação de atualizar layout gmail para ignorar popup
    setInterval(function() {
        if (document.querySelector('div.bjd.by8')) {
            if (document.querySelector('div.bjd.by8').style.display !== 'none') {
                document.querySelector('div.bjd.by8').style.display = 'none';
            }
        }
        var sa_x = 0;
        for (sa_x=0; sa_x < $('div:contains("Pushnews")').parent().length; sa_x++) {
            if ($('div:contains("Pushnews")').parent()[sa_x].localName != 'body') {
                $('div:contains("Pushnews")').parent()[sa_x].remove();
            }
        }
    }, 2000);

})();
