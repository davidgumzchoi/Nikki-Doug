// Document Window Height
var windowHeight = $(window).height();
var wrapperHeight = $('.wrapper').height();
if (windowHeight > wrapperHeight) {
  $('.wrapper').css({'height':(windowHeight)+'px'});
}

// Smooth Scrolling
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

// Gallery
$('#galleryCarousel').each(function() {
  $(this).carousel({
    interval: 3000
  });
});

$('#gallery img').css({'height':($(window).height() - 120)+'px'});

// Bridal Party
$('#bridesmaidsCarousel').each(function() {
  $(this).carousel({
    interval: false
  });
});

$('#bridesmaidsCarousel .background').hover(function() {
  $('#bridesmaidsCarousel .overlay').show();
  $('#bridesmaidsCarousel .something').css({
    background: 'rgba(0, 0, 0, 0.2)'
  });
  $('#bridesmaidsCarousel .background img').css({
    opacity: '0.2'
  });
}, function() {
  $('#bridesmaidsCarousel .overlay').hide();
  $('#bridesmaidsCarousel .something').css({
    background: '#082567'
  });
  $('#bridesmaidsCarousel .background img').css({
    opacity: '1'
  });
});

$('#groomsmenCarousel').each(function() {
  $(this).carousel({
    interval: false
  });
});

$('#groomsmenCarousel .background').hover(function() {
  $('#groomsmenCarousel .overlay').show();
  $('#groomsmenCarousel .something').css({
    background: 'rgba(0, 0, 0, 0.2)'
  });
  $('#groomsmenCarousel .background img').css({
    opacity: '0.2'
  });
}, function() {
  $('#groomsmenCarousel .overlay').hide();
  $('#groomsmenCarousel .something').css({
    background: '#082567'
  });
  $('#groomsmenCarousel .background img').css({
    opacity: '1'
  });
});

// Registry
$('#registry .container a').hover(function() {
  $('#registry .container a').css({
    borderWidth: '10px',
    borderStyle: 'double',
    borderColor: '#b29600'
  })
}, function() {
  $('#registry .container a').css({
    borderWidth: '0'
  })
});