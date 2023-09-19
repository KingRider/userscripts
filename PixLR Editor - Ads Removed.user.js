// ==UserScript==
// @name         PixLR Editor - Ads Removed
// @namespace    http://www.sandroalvares.com.br
// @version      0.38
// @description  PixLR Editor - Ads Removed + Free Save IMG
// @author       Sandro Alvares
// @match        http*://pixlr.com/br/e/*
// @grant        none

// @updateURL    https://github.com/KingRider/userscripts/raw/master/PixLR%20Editor%20-%20Ads%20Removed.user.js
// @downloadURL  https://github.com/KingRider/userscripts/raw/master/PixLR%20Editor%20-%20Ads%20Removed.user.js

// ==/UserScript==

(function() {
	//$('body').removeProp();

    var tempo1 = setInterval(function() {

        if (document.querySelector('section#top-bar ul#menu li')) {
            var myBodyIdx = document.querySelector('section#top-bar ul#menu');
            var newBaitTagx = document.createElement('li');
            newBaitTagx.classList.add('sandro-png');

            var newBaitTextx = document.createTextNode('   FreeDownload-PNG   ');
            newBaitTagx.appendChild(newBaitTextx);
            myBodyIdx.appendChild(newBaitTagx);

            // Convert canvas to image
            document.querySelector('section#top-bar ul#menu li.sandro-png').addEventListener("click", function(e) {
                var canvas = document.querySelectorAll('canvas')[0];
                var dataURL = canvas.toDataURL("image/png", 1.0);

                downloadImage1(dataURL, 'my-canvas.png');
            });

            // Save PNG | Download image
            function downloadImage1(data, filename = 'untitled.png') {
                var a = document.createElement('a');
                a.href = data;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
            }
        }

        if (document.querySelector('section#top-bar ul#menu li')) {
            var myBodyIdx2 = document.querySelector('section#top-bar ul#menu');
            var newBaitTagx2 = document.createElement('li');
            newBaitTagx2.classList.add('sandro-jpg');

            var newBaitTextx2 = document.createTextNode('   FreeDownload-JPG   ');
            newBaitTagx2.appendChild(newBaitTextx2);
            myBodyIdx2.appendChild(newBaitTagx2);

            // Convert canvas to image
            document.querySelector('section#top-bar ul#menu li.sandro-jpg').addEventListener("click", function(e) {
                var canvas = document.querySelectorAll('canvas')[0];
                var dataURL = canvas.toDataURL("image/jpg", 1.0);

                downloadImage2(dataURL, 'my-canvas.jpg');
            });

            // Save PNG | Download image
            function downloadImage2(data, filename = 'untitled.jpg') {
                var a = document.createElement('a');
                a.href = data;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
            }

            clearInterval(tempo1);
        }
	}, 1000);

	var tempo2 = setInterval(function() {
		/*
        if ($('body').css('padding-right')) {
			$('body').css('padding-right', 'initial').css('min-height','0px').css('margin','0');
			$('div[class^=ad]').remove();
		}
        */
        if (document.querySelectorAll('div#right\-space').length > 0) {
            document.querySelectorAll('div#right\-space')[0].style.display = 'none';
            document.querySelectorAll('body div#workspace')[0].style.right = 0;
            clearInterval(tempo2);
        }
		//if ($('iframe').length > 0) { $('iframe').remove(); }

	}, 1000);

})();
