/* Global Scripts */

document.addEventListener('DOMContentLoaded', () => {

    /*** Theme Toggle ***/
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check local storage or system preference
    const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');

    // Apply theme on load
    if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeToggles.forEach(toggle => toggle.textContent = '🌙');
    } else {
        document.body.removeAttribute('data-theme');
        themeToggles.forEach(toggle => toggle.textContent = '☀️');
    }

    // Toggle event
    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            let theme = document.body.getAttribute('data-theme');
            if (theme === 'light') {
                document.body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
                themeToggles.forEach(t => t.textContent = '☀️');
            } else {
                document.body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggles.forEach(t => t.textContent = '🌙');
            }
        });
    });

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

    /*** FAQ Accordion ***/
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    /*** Dashboard Sidebar Toggle ***/
    const dashboardHamburger = document.getElementById('dashboard-hamburger');
    const dashboardSidebar = document.querySelector('.sidebar');

    if (dashboardHamburger && dashboardSidebar) {
        dashboardHamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            dashboardSidebar.classList.toggle('active');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 900 &&
                dashboardSidebar.classList.contains('active') &&
                !dashboardSidebar.contains(e.target) &&
                e.target !== dashboardHamburger) {
                dashboardSidebar.classList.remove('active');
            }
        });

        // Close sidebar when a link is clicked
        const sidebarLinks = dashboardSidebar.querySelectorAll('a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    dashboardSidebar.classList.remove('active');
                }
            });
        });
    }
});
