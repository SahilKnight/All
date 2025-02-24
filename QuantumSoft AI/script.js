// script.js
$(document).ready(function() {
    // Preloader
    $(window).on('load', function() {
        $('#preloader').fadeOut();
    });

    // Smooth Scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Hamburger Menu
    $('.hamburger').on('click', function() {
        $('.nav-links').toggleClass('active');
    });

    // Client Slider
    $('.client-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Contact Form Submission (Basic Example)// script.js (continued)
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        var formData = new FormData(this);
        // Simulate sending email (replace with actual email sending logic)
        fetch('your-email-sending-script.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
                $('#contactForm')[0].reset();
            } else {
                alert('Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred.');
        });
    });
});