$(document).ready(function(){
    $(".slider-wrapper").slick({
        mobileFirst:true,
        dots:false,
        adaptiveHeight: true,
        prevArrow: `<span class="prev-arrow"><img src="images/arrow-left.svg" alt="arrow"></span>`,
        nextArrow: `<span class="next-arrow"><img src="images/arrow-right.svg" alt="arrow"></span>`
    });
    $(".navbar-icon").click(function () {
        $(this).toggleClass("active");
        $('#mynav').toggleClass("active");
        // $('#mynav').slideToggle('slow');
    });
    $('.slide').slick({
        mobileFirst:true,
        arrows:false,
        dots:true,
    });
    $('.search-icon i').click(function(){
        $(".searchbox").toggleClass('active');
    });
    $('.slider-slide').slick({
        mobileFirst:true,
        arrows:false,
        dots: true,
        slidesToShow: 3,
        slidesToSlide:1,
        variableWidth:false,
        variableHeight: true,
        responsive: [
            {
                breakpoint: 992.98,
                settings: "unslick",
            },
        ]
    });
    $('.slider-three').slick({
        mobileFirst: true,
        slidesToShow:1,
        slidesToSldie:1,
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: 20,
        responsive: [
            {
                breakpoint: 576.98,
                settings:{
                    slidesToShow: 2,
                    slidesToSldie: 1,
                    dots: false,
                    arrows: true,
                    prevArrow: `<span class="prev-arrow"><img src="images/arrow-left.svg" alt="arrow"></span>`,
                    nextArrow: `<span class="next-arrow"><img src="images/arrow-right.svg" alt="arrow"></span>`
                }

            }
        ]
    })
}); 