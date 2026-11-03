/* services-table.js
   Trên điện thoại, bảng giá hiển thị dạng thẻ (xem services-mobile-v2.css / services-courses.css).
   Mỗi ô cần biết tên cột của nó -> sao chép chữ ở tiêu đề cột vào thuộc tính data-label.
   Áp dụng cho bảng giá dịch thuật (.lang-price-table) và bảng khóa học (.course-price-table).
   Dùng MutationObserver nên tự cập nhật khi đổi ngôn ngữ (i18n.js đổi chữ tiêu đề). */
(function () {
    function setup(table) {
        function applyLabels() {
            var heads = table.querySelectorAll('thead th');
            var labels = [];
            heads.forEach(function (th) { labels.push(th.textContent.trim()); });

            table.querySelectorAll('tbody tr').forEach(function (tr) {
                tr.querySelectorAll('td').forEach(function (td, i) {
                    if (labels[i] !== undefined) td.setAttribute('data-label', labels[i]);
                });
            });
        }

        applyLabels();

        var thead = table.querySelector('thead');
        if (thead && 'MutationObserver' in window) {
            new MutationObserver(applyLabels).observe(thead, {
                childList: true, characterData: true, subtree: true
            });
        }
    }

    function init() {
        document.querySelectorAll('.lang-price-table, .course-price-table').forEach(setup);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();