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