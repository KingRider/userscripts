// ==UserScript==
// @name         Exibir cupom sem clique
// @namespace    http://sandroalvares.com.br
// @version      v0.93
// @description  Menos clique e menos popup e muito menos propaganda
// @author       Sandro Alvares
// @match        *://*.cuponomia.com.br/*
// @match        *://*.radarcupom.com.br/*
// @match        *://*.pelando.com.br/cupons-de-descontos/*
// @match        *://thiagorodrigo.com.br/cupom-*/*
// @match        *://www.meliuz.com.br/desconto/*
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
        for (var pelando=0; pelando < document.querySelectorAll('div.coupon-action > a').length; pelando++) {
            if (document.querySelectorAll('div.coupon\-action > a')[pelando].innerText.indexOf("Ver") >= 0) {
                document.querySelectorAll('div.coupon\-action > a')[pelando].parentElement.parentElement.style.display = "none";
            }
            /*if (document.querySelectorAll('div.coupon-action > a')[pelando].innerText.indexOf("grupo") >= 0) {
                document.querySelectorAll('div.coupon-action > a')[pelando].parentElement.parentElement.style.display = "none";
            }*/
            const cupom = document.querySelectorAll('div.coupon-action > a')[pelando].getAttribute('data-coupon-code');
            document.querySelectorAll('div.coupon-action > a')[pelando].parentElement.parentNode.append(cupom);
            for (var pelando2=0; pelando2 < document.querySelectorAll('div.deal\-item').length; pelando2++) {
                document.querySelectorAll('div.deal\-item')[pelando2].parentElement.style.display = "none";
            }
            document.querySelector("div.coupon\-group\-content").parentElement.style.display = "none";
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
