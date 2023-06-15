require(['jquery'], function ($) {
  $(document).ready(function () {

    $('li[data-key="myhome"]').hide();
    $('li[data-key="mycourses"]').hide();
    $('li[data-key="siteadminnode"]').hide();

    $('#page-header').remove()

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

    // Slider configuration

    var $slides = document.querySelectorAll('.myslide');
    var $controls = document.querySelectorAll('.slider__control');
    var numOfSlides = $slides.length;
    var slidingAT = 1300; // sync this with scss variable
    var slidingBlocked = false;

    [].slice.call($slides).forEach(function ($el, index) {
      var i = index + 1;
      $el.classList.add('slide-' + i);
      $el.dataset.slide = i;
    });

    [].slice.call($controls).forEach(function ($el) {
      $el.addEventListener('click', controlClickHandler);
    });

    function controlClickHandler() {
      if (slidingBlocked) return;
      slidingBlocked = true;

      var $control = this;
      var isRight = $control.classList.contains('m--right');
      var $curActive = document.querySelector('.myslide.s--active');
      var index = +$curActive.dataset.slide;
      (isRight) ? index++ : index--;
      if (index < 1) index = numOfSlides;
      if (index > numOfSlides) index = 1;
      var $newActive = document.querySelector('.slide-' + index);

      $control.classList.add('a--rotation');
      $curActive.classList.remove('s--active', 's--active-prev');
      document.querySelector('.myslide.s--prev').classList.remove('s--prev');

      $newActive.classList.add('s--active');
      if (!isRight) $newActive.classList.add('s--active-prev');


      var prevIndex = index - 1;
      if (prevIndex < 1) prevIndex = numOfSlides;

      document.querySelector('.slide-' + prevIndex).classList.add('s--prev');

      setTimeout(function () {
        $control.classList.remove('a--rotation');
        slidingBlocked = false;
      }, slidingAT * 0.75);
    };

    // fin slider
  });
});