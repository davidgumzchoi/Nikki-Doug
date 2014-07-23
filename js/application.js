// Document Window Height
var windowHeight = $(window).height();
$(function() {
  var wrapperHeight = $('.wrapper').height();
  if (windowHeight > wrapperHeight) {
    $('.wrapper').css({'height':(windowHeight)+'px'});
  }
  $(window).resize(function() {
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
  if (windowScroll >= windowHeight) {
    $('nav').addClass('fixed');
    $('section').each(function(i) {
      if ($(this).position().top <= windowScroll) {
        $('.navigation a').removeClass('active');
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
$("#myCarousel").carousel();

$(function() {
  $('#gallery img').css({'height':($(window).height())+'px'});
});

// Bridal Party
// Icons that open in lightbox with description

// Wedding
// carousel of ceremony and reception
// overlapping on top of google map
$(function() {
  $('#wedding .container').css({'height':($(window).height())+'px'});
});

$(function() {
  $('button.hide-map').hide();
  $('button.show-map').click(function() {
    $('#wedding .row').fadeOut('slow', function() {
      $('button.hide-map').show();
      $('button.show-map').hide();
      $('#wedding iframe').css({
        'opacity':'1',
        'z-index':'0'
      });
    });
  });
  $('button.hide-map').click(function() {
    $('#wedding .row').fadeIn('slow', function() {
      $('button.show-map').show();
      $('button.hide-map').hide();
      $('#wedding iframe').css({
        'opacity':'0.2',
        'z-index':'-1'
      });
    });
  });
});

// $('#wedding')
//     .on('click', function(){
//         lazyLoad('#wedding');
//       })
//     .on('click', '.icn-live-map', function(e){
//       e.preventDefault();
//       $('#festivities').children().not('iframe, .icn-history-close').fadeOut();
//     })
//     .on('click', '.icn-history-close', function(e){
//       e.preventDefault();
//       $('#festivities').children().not('iframe, .icn-history-close').fadeIn();
//     });

// Registry
// Click honeyfund

// Hashtag
// Facebook guestlist and instagram hashtag