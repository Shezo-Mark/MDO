var $owl = $('.comprehensive_coverage_slider');

$owl.children().each(function (index) {
    $(this).attr('data-position', index); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
    center: true,
    loop: true,
    nav:false,
    dots:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1.5
        },
        768: {
            items: 2.5
        },
        1024: {
            items: 3.5
        },
        1440: {
            items: 5.5
        },
        1990: {
            items: 7.5
        }
    }
});

$(document).on('click', '.owl-item>div', function () {
    // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
    var $speed = 300;  // in ms
    $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});
$('.stat-number').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});


$('.test_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            nav: true,
            items: 1
        },
        1000: {
            nav: true,
            items: 2
        },
        1400: {
            nav: true,
            items: 3.5
        }
    }
})