// auto update copyright year in footer 
document.getElementById("year").textContent = new Date().getFullYear();

$('#nav-icon').click(function() {

  // toggle hamburger/X icon on click
  $(this).toggleClass('open');

  // toggle slide animation on drop down menu
  $('#drop-down-menu').slideToggle(250);

});

$('.drop-down-menu-item').click(function() {
  
  // mobile nav goes away when text inside is clicked
  $('#drop-down-menu').slideToggle(250);
  
  // toggle hamburger/X icon when menu closes
  $('#nav-icon').toggleClass('open');
  
});

$(document).scroll(function() {

  // navbar changes color after scrolling past hero section
  $(".navbar").toggleClass('scrolled', $(this).scrollTop() > $(".hero").height() - 1);

  // Fade in opaque articles on scroll
  $('.opaque-article').each(function(){

      // distance from top of article to top of site + height of object = bottom coordinate of article
      var bottom_of_article = $(this).offset().top + $(this).outerHeight();
      // distance from everything from top of scrollbar to top of site + height of window = bottom coordinate of window
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > bottom_of_article ){
          $(this).animate({'opacity':'1'},500);
      }

  }); //close .opaque-article each

}); // close document scroll