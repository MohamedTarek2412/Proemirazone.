 // Initialize AOS
 AOS.init({
     duration: 1000,
     once: true,
     offset: 100
 });

 // Navbar scroll effect
 window.addEventListener('scroll', function() {
     const navbar = document.querySelector('.navbar');
     if (window.scrollY > 50) {
         navbar.classList.add('scrolled');
     } else {
         navbar.classList.remove('scrolled');
     }
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         const target = document.querySelector(this.getAttribute('href'));
         if (target) {
             target.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start'
             });
         }
     });
 });

 // Cost Calculator functionality
 function updateCalculator() {
     const businessType = document.getElementById('businessType').value;
     const visaCount = parseInt(document.getElementById('visaCount').value) || 0;
     const bankAccount = document.getElementById('bankAccount').checked;
     const accounting = document.getElementById('accounting').checked;

     let setupCost = 5000;
     if (businessType === 'Mainland Company') setupCost = 7000;
     if (businessType === 'Offshore Company') setupCost = 3000;

     const visaCost = visaCount * 1000;
     let additionalCost = 0;
     if (bankAccount) additionalCost += 1500;
     if (accounting) additionalCost += 2000;

     const totalCost = setupCost + visaCost + additionalCost;

     document.getElementById('setupCost').textContent = '$' + setupCost.toLocaleString();
     document.getElementById('visaCost').textContent = '$' + visaCost.toLocaleString();
     document.getElementById('additionalCost').textContent = '$' + additionalCost.toLocaleString();
     document.getElementById('totalCost').textContent = '$' + totalCost.toLocaleString();
 }

 // Add calculator link to navbar
 document.querySelector('a[href="#calculator"]').addEventListener('click', function(e) {
     e.preventDefault();
     const modal = new bootstrap.Modal(document.getElementById('calculatorModal'));
     modal.show();
 });

 // Calculator event listeners
 document.addEventListener('DOMContentLoaded', function() {
     const calculatorInputs = ['businessType', 'visaCount', 'bankAccount', 'accounting'];
     calculatorInputs.forEach(id => {
         const element = document.getElementById(id);
         if (element) {
             element.addEventListener('change', updateCalculator);
         }
     });
 });

 // Contact form submission
 document.querySelector('.contact-form').addEventListener('submit', function(e) {
     e.preventDefault();

     const btn = this.querySelector('button[type="submit"]');
     const originalText = btn.innerHTML;

     btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
     btn.disabled = true;

     setTimeout(() => {
         btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
         btn.style.background = '#28a745';

         setTimeout(() => {
             btn.innerHTML = originalText;
             btn.disabled = false;
             btn.style.background = '';
             this.reset();
         }, 2000);
     }, 2000);
 });

 // Newsletter subscription
 document.querySelector('.input-group button').addEventListener('click', function() {
     const inputs = this.parentElement.querySelectorAll('input');
     const firstName = inputs[0].value;
     const lastName = inputs[1].value;
     const email = inputs[2].value;
     if (firstName && lastName && email) {
         const originalText = this.innerHTML;
         this.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
         this.style.background = '#28a745';

         setTimeout(() => {
             this.innerHTML = originalText;
             this.style.background = '';
             inputs[0].value = '';
             inputs[1].value = '';
             inputs[2].value = '';
         }, 2000);
     }
 });

 // Language toggle functionality
 document.querySelector('.language-toggle').addEventListener('click', function(e) {
     e.preventDefault();
     const currentLang = this.textContent.includes('EN') ? 'EN' : 'RU';
     const newLang = currentLang === 'EN' ? 'RU' : 'EN';
     this.innerHTML = `<i class="fas fa-globe"></i> ${newLang} / ${currentLang}`;

     this.style.transform = 'scale(0.95)';
     setTimeout(() => {
         this.style.transform = 'scale(1)';
     }, 150);
 });

 // Add floating particles dynamically
 function createParticle() {
     const particle = document.createElement('div');
     particle.className = 'particle';
     particle.style.left = Math.random() * 100 + '%';
     particle.style.width = particle.style.height = (Math.random() * 8 + 4) + 'px';
     particle.style.animationDelay = Math.random() * 20 + 's';
     particle.style.animationDuration = (Math.random() * 10 + 15) + 's';

     document.querySelector('.particles').appendChild(particle);

     setTimeout(() => {
         particle.remove();
     }, 25000);
 }

 setInterval(createParticle, 3000);

 // Intersection Observer for animations
 const observerOptions = {
     threshold: 0.1,
     rootMargin: '0px 0px -50px 0px'
 };

 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
         }
     });
 }, observerOptions);

 document.querySelectorAll('.fade-in-up').forEach(el => {
     observer.observe(el);
 });

 // Add loading animation
 window.addEventListener('load', () => {
     document.body.style.opacity = '0';
     document.body.style.transition = 'opacity 0.5s ease-in-out';
     setTimeout(() => {
         document.body.style.opacity = '1';
     }, 100);
 });