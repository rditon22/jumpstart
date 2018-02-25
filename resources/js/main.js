$('document').ready(function(){
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  var scrollDown = 0;
  $(window).scroll(function(event){
    var scroll = $(this).scrollTop();
    if (scroll - scrollDown > 50){
      var navBar =
      $('.navbar').css('height');
      $('.navbar').animate({top: '-' + z}, 150);
    }
  });
});
