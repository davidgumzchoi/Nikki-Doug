// Document Window Height
$(function() {
    var windowHeight = $(window).height();
    var wrapperHeight = $('.wrapper').height();
    if(windowHeight > wrapperHeight) {                            
        $('.wrapper').css({'height':($(window).height())+'px'});
    }                                                                               
    $(window).resize(function(){
        var windowHeight = $(window).height();
        var wrapperHeight = $('.wrapper').height();
        var differenceHeight = windowHeight - wrapperHeight;
        var newHeight = wrapperHeight + differenceHeight;
        var truecontentHeight = $('.parallax').height();
        if(windowHeight > truecontentHeight) {
            $('.wrapper').css('height', (newHeight)+'px');
        }
    })          
});

// Smooth Scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Active Class on Scroll
$(window).scroll(function() {
  var windowScroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (windowScroll >= windowHeight) {
    $('nav').addClass('fixed');
    $('section').each(function(i) {
      if ($(this).position().top <= windowScroll) {
        $('.navigation a.active').removeClass('active');
        $('.navigation a').eq(i).addClass('active');
      }
    });
  } else {
    $('nav').removeClass('fixed');
    $('.navigation a.active').removeClass('active');
    $('.navigation a:first').addClass('active');
  }
}).scroll();

// Our Story
// Click 