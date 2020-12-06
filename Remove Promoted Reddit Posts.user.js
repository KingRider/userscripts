// ==UserScript==
// @name         Remove Promoted Reddit Posts
// @namespace    http://reddit.com/
// @version      2.0
// @description  Hide promoted posts on Reddit
// @author       justhenrymod
// @webauthor    https://www.reddit.com/r/javascript/comments/8vmz0k/hide_promoted_posts_on_reddit/
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
})();