$(document).ready(function () {
    $(".tab-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        mobileFirst: true,
        prevArrow: `<span class="right-arrow"><img src="../Page-1/images/arrow-left.svg" alt="arrow"></span>`,
        nextArrow: `<span class="left-arrow"><img src="../Page-1/images/arrow-right.svg" alt="arrow"></span>`,
        responsive:[
            {
                breakpoint: 991.98,
                settings: "unslick",
            }
        ]
    });

    $('.tabs-container button').click(function () {
        let tabID = $(this).attr('data-tab');

        $('.tabs-container button').removeClass('active');
        $('.tabs-content-container .tc-container').removeClass('active');

        $(this).addClass('active');
        $("#" + tabID).addClass('active');
    })
});