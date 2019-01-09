// ==UserScript==
// @name         Google Anti-SEO Links without Adblock
// @namespace    http://sandroalvares.com.br
// @version      v4.3
// @description  Anti-SEO
// @author       KingRider 2010 a 2018
// @match        https://*.google.com*/search?*
// @match        http://*.google.com*/search?*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {

    //$(document).bind('keyup.f4', function() {
    setTimeout(function() {
        var x = 0, y = 0, valor1 = '', valor2 = '';

        /*
        for (antiseo=0; antiseo < document.querySelectorAll('div.g h3 a').length; antiseo++) {
            document.querySelectorAll('div.g h3 a')[antiseo].removeAttribute('onmousedown');
        }
        */

        for (x=0; x < $('a').length; x++) {
            if($($('a')[x]).attr('href')) {
                if ($($('a')[x]).attr('href').indexOf('googleadservices.com/pagead/aclk') > 0) {
                    valor1 = $($('a')[x]).next().attr('href');
                    $($('a')[x]).attr('href',valor1.replace(/[_\W]+/g, "."));
                };
            };
        };
        for (y=0; y < $("span:contains('Anúncio')").length; y++) {
            valor2 = $($("span:contains('Anúncio')").parent()[y]).text().substr(+7);
            valor2 = valor2.replace(/[_\W]+/g, ".");
            if (valor2) {
                $($("span:contains('Anúncio')").parent().parent()[y])[0].href = "http://"+valor2;
                $($("span:contains('Anúncio')").parent().parent()[y]).prev()[0].href = "http://"+valor2;
            }
        }
        //console.log($.now());

    }, 500);

    if (window.location.pathname == "/url" && document.body.innerText.search('Aviso de redirecionamento') === 0) {
        window.location.href = unescape(window.location.search.replace("?hl=pt-BR&amp;q=", ""));
    };

});

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
