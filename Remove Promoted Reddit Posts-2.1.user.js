// ==UserScript==
// @name         Remove Promoted Reddit Posts
// @namespace    http://reddit.com/
// @version      2.1
// @description  Hide promoted posts on Reddit
// @author       justhenrymod - https://www.reddit.com/r/javascript/comments/8vmz0k/hide_promoted_posts_on_reddit/
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const promotedPosts = document.getElementsByClassName('promotedlink');
    let totalPosts = 0;

    const hidePromotedPosts = () => {
        if (promotedPosts.length === totalPosts) return;
        totalPosts = promotedPosts.length;
        Array.from(promotedPosts).forEach((post) => {
            post.style.display = 'none';
        });
    };

    hidePromotedPosts();
    document.body.addEventListener('DOMNodeInserted', hidePromotedPosts);

/*
    const estilo = document.createElement("estilo");
    document.head.appendChild(estilo);
    style.sheet.insertRule(".promotedlink {display: none;}");
*/

/*
for (var i=0; i < document.querySelectorAll('div').length; i++) {
console.log(document.querySelectorAll('div')[i].className.toString().toLowerCase().indexOf('promotedlink'));
}
*/

/*
const promovidoPosts = document.getElementsByClassName('promotedlink');
deixe totalPosts = 0;
const hidePromotedPosts = () => {
if (promotedPosts.length === totalPosts) return;
totalPosts=promovedPosts.length;
Array.from(promotedPosts).forEach((post) => {
post.style.display = 'nenhum';
});
};
esconderPromotedPosts();
document.body.addEventListener('DOMNodeInserted', hidePromotedPosts);
*/

})();
