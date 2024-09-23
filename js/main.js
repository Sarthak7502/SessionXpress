(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    // Back to top button
    $(document).ready(function () {
        // Back to top button functionality
        let calcScrollValue = () => {
            let scrollProgress = document.getElementById("progress");
            let pos = document.documentElement.scrollTop;
            let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrollValue = Math.round((pos * 100) / calcHeight);
    
            // Show or hide the progress indicator
            scrollProgress.style.display = pos > 100 ? "grid" : "none";
    
            // Update the circular progress indicator
            scrollProgress.style.background = `conic-gradient(#FFA000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
        };
    
        // Scroll to top on click
        document.getElementById("progress").addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
    
        // Call the scroll value function on scroll and load
        window.onscroll = calcScrollValue;
        window.onload = calcScrollValue;
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

// Zoom link generation
const generateZoomMeeting = () => {
    const zoomLink = 'https://us06web.zoom.us/j/9536806829?pwd=Gbu8XkiNvCw1HbRoULPSMzyXIpgRef.1&omn=89541377549';
    
    document.getElementById('zoom-link').setAttribute('data-zoom-link', zoomLink); // Store link in a data attribute
};

// Show the unique number input section
const showUniqueNumberSection = () => {
    document.getElementById('unique-number-section').style.display = 'block';
};

// Validate unique number and open Zoom
const validateNumber = () => {
    const uniqueNumber = document.getElementById('unique-number').value;
    const validNumbers = ['DYPE24']; // Replace with your valid numbers

    if (validNumbers.includes(uniqueNumber)) {
        const zoomLink = document.getElementById('zoom-link').getAttribute('data-zoom-link');
        window.open(zoomLink, '_blank'); // Open the Zoom link
        document.getElementById('unique-number-section').style.display = 'none'; // Hide input section
    } else {
        alert('Invalid number. Please try again.');
    }
};

// Event listeners
document.getElementById('zoom-link').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    showUniqueNumberSection(); // Show the unique number input section
});

document.getElementById('submit-number').addEventListener('click', validateNumber);
document.getElementById('cancel-number').addEventListener('click', () => {
    document.getElementById('unique-number-section').style.display = 'none'; // Hide input section
});

// Initialize Zoom link on page load
window.onload = function () {
    generateZoomMeeting();
};

})(jQuery);
