// ==UserScript==
// @name         Exibir cupom sem clique
// @namespace    http://sandroalvares.com.br
// @version      0.8
// @description  Menos clique e menos popup e muito menos propaganda
// @author       Sandro Alvares
// @match        http*://*.cuponomia.com.br/*
// @match        http*://*.radarcupom.com.br/*
// @match        http*://*.pelando.com.br/cupons-de-descontos/*
// @match        http*://thiagorodrigo.com.br/cupom-*/*
// @match        http*://www.meliuz.com.br/desconto/*
// @grant        none

// @updateURL    https://github.com/KingRider/userscripts/raw/master/Exibir%20cupom%20sem%20clique.user.js
// @downloadURL  https://github.com/KingRider/userscripts/raw/master/Exibir%20cupom%20sem%20clique.user.js

// ==/UserScript==

(function() {
    setTimeout(function() {
        var texto = '';
        // nova versão de tecnologia debug (anti-hack) contra DOM e não use innerText para utilizar textContent

        //--------------------------------------------
        // Cuponomia.com.br
        var x,y,z;
        for (x=0; x < document.querySelectorAll('li.item-code').length; x++) {
            //if (!typeof document.querySelectorAll('li.item-code div.item-code span span:last-child')) {
                //$('li.item-code')[x].append($('li.item-code div.item-code span span:last-child')[x].innerText);
                // -- document.querySelectorAll('li.item-code div.smallTitle.is-code')[x].append(document.querySelectorAll('li.item-code div.item-code span span:last-child')[x].innerText);
                document.querySelectorAll('li.item-code div.smallTitle.is-code')[x].append(document.querySelectorAll('span.item-code-link')[x].textContent);
                //document.querySelectorAll('li.item-code div.smallTitle.is-code')[x].style.background = "yellow";
            //} else {
            //    $('li.item-code')[x].remove();
            //}
            /*else {
                document.querySelectorAll('li.item-code')[x].append($('li.item-code div.item-code span span:last-child')[x].innerText);
            }*/
            //$('div.item-promo.item-code').hide();
            //$('li.get-container').hide();
            //$('li.item-sale').hide();
        }

        //--------------------------------------------
        // Radarcupom.com.br
        for (y=0; y < document.querySelectorAll('span.coupon-button').length; y++) {
            document.querySelectorAll('span.coupon-button')[y].remove();
        }

        //--------------------------------------------
        // Pelando.com.br
        for (var pelando=0; pelando < document.querySelectorAll('span[role="presentation"]').length; pelando++) {
            document.querySelectorAll('span[role="presentation"]')[pelando].parentElement.parentNode.append(document.querySelectorAll('span[role="presentation"]')[pelando].getAttribute('data-masked'));
        }
        /*
        for (y=0; y < document.querySelectorAll('span.item\-promo\-link.item-cover').length; y++) {
            document.querySelectorAll('span.item\-promo\-link.item-cover')[y].style.display = "none";
        }
        /*
        for (var y2=0; y2 < document.querySelectorAll('button span').length; y2++) {
            if (document.querySelectorAll('button span')[y2].nextSibling) {
                if (document.querySelectorAll('button span')[y2].nextSibling.masked) {
                    texto = document.querySelectorAll('button span')[y2].nextSibling.dataset.masked;
                    document.querySelectorAll('button span')[y2].parentElement.parentElement.append(texto);
                } else {
                    texto = '';
                }
            }
        }
        */

        //--------------------------------------------
        // thiagorodrigo.com.br
        for (var throdrigo = 0; throdrigo < document.querySelectorAll('div p.coupon-title-tr').length; throdrigo++) {
            document.querySelectorAll('div p.coupon-title-tr')[throdrigo].parentElement.append(document.querySelectorAll('span.coupon-tr-code')[throdrigo].textContent);
        }

        //--------------------------------------------
        // Meliuz.com.br
        for (var meliuz = 0; meliuz < document.querySelectorAll('button span').length; meliuz++) {
            if (document.querySelectorAll('button span')[meliuz].className == "code-btn__value") {
                document.querySelectorAll('button span')[meliuz].parentElement.parentElement.parentElement.append(document.querySelectorAll('button span')[meliuz].textContent);
            }
        }

    }, 1500);
})();
