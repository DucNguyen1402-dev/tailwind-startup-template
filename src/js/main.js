// AOS Init
AOS.init({
  duration: 800,
  once: true,
  easing: "ease-out-cubic",
  offset: 0,
  delay: 100,
  disable: "mobile",
});

// Glightbox
const lightbox = GLightbox({
  selector: ".glightbox",
  touchNavigation: true,
  loop: true,
  autoplayVideos: true,
  width: "900px",
});

$(document).ready(function () {
  $(".achievement__value").countUp();

  $(".testimonial-cards")
    .on("init", function () {
      AOS.refresh();
    })
    .slick({
      speed: 1000,
      autoplay: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplaySpeed: 5000,
    });

  addBackToTop({
    diameter: 50,
    backgroundColor: "#6366F1",
    textColor: "#fff",
  });
});
