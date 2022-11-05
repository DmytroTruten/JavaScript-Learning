$(document).ready(() => {
  $(".login-button").on("click", () => {
    $(".login-form").toggle();
  });

  $(".menu-button").on("mouseenter", () => {
    $(".nav-menu").show();
    $(".menu-button").addClass('button-active')
  });

  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
    $(".menu-button").removeClass('button-active')
  });
});
