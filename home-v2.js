/* Sowon Global — hiệu ứng trang chủ v2 (độc lập, không đụng tới i18n.js / script.js) */
(function () {
    'use strict';
    var d = document;
    var root = d.documentElement;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.classList.add('js');

    /* Thanh điều hướng đổi nền khi cuộn */
    var nav = d.getElementById('navbar');
    function onScroll() {
        if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 24);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* Menu mobile: chặn ở pha capture để không bị toggle đôi với mobile-menu.js / script.js */
    var btn = d.getElementById('mobileMenuBtn');
    var menu = d.getElementById('navMenu');
    if (btn && menu) {
        d.addEventListener('click', function (e) {
            if (e.target.closest && e.target.closest('#mobileMenuBtn')) {
                e.stopPropagation();
                var open = menu.classList.toggle('is-open');
                btn.setAttribute('aria-expanded', open ? 'true' : 'false');
                btn.textContent = open ? '✕' : '☰';
            } else if (menu.classList.contains('is-open') && e.target.closest && e.target.closest('#navMenu .nav-link')) {
                menu.classList.remove('is-open');
                btn.setAttribute('aria-expanded', 'false');
                btn.textContent = '☰';
            }
        }, true);
    }

    /* Hiện dần khi cuộn tới */
    var items = d.querySelectorAll('.reveal');
    function show(el) { el.classList.add('is-in'); }
    if ('IntersectionObserver' in window && !reduce) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
        items.forEach(function (el) { io.observe(el); });
    } else {
        items.forEach(show);
    }

    /* Đếm số ở khối thống kê */
    var counters = d.querySelectorAll('.stat-number[data-count]');
    function run(el) {
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        if (isNaN(target) || reduce) { el.textContent = target + suffix; return; }
        var start = null, dur = 1500;
        function step(ts) {
            if (start === null) start = ts;
            var p = Math.min((ts - start) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }
    if ('IntersectionObserver' in window) {
        var co = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) { run(en.target); co.unobserve(en.target); }
            });
        }, { threshold: 0.5 });
        counters.forEach(function (el) { co.observe(el); });
    }
})();
