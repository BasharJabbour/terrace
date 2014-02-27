$(document).ready(function() {
    if ($("article").size() && !$("table").attr("class")) {
        $("table").attr('data-sortable', 't');
        $("table").attr('class', "sortable-theme-minimal");
        Sortable.init();
    }

    $('#st-results-container').bind('DOMNodeInserted DOMSubtreeModified DOMNodeRemoved', function(event) {
        $(".internalcontent").hide();
    });

    if ($("pre").length > 0) {
        $('#article_meta').after("<div class='code'>(Showing code.  Click to hide.)</div>");
        $('.tweet').before("<div class='code'>(Showing code.  Click to hide.)</div>");
    }
    $('.code').click(function() {
        $('pre').toggle();
        $('.code').html($('.code').html() == "(Hiding code.  Click to show.)" ? "(Showing code.  Click to hide.)" : "(Hiding code.  Click to show.)");
    });
});

$(window).on('scroll', function() {
   var st = $(window).scrollTop();
   $('#rightbar').css({ 'opacity' : (st/(0.8 * $(window).height())) });
});

