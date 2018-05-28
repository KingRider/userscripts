// ==UserScript==
// @name         InfoJobs - Anti-Ad-Blocker
// @namespace    http://sandroalvares.com.br
// @version      0.6
// @description  try to take over the world!
// @author       KingRider 2016-2018
// @match        http://*.infojobs.com.br/*
// @match        https://*.infojobs.com.br/*
// @exclude      http://*.infojobs.com.br/candidate/match/insert2.aspx?iv=*
// @exclude      https://*.infojobs.com.br/candidate/match/insert2.aspx?iv=*
// @exclude      https://www.infojobs.com.br/nopublicity.aspx
// @require      https://code.jquery.com/jquery-1.9.1.min.js
// @updateURL    https://github.com/KingRider/userscripts/raw/master/InfoJobs%20-%20Anti-Ad-Blocker.user.js
// @downloadURL  https://github.com/KingRider/userscripts/raw/master/InfoJobs%20-%20Anti-Ad-Blocker.user.js
// @remove       https://educacao.infojobs.com.br/scripts/lectivaCFS.js
// @remove       https://*.infojobs.com.br/app_theme/scriptsv3/webUI/Utils/adframe.js
// @remove       https://www.infojobs.com.br/app_Theme/scripts/smarttag.js
// @remove       http://www.google.com/adsense/search/ads.js
// @remove       https://www.google.com/adsense/search/ads.js
// @grant        none
// ==/UserScript==

(function() {

    /*$.getScript = function(e) {
        console.log(e);
    }; // test */

    //$('#ctl00_scripts').html().remove();
    if (document.querySelectorAll('[id^="_scripts"]').length > 0) { document.querySelectorAll('[id^="_scripts"]')[0].remove(); }
    if (document.querySelectorAll('div.headerSEO').length > 0) { document.querySelectorAll('div.headerSEO')[0].style.display = 'none'; }
    if (document.querySelectorAll('div.promoBanners').length > 0) { document.querySelectorAll('div.promoBanners')[0].remove(); }

    //document.querySelectorAll('div[class^="publicity"]')[0].remove(); //style.display = 'none';
    //document.querySelectorAll('section[class^="publicity"]')[0].remove();
    //document.querySelectorAll('iframe')[0].remove();

    setTimeout(function() {
        var adblock = 0;
        delete adblock1;
        delete adblock2;
        delete ATTag;
    }, 400);

})();
