/* mobile-menu.js - bổ sung cho script.js (không thay thế)
   script.js đã mở/đóng menu bằng class "active". File này chỉ thêm:
   - đóng menu khi bấm nút đổi ngôn ngữ
   - đóng menu khi bấm ra ngoài
   - tự đóng khi xoay ngang / mở rộng màn hình */
(function () {
    function init() {
        var btn = document.getElementById('mobileMenuBtn');
        var menu = document.getElementById('navMenu');
        if (!btn || !menu) return;

        btn.setAttribute('aria-label', 'Menu');

        function close() {
            if (!menu.classList.contains('active')) return;
            menu.classList.remove('active');
            btn.textContent = '☰';
        }

        menu.addEventListener('click', function (e) {
            if (e.target.closest('.lang-btn')) close();
        });

        document.addEventListener('click', function (e) {
            if (!menu.contains(e.target) && !btn.contains(e.target)) close();
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 968) close();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();