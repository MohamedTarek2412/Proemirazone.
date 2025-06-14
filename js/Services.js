 // Initialize AOS
 AOS.init();

 // Navbar scroll effect
 window.addEventListener('scroll', function() {
     const navbar = document.querySelector('.navbar');
     if (window.scrollY > 50) {
         navbar.classList.add('scrolled');
     } else {
         navbar.classList.remove('scrolled');
     }
 });

 // PDF download fallback
 document.getElementById('downloadGuide').addEventListener('click', function(e) {
     const link = this.href;
     const filename = 'BusinessSetupGuide.pdf';
     e.preventDefault();
     const a = document.createElement('a');
     a.href = link;
     a.download = filename;
     document.body.appendChild(a);
     a.click();
     document.body.removeChild(a);
 });

 // Social icons debug
 console.log("Social media icons loaded in footer");
 document.addEventListener('DOMContentLoaded', function() {
     const icons = document.querySelectorAll('.social-icons i');
     icons.forEach(icon => {
         if (!window.getComputedStyle(icon, ':before').content) {
             icon.parentElement.classList.add('no-icon');
             console.warn(`Font Awesome icon for ${icon.parentElement.getAttribute('aria-label')} failed to load`);
         }
     });
 });