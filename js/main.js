$(document).ready(function () {
    $(window).on('load scroll', function () {
        if ($(window).scrollTop() > 35) {
            $('.header').css({ 'background': 'linear-gradient(to left, #ff0000, #8b0000, #000000)', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)' });
        } else {
            $('.header').css({ 'background': 'none', 'box-shadow': 'none' });
        }
    });

    const counters = document.querySelectorAll('.counter');
    const speed = 120;

    function formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            let count = +counter.innerText.replace(/:/g, '') || 0;

            const inc = target / speed;

            if (count < target) {
                count = count + inc;
                const isWorkingHours = counter.nextElementSibling.innerText === 'Jam Kerja';
                if (isWorkingHours) {
                    counter.innerText = formatTime(Math.floor(count));
                } else {
                    counter.innerText = Math.floor(count);
                }
                setTimeout(updateCount, 10);
            } else {
                const isWorkingHours = counter.nextElementSibling.innerText === 'Jam Kerja';
                if (isWorkingHours) {
                    counter.innerText = formatTime(target);
                } else {
                    counter.innerText = target;
                }
            }
        };

        updateCount();
    });

    (function ($) {
        "use strict";

        $(".clients-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } }
        });

        $(".testimonials-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 992: { items: 4 } }
        });

    })(jQuery);

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    $('.accordion-header').click(function () {
        $('.accordion .accordion-body').slideUp(500);
        $(this).next('.accordion-body').slideDown(500);
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    });

    // // Tambahan untuk mode gelap
    // function toggleDarkMode() {
    //     document.body.classList.toggle('dark-mode');
    //     var icon = document.querySelector('#toggle-button i');
    //     if (document.body.classList.contains('dark-mode')) {
    //         icon.classList.remove('fa-moon');
    //         icon.classList.add('fa-sun', 'animate');
    //         localStorage.setItem('darkMode', 'enabled');
    //     } else {
    //         icon.classList.remove('fa-sun');
    //         icon.classList.add('fa-moon', 'animate');
    //         localStorage.setItem('darkMode', 'disabled');
    //     }
    //     setTimeout(function () {
    //         icon.classList.remove('animate');
    //     }, 500);
    // }

    // document.getElementById('toggle-button').addEventListener('click', toggleDarkMode);

    // window.addEventListener('DOMContentLoaded', (event) => {
    //     if (localStorage.getItem('darkMode') === 'enabled') {
    //         document.body.classList.add('dark-mode');
    //         var icon = document.querySelector('#toggle-button i');
    //         icon.classList.remove('fa-moon');
    //         icon.classList.add('fa-sun');
    //     }
    // });
});