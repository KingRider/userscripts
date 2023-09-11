// ==UserScript==
// @name         iEvolve - Remove Expired
// @namespace    http://www.sandroalvares.com.br
// @version      v1.1231
// @description  TCS Mandatory Course iEvolve with remove expired (including exam answers does not expire)
// @author       KingRider

// @match        https://ievolvecontent.ultimatix.net/*
// @match        https://ievolveng.ultimatix.net/ievolve/html/sessionExpired.html
// @match        https://ievolveng.ultimatix.net/ievolve/pageNotFound
// @match        https://ievolveng.ultimatix.net/ievolve/coursedetails/*
// @match        https://ievolveng.ultimatix.net/ievolve/competencydetails/*
// @match        https://ievolveng.ultimatix.net/ievolve/mandatorytrainings
// @match        https://ievolveng.ultimatix.net/ievolve/myLearnings/courses/inprogress
// @match        https://ievolveng.ultimatix.net/error/*
// @match        https://ievolve.ultimatix.net/error/*
// @match        https://auth.ultimatix.net/error/errorPages/SAG*
// @match        https://mindworks.ultimatix.net/PlayQuiz_New/Quiz.aspx*

// @grant        none

// @updateURL    https://github.com/KingRider/userscripts/raw/master/iEvolve%20-%20Remove%20Expired.user.js
// @downloadURL  https://github.com/KingRider/userscripts/raw/master/iEvolve%20-%20Remove%20Expired.user.js

// ==/UserScript==

