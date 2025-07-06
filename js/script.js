// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        const mobileNav = document.getElementById('mobileNav');
        if (mobileNav) mobileNav.classList.toggle('hidden');
    });
}

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) header.classList.toggle('sticky', window.scrollY > 0);
}); 