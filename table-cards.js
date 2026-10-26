/* table-cards.js
   Trên điện thoại, các bảng dữ liệu hiển thị dạng thẻ (xem CSS của từng trang).
   Mỗi ô cần biết tên cột của nó -> sao chép chữ ở tiêu đề cột vào thuộc tính data-label.
   Dùng MutationObserver nên tự cập nhật khi đổi ngôn ngữ (i18n.js đổi chữ tiêu đề). */
(function () {
    var SELECTOR = '.lang-price-table, .requirements-table';

    function setup(table) {
        function applyLabels() {
            var labels = [];
            table.querySelectorAll('thead th').forEach(function (th) {
                labels.push(th.textContent.trim());
            });
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
        document.querySelectorAll(SELECTOR).forEach(setup);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();