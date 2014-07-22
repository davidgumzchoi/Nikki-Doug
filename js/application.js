// Document Window Height
$(function() {
  var windowHeight = $(window).height();
  var wrapperHeight = $('.wrapper').height();
  if (windowHeight > wrapperHeight) {
    $('.wrapper').css({'height':($(window).height())+'px'});
  }
  $(window).resize(function() {
    var windowHeight = $(window).height();
    var differenceHeight = windowHeight - wrapperHeight;
    var newHeight = wrapperHeight + differenceHeight;
    var truecontentHeight = $('.parallax').height();
    if (windowHeight > truecontentHeight) {
      $('.wrapper').css('height', (newHeight)+'px');
    }
  })
});

// Smooth Scrolling
$(function() {
  $('nav a').click(function() {
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
// Click to open

// Gallery
$("#myCarousel").carousel('pause');

// background black...

// img height to never be greater than window height

//

$(function() {
  var windowHeight = $(window).height();
  var imageHeight = $('#gallery .active').height();
    $('#gallery .active img').css({'height':($(window).height())+'px'});
});

// Bridal Party
// Icons that open in lightbox with description

// Wedding
// Google map image background

// Registry
// Click honeyfund

// Hashtag
// Facebook guestlist and instagram hashtag