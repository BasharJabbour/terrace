$(document).ready(function() {
    if ($("article").size() && !$("table").attr("class")) {
        $("table").attr('data-sortable', 't');
        $("table").attr('class', "sortable-theme-minimal");
        Sortable.init();
    }
});

$(window).on('scroll', function() {
   var st = $(window).scrollTop();
   console.log(st);
   $('#tweetthis').css({ 'opacity' : (st/(0.8 * $(window).height())) });
});