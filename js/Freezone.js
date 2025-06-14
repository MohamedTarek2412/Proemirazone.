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

 // Lazy load images
 document.addEventListener('DOMContentLoaded', function() {
     const lazyImages = document.querySelectorAll('img.lazy');
     const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if (entry.isIntersecting) {
                 const img = entry.target;
                 img.src = img.dataset.src;
                 img.classList.remove('lazy');
                 observer.unobserve(img);
             }
         });
     });
     lazyImages.forEach(img => observer.observe(img));
 });

 // PDF download fallback
 document.getElementById('downloadGuide').addEventListener('click', function(e) {
     const link = this.href;
     const filename = 'DubaiCompanyGuide.pdf';
     e.preventDefault();
     const a = document.createElement('a');
     a.href = link;
     a.download = filename;
     document.body.appendChild(a);
     a.click();
     document.body.removeChild(a);
 });