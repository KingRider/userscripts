// ==UserScript==
// @name         PornHub.com
// @namespace    http://sandroalvares.com.br
// @version      v1.15
// @description  Menos propaganda e expandir espaço (less ads and space expand)
// @author       KingRider
// @match        http://*.pornhub.com/*
// @match        https://*.pornhub.com/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    setInterval(function() {
        if (document.querySelector('div.sectionTitle')) {
            document.querySelector('div.sectionTitle').nextElementSibling.style.display = "none";
        }
        if (document.querySelector('div.wrapper')) {
            document.querySelector('div.wrapper').nextElementSibling.style.display = "none";
        }
        if (document.querySelector('div.float-right')) {
            document.querySelector('div.float-right').style.display = "none";
        }
        if (document.querySelector('div#player')) {
            document.querySelector('div#player').nextElementSibling.style.display = "none";
        }
        if (document.querySelectorAll('a.removeAdLink.removeAdsStyle')) {
            document.querySelectorAll('a.removeAdLink.removeAdsStyle')[0].parentElement.previousSibling.parentElement.style.display = 'none';
        }
        //document.querySelector('aside figure').style.display = "none";
        //document.querySelector('aside').style.display = "none";
        /*
        for (x=0; x<document.querySelectorAll('aside figure').length;x++) { 
            //document.querySelectorAll('aside figure')[x].style.display = "none";
            $('aside figure')[x].remove();
        }
        */
        if (document.querySelector('div.nf-videos div.sectionWrapper div.sectionTitle')) {
            document.querySelector('div.nf-videos div.sectionWrapper div.sectionTitle').nextElementSibling.nextElementSibling.nextElementSibling.style.display = "none";
        }
        if (document.querySelector('div#hd-rightColVideoPage')) {
            document.querySelector('div#hd-rightColVideoPage').style.display = "none";
        }
        //pornhub.com###_0
        //pornhub.com###iiaidbigb_2
        //pornhub.com##.float-right
        //$('div.sectionTitle').next().hide(); não funcionou
        //$('div.wrapper').next().hide(); não funcionou
    }, 800);
    localStorage.setItem('InfNumFastPopsExpire', 'undefined__'+new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
})();
