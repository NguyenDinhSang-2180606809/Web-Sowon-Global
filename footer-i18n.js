/* Bổ sung bản dịch cho phần "Liên Hệ" ở footer.
   Nạp NGAY SAU i18n.js (trước DOMContentLoaded) để gộp vào đối tượng `translations`.
   Khi muốn gọn, có thể dán các khóa này thẳng vào từng ngôn ngữ trong i18n.js rồi xóa file này. */
(function () {
    if (typeof translations === 'undefined') return;
    var extra = {
        vi: {
            'footer.contact.company': 'CÔNG TY TNHH SOWON GLOBAL',
            'footer.contact.tax': 'MST:',
            'footer.contact.hotline': 'Hotline:',
            'footer.contact.email': 'Email:',
            'footer.contact.address': 'Địa chỉ: Tầng 2, Tòa nhà Saigon Paragon, Số 3 Nguyễn Lương Bằng, Phường Tân Mỹ, Thành phố Hồ Chí Minh, Việt Nam',
            'footer.contact.addressShort': 'Địa chỉ: Hồ Chí Minh, Việt Nam'
        },
        en: {
            'footer.contact.company': 'SOWON GLOBAL CO., LTD',
            'footer.contact.tax': 'Tax code:',
            'footer.contact.hotline': 'Hotline:',
            'footer.contact.email': 'Email:',
            'footer.contact.address': 'Address: 2nd Floor, Saigon Paragon Building, 3 Nguyen Luong Bang, Tan My Ward, Ho Chi Minh City, Vietnam',
            'footer.contact.addressShort': 'Address: Ho Chi Minh City, Vietnam'
        },
        ko: {
            'footer.contact.company': 'SOWON GLOBAL CO., LTD (소원 글로벌 유한회사)',
            'footer.contact.tax': '사업자(세무) 번호:',
            'footer.contact.hotline': '핫라인:',
            'footer.contact.email': '이메일:',
            'footer.contact.address': '주소: 사이공 파라곤 빌딩 2층, 응우옌르엉방 3번지, 떤미동, 호찌민시, 베트남',
            'footer.contact.addressShort': '주소: 호찌민시, 베트남'
        },
        zh: {
            'footer.contact.company': 'SOWON GLOBAL有限责任公司',
            'footer.contact.tax': '税号：',
            'footer.contact.hotline': '热线：',
            'footer.contact.email': '电子邮件：',
            'footer.contact.address': '地址：西贡Paragon大厦2楼，阮良朋街3号，新美坊，胡志明市，越南',
            'footer.contact.addressShort': '地址：胡志明市，越南'
        }
    };
    Object.keys(extra).forEach(function (lang) {
        if (translations[lang]) Object.assign(translations[lang], extra[lang]);
    });
})();
