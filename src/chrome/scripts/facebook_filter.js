movies = ["doctor strange", "dr. strange", "doctorstrange", "#civilwar", "#teamironman", "#teamcap", "batmanvsuperman", "‪#‎BatmanvSuperman‬","#batmanvsuperman","batman v superman","batman vs superman","civilwar", "dawn of justice", "apocalypse", "suicide squad", "captain america", "x-men" ];
companies = ["marvel", "dc"];

words_to_ignore = movies.concat(companies);
(function() {
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            var newNodes = mutation.addedNodes;
            if (newNodes !== null) {                
                
                var nodes = document.querySelectorAll('.userContentWrapper, ._1bar, ._5my2, ._4qjp, ._2kg4');
                for (var ii = 0, nn = nodes.length; ii < nn; ii++) {
                    var text = nodes[ii] ? nodes[ii].textContent.toLowerCase() : '';
                    words_to_ignore.forEach(function(item){
                        if (text && text.indexOf(item) >= 0 && nodes[ii].style.display != 'none') {
                            nodes[ii].style.display = 'none';
                        }
                    });
                }
            }
        });
    });

    observer.observe(document, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });

})();
