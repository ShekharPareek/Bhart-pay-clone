$(".owl-carousel.main").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
      nav: false,
      infinite: true,
    },
    600: {
      items: 1,
      nav: false,
      infinite: true,
    },
    1000: {
      items: 1,
      nav: false,
      loop: true,
      infinite: true,
    },
  },
});

$(".owl-carousel-B").owlCarousel({
  loop: true,
  items: 7,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 3000,
  autoplaySpeed: 5000,
  responsive: {
    0: {
      items: 4,
    },
    600: {
      items: 6,
    },
    1000: {
      items: 7,
    },
  },
});

$(".menu-btn").click(function () {
  if ($(".menu-bar").hasClass("open-nav")) {
    $(".menu-bar").removeClass("open-nav");
  } else {
    $(".menu-bar").addClass("open-nav");
  }
});

$(".menu-bar li a").click(function () {
  if ($(".menu-bar").hasClass("open-nav")) {
    $(".menu-bar").removeClass("open-nav");
    $(".menu-bar").removeClass("open-nav");
  }
});
