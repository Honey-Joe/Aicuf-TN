const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });


        function showPDF(pdfUrl) {
            document.getElementById('pdfViewer').src = pdfUrl;
            document.getElementById('pdfViewer').classList.remove('hidden');
            document.getElementById('placeholderText').classList.add('hidden');
        }
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1, // Default: 1 slide per view
            spaceBetween: 20, // Space between slides
            loop: true, // Enable infinite loop
            autoplay: {
                delay: 3000, // Auto-slide every 3 seconds
                disableOnInteraction: false, // Continue autoplay after user interaction
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                640: { slidesPerView: 1 }, // Mobile
                768: { slidesPerView: 2 }, // Tablet
                1024: { slidesPerView: 3 } // Desktop
            }
        });