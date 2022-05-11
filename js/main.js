$(document).ready(function () {
    "use strict";

    $('.main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: true
    });

    $(".modal_mobile_content_item_list .drop").click(function() {
        $(this).parent().toggleClass("active");
    });

    $(".modal_mobile_top_menu").click(function() {
        $(".modal_mobile_top_catalog").removeClass("active");
        $(this).addClass("active");
        $(".modal_mobile_content_catalog").removeClass("active");
        $(".modal_mobile_content_menu").addClass("active");
    });

    $(".modal_mobile_top_catalog").click(function() {
        $(".modal_mobile_top_menu").removeClass("active");
        $(this).addClass("active");
        $(".modal_mobile_content_menu").removeClass("active");
        $(".modal_mobile_content_catalog").addClass("active");
    });

    $(".header_block_bottom_main_left_dropdown").click(function() {
        $(this).toggleClass("active");
        $(".modal_mobile").toggleClass("active");
    });

    $(".header_block_bottom_main_mid_catalog").click(function() {
        $(this).toggleClass("active");
        $(".modal_desktop").toggleClass("active");
    });

    $(".footer_block_mobile_mid_content_up").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(".footer_block_desktop_top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(".product_modul_block_main_for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product_modul_block_main_nav_slider'
    });

    $('.product_modul_block_main_nav_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.product_modul_block_main_for',
        dots: false,
        arrows: true,
        prevArrow: $('.product_modul_block_main_nav_prev'),
        nextArrow: $('.product_modul_block_main_nav_next'),
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
                vertical: false,
                verticalSwiping: false,
            }
          }
        ]
    });



    $('.product_block_info_image_slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product_block_info_image_slider_nav'
    });

    $('.product_block_info_image_slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product_block_info_image_slider_for',
        dots: false,
        arrows: true,
        prevArrow: $('.product_block_info_image_slider_prev'),
        nextArrow: $('.product_block_info_image_slider_next'),
        focusOnSelect: true
    });

    $('.product_block_text_mobile_for').slick({
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        focusOnSelect: true,
        variableWidth: true,
        asNavFor: '.product_block_text_mobile_nav'
    });


    $('.product_block_text_mobile_nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product_block_text_mobile_for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        fade: true,
        cssEase: 'linear'
    });

    
    $(".related_block_list_item_img_slider").each(function() {
        
        $(this).children(".related_block_list_item_img_slider_for").slick({
            arrows: false,
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
            asNavFor: $(this).children(".related_block_list_item_img_slider_nav")
        });

        $(this).children(".related_block_list_item_img_slider_nav").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            focusOnSelect: true,
            asNavFor: $(this).children(".related_block_list_item_img_slider_for")
        });
        
    });


    var heightMob = $(".product_block_text_mobile_nav .slick-current").height();
    $(".product_block_text_mobile_nav").css('height', heightMob);


    $('.product_block_text_mobile_nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var NextSlideDom = $(slick.$slides.get(nextSlide));
        var height = NextSlideDom.height();
        $(".product_block_text_mobile_nav").css('height', height);
    });   

    $(".product_block_text_mobile_nav_item_description_more").click(function() {
        $(".product_block_text_mobile_nav_item_description p").addClass("active");
        $(this).addClass("active");
        $('.product_block_text_mobile_nav').slick('refresh');
        // $(".product_block_text_mobile_nav").css('height', "auto");
    });

    $(".product_block_text_desktop_top_item").click(function() {
        $(".product_block_text_desktop_top_item").removeClass("active");
        $(this).addClass("active");
        var attr = $(this).attr("data-target");
        $(".product_block_text_desktop_content_item").removeClass("active");
        $("#" + attr).addClass("active");
    });

    $(".product_block_text_desktop_content_item_more").click(function() {
        $(".product_block_text_desktop_content_item_text").addClass("active");
        $(this).addClass("active");
    });

    $(".product_block_text_mobile_nav_item_grade_right_btn").click(function() {
        $(".modal_back").addClass("active");
        $(".modal_review").addClass("active");
    });

    $(".product_block_text_desktop_content_item_grade_right_btn").click(function() {
        $(".modal_back").addClass("active");
        $(".modal_review").addClass("active");
    });

    $(".modal_back").click(function() {
        $(this).removeClass("active");
        $(".modal_review").removeClass("active");
        $(".modal_cart").removeClass("active");
    });

    $(".modal_review_submit_cancel").click(function() {
        $(".modal_back").removeClass("active");
        $(".modal_review").removeClass("active");
    });

    $(".cart_mobile_block_memo").click(function() {
        $(".cart_mobile_block_final_cashless").addClass('active');
    });

    $(".cart_mobile_block_final_cashless_close").click(function() {
        $(".cart_mobile_block_final_cashless").removeClass("active");
    });

    $(".cart_mobile_block_final_cashless_show").click(function() {
        $(".cart_mobile_block_final_under").addClass("active");
    });

    $(".cart_mobile_block_final_under_telephones_close").click(function() {
        $(".cart_mobile_block_final_under").removeClass("active");
    });

    $(".cart_desktop_block_right_memo").click(function() {
        $(".cart_desktop_block_right_main_cashless").addClass("active");
    });

    $(".cart_desktop_block_right_main_cashless_close").click(function() {
        $(".cart_desktop_block_right_main_cashless").removeClass("active");
    });

    $(".cart_desktop_block_right_main_cashless_show").click(function() {
        $(".cart_desktop_block_right_main_cashless_under").addClass("active");
    });

    $(".cart_desktop_block_right_main_cashless_under_close").click(function() {
        $(".cart_desktop_block_right_main_cashless_under").removeClass("active");
    });

    $(".header_block_bottom_main_right_cart_btn").click(function() {
        $(".modal_back").addClass("active");
        $(".modal_cart").addClass("active");
    });

    $(".modal_cart_close").click(function() {
        $(".modal_cart").removeClass("active");
        $(".modal_back").removeClass("active");
    });

    $(".product_block_text_mobile_nav_item_photos_show").click(function() {
        $(this).css("display", "none");
        $(".product_block_text_mobile_nav_item_photos_images img").addClass("show");
        $(".product_block_text_mobile_nav").css("height", "auto");
    });

    $(".product_block_text_desktop_content_item_photos_show").click(function() {
        $(this).css("display", "none");
        $(".product_block_text_desktop_content_item_photos_images img").addClass("show");
    });

    $(".product_block_text_mobile_nav_item_review_show").click(function() {
        $(this).css("display", "none");
        $(".product_block_text_mobile_nav_item_review_item").addClass("show");
        $(".product_block_text_mobile_nav").css("height", "auto");
    });

    $(".product_block_text_consult_right_open").click(function() {
        $(".product_block_text_consult").addClass("active");
    });

    $(".product_block_text_consult_form_top_btn").click(function() {
        $(".product_block_text_consult").removeClass("active");
    });

    $(".product_block_text_desktop_content_item_consult_default_open").click(function() {
        $(".product_block_text_desktop_content_item_consult").addClass("active");
    });

    $(".product_block_text_desktop_content_item_consult_form_top_btn").click(function() {
        $(".product_block_text_desktop_content_item_consult").removeClass("active");
    });

    $(".product_block_text_desktop_top_btns_next").click(function() {

        if($(".product_block_text_desktop_top_item").last().hasClass("active")) {
            $(".product_block_text_desktop_top_item").removeClass("active");
            $(".product_block_text_desktop_top_item").first().addClass("active");
            $(".product_block_text_desktop_top_item.active").trigger("click");
        } else {
            var active = $(".product_block_text_desktop_top_item.active");
            $(".product_block_text_desktop_top_item").removeClass("active");
            active.next().addClass("active");
            $(".product_block_text_desktop_top_item.active").trigger("click");
        }

    });

    $(".product_block_text_desktop_top_btns_prev").click(function() {

        if($(".product_block_text_desktop_top_item").first().hasClass("active")) {
            $(".product_block_text_desktop_top_item").removeClass("active");
            $(".product_block_text_desktop_top_item").last().addClass("active");
            $(".product_block_text_desktop_top_item.active").trigger("click");
        } else {
            var active = $(".product_block_text_desktop_top_item.active");
            $(".product_block_text_desktop_top_item").removeClass("active");
            active.prev().addClass("active");
            $(".product_block_text_desktop_top_item.active").trigger("click");
        }

    });

    $(".cart_desktop_block_left_btns_item_individual").click(function() {
        $(".cart_desktop_block_left_btns_item").removeClass("active");
        $(this).addClass("active");
        $(".individual_checkout_fields").addClass("active");
        $(".entity_checkout_fields").removeClass("active");
    });

    $(".cart_desktop_block_left_btns_item_entity").click(function() {
        $(".cart_desktop_block_left_btns_item").removeClass("active");
        $(this).addClass("active");
        $(".individual_checkout_fields").removeClass("active");
        $(".entity_checkout_fields").addClass("active");
    });


    $(".cart_mobile_block_person_physical").click(function() {
        $(".cart_mobile_block_person_item").removeClass("active");
        $(this).addClass("active");
        $(".checkout_mob_fields").removeClass("active");
        $(".entity_checkout_mob_fields").addClass("active");
    });

    $(".cart_mobile_block_person_entity").click(function() {
        $(".cart_mobile_block_person_item").removeClass("active");
        $(this).addClass("active");
        $(".checkout_mob_fields").removeClass("active");
        $(".physical_checkout_mob_fields").addClass("active");
    });

});