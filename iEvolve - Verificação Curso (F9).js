// ==UserScript==
// @name         iEvolve - Verificação Curso (F9)
// @namespace    http://sandroalvares.com.br
// @version      0.4
// @description  Mostrar a lista de curso prioridade
// @author       KingRider
// @match        https://ievolveng.ultimatix.net/ievolve/mandatorytrainings
// @match        https://ievolveng.ultimatix.net/ievolve/myLearnings/courses/inprogress
// @match        https://ievolveng.ultimatix.net/ievolve/coursedetails/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ultimatix.net
// @grant        none

// ==/UserScript==

(function() {

    setInterval(function() {

        document.onkeydown = function(evt) {
            document.onkeyup = function(event) {
                if (event.key == "F9" || event.keyCode == 120) { // https://keycode.info/

                    //const curso = ['43893','7408','65584','67334','48150','73118','48518','64091','57278','67539','21939','56031','56978','72142','22360','46816']; // curso.includes('48518')
                    var sa_curso = new Array('43893','7408','65584','67334','48150','73118','48518','64091','57278','67539','21939','56031','56978','72142','22360','46816');
                    for (var sa_parte = 0; sa_parte < sa_curso.length; sa_parte++) {
                        for (var sa_cursoparte=0; sa_cursoparte < document.querySelectorAll('span[id^=courseId]').length; sa_cursoparte++) {
                            if (document.querySelectorAll('span[id^=courseId]')[sa_cursoparte].innerText == sa_curso[sa_parte]) {
                                document.querySelectorAll('span[id^=courseId]')[sa_cursoparte].parentElement.style.backgroundColor = 'yellow';
                            }
                        }
                        for (var sa_cursoparte2=0; sa_cursoparte2 < document.querySelectorAll('span[id^=crsIdTxt]').length; sa_cursoparte2++) {
                            if (document.querySelectorAll('span[id^=crsIdTxt]')[sa_cursoparte2].innerText == sa_curso[sa_parte]) {
                                document.querySelectorAll('span[id^=crsIdTxt]')[sa_cursoparte2].parentElement.style.backgroundColor = 'yellow';
                            }
                        }
                    }

                    // Curso conluido não clicar botão
                    for (var compl=0; compl < document.querySelectorAll('div.ng-star-inserted p[id^=statusText]').length; compl++) {
                        if (document.querySelector('div.ng-star-inserted [id^=statusText'+ compl +']').innerText == 'Completed' && document.querySelector('div.ng-star-inserted [id^=crsLaunch'+ compl +']').disabled == false) {
                            document.querySelector('div.ng-star-inserted [id^=crsLaunch'+ compl +']').disabled = true;
                            document.querySelector('div.ng-star-inserted [id^=crsLaunch'+ compl +']').style.cursor = 'not-allowed';
                        }
                    }

                }
            }
        };

    }, 2000);


})();
