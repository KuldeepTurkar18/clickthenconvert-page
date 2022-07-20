$(document).ready(function(){
  $(".navbar-toggler").click(function(){
    setTimeout(function(){
      $("body").toggleClass("overlay-black");
    }, 300);
  });
});

$(document).ready(function() {
  AOS.init({
      duration: 1200,
  })
});

$(document).ready(function () {
    $('.clients-say .testimonial-block:lt(6)').show();
    $('#showLess').hide();
    // console.log($(".testimonial-block").length);
    var items =  $(".testimonial-block").length;
    var shown =  6;
    $('#loadMore').click(function () {
        $('#showLess').css("display", "inline-block");
        shown = $('.clients-say .testimonial-block:visible').length+6;
        if(shown< items) {
          $('.clients-say .testimonial-block:lt('+shown+')').show(300);
        } else {
          $('.clients-say .testimonial-block:lt('+items+')').show(300);
          $('#loadMore').hide();
        }
    });

    $('#showLess').click(function () {
        $('.clients-say .testimonial-block').not(':lt(6)').hide(300);
        $('#loadMore').show();
        $('#showLess').hide();
    });
});

$(document).ready(function () {
  $('.trackrecord-section .trackrecord-result:lt(6)').show();
  $('#show-trackLess').hide();
  var items =  $(".trackrecord-result").length;
  var shown =  6;
  $('#load-trackMore').click(function () {
      $('#show-trackLess').css("display", "inline-block");
      shown = $('.trackrecord-section .trackrecord-result:visible').length+6;
      if(shown< items) {
        $('.trackrecord-section .trackrecord-result:lt('+shown+')').show(300);
      } else {
        $('.trackrecord-section .trackrecord-result:lt('+items+')').show(300);
        $('#load-trackMore').hide();
      }
  });
  $('#show-trackLess').click(function () {
      $('.trackrecord-section .trackrecord-result').not(':lt(6)').hide(300);
      $('#load-trackMore').show();
      $('#show-trackLess').hide();
  });
});

// video blogs less and more btn

$(document).ready(function () {
  $('.video-blogs .video-blogs-box:lt(6)').show();
  $('#show-videoLess').hide();
  var items =  $(".video-blogs-box").length;
  var shown =  6;
  $('#load-videoMore').click(function () {
      $('#show-videoLess').css("display", "inline-block");
      shown = $('.video-blogs .video-blogs-box:visible').length+6;
      if(shown< items) {
        $('.video-blogs .video-blogs-box:lt('+shown+')').show(300);
      } else {
        $('.video-blogs .video-blogs-box:lt('+items+')').show(300);
        $('#load-videoMore').hide();
      }
  });
  $('#show-videoLess').click(function () {
      $('.video-blogs .video-blogs-box').not(':lt(6)').hide(300);
      $('#load-videoMore').show();
      $('#show-videoLess').hide();
  });
});

// blogs less and more btn
$(document).ready(function () {
  $('.our-blogs .blogs-box:lt(6)').show();
  $('#show-blogLess').hide();
  var items =  $(".blogs-box").length;
  var shown =  6;
  $('#load-blogMore').click(function () {
      $('#show-blogLess').css("display", "inline-block");
      shown = $('.our-blogs .blogs-box:visible').length+6;
      if(shown< items) {
        $('.our-blogs .blogs-box:lt('+shown+')').show(300);
      } else {
        $('.our-blogs .blogs-box:lt('+items+')').show(300);
        $('#load-blogMore').hide();
      }
  });
  $('#show-blogLess').click(function () {
      $('.our-blogs .blogs-box').not(':lt(6)').hide(300);
      $('#load-blogMore').show();
      $('#show-blogLess').hide();
  });
});

// case-study less and more 
$(document).ready(function () {
  $('.trackrecord-section .casestudy-box:lt(6)').show();
  $('#show-caseLess').hide();
  var items =  $(".casestudy-box").length;
  var shown =  6;
  $('#load-caseMore').click(function () {
      $('#show-caseLess').css("display", "inline-block");
      shown = $('.trackrecord-section .casestudy-box:visible').length+6;
      if(shown< items) {
        $('.trackrecord-section .casestudy-box:lt('+shown+')').show(300);
      } else {
        $('.trackrecord-section .casestudy-box:lt('+items+')').show(300);
        $('#load-caseMore').hide();
      }
  });
  $('#show-caseLess').click(function () {
      $('.trackrecord-section .casestudy-box').not(':lt(6)').hide(300);
      $('#load-caseMore').show();
      $('#show-caseLess').hide();
  });
});

// scroll stop less and more 
$(document).ready(function () {
  $('.scroll-stopping-section .scroll-stopbox:lt(6)').show();
  $('#loadless-work').hide();
  var items =  $(".scroll-stopbox").length;
  var shown =  6;
  $('#loadmore-work').click(function () {
      $('#loadless-work').css("display", "inline-block");
      shown = $('.scroll-stopping-section .scroll-stopbox:visible').length+6;
      if(shown< items) {
        $('.scroll-stopping-section .scroll-stopbox:lt('+shown+')').show(300);
      } else {
        $('.scroll-stopping-section .scroll-stopbox:lt('+items+')').show(300);
        $('#loadmore-work').hide();
      }
  });
  $('#loadless-work').click(function () {
      $('.scroll-stopping-section .scroll-stopbox').not(':lt(6)').hide(300);
      $('#loadmore-work').show();
      $('#loadless-work').hide();
  });
});

var scroll_pos = 0;
$(document).scroll(function() { 
  scroll_pos = $(this).scrollTop();
      // var mq = window.matchMedia( "(min-width: 769px)" );
      if($(window).width() > 769){

        if(scroll_pos > 50) {
          $("#header").css({'padding': '0px 110px', 'transition': 'all .7s'});
          $("#header .btn-main").css({'padding': '10px 24px', 'transition': 'all .7s'});
          $("#header .navbar-brand img").css({'width': '90%', 'transition': 'all .7s'});
        }

        else{
          $("#header").css({'padding': '4px 110px'});   
          $("#header .btn-main").css({'padding': '13px 24px'});               
          $("#header .navbar-brand img").css({'width': '100%'});                   
        } 
      }
      
    });
    
$(document).ready(function () {
  jQuery('.client-speak').owlCarousel({
    animateOut: 'fadeOut',
    items:3,
    margin:30,
    autoplay: false,
    loop: true,
    nav: true,
    dots:true,
    smartSpeed:450,
    responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:2,
      },
      1000:{
          items:2,
          nav:true,
      }
  }
  });
});

$(document).ready(function () {
  jQuery('.testimonial').owlCarousel({
    animateOut: 'fadeOut',
    items:1,
    margin:0,
    autoplay: true,
    loop: true,
    nav: false,
    dots:true,
    smartSpeed:450
  });
});

// $("a[href="#opening-detail"]").click(function() {
//   $('html,body').animate({
//       scrollTop: $("#opening-detail").offset().top},
//       'slow');
// });

$("a[href='#opening-detail']").click(function() {
  $('html, body').animate({
    scrollTop: $("#opening-detail").offset().top
  }, 500);
  return false;
});

$(document).ready(function(){
  $("#navbarNav .dropdown-toggle").click(function(event){
    console.log("test test test");
    $(".dropdown-menu").toggleClass("open-menu");
    event.stopPropagation();
  });

  $("body").click(function(){
    console.log("djhdjkhg");
    $(".dropdown-menu").removeClass("open-menu");
  });

  $(".getmarkenting-need li").click(function(){
    $(this).toggleClass("active");
  });
});

