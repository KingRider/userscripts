// ==UserScript==
// @name         RPA Challenge
// @namespace    http://sandroalvares.com.br
// @version      0.1
// @description  try to take over the world!
// @author       Sandro Alvares
// @match        http://rpachallenge.com/*
// @grant        none
// ==/UserScript==

(function() {

    var sa_json = [{"First Name":"John","Last Name":"Smith","Company Name":"IT Solutions","Role in Company":"Analyst","Address":"98 North Road","Email":"jsmith@itsolutions.co.uk","Phone Number":"40716543298"},
{"First Name":"Jane","Last Name":"Dorsey","Company Name":"MediCare","Role in Company":"Medical Engineer","Address":"11 Crown Street","Email":"jdorsey@mc.com","Phone Number":"40791345621"},
{"First Name":"Albert","Last Name":"Kipling","Company Name":"Waterfront","Role in Company":"Accountant","Address":"22 Guild Street","Email":"kipling@waterfront.com","Phone Number":"40735416854"},
{"First Name":"Michael","Last Name":"Robertson","Company Name":"MediCare","Role in Company":"IT Specialist","Address":"17 Farburn Terrace","Email":"mrobertson@mc.com","Phone Number":"40733652145"},
{"First Name":"Doug","Last Name":"Derrick","Company Name":"Timepath Inc.","Role in Company":"Analyst","Address":"99 Shire Oak Road","Email":"dderrick@timepath.co.uk","Phone Number":"40799885412"},
{"First Name":"Jessie","Last Name":"Marlowe","Company Name":"Aperture Inc.","Role in Company":"Scientist","Address":"27 Cheshire Street","Email":"jmarlowe@aperture.us","Phone Number":"40733154268"},
{"First Name":"Stan","Last Name":"Hamm","Company Name":"Sugarwell","Role in Company":"Advisor","Address":"10 Dam Road","Email":"shamm@sugarwell.org","Phone Number":"40712462257"},
{"First Name":"Michelle","Last Name":"Norton","Company Name":"Aperture Inc.","Role in Company":"Scientist","Address":"13 White Rabbit Street","Email":"mnorton@aperture.us","Phone Number":"40731254562"},
{"First Name":"Stacy","Last Name":"Shelby","Company Name":"TechDev","Role in Company":"HR Manager","Address":"19 Pineapple Boulevard","Email":"sshelby@techdev.com","Phone Number":"40741785214"},
{"First Name":"Lara","Last Name":"Palmer","Company Name":"Timepath Inc.","Role in Company":"Programmer","Address":"87 Orange Street","Email":"lpalmer@timepath.co.uk","Phone Number":"40731653845"}];

    var sa_round;
    if ($) { // Check jQUery is actived
        $('button')[0].click();
        for (sa_round = 0; sa_round < sa_json.length; sa_round++) {
            $('input[ng-reflect-name="labelFirstName"]').val(sa_json[sa_round]["First Name"]);
            $('input[ng-reflect-name="labelLastName"]').val(sa_json[sa_round]["Last Name"]);
            $('input[ng-reflect-name="labelCompanyName"]').val(sa_json[sa_round]["Company Name"]);
            $('input[ng-reflect-name="labelRole"]').val(sa_json[sa_round]["Role in Company"]);
            $('input[ng-reflect-name="labelAddress"]').val(sa_json[sa_round]["Address"]);
            $('input[ng-reflect-name="labelEmail"]').val(sa_json[sa_round]["Email"]);
            $('input[ng-reflect-name="labelPhone"]').val(sa_json[sa_round]["Phone Number"]);
            $('input[type=submit]').click();
        }
    } else {
        alert('jQuery está desativado!');
    }

})();
