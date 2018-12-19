$(document).ready(function(){
  $('#nav-icon').click(function() {
    // toggle hamburger/X icon on click
    $(this).toggleClass('open');
    // toggle slide animation on drop down menu
    $('#drop-down-menu').slideToggle(250);
  });
});