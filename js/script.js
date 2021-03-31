$(".scrolldown").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#sectionProject").offset().top,
    },
    500
  );
});
