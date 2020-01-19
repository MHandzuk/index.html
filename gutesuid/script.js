// $(".single-slide").slick();
// $(".autoplay").slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000
// });
$(".main-page__slider").slick({
  lazyLoad: "ondemand",
  slidesToShow: 4,
  slidesToScroll: 1,
  // variableWidth: true,
  // dots: true,
  // infinite: true,
  speed: 500,
  autoplay: true
  // prevArrow:
  //   '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> Туда</button>',
  // nextArrow:
  //   '<button id="next" type="button" class="btn btn-juliet">Сюда <i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
  // centerMode: true
});
