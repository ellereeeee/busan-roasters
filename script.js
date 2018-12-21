$(document).ready(function(){
  $('#nav-icon').click(function() {
    // toggle hamburger/X icon on click
    $(this).toggleClass('open');
    // toggle slide animation on drop down menu
    $('#drop-down-menu').slideToggle(250);
  });
  // navbar changes color after scrolling past hero section
  $(document).scroll(function() {
    $(".navbar").toggleClass('scrolled', $(this).scrollTop() > $(".hero").height());
  });
});