$(window).scroll(function(){
  let scrolling = $(this).scrollTop();
  if( scrolling > 100){
    $(".backtotop i").fadeIn(500);
  }
  else{
    $(".backtotop i").fadeOut(500);
  }

  if( scrolling > 40){
    $("#navbar").addClass("nav-anim");
  }
  else{
    $("#navbar").removeClass("nav-anim");
  }

  if( scrolling > 40){
    $("#mobile-menu").addClass("nav-anim");
  }
  else{
    $("#mobile-menu").removeClass("nav-anim");
  }
});
// Scroll function end

var scrollLink = $('.scroll-link');
$(scrollLink).on('click', function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top - 20
  }, 400);
});
//  navbar js end

$(".backtotop i").click(function(){
  $("html, body").animate({
      scrollTop:0
  },400)
});
// Backtotop function

var customerSlick = $('.customerSlide');
customerSlick.slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
// Customer slide end

var serviceSlick = $('.serviceSlide');
serviceSlick.slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
// Service slide end

var dataCounter = $('.counter');
dataCounter.counterUp({
  delay: 10,
  time: 1500
});
// Data-counter end

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
// Tooltip end


      