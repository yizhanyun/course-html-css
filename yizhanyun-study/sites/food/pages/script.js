$(document).ready(function(){

  $('.js--section-feature').waypoint(function(direction){
    if(direction == "down"){
      $('nav').addClass('sticky')
    }else{
      $('nav').removeClass('sticky')
    }
  },{
    offset:'60px;'
  });

  $('.js--scroll-plans').click(function(){
    $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000)
  })

  $('.js--scroll-feature').click(function(){
    $('html,body').animate({scrollTop: $('.js--section-feature').offset().top},1000)
  })

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
  
  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animate__animated animate__fadeInDownBig')
  },{
    offset:'50%'
  })
  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
  },{
    offset:'50%'
  })
  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animate__animated animate__bounceIn')
  },{
    offset:'50%'
  })
  $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animate__animated animate__heartBeat')
  },{
    offset:'50%'
  })

  $('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav')
    var icon = $('.js--nav-icon i')

    nav.slideToggle(200)
    if(icon.hasClass('icon-323Menulist')){
      icon.addClass('icon-256cross07')
      icon.removeClass('icon-323Menulist')
    }else{
      icon.addClass('icon-323Menulist')
      icon.removeClass('icon-256cross07')
    }

  })

})