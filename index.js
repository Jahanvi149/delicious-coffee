var $ = jQuery.noConflict();

$( document ).ready(function() {
  $('.accordian-section > li:not(.active) > .body-content').hide();
  $(document).on("click",".accordian-section > li .title",function() {
      if ($(this).parents('li').hasClass("active")) {
        $(this).parents('li').removeClass("active").find(".body-content").slideUp(300);
      } else {
        $(".accordian-section > li.active .body-content").slideUp();
        $(".accordian-section > li.active").removeClass("active");
        $(this).parents('li').addClass("active").find(".body-content").slideDown();
      }
  });
});


jQuery(document).ready(function(){
    setTimeout(function(){
    jQuery(document).on('click','.tab-btn li a',function(e){  
        e.preventDefault();
        jQuery(".tab-btn li, .tab-body .tab-content").removeClass('tab-active');
        jQuery(this).parent().addClass('tab-active');
        jQuery(".tab-body .tab-content[data-id='"+jQuery(this).attr('data-id')+"']").addClass("tab-active");
        });
    }, 3000);
});



$(function(){
    $('.slider-list').bxSlider({
      mode: 'horizontal',
      captions: true,
      slideWidth: 1000,
      slideHeight: 800
    });
  });













// jQuery(document).ready(function(){
//     setTimeout(function(){
//     jQuery(document).on('click','.md-tnwr-recentreview-main .md-tnwr-recentreview-head ul li a',function(e){  
//         e.preventDefault();
//         jQuery(".md-tnwr-recentreview-main .md-tnwr-recentreview-head ul li, .md-tnwr-recentreview-main .md-tnwr-recentreview-list").removeClass('tab-active');
//         jQuery(this).parent().addClass('tab-active');
//         jQuery(".md-tnwr-recentreview-main .md-tnwr-recentreview-list[data-id='"+jQuery(this).attr('data-id')+"']").addClass("tab-active");
//         jQuery('.md-tnwr-recentreview-list').slick('refresh');
//         });
//     }, 3000);
// });