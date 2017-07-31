// ==UserScript==
// @name         Pinterest - Scroll anti-pop autologin
// @namespace    http://sandroalvares.com.br
// @version      0.1
// @description  Anti-AutoLogin
// @author       KingRider
// @match        http://*.pinterest.com/*
// @match        https://*.pinterest.com/*
// @grant        none
// ==/UserScript==

(function() {

    document.documentElement.style.overflow = 'hidden';

    if (document.querySelector('[class^=FullPageModal]')) {
        document.querySelector('[class^=FullPageModal]').parentNode.style.display = 'none';
    }
    for (parte=0; parte < document.querySelector('[class^=FullPageModal]').parentNode.parentNode.childNodes.length; parte++) {
        if (document.querySelector('[class^=FullPageModal]').parentNode.parentNode.childNodes[parte].style) {
            if (document.querySelector('[class^=FullPageModal]').parentNode.parentNode.childNodes[parte].style.position == "fixed") {
                document.querySelector('[class^=FullPageModal]').parentNode.parentNode.childNodes[parte].style.overflow = 'auto';
            }
        }
    }

    if (document.querySelector('[data-test-giftwrap]')) {
        document.querySelector('[data-test-giftwrap]').style.display = 'none';
    }

    /*for (parte=0; parte < document.querySelectorAll('div').length; parte++) {
        if (document.querySelectorAll('div')[parte].style.position == "fixed") {
            document.querySelectorAll('div')[parte].setAttribute("autologin", "yes");
        }
    }*/

    /*window.addEventListener('scroll', function(e) {
        if ((window.scrollY || window.pageYOffset) > 750) {
            for (parte=0; parte < document.querySelectorAll('[autologin]').length; parte++) {
                if (document.querySelectorAll('[autologin]')[parte].getAttribute("autologin") == "yes") {
                    document.querySelectorAll('div')[parte].style.display = "none";
                    document.querySelectorAll('div')[parte].setAttribute("autologin", "no");
                } else if (document.querySelectorAll('[autologin]')[parte].getAttribute("autologin") == "no") {
                    document.querySelectorAll('div')[parte].style.display = "";
                    document.querySelectorAll('div')[parte].setAttribute("autologin", "yes");
                }
            }
        }
    });*/

})();