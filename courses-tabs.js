/* courses-tabs.js
   Chuyển tab HSK 2.0 / HSK 3.0 / YCT trong bảng giá khóa học (services.html).
   Không có JS -> các bảng hiển thị xếp dọc, thanh tab được ẩn (xem services-courses.css). */
(function () {
    function init() {
        var bar = document.querySelector('[data-course-tabs]');
        if (!bar) return;
        var tabs = Array.prototype.slice.call(bar.querySelectorAll('[role="tab"]'));
        var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });

        function select(i, focus) {
            tabs.forEach(function (t, j) {
                var on = i === j;
                t.setAttribute('aria-selected', on ? 'true' : 'false');
                t.tabIndex = on ? 0 : -1;
                if (panels[j]) panels[j].hidden = !on;
            });
            if (focus) tabs[i].focus();
        }

        tabs.forEach(function (t, i) {
            t.addEventListener('click', function () { select(i); });
            t.addEventListener('keydown', function (e) {
                var n = tabs.length, k = e.key, to = -1;
                if (k === 'ArrowRight' || k === 'ArrowDown') to = (i + 1) % n;
                else if (k === 'ArrowLeft' || k === 'ArrowUp') to = (i - 1 + n) % n;
                else if (k === 'Home') to = 0;
                else if (k === 'End') to = n - 1;
                if (to >= 0) { e.preventDefault(); select(to, true); }
            });
        });

        bar.classList.add('js-tabs');
        select(0);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
