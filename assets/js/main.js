var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

$(function() {
  $("section h2").each(function(){
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    $("nav ul li:first-child a").parent().addClass("active");
  });

  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();
  });

  sectionHeight();

  $('img').on('load', sectionHeight);
});


// Change Size Header While Scrolling
$(window).scroll(function(){
    var distanceFromTop = $(document).scrollTop();
    if(distanceFromTop < 160 )
    {
        // reduce div padding
        $('.page-header').css('padding-top', '80' - $(document).scrollTop()/2 + 'px');
        $('.page-header').css('padding-bottom', '80' - $(document).scrollTop()/2 + 'px');
    }
    else
    {
        // set minimum div padding
        $('.page-header').css('padding-top', '0px');
        $('.page-header').css('padding-bottom', '0px');
    }
});
