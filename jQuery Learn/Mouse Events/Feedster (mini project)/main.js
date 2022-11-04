$(document).ready(() => {
  $(".menu").on("mouseenter", () => {
    $(".nav-menu").show(500);
  });

  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide(500);
  });

  $(".btn")
    .on("mouseenter", (event) => {
      $(event.currentTarget).addClass(".btn-hover");
    })
    .on("nouseleave", (event) => {
      $(event.currentTarget).removeClass(".btn-hover");
    });

  $(".postText").on("keydown", (event) => {
    $(".postText").focus();
    let post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
    if (remaining <= 0) {
      $(".wordcount").addClass('red');
    } else {
      $(".wordcount").removeClass('red');
    }
    $(".characters").html(remaining);
  });
});
