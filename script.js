// Toggle menu open/close for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Only apply toggle behavior if the menu toggle exists (mobile only)
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
}

// Fade-out effect
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = href;
        }, 200);
    });
});

// Parallax scrolling effect
function updateBackgroundPosition() {
    const scrolled = window.scrollY;
    document.body.style.backgroundPositionY = -(scrolled * 0.2) + 'px';
}

updateBackgroundPosition();
window.addEventListener('scroll', updateBackgroundPosition);
