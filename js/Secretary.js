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

 // Secondary nav active state
 document.querySelectorAll('.secondary-nav .nav-link').forEach(link => {
     link.addEventListener('click', function() {
         document.querySelectorAll('.secondary-nav .nav-link').forEach(nav => nav.classList.remove('active'));
         this.classList.add('active');
     });
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