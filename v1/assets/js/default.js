// -------------------- Banner Slider --------------------
$('#banner_slider').owlCarousel({
    margin:0,
    items: 1,
    nav:false,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    dots:true,
    loop:true,
    smartSpeed:2000,
    autoplay: true,
    autoplayTimeout: 400000000,
    autoplayHoverPause: false,
    responsiveClass:true, 
});
// -------------------- About Us Slider --------------------
$('#ab_slider').owlCarousel({
    margin:0,
    items: 1,
    nav:false,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    dots:true,
    loop:true,
    smartSpeed:1000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    responsiveClass:true, 
});
// -------------------- Filter For Project Section --------------------
$(document).ready(function() {
    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');
        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('1000');
            $('.filter').filter('.' + value).show('1000');
        }
    });
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});
// -------------------- Lightbox For Project Section --------------------
// $(function(){
//     var gallery = $('.gallery a').simpleLightbox({navText:    ['&lsaquo;','&rsaquo;']});
// });