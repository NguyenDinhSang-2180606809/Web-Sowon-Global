// Main JavaScript for Website Functionality

// Bật hiệu ứng reveal (CSS dùng `.js .reveal`)
if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('js');
}

// ---------- Mobile Menu Toggle ----------
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return;

    const setOpen = (open) => {
        // `is-open` cho CSS mới, `active` giữ lại cho CSS cũ
        navMenu.classList.toggle('is-open', open);
        navMenu.classList.toggle('active', open);
        if (mobileMenuBtn) mobileMenuBtn.textContent = open ? '✕' : '☰';
    };

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            setOpen(!navMenu.classList.contains('is-open'));
        });
    }

    // Đóng menu khi bấm vào link (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 960) setOpen(false);
        });
    });
});

// ---------- Navbar Scroll Effect ----------
(function () {
    function onScroll() {
        const navbar = document.getElementById('navbar') || document.querySelector('.site-nav');
        if (!navbar) return;
        const scrolled = window.scrollY > 50;
        // `is-scrolled` cho CSS mới, `scrolled` giữ lại cho CSS cũ
        navbar.classList.toggle('is-scrolled', scrolled);
        navbar.classList.toggle('scrolled', scrolled);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('DOMContentLoaded', onScroll);
})();

// ---------- Fade-in / Reveal on Scroll ----------
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.reveal, .fade-in');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('is-in', 'visible'));
        return;
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-in', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    items.forEach(el => observer.observe(el));
});

// ---------- FAQ Accordion (if exists) ----------
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

            if (!isActive) faqItem.classList.add('active');
        });
    });
});

// ---------- Form Validation (if contact form exists) ----------
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !phone || !message) {
            alert('Vui lòng điền đầy đủ thông tin / Please fill in all fields');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Email không hợp lệ / Invalid email');
            return;
        }

        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.\n\nThank you for contacting us! We will respond as soon as possible.');
        contactForm.reset();
    });
});

// ---------- Smooth Scroll for anchor links ----------
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
                }
            }
        });
    });
});

// ---------- Active Navigation: theo trang hiện tại (+ scroll-spy nếu dùng #anchor) ----------
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks.length) return;

    const normalize = (path) => {
        let p = (path || '').split('#')[0].split('?')[0].split('/').pop().toLowerCase();
        if (!p) p = 'index.html';
        return p.replace(/\.html$/, '');
    };

    const currentPage = normalize(location.pathname);

    // 1) Đánh dấu theo trang đang mở (không bị mất khi cuộn)
    navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        if (href.startsWith('#')) return;
        link.classList.toggle('active', normalize(href) === currentPage);
    });

    // 2) Scroll-spy chỉ áp dụng cho link dạng #section (nếu có)
    const hashLinks = Array.from(navLinks).filter(l => (l.getAttribute('href') || '').startsWith('#'));
    if (!hashLinks.length) return;

    window.addEventListener('scroll', function () {
        let current = '';
        document.querySelectorAll('section[id]').forEach(section => {
            if (window.pageYOffset >= section.offsetTop - 150) current = section.id;
        });
        if (!current) return;
        hashLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });
});

// ---------- Print Current Year in Footer ----------
document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.current-year').forEach(el => { el.textContent = currentYear; });
});