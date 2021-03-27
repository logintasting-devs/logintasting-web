document.addEventListener("DOMContentLoaded", e => {
    $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 1408,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            }]
        });
    });
})