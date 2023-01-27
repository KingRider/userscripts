// ==UserScript==
// @name         IEvolve - Remove Expired
// @namespace    http://www.sandroalvares.com.br
// @version      v0.0975
// @description  TCS Mandatory Course IEvolve with remove expired (including exam answers does not expire)
// @author       KingRider

// @match        https://ievolvecontent.ultimatix.net/*
// @match        https://ievolveng.ultimatix.net/ievolve/html/sessionExpired.html
// @match        https://ievolveng.ultimatix.net/ievolve/pageNotFound
// @match        https://ievolveng.ultimatix.net/ievolve/coursedetails/*
// @match        https://ievolveng.ultimatix.net/error/*
// @match        https://ievolve.ultimatix.net/error/*
// @match        https://auth.ultimatix.net/error/errorPages/SAG*

// @grant        none

// @updateURL     https://raw.githubusercontent.com/KingRider/userscripts/master/IEvolve%20-%20Remove%20Expired.js
// @downloadURL   https://raw.githubusercontent.com/KingRider/userscripts/master/IEvolve%20-%20Remove%20Expired.js

// ==/UserScript==

(function (window) {

    const repetir = setInterval(function() {

        var temp = document.location.href;
/*
        if (document.title == 'iEvolve Error') {
            document.location.href = 'https://ievolveng.ultimatix.net/ievolve/myLearnings/courses/inprogress';
        }
*/
        if (document.location.pathname.indexOf('/sessionExpired') > 5 || document.location.pathname.indexOf('/pageNotFound') > 5) {
            document.location.href = 'https://ievolveng.ultimatix.net/ievolve/mandatorytrainings';
            //document.location.href = '../myLearnings/courses/inprogress';
            // https://ievolveng.ultimatix.net/ievolve/myLearnings/courses/inprogress
        }
        // Expiração após entrada para retorno a página
        /*
        for (var continua = 0; continua < document.querySelectorAll('span.mat-button-wrapper').length; continua++) {
            if (document.querySelectorAll('span.mat-button-wrapper')[continua].innerText == 'Continue') {
                document.querySelectorAll('span.mat-button-wrapper')[continua].click();
            }
        }
        */
        if (document.location.pathname.indexOf('/error/ievolveng_root') > 5 || document.location.pathname.indexOf('/error/errorPages/') > 5 || document.location.pathname.indexOf('/error/ievolve_root_downtime') > 5) {
            setTimeout(function() {
                document.location.href = 'https://ievolveng.ultimatix.net/ievolve/';
            }, 60000); // milisegundos em minutos
        }
        if (document.location.pathname.indexOf('/coursedetails/') > 5) {
            setTimeout(function() {
                document.location.reload();
            }, 50000); // milisegundos em minutos
        }

        // Alerta Advertencia (mouseout) - Ausente (algo erro Enroute)
        if (document.querySelectorAll('div#alertBeginning[class^="modal fade show"]').length > 0) {
            for (var sa_x = 0; sa_x < document.querySelectorAll('div#alertBeginning[class^="modal fade show"]').length; sa_x++) {
                if (document.querySelectorAll('div#alertBeginning[class^="modal fade show"]')[sa_x].style.display !== 'none') {
                    document.querySelectorAll('div#alertBeginning[class^="modal fade show"]')[sa_x].style.display = 'none';
                }
            }
        }

        // Fundo preto
        // document.querySelectorAll('div#alertBeginning[class^="modal fade show"]')[0]
        if (document.querySelectorAll("body > div.modal-backdrop.fade.show").length > 0) {
            if (document.querySelector("body > div.modal-backdrop.fade.show")) {
                if (document.querySelector("body > div.modal-backdrop.fade.show").style.display !== 'none') {
                    document.querySelector("body > div.modal-backdrop.fade.show").style.display = 'none';
                }
            }
        }
        if (document.querySelectorAll('div[class^="modal-backdrop fade show"]').length > 0) {
            for (var sa_y = 0; sa_y < document.querySelectorAll('div[class^="modal-backdrop fade show"]').length; sa_y++) {
                if (document.querySelectorAll('div[class^="modal-backdrop fade show"]')[sa_y].style.display !== 'none') {
                    document.querySelectorAll('div[class^="modal-backdrop fade show"]')[sa_y].style.display = 'none';
                }
            }
        }
        // Expiração a prova
        if (document.querySelectorAll('div.modal.fade.show[id^=timeupModal]').length > 0) {
            for (var sa_z = 0; sa_z < document.querySelectorAll('div.modal.fade.show[id^=timeupModal]').length; sa_z++) {
                if (document.querySelectorAll('div.modal.fade.show[id^=timeupModal]')[sa_z].style.display !== 'none') {
                    document.querySelectorAll('div.modal.fade.show[id^=timeupModal]')[sa_z].style.display = 'none';
                }
            }
        }

// falta testar componente
// div.modal.fade.show[aria-labelledby="completionBox"]
// button.pdfSuccess[alt="Submit Feedback"]
// div#pdfSuccessModal.modal fade show
// div.modal.fade.show#L1FeedBack

        // Mostrar o status correto - Prova Agile
        if (document.querySelectorAll('div.numOfCrrctCol').length > 0) {
            if (document.querySelectorAll('div.numOfCrrctCol')[0].ariaValueText !== '') {
                document.querySelectorAll('div.numOfCrrctCol')[0].innerText = document.querySelectorAll('div.numOfCrrctCol')[0].ariaValueText;
            }
        }

        // -----------------------------------------------------------------------------------------------------------------
        // --- Selecionar o texto é copiar o texto questão (Cursos)
        // -----------------------------------------------------------------------------------------------------------------

        for (var sa_course=0; sa_course < document.querySelectorAll('div[class^=radio] div[aria-hidden="false"]').length; sa_course++) {
            if (document.querySelectorAll('div[aria-hidden="false"]')[sa_course].style.userSelect !== 'inherit') {
                document.querySelectorAll('div[class^=radio] div[aria-hidden="false"]')[sa_course].style.userSelect = 'inherit';
            }
        }

        // -----------------------------------------------------------------------------------------------------------------
        // --- Selecionar o texto é copiar o texto a resposta
        // -----------------------------------------------------------------------------------------------------------------

        // Desativar o corpo de seleção bloqueada para ativar
        // Ativar selecionar o texto
        if (document.body.style.userSelect !== 'inherit') {
            document.body.style.userSelect = 'inherit';
        }
        if (document.body.style.webkitUserSelect !== 'inherit') {
            document.body.style.webkitUserSelect = 'inherit';
        }
        // Prova Quiz Verde
        /*
        if (document.querySelectorAll('.body-content').length > 0) {
            if (document.querySelectorAll('.body-content')[0].style.userSelect !== 'inherit') {
                document.querySelectorAll('.body-content')[0].style.userSelect = 'inherit';
            }
        }
        /*
        if (document.querySelectorAll('div.qtnArea div#code-snippet').length > 0) {
            if (document.querySelectorAll('div.qtnArea div#code-snippet')[0].style.userSelect !== 'inherit') {
                document.querySelectorAll('div.qtnArea div#code-snippet')[0].style.userSelect = 'inherit';
            }
        }
        */
        // Prova EnRouTe - Radio
        if (document.querySelectorAll('div label[role="radio"]').length > 0) {
            for (var sa_enr = 0; sa_enr < document.querySelectorAll('div label[role="radio"]').length; sa_enr++) {
                if (document.querySelectorAll('div label[role="radio"]')[sa_enr].style.userSelect !== 'inherit') {
                    document.querySelectorAll('div label[role="radio"]')[sa_enr].style.userSelect = 'inherit';
                }
            }
        }
        // Prova Normal - Radio
        if (document.querySelectorAll('div.optionsCol label').length > 0) {
            for (var sa_exam = 0; sa_exam < document.querySelectorAll('div.optionsCol label').length; sa_exam++) {
                if (document.querySelectorAll('div.optionsCol label')[sa_exam].style.userSelect !== 'inherit') {
                    document.querySelectorAll('div.optionsCol label')[sa_exam].style.userSelect = 'inherit';
                }
            }
        }
        // Cabeçalho curso de titulo e usuario
        if (document.querySelectorAll("body > div.container.quizScreen > div").length > 0) {
            if (document.querySelector("body > div.container.quizScreen > div")) {
                if (document.querySelector("body > div.container.quizScreen > div").style.userSelect !== 'none') {
                    document.querySelector("body > div.container.quizScreen > div").style.userSelect = 'none';
                }
            }
        }
        // Cabeçalho titulo e tempo
        if (document.querySelectorAll("div.container div.row.quizInfoRow").length > 0) {
            if (document.querySelector("div.container div.row.quizInfoRow")) {
                if (document.querySelector("div.container div.row.quizInfoRow").style.userSelect !== 'none') {
                    document.querySelector("div.container div.row.quizInfoRow").style.userSelect = 'none';
                }
            }
        }
        // Cabeçalho Seleção para desative
        if (document.querySelectorAll("div.col-md-12.col-sm-12.col-12.selectTxtDiv").length > 0) {
            if (document.querySelector("div.col-md-12.col-sm-12.col-12.selectTxtDiv")) {
                if (document.querySelector("div.col-md-12.col-sm-12.col-12.selectTxtDiv").style.userSelect !== 'none') {
                    document.querySelector("div.col-md-12.col-sm-12.col-12.selectTxtDiv").style.userSelect = 'none';
                }
            }
        }
        if (document.querySelectorAll("div.answerArea p#optionDesc").length > 0) {
            if (document.querySelector("div.answerArea p#optionDesc")) {
                if (document.querySelector("div.answerArea p#optionDesc").style.userSelect !== 'none') {
                    document.querySelector("div.answerArea p#optionDesc").style.userSelect = 'none';
                }
            }
        }

        // -----------------------------------------------------------------------------------------------------------------
        // --- Exame diferente - Quiz Verde
        // -----------------------------------------------------------------------------------------------------------------

        // Alerta Advertencia (mouseout) - Ausente
        if (document.querySelectorAll('div#timerId div.timerCard p.assessmentChange').length > 0) {
            if (document.querySelector('div#timerId div.timerCard p.assessmentChange').innerText.indexOf('n Expired') > 5) {
                if (document.querySelector('div#timerId').style.display !== 'none') {
                    document.querySelector('div#timerId').style.display = 'none';
                }
            }
        }
        if (document.body.style.left == '-589px') { document.body.style.left = 'inherit'; }

        if (document.querySelectorAll('div.timerCardPopUp div.timerCard').length > 0) {
            if (document.querySelector('div.timerCardPopUp div.timerCard').innerText.indexOf('n Expired') > 5 || document.querySelector('div.timerCardPopUp div.timerCard').innerText.indexOf('YOUR ASSESSMENT WINDOW WILL CLOSE IN') > 5 || document.querySelector('div.timerCardPopUp div.timerCard').innerText.indexOf('CLICK OK TO EXIT') > 5) {
                if (document.querySelector('div.timerCardPopUp').style.display !== 'none') {
                    document.querySelector('div.timerCardPopUp').style.display = 'none';
                }
            }
        }
        // document.querySelector('div.timerCardPopUp div.timerCard').innerText.indexOf('CLICK OK TO START THE ASSESSMENT') > 5

        // -----------------------------------------------------------------------------------------------------------------
        // --- Exame diferente - EnRouTe
        // -----------------------------------------------------------------------------------------------------------------

        // Alerta Advertencia (mouseout) - Ausente
        if (document.querySelectorAll('div.modal.fade.show[id^=alertBeginning] p.warnHeading').length > 0) {
            for (var sa_tenr = 0; sa_tenr < document.querySelectorAll('div.modal.fade.show[id^=alertBeginning] p.warnHeading').length; sa_tenr++) {
                if (document.querySelectorAll('div.modal.fade.show[id^=alertBeginning] p.warnHeading')[sa_tenr]) {
                    if (document.querySelectorAll('div.modal.fade.show[id^=alertBeginning] p.warnHeading')[sa_tenr].innerText == 'Oops! Warned you!') {
                        if (document.querySelectorAll('div.modal.fade.show[id^=alertBeginning]')[sa_tenr].style.display !== 'none') {
                            document.querySelectorAll('div.modal.fade.show[id^=alertBeginning]')[sa_tenr].style.display = 'none';
                        }
                    }
                    if (document.querySelector('div.modal-body warningBody')) {
                        if (document.querySelector('div.modal-body warningBody').style.display !== 'none') {
                            if (document.querySelector('div#alertBeginning div.interruptedDiv > p.warnPara2').innerText == 'Click OK to resume.') {
                                document.querySelector('div#alertBeginning button').click();
                                /* piscando alerta */
                                document.querySelector('div.modal-body warningBody').style.display = 'none';
                            }
                        }
                    }
                    if (document.querySelector('div#alertBeginning div.interruptedDiv > p.warnPara2').innerText == 'Click OK to resume.') {
                        document.querySelector('div#alertBeginning div.interruptedDiv > p.warnPara2').style.display = 'none';
                        //document.querySelector('div#alertBeginning button').click();
                    }
                }
            }
        }

        // Expiração tempo a prova
        if (document.querySelectorAll('div#staticdivforaria > div.container.timerContainer').length > 0) {
            if (document.querySelector('div#staticdivforaria > div.container.timerContainer')) {
                if (document.querySelector('div#staticdivforaria > div.container.timerContainer').style.display !== 'none') {
                    document.querySelector('div#staticdivforaria > div.container.timerContainer').style.display = 'none';
                }
            }
        }

        // -----------------------------------------------------------------------------------------------------------------
        // --- Exame diferente
        // -----------------------------------------------------------------------------------------------------------------

        // Ativar selecionar o texto e seta de mouse
        if (document.querySelectorAll('div.container div.body-content').length > 0) {
            if (document.querySelectorAll('div.container div.body-content')[0].style.cursor !== 'inherit') {
                document.querySelectorAll('div.container div.body-content')[0].style.cursor = 'inherit';
            }
            if (document.querySelectorAll('div.container div.body-content')[0].style.pointerEvents !== 'inherit') {
                document.querySelectorAll('div.container div.body-content')[0].style.pointerEvents = 'inherit';
            }
            if (document.querySelectorAll('div.container div.body-content')[0].style.userSelect !== 'inherit') {
                document.querySelectorAll('div.container div.body-content')[0].style.userSelect = 'inherit';
            }
        }
        // Exame Business Ethics
        if (document.querySelectorAll('div#assessments div.optionsArea.questionCls li').length > 0) {
            for (var eth=0; eth < document.querySelectorAll('div#assessments div.optionsArea.questionCls li').length; eth++) {
                if (document.querySelectorAll('div#assessments div.optionsArea.questionCls li')[eth].style.pointerEvents !== 'inherit') {
                    document.querySelectorAll('div#assessments div.optionsArea.questionCls li')[eth].style.pointerEvents = 'inherit';
                }
                if (document.querySelectorAll('div#assessments div.optionsArea.questionCls li')[eth].style.cursor !== 'inherit') {
                    document.querySelectorAll('div#assessments div.optionsArea.questionCls li')[eth].style.cursor = 'inherit';
                }
            }
        }
        // Exame Ethics - Feedback TipTool
        if (document.querySelector('div#Qfeedback')) {
            if (document.querySelector('div#Qfeedback').style.display !== 'none') {
                document.querySelector('div#Qfeedback').style.display = 'none';
            }
        }

        // Expiração tempo a prova
        if (document.querySelectorAll('div#TimeoutFB[class="Instruction_dialogue active"]').length > 0) {
            if (document.querySelectorAll('div#TimeoutFB[class="Instruction_dialogue active"]')[0].style.display !== 'none') {
                document.querySelectorAll('div#TimeoutFB[class="Instruction_dialogue active"]')[0].style.display = 'none';
            }
        }

        // Ativar botao submit
        if (document.querySelectorAll('button#submitbutton[class="submit submitEnable"]').length > 0) {
            if (document.querySelectorAll('button#submitbutton[class="submit submitEnable"]')[0].style.pointerEvents !== 'inherit') {
                document.querySelectorAll('button#submitbutton[class="submit submitEnable"]')[0].style.pointerEvents = 'inherit';
            }
            if (document.querySelectorAll('button#submitbutton[class="submit submitEnable"]')[0].style.cursor !== 'pointer') {
                document.querySelectorAll('button#submitbutton[class="submit submitEnable"]')[0].style.cursor = 'pointer';
            }
        }

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

    }, 2000);

/*
    -moz-user-select: inherit;
    -webkit-user-select: inherit;
    -ms-user-select: inherit;
    user-select: inherit;
    -o-user-select: inherit;

    document.body.style.userSelect = 'inherit';
    document.body.style.webkitUserSelect = 'inherit';
    $.fn.disableSelection = function() {
        return this
            .attr('unselectable', 'on')
            .css('user-select', 'none')
            .on('selectstart', false);
    };
*/

/*
    (function() {
        var style=document.createElement('style');
        style.innerHTML='*{user-select: auto !important;} ::selection{background-color: blue !important; color: white !important}';
        document.body.appendChild(style);
        document.body.onselectstart=function(){return true};
        document.body.oncontextmenu=function(){return true};
        document.body.onmousedown=function(){return true};
        document.onkeydown=function(){return true};
    })();
*/

    // Test
    console.log(self.window.location.protocol+"//"+self.window.location.host+"/*");

})();
