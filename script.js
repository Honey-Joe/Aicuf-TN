const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });


        function showPDF(pdfPath) {
            if (window.innerWidth < 1020) {
              // On Mobile, open in a new tab
              window.open(pdfPath, "_blank");
              
            } else {
              // On Desktop, show inside iframe
              document.getElementById("pdfViewer").src = pdfPath;
              document.getElementById("pdfViewer").classList.remove("hidden");
              document.getElementById("placeholderText").classList.add("hidden");
            }
          }
          
       

       