$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show("slow");
    $(".menu-button").css("color", "#c3ff00");
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide("slow");
    $(".menu-button").css("color", "#efefef");
  })
  
}); 
