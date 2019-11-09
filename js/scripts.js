$(document).ready(function() { 

  $('.main-burger-btn').click(function(){
    $('.modal-categories').toggleClass('hide');
  }); 
   $('.btn-catalog-items').click(function(){
    $('.modal-categories').toggleClass('hide');
    $('.downArrow').toggleClass('hide');
    $('.upArrow').toggleClass('hide');
  }); 
        $('.first-level').click(function(){
      if($(window).width() <= '1128'){
        $('.first-level-categories').toggleClass('hide');
        $('.second-level-categories').removeClass('hide');
        $('.second-level-categories').removeClass('show');
        $('.third-level-categories').removeClass('hide');
        $('.third-level-categories').removeClass('show');
        $('.categories-3').removeClass('hide');
        $('.categories-3').removeClass('show');
        $('.categories-4').removeClass('hide');
        $('.categories-4').removeClass('show');
        $(this).parent().toggleClass('show');
        $(this).parent().children().toggleClass('show');
      }
      });
       $('.second-level').click(function(){
        if($(window).width() <= '1128'){
        $('.second-level-categories').toggleClass('hide');
        $('.third-level-categories').removeClass('hide');
        $('.third-level-categories').removeClass('show');
        $('.categories-4').removeClass('hide');
        $('.categories-4').removeClass('show');
         $(this).parent().toggleClass('show');
        $(this).parent().children().toggleClass('show');
      }
      });
        $('.third-level').click(function(){
          if($(window).width() <= '1128'){
        $('.third-level-categories').toggleClass('hide');
         $(this).parent().toggleClass('show');
        $(this).parent().children().toggleClass('show');
      }
      });
      if ($(window).width() > '1128') {
        $('.first-level-categories').hover(function(){
          $(this).children('ul').toggleClass('show');
        });
        $('.second-level-categories').hover(function(){
          $(this).children('ul').toggleClass('show');
        });
        $('.third-level-categories').hover(function(){
          $(this).children('ul').toggleClass('show');
        });
      }

$(".icons-grid a").parent().click(function(){
    return false;
});
$(".list-btn a").click(function(){
    $('.result-item').addClass('result-item-list');
    $('.wrapper-item-text-grid').addClass('wrapper-item-text-grid-list');
    $('.wrapper').addClass('wrapper-propherty-list');
    $('.add-comparison-grid').addClass('add-comparison-list');
    $('.list-btn img').css('opacity', '1');
    $('.grid-btn img').css('opacity', '0.5');
});
$(".grid-btn a").click(function(){
    $('.result-item').removeClass('result-item-list');
    $('.wrapper-item-text-grid').removeClass('wrapper-item-text-grid-list');
    $('.wrapper').removeClass('wrapper-propherty-list');
    $('.add-comparison-grid').removeClass('add-comparison-list');
    $('.grid-btn img').css('opacity', '1');
    $('.list-btn img').css('opacity', '0.5');
});

  $(".hide-brand-btn").click(hideLeftBlocks('brand'));
  $(".show-brand-btn").click(showLeftBlocks('brand'));
  $(".hide-construction-btn").click(hideLeftBlocks('construction'));
  $(".show-construction-btn").click(showLeftBlocks('construction'));
  $(".show-color-btn").click(showLeftBlocks('color'));
  $(".show-color-btn").click(hideLeftBlocks('color'));
  $(".show-price-btn").click(showLeftBlocks('price'));
  $(".show-price-btn").click(hideLeftBlocks('price'));


  var blocksValue = ['brand', 'construction', 'color', 'price'];

  function hideLeftBlocks(string){
    $(".hide-" + string + "-btn").click(function(){
      $('.hide-show-' + string).toggle('fast');
      $('.hide-' + string + '-btn').addClass('hide');
      $('.show-'+ string +'-btn').removeClass('hide');
  });
  }
    function showLeftBlocks(string){
    $(".show-"+ string +"-btn").click(function(){
      $('.hide-show-' + string).toggle('fast');
      $('.show-'+ string +'-btn').addClass('hide');
      $('.hide-'+ string +'-btn').removeClass('hide');
  });
  }
});

    // $('.first-level-categories').mouseenter(function() {
    //   $(this).append('<div class="categories-2 show"><div class="second-level-categories"><a href="#" class="second-level">Подкатегория 1</a></div></div>');
    //   }).mouseleave(function() {
    //       $('div.categories-2').remove();
    //   });
    //   $('div.categories-2').mouseleave(function() {
    //       $(this).remove();
    //   });

$(".tab_item").not(":first").hide();
$(".wrapper_tabs .tab").click(function() {
	$(".wrapper_tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(document).ready(function(){
  $('.top-slider-right').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      infinite: true,
      autoplaySpeed: 2000,
      responsive: [
          {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
          },
          {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
      ]
  });
});
$(document).ready(function(){
  $('.bot-slider-right').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      infinite: true,
      autoplaySpeed: 2000,
      responsive: [
          {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
          },
          {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
          }
      ]
  });
});
$(document).ready(function(){
  $('.horizontal_menu').slick({
      dots: false,
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
        breakpoint: 1702,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 1428,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 1156,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        },
        },
        {
        breakpoint: 668,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
        
    ]
  });
});