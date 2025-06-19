// Mobile navigation toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

  const backgrounds = [
            'images/DSC_6102.jpg',
            'images/peskon.jpg',
            'images/DSCF3578.jpg',
            'images/DSCF9062.jpg'
        ];

setInterval(changeBackground, 3000); 

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});