(function (window) {

    const repetir = setInterval(function() {

        var temp = document.location.href;

        if (document.title == 'iEvolve Learner Maintenance') {
            setTimeout(function() {
                document.location.href = 'https://ievolveng.ultimatix.net/ievolve/myLearnings/courses/inprogress';
            }, 32000);
        }
        if (document.location.pathname.indexOf('/error/ievolveng_root_downtime') >= 0) {
            setTimeout(function() {
                document.location.href = 'https://ievolveng.ultimatix.net/ievolve/myLearnings/courses/inprogress';
            }, 34000);
        }
        if (document.location.pathname.indexOf('/sessionExpired') >= 0 || document.location.pathname.indexOf('/pageNotFound') >= 0) {
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
        if (document.location.pathname.indexOf('/error/ievolveng_root') >= 0 || document.location.pathname.indexOf('/error/errorPages/') >= 0 || document.location.pathname.indexOf('/error/ievolve_root_downtime') >= 0) {
            setTimeout(function() {
                document.location.href = 'https://ievolveng.ultimatix.net/ievolve/';
            }, 36000); // Exemplo: 3000 milisegundos em 3 segundos
        }
        if (document.querySelectorAll('app-competency-details')[0].innerText == 'Competency not available') {
            document.location.href = 'https://ievolveng.ultimatix.net/ievolve/';
        }
        if (document.location.pathname.indexOf('/coursedetails/') >= 5) {
            setTimeout(function() {
                document.location.reload();
                console.log('nova pagina atualizada');
            }, 20000); // Exemplo: 3000 milisegundos em 3 segundos
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

        // -----------------------------------------------------------------------------------------------------------------
        // --- Mostrar o status correto
        // -----------------------------------------------------------------------------------------------------------------

        // <!--<div class="correct_count"> <span id="correctcount"></span> </div>-->
        if (document.querySelector('div.qust_count')) {
            if ((document.querySelectorAll('div.correct_count').length > 0) == false) {
                const el = document.createElement('div');
                el.setAttribute('class','correct_count');
                const el2 = document.createElement('span');
                el2.setAttribute('id','correctcount');
                document.querySelector('div.qust_count').parentNode.append(el);
                document.querySelector('div.correct_count').append(el2);
            }
        }

        // Prova Agile
        if (document.querySelectorAll('div.numOfCrrctCol').length > 0) {
            if (document.querySelectorAll('div.numOfCrrctCol')[0].innerText.length > 0) {
                if (document.querySelectorAll('div.numOfCrrctCol')[0].ariaValueText !== '') {
                    document.querySelectorAll('div.numOfCrrctCol')[0].innerText = '';
                    document.querySelectorAll('div.numOfCrrctCol')[0].innerText = document.querySelectorAll('div.numOfCrrctCol')[0].ariaValueText;
//<span class="correctCountArea"><span class="correctGiven">0</span>/<span class="totalQuestions">20</span> Correct</span>
                }
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
        // --- Auto-resposta STEP 2 - Competencia
        // -----------------------------------------------------------------------------------------------------------------
/*
        for (var compt = 0; document.querySelectorAll('form[novalidate] textarea').length > compt; compt++) {
            if (document.querySelectorAll('form[novalidate] textarea')[compt]) {
                if (document.querySelectorAll('form[novalidate] textarea')[compt].value == '') {
                    document.querySelectorAll('form[novalidate] textarea')[compt].value = 'NOT APPLICABLE';
                }
            }
        }
*/
        // comp 1846 - PI
        if (document.location.pathname.indexOf('ievolve/competencydetails/1846') >= 0) {
            if (document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted')) {
                if (document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted').innerText.length <= 18 && document.querySelector('div.sandro') == undefined) {
                    var myBodyIdx = document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted');
                    var newBaitTagx = document.createElement('div');
                    newBaitTagx.classList.add('sandro');
                    var newBaitTextx = document.createTextNode('Obrigatorio (F2): ');
                    newBaitTagx.appendChild(newBaitTextx);
                    myBodyIdx.appendChild(newBaitTagx);

                    var myBodyId = document.querySelector('div.sandro');
                    var newBaitTag = document.createElement('a');
                    newBaitTag.classList.add('sandro');
                    var newBaitText = document.createTextNode(' Ler (15802) ');
                    newBaitTag.setAttribute('href', 'https://ievolveng.ultimatix.net/ievolve/coursedetails/15802');
                    newBaitTag.style.textDecoration = 'auto';
                    newBaitTag.appendChild(newBaitText);
                    myBodyId.appendChild(newBaitTag);

                    var myBodyId2 = document.querySelector('div.sandro');
                    var newBaitTag2 = document.createElement('a');
                    newBaitTag2.classList.add('sandro');
                    var newBaitText2 = document.createTextNode(' Prova (59639) ');
                    newBaitTag2.setAttribute('href', 'https://ievolveng.ultimatix.net/ievolve/coursedetails/59639');
                    newBaitTag2.style.textDecoration = 'auto';
                    newBaitTag2.appendChild(newBaitText2);
                    myBodyId2.appendChild(newBaitTag2);
                }
            }
        }

        // comp 5278 - KM
        if (document.location.pathname.indexOf('ievolve/competencydetails/5278') >= 0) {
            if (document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted')) {
                if (document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted').innerText.length <= 18 && document.querySelector('div.sandro') == undefined) {
                    var myBodyIdx3 = document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted');
                    var newBaitTagx3 = document.createElement('div');
                    newBaitTagx3.classList.add('sandro');
                    var newBaitTextx3 = document.createTextNode('Obrigatorio (F2): ');
                    newBaitTagx3.appendChild(newBaitTextx3);
                    myBodyIdx3.appendChild(newBaitTagx3);

                    var myBodyId3 = document.querySelector('div.sandro');
                    var newBaitTag3 = document.createElement('a');
                    newBaitTag3.classList.add('sandro');
                    var newBaitText3 = document.createTextNode(' Prova (51283) ');
                    newBaitTag3.setAttribute('href', 'https://ievolveng.ultimatix.net/ievolve/coursedetails/51283');
                    newBaitTag3.style.textDecoration = 'auto';
                    newBaitTag3.appendChild(newBaitText3);
                    myBodyId3.appendChild(newBaitTag3);
                }
            }
        }

        // comp 6125 - MFDM
        if (document.location.pathname.indexOf('ievolve/competencydetails/6125') >= 0) {
            if (document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted')) {
                if (document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted').innerText.length <= 18 && document.querySelector('div.sandro') == undefined) {
                    var myBodyIdx4 = document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted');
                    var newBaitTagx4 = document.createElement('div');
                    newBaitTagx4.classList.add('sandro');
                    var newBaitTextx4 = document.createTextNode('Obrigatorio (F2): ');
                    newBaitTagx4.appendChild(newBaitTextx4);
                    myBodyIdx4.appendChild(newBaitTagx4);

                    var myBodyId4 = document.querySelector('div.sandro');
                    var newBaitTag4 = document.createElement('a');
                    newBaitTag4.classList.add('sandro');
                    var newBaitText4 = document.createTextNode(' (Path 2 & Group 2 | Não faça prova ION) ');
                    //newBaitTag4.setAttribute('href', 'https://play.fresco.me/course/740');
                    newBaitTag4.style.textDecoration = 'auto';
                    newBaitTag4.style.color = 'blue';
                    newBaitTag4.appendChild(newBaitText4);
                    myBodyId4.appendChild(newBaitTag4);
                }
            }
        }

/*
        // comp 6434
        if (document.location.pathname.indexOf('ievolve/competencydetails/6434') >= 0) {
            if (document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted')) {
                if (document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted').innerText.length <= 18 && document.querySelector('div.sandro') == undefined) {
                    var myBodyIdxb = document.querySelector('div app-competency-details div.font16.bold.ng-star-inserted');
                    var newBaitTagxb = document.createElement('div');
                    newBaitTagxb.classList.add('sandro');
                    var newBaitTextxb = document.createTextNode('Obrigatorio (F2): ');
                    newBaitTagxb.appendChild(newBaitTextxb);
                    myBodyIdxb.appendChild(newBaitTagxb);

                    var myBodyIdb = document.querySelector('div.sandro');
                    var newBaitTagb = document.createElement('a');
                    newBaitTagb.classList.add('sandro');
                    var newBaitTextb = document.createTextNode(' Ler/Prova (69020) ');
                    newBaitTagb.setAttribute('href', 'https://ievolveng.ultimatix.net/ievolve/coursedetails/69020');
                    newBaitTagb.style.textDecoration = 'auto';
                    newBaitTagb.appendChild(newBaitTextb);
                    myBodyIdb.appendChild(newBaitTagb);
                }
            }
        }
*/
        document.onkeydown = function(evt) {
            document.onkeyup = function(event) {
                if (event.key == "F2" || event.keyCode == 113) { // https://keycode.info/
                    if (document.querySelector('div.sandro').style.display !== 'none') {
                        document.querySelector('div.sandro').style.display = 'none';
                    } else {
                        document.querySelector('div.sandro').style.display = '';
                    }
                }
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
                        if (document.querySelector('div.modal-body warningBody').style.display !== 'none' && top.document.title == 'OHS Assessment') {
                            if (document.querySelector('div#alertBeginning div.interruptedDiv > p.warnPara2').innerText == 'Click OK to resume.') {
                                setTimeout(function() {
                                    document.querySelector('div#alertBeginning button').click();
                                }, 4000);
                                /* piscando alerta */
                                document.querySelector('div.modal-body warningBody').style.display = 'none';
                            }
                        }
                    }
                    if (document.querySelector('div#alertBeginning div.interruptedDiv > p.warnPara2').innerText == 'Click OK to resume.') {
                        document.querySelector('div#alertBeginning div.interruptedDiv > p.warnPara2').style.display = 'none';
                        setTimeout(function() {
                            document.querySelector('div#alertBeginning button').click();
                        }, 4000);
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
/*
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
*/
        // Curso conluido não clicar botão
        for (var compl=0; compl < document.querySelectorAll('div.ng-star-inserted p[id^=statusText]').length; compl++) {
            if (document.querySelector('div.ng-star-inserted [id^=statusText'+ compl +']').innerText == 'Completed' && document.querySelector('div.ng-star-inserted [id^=crsLaunch'+ compl +']').disabled == false) {
                document.querySelector('div.ng-star-inserted [id^=crsLaunch'+ compl +']').disabled = true;
                document.querySelector('div.ng-star-inserted [id^=crsLaunch'+ compl +']').style.cursor = 'not-allowed';
            }
        }
        for (var commpl=0; commpl < document.querySelectorAll('div.ng-star-inserted p[id^=compStatusTxt]').length; commpl++) {
            if (document.querySelector('div.ng-star-inserted [id^=compStatusTxt'+ commpl +']').innerText == 'Completed' && document.querySelector('div.ng-star-inserted [id^=launchBtn'+ commpl +']').disabled == false) {
                document.querySelector('div.ng-star-inserted [id^=launchBtn'+ commpl +']').disabled = true;
                document.querySelector('div.ng-star-inserted [id^=launchBtn'+ commpl +']').style.cursor = 'not-allowed';
            }
        }
        /* Desativar curso ION é nada bom
        _ION
        LX_SP_Assessment
        */
        for (var conmpl=0; conmpl < document.querySelectorAll('a.linkOne').length; conmpl++) {
            if (document.querySelectorAll('a.linkOne')[conmpl].innerText.toUpperCase().indexOf('_ION') > 0 && document.querySelectorAll('a.linkOne')[conmpl].parentNode.parentNode.querySelectorAll('div.ng-star-inserted button')[0].disabled == false) {
                document.querySelectorAll('a.linkOne')[conmpl].parentNode.parentNode.querySelectorAll('div.ng-star-inserted button')[0].disabled = true;
                document.querySelectorAll('a.linkOne')[conmpl].parentNode.parentNode.querySelectorAll('div.ng-star-inserted button')[0].style.cursor = 'not-allowed';
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

    (function() {
        var style=document.createElement('style');
        style.innerHTML='*{user-select: auto !important;} ::selection{background-color: blue !important; color: white !important}';
        document.body.appendChild(style);
        document.body.onselectstart=function(){return true};
        document.body.oncontextmenu=function(){return true};
        document.body.onmousedown=function(){return true};
        document.onkeydown=function(){return true};
    })();

    document.onselectstart = new Function("return true");
    document.oncontextmenu = new Function("return true");
    document.onmousedown = new Function("return true");
    document.onkeydown = new Function("return true");
    document.onclick = new Function("return true");
    document.oncut = new Function("return true");
    document.oncopy = new Function("return true");
    document.onpaste = new Function("return true");

    function bodyUnload() { console.log('expirado e renovado'); }

    // Test
    console.log(self.window.location.protocol+"//"+self.window.location.host+"/*");

})();
