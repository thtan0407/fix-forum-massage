var windowWidth = $(window).width();
$(document).ready(function() {
  $(".humburger, .close_menu").on("click", function(){
      windowWidth < 992 && (
          $('.menu').toggleClass('show_menu'),
          $(".humburger").toggleClass("active_humburger"),
          $(".to-menu").next("ul").removeClass("show_iner_menu"), 
          $(".home-direction").toggleClass("overlay")
      )
  }),
  $(".to-menu").on("click", function() {
      windowWidth < 992 && (
          $(this).next("ul").toggleClass("show_iner_menu"), 
          $(".menu").toggleClass("overflow")
      )
  }), 
  $(".back").on("click", function() {
      windowWidth < 992 && 
      $(this).parent().removeClass("show_iner_menu")
  }),
  $(document).on("mouseup", function(e) {
      var o = $(".menu");
      o.is(e.target) || 0 !== o.has(e.target).length || (
          $(".menu").removeClass("show_menu"), 
          $(".humburger").removeClass("active_humburger"), 
          $(".to-menu").next("ul").removeClass("show_iner_menu"), 
          $(".home-direction").removeClass("overlay"))
    })
})

$(document).ready(function() {
  $("#popup-signin").click(function() {
      $('.form-wrap').addClass("form-right"),
      $('.form-wrap').removeClass("form-left"),
      $(".register").addClass("form-hidden")
  }),
  $("#popup-register").click(function() {
      $('.form-wrap').addClass("form-left"),
      $('.form-wrap').removeClass("form-right"),
      $(".register").removeClass("form-hidden")
  }),
  $(".to-signin-thumb").click(function() {
      $("#form-wrap").removeClass("form-left"), 
      $("#form-wrap").addClass("form-right"),
      $(".register").addClass("form-hidden")
  }),  
  $(".to-register-thumb").click(function() {
      $(".register").removeClass("form-hidden"),
      $("#form-wrap").removeClass("form-right"), 
      $("#form-wrap").addClass("form-left")
  })
  $("#forgot .back-signin").click(function() {
      $('#forgot').modal('hide');
      $("#form-wrap").addClass("form-right");
      $(".register").addClass("form-hidden")
  })
  $(".back-forgot").click(function() {
      $("#signin").modal('hide');
  })
});

$(document).ready(function() {
  $('.status').on("click",function () {
      $(this).toggleClass('gray');
      $(this).html(function(i, v){
        return v === '<i></i> Offline' ? '<i></i> Đang online' : '<i></i> Offline'
    });
  })
});

$(document).ready(function() {
  $('#success-login').click(function () {
    $('.info').toggle(500);
  });
  $('.user-choose .close').click(function () {
    $('.info').toggle(500);
  });
}); 

$(document).ready(function() {
  $('.language p').click(function () {
      $('.user-choose ul li.language ul').toggleClass('toggle-language');
      $('.language p i').toggleClass('toggle-language-icon');
  })
});

$(document).ready(function() {
   $(".content-post .nav-tabs li:first-child").click(function(event) {
       $("#new-reply").addClass('fade')
   });
});

$(document).ready(function(){
   $('.slide-one').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'linear', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-two').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-out', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-three').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-four').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-out', /* ------------------ */ 
      arrows: true,
  })
});

// Call back to top

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#return-to-top').fadeIn();
      } else {
        $('#return-to-top').fadeOut();
      }
    });

  $('#return-to-top').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1200);
        return false;
});

$(document).ready(function($) {
    $('#chat .chat-arrow-child').click(function() {
        $('#chat .chat-main').slideToggle(500),
        $('#chat .chat-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#community .community-arrow-child').click(function() {
        $('#community .community-main').slideToggle(500),
        $('#community .community-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#hcm-city .hcm-city-arrow-child').click(function() {
        $('#hcm-city .hcm-city-main').slideToggle(500),
        $('#hcm-city .hcm-city-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#hcm-city-2 .hcm-city-2-arrow-child').click(function() {
        $('#hcm-city-2 .hcm-city-2-main').slideToggle(500),
        $('#hcm-city-2 .hcm-city-2-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#job .job-arrow-child').click(function() {
        $('#job .job-main').slideToggle(500),
        $('#job .job-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#community-sg .community-sg-arrow-child').click(function() {
        $('#community-sg .community-sg-main').slideToggle(500),
        $('#community-sg .community-sg-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#community-hn .community-hn-arrow-child').click(function() {
        $('#community-hn .community-hn-main').slideToggle(500),
        $('#community-hn .community-hn-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#community-ct .community-ct-arrow-child').click(function() {
        $('#community-ct .community-ct-main').slideToggle(500),
        $('#community-ct .community-ct-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function($) {
    $('#community-z-group .community-z-group-arrow-child').click(function() {
        $('#community-z-group .community-z-group-main').slideToggle(500),
        $('#community-z-group .community-z-group-arrow-child i').toggleClass('toggle');
    });
});

$(document).ready(function() {
  $(".community-sg-main ul li .community-sg-forums .fa").click(function() {
      $('.forum-sg-hidden').hide(500);
      $(".community-sg-main ul li .community-sg-forums .fa").show(500); 
      $(this).hide(500);
      $(this).closest('.community-sg-main ul li .community-sg-forums').find(".forum-sg-hidden").slideToggle("500");
  });

  $(".community-sg-main ul li .community-sg-forums .forum-sg-hidden button").click(function () {
      $(this).closest(".community-sg-main ul li .community-sg-forums .forum-sg-hidden").hide(500);
      $(".community-sg-main ul li .community-sg-forums .fa").show(500)
  })
});

$(document).ready(function() {
  $(".community-hn-main ul li .community-hn-forums .fa").click(function() {
      $('.forum-hn-hidden').hide(500);
      $(".community-hn-main ul li .community-hn-forums .fa").show(500); 
      $(this).hide(500);
      $(this).closest('.community-hn-main ul li .community-hn-forums').find(".forum-hn-hidden").slideToggle("500");
  });

  $(".community-hn-main ul li .community-hn-forums .forum-hn-hidden button").click(function () {
      $(this).closest(".community-hn-main ul li .community-hn-forums .forum-hn-hidden").hide(500);
      $(".community-hn-main ul li .community-hn-forums .fa").show(500)
  })
});

$(document).ready(function() {
  $(".community-ct-main ul li .community-ct-forums .fa").click(function() {
      $('.forum-ct-hidden').hide(500);
      $(".community-ct-main ul li .community-ct-forums .fa").show(500); 
      $(this).hide(500);
      $(this).closest('.community-ct-main ul li .community-ct-forums').find(".forum-ct-hidden").slideToggle("500");
  });

  $(".community-ct-main ul li .community-ct-forums .forum-ct-hidden button").click(function () {
      $(this).closest(".community-ct-main ul li .community-ct-forums .forum-ct-hidden").hide(500);
      $(".community-ct-main ul li .community-ct-forums .fa").show(500)
  })
});

$(document).ready(function() {
  $(".community-z-group-main ul li .community-z-group-forums .fa").click(function() {
      $('.forum-z-group-hidden').hide(500);
      $(".community-z-group-main ul li .community-z-group-forums .fa").show(500); 
      $(this).hide(500);
      $(this).closest('.community-z-group-main ul li .community-z-group-forums').find(".forum-z-group-hidden").slideToggle("500");
  });

  $(".community-z-group-main ul li .community-z-group-forums .forum-z-group-hidden button").click(function () {
      $(this).closest(".community-z-group-main ul li .community-z-group-forums .forum-z-group-hidden").hide(500);
      $(".community-z-group-main ul li .community-z-group-forums .fa").show(500);
  })
});

// $(document).ready(function() {
//     $("#new-reply .read-more").click(function () {
//       $(this).closest(".main-post").find("ul").removeClass('toggle-read');
//       $(this).closest(".main-post").find("#new-reply ul").addClass('toggle-read');
//       $(".read-more").show();
//       $("#new-reply .read-more").hide()
//     })
// });

// $(document).ready(function() {
//     $("#new-post .read-more").click(function () {
//       $(this).closest(".main-post").find("ul").removeClass('toggle-read');
//       $(this).closest(".main-post").find("#new-post ul").addClass('toggle-read');
//       $(".read-more").show();
//       $("#new-post .read-more").hide()
//     })
// });

// $(document).ready(function() {
//     $("#event .read-more").click(function () {
//       $(this).closest(".main-post").find("ul").removeClass('toggle-read');
//       $(this).closest(".main-post").find("#event ul").addClass('toggle-read');
//       $(".read-more").show();
//       $("#event .read-more").hide()
//     })
// });
// $(document).ready(function() {
//     $("#purchase .read-more").click(function () {
//       $(this).closest(".main-post").find("ul").removeClass('toggle-read');
//       $(this).closest(".main-post").find("#purchase ul").addClass('toggle-read');
//       $(".read-more").show();
//       $("#purchase .read-more").hide()
//     })
// });


$(document).ready(function(){
  $('.slide-item').slick({
      autoplay:true,
      dots: true,
      slidesPerRow: 5,
      slidesToScroll: 4,
      swipeToSlide: true,
      rows: 2,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesPerRow: 3,
          rows: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 2,
          rows: 2,
        }
      }
    ]
  });
});


$(document).ready(function(){
   $('.slide-fix-one').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-out', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-fix-two').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-in', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-fix-three').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-in', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-fix-four').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-out', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-fix-five').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-out', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-fix-six').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-in', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-fix-seven').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'leaner', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-fix-eight').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-out', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-fix-nine').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'ease-in', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function(){
   $('.slide-fix-ten').slick({
      autoplay:true,
      dots: false,
      infinite: false,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade:true, /* ------------------ */ 
      cssEase: 'leaner', /* ------------------ */ 
      arrows: true,
  })
});

$(document).ready(function() {
  $('.toggle-expand button').on('click', function() {
     $('.expand .m-content').toggleClass("expand-content");
     $('.toggle-expand').hide();
  });
});


$(document).ready(function($) {
  $(".main-comment .expand .title-expand a").click(function() {
    event.preventDefault();
    $('html').animate({
      scrollTop: $("#page-single").offset().top - 20 }, 1400);
  });
})

$(document).ready(function() {
   $('.count-post .toggle-option button').on("click",function() {
      $('.form-option').toggle();
   })
   $('.form-option .control-form input:last-child').on("click",function() {
      $('.form-option').hide();
   })
});

$(document).ready(function() {
  $('.see-more-author button').on('click', function() {
     var e = $(this).closest('.comment-single').find('.info-author')
     e.addClass('see-more-bonus');
     var f = $(this).closest('.comment-single').find('.see-more-author')
     f.css({
       display: 'none'
     });
  })
});

$(document).ready(function() {
  $('.see-more-author button').on('click', function() {
     var e = $(this).closest('.content-single').find('.info-author')
     e.addClass('see-more-bonus');
     var f = $(this).closest('.content-single').find('.see-more-author')
     f.css({
       display: 'none'
     });
  })
});