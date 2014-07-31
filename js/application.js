// Document Window Height
var windowHeight = $(window).height();
$(function() {
  var wrapperHeight = $('.wrapper').height();
  if (windowHeight > wrapperHeight) {
    $('.wrapper').css({'height':(windowHeight)+'px'});
  }
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

// Gallery
$(function() {
  $('#galleryCarousel').each(function() {
    $(this).carousel({
      interval: 3000
    });
  });
});

$(function() {
  $('#gallery img').css({'height':($(window).height() - 100)+'px'});
});

// BridalParty
$(function() {
  $('#bridesmaidsCarousel').each(function() {
    $(this).carousel({
      interval: false
    });
  });
});

$(function() {
  $('#groomsmenCarousel').each(function() {
    $(this).carousel({
      interval: false
    });
  });
});


  $('.background').hover(
    function() {
      $('.overlay').show();
      $('.something').css({
        background: 'rgba(0, 0, 0, 0.2)'
      });
      $('.background img').css({
        opacity: '0.2'
      });
    }, function() {
      $('.overlay').hide();
      $('.something').css({
        background: '#082567'
      });
      $('.background img').css({
        opacity: '1'
      });
    }
  );
  // on hover
  // make image background black
  // show text label caption


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