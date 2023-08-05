$(document).on('ready', function() 
{
    $(".slider").slick(
    {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    });
});