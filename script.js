/**
 * Greenwood School Website - Core Logic
 * Handles dynamic component loading (Header/Footer) and interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    initScrollAnimations();
});

// Navigation Data
const navLinks = [
    { name: 'Home', path: 'index.html' },
    { name: 'About Us', path: 'about.html' },
    { name: 'Admissions', path: 'admissions.html' },
    { name: 'Events', path: 'events.html' },
    { name: 'Achievements', path: 'achievements.html' },
    { name: 'Bulletin', path: 'bulletin-board.html' },
    { name: 'Fees', path: 'fees.html' },
    { name: 'Helpdesk', path: 'helpdesk.html' }
];

function loadHeader() {
    const headerHTML = `
        <!-- Font Awesome for Icons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
        <nav class="navbar">
            <div class="logo-container">
                <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 15px;">
                     <img src="assets/logo.png" alt="Greenwood School Logo" style="height: 60px; width: auto;">
                     <span style="font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--primary-green); letter-spacing: 1px;">GREENWOOD SCHOOL</span>
                </a>
            </div>
            <div class="mobile-toggle" id="mobile-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-links" id="nav-links">
                ${navLinks.map(link => `<li><a href="${link.path}" class="${isActive(link.path)}">${link.name}</a></li>`).join('')}
            </ul>
        </nav>
    `;

    // Insert at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Init Mobile Menu Logic after injection
    const toggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    });
}

function loadFooter() {
    const footerHTML = `
        <footer class="main-footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Greenwood School</h3>
                    <p>Nurturing young minds for a brighter future.</p>
                    <p>123 Education Lane, Knowledge City</p>
                    <p>Affiliated to CBSE</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        ${navLinks.slice(0, 4).map(link => `<li><a href="${link.path}">${link.name}</a></li>`).join('')}
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Resources</h3>
                    <ul>
                         ${navLinks.slice(4).map(link => `<li><a href="${link.path}">${link.name}</a></li>`).join('')}
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contact</h3>
                    <p>Phone: +91 98765 43210</p>
                    <p>Email: info@greenwoodschool.edu</p>
                    <div class="social-icons">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Greenwood School. All Rights Reserved.</p>
                <p class="hikat-credit">Engineered and maintained by <a href="https://hikat.xyz" target="_blank" style="color: var(--accent-yellow); text-decoration: none; font-weight: bold;">HIKAT</a></p>
            </div>
        </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function isActive(path) {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    return currentPath === path ? 'active-link' : '';
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}
