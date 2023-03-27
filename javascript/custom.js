require(['jquery'], function ($) {
  $(document).ready(function () {

    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('#scroll').fadeIn();
      } else {
        $('#scroll').fadeOut();
      }
    });
    $('#scroll').click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });

    console.log("JQuery ?")

    // Slider configuration
    var images = $('.slider img');
    var currentIndex = 0;

    images.eq(currentIndex).addClass('active');

    setInterval(function () {
      images.eq(currentIndex).removeClass('active');

      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }

      images.eq(currentIndex).addClass('active');
    }, 3000);
    // fin slider

    console.log("final ---->>")
  });
});