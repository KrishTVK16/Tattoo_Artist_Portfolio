/* Global Scripts */

document.addEventListener('DOMContentLoaded', () => {

    /*** Theme Toggle ***/
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check local storage or system preference
    const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');

    // Apply theme on load
    if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.textContent = '🌙';
    } else {
        document.body.removeAttribute('data-theme');
        if (themeToggle) themeToggle.textContent = '☀️';
    }

    // Toggle event
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.body.getAttribute('data-theme');
            if (theme === 'light') {
                document.body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            } else {
                document.body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
            }
        });
    }

    /*** Offcanvas Mobile Menu ***/
    const hamburger = document.getElementById('hamburger');
    const offcanvas = document.getElementById('offcanvas-menu');
    const closeBtn = document.getElementById('offcanvas-close');
    const backdrop = document.getElementById('offcanvas-backdrop');

    function toggleMenu() {
        if (offcanvas) {
            offcanvas.classList.toggle('active');
            backdrop.classList.toggle('active');
        }
    }

    if (hamburger) hamburger.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if (backdrop) backdrop.addEventListener('click', toggleMenu);

    /*** Back to Top Button ***/
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            if (backToTop) backToTop.classList.add('visible');
        } else {
            if (backToTop) backToTop.classList.remove('visible');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /*** Navbar Scroll Effect ***/
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // header.style.background = 'var(--color-bg-card)'; // Removed to respect CSS
            header.style.boxShadow = 'var(--shadow-sm)';
        } else {
            // header.style.background = 'transparent'; // Removed to avoid disappearing background
            header.style.boxShadow = 'none';
        }
    });
});
