// ==UserScript==
// @name         Save Adblock (Anti-modal)
// @namespace    http://sandroalvares.com.br
// @version      v4.221
// @description  Save Adblock
// @author       KingRider
// @connect      *

// @match        http*://*/*

// @exclude      http*://*.steampowered.com/*
// @exclude      https://cadastro.net.com.br/*
// @exclude      https://help.twitch.tv/*
// @exclude      https://virusscan.jotti.org/*
// @exclude      http*://steamcommunity.com/*
// @exclude      https://www.torchlightfrontiers.com/*
// @exclude      http*://dyinglightgame.com/*
// @exclude      https://www.arcgames.com/*
// @exclude      http*://*.globo.com/*
// @exclude      http://jsfiddle.net/*
// @exclude      https://robertsspaceindustries.com/*
// @exclude      https://www.linkedin.com/*
// @exclude      https://*.wikia.com/*
// @exclude      https://www.trabalhabrasil.com.br/*
// @exclude      https://api.sine.com.br/*
// @exclude      http://www.anatel.gov.br/*
// @exclude      https://eddb.io/*
// @exclude      https://restream.io/*
// @exclude      https://mixer.com/*
// @exclude      http://*.oportunidadesespeciais.com.br/*
// @exclude      https://*.oportunidadesespeciais.com.br/*
// @exclude      https://*.pornhub.com/*
// @exclude      https://play.google.com/*
// @exclude      https://www.geekhunter.com.br/*
// @exclude      https://answers.microsoft.com/*
// @exclude      https://portal.barueri.sp.gov.br/*
// @exclude      https://picarto.tv/*
// @exclude      https://*.nuuvem.com/*
// @exclude      https://www.kabum.com.br/*
// @exclude      https://accounts.google.com/*
// @exclude      https://warthunder.com/*
// @exclude      https://*.bignox.com/*
// @exclude      https://gleam.io/*
// @exclude      https://www.myheritage.com.br/*
// @exclude      https://dabbot.org/*
// @exclude      https://www.dlh.net/*
// @exclude      https://www.kongregate.com/*
// @exclude      https://*.senado.leg.br/*
// @exclude      https://*.wordpress.com/*
// @exclude      https://*.cavelis.net/*
// @exclude      https://aboutme.google.com/*
// @exclude      https://empregabrasil.mte.gov.br/*
// @exclude      https://www.zoom.com.br/*
// @exclude      https://jobs.mercadolibre.com/*
// @exclude      https://*.clickvita.com.br/*
// @exclude      https://*.epicgames.com/*
// @exclude      https://*.pontosamigo.com.br/*
// @exclude      https://*.cupom.org/*
// @exclude      https://www.frontierstore.net/*
// @exclude      https://*.geekhunter.com.br/*
// @exclude      https://codepen.io/*
// @exclude      https://*.ubisoft.com/*
// @exclude      http://trabalhabr.com.br/*
// @exclude      https://*.gog.com/*
// @exclude      https://*.diabloimmortal.com/*
// @exclude      https://*.pontofrio.com.br/*
// @exclude      https://www.pelando.com.br/*
// @exclude      https://pelando.com.br/*
// @exclude      https://*.casasbahia.com.br/*
// @exclude      https://*.battle.net/*
// @exclude      https://*.bungie.net/*
// @exclude      https://www.gamesessions.com/*
// @exclude      https://www.cissamagazine.com.br/*
// @exclude      https://www.supermuffato.com.br/*
// @exclude      https://www.banggood.com/*
// @exclude      https://*.vk.com/*
// @exclude      https://*.periscope.tv/*
// @exclude      https://periscope.tv/*
// @exclude      https://*.nightbot.tv/*
// @exclude      https://nightbot.tv/*
// @exclude      https://*.eneldistribuicaosp.com.br/*
// @exclude      https://eneldistribuicaosp.com.br/*
// @exclude      https://*.stackoverflow.com/*
// @exclude      https://stackoverflow.com/*
// @exclude      http://*.blacksquad.com/*
// @exclude      https://*.gameflip.com/*
// @exclude      https://feedburner.google.com/*
// @exclude      https://*.fetchrss.com/*
// @exclude      http://*.gov.br/*
// @exclude      https://www.youtube.com/live_dashboard*
// @exclude      https://studio.youtube.com/*
// @exclude      http://192.168.0.1/*
// @exclude      https://*.twitch.tv/*
// @exclude      https://*.wizebot.tv/*
// @exclude      https://streamelements.com/*
// @exclude      https://*.ubisoft.com/*
// @exclude      https://*.github.io/*
// @exclude      https://*.indiegala.com/*
// @exclude      http://*.nexon.net/*
// @exclude      http://*.filterblade.xyz/*
// @exclude      https://*.taleo.net/*
// @exclude      https://*.carrefour.com.br/*
// @exclude      https://*.bethesda.net/*
// @exclude      https://*.zoom.com.br/*
// @exclude      https://*.d3planner.com/*
// @exclude      http://*.giveaway.su/*
// @exclude      https://*.superuser.com/*
// @exclude      http*://*.flow.microsoft.com/*
// @exclude      http*://*.heroku.com/*
// @exclude      http*://*.nsspot.net/*
// @exclude      http*://*.ubi.com/*
// @exclude      http*://*.cloudfront.net/*
// @exclude      http*://*.reclameaqui.com.br/*
// @exclude      http*://*.anatel.gov.br/*
// @exclude      http*://*.meliuz.com.br/*
// @exclude      http*://*.carrefour.com.br/*
// @exclude      http*://www.google.com/recaptcha/api2/*
// @exclude      http*://*.catho.com.br/*
// @exclude      http*://*.uipath.com/*
// @exclude      http*://github.com/*
// @exclude      http*://*.sodex*.com.br/*
// @exclude      http*://*.my.com/*
// @exclude      http*://*.ashleymadison.com/*
// @exclude      http*://*.itau.com.br/*

// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @grant        none

// updateURL     https://github.com/KingRider/userscripts/raw/master/Save%20Adblock%20(Anti-modal).user.js
// downloadURL   https://github.com/KingRider/userscripts/raw/master/Save%20Adblock%20(Anti-modal).user.js

// ==/UserScript==

(function() {

    var sa_x = 0;

    //if (document.querySelect('modal')) {
    setInterval(function() {
        if (document.querySelectorAll('div[id*=modal]').length > 0) {
            for (sa_x = 0; sa_x < document.querySelectorAll('div[id*=modal]').length; sa_x++) {
                var modal = document.querySelectorAll('div[id*=modal]')[sa_x];
                modal.parentNode.removeChild(modal);
            }
        }
    }, 1500);

    // d3planner.com
    setInterval(function () {
        //document.getElementById("right-banner").style('display','hidden');
        $("#right-banner").hide();
        //document.getElementById("left-banner").style('display','hidden');
        $("#left-banner").hide();
    if (document.querySelectorAll('script:last-child').length > 0) {
        if (document.querySelectorAll('script:last-child')[1] == "undefined") {
            document.querySelectorAll('script:last-child')[1].remove();
        }
    }}, 900);

    /*
    if (document.querySelectorAll('iframe[id^="google"]').length > 0) {
        for (var g = 0; g < document.querySelectorAll('iframe[id^="google"]').length; g++) {
            var remova = document.querySelectorAll('iframe[id^="google"]')[g].id;
            document.querySelectorAll('iframe#'+remova).remove();
        }
    }
    */

    /*
    var x = 0, modal = 0; // Remove Modal All
    for (x=0; x < document.querySelectorAll('[class^="modal"]').length; x++) {
        document.querySelectorAll('[class^="modal"]')[x].style.display = 'none';
        modal = 1;
    }
    if (modal == 1) {
        var y = 0;
        //for (y=0; y < document.querySelectorAll('[style^="display: block;"]').length; y++) {
            document.querySelectorAll('[style^="display: block;"]')[(document.querySelectorAll('[style^="display: block;"]').length-1)].style.display = 'none';
        //}
    }
    */

    if (jQuery('body:contains("http://www.wikihow.com/Disable-Adblock")').length) {
        var healerReplaced = $('body').html().replace(/\<style\>#(.*?)\{/gi, '#stopHacker{');
        jQuery('body').html(healerReplaced);
    }

    if (jQuery('body:contains("adblocker")').length) {
        var healerReplacedd = $('body').html().replace(/\<style\>#(.*?)\{/gi, '#stopHacker{');
        jQuery('body').html(healerReplacedd);
    }

    // ativar scroll
    // document.body.style.overflow = "auto";
    // $('html').removeAttr('style');
    // $('body').removeAttr('style');

    $.fn.disableSelection = function() {
        return this
            .attr('unselectable', 'on')
            .css('user-select', 'none')
            .on('selectstart', false);
    };

    document.oncontextmenu = function() {};
    document.onselectstart = function() {};

})();
