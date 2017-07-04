// ==UserScript==
// @name         fgtauth (Autologin)
// @namespace    http://sandroalvares.com.br
// @version      2.15v
// @description  Fortinet Auth - Autologin
// @author       KingRider 2016 ₢ 2017
// @include      http://*/*
// @include      https://*/*
// @grant        all
// ==/UserScript==

(function() {

    if (document.querySelectorAll('input[name=magic]')[0]) {

        if (localStorage.fgtauth === undefined) {
            conta = 0;
            localStorage.setItem('fgtauth',0);
        } else {
            conta = localStorage.fgtauth;
        }

    //setTimeout(function() {
        if (document.querySelector('input[name=username]').value !== "" && document.querySelector('input[name=password]').value !== "") {
            //if (window.location.search.replace('?','') == document.querySelectorAll('input[name=magic]')[0].value) {
            setTimeout(function() {
                for (x=0; x < document.getElementsByTagName('form').length; x++) {
                    //document.querySelectorAll('input[type=submit][value=Continue]')[x].click();
                    //document.getElementsByTagName('form')[x].submit();
                    document.forms[x].submit();
                    document.forms[x].submit();
                }
            }, 5000);
            //console.log(document.forms[0]);
            conta++;
            localStorage.setItem('fgtauth', conta);
            //setTimeout(function() { window.location.reload(); }, parseInt( (localStorage.getItem('fgtauth')?localStorage.getItem('fgtauth'):1) )*3000);
            /*
            var button = document.getElementById("myButton");
            button.addEventListener("click",function(e){
                button.disabled = "true";
            },false);
            */
            //}
        } else {
            if (document.querySelector('input[name=username]').value === "" && document.querySelector('input[name=username]').value === "") {
                document.querySelector('input[name=username]').value = "sandro.fernandes";
                document.querySelector('input[name=password]').value = "sandromega";
                setTimeout(function() {
                    for (x=0; x < document.getElementsByTagName('form').length; x++) {
                        //document.querySelectorAll('input[type=submit][value=Continue]')[x].click();
                        //document.getElementsByTagName('form')[x].submit();
                        document.forms[x].submit();
                    }
                }, 5000);
            }
        }

        if (document.querySelectorAll('body.blocked').length > 0) {
            window.location = "https://www.browserling.com/browse/win/7/chrome/50/"+window.location.href;
        }
    }
    //}, parseInt( (localStorage.getItem('fgtauth')?localStorage.getItem('fgtauth'):1) )*3000 );

    //Array.from(document.querySelectorAll("ali#credit")).forEach(button=>button.click())

})();
