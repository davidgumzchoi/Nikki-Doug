// // Parallax Scrolling
// $(document).ready(function(){
//     $objWindow = $(window);
//     $('div[data-type="background"]').each(function(){
//         var $bgObj = $(this);
//         $(window).scroll(function() {
//             var yPos = -($objWindow.scrollTop() / $bgObj.data('speed')); 
//             var coords = '100% '+ yPos + 'px';
//             // Animate the background
//              $bgObj.css({backgroundPosition:coords});
//         });
//     });
// });

// Document Window Height
$(function(){
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