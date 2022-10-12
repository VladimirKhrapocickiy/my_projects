$(function () {
  const header = $("header");
  const hederHeight = header.height();
  console.log(hederHeight)
  $(".nav-mobile").css({
    marginTop: hederHeight - 1 + "px",
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("header_fixed");
      $(".main-page").css({
        marginTop: hederHeight + "px",
      });
    } else {
      header.removeClass("header_fixed");
      $(".main-page").css({
        marginTop: 0,
      });
    }
  });
});
