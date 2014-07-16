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

// Active Class on Click and Scroll
// needs revising
$(function(){
    var sections = {},
        _height  = $(window).height(),
        i        = 0;
    
    // Grab positions of our sections 
    $('section').each(function(){
        sections[this.name] = $(this).offset().top;
    });

    $(document).scroll(function(){
        var $this = $(this),
            pos   = $this.scrollTop();
            
        for(i in sections){
            if(sections[i] > pos && sections[i] < pos + _height){
                $('.navigation a').removeClass('active');
                $('.navigation' + i).addClass('active');
            }  
        }
    });
});