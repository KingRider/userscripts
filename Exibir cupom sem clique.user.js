// ==UserScript==
// @name         Exibir cupom sem clique
// @namespace    http://sandroalvares.com.br
// @version      v0.92
// @description  Menos clique e menos popup e muito menos propaganda
// @author       Sandro Alvares
// @match        http*://*.cuponomia.com.br/*
// @match        http*://*.radarcupom.com.br/*
// @match        http*://*.pelando.com.br/cupons-de-descontos/*
// @match        http*://*.pelando.com.br/d/cupom-*
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
        for (var x=0; x < document.querySelectorAll('li.item-code').length; x++) {
            const cupom = document.querySelectorAll('span.item-code-link')[x].textContent;
            document.querySelectorAll('li.item-code')[x].append( cupom );
            document.querySelectorAll('li.item-code h3')[x].style.height = '50px';
        }

        //--------------------------------------------
        // Radarcupom.com.br
        for (var y=0; y < document.querySelectorAll('span.coupon-button').length; y++) {
            document.querySelectorAll('span.coupon-button')[y].remove();
        }

        //--------------------------------------------
        // Pelando.com.br
        for (var pelando=0; pelando < document.querySelectorAll('span[role="presentation"]').length; pelando++) {
            const cupom = document.querySelectorAll('span[role="presentation"]')[pelando].getAttribute('data-masked');
            document.querySelectorAll('span[role="presentation"]')[pelando].parentElement.parentNode.append(cupom);
        }
        for (var pelando2=0; pelando2 < document.querySelectorAll('span[class="card__cta-hidden-text"]').length; pelando2++) {
            const cupom = document.querySelectorAll('span[class="card__cta-hidden-text"]')[pelando2].innerText;
            document.querySelectorAll('span[class="card__cta-hidden-text"]')[pelando2].parentElement.parentElement.parentElement.append(cupom);
        }

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
