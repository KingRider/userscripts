// ==UserScript==
// @name         PornHub.com
// @namespace    http://sandroalvares.com.br
// @version      v1.24
// @description  Menos propaganda e expandir espaço (less ads and space expand) - Desde 2012 a jun/2019
// @author       KingRider
// @match        http://*.pornhub.com/*
// @match        https://*.pornhub.com/*
// @match        https://ainanas.com/*
// @exclude      https://*.pornhub.com/users/*/videos/favorites
// @exclude      https://*.pornhub.com/users/*

// #@require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @grant        none

// updateURL     https://github.com/KingRider/userscripts/raw/master/PornHub.com.user.js
// downloadURL   https://github.com/KingRider/userscripts/raw/master/PornHub.com.user.js

// ==/UserScript==

(function() {
    var x = 0;
    setInterval(function() {
        // Número Página
        /*
        if (document.querySelector('div.sectionTitle')) {
            document.querySelector('div.sectionTitle').nextElementSibling.style.display = "none";
        }
        // Opção de Qualidade
        if (document.querySelector('div.float-right')) {
            document.querySelector('div.float-right').style.display = "none";
        }
        */

        /*
        // Desconhecido
        if (document.querySelector('div.wrapper')) {
            document.querySelector('div.wrapper').nextElementSibling.style.display = "none";
        }

        // Desconhecido
        if (document.querySelector('div#player')) {
            document.querySelector('div#player').nextElementSibling.style.display = "none";
        }

        // Desconhecido
        if (document.querySelectorAll('a.removeAdLink.removeAdsStyle').length) {
            document.querySelectorAll('a.removeAdLink.removeAdsStyle')[0].parentElement.previousSibling.parentElement.style.display = 'none';
        }

        // Desconhecido
        if (document.querySelector('div#hd-rightColVideoPage')) {
            document.querySelector('div#hd-rightColVideoPage').style.display = "none";
        }
        */

        //document.querySelector('aside figure').style.display = "none";
        //document.querySelector('aside').style.display = "none";
        /*
        for (x=0; x<document.querySelectorAll('aside figure').length;x++) {
            //document.querySelectorAll('aside figure')[x].style.display = "none";
            $('aside figure')[x].remove();
        }
        */

        // Lista de video
        /*
        if (document.querySelector('div.nf-videos div.sectionWrapper div.sectionTitle')) {
            document.querySelector('div.nf-videos div.sectionWrapper div.sectionTitle').nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
        }
        */

        if (document.querySelectorAll("ul#videoSearchResult li.alpha").length > 0) {
            for (x=0; x < document.querySelectorAll("ul#videoSearchResult li.alpha").length; x++) {
                if (document.querySelectorAll("ul#videoSearchResult li.alpha")[x].style.display !== 'none') {
                    document.querySelectorAll("ul#videoSearchResult li.alpha")[x].style.display = 'none';
                }
            }
        }

        if (document.querySelectorAll("div.frontListingWrapper div.abEnabled li.alpha").length > 0) {
            for (x=0; x < document.querySelectorAll("div.frontListingWrapper div.abEnabled li.alpha").length; x++) {
                if (document.querySelectorAll("div.frontListingWrapper div.abEnabled li.alpha")[x].style.display !== 'none') {
                    document.querySelectorAll("div.frontListingWrapper div.abEnabled li.alpha")[x].style.display = 'none';
                }
            }
        }
        if (document.querySelectorAll('[class=alpha]').length > 0) {
            var ads=0;
            for (ads=0; ads < document.querySelectorAll('[class=alpha]').length; ads++) {
                console.log(ads);
                document.querySelectorAll('[class=alpha]')[ads].style.display = 'none';
            }
        }
        if (document.querySelectorAll("div#main\-container div").length > 0) {
            document.querySelectorAll("div#main\-container div")[0].childNodes[3].remove();
        }
        //pornhub.com###_0
        //pornhub.com###iiaidbigb_2
        //pornhub.com##.float-right
        //$('div.sectionTitle').next().hide(); não funcionou
        //$('div.wrapper').next().hide(); não funcionou
    }, 1000);

    // Ainanas.com
    if (window.location.host == "ainanas.com") {
        setTimeout(function() {
            //$('span.action').click();
            document.querySelectorAll('span.action')[0].click();
        }, 1500);
    }
    //localStorage.setItem('InfNumFastPopsExpire', 'undefined__'+new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
})();
