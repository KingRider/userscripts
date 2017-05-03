// ==UserScript==
// @name         Google Anti-SEO Links
// @namespace    http://sandroalvares.com.br
// @version      v3.0
// @description  Anti-SEO
// @author       KingRider
// @match        https://*.google.com/*
// @match        http://*.google.com/*
// @match        https://*.google.com.br/*
// @match        http://*.google.com.br/*
// @exclude      http://docs.google.com/*
// @exclude      https://docs.google.com/*
// @exclude      http://mail.google.com/*
// @exclude      https://mail.google.com/*
// @require      http://code.jquery.com/jquery-1.9.1.min.js
// ==/UserScript==


(function() {
    setInterval(function() {
        for (x=0; x < document.querySelectorAll('div.g h3 a').length; x++) {
            document.querySelectorAll('div.g h3 a')[x].removeAttribute('onmousedown');
        }
    }, 500);
})();

/*
if ($('div.rc h3.r a').length) {
    var healerReplaced = $('body').html().replace(/data-href="([^\'\"]+)/gi, '');
    $('body').html(healerReplaced);
}
*/

/*
$(document).ready(function() {
	setInterval(function() {
		console.log(document.querySelectorAll('a[data-href]').length);
		for (x=0; x < document.querySelectorAll('a[data-href]').length; x++) {
			console.log(x);
			if (typeof(document.querySelectorAll('a[data-href]')[x]) != "undefined") {
				try {
                    //document.querySelectorAll('div#search a')[x].setAttribute('href', document.querySelectorAll('div#search a')[x].getAttribute('data-href'));
                    sa_link = decodeURIComponent(document.querySelectorAll('a[data-href]')[x].href.substring((document.querySelectorAll('a[data-href]')[x].href.indexOf('url=')+4), document.querySelectorAll('a[data-href]')[x].href.indexOf('&usg')));
                    document.querySelectorAll('a[data-href]')[x].href = sa_link;
                    console.log(sa_link);
                    sa_link = "";
                } catch(e) { console.log(x); }
			}
		}
	}, 1500);
});
*/

        /*
        $('div.rc h3.r a[data-href]').each(function() {
            $(this).attr('href', $(this).attr('data-href'));
        });
        */

/*
$.each( $('div.rc h3.r a[data-href]'), function() {
    $(this).attr('href', $(this).attr('data-href'));
});
*/

/*
$.each(function() {
    $(('div.rc h3.r a[data-href]')).attr('href', ('div.rc h3.r a[data-href]').attr('data-href'));
});
*/

/*
if ($('body:contains("http://www.wikihow.com/Disable-Adblock")').length) {
    var healerReplaced = $('body').html().replace(/\<style\>#(.*?)\{/gi, '#stopHacker{');
    $('body').html(healerReplaced);
}

------------------------------------------------------------------------------------------------

$("div.rc h3.r a").each(function() {
    var text = $(this).text();
    text = text.replace("data-href", "href");
    $(this).text(text);
});

------------------------------------------------------------------------------------------------

$('a').each(function(e){
    var queryString = this.href;
    queryString = queryString.substring(queryString.indexOf('?'), queryString.length);

    var params = new Array();

    while (queryString)
    {
        var front = queryString.indexOf('&d-')+1;
        var back = queryString.indexOf('&d-')+10;
        if (front) {
            params.push(queryString.substring(front, back));
            queryString = queryString.substring(back, queryString.length);
        }
        else
            queryString = '';
    }

    var functionCall = 'callMethod('+params[0]+', '+params[1]+', '+params[2]+');';
    $(this).attr('onclick', functionCall);
    this.innerHTML = functionCall;
});

*/
