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

    (function(){
      var count = 0,
      list = [
        {
          service: 'reddit',
          user: 'jmduke'
        },
        {
          service: 'github',
          user: 'jmduke'
        },
        {
          service: 'hypem',
          user: 'jmduke'
        },
        {
          service: 'tumblr',
          user: 'jmduke'
        },
        {
          service: 'twitter',
          user: 'justinmduke'
        },
        {
          service: 'stackoverflow',
          user: '3344238'
        }
      ];

      Date.prototype.toISO8601 = function(date) {
          var pad = function (amount, width) {
              var padding = "";
              while (padding.length < width - 1 && amount < Math.pow(10, width - padding.length - 1))
                  padding += "0";
              return padding + amount.toString();
          }
          date = date ? date : new Date();
          var offset = date.getTimezoneOffset();
          return pad(date.getFullYear(), 4)
              + "-" + pad(date.getMonth() + 1, 2)
              + "-" + pad(date.getDate(), 2)
              + "T" + pad(date.getHours(), 2)
              + ":" + pad(date.getMinutes(), 2)
              + ":" + pad(date.getUTCSeconds(), 2)
              + (offset > 0 ? "-" : "+")
              + pad(Math.floor(Math.abs(offset) / 60), 2)
              + ":" + pad(Math.abs(offset) % 60, 2);
      };

      $("#lifestream div").lifestream({
        limit: 30,
        list: list,
        feedloaded: function(){
          count++;
          // Check if all the feeds have been loaded
          if( count === list.length + 1 ){
            $("#lifestream li").each(function(){
              var element = $(this),
                  date = new Date(element.data("time"));
              element.append(' <abbr class="timeago" title="' + date.toISO8601(date) + '">' + date + "</abbr>");
            })
            $("#lifestream .timeago").timeago();
          }
        }
      });
    })();
});

$(window).on('scroll', function() {
   var st = $(window).scrollTop();
   $('#rightbar').css({ 'opacity' : (st/(0.8 * $(window).height())) });
});

