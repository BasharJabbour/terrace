$(document).ready(function() {
    if ($("article").size() && !$("table").attr("class")) {
        $("table").attr('data-sortable', 't');
        $("table").attr('class', "sortable-theme-minimal");
        Sortable.init();
    }

    $('#st-results-container').bind('DOMNodeInserted DOMSubtreeModified DOMNodeRemoved', function(event) {
        $(".internalcontent").hide();
    });
});

$(window).on('scroll', function() {
   var st = $(window).scrollTop();
   $('#tweetthis').css({ 'opacity' : (st/(0.8 * $(window).height())) });
});