$(document).ready(function () {
  // slider background image
  //   $("[data-background]").each(function(){
  //     $(this).css("background-image","url(" +$(this).attr("data-background")+")");
  //     $(this).css("background-repeat","no-repeat");
  //     $(this).css("background-position","center");
  //     $(this).css("background-size","cover");
  //     $(this).css("z-index","-1");
  //     $(this).css("position","absolute");
  // })
//   preloader js here 




  $(window).on("load",function(){
      var preloader = $(".preloader");
    preloader.delay(3000).fadeOut(); 
  })

//   preloader js end 






  var img = $(".team-inner");
  img.css("background-image", function () {
      var bg = "url(" + $(this).data("background") + ")";
      return bg;
  });
  // slick slider
  $(".home-slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
          {
              breakpoint: 767.98,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  autoplay: true,
                  dots: true,
              },
          },
          {
              breakpoint: 575.98,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  autoplay: true,
                  dots: true,
              },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ],
  });

  // video play jquery plugins
  $(".video-play").magnificPopup({
      type: "iframe",
      iframe: {
          markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + "</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

          patterns: {
              youtube: {
                  index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                  id: "v=", // String that splits URL in a two parts, second part should be %id%
                  // Or null - full URL will be returned
                  // Or a function that should return %id%, for example:
                  // id: function(url) { return 'parsed id'; }

                  src: "https://www.youtube.com/embed/%id%?autoplay=1", // URL that will be set as a source for iframe.
              },
          },

          srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      },
  });
  // gallery slider
  $(".gallery-active").slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
          {
              breakpoint: 1199.98,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: true,
                  autoplay: true,
              },
          },
          {
              breakpoint: 991.98,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  autoplay: true,
              },
          },
          {
              breakpoint: 767.98,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  autoplay: true,
              },
          },
          {
              breakpoint: 575.98,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  autoplay: false,
              },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ],
  });
  // services counter up jquery plugin
  $(".counter").counterUp({
      delay: 10,
      time: 2000,
  });
  // team slider
  $(".team-active").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1000,
      dots: true,
      responsive: [
          {
              breakpoint: 1199.98,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,

                  autoplay: false,
              },
          },
          {
              breakpoint: 991.98,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,

                  autoplay: true,
              },
          },
          {
              breakpoint: 767.98,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  autoplay: true,
              },
          },
          {
              breakpoint: 575.98,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  autoplay: true,
              },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ],
  });
  // testimonial slider
  $(".testimonial-active").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,

      autoplaySpeed: 1000,
      vertical: true,
      arrows: true,
      responsive: [
          {
              breakpoint: 767.98,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  autoplay: true,
              },

              breakpoint: 575.98,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  autoplay: true,
              },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ],
  });
  // client slider
  $(".client-active").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,

      autoplaySpeed: 1000,

      arrows: false,
      responsive: [
          {
              breakpoint: 1199.98,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,

                  autoplay: true,
              },
          },
          {
              breakpoint: 991.98,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: false,

                  autoplay: true,
              },
          },
          {
              breakpoint: 767.98,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  autoplay: true,
              },
          },
          {
              breakpoint: 575.98,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  autoplay: true,
              },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ],
  });
  // google map

  // bar filler jquery plugin
  $("#bar1").barfiller({
      barColor: "#ff3d4f",
  });
  $("#bar2").barfiller({
      barColor: "#ff3d4f",
  });
  $("#bar3").barfiller({
      barColor: "#ff3d4f",
  });
  $("#bar4").barfiller({
      barColor: "#ff3d4f",
  });
});
