$(document).ready(function(){
    $('.slid-container').slick({
        mobileFirst: true,
        slidesToShow:1,
        slidesToScroll:1,
        arrows: false,
        dots:true,
        responsive:[
            {
            breakpoint: 576.98,
            settings: {
                slidesToShow: 3,
            }
            
        }
        ]
    });
});