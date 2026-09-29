// Language Switcher System
// Hệ thống chuyển đổi ngôn ngữ 4 ngôn ngữ: Việt - Anh - Hàn - Trung

// Lưu trữ tất cả bản dịch
/* =====================================================================
   HƯỚNG DẪN QUẢN LÝ NGÔN NGỮ HIỂN THỊ (13 ngôn ngữ dịch vụ)
   ---------------------------------------------------------------------
   Thêm / bỏ một ngôn ngữ trong bảng ở trang Dịch Vụ (services.html):
     1. Thêm 1 dòng khóa 'services.languages.<mã>' vào block
        "Tên các ngôn ngữ dịch vụ" của CẢ 4 bộ: vi, en, ko, zh.
     2. Thêm 1 dòng <tr> tương ứng trong services.html
        (dùng data-i18n="services.languages.<mã>").
     3. Nếu cần, cập nhật số lượng ở khóa:
        services.languages.desc và about.why.item2.title / desc.
   Danh sách hiện tại: en, zh, ja, ko, id, lo, th, de, fr, it, ru, hi, km.
   Mỗi bộ ngôn ngữ dưới đây có cùng thứ tự các phần, tìm theo dòng
   "// ===== ... =====" để nhảy nhanh tới phần cần sửa.
   ===================================================================== */

const translations = {
    vi: {
        // ===== Navigation =====
        'nav.home': 'Trang Chủ',
        'nav.about': 'Về Chúng Tôi',
        'nav.services': 'Dịch Vụ',
        'nav.recruitment': 'Tuyển Dụng',
        'nav.contact': 'Liên Hệ',
        
        // ===== Home page: Hero =====
        'hero.title': 'DỊCH VỤ DỊCH THUẬT CHUYÊN NGHIỆP',
        'hero.desc': 'Công ty dịch thuật hàng đầu và giá hợp lý tại Việt Nam được thành lập bởi người Hàn với 10 năm kinh nghiệm trong lĩnh vực dịch thuật.',
        'hero.btn1': 'Xem Dịch Vụ',
        'hero.btn2': 'Liên Hệ Ngay',
        
        // ===== Home page: Why Choose Us =====
        'why.tag': 'TẠI SAO CHỌN CHÚNG TÔI',
        'why.title': 'Ưu Điểm Vượt Trội',
        'why.desc': 'Chúng tôi mang đến giải pháp dịch thuật toàn diện với chất lượng hàng đầu',
        
        // ===== Home page: Features =====
        'feature.quality.title': 'Chất Lượng Cao',
        'feature.quality.desc': 'Đội ngũ dịch giả chuyên nghiệp với chứng chỉ quốc tế, đảm bảo độ chính xác tuyệt đối',
        'feature.price.title': 'Giá Cạnh Tranh',
        'feature.price.desc': 'Chi phí hợp lý, minh bạch với nhiều gói dịch vụ phù hợp với mọi ngân sách',
        'feature.speed.title': 'Giao Hàng Nhanh',
        'feature.speed.desc': 'Cam kết đúng tiến độ, hỗ trợ dịch vụ khẩn cấp 24/7 khi cần thiết',
        'feature.security.title': 'Bảo Mật Tuyệt Đối',
        'feature.security.desc': 'Cam kết bảo mật thông tin khách hàng với hợp đồng NDA nghiêm ngặt',
        'feature.multilang.title': 'Đa Ngôn Ngữ',
        'feature.multilang.desc': 'Hỗ trợ 13 ngôn ngữ phổ biến trên thế giới, đặc biệt là Nhật - Việt',
        'feature.support.title': 'Hỗ Trợ 24/7',
        'feature.support.desc': 'Đội ngũ tư vấn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi',
        
        // ===== Home page: Stats =====
        'stat.projects': 'Dự Án Hoàn Thành',
        'stat.clients': 'Khách Hàng Hài Lòng',
        'stat.experience': 'Năm Kinh Nghiệm',
        'stat.translators': 'Dịch Giả Chuyên Nghiệp',

        // ===== Services page: Header =====
        'services.header.title': 'Dịch Vụ Của Chúng Tôi',
        'services.header.subtitle': 'Giải pháp dịch thuật toàn diện cho mọi nhu cầu của bạn',

        // ===== Services page: Ngôn ngữ & Bảng giá =====
        'services.languages.tag': 'NGÔN NGỮ',
        'services.languages.title': 'Ngôn Ngữ & Bảng Giá',
        'services.languages.desc': 'Hỗ trợ 13 ngôn ngữ phổ biến với chất lượng cao nhất',
        'services.table.language': 'Ngôn Ngữ',
        'services.table.interpretation': 'Phiên Dịch',
        'services.table.translation': 'Dịch Thuật',
        'services.table.note': 'Ghi Chú',
        'services.table.priceDefault': 'Liên hện qua Hotline, Zalo, KakaoTalk để được báo giá chi tiết.',
        'services.table.English': '345.000 ~ 960.000',
        'services.table.Chinese': '375.000 ~ 1080.000',
        'services.table.Korean': '435.000~ 1.200.000',
        'services.table.Japanese': '480.000 ~ 1.560.000',
        'services.table.price5': '525.000 ~ 1.680.000',
        'services.table.price6': '585.000 ~ 1.800.000',
        'services.table.noteDefault': 'Giá thay đổi dựa trên thời gian, độ khó của tài liệu và số năm kinh nghiệm của dịch giả. Liên hện qua Hotline, Zalo, KakaoTalk để được báo giá chi tiết. ',
        'services.table.othernote': 'Các dịch vụ khác xin liên hệ qua Hotline, Zalo, KakaoTalk để được báo giá rõ ràng hơn.',

        // --- Tên các ngôn ngữ dịch vụ (thứ tự như trong bảng) ---
        'services.languages.english': 'Tiếng Anh',
        'services.languages.chinese': 'Tiếng Trung',
        'services.languages.japanese': 'Tiếng Nhật',
        'services.languages.korean': 'Tiếng Hàn',
        'services.languages.indonesian': 'Tiếng Indonesia',
        'services.languages.lao': 'Tiếng Lào',
        'services.languages.thai': 'Tiếng Thái',
        'services.languages.german': 'Tiếng Đức',
        'services.languages.french': 'Tiếng Pháp',
        'services.languages.italian': 'Tiếng Ý',
        'services.languages.russian': 'Tiếng Nga',
        'services.languages.hindi': 'Tiếng Hindi (Ấn Độ)',
        'services.languages.khmer': 'Tiếng Campuchia',
        'services.languages.arap': 'Tiếng Ả Rập',

        // ===== Services page: Quy trình làm việc =====
        'services.process.tag': 'QUY TRÌNH',
        'services.process.title': 'Quy Trình Làm Việc',
        'services.process.desc': '4 bước đơn giản để hoàn thành dự án của bạn',
        'services.process.step1.title': 'Liên Hệ & Báo Giá',
        'services.process.step1.desc': 'Gửi tài liệu và yêu cầu. Nhận báo giá miễn phí trong 2 giờ.',
        'services.process.step2.title': 'Phân Công Dịch Giả',
        'services.process.step2.desc': 'Chọn dịch giả phù hợp nhất với lĩnh vực và ngôn ngữ của bạn.',
        'services.process.step3.title': 'Dịch Thuật & Kiểm Tra',
        'services.process.step3.desc': 'Dịch thuật chuyên nghiệp với 3 lớp kiểm tra chất lượng.',
        'services.process.step4.title': 'Giao Hàng & Hỗ Trợ',
        'services.process.step4.desc': 'Nhận bản dịch hoàn chỉnh. Hỗ trợ chỉnh sửa miễn phí trong 7 ngày.',

        // ===== Services page: Dịch Vụ Khác (10 dịch vụ mặc định) =====
        'services.other.tag': 'DỊCH VỤ KHÁC',
        'services.other.title': 'Dịch Vụ Khác',
        'services.other.desc': 'Ngoài bảng giá theo ngôn ngữ ở trên, chúng tôi còn cung cấp các dịch vụ sau',
        'services.other.item1': 'Dịch thuật công chứng',
        'services.other.item2': 'Bản địa hóa website & ứng dụng',
        'services.other.item3': 'Phụ đề video & phim',
        'services.other.item4': 'Lồng tiếng (Voice-over)',
        'services.other.item5': 'Biên tập & hiệu đính',
        'services.other.item6': 'Dịch hợp đồng thương mại',
        'services.other.item7': 'Phiên dịch thị sát nhà máy',
        'services.other.item8': 'Phiên dịch y tế',
        'services.other.item9': 'Dịch hồ sơ du học',
        'services.other.item10': 'Dịch thuật khẩn cấp (Rush)',

        // ===== Testimonials =====
        'testimonials.tag': 'ĐÁNH GIÁ',
        'testimonials.title': 'Khách Hàng Nói Gì Về Chúng Tôi',
        'testimonial1.text': '"Dịch vụ chuyên nghiệp, nhanh chóng và chất lượng cao. Tôi rất hài lòng với phần phiên dịch buổi họp thảo luận với đối tác Việt Nam của  công ty. Vì bất đồng ngôn ngữ nên giữa công ty chúng tôi và bên đối tác Việt Nam đã có nhiều hiểu lầm không đáng có. Phiên dịch viên đã dùng khả năng ngoại ngữ giúp 2 công ty kết nối lại và tháo gỡ từng hiểu lầm trước đây. Một lần nữa tôi xin thay mặt công ty cảm ơn Sowon Global đã cung cấp dịch vụ phiên dịch chuyên nghiệp hiệu quả. Đặc biệt cảm ơn phiên dịch Việt Lee Sarah"',
        'testimonial1.name': 'KcLee ',
        'testimonial1.position': 'Giám đốc tài chính - Công ty The soul Gear  Co.,Ltd',
        'testimonial2.text': '"Đội ngũ phiên dịch rất am hiểu về từ vựng chuyên ngành luật. Họ đã hỗ trợ chúng tôi trong buổi làm việc với các đối tượng lừa đảo chuyên nghiệp có tổ chức."',
        'testimonial2.name': 'Phan Thanh Dũng',
        'testimonial2.position': 'Điều tra viên phòng cảnh sát hình sự ca  TP HCM ',
        'testimonial3.text': '"Giá cả hợp lý, thời gian giao bản dịch  đúng hẹn. Chắc chắn sẽ tiếp tục sử dụng dịch vụ trong tương lai."',
        'testimonial3.name': 'Linh Nguyễn',
        'testimonial3.position': 'Chủ doanh nghiệp',
        
        // ===== CTA =====
        'cta.title': 'Sẵn Sàng Bắt Đầu Dự Án?',
        'cta.desc': 'Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí và báo giá tốt nhất',
        'cta.btn1': 'Liên Hệ Ngay',
        'cta.btn2': '📞 0986627194',
        
        // ===== Footer =====
        'footer.about.title': 'Về Chúng Tôi',
        'footer.about.desc': 'Công ty dịch thuật chuyên nghiệp với đội ngũ biên phiên dịch viên giàu kinh nghiệm, phục vụ khách hàng trong nước và quốc tế.',
        'footer.links.title': 'Liên Kết',
        'footer.contact.title': 'Liên Hệ',
        'footer.hours.title': 'Giờ Làm Việc',
        'footer.hours.weekday': 'Thứ Hai - Chủ nhật: 8:00 - 18:00',
        'footer.copyright': '© 2026 Dịch Thuật Chuyên Nghiệp. All rights reserved.',
        
        // ===== Recruitment page: Header =====
        'recruitment.header.title': 'Tuyển Cộng Tác Viên Phiên Dịch - Dịch Thuật',
        'recruitment.header.subtitle': 'Đồng hành cùng chúng tôi phục vụ khách hàng trên khắp thế giới',
 
        // ===== Recruitment page: Intro & bảng yêu cầu 13 ngôn ngữ =====
        'recruitment.intro.tag': 'CƠ HỘI HỢP TÁC',
        'recruitment.intro.title': '13 Ngôn Ngữ Đang Tuyển Cộng Tác Viên',
        'recruitment.intro.desc': 'Chúng tôi đang mở rộng mạng lưới cộng tác viên (CTV) phiên dịch, dịch thuật freelance trên toàn quốc và quốc tế. Nếu bạn thành thạo một trong các ngôn ngữ dưới đây, hãy ứng tuyển ngay hôm nay.',
        'recruitment.table.certificate': 'Bằng Cấp / Chứng Chỉ Ưu Tiên',
        'recruitment.table.plus': 'Điểm Cộng',
        'recruitment.table.bonus': 'Kinh nghiệm phiên dịch đa lĩnh vực, bằng đại học',
        'recruitment.table.equivalent': 'Chứng chỉ trình độ cao cấp (tương đương TOPIK 5-6)',
        'recruitment.table.note': '* Đối với các ngôn ngữ chưa có hệ quy đổi chứng chỉ chuẩn hóa phổ biến, ứng viên vui lòng nộp kèm bằng cấp, chứng chỉ ngôn ngữ hoặc minh chứng kinh nghiệm tương đương để chúng tôi xét duyệt.',
        'recruitment.table.cert.korean': 'TOPIK 5 - 6',
        'recruitment.table.cert.english': 'IELTS 6.5+ / TOEIC 800+ (hoặc tương đương)',
        'recruitment.table.cert.chinese': 'HSK 5 - 6',
        'recruitment.table.cert.japanese': 'JLPT N2 - N1',
        'recruitment.table.cert.german': 'Goethe-Zertifikat B2 - C1',
        'recruitment.table.cert.french': 'DELF/DALF B2 - C1',
        'recruitment.table.cert.russian': 'TORFL (ТРКИ) cấp II - III',
 
        // ===== Recruitment page: Vì sao nên ứng tuyển =====
        'recruitment.why.tag': 'QUYỀN LỢI',
        'recruitment.why.title': 'Vì Sao Nên Trở Thành CTV Của Chúng Tôi',
        'recruitment.why1.title': 'Dự Án Đa Dạng',
        'recruitment.why1.desc': 'Cơ hội tiếp cận dự án dịch tài liệu, phiên dịch trực tiếp thuộc nhiều lĩnh vực khác nhau.',
        'recruitment.why2.title': 'Thời Gian Linh Hoạt',
        'recruitment.why2.desc': 'Chủ động nhận việc theo lịch trình cá nhân, làm việc từ xa hoặc tại văn phòng.',
        'recruitment.why3.title': 'Thu Nhập Cạnh Tranh',
        'recruitment.why3.desc': 'Mức phí cạnh tranh theo dự án, thanh toán đúng hạn và minh bạch.',
        'recruitment.why4.title': 'Cơ Hội Phát Triển',
        'recruitment.why4.desc': 'Đồng hành lâu dài, ưu tiên nhận các dự án lớn khi có thành tích tốt.',
 
        // ===== Recruitment page: Form ứng tuyển =====
        'recruitment.form.title': 'Nộp Đơn Ứng Tuyển',
        'recruitment.form.desc': 'Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.',
        'recruitment.form.language': 'Ngôn Ngữ Ứng Tuyển *',
        'recruitment.form.about': 'Mô Tả Ngắn Gọn Về Bản Thân *',
        'recruitment.form.cv': 'CV',
        'recruitment.form.cvNote': '📎 Vui lòng đính kèm file CV (.pdf, .doc, .docx) trực tiếp vào email sẽ mở ra sau khi bạn bấm "Gửi Đơn Ứng Tuyển" bên dưới. Đặt tên file theo cú pháp <strong>Họ và tên_Ngôn ngữ</strong> (VD: NguyenVanA_TiengHan.pdf) trước khi đính kèm.',
        'recruitment.form.submit': 'Gửi Đơn Ứng Tuyển',
        'recruitment.form.copy': '📋 Sao Chép Nội Dung',
        'recruitment.form.hint': 'Nút "Gửi Đơn Ứng Tuyển" sẽ mở cửa sổ soạn thư của Gmail với nội dung điền sẵn, gửi tới sowonglobal.company@gmail.com. Nếu bạn không dùng Gmail hoặc cửa sổ không mở được, hãy bấm "Sao Chép Nội Dung" rồi dán vào email của bạn.',
        'recruitment.form.attachReminder': '⚠️ Đừng quên đính kèm file CV (đã đổi tên theo đúng cú pháp) vào email trước khi bấm gửi.',
 
        // ===== Recruitment page: Sidebar =====
        'recruitment.side1.title': 'Quy Trình Ứng Tuyển',
        'recruitment.side1.step1': '✓ Nộp đơn kèm CV',
        'recruitment.side1.step2': '✓ Xét duyệt hồ sơ trong 3-5 ngày',
        'recruitment.side1.step3': '✓ Phỏng vấn / kiểm tra năng lực',
        'recruitment.side1.step4': '✓ Ký hợp đồng CTV',
        'recruitment.side2.title': 'Lưu Ý Khi Nộp Hồ Sơ',
        'recruitment.side2.desc': 'Vui lòng đặt tên file CV theo cú pháp: <strong>Họ và tên_Ngôn ngữ</strong> (VD: NguyenVanA_TiengHan) để chúng tôi xử lý hồ sơ nhanh chóng hơn.',
        'recruitment.side3.desc': 'Mọi thắc mắc về tuyển dụng, vui lòng liên hệ:',
 
        // ===== Recruitment page: CTA =====
        'recruitment.cta.title': 'Sẵn Sàng Trở Thành Một Phần Của Đội Ngũ?',
        'recruitment.cta.desc': 'Gửi hồ sơ ngay hôm nay và bắt đầu hành trình hợp tác cùng chúng tôi',
        'recruitment.cta.apply': 'Ứng Tuyển Ngay',
        'recruitment.cta.contact': 'Liên Hệ Tư Vấn',

        // ===== About page =====
        'about.header.title': 'Về Chúng Tôi',
        'about.header.subtitle': 'Đối tác tin cậy trong mọi dự án dịch thuật của bạn',
        'about.story.tag': 'CÂU CHUYỆN CỦA CHÚNG TÔI',
        'about.story.title': 'Hành Trình Phát Triển',
        'about.story.p1': 'Sowon Global được hình thành từ nền tảng của những phiên dịch viên chuyên sâu trong lĩnh vực y tế và pháp lý – nơi mà từng câu chữ không chỉ mang ý nghĩa truyền đạt thông tin, mà còn có thể ảnh hưởng trực tiếp đến sức khỏe con người, quyền lợi và cả số phận.',
        'about.story.p2': 'Thấu hiểu sâu sắc sức mạnh của ngôn từ, chúng tôi bắt đầu hành trình của mình từ năm 2018 tại Hàn Quốc – cái nôi đầu tiên đặt nền móng cho sự phát triển chuyên môn và tiêu chuẩn dịch thuật khắt khe. Đến năm 2025, Sowon Global chính thức được thành lập tại Việt Nam, với mong muốn mở rộng giá trị và mang đến những dịch vụ ngôn ngữ chuyên nghiệp, chuẩn xác và đáng tin cậy hơn cho khách hàng trong nước và quốc tế.',
        'about.story.p3': 'Chúng tôi không chỉ dịch ngôn ngữ – chúng tôi truyền tải ý nghĩa, trách nhiệm và niềm tin.',
        'about.story.since': 'Thành lập từ 2018',
        'about.mission.title': 'Sứ Mệnh',
        'about.mission.desc': 'Mang đến giải pháp ngôn ngữ chuẩn xác – chuyên sâu – đáng tin cậy, góp phần kết nối con người, doanh nghiệp và pháp lý xuyên biên giới một cách minh bạch và hiệu quả. Chúng tôi cam kết trở thành cầu nối vững chắc, nơi mọi thông tin được truyền đạt đúng bản chất, đúng tinh thần và đúng giá trị.',
        'about.vision.title': 'SLOGAN',
        'about.vision.desc': 'Sáng tâm – Vươn tầm',
        'about.values.title': 'Giá Trị Cốt Lõi',
        'about.values.desc': '• Tâm là nền tảng: Chúng tôi luôn đặt chữ Tâm lên hàng đầu trong mọi hoạt động, bởi chỉ khi làm việc bằng sự tận tâm, dịch vụ mới thực sự có giá trị bền vững.\n\n• Chính xác tuyệt đối: Mỗi bản dịch đều được kiểm soát chặt chẽ về nội dung, thuật ngữ và ngữ cảnh chuyên ngành.\n\n• Nhanh chóng – hiệu quả: Tối ưu thời gian nhưng không đánh đổi chất lượng.\n\n• Bảo mật tối đa: Cam kết bảo mật tuyệt đối mọi thông tin khách hàng và nội dung tài liệu trong suốt quá trình tác nghiệp.\n\n• CAM KẾT: Sự lựa chọn của Quý khách hàng không chỉ là một quyết định sử dụng dịch vụ – đó còn là sự trao gửi niềm tin. Với Sowon Global, chúng tôi xem mỗi sự tin tưởng ấy là trách nhiệm để nỗ lực hơn mỗi ngày, hoàn thiện từng chi tiết nhỏ nhất, nhằm mang lại giá trị xứng đáng và lâu dài.',
        'about.team.tag': 'ĐỘI NGŨ',
        'about.team.title': 'Đội Ngũ Chuyên Gia',
        'about.team.desc': 'Những con người tài năng và tận tâm đằng sau mỗi dự án thành công',
        // --- About page: Team (đội ngũ chuyên gia) ---
        'about.team.label.degrees': 'Bằng cấp/chứng chỉ liên quan',
        'about.team.label.years': 'Số năm kinh nghiệm phiên dịch',
        'about.team.label.fields': 'Kinh nghiệm/lĩnh vực đã từng phiên dịch',
        'about.team.label.projects': 'Một số dự án hoặc khách hàng tiêu biểu',
        'about.team.ceo.badge': 'CEO',
        'about.team.ceo.role': 'Giám Đốc Điều Hành',
        'about.team.ceo.name': 'Nguyễn Thị Ngọc Trâm',
        'about.team.ceo.degrees': '[Bằng cấp/chứng chỉ của CEO]',
        'about.team.ceo.years': '[Số] năm',
        'about.team.ceo.fields': '[Các lĩnh vực đã phiên dịch]',
        'about.team.ceo.projects': '[Dự án/khách hàng tiêu biểu]',
        'about.team.member2.name': '[Họ và tên chuyên gia 2]',
        'about.team.member2.degrees': '[Bằng cấp/chứng chỉ]',
        'about.team.member2.years': '[Số] năm',
        'about.team.member2.fields': '[Lĩnh vực đã phiên dịch]',
        'about.team.member2.projects': '[Dự án/khách hàng tiêu biểu]',
        'about.team.member3.name': '[Họ và tên chuyên gia 3]',
        'about.team.member3.degrees': '[Bằng cấp/chứng chỉ]',
        'about.team.member3.years': '[Số] năm',
        'about.team.member3.fields': '[Lĩnh vực đã phiên dịch]',
        'about.team.member3.projects': '[Dự án/khách hàng tiêu biểu]',
        'about.team.member4.name': '[Họ và tên chuyên gia 4]',
        'about.team.member4.degrees': '[Bằng cấp/chứng chỉ]',
        'about.team.member4.years': '[Số] năm',
        'about.team.member4.fields': '[Lĩnh vực đã phiên dịch]',
        'about.team.member4.projects': '[Dự án/khách hàng tiêu biểu]',
        'about.team.member5.name': '[Họ và tên chuyên gia 5]',
        'about.team.member5.degrees': '[Bằng cấp/chứng chỉ]',
        'about.team.member5.years': '[Số] năm',
        'about.team.member5.fields': '[Lĩnh vực đã phiên dịch]',
        'about.team.member5.projects': '[Dự án/khách hàng tiêu biểu]',
        'about.team.member6.name': '[Họ và tên chuyên gia 6]',
        'about.team.member6.degrees': '[Bằng cấp/chứng chỉ]',
        'about.team.member6.years': '[Số] năm',
        'about.team.member6.fields': '[Lĩnh vực đã phiên dịch]',
        'about.team.member6.projects': '[Dự án/khách hàng tiêu biểu]',
        'about.team.others.title': 'Các Chuyên Gia Ngôn Ngữ Khác',
        'about.team.others.desc': 'Đội ngũ biên phiên dịch viên chuyên nghiệp cho các ngôn ngữ khác, sẵn sàng đáp ứng đa dạng nhu cầu của khách hàng:',
        'about.team.others.lang.en': 'Tiếng Anh',
        'about.team.others.lang.zh': 'Tiếng Trung',
        'about.team.others.lang.ja': 'Tiếng Nhật',
        'about.team.others.lang.ko': 'Tiếng Hàn',
        'about.team.others.lang.id': 'Tiếng Indonesia',
        'about.team.others.lang.lo': 'Tiếng Lào',
        'about.team.others.lang.th': 'Tiếng Thái',
        'about.team.others.lang.de': 'Tiếng Đức',
        'about.team.others.lang.fr': 'Tiếng Pháp',
        'about.team.others.lang.it': 'Tiếng Ý',
        'about.team.others.lang.ru': 'Tiếng Nga',
        'about.team.others.lang.in': 'Tiếng Hindi (Ấn Độ)',
        'about.team.others.lang.km': 'Tiếng Campuchia',
        // --- About page: Chứng nhận ---
        'about.cert.tag': 'CHỨNG NHẬN',
        'about.cert.title': 'Chứng Nhận & Giải Thưởng',
        'about.cert.desc': 'Được công nhận bởi các tổ chức uy tín trong và ngoài nước',
        'about.cert.item1.title': 'ISO 17100:2015',
        'about.cert.item1.desc': 'Chứng nhận tiêu chuẩn quốc tế về dịch vụ dịch thuật',
        'about.cert.item2.title': 'Top 10 Translation Company',
        'about.cert.item2.desc': 'Công ty dịch thuật hàng đầu Việt Nam 2023',
        'about.cert.item3.title': 'ATA Member',
        'about.cert.item3.desc': 'Thành viên Hiệp hội Dịch thuật Hoa Kỳ',
        'about.cert.item4.title': 'Government Certified',
        'about.cert.item4.desc': 'Được Bộ Tư pháp Việt Nam công nhận',
        // --- About page: Lợi thế ---
        'about.why.tag': 'LỢI THẾ',
        'about.why.title': 'Tại Sao Làm Việc Với Chúng Tôi',
        'about.why.item1.title': 'Chi phí cạnh tranh',
        'about.why.item1.desc': 'Cung cấp dịch vụ với mức chi phí hợp lý, phù hợp với nhu cầu của cá nhân, doanh nghiệp và các dự án lớn. Báo giá rõ ràng, tối ưu ngân sách cho khách hàng.',
        'about.why.item2.title': 'Phiên Dịch 13 Ngôn Ngữ',
        'about.why.item2.desc': 'Hỗ trợ phiên dịch đa lĩnh vực với 13 ngôn ngữ: Anh, Trung, Nhật, Hàn, Indonesia, Lào, Thái, Đức, Pháp, Ý, Nga, Hindi (Ấn Độ) và Campuchia.',
        'about.why.item3.title': 'Hỗ Trợ Hành Chính Toàn Diện',
        'about.why.item3.desc': 'Đồng hành cùng cá nhân và doanh nghiệp nước ngoài tại Việt Nam trong các thủ tục hành chính như giấy phép lao động, thẻ tạm trú, giấy phép đầu tư, thành lập công ty và các thủ tục liên quan.',
        'about.why.item4.title': 'Đa Dạng Lĩnh Vực Chuyên Môn',
        'about.why.item4.desc': 'Có kinh nghiệm cung cấp phiên dịch theo nhu cầu thực tế trong nhiều lĩnh vực: pháp lý, y tế, IT, sự kiện, kỹ thuật, kinh doanh và dịch án, tài liệu phục vụ cơ quan nhà nước,...',
        'about.why.item5.title': 'Giá Cả Minh Bạch',
        'about.why.item5.desc': 'Bảng giá rõ ràng, không phát sinh chi phí ẩn. Ưu đãi đặc biệt cho khách hàng thân thiết và dự án lớn.',
        'about.why.item6.title': 'Hỗ Trợ Liên Tục',
        'about.why.item6.desc': 'Đội ngũ customer service sẵn sàng 24/7, có khả năng điều phối phiên dịch viên trong thời gian ngắn khi khách hàng cần gấp, đặc biệt với các cuộc họp, sự kiện hoặc công việc phát sinh.'
    },
    
    en: {
        // ===== Navigation =====
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.recruitment': 'Careers',
        'nav.contact': 'Contact',
        
        // ===== Home page: Hero =====
        'hero.title': 'PROFESSIONAL TRANSLATION SERVICE',
        'hero.desc': 'A leading translation company with reasonable price founded by the cooperation of Japanese and Vietnamese.',
        'hero.btn1': 'View Services',
        'hero.btn2': 'Contact Now',
        
        // ===== Home page: Why Choose Us =====
        'why.tag': 'WHY CHOOSE US',
        'why.title': 'Outstanding Advantages',
        'why.desc': 'We provide comprehensive translation solutions with top-tier quality',
        
        // ===== Home page: Features =====
        'feature.quality.title': 'High Quality',
        'feature.quality.desc': 'Professional translators with international certifications, ensuring absolute accuracy',
        'feature.price.title': 'Competitive Pricing',
        'feature.price.desc': 'Reasonable and transparent costs with various packages suitable for all budgets',
        'feature.speed.title': 'Fast Delivery',
        'feature.speed.desc': 'Committed to meeting deadlines, with 24/7 urgent service support when needed',
        'feature.security.title': 'Absolute Confidentiality',
        'feature.security.desc': 'Committed to protecting customer information with strict NDA contracts',
        'feature.multilang.title': 'Multi-Language',
        'feature.multilang.desc': 'Supporting 13 popular languages worldwide, especially Japanese-Vietnamese',
        'feature.support.title': '24/7 Support',
        'feature.support.desc': 'Our consulting team is ready to support you anytime, anywhere',
        
        // ===== Home page: Stats =====
        'stat.projects': 'Completed Projects',
        'stat.clients': 'Satisfied Clients',
        'stat.experience': 'Years of Experience',
        'stat.translators': 'Professional Translators',
        
        // ===== Home page: Services preview =====
        'services.tag': 'SERVICES',
        'services.title': 'Our Services',
        'services.desc': 'Diverse professional translation services',
        'services.viewall': 'View All Services',
        'services.learnmore': 'Learn more →',
        'service.document.title': 'Document Translation',
        'service.document.desc': 'Professional translation of certified documents, contracts, and reports',
        'service.interpretation.title': 'Interpretation',
        'service.interpretation.desc': 'Interpreters for conferences, events, and business negotiations',
        'service.localization.title': 'Localization',
        'service.localization.desc': 'Website, app, and software localization for international markets',

        // ===== Services page: Header =====
        'services.header.title': 'Our Services',
        'services.header.subtitle': 'Comprehensive translation solutions for all your needs',

        // ===== Services page: Languages & Pricing =====
        'services.languages.tag': 'LANGUAGES',
        'services.languages.title': 'Languages & Pricing',
        'services.languages.desc': 'Supporting 13 popular languages with the highest quality',
        'services.table.language': 'Language',
        'services.table.interpretation': 'Interpretation',
        'services.table.translation': 'Translation',
        'services.table.note': 'Notes',
        'services.table.priceDefault': '100,000 - 200,000 VND',
        'services.table.noteDefault': '-',
        'services.table.othernote': 'For other services, please contact us via Hotline, Zalo or KakaoTalk for a clearer quotation.',

        // --- Service language names ---
        'services.languages.english': 'English',
        'services.languages.chinese': 'Chinese',
        'services.languages.japanese': 'Japanese',
        'services.languages.korean': 'Korean',
        'services.languages.indonesian': 'Indonesian',
        'services.languages.lao': 'Lao',
        'services.languages.thai': 'Thai',
        'services.languages.german': 'German',
        'services.languages.french': 'French',
        'services.languages.italian': 'Italian',
        'services.languages.russian': 'Russian',
        'services.languages.hindi': 'Hindi',
        'services.languages.khmer': 'Cambodian',
        'services.languages.arap': 'Arabic',

        // ===== Services page: Process =====
        'services.process.tag': 'PROCESS',
        'services.process.title': 'Our Workflow',
        'services.process.desc': '4 simple steps to complete your project',
        'services.process.step1.title': 'Contact & Quotation',
        'services.process.step1.desc': 'Send your documents and requirements. Receive a free quotation within 2 hours.',
        'services.process.step2.title': 'Translator Assignment',
        'services.process.step2.desc': 'We choose the translator best suited to your field and language.',
        'services.process.step3.title': 'Translation & Review',
        'services.process.step3.desc': 'Professional translation with 3 layers of quality control.',
        'services.process.step4.title': 'Delivery & Support',
        'services.process.step4.desc': 'Receive the finished translation. Free revision support for 7 days.',

        // ===== Services page: Other services =====
        'services.other.tag': 'OTHER SERVICES',
        'services.other.title': 'Other Services',
        'services.other.desc': 'In addition to the language-based pricing above, we also offer the following services',
        'services.other.item1': 'Certified (notarized) translation',
        'services.other.item2': 'Website & app localization',
        'services.other.item3': 'Video & film subtitling',
        'services.other.item4': 'Voice-over',
        'services.other.item5': 'Editing & proofreading',
        'services.other.item6': 'Commercial contract translation',
        'services.other.item7': 'Factory site-visit interpretation',
        'services.other.item8': 'Medical interpretation',
        'services.other.item9': 'Study-abroad document translation',
        'services.other.item10': 'Rush (urgent) translation',
        
        // ===== Testimonials =====
        'testimonials.tag': 'TESTIMONIALS',
        'testimonials.title': 'What Our Clients Say',
        'testimonial1.text': '"Professional, fast and high-quality service. I am very satisfied with the contract translation from this company."',
        'testimonial1.name': 'Nguyen Van A',
        'testimonial1.position': 'Director - ABC Co., Ltd',
        'testimonial2.text': '"The interpretation team is very knowledgeable in technical fields. They supported us in important negotiations."',
        'testimonial2.name': 'Tran Thi B',
        'testimonial2.position': 'Sales Manager - XYZ Corp',
        'testimonial3.text': '"Reasonable price, delivery on time. Will definitely continue to use the service in the future."',
        'testimonial3.name': 'Le Van C',
        'testimonial3.position': 'Business Owner',
        
        // ===== CTA =====
        'cta.title': 'Ready to Start Your Project?',
        'cta.desc': 'Contact us today for free consultation and the best quotation',
        'cta.btn1': 'Contact Now',
        'cta.btn2': '📞 0911.03.8855',
        
        // ===== Footer =====
        'footer.about.title': 'About Us',
        'footer.about.desc': 'Professional translation company with experienced translators and interpreters, serving domestic and international clients.',
        'footer.links.title': 'Links',
        'footer.contact.title': 'Contact',
        'footer.hours.title': 'Working Hours',
        'footer.hours.weekday': 'Monday - Sunday: 8:00 - 18:00',
        'footer.copyright': '© 2026 Professional Translation. All rights reserved.',

        // ===== Recruitment page: Header =====
        'recruitment.header.title': 'Recruiting Interpreter & Translator Collaborators',
        'recruitment.header.subtitle': 'Join us in serving clients around the world',

        // ===== Recruitment page: Intro & requirements table (13 languages) =====
        'recruitment.intro.tag': 'COLLABORATION OPPORTUNITY',
        'recruitment.intro.title': '13 Languages Currently Recruiting Collaborators',
        'recruitment.intro.desc': 'We are expanding our network of freelance interpreter and translator collaborators nationwide and internationally. If you are proficient in one of the languages below, apply today.',
        'recruitment.table.certificate': 'Preferred Degrees / Certificates',
        'recruitment.table.plus': 'Bonus Points',
        'recruitment.table.bonus': 'Multi-field interpreting experience, university degree',
        'recruitment.table.equivalent': 'Advanced-level certificate (equivalent to TOPIK 5-6)',
        'recruitment.table.note': '* For languages without a widely standardized certificate conversion system, please submit degrees, language certificates or equivalent proof of experience for our review.',
        'recruitment.table.cert.korean': 'TOPIK 5 - 6',
        'recruitment.table.cert.english': 'IELTS 6.5+ / TOEIC 800+ (or equivalent)',
        'recruitment.table.cert.chinese': 'HSK 5 - 6',
        'recruitment.table.cert.japanese': 'JLPT N2 - N1',
        'recruitment.table.cert.german': 'Goethe-Zertifikat B2 - C1',
        'recruitment.table.cert.french': 'DELF/DALF B2 - C1',
        'recruitment.table.cert.russian': 'TORFL (TRKI) Level II - III',

        // ===== Recruitment page: Why apply =====
        'recruitment.why.tag': 'BENEFITS',
        'recruitment.why.title': 'Why Become Our Collaborator',
        'recruitment.why1.title': 'Diverse Projects',
        'recruitment.why1.desc': 'Access to document translation and live interpreting projects across many different fields.',
        'recruitment.why2.title': 'Flexible Schedule',
        'recruitment.why2.desc': 'Take on work according to your own schedule, remotely or at the office.',
        'recruitment.why3.title': 'Competitive Income',
        'recruitment.why3.desc': 'Competitive project-based rates, with on-time and transparent payment.',
        'recruitment.why4.title': 'Growth Opportunities',
        'recruitment.why4.desc': 'Long-term partnership, with priority for large projects when you perform well.',

        // ===== Recruitment page: Application form =====
        'recruitment.form.title': 'Submit Your Application',
        'recruitment.form.desc': 'Fill in the information below and we will get back to you as soon as possible.',
        'recruitment.form.language': 'Application Language *',
        'recruitment.form.about': 'Brief Introduction About Yourself *',
        'recruitment.form.cv': 'CV',
        'recruitment.form.cvNote': '📎 Please attach your CV file (.pdf, .doc, .docx) directly to the email that opens after you click "Submit Application" below. Name the file using the format <strong>Full name_Language</strong> (e.g. NguyenVanA_Korean.pdf) before attaching.',
        'recruitment.form.submit': 'Submit Application',
        'recruitment.form.copy': '📋 Copy Content',
        'recruitment.form.hint': 'The "Submit Application" button opens a Gmail compose window with the content pre-filled, addressed to sowonglobal.company@gmail.com. If you do not use Gmail or the window does not open, click "Copy Content" and paste it into your own email.',
        'recruitment.form.attachReminder': '⚠️ Do not forget to attach your CV file (renamed in the correct format) to the email before sending.',

        // ===== Recruitment page: Sidebar =====
        'recruitment.side1.title': 'Application Process',
        'recruitment.side1.step1': '✓ Submit application with CV',
        'recruitment.side1.step2': '✓ Profile review within 3-5 days',
        'recruitment.side1.step3': '✓ Interview / skills assessment',
        'recruitment.side1.step4': '✓ Sign collaborator contract',
        'recruitment.side2.title': 'Notes When Applying',
        'recruitment.side2.desc': 'Please name your CV file using the format: <strong>Full name_Language</strong> (e.g. NguyenVanA_Korean) so we can process your application faster.',
        'recruitment.side3.desc': 'For any recruitment questions, please contact:',

        // ===== Recruitment page: CTA =====
        'recruitment.cta.title': 'Ready to Become Part of the Team?',
        'recruitment.cta.desc': 'Send your application today and start your collaboration journey with us',
        'recruitment.cta.apply': 'Apply Now',
        'recruitment.cta.contact': 'Contact for Advice',
        
        // ===== About page =====
        'about.header.title': 'About Us',
        'about.header.subtitle': 'Your trusted partner in all translation projects',
        'about.story.tag': 'OUR STORY',
        'about.story.title': 'Our Journey',
        'about.story.p1': 'Established in 2015 through the collaboration of Japanese and Vietnamese translation experts, we proudly stand as one of Vietnam\'s leading translation companies with over 10 years of industry experience.',
        'about.story.p2': 'Starting from a passion for languages and a desire to connect cultures across nations, we have continuously developed and expanded. From a small team of 5 translators, we have grown into a collective of over 50 professional translation experts across various fields.',
        'about.story.p3': 'Our mission is to provide high-quality translation services at reasonable prices, helping Vietnamese businesses and individuals reach the world, while supporting international partners in effectively accessing the Vietnamese market.',
        'about.story.since': 'Established since 2015',
        'about.mission.title': 'Mission',
        'about.mission.desc': 'To provide high-quality, accurate, and reliable translation services, helping clients overcome language barriers and achieve success in international communication. We are committed to delivering the best value at the most reasonable cost.',
        'about.vision.title': 'Vision',
        'about.vision.desc': 'To become the leading translation company in Southeast Asia, recognized for excellent service quality and continuous innovation in the translation field. We aim to build strong cultural bridges between nations.',
        'about.values.title': 'Core Values',
        'about.values.desc': 'Quality - Credibility - Dedication. We prioritize quality, build credibility through each project, and serve customers wholeheartedly. Every translation is a commitment to perfection and responsibility.',
        'about.team.tag': 'TEAM',
        'about.team.title': 'Expert Team',
        'about.team.desc': 'Talented and dedicated people behind every successful project',
        // --- About page: Team ---
        'about.team.label.degrees': 'Relevant degrees/certificates',
        'about.team.label.years': 'Years of interpreting experience',
        'about.team.label.fields': 'Interpreting experience/fields',
        'about.team.label.projects': 'Notable projects or clients',
        'about.team.ceo.badge': 'CEO',
        'about.team.ceo.role': 'Chief Executive Officer',
        'about.team.ceo.name': 'Nguyen Thi Ngoc Tram',
        'about.team.ceo.degrees': '[CEO degrees/certificates]',
        'about.team.ceo.years': '[Number] years',
        'about.team.ceo.fields': '[Interpreting fields]',
        'about.team.ceo.projects': '[Notable projects/clients]',
        'about.team.member2.name': '[Full name of expert 2]',
        'about.team.member2.degrees': '[Degrees/certificates]',
        'about.team.member2.years': '[Number] years',
        'about.team.member2.fields': '[Interpreting fields]',
        'about.team.member2.projects': '[Notable projects/clients]',
        'about.team.member3.name': '[Full name of expert 3]',
        'about.team.member3.degrees': '[Degrees/certificates]',
        'about.team.member3.years': '[Number] years',
        'about.team.member3.fields': '[Interpreting fields]',
        'about.team.member3.projects': '[Notable projects/clients]',
        'about.team.member4.name': '[Full name of expert 4]',
        'about.team.member4.degrees': '[Degrees/certificates]',
        'about.team.member4.years': '[Number] years',
        'about.team.member4.fields': '[Interpreting fields]',
        'about.team.member4.projects': '[Notable projects/clients]',
        'about.team.member5.name': '[Full name of expert 5]',
        'about.team.member5.degrees': '[Degrees/certificates]',
        'about.team.member5.years': '[Number] years',
        'about.team.member5.fields': '[Interpreting fields]',
        'about.team.member5.projects': '[Notable projects/clients]',
        'about.team.member6.name': '[Full name of expert 6]',
        'about.team.member6.degrees': '[Degrees/certificates]',
        'about.team.member6.years': '[Number] years',
        'about.team.member6.fields': '[Interpreting fields]',
        'about.team.member6.projects': '[Notable projects/clients]',
        'about.team.others.title': 'Other Language Experts',
        'about.team.others.desc': 'Professional interpreters and translators for other languages, ready to meet the diverse needs of our clients:',
        'about.team.others.lang.en': 'English',
        'about.team.others.lang.zh': 'Chinese',
        'about.team.others.lang.ja': 'Japanese',
        'about.team.others.lang.ko': 'Korean',
        'about.team.others.lang.id': 'Indonesian',
        'about.team.others.lang.lo': 'Lao',
        'about.team.others.lang.th': 'Thai',
        'about.team.others.lang.de': 'German',
        'about.team.others.lang.fr': 'French',
        'about.team.others.lang.it': 'Italian',
        'about.team.others.lang.ru': 'Russian',
        'about.team.others.lang.in': 'Hindi',
        'about.team.others.lang.km': 'Cambodian',
        // --- About page: Certifications ---
        'about.cert.tag': 'CERTIFICATIONS',
        'about.cert.title': 'Certifications & Awards',
        'about.cert.desc': 'Recognized by prestigious organizations domestically and internationally',
        'about.cert.item1.title': 'ISO 17100:2015',
        'about.cert.item1.desc': 'International standard certification for translation services',
        'about.cert.item2.title': 'Top 10 Translation Company',
        'about.cert.item2.desc': 'Leading translation company in Vietnam 2023',
        'about.cert.item3.title': 'ATA Member',
        'about.cert.item3.desc': 'Member of the American Translators Association',
        'about.cert.item4.title': 'Government Certified',
        'about.cert.item4.desc': 'Recognized by Vietnam Ministry of Justice',
        // --- About page: Advantages ---
        'about.why.tag': 'ADVANTAGES',
        'about.why.title': 'Why Work With Us',
        'about.why.item1.title': 'Multicultural Team',
        'about.why.item1.desc': 'The combination of Japanese, Vietnamese, Korean, and Chinese experts brings deep understanding of local culture and language.',
        'about.why.item2.title': 'Professional Process',
        'about.why.item2.desc': 'Strict adherence to ISO 17100 process with 3 layers of quality control: Translation - Editing - Proofreading.',
        'about.why.item3.title': 'Advanced Technology',
        'about.why.item3.desc': 'Application of CAT tools (SDL Trados, MemoQ) and AI assistance to increase speed and ensure consistency.',
        'about.why.item4.title': 'Specialization',
        'about.why.item4.desc': 'Translators are assigned by expertise: Legal, Medical, Technical, Marketing, Finance...',
        'about.why.item5.title': 'Transparent Pricing',
        'about.why.item5.desc': 'Clear pricing, no hidden costs. Special offers for loyal customers and large projects.',
        'about.why.item6.title': 'Continuous Support',
        'about.why.item6.desc': 'Customer service team available 24/7, response within 2 hours, free revision support for 7 days.'
    },
    
    ko: {
        // ===== Navigation =====
        'nav.home': '홈',
        'nav.about': '회사 소개',
        'nav.services': '서비스',
        'nav.recruitment': '채용',
        'nav.contact': '연락처',
        
        // ===== Home page: Hero =====
        'hero.title': '전문 번역 서비스',
        'hero.desc': '일본인과 베트남인의 협력으로 설립된 베트남 최고의 합리적인 가격의 번역 회사입니다.',
        'hero.btn1': '서비스 보기',
        'hero.btn2': '지금 문의하기',
        
        // ===== Home page: Why Choose Us =====
        'why.tag': '왜 저희를 선택해야 하나요',
        'why.title': '탁월한 장점',
        'why.desc': '최고 품질의 포괄적인 번역 솔루션을 제공합니다',
        
        // ===== Home page: Features =====
        'feature.quality.title': '높은 품질',
        'feature.quality.desc': '국제 인증을 받은 전문 번역가들이 절대적인 정확성을 보장합니다',
        'feature.price.title': '경쟁력 있는 가격',
        'feature.price.desc': '모든 예산에 적합한 다양한 패키지로 합리적이고 투명한 비용',
        'feature.speed.title': '빠른 배송',
        'feature.speed.desc': '마감일 준수를 약속하며, 필요시 24/7 긴급 서비스 지원',
        'feature.security.title': '완벽한 기밀 유지',
        'feature.security.desc': '엄격한 NDA 계약으로 고객 정보 보호를 약속합니다',
        'feature.multilang.title': '다국어 지원',
        'feature.multilang.desc': '전 세계 13개 인기 언어를 지원하며, 특히 일본어-베트남어에 특화되어 있습니다',
        'feature.support.title': '24/7 지원',
        'feature.support.desc': '언제 어디서나 컨설팅 팀이 지원할 준비가 되어 있습니다',
        
        // ===== Home page: Stats =====
        'stat.projects': '완료된 프로젝트',
        'stat.clients': '만족한 고객',
        'stat.experience': '년간의 경험',
        'stat.translators': '전문 번역가',
        
        // ===== Home page: Services preview =====
        'services.tag': '서비스',
        'services.title': '우리의 서비스',
        'services.desc': '다양한 전문 번역 서비스',
        'services.viewall': '모든 서비스 보기',
        'services.learnmore': '자세히 보기 →',
        'service.document.title': '문서 번역',
        'service.document.desc': '공인 문서, 계약서 및 보고서의 전문 번역',
        'service.interpretation.title': '통역',
        'service.interpretation.desc': '회의, 이벤트 및 비즈니스 협상을 위한 통역사',
        'service.localization.title': '현지화',
        'service.localization.desc': '국제 시장을 위한 웹사이트, 앱 및 소프트웨어 현지화',

        // ===== Services page: Header =====
        'services.header.title': '우리의 서비스',
        'services.header.subtitle': '모든 요구에 맞는 포괄적인 번역 솔루션',

        // ===== Services page: Languages & Pricing =====
        'services.languages.tag': '언어',
        'services.languages.title': '언어 및 가격표',
        'services.languages.desc': '최고 품질로 13개 주요 언어를 지원합니다',
        'services.table.language': '언어',
        'services.table.interpretation': '통역',
        'services.table.translation': '번역',
        'services.table.note': '비고',
        'services.table.priceDefault': '100,000 - 200,000 VND',
        'services.table.noteDefault': '-',
        'services.table.othernote': '기타 서비스는 핫라인, Zalo, 카카오톡으로 문의하시면 더 자세한 견적을 안내해 드립니다.',

        // --- Service language names ---
        'services.languages.english': '영어',
        'services.languages.chinese': '중국어',
        'services.languages.japanese': '일본어',
        'services.languages.korean': '한국어',
        'services.languages.indonesian': '인도네시아어',
        'services.languages.lao': '라오스어',
        'services.languages.thai': '태국어',
        'services.languages.german': '독일어',
        'services.languages.french': '프랑스어',
        'services.languages.italian': '이탈리아어',
        'services.languages.russian': '러시아어',
        'services.languages.hindi': '힌디어',
        'services.languages.khmer': '캄보디아어',
        'services.languages.arap': '阿拉伯语',

        // ===== Services page: Process =====
        'services.process.tag': '프로세스',
        'services.process.title': '업무 프로세스',
        'services.process.desc': '프로젝트 완료까지 간단한 4단계',
        'services.process.step1.title': '문의 및 견적',
        'services.process.step1.desc': '문서와 요청 사항을 보내주세요. 2시간 이내에 무료 견적을 받아보실 수 있습니다.',
        'services.process.step2.title': '번역가 배정',
        'services.process.step2.desc': '분야와 언어에 가장 적합한 번역가를 선정합니다.',
        'services.process.step3.title': '번역 및 검수',
        'services.process.step3.desc': '3단계 품질 검수를 거친 전문 번역.',
        'services.process.step4.title': '납품 및 지원',
        'services.process.step4.desc': '완성된 번역본을 받아보세요. 7일간 무료 수정 지원.',

        // ===== Services page: Other services =====
        'services.other.tag': '기타 서비스',
        'services.other.title': '기타 서비스',
        'services.other.desc': '위의 언어별 가격표 외에도 다음과 같은 서비스를 제공합니다',
        'services.other.item1': '공증 번역',
        'services.other.item2': '웹사이트 및 앱 현지화',
        'services.other.item3': '영상 및 영화 자막',
        'services.other.item4': '더빙(보이스오버)',
        'services.other.item5': '편집 및 교정',
        'services.other.item6': '상업 계약서 번역',
        'services.other.item7': '공장 시찰 통역',
        'services.other.item8': '의료 통역',
        'services.other.item9': '유학 서류 번역',
        'services.other.item10': '긴급 번역(Rush)',
        
        // ===== Testimonials =====
        'testimonials.tag': '고객 후기',
        'testimonials.title': '고객들의 평가',
        'testimonial1.text': '"전문적이고 빠르며 고품질의 서비스입니다. 회사의 계약서 번역에 매우 만족합니다."',
        'testimonial1.name': '응우옌 반 A',
        'testimonial1.position': '이사 - ABC 유한회사',
        'testimonial2.text': '"통역 팀은 기술 분야에 대한 지식이 풍부합니다. 중요한 협상에서 우리를 지원해주었습니다."',
        'testimonial2.name': '짠 티 B',
        'testimonial2.position': '영업 관리자 - XYZ Corp',
        'testimonial3.text': '"합리적인 가격, 정시 배송. 앞으로도 계속 서비스를 이용할 것입니다."',
        'testimonial3.name': '레 반 C',
        'testimonial3.position': '사업주',
        
        // ===== CTA =====
        'cta.title': '프로젝트를 시작할 준비가 되셨나요?',
        'cta.desc': '무료 상담과 최상의 견적을 받으려면 오늘 문의하세요',
        'cta.btn1': '지금 문의하기',
        'cta.btn2': '📞 0911.03.8855',
        
        // ===== Footer =====
        'footer.about.title': '회사 소개',
        'footer.about.desc': '국내외 고객을 위해 경험이 풍부한 번역가와 통역사를 보유한 전문 번역 회사입니다.',
        'footer.links.title': '링크',
        'footer.contact.title': '연락처',
        'footer.hours.title': '영업 시간',
        'footer.hours.weekday': '월요일 - 일요일: 8:00 - 18:00',
        'footer.copyright': '© 2026 Professional Translation. All rights reserved.',

        // ===== Recruitment page: Header =====
        'recruitment.header.title': '통번역 협력자 모집',
        'recruitment.header.subtitle': '전 세계 고객을 위한 서비스에 함께해 주세요',

        // ===== Recruitment page: Intro & requirements table (13 languages) =====
        'recruitment.intro.tag': '협력 기회',
        'recruitment.intro.title': '협력자를 모집 중인 13개 언어',
        'recruitment.intro.desc': '국내외 프리랜서 통번역 협력자 네트워크를 확대하고 있습니다. 아래 언어 중 하나에 능숙하시다면 오늘 바로 지원해 주세요.',
        'recruitment.table.certificate': '우대 학위 / 자격증',
        'recruitment.table.plus': '가산점',
        'recruitment.table.bonus': '다분야 통역 경험, 대학 학위',
        'recruitment.table.equivalent': '고급 수준 자격증 (TOPIK 5-6급 상당)',
        'recruitment.table.note': '* 표준화된 자격증 환산 체계가 널리 통용되지 않는 언어의 경우, 학위, 언어 자격증 또는 이에 준하는 경력 증빙을 함께 제출해 주시면 심사하겠습니다.',
        'recruitment.table.cert.korean': 'TOPIK 5 - 6급',
        'recruitment.table.cert.english': 'IELTS 6.5+ / TOEIC 800+ (또는 동등 수준)',
        'recruitment.table.cert.chinese': 'HSK 5 - 6급',
        'recruitment.table.cert.japanese': 'JLPT N2 - N1',
        'recruitment.table.cert.german': 'Goethe-Zertifikat B2 - C1',
        'recruitment.table.cert.french': 'DELF/DALF B2 - C1',
        'recruitment.table.cert.russian': 'TORFL (ТРКИ) 2 - 3급',

        // ===== Recruitment page: Why apply =====
        'recruitment.why.tag': '혜택',
        'recruitment.why.title': '협력자가 되어야 하는 이유',
        'recruitment.why1.title': '다양한 프로젝트',
        'recruitment.why1.desc': '다양한 분야의 문서 번역 및 현장 통역 프로젝트에 참여할 수 있습니다.',
        'recruitment.why2.title': '유연한 근무 시간',
        'recruitment.why2.desc': '개인 일정에 맞춰 원격 또는 사무실에서 자유롭게 업무를 선택할 수 있습니다.',
        'recruitment.why3.title': '경쟁력 있는 수입',
        'recruitment.why3.desc': '프로젝트별 경쟁력 있는 보수를 정시에 투명하게 지급합니다.',
        'recruitment.why4.title': '성장 기회',
        'recruitment.why4.desc': '장기적인 동반자 관계를 맺으며, 우수한 성과를 내면 대형 프로젝트를 우선 배정합니다.',

        // ===== Recruitment page: Application form =====
        'recruitment.form.title': '지원서 제출',
        'recruitment.form.desc': '아래 정보를 작성해 주시면 최대한 빠르게 연락드리겠습니다.',
        'recruitment.form.language': '지원 언어 *',
        'recruitment.form.about': '자기소개 (간략히) *',
        'recruitment.form.cv': '이력서',
        'recruitment.form.cvNote': '📎 아래 "지원서 제출" 버튼을 누르면 열리는 이메일에 이력서 파일(.pdf, .doc, .docx)을 직접 첨부해 주세요. 첨부하기 전에 파일명을 <strong>성명_언어</strong> 형식으로 지정해 주세요 (예: NguyenVanA_Korean.pdf).',
        'recruitment.form.submit': '지원서 제출',
        'recruitment.form.copy': '📋 내용 복사',
        'recruitment.form.hint': '"지원서 제출" 버튼을 누르면 내용이 미리 입력된 Gmail 작성 창이 열리며, sowonglobal.company@gmail.com 으로 발송됩니다. Gmail을 사용하지 않거나 창이 열리지 않는 경우 "내용 복사"를 눌러 사용 중인 이메일에 붙여넣어 주세요.',
        'recruitment.form.attachReminder': '⚠️ 발송 전에 (형식에 맞게 이름을 변경한) 이력서 파일을 이메일에 첨부하는 것을 잊지 마세요.',

        // ===== Recruitment page: Sidebar =====
        'recruitment.side1.title': '지원 절차',
        'recruitment.side1.step1': '✓ 이력서와 함께 지원서 제출',
        'recruitment.side1.step2': '✓ 3~5일 내 서류 심사',
        'recruitment.side1.step3': '✓ 면접 / 역량 평가',
        'recruitment.side1.step4': '✓ 협력자 계약 체결',
        'recruitment.side2.title': '지원 시 유의사항',
        'recruitment.side2.desc': '더 빠른 처리를 위해 이력서 파일명을 <strong>성명_언어</strong> 형식으로 지정해 주세요 (예: NguyenVanA_Korean).',
        'recruitment.side3.desc': '채용 관련 문의는 아래로 연락해 주세요:',

        // ===== Recruitment page: CTA =====
        'recruitment.cta.title': '팀의 일원이 될 준비가 되셨나요?',
        'recruitment.cta.desc': '오늘 지원서를 보내시고 저희와 함께하는 여정을 시작하세요',
        'recruitment.cta.apply': '지금 지원하기',
        'recruitment.cta.contact': '상담 문의',
        
        // ===== About page =====
        'about.header.title': '회사 소개',
        'about.header.subtitle': '모든 번역 프로젝트에서 신뢰할 수 있는 파트너',
        'about.story.tag': '우리의 이야기',
        'about.story.title': '우리의 여정',
        'about.story.p1': '2015년 일본과 베트남 번역 전문가들의 협력을 통해 설립되었으며, 10년 이상의 업계 경험을 가진 베트남 최고의 번역 회사 중 하나로 자랑스럽게 자리잡고 있습니다.',
        'about.story.p2': '언어에 대한 열정과 국가 간 문화를 연결하려는 열망에서 시작하여 지속적으로 발전하고 확장했습니다. 5명의 번역가로 구성된 작은 팀에서 시작하여 현재 다양한 분야의 50명 이상의 전문 번역 전문가 집단으로 성장했습니다.',
        'about.story.p3': '우리의 사명은 합리적인 가격으로 고품질 번역 서비스를 제공하여 베트남 기업과 개인이 세계로 나아갈 수 있도록 돕고, 국제 파트너가 베트남 시장에 효과적으로 접근할 수 있도록 지원하는 것입니다.',
        'about.story.since': '2015년 설립',
        'about.mission.title': '미션',
        'about.mission.desc': '고품질의 정확하고 신뢰할 수 있는 번역 서비스를 제공하여 고객이 언어 장벽을 극복하고 국제 커뮤니케이션에서 성공할 수 있도록 돕습니다. 우리는 가장 합리적인 비용으로 최고의 가치를 제공하기 위해 최선을 다합니다.',
        'about.vision.title': '비전',
        'about.vision.desc': '뛰어난 서비스 품질과 번역 분야의 지속적인 혁신으로 인정받는 동남아시아 최고의 번역 회사가 되는 것입니다. 우리는 국가 간에 강력한 문화적 다리를 구축하는 것을 목표로 합니다.',
        'about.values.title': '핵심 가치',
        'about.values.desc': '품질 - 신뢰성 - 헌신. 우리는 품질을 우선시하고, 각 프로젝트를 통해 신뢰성을 구축하며, 마음을 다해 고객을 섬깁니다. 모든 번역은 완벽함과 책임에 대한 약속입니다.',
        'about.team.tag': '팀',
        'about.team.title': '전문가 팀',
        'about.team.desc': '모든 성공적인 프로젝트 뒤에 있는 재능 있고 헌신적인 사람들',
        // --- About page: Team ---
        'about.team.label.degrees': '관련 학위/자격증',
        'about.team.label.years': '통역 경력 연수',
        'about.team.label.fields': '통역 경험/분야',
        'about.team.label.projects': '주요 프로젝트 또는 고객',
        'about.team.ceo.badge': 'CEO',
        'about.team.ceo.role': '최고경영자',
        'about.team.ceo.name': 'Nguyen Thi Ngoc Tram',
        'about.team.ceo.degrees': '[CEO 학위/자격증]',
        'about.team.ceo.years': '[숫자]년',
        'about.team.ceo.fields': '[통역 분야]',
        'about.team.ceo.projects': '[주요 프로젝트/고객]',
        'about.team.member2.name': '[전문가 2 성명]',
        'about.team.member2.degrees': '[학위/자격증]',
        'about.team.member2.years': '[숫자]년',
        'about.team.member2.fields': '[통역 분야]',
        'about.team.member2.projects': '[주요 프로젝트/고객]',
        'about.team.member3.name': '[전문가 3 성명]',
        'about.team.member3.degrees': '[학위/자격증]',
        'about.team.member3.years': '[숫자]년',
        'about.team.member3.fields': '[통역 분야]',
        'about.team.member3.projects': '[주요 프로젝트/고객]',
        'about.team.member4.name': '[전문가 4 성명]',
        'about.team.member4.degrees': '[학위/자격증]',
        'about.team.member4.years': '[숫자]년',
        'about.team.member4.fields': '[통역 분야]',
        'about.team.member4.projects': '[주요 프로젝트/고객]',
        'about.team.member5.name': '[전문가 5 성명]',
        'about.team.member5.degrees': '[학위/자격증]',
        'about.team.member5.years': '[숫자]년',
        'about.team.member5.fields': '[통역 분야]',
        'about.team.member5.projects': '[주요 프로젝트/고객]',
        'about.team.member6.name': '[전문가 6 성명]',
        'about.team.member6.degrees': '[학위/자격증]',
        'about.team.member6.years': '[숫자]년',
        'about.team.member6.fields': '[통역 분야]',
        'about.team.member6.projects': '[주요 프로젝트/고객]',
        'about.team.others.title': '기타 언어 전문가',
        'about.team.others.desc': '다양한 고객의 요구에 부응할 수 있는 기타 언어 전문 통번역사입니다:',
        'about.team.others.lang.en': '영어',
        'about.team.others.lang.zh': '중국어',
        'about.team.others.lang.ja': '일본어',
        'about.team.others.lang.ko': '한국어',
        'about.team.others.lang.id': '인도네시아어',
        'about.team.others.lang.lo': '라오스어',
        'about.team.others.lang.th': '태국어',
        'about.team.others.lang.de': '독일어',
        'about.team.others.lang.fr': '프랑스어',
        'about.team.others.lang.it': '이탈리아어',
        'about.team.others.lang.ru': '러시아어',
        'about.team.others.lang.in': '힌디어',
        'about.team.others.lang.km': '캄보디아어',
        // --- About page: Certifications ---
        'about.cert.tag': '인증',
        'about.cert.title': '인증 및 수상',
        'about.cert.desc': '국내외 권위 있는 기관의 인정',
        'about.cert.item1.title': 'ISO 17100:2015',
        'about.cert.item1.desc': '번역 서비스 국제 표준 인증',
        'about.cert.item2.title': '톱 10 번역 회사',
        'about.cert.item2.desc': '2023년 베트남 최고 번역 회사',
        'about.cert.item3.title': 'ATA 회원',
        'about.cert.item3.desc': '미국 번역가 협회 회원',
        'about.cert.item4.title': '정부 인증',
        'about.cert.item4.desc': '베트남 법무부 인정',
        // --- About page: Advantages ---
        'about.why.tag': '장점',
        'about.why.title': '왜 우리와 함께 일해야 하나요',
        'about.why.item1.title': '다문화 팀',
        'about.why.item1.desc': '일본, 베트남, 한국, 중국 전문가들의 조합은 지역 문화와 언어에 대한 깊은 이해를 제공합니다.',
        'about.why.item2.title': '전문 프로세스',
        'about.why.item2.desc': '번역 - 편집 - 교정의 3단계 품질 관리를 통한 ISO 17100 프로세스의 엄격한 준수.',
        'about.why.item3.title': '첨단 기술',
        'about.why.item3.desc': 'CAT 도구(SDL Trados, MemoQ) 및 AI 지원 적용으로 속도를 높이고 일관성을 보장합니다.',
        'about.why.item4.title': '전문화',
        'about.why.item4.desc': '번역가는 전문 분야별로 배정됩니다: 법률, 의료, 기술, 마케팅, 금융...',
        'about.why.item5.title': '투명한 가격',
        'about.why.item5.desc': '명확한 가격, 숨겨진 비용 없음. 단골 고객 및 대규모 프로젝트에 대한 특별 혜택.',
        'about.why.item6.title': '지속적인 지원',
        'about.why.item6.desc': '고객 서비스 팀이 24/7 대기, 2시간 이내 응답, 7일간 무료 수정 지원.'
    },
    
    zh: {
        // ===== Navigation =====
        'nav.home': '首页',
        'nav.about': '关于我们',
        'nav.services': '服务',
        'nav.recruitment': '招聘',
        'nav.contact': '联系我们',
        
        // ===== Home page: Hero =====
        'hero.title': '专业翻译服务',
        'hero.desc': '由日本人和越南人合作创立的越南领先且价格合理的翻译公司。',
        'hero.btn1': '查看服务',
        'hero.btn2': '立即联系',
        
        // ===== Home page: Why Choose Us =====
        'why.tag': '为什么选择我们',
        'why.title': '卓越优势',
        'why.desc': '我们提供顶级质量的全面翻译解决方案',
        
        // ===== Home page: Features =====
        'feature.quality.title': '高质量',
        'feature.quality.desc': '拥有国际认证的专业翻译人员，确保绝对准确',
        'feature.price.title': '竞争价格',
        'feature.price.desc': '合理透明的费用，提供适合各种预算的多种套餐',
        'feature.speed.title': '快速交付',
        'feature.speed.desc': '承诺按时交付，需要时提供24/7紧急服务支持',
        'feature.security.title': '绝对保密',
        'feature.security.desc': '通过严格的保密协议承诺保护客户信息',
        'feature.multilang.title': '多语言',
        'feature.multilang.desc': '支持全球13种流行语言，特别是日语-越南语',
        'feature.support.title': '24/7支持',
        'feature.support.desc': '我们的咨询团队随时准备为您提供支持',
        
        // ===== Home page: Stats =====
        'stat.projects': '完成项目',
        'stat.clients': '满意客户',
        'stat.experience': '年经验',
        'stat.translators': '专业翻译',
        
        // ===== Home page: Services preview =====
        'services.tag': '服务',
        'services.title': '我们的服务',
        'services.desc': '多样化的专业翻译服务',
        'services.viewall': '查看所有服务',
        'services.learnmore': '了解更多 →',
        'service.document.title': '文件翻译',
        'service.document.desc': '认证文件、合同和报告的专业翻译',
        'service.interpretation.title': '口译',
        'service.interpretation.desc': '会议、活动和商务谈判的口译员',
        'service.localization.title': '本地化',
        'service.localization.desc': '国际市场的网站、应用程序和软件本地化',

        // ===== Services page: Header =====
        'services.header.title': '我们的服务',
        'services.header.subtitle': '满足您各种需求的全面翻译解决方案',

        // ===== Services page: Languages & Pricing =====
        'services.languages.tag': '语言',
        'services.languages.title': '语言与价目表',
        'services.languages.desc': '以最高质量支持13种常用语言',
        'services.table.language': '语言',
        'services.table.interpretation': '口译',
        'services.table.translation': '笔译',
        'services.table.note': '备注',
        'services.table.priceDefault': '100,000 - 200,000 越南盾',
        'services.table.noteDefault': '-',
        'services.table.othernote': '其他服务请通过热线、Zalo或KakaoTalk联系我们，获取更明确的报价。',

        // --- Service language names ---
        'services.languages.english': '英语',
        'services.languages.chinese': '中文',
        'services.languages.japanese': '日语',
        'services.languages.korean': '韩语',
        'services.languages.indonesian': '印尼语',
        'services.languages.lao': '老挝语',
        'services.languages.thai': '泰语',
        'services.languages.german': '德语',
        'services.languages.french': '法语',
        'services.languages.italian': '意大利语',
        'services.languages.russian': '俄语',
        'services.languages.hindi': '印地语',
        'services.languages.khmer': '柬埔寨语',
        'services.languages.arap': '阿拉伯语',

        // ===== Services page: Process =====
        'services.process.tag': '流程',
        'services.process.title': '工作流程',
        'services.process.desc': '四个简单步骤完成您的项目',
        'services.process.step1.title': '联系与报价',
        'services.process.step1.desc': '发送文件和需求，2小时内获得免费报价。',
        'services.process.step2.title': '分配译员',
        'services.process.step2.desc': '根据您的领域和语言选择最合适的译员。',
        'services.process.step3.title': '翻译与审校',
        'services.process.step3.desc': '专业翻译，经过三层质量检查。',
        'services.process.step4.title': '交付与支持',
        'services.process.step4.desc': '收到完整译文，7天内免费修改。',

        // ===== Services page: Other services =====
        'services.other.tag': '其他服务',
        'services.other.title': '其他服务',
        'services.other.desc': '除上述按语言划分的价目表外，我们还提供以下服务',
        'services.other.item1': '公证翻译',
        'services.other.item2': '网站与应用本地化',
        'services.other.item3': '视频与电影字幕',
        'services.other.item4': '配音',
        'services.other.item5': '编辑与校对',
        'services.other.item6': '商务合同翻译',
        'services.other.item7': '工厂考察口译',
        'services.other.item8': '医疗口译',
        'services.other.item9': '留学资料翻译',
        'services.other.item10': '加急翻译（Rush）',
        
        // ===== Testimonials =====
        'testimonials.tag': '客户评价',
        'testimonials.title': '客户怎么说',
        'testimonial1.text': '"专业、快速、高质量的服务。我对公司的合同翻译非常满意。"',
        'testimonial1.name': '阮文A',
        'testimonial1.position': '董事 - ABC有限公司',
        'testimonial2.text': '"口译团队在技术领域非常专业。他们在重要谈判中为我们提供了支持。"',
        'testimonial2.name': '陈氏B',
        'testimonial2.position': '销售经理 - XYZ公司',
        'testimonial3.text': '"价格合理，准时交付。将来肯定会继续使用该服务。"',
        'testimonial3.name': '黎文C',
        'testimonial3.position': '企业主',
        
        // ===== CTA =====
        'cta.title': '准备开始您的项目了吗？',
        'cta.desc': '立即联系我们获取免费咨询和最优惠的报价',
        'cta.btn1': '立即联系',
        'cta.btn2': '📞 0911.03.8855',
        
        // ===== Footer =====
        'footer.about.title': '关于我们',
        'footer.about.desc': '专业翻译公司，拥有经验丰富的翻译和口译人员，为国内外客户提供服务。',
        'footer.links.title': '链接',
        'footer.contact.title': '联系方式',
        'footer.hours.title': '工作时间',
        'footer.hours.weekday': '周一 - 周日：8:00 - 18:00',
        'footer.copyright': '© 2026 专业翻译。保留所有权利。',

        // ===== Recruitment page: Header =====
        'recruitment.header.title': '招募口译 - 笔译合作者',
        'recruitment.header.subtitle': '与我们一起为全球客户提供服务',

        // ===== Recruitment page: Intro & requirements table (13 languages) =====
        'recruitment.intro.tag': '合作机会',
        'recruitment.intro.title': '13种语言正在招募合作者',
        'recruitment.intro.desc': '我们正在扩大面向全国及海外的自由口译、笔译合作者网络。如果您精通以下任一语言，欢迎立即申请。',
        'recruitment.table.certificate': '优先学历 / 证书',
        'recruitment.table.plus': '加分项',
        'recruitment.table.bonus': '多领域口译经验、大学学历',
        'recruitment.table.equivalent': '高级水平证书（相当于TOPIK 5-6级）',
        'recruitment.table.note': '* 对于尚无通用标准化证书换算体系的语言，请一并提交学历、语言证书或同等经验证明，以便我们审核。',
        'recruitment.table.cert.korean': 'TOPIK 5 - 6级',
        'recruitment.table.cert.english': 'IELTS 6.5+ / TOEIC 800+（或同等水平）',
        'recruitment.table.cert.chinese': 'HSK 5 - 6级',
        'recruitment.table.cert.japanese': 'JLPT N2 - N1',
        'recruitment.table.cert.german': 'Goethe-Zertifikat B2 - C1',
        'recruitment.table.cert.french': 'DELF/DALF B2 - C1',
        'recruitment.table.cert.russian': 'TORFL（ТРКИ）二级 - 三级',

        // ===== Recruitment page: Why apply =====
        'recruitment.why.tag': '福利',
        'recruitment.why.title': '为什么成为我们的合作者',
        'recruitment.why1.title': '项目多样',
        'recruitment.why1.desc': '有机会参与多个不同领域的文件翻译和现场口译项目。',
        'recruitment.why2.title': '时间灵活',
        'recruitment.why2.desc': '根据个人日程主动接单，可远程或在办公室工作。',
        'recruitment.why3.title': '收入有竞争力',
        'recruitment.why3.desc': '按项目提供有竞争力的报酬，按时且透明地支付。',
        'recruitment.why4.title': '发展机会',
        'recruitment.why4.desc': '长期合作，表现优秀者优先获得大型项目。',

        // ===== Recruitment page: Application form =====
        'recruitment.form.title': '提交申请',
        'recruitment.form.desc': '请填写以下信息，我们会尽快与您联系。',
        'recruitment.form.language': '申请语言 *',
        'recruitment.form.about': '个人简介 *',
        'recruitment.form.cv': '简历',
        'recruitment.form.cvNote': '📎 请将简历文件（.pdf、.doc、.docx）直接添加为附件，附在您点击下方“提交申请”后打开的邮件中。添加前请按 <strong>姓名_语言</strong> 的格式命名文件（例如：NguyenVanA_Korean.pdf）。',
        'recruitment.form.submit': '提交申请',
        'recruitment.form.copy': '📋 复制内容',
        'recruitment.form.hint': '“提交申请”按钮会打开已预填内容的Gmail撰写窗口，收件人为 sowonglobal.company@gmail.com。如果您不使用Gmail或窗口无法打开，请点击“复制内容”，然后粘贴到您自己的邮件中。',
        'recruitment.form.attachReminder': '⚠️ 发送前请务必将简历文件（已按正确格式重命名）添加到邮件附件中。',

        // ===== Recruitment page: Sidebar =====
        'recruitment.side1.title': '申请流程',
        'recruitment.side1.step1': '✓ 提交申请并附上简历',
        'recruitment.side1.step2': '✓ 3-5天内审核资料',
        'recruitment.side1.step3': '✓ 面试 / 能力测试',
        'recruitment.side1.step4': '✓ 签署合作者合同',
        'recruitment.side2.title': '提交资料注意事项',
        'recruitment.side2.desc': '请按 <strong>姓名_语言</strong> 的格式命名简历文件（例如：NguyenVanA_Korean），以便我们更快处理。',
        'recruitment.side3.desc': '如有任何招聘相关问题，请联系：',

        // ===== Recruitment page: CTA =====
        'recruitment.cta.title': '准备好成为团队的一员了吗？',
        'recruitment.cta.desc': '今天就提交申请，开启与我们的合作之旅',
        'recruitment.cta.apply': '立即申请',
        'recruitment.cta.contact': '咨询联系',
        
        // ===== About page =====
        'about.header.title': '关于我们',
        'about.header.subtitle': '您在所有翻译项目中值得信赖的合作伙伴',
        'about.story.tag': '我们的故事',
        'about.story.title': '我们的旅程',
        'about.story.p1': '2015年通过日本和越南翻译专家的合作成立，我们自豪地成为越南领先的翻译公司之一，拥有超过10年的行业经验。',
        'about.story.p2': '从对语言的热情和连接各国文化的愿望出发，我们不断发展和扩张。从5名翻译人员组成的小团队开始，我们已经成长为一个拥有50多名专业翻译专家的团队，涵盖各个领域。',
        'about.story.p3': '我们的使命是以合理的价格提供高质量的翻译服务，帮助越南企业和个人走向世界，同时支持国际合作伙伴有效进入越南市场。',
        'about.story.since': '成立于2015年',
        'about.mission.title': '使命',
        'about.mission.desc': '提供高质量、准确、可靠的翻译服务，帮助客户克服语言障碍，在国际交流中取得成功。我们致力于以最合理的成本提供最佳价值。',
        'about.vision.title': '愿景',
        'about.vision.desc': '成为东南亚领先的翻译公司，以卓越的服务质量和翻译领域的持续创新而闻名。我们的目标是在各国之间建立强大的文化桥梁。',
        'about.values.title': '核心价值观',
        'about.values.desc': '质量 - 信誉 - 奉献。我们优先考虑质量，通过每个项目建立信誉，全心全意为客户服务。每一次翻译都是对完美和责任的承诺。',
        'about.team.tag': '团队',
        'about.team.title': '专家团队',
        'about.team.desc': '每个成功项目背后的才华横溢和敬业的人们',
        // --- About page: Team ---
        'about.team.label.degrees': '相关学历/证书',
        'about.team.label.years': '口译经验年数',
        'about.team.label.fields': '口译经验/领域',
        'about.team.label.projects': '代表性项目或客户',
        'about.team.ceo.badge': 'CEO',
        'about.team.ceo.role': '首席执行官',
        'about.team.ceo.name': 'Nguyen Thi Ngoc Tram',
        'about.team.ceo.degrees': '[CEO学历/证书]',
        'about.team.ceo.years': '[数字]年',
        'about.team.ceo.fields': '[口译领域]',
        'about.team.ceo.projects': '[代表性项目/客户]',
        'about.team.member2.name': '[专家2姓名]',
        'about.team.member2.degrees': '[学历/证书]',
        'about.team.member2.years': '[数字]年',
        'about.team.member2.fields': '[口译领域]',
        'about.team.member2.projects': '[代表性项目/客户]',
        'about.team.member3.name': '[专家3姓名]',
        'about.team.member3.degrees': '[学历/证书]',
        'about.team.member3.years': '[数字]年',
        'about.team.member3.fields': '[口译领域]',
        'about.team.member3.projects': '[代表性项目/客户]',
        'about.team.member4.name': '[专家4姓名]',
        'about.team.member4.degrees': '[学历/证书]',
        'about.team.member4.years': '[数字]年',
        'about.team.member4.fields': '[口译领域]',
        'about.team.member4.projects': '[代表性项目/客户]',
        'about.team.member5.name': '[专家5姓名]',
        'about.team.member5.degrees': '[学历/证书]',
        'about.team.member5.years': '[数字]年',
        'about.team.member5.fields': '[口译领域]',
        'about.team.member5.projects': '[代表性项目/客户]',
        'about.team.member6.name': '[专家6姓名]',
        'about.team.member6.degrees': '[学历/证书]',
        'about.team.member6.years': '[数字]年',
        'about.team.member6.fields': '[口译领域]',
        'about.team.member6.projects': '[代表性项目/客户]',
        'about.team.others.title': '其他语言专家',
        'about.team.others.desc': '精通其他语言的专业口译和笔译人员，随时满足客户的多样化需求：',
        'about.team.others.lang.en': '英语',
        'about.team.others.lang.zh': '中文',
        'about.team.others.lang.ja': '日语',
        'about.team.others.lang.ko': '韩语',
        'about.team.others.lang.id': '印尼语',
        'about.team.others.lang.lo': '老挝语',
        'about.team.others.lang.th': '泰语',
        'about.team.others.lang.de': '德语',
        'about.team.others.lang.fr': '法语',
        'about.team.others.lang.it': '意大利语',
        'about.team.others.lang.ru': '俄语',
        'about.team.others.lang.in': '印地语',
        'about.team.others.lang.km': '柬埔寨语',
        // --- About page: Certifications ---
        'about.cert.tag': '认证',
        'about.cert.title': '认证和奖项',
        'about.cert.desc': '获得国内外权威机构的认可',
        'about.cert.item1.title': 'ISO 17100:2015',
        'about.cert.item1.desc': '翻译服务国际标准认证',
        'about.cert.item2.title': '前10名翻译公司',
        'about.cert.item2.desc': '2023年越南领先翻译公司',
        'about.cert.item3.title': 'ATA成员',
        'about.cert.item3.desc': '美国翻译协会成员',
        'about.cert.item4.title': '政府认证',
        'about.cert.item4.desc': '获得越南司法部认可',
        // --- About page: Advantages ---
        'about.why.tag': '优势',
        'about.why.title': '为什么与我们合作',
        'about.why.item1.title': '多元文化团队',
        'about.why.item1.desc': '日本、越南、韩国和中国专家的结合带来对当地文化和语言的深刻理解。',
        'about.why.item2.title': '专业流程',
        'about.why.item2.desc': '严格遵守ISO 17100流程，包含3层质量控制：翻译 - 编辑 - 校对。',
        'about.why.item3.title': '先进技术',
        'about.why.item3.desc': '应用CAT工具（SDL Trados，MemoQ）和AI辅助来提高速度并确保一致性。',
        'about.why.item4.title': '专业化',
        'about.why.item4.desc': '译员按专业领域分配：法律、医疗、技术、营销、金融...',
        'about.why.item5.title': '透明定价',
        'about.why.item5.desc': '价格明确，没有隐藏费用。为忠实客户和大型项目提供特别优惠。',
        'about.why.item6.title': '持续支持',
        'about.why.item6.desc': '客户服务团队24/7待命，2小时内回复，7天免费修订支持。'
    }
};
// Lấy ngôn ngữ hiện tại từ localStorage hoặc mặc định là 'vi'
let currentLang = localStorage.getItem('language') || 'vi';

// Hàm khởi tạo ngôn ngữ khi load trang
function initLanguage() {
    setLanguage(currentLang, false);
    updateLanguageSwitcherUI();
}

// Hàm thay đổi ngôn ngữ
function setLanguage(lang, reload = true) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Duyệt qua tất cả elements có attribute data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];
        
        if (translation) {
            // Kiểm tra xem có phải là input placeholder không
            if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translation);
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update language switcher UI
    updateLanguageSwitcherUI();
    
    // Reload trang nếu cần (để update toàn bộ content)
    if (reload) {
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            location.reload();
        }, 200);
    }
}

// Cập nhật UI của language switcher
function updateLanguageSwitcherUI() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Hàm lấy text theo ngôn ngữ hiện tại
function t(key) {
    return translations[currentLang][key] || key;
}

// Khởi tạo khi DOM đã load xong
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    
    // Gắn event listeners cho language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            console.log('Language button clicked:', lang); // Debug log
            setLanguage(lang);
        });
    });
});

// Export để có thể dùng ở file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { setLanguage, t, currentLang };
}