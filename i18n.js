// Language Switcher System
// Hệ thống chuyển đổi ngôn ngữ 4 ngôn ngữ: Việt - Anh - Hàn - Trung

// Lưu trữ tất cả bản dịch
const translations = {
    vi: {
        // Navigation
        'nav.home': 'Trang Chủ',
        'nav.about': 'Về Chúng Tôi',
        'nav.services': 'Dịch Vụ',
        'nav.recruitment': 'Tuyển Dụng',
        'nav.contact': 'Liên Hệ',
        
        // Home page - Hero
        'hero.title': 'DỊCH VỤ DỊCH THUẬT CHUYÊN NGHIỆP',
        'hero.desc': 'Công ty dịch thuật hàng đầu và giá hợp lý tại Việt Nam được thành lập bởi người Hàn với 10 năm kinh nghiệm trong lĩnh vực dịch thuật.',
        'hero.btn1': 'Xem Dịch Vụ',
        'hero.btn2': 'Liên Hệ Ngay',
        
        // Home page - Why Choose Us
        'why.tag': 'TẠI SAO CHỌN CHÚNG TÔI',
        'why.title': 'Ưu Điểm Vượt Trội',
        'why.desc': 'Chúng tôi mang đến giải pháp dịch thuật toàn diện với chất lượng hàng đầu',
        
        // Features
        'feature.quality.title': 'Chất Lượng Cao',
        'feature.quality.desc': 'Đội ngũ dịch giả chuyên nghiệp với chứng chỉ quốc tế, đảm bảo độ chính xác tuyệt đối',
        'feature.price.title': 'Giá Cạnh Tranh',
        'feature.price.desc': 'Chi phí hợp lý, minh bạch với nhiều gói dịch vụ phù hợp với mọi ngân sách',
        'feature.speed.title': 'Giao Hàng Nhanh',
        'feature.speed.desc': 'Cam kết đúng tiến độ, hỗ trợ dịch vụ khẩn cấp 24/7 khi cần thiết',
        'feature.security.title': 'Bảo Mật Tuyệt Đối',
        'feature.security.desc': 'Cam kết bảo mật thông tin khách hàng với hợp đồng NDA nghiêm ngặt',
        'feature.multilang.title': 'Đa Ngôn Ngữ',
        'feature.multilang.desc': 'Hỗ trợ hơn 20 ngôn ngữ phổ biến trên thế giới, đặc biệt là Nhật - Việt',
        'feature.support.title': 'Hỗ Trợ 24/7',
        'feature.support.desc': 'Đội ngũ tư vấn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi',
        
        // Stats
        'stat.projects': 'Dự Án Hoàn Thành',
        'stat.clients': 'Khách Hàng Hài Lòng',
        'stat.experience': 'Năm Kinh Nghiệm',
        'stat.translators': 'Dịch Giả Chuyên Nghiệp',
        
        // Services
        'services.tag': 'DỊCH VỤ',
        'services.title': 'Dịch Vụ Của Chúng Tôi',
        'services.desc': 'Đa dạng các dịch vụ dịch thuật chuyên nghiệp',
        'services.viewall': 'Xem Tất Cả Dịch Vụ',
        'services.learnmore': 'Tìm hiểu thêm →',
        'service.document.title': 'Dịch Tài Liệu',
        'service.document.desc': 'Dịch thuật tài liệu công chứng, hợp đồng, báo cáo chuyên nghiệp',
        'service.interpretation.title': 'Phiên Dịch',
        'service.interpretation.desc': 'Phiên dịch viên cho hội nghị, sự kiện, đàm phán kinh doanh',
        'service.localization.title': 'Bản Địa Hóa',
        'service.localization.desc': 'Bản địa hóa website, app, phần mềm cho thị trường quốc tế',
        
        // Testimonials
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
        
        // CTA
        'cta.title': 'Sẵn Sàng Bắt Đầu Dự Án?',
        'cta.desc': 'Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí và báo giá tốt nhất',
        'cta.btn1': 'Liên Hệ Ngay',
        'cta.btn2': '📞 0986627194',
        
        // Footer
        'footer.about.title': 'Về Chúng Tôi',
        'footer.about.desc': 'Công ty dịch thuật chuyên nghiệp với đội ngũ biên phiên dịch viên giàu kinh nghiệm, phục vụ khách hàng trong nước và quốc tế.',
        'footer.links.title': 'Liên Kết',
        'footer.contact.title': 'Liên Hệ',
        'footer.hours.title': 'Giờ Làm Việc',
        'footer.hours.weekday': 'Thứ Hai - Thứ Sáu: 8:00 - 18:00',
        'footer.hours.saturday': 'Thứ Bảy: 8:00 - 12:00',
        'footer.hours.sunday': 'Chủ Nhật: Nghỉ',
        'footer.copyright': '© 2026 Dịch Thuật Chuyên Nghiệp. All rights reserved.',
        
        // About page
        'about.header.title': 'Về Chúng Tôi',
        'about.header.subtitle': 'Đối tác tin cậy trong mọi dự án dịch thuật của bạn',
        'about.story.tag': 'CÂU CHUYỆN CỦA CHÚNG TÔI',
        'about.story.title': 'Hành Trình Phát Triển',
        'about.story.p1': 'Sowon Global được hình thành từ nền tảng của những phiên dịch viên chuyên sâu trong lĩnh vực y tế và pháp lý – nơi mà từng câu chữ không chỉ mang ý nghĩa truyền đạt thông tin, mà còn có thể ảnh hưởng trực tiếp đến sức khỏe con người, quyền lợi và cả số phận.',
        'about.story.p2': 'Thấu hiểu sâu sắc sức mạnh của ngôn từ, chúng tôi bắt đầu hành trình của mình từ năm 2018 tại Hàn Quốc – cái nôi đầu tiên đặt nền móng cho sự phát triển chuyên môn và tiêu chuẩn dịch thuật khắt khe. Đến năm 2025, Sowon Global chính thức được thành lập tại Việt Nam, với mong muốn mở rộng giá trị và mang đến những dịch vụ ngôn ngữ chuyên nghiệp, chuẩn xác và đáng tin cậy hơn cho khách hàng trong nước và quốc tế.',
        'about.story.p3': 'Chúng tôi không chỉ dịch ngôn ngữ – chúng tôi truyền tải ý nghĩa, trách nhiệm và niềm tin.',
        'about.story.since': 'Thành lập từ 2015',
        'about.mission.title': 'Sứ Mệnh',
        'about.mission.desc': 'Mang đến giải pháp ngôn ngữ chuẩn xác – chuyên sâu – đáng tin cậy, góp phần kết nối con người, doanh nghiệp và pháp lý xuyên biên giới một cách minh bạch và hiệu quả. Chúng tôi cam kết trở thành cầu nối vững chắc, nơi mọi thông tin được truyền đạt đúng bản chất, đúng tinh thần và đúng giá trị.',
        'about.vision.title': 'SLOGAN',
        'about.vision.desc': 'Sáng tâm – Vươn tầm',
        'about.values.title': 'Giá Trị Cốt Lõi',
        'about.values.desc': '• Tâm là nền tảng: Chúng tôi luôn đặt chữ Tâm lên hàng đầu trong mọi hoạt động, bởi chỉ khi làm việc bằng sự tận tâm, dịch vụ mới thực sự có giá trị bền vững.\n\n• Chính xác tuyệt đối: Mỗi bản dịch đều được kiểm soát chặt chẽ về nội dung, thuật ngữ và ngữ cảnh chuyên ngành.\n\n• Nhanh chóng – hiệu quả: Tối ưu thời gian nhưng không đánh đổi chất lượng.\n\n• Bảo mật tối đa: Cam kết bảo mật tuyệt đối mọi thông tin khách hàng và nội dung tài liệu trong suốt quá trình tác nghiệp.\n\n• CAM KẾT: Sự lựa chọn của Quý khách hàng không chỉ là một quyết định sử dụng dịch vụ – đó còn là sự trao gửi niềm tin. Với Sowon Global, chúng tôi xem mỗi sự tin tưởng ấy là trách nhiệm để nỗ lực hơn mỗi ngày, hoàn thiện từng chi tiết nhỏ nhất, nhằm mang lại giá trị xứng đáng và lâu dài.',
        'about.team.tag': 'ĐỘI NGŨ',
        'about.team.title': 'Đội Ngũ Chuyên Gia',
        'about.team.desc': 'Những con người tài năng và tận tâm đằng sau mỗi dự án thành công',
        'about.team.member1.name': 'Tanaka Hiroshi',
        'about.team.member1.position': 'Đồng Sáng Lập & CEO',
        'about.team.member1.desc': '15 năm kinh nghiệm dịch thuật Nhật - Việt, chuyên gia trong lĩnh vực kinh tế và pháp luật.',
        'about.team.member2.name': 'Nguyễn Thu Hà',
        'about.team.member2.position': 'Đồng Sáng Lập & COO',
        'about.team.member2.desc': 'Thạc sĩ Ngôn ngữ học, 12 năm kinh nghiệm quản lý dự án dịch thuật quy mô lớn.',
        'about.team.member3.name': 'Park Min-jun',
        'about.team.member3.position': 'Trưởng Phòng Dịch Thuật Hàn Quốc',
        'about.team.member3.desc': 'Chuyên gia dịch thuật Hàn - Việt với hơn 10 năm kinh nghiệm trong ngành công nghệ và sản xuất.',
        'about.team.member4.name': 'Trần Minh Anh',
        'about.team.member4.position': 'Trưởng Bộ Phận Kiểm Soát Chất Lượng',
        'about.team.member4.desc': 'Chứng chỉ ISO 17100, chuyên gia về quy trình kiểm soát chất lượng dịch thuật quốc tế.',
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
        'about.why.tag': 'LỢI THẾ',
        'about.why.title': 'Tại Sao Làm Việc Với Chúng Tôi',
        'about.why.item1.title': 'Đội Ngũ Đa Văn Hóa',
        'about.why.item1.desc': 'Sự kết hợp giữa chuyên gia người Nhật, Việt Nam, Hàn Quốc và Trung Quốc mang đến hiểu biết sâu sắc về văn hóa và ngôn ngữ địa phương.',
        'about.why.item2.title': 'Quy Trình Chuyên Nghiệp',
        'about.why.item2.desc': 'Tuân thủ nghiêm ngặt quy trình ISO 17100 với 3 lớp kiểm tra chất lượng: Translation - Editing - Proofreading.',
        'about.why.item3.title': 'Công Nghệ Tiên Tiến',
        'about.why.item3.desc': 'Ứng dụng CAT tools (SDL Trados, MemoQ) và AI hỗ trợ để tăng tốc độ và đảm bảo tính nhất quán.',
        'about.why.item4.title': 'Chuyên Môn Hóa',
        'about.why.item4.desc': 'Dịch giả được phân công theo chuyên môn: Pháp lý, Y tế, Kỹ thuật, Marketing, Tài chính...',
        'about.why.item5.title': 'Giá Cả Minh Bạch',
        'about.why.item5.desc': 'Bảng giá rõ ràng, không phát sinh chi phí ẩn. Ưu đãi đặc biệt cho khách hàng thân thiết và dự án lớn.',
        'about.why.item6.title': 'Hỗ Trợ Liên Tục',
        'about.why.item6.desc': 'Đội ngũ customer service sẵn sàng 24/7, phản hồi trong vòng 2 giờ, hỗ trợ revision miễn phí trong 7 ngày.'
    },
    
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.recruitment': 'Careers',
        'nav.contact': 'Contact',
        
        // Home page - Hero
        'hero.title': 'PROFESSIONAL TRANSLATION SERVICE',
        'hero.desc': 'A leading translation company with reasonable price founded by the cooperation of Japanese and Vietnamese.',
        'hero.btn1': 'View Services',
        'hero.btn2': 'Contact Now',
        
        // Home page - Why Choose Us
        'why.tag': 'WHY CHOOSE US',
        'why.title': 'Outstanding Advantages',
        'why.desc': 'We provide comprehensive translation solutions with top-tier quality',
        
        // Features
        'feature.quality.title': 'High Quality',
        'feature.quality.desc': 'Professional translators with international certifications, ensuring absolute accuracy',
        'feature.price.title': 'Competitive Pricing',
        'feature.price.desc': 'Reasonable and transparent costs with various packages suitable for all budgets',
        'feature.speed.title': 'Fast Delivery',
        'feature.speed.desc': 'Committed to meeting deadlines, with 24/7 urgent service support when needed',
        'feature.security.title': 'Absolute Confidentiality',
        'feature.security.desc': 'Committed to protecting customer information with strict NDA contracts',
        'feature.multilang.title': 'Multi-Language',
        'feature.multilang.desc': 'Supporting over 20 popular languages worldwide, especially Japanese-Vietnamese',
        'feature.support.title': '24/7 Support',
        'feature.support.desc': 'Our consulting team is ready to support you anytime, anywhere',
        
        // Stats
        'stat.projects': 'Completed Projects',
        'stat.clients': 'Satisfied Clients',
        'stat.experience': 'Years of Experience',
        'stat.translators': 'Professional Translators',
        
        // Services
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
        
        // Testimonials
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
        
        // CTA
        'cta.title': 'Ready to Start Your Project?',
        'cta.desc': 'Contact us today for free consultation and the best quotation',
        'cta.btn1': 'Contact Now',
        'cta.btn2': '📞 0911.03.8855',
        
        // Footer
        'footer.about.title': 'About Us',
        'footer.about.desc': 'Professional translation company with experienced translators and interpreters, serving domestic and international clients.',
        'footer.links.title': 'Links',
        'footer.contact.title': 'Contact',
        'footer.hours.title': 'Working Hours',
        'footer.hours.weekday': 'Monday - Friday: 8:00 - 18:00',
        'footer.hours.saturday': 'Saturday: 8:00 - 12:00',
        'footer.hours.sunday': 'Sunday: Closed',
        'footer.copyright': '© 2026 Professional Translation. All rights reserved.',
        
        // About page
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
        'about.team.member1.name': 'Tanaka Hiroshi',
        'about.team.member1.position': 'Co-Founder & CEO',
        'about.team.member1.desc': '15 years of experience in Japanese-Vietnamese translation, expert in economics and law.',
        'about.team.member2.name': 'Nguyen Thu Ha',
        'about.team.member2.position': 'Co-Founder & COO',
        'about.team.member2.desc': 'Master of Linguistics, 12 years of experience managing large-scale translation projects.',
        'about.team.member3.name': 'Park Min-jun',
        'about.team.member3.position': 'Head of Korean Translation',
        'about.team.member3.desc': 'Korean-Vietnamese translation expert with over 10 years of experience in technology and manufacturing.',
        'about.team.member4.name': 'Tran Minh Anh',
        'about.team.member4.position': 'Quality Control Manager',
        'about.team.member4.desc': 'ISO 17100 certified, expert in international translation quality control processes.',
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
        // Navigation
        'nav.home': '홈',
        'nav.about': '회사 소개',
        'nav.services': '서비스',
        'nav.recruitment': '채용',
        'nav.contact': '연락처',
        
        // Home page - Hero
        'hero.title': '전문 번역 서비스',
        'hero.desc': '일본인과 베트남인의 협력으로 설립된 베트남 최고의 합리적인 가격의 번역 회사입니다.',
        'hero.btn1': '서비스 보기',
        'hero.btn2': '지금 문의하기',
        
        // Home page - Why Choose Us
        'why.tag': '왜 저희를 선택해야 하나요',
        'why.title': '탁월한 장점',
        'why.desc': '최고 품질의 포괄적인 번역 솔루션을 제공합니다',
        
        // Features
        'feature.quality.title': '높은 품질',
        'feature.quality.desc': '국제 인증을 받은 전문 번역가들이 절대적인 정확성을 보장합니다',
        'feature.price.title': '경쟁력 있는 가격',
        'feature.price.desc': '모든 예산에 적합한 다양한 패키지로 합리적이고 투명한 비용',
        'feature.speed.title': '빠른 배송',
        'feature.speed.desc': '마감일 준수를 약속하며, 필요시 24/7 긴급 서비스 지원',
        'feature.security.title': '완벽한 기밀 유지',
        'feature.security.desc': '엄격한 NDA 계약으로 고객 정보 보호를 약속합니다',
        'feature.multilang.title': '다국어 지원',
        'feature.multilang.desc': '전 세계 20개 이상의 인기 언어를 지원하며, 특히 일본어-베트남어에 특화되어 있습니다',
        'feature.support.title': '24/7 지원',
        'feature.support.desc': '언제 어디서나 컨설팅 팀이 지원할 준비가 되어 있습니다',
        
        // Stats
        'stat.projects': '완료된 프로젝트',
        'stat.clients': '만족한 고객',
        'stat.experience': '년간의 경험',
        'stat.translators': '전문 번역가',
        
        // Services
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
        
        // Testimonials
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
        
        // CTA
        'cta.title': '프로젝트를 시작할 준비가 되셨나요?',
        'cta.desc': '무료 상담과 최상의 견적을 받으려면 오늘 문의하세요',
        'cta.btn1': '지금 문의하기',
        'cta.btn2': '📞 0911.03.8855',
        
        // Footer
        'footer.about.title': '회사 소개',
        'footer.about.desc': '국내외 고객을 위해 경험이 풍부한 번역가와 통역사를 보유한 전문 번역 회사입니다.',
        'footer.links.title': '링크',
        'footer.contact.title': '연락처',
        'footer.hours.title': '영업 시간',
        'footer.hours.weekday': '월요일 - 금요일: 8:00 - 18:00',
        'footer.hours.saturday': '토요일: 8:00 - 12:00',
        'footer.hours.sunday': '일요일: 휴무',
        'footer.copyright': '© 2026 Professional Translation. All rights reserved.',
        
        // About page
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
        'about.team.member1.name': '다나카 히로시',
        'about.team.member1.position': '공동 창립자 & CEO',
        'about.team.member1.desc': '일본어-베트남어 번역 경력 15년, 경제 및 법률 분야 전문가.',
        'about.team.member2.name': '응우옌 투 하',
        'about.team.member2.position': '공동 창립자 & COO',
        'about.team.member2.desc': '언어학 석사, 대규모 번역 프로젝트 관리 경력 12년.',
        'about.team.member3.name': '박 민준',
        'about.team.member3.position': '한국 번역 부장',
        'about.team.member3.desc': '기술 및 제조 분야에서 10년 이상의 경험을 가진 한국어-베트남어 번역 전문가.',
        'about.team.member4.name': '트란 민 아잉',
        'about.team.member4.position': '품질 관리 책임자',
        'about.team.member4.desc': 'ISO 17100 인증, 국제 번역 품질 관리 프로세스 전문가.',
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
        // Navigation
        'nav.home': '首页',
        'nav.about': '关于我们',
        'nav.services': '服务',
        'nav.recruitment': '招聘',
        'nav.contact': '联系我们',
        
        // Home page - Hero
        'hero.title': '专业翻译服务',
        'hero.desc': '由日本人和越南人合作创立的越南领先且价格合理的翻译公司。',
        'hero.btn1': '查看服务',
        'hero.btn2': '立即联系',
        
        // Home page - Why Choose Us
        'why.tag': '为什么选择我们',
        'why.title': '卓越优势',
        'why.desc': '我们提供顶级质量的全面翻译解决方案',
        
        // Features
        'feature.quality.title': '高质量',
        'feature.quality.desc': '拥有国际认证的专业翻译人员，确保绝对准确',
        'feature.price.title': '竞争价格',
        'feature.price.desc': '合理透明的费用，提供适合各种预算的多种套餐',
        'feature.speed.title': '快速交付',
        'feature.speed.desc': '承诺按时交付，需要时提供24/7紧急服务支持',
        'feature.security.title': '绝对保密',
        'feature.security.desc': '通过严格的保密协议承诺保护客户信息',
        'feature.multilang.title': '多语言',
        'feature.multilang.desc': '支持全球20多种流行语言，特别是日语-越南语',
        'feature.support.title': '24/7支持',
        'feature.support.desc': '我们的咨询团队随时准备为您提供支持',
        
        // Stats
        'stat.projects': '完成项目',
        'stat.clients': '满意客户',
        'stat.experience': '年经验',
        'stat.translators': '专业翻译',
        
        // Services
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
        
        // Testimonials
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
        
        // CTA
        'cta.title': '准备开始您的项目了吗？',
        'cta.desc': '立即联系我们获取免费咨询和最优惠的报价',
        'cta.btn1': '立即联系',
        'cta.btn2': '📞 0911.03.8855',
        
        // Footer
        'footer.about.title': '关于我们',
        'footer.about.desc': '专业翻译公司，拥有经验丰富的翻译和口译人员，为国内外客户提供服务。',
        'footer.links.title': '链接',
        'footer.contact.title': '联系方式',
        'footer.hours.title': '工作时间',
        'footer.hours.weekday': '周一 - 周五：8:00 - 18:00',
        'footer.hours.saturday': '周六：8:00 - 12:00',
        'footer.hours.sunday': '周日：休息',
        'footer.copyright': '© 2026 专业翻译。保留所有权利。',
        
        // About page
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
        'about.team.member1.name': '田中博',
        'about.team.member1.position': '联合创始人 & CEO',
        'about.team.member1.desc': '日语-越南语翻译经验15年，经济和法律领域专家。',
        'about.team.member2.name': '阮秋河',
        'about.team.member2.position': '联合创始人 & COO',
        'about.team.member2.desc': '语言学硕士，管理大型翻译项目12年经验。',
        'about.team.member3.name': '朴敏俊',
        'about.team.member3.position': '韩语翻译部主管',
        'about.team.member3.desc': '韩语-越南语翻译专家，在技术和制造行业拥有超过10年的经验。',
        'about.team.member4.name': '陈明英',
        'about.team.member4.position': '质量控制经理',
        'about.team.member4.desc': 'ISO 17100认证，国际翻译质量控制流程专家。',
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