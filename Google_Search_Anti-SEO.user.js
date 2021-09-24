// ==UserScript==
// @name         Google_Search_Anti-SEO
// @namespace    http://sandroalvares.com.br
// @version      5.30
// @description  Google Anti-SEO Links without Adblock - Menos Anuncio
// @author       KingRider 2010 a atual

// @match        http*://*.google.com/search?*
// @match        http*://*.google.com.br/search?*

// @require      http://code.jquery.com/jquery-1.9.1.min.js
// @xxrequire      http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js

// @updateURL    https://github.com/KingRider/userscripts/raw/master/Google_Search_Anti-SEO.user.js
// @downloadURL  https://github.com/KingRider/userscripts/raw/master/Google_Search_Anti-SEO.user.js

// @grant        none
// ==/UserScript==

if (jQuery) {
    $(document).ready(function() {

        //$(document).bind('keyup.f4', function() {
        setInterval(function() {
            var x = 0, y = 0, z = 0, xx = 0, xy = 0, temp = '';

            /*
        for (antiseo=0; antiseo < document.querySelectorAll('div.g h3 a').length; antiseo++) {
            document.querySelectorAll('div.g h3 a')[antiseo].removeAttribute('onmousedown');
        }
        */

            /*
        for (x=0; x < $('a').length; x++) {
            if($($('a')[x]).attr('href')) {
                if ($($('a')[x]).attr('href').indexOf('googleadservices.com/pagead/aclk') > 0) {
                    valor1 = $($('a')[x]).next().attr('href');
                    $($('a')[x]).attr('href',valor1.replace(/[_\W]+/g, "."));
                };
            };
        };
        */
            // -- Pesquisa do texto
            for (y=0; y < $("span:contains('Anúncio')").length; y++) {
                $('[onmousedown]').removeAttr('onmousedown');
                //temp = $($("span:contains('Anúncio')").parent()[y]).text().substr(+);
                if ($("a span:contains('Anúncio')").parent().parent()[y]) {
                    temp = $("a span:contains('Anúncio')").parent().parent()[0].dataset.pcu.split(',')[0]; //$("a span:contains('Anúncio')").parent().parent()[y].href;
                    if (temp) {
                        if ($($("span:contains('Anúncio')").parent().parent()[y]).length) {
                            $($("span:contains('Anúncio')").parent().parent()[y])[0].href = temp;
                            $($("span:contains('Anúncio')").parent().parent()[y])[0].href = $($("span:contains('Anúncio')").parent().parent()[y])[0].href.replace(/%E2%80%8E/g, "");
                        }
                        if ($($("span:contains('Anúncio')").parent().parent()[y]).prev().length) {
                            $($("span:contains('Anúncio')").parent().parent()[y]).prev()[0].href = temp;
                            $($("span:contains('Anúncio')").parent().parent()[y]).prev()[0].href = $($("span:contains('Anúncio')").parent().parent()[y]).prev()[0].href.replace(/%E2%80%8E/g, "");
                        }
                        if ($('a[data-pcu]').length) {
                            $('a[data-pcu]')[y].href = temp;
                            $('a[data-pcu]')[0].dataset.rw = temp;
                            $('a[data-pcu]')[0].dataset.pfu = temp;
                            console.log('['+y+'] '+temp);
                        }
                    }
                }
                temp = "";
            }

            // -- Pesquisa do produto
            setInterval(function(){
                if (document.querySelectorAll('div[class*=group]').length > 0) {
                    for (z=0; z < document.querySelectorAll('div[class*=group]')[0].childNodes.length; z++) {
                        if ($(document.querySelectorAll('div[class*=group]')[0].childNodes[z]).find('a[href*="/aclk"][style="display:none"]')) {
                            $(document.querySelectorAll('div[class*=group]')[0].childNodes[z]).find('a[href*="/aclk"][style="display:none"]').remove();
                        }
                        document.querySelectorAll('a')[z].removeAttribute("ontouchstart");
                        document.querySelectorAll('a')[z].removeAttribute("ontouchstart");
                        document.querySelectorAll('a')[z].removeAttribute("arwt");
                    }
                } else if (document.querySelectorAll('div[class*=container]').length > 0) {
                    for (xx=0; xx < document.querySelectorAll('div[class*=container]')[0].childNodes.length; xx++) {
                        if ($(document.querySelectorAll('div[class*=container]')[0].childNodes[z]).find('a[href*="/aclk"][style="display:none"]')) {
                            $(document.querySelectorAll('div[class*=container]')[0].childNodes[z]).find('a[href*="/aclk"][style="display:none"]').remove();
                        }
                    }
                    for (xy=0; xy < document.querySelectorAll('div[class*=container]').length; xy++) {
                        if (document.querySelectorAll('div[class*=container]')[xy].innerText.includes("Patrocinados")) {
                            document.querySelectorAll('div[class*=container]')[xy].remove();
                        }
                    }
                }
                if ($('li.ads\-ad').length) {
                    $('li.ads\-ad').remove();
                }
            }, 1200);
            //console.log($.now());

        }, 2000);

        if (window.location.pathname == "/url" && document.body.innerText.search('Aviso de redirecionamento') === 0) {
            window.location.href = unescape(window.location.search.replace("?hl=pt-BR&amp;q=", ""));
        };

    });
}

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
