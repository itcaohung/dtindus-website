/* ============================================================
   DUC TIEN INDUSTRIAL - main.js
   ------------------------------------------------------------
   CẬP NHẬT THÔNG TIN LIÊN HỆ: sửa tại đối tượng CONFIG dưới đây
   ============================================================ */
const CONFIG = {
  contactName: "Hoàng Văn Tới",
  contactRoleKey: "contact.role",
  phone: "0937 448 168",
  email: "admin@dtindus.com",
  website: "https://dtindus.com",
  address: "Số 66/128/39 Bùi Trọng Nghĩa, Tổ 13B, KP1, P. Trảng Dài, TP. Biên Hòa, Đồng Nai",
  factory: "D2, Tổ 44, KP4, P. Trảng Dài, TP. Biên Hòa, Đồng Nai",
  branch: "280C Trần Ngọc Giải, P.6, TP. Mỹ Tho, Tiền Giang",
  hours: "24/7",
  zalo: "0937448168",
  facebook: ""
};

/* ============================================================
   DỰ ÁN TIÊU BIỂU
   ============================================================ */
const PROJECTS = [
  { img: "proj-haiyen.jpg",    nameKey: "projects.p1.name",    loc: "Long Mỹ - Hậu Giang",        cap: "1 MWp",     year: "2020", eq: "JA 450Wp • Sungrow 110kW" },
  { img: "proj-longphu.jpg",   nameKey: "projects.p2.name",    loc: "Long Phú - Hậu Giang",       cap: "1.2 MWp",   year: "2020", eq: "Leapton 450Wp • Sungrow 110kW" },
  { img: "proj-sonbinh.jpg",   nameKey: "projects.p3.name",    loc: "Hàm Thuận Bắc - Bình Thuận", cap: "1.2 MWp",   year: "2020", eq: "Leapton 450Wp • SMA 110kW" },
  { img: "proj-thienly.jpg",   nameKey: "projects.p4.name",    loc: "Trảng Bom - Đồng Nai",       cap: "1.2 MWp",   year: "2020", eq: "Leapton 450Wp • SolarEdge 82.8kW" },
  { img: "proj-trungthanh.jpg", nameKey: "projects.p5.name",   loc: "Cần Đước - Long An",         cap: "1.2 MWp",   year: "2020", eq: "Leapton 450Wp • SolarEdge 82.8kW" },
  { img: "proj-s4.jpg",        nameKey: "projects.p6.name",    loc: "Bến Cát - Bình Dương",       cap: "400 kWp",   year: "2020", eq: "Leapton 450Wp • SolarEdge 82.8kW" },
  { img: "proj-nhadep.jpg",    nameKey: "projects.p7.name",    loc: "Bến Cát - Bình Dương",       cap: "100 kWp",   year: "2020", eq: "Leapton 450Wp • SolarEdge 82.8kW" },
  { img: "proj-baria-v2.jpg",   nameKey: "projects.p8.name",    loc: "Bà Rịa - Vũng Tàu",          cap: "999 kWp",   year: "2020", eq: "Trina 450Wp • KACO 82kW" },
  { img: "proj-cpvn.jpg",      nameKey: "projects.p9.name",    loc: "KCN Trung An - Tiền Giang",  cap: "999 kWp",   year: "2025", eq: "Longi 580Wp • HUAWEI 100kW" },
  { img: "proj-tempearl.jpg",  nameKey: "projects.p10.name",   loc: "KCX Quận 7 - TP. HCM",       cap: "300 kWp",   year: "2025", eq: "Longi 580Wp • SUNGROW 150kW" }
];

/* ============================================================
   NỘI DUNG SONG NGỮ (VI / EN)
   ============================================================ */
const I18N = {
  vi: {
    "nav.home": "Trang chủ",
    "nav.about": "Giới thiệu",
    "nav.fields": "Lĩnh vực",
    "nav.projects": "Dự án",
    "nav.services": "Dịch vụ",
    "nav.contact": "Liên hệ",

    "hero.eyebrow": "CÔNG TY TNHH CÔNG NGHIỆP ĐỨC TIẾN • DUC TIEN INDUSTRIAL CO., LTD",
    "hero.title": "Cung cấp giải pháp năng lượng toàn diện",
    "hero.sub": "DTI (DUC TIEN INDUSTRIAL) cung cấp cho khách hàng giải pháp năng lượng mặt trời toàn diện, từ hạng mục khảo sát thiết kế, sản xuất cung ứng vật tư thiết bị, cho tới việc thi công lắp đặt, thử nghiệm vận hành và bàn giao cho chủ đầu tư.",
    "hero.cta1": "Xem lĩnh vực hoạt động",
    "hero.cta2": "Liên hệ ngay",
    "hero.cardTitle": "Vì sao chọn Đức Tiến?",
    "hero.cardS1": "Dự án hoàn thành",
    "hero.cardS2": "Lĩnh vực hoạt động",
    "hero.cardS3": "Hỗ trợ khách hàng",
    "hero.cardL1": "Tư vấn & khảo sát miễn phí",
    "hero.cardL2": "Thi công chuyên nghiệp, đúng tiến độ",
    "hero.cardL3": "Vận hành & bảo trì tận tâm",
    "hero.cardCta": "Nhận báo giá miễn phí",

    "stats.year": "2017",
    "stats.yearLabel": "Năm thành lập",
    "stats.fields": "6",
    "stats.fieldsLabel": "Lĩnh vực hoạt động",
    "stats.projects": "10+",
    "stats.projectsLabel": "Dự án tiêu biểu đã triển khai",
    "stats.serviceLabel": "Dịch vụ hỗ trợ khách hàng",

    "about.title": "Giới thiệu công ty",
    "about.p1": "Công ty TNHH Công nghiệp Đức Tiến (DTI) được thành lập năm 2017 hoạt động trong lĩnh vực năng lượng tái tạo. Với kinh nghiệm nhiều năm trong lĩnh vực điện năng lượng mặt trời chúng tôi cung cấp giải pháp năng lượng mặt trời toàn diện cho khách hàng.",
    "about.p2": "Với đội ngũ kỹ sư, chuyên viên trong ngành năng lượng mặt trời, DTI luôn đưa ra những giải pháp năng lượng, tiết kiệm điện tối ưu nhất cho Quý khách hàng. Đến với chúng tôi, khách hàng sẽ được trải nghiệm những dịch vụ tốt nhất, hoàn hảo nhất với giá cạnh tranh và hỗ trợ 24/7.",
    "about.badge": "Tận tâm • Uy tín • Chất lượng",

    "fields.title": "Lĩnh vực hoạt động",
    "fields.sub": "Các lĩnh vực hoạt động chính của Đức Tiến",
    "fields.d1.title": "1. SẢN XUẤT CƠ KHÍ",
    "fields.d1.p1": "Với kinh nghiệm nhiều năm trong lĩnh vực sản xuất cùng trang thiết bị hiện đại, DTI cung cấp các sản phẩm cơ khí chất lượng, đáp ứng tiêu chuẩn khắt khe nhất.",
    "fields.d1.sub": "Các hạng mục, sản phẩm chúng tôi cung cấp cho các dự án năng lượng mặt trời",
    "fields.d1.l1": "Sàn thao tác (walkway) mạ kẽm nhúng nóng.",
    "fields.d1.l2": "Hành lang an toàn (handrail) mạ kẽm nhúng nóng.",
    "fields.d1.l3": "Thang máng cáp mạ kẽm nhúng nóng.",
    "fields.d1.l4": "Thang lồng mạ kẽm nhúng nóng theo tiêu chuẩn PCCC",
    "fields.d1.l5": "Nhà trạm lắp đặt inverter.",
    "fields.d1.l6": "Cầu cáp DC mạ kẽm nhúng nóng.",
    "fields.d1.l7": "Hệ thống dây cứu sinh trên mái (lifeline)",
    "fields.d1.l8": "Các sản phẩm cơ khí khác.",
    "fields.d2.title": "2. TỔNG THẦU EPC",
    "fields.d2.eng": "Engineering (Thiết kế):",
    "fields.d2.engDesc": "Khảo sát hiện trường, tính toán sản lượng, thiết kế hệ thống, lựa chọn công nghệ và lập bản vẽ kỹ thuật.",
    "fields.d2.proc": "Procurement (Mua sắm):",
    "fields.d2.procDesc": "Lựa chọn và mua tấm pin, inverter, kết cấu, cáp điện, tủ điện và các thiết bị khác; quản lý chuỗi cung ứng.",
    "fields.d2.cons": "Construction (Thi công):",
    "fields.d2.consDesc": "Lắp đặt, đấu nối, kiểm tra, chạy thử (commissioning) và bàn giao hệ thống cho chủ đầu tư.",
    "fields.d3.title": "3. DỊCH VỤ O&M",
    "fields.d3.mon": "Theo dõi hệ thống:",
    "fields.d3.monDesc": "Giám sát sản lượng điện và lỗi phát sinh qua phần mềm 24/7.",
    "fields.d3.maint": "Bảo dưỡng định kỳ:",
    "fields.d3.maintDesc": "Kiểm tra các thiết bị điện, đo đạc thông số kỹ thuật và vệ sinh bề mặt pin mặt trời.",
    "fields.d3.repair": "Sửa chữa kịp thời:",
    "fields.d3.repairDesc": "Khắc phục sự cố hỏng hóc biến tần (inverter) hoặc thay thế linh kiện khi có lỗi.",

    "projects.title": "Dự án tiêu biểu",
    "projects.sub": "Những dự án đã được Đức Tiến thiết kế, thi công và bàn giao thành công",
    "projects.p1.name": "Dự án Hải Yến",
    "projects.p2.name": "Dự án Long Phú",
    "projects.p3.name": "Dự án Sơn Bình",
    "projects.p4.name": "SAMETEL - An Thiên Lý",
    "projects.p5.name": "SAMETEL - Trung Thành",
    "projects.p6.name": "Dự án S4 Fashion",
    "projects.p7.name": "Dự án Nhà đẹp",
    "projects.p8.name": "Nhiệt điện Bà Rịa",
    "projects.p9.name": "C.P Việt Nam",
    "projects.p10.name": "TemPearl",

    "services.title": "Dịch vụ của chúng tôi",
    "services.sub": "Đồng hành cùng khách hàng từ khâu tư vấn đến vận hành, bảo trì",
    "services.s1.name": "Khảo sát & Thiết kế",
    "services.s1.desc": "Đội ngũ kỹ sư khảo sát hiện trạng, tư vấn và thiết kế hệ thống NLMT tối ưu về hiệu suất và chi phí cho từng khách hàng.",
    "services.s1.li1": "Khảo sát, đánh giá hiện trạng mái, công suất tiêu thụ",
    "services.s1.li2": "Thiết kế bản vẽ, lựa chọn thiết bị phù hợp",
    "services.s2.name": "Thi công lắp đặt",
    "services.s2.desc": "Thi công chuyên nghiệp với trang thiết bị hiện đại, quản lý thi công chặt chẽ, kiểm soát khối lượng và đảm bảo đúng tiến độ, chất lượng.",
    "services.s2.li1": "Thi công hệ thống NLMT áp mái, farm, mini farm, xà lan",
    "services.s2.li2": "Đấu nối, hòa lưới và nghiệm thu hệ thống",
    "services.s3.name": "Vận hành & Bảo trì",
    "services.s3.desc": "Dịch vụ vệ sinh, bảo trì định kỳ và xử lý sự cố hệ thống điện mặt trời, đảm bảo hệ thống vận hành hiệu quả tối đa.",
    "services.s3.li1": "Vệ sinh tấm PV, kiểm tra hệ thống định kỳ",
    "services.s3.li2": "Hỗ trợ xử lý sự cố nhanh chóng, dịch vụ 24/7",

    "custom.title": "Cần tư vấn giải pháp năng lượng mặt trời?",
    "custom.desc": "Liên hệ ngay hotline để được đội ngũ kỹ sư của Đức Tiến tư vấn miễn phí, khảo sát hiện trạng và báo giá nhanh nhất.",
    "custom.call": "Gọi hotline",

    "equip.title": "Vật tư - Thiết bị",
    "equip.sub": "Trang thiết bị chuyên dụng đảm bảo cung cấp dịch vụ chuyên nghiệp và xử lý mọi tình huống",

    "machines.title": "Năng lực nhà xưởng",
    "machines.sub": "Hệ thống máy móc thiết bị hiện đại phục vụ sản xuất tại nhà xưởng Đức Tiến",

    "values.title": "Tầm nhìn - Sứ mệnh",
    "values.sub": "Định hướng phát triển của Đức Tiến",
    "values.v1.name": "Tầm nhìn",
    "values.v1.desc": "Trong 5 năm tới, trở thành công ty dịch vụ cung cấp thiết bị, thi công lắp đặt hệ thống năng lượng mặt trời đứng top đầu tại Việt Nam.",
    "values.v2.name": "Sứ mệnh",
    "values.v2.desc": "Mang đến những dịch vụ tốt nhất cho khách hàng, góp phần phát triển đất nước thông qua các giải pháp năng lượng sạch.",
    "values.v3.name": "Nhân sự & Cơ sở vật chất",
    "values.v3.desc": "Tuyển dụng và đào tạo nguồn nhân lực chất lượng cao, làm việc chuyên nghiệp, tận tâm, có trách nhiệm với khách hàng.",
    "values.v4.name": "Triết lý kinh doanh",
    "values.v4.desc": "Khách hàng là trọng tâm, là định hướng phục vụ của doanh nghiệp. Đặt chữ tín lên hàng đầu - Tận tâm, Uy tín, Chất lượng.",

    "partners.title": "Đối tác",
    "partners.sub": "Các đối tác đã đồng hành và tin tưởng hợp tác cùng Đức Tiến",

    "contact.title": "Liên hệ",
    "contact.sub": "Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ, tư vấn cho bạn 24/7",
    "contact.infoTitle": "Thông tin liên hệ",
    "contact.groupAddress": "Địa chỉ",
    "contact.groupDirect": "Liên hệ",
    "contact.personLabel": "Người liên hệ",
    "contact.role": "Giám đốc",
    "contact.addrLabel": "Trụ sở chính",
    "contact.factoryLabel": "Nhà máy",
    "contact.branchLabel": "Chi nhánh",
    "contact.phoneLabel": "Điện thoại",
    "contact.emailLabel": "Email",
    "contact.websiteLabel": "Website",
    "contact.hoursLabel": "Hỗ trợ",
    "contact.formName": "Họ và tên *",
    "contact.formPhone": "Số điện thoại *",
    "contact.formEmail": "Email",
    "contact.formMsg": "Nội dung cần tư vấn *",
    "contact.formSubmit": "Gửi yêu cầu",
    "contact.formOk": "Cảm ơn bạn! Chọn một trong hai cách bên dưới để gửi nội dung.",
    "contact.formEmpty": "Vui lòng điền đầy đủ họ tên, số điện thoại và nội dung.",
    "contact.sendHint": "Chọn cách gửi phù hợp với bạn:",
    "contact.sendMailApp": "Gửi qua ứng dụng email",
    "contact.sendGmail": "Gửi qua Gmail web",
    "contact.placeholder": "Đang cập nhật...",

    "footer.desc": "Công ty TNHH Công nghiệp Đức Tiến - dịch vụ thi công lắp đặt điện năng lượng mặt trời, sản xuất tủ bảng điện và vật tư cơ khí.",
    "footer.slogan": "Tận tâm - Uy tín - Chất lượng",
    "footer.copyright": "Công ty TNHH Công nghiệp Đức Tiến giữ bản quyền nội dung trên website này."
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.fields": "Fields",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",

    "hero.eyebrow": "DUC TIEN INDUSTRIAL CO., LTD",
    "hero.title": "Comprehensive energy solutions",
    "hero.sub": "DTI (DUC TIEN INDUSTRIAL) provides customers with comprehensive solar energy solutions - from site survey and design, manufacturing and supplying equipment and materials, to construction and installation, testing, commissioning and handover to project owners.",
    "hero.cta1": "Explore our fields",
    "hero.cta2": "Contact us",
    "hero.cardTitle": "Why choose Duc Tien?",
    "hero.cardS1": "Projects delivered",
    "hero.cardS2": "Fields of activity",
    "hero.cardS3": "Customer support",
    "hero.cardL1": "Free consultation & survey",
    "hero.cardL2": "Professional construction, on schedule",
    "hero.cardL3": "Devoted operation & maintenance",
    "hero.cardCta": "Get a free quote",

    "stats.year": "2017",
    "stats.yearLabel": "Year of establishment",
    "stats.fields": "6",
    "stats.fieldsLabel": "Fields of activity",
    "stats.projects": "10+",
    "stats.projectsLabel": "Typical projects delivered",
    "stats.serviceLabel": "Customer support service",

    "about.title": "About us",
    "about.p1": "Duc Tien Industrial Co., Ltd (DTI) was established in 2017, operating in the renewable energy sector. With years of experience in the solar power industry, we provide comprehensive solar energy solutions to customers.",
    "about.p2": "With a team of engineers and specialists in the solar energy industry, DTI always provides the most optimal energy-saving solutions for customers. We deliver the best, most perfect services at competitive prices with 24/7 support.",
    "about.badge": "Devotion • Reputation • Quality",

    "fields.title": "Fields of activity",
    "fields.sub": "Main fields of activity of Duc Tien",
    "fields.d1.title": "1. MECHANICAL MANUFACTURING",
    "fields.d1.p1": "With years of experience in manufacturing and modern equipment, DTI provides high-quality mechanical products that meet the most stringent standards.",
    "fields.d1.sub": "Items and products we supply for solar energy projects",
    "fields.d1.l1": "Hot-dip galvanized walkway.",
    "fields.d1.l2": "Hot-dip galvanized safety handrail.",
    "fields.d1.l3": "Hot-dip galvanized cable tray.",
    "fields.d1.l4": "Hot-dip galvanized cage ladder per fire protection standards",
    "fields.d1.l5": "Inverter station house.",
    "fields.d1.l6": "Hot-dip galvanized DC cable bridge.",
    "fields.d1.l7": "Roof lifeline system",
    "fields.d1.l8": "Other mechanical products.",
    "fields.d2.title": "2. EPC GENERAL CONTRACTOR",
    "fields.d2.eng": "Engineering:",
    "fields.d2.engDesc": "Site survey, output calculation, system design, technology selection and technical drawing.",
    "fields.d2.proc": "Procurement:",
    "fields.d2.procDesc": "Selecting and purchasing panels, inverters, structures, cables, electrical cabinets and other equipment; supply chain management.",
    "fields.d2.cons": "Construction:",
    "fields.d2.consDesc": "Installation, connection, testing, commissioning and handover of the system to the investor.",
    "fields.d3.title": "3. O&M SERVICES",
    "fields.d3.mon": "System monitoring:",
    "fields.d3.monDesc": "Monitoring power output and arising faults via software 24/7.",
    "fields.d3.maint": "Periodic maintenance:",
    "fields.d3.maintDesc": "Inspecting electrical equipment, measuring technical parameters and cleaning solar panel surfaces.",
    "fields.d3.repair": "Timely repair:",
    "fields.d3.repairDesc": "Troubleshooting inverter failures or replacing components when errors occur.",

    "projects.title": "Typical Projects",
    "projects.sub": "Projects successfully designed, constructed and handed over by Duc Tien",
    "projects.p1.name": "Hai Yen Project",
    "projects.p2.name": "Long Phu Project",
    "projects.p3.name": "Son Binh Project",
    "projects.p4.name": "SAMETEL - An Thien Ly",
    "projects.p5.name": "SAMETEL - Trung Thanh",
    "projects.p6.name": "S4 Fashion Project",
    "projects.p7.name": "Nha Dep Project",
    "projects.p8.name": "Ba Ria Thermal Power",
    "projects.p9.name": "C.P Vietnam",
    "projects.p10.name": "TemPearl",

    "services.title": "Our Services",
    "services.sub": "Accompanying customers from consultation to operation and maintenance",
    "services.s1.name": "Survey & Design",
    "services.s1.desc": "Our engineers survey the site, consult and design solar systems optimized for performance and cost for each customer.",
    "services.s1.li1": "Site survey, roof and consumption assessment",
    "services.s1.li2": "Design drawings, suitable equipment selection",
    "services.s2.name": "Construction & Installation",
    "services.s2.desc": "Professional construction with modern equipment, strict construction management, quantity control and guaranteed schedule and quality.",
    "services.s2.li1": "Installation of rooftop, farm, mini farm and barge solar systems",
    "services.s2.li2": "Grid connection and system commissioning",
    "services.s3.name": "Operation & Maintenance",
    "services.s3.desc": "Cleaning, periodic maintenance and troubleshooting for solar systems, ensuring maximum operating efficiency.",
    "services.s3.li1": "PV panel cleaning, periodic system inspection",
    "services.s3.li2": "Fast troubleshooting support, 24/7 service",

    "custom.title": "Need solar energy consulting?",
    "custom.desc": "Contact our hotline now for free consultation from Duc Tien engineers, site survey and fastest quotation.",
    "custom.call": "Call hotline",

    "equip.title": "Materials - Equipment",
    "equip.sub": "Dedicated equipment to ensure professional services and handle any unexpected situations",

    "machines.title": "Factory Capability",
    "machines.sub": "Modern machinery and equipment serving production at Duc Tien factory",

    "values.title": "Vision - Mission",
    "values.sub": "Development orientation of Duc Tien",
    "values.v1.name": "Vision",
    "values.v1.desc": "Within the next 5 years, to become a top leading company in equipment supply and solar power system installation services in Vietnam.",
    "values.v2.name": "Mission",
    "values.v2.desc": "To deliver the best services to customers, contributing to the development of the country through clean energy solutions.",
    "values.v3.name": "People & Facilities",
    "values.v3.desc": "Recruiting and training high-quality human resources, working professionally, devotedly and responsibly with customers.",
    "values.v4.name": "Business Philosophy",
    "values.v4.desc": "Customers are the center and orientation of our service. Reputation comes first - Devotion, Reputation, Quality.",

    "partners.title": "Partners",
    "partners.sub": "Partners who have accompanied and trusted Duc Tien",

    "contact.title": "Contact",
    "contact.sub": "Our team is always ready to support and consult you 24/7",
    "contact.infoTitle": "Contact information",
    "contact.groupAddress": "Address",
    "contact.groupDirect": "Direct contact",
    "contact.personLabel": "Contact person",
    "contact.role": "Director",
    "contact.addrLabel": "Head office",
    "contact.factoryLabel": "Factory",
    "contact.branchLabel": "Branch",
    "contact.phoneLabel": "Phone",
    "contact.emailLabel": "Email",
    "contact.websiteLabel": "Website",
    "contact.hoursLabel": "Support",
    "contact.formName": "Full name *",
    "contact.formPhone": "Phone number *",
    "contact.formEmail": "Email",
    "contact.formMsg": "Your inquiry *",
    "contact.formSubmit": "Send request",
    "contact.formOk": "Thank you! Choose one of the two options below to send your message.",
    "contact.formEmpty": "Please fill in your name, phone number and message.",
    "contact.sendHint": "Choose the way that suits you best:",
    "contact.sendMailApp": "Send via email app",
    "contact.sendGmail": "Send via Gmail web",
    "contact.placeholder": "Updating...",

    "footer.desc": "Duc Tien Industrial Co., Ltd - solar power installation services, switchboard and mechanical components manufacturing.",
    "footer.slogan": "Devotion - Reputation - Quality",
    "footer.copyright": "Duc Tien Industrial Co., Ltd owns the copyright to the content on this website."
  }
};

const EQUIPMENT = {
  vi: ["Camera nhiệt", "Ampe kìm AC/DC", "Đồng hồ đo AC/DC", "Máy khoan pin", "Máy đục pin", "Đồng hồ đo cách điện", "Đồng hồ đo điện trở đất", "Flycam nhiệt", "Chổi lau PV bán tự động", "Bơm khí nén", "Và nhiều công cụ dụng cụ khác"],
  en: ["Thermal camera", "AC/DC clamp meter", "AC/DC multimeter", "Cordless drill", "Cordless chipping hammer", "Insulation resistance tester", "Earth resistance tester", "Thermal drone", "Semi-automatic PV cleaning brush", "Air compressor", "And many other tools"]
};

/* ============================================================
   MÁY MÓC THIẾT BỊ NHÀ XƯỞNG
   ============================================================ */
const MACHINES = [
  { img: "may-cat-laser-6kw.jpg",    name: { vi: "Máy cắt laser fiber 6kW",  en: "6kW Fiber Laser Cutting Machine" }, spec: { vi: "Công suất 6kW • Bàn máy 6x3 mét",            en: "6kW power • 6x3 m worktable" } },
  { img: "may-cat-laser-3kw.jpg",    name: { vi: "Máy cắt laser fiber 3kW",  en: "3kW Fiber Laser Cutting Machine" }, spec: { vi: "Công suất 3kW • Bàn máy 4x2 mét (02 máy)",   en: "3kW power • 4x2 m worktable (2 units)" } },
  { img: "may-laser-1-5kw.jpg",      name: { vi: "Máy cắt laser 1.5kW",     en: "1.5kW Laser Cutting Machine" },       spec: { vi: "Công suất 1.5kW",                           en: "1.5kW power" } },
  { img: "may-chan-amada-80-tan.jpg", name: { vi: "Máy chấn Amada 80 tấn",  en: "80-ton Amada Press Brake" },         spec: { vi: "Máy chấn CNC/NC 80T của Amada",            en: "Amada CNC/NC 80T press brake" } },
  { img: "may-chan-30-tan.jpg",      name: { vi: "Máy chấn 30 tấn",         en: "30-ton Press Brake" },                spec: { vi: "Công suất 30 tấn",                          en: "30 tons capacity" } },
  { img: "may-dap-60-tan.jpg",       name: { vi: "Máy dập thủy lực 60 tấn", en: "60-ton Hydraulic Press" },           spec: { vi: "Lực dập 60 tấn",                            en: "60 tons pressing force" } },
  { img: "may-dap-35-tan.jpg",       name: { vi: "Máy dập thủy lực 35 tấn", en: "35-ton Hydraulic Press" },           spec: { vi: "Lực dập 35 tấn",                            en: "35 tons pressing force" } }
];

/* ============================================================
   KHỞI TẠO
   ============================================================ */
let lang = localStorage.getItem("dt-lang") || "vi";
const t = (key) => I18N[lang][key] || key;

/* ---------- Ngôn ngữ ---------- */
function applyLang() {
  document.documentElement.lang = lang === "vi" ? "vi" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.getElementById("langToggle").classList.toggle("show-vi", lang === "en");
  renderEquipment();
  renderMachines();
  renderProjects();
}

document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "vi" ? "en" : "vi";
  localStorage.setItem("dt-lang", lang);
  applyLang();
});

/* ---------- Danh sách vật tư - thiết bị ---------- */
function renderEquipment() {
  const box = document.getElementById("equipTags");
  box.innerHTML = "";
  EQUIPMENT[lang].forEach((item) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = item;
    box.appendChild(span);
  });
}

/* ---------- Máy móc thiết bị nhà xưởng ---------- */
function renderMachines() {
  const grid = document.getElementById("machinesGrid");
  grid.innerHTML = "";
  MACHINES.forEach((m) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.innerHTML = `
      <div class="project-media">
        <img src="assets/img/machines/${m.img}" alt="${m.name[lang]}" loading="lazy">
      </div>
      <div class="project-body">
        <h3>${m.name[lang]}</h3>
        <p class="project-eq">${m.spec[lang]}</p>
      </div>`;
    grid.appendChild(card);
  });
  observeReveal();
}

/* ---------- Dự án tiêu biểu ---------- */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";
  PROJECTS.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.innerHTML = `
      <div class="project-media">
        <img src="assets/img/${p.img}" alt="${t(p.nameKey)}" loading="lazy">
        <span class="project-cap">${p.cap}</span>
      </div>
      <div class="project-body">
        <h3>${t(p.nameKey)}</h3>
        <p class="project-loc"><span data-icon="pin"></span>${p.loc}</p>
        <p class="project-eq">${p.eq}</p>
        <span class="project-year">${p.year}</span>
      </div>`;
    grid.appendChild(card);
  });
  observeReveal();
}

/* ---------- Thông tin liên hệ ---------- */
const CONFIG_MAP = {
  "phone": "phone", "phone-text": "phone",
  "email": "email", "email-text": "email",
  "website": "website", "website-text": "website"
};
function renderContact() {
  document.querySelectorAll("[data-contact]").forEach((el) => {
    const key = CONFIG_MAP[el.dataset.contact] || el.dataset.contact;
    if (key === "person") {
      el.textContent = CONFIG.contactName ? CONFIG.contactName + " - " + t(CONFIG.contactRoleKey) : t("contact.placeholder");
      return;
    }
    const val = CONFIG[key] || "";
    if (el.hasAttribute("href")) {
      if (!val) { el.style.display = "none"; return; }
      if (key === "phone") el.setAttribute("href", "tel:" + val.replace(/[\s.-]/g, ""));
      else if (key === "email") el.setAttribute("href", "mailto:" + val);
      else if (key === "zalo") el.setAttribute("href", "https://zalo.me/" + val);
      else if (key === "facebook") el.setAttribute("href", val);
      else if (key === "website") el.setAttribute("href", val);
    } else {
      el.textContent = val || t("contact.placeholder");
      if (key === "website" && val) el.textContent = val.replace(/^https?:\/\//, "");
    }
  });
}

/* ---------- Form liên hệ ---------- */
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
const sendOptions = document.getElementById("sendOptions");
const sendMailApp = document.getElementById("sendMailApp");
const sendGmail = document.getElementById("sendGmail");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("cfName").value.trim();
  const phone = document.getElementById("cfPhone").value.trim();
  const email = document.getElementById("cfEmail").value.trim();
  const msg = document.getElementById("cfMsg").value.trim();
  if (!name || !phone || !msg) {
    note.textContent = t("contact.formEmpty");
    note.style.color = "var(--red)";
    return;
  }
  const subject = encodeURIComponent("[Website DTI] Yêu cầu tư vấn - " + name);
  const body = encodeURIComponent(
    "Họ và tên: " + name + "\nSố điện thoại: " + phone + "\nEmail: " + email + "\n\nNội dung:\n" + msg
  );
  if (CONFIG.email) {
    sendMailApp.href = "mailto:" + CONFIG.email + "?subject=" + subject + "&body=" + body;
    sendGmail.href =
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      encodeURIComponent(CONFIG.email) +
      "&su=" + subject +
      "&body=" + body;
    sendOptions.hidden = false;
  }
  note.textContent = t("contact.formOk");
  note.style.color = "var(--blue)";
});

/* ---------- Menu mobile ---------- */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
  })
);

/* ---------- Cuộn mượt khi chọn menu, không thêm # vào URL ---------- */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId.length <= 1) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.replaceState) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  });
});

/* ---------- Header shadow + scrollspy khi cuộn ---------- */
const header = document.getElementById("header");
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const spy = () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
  let current = sections[0]?.id;
  for (const sec of sections) {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  }
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
};
window.addEventListener("scroll", spy, { passive: true });
spy();

/* ---------- Hiệu ứng hiện dần khi cuộn ---------- */
let revealObserver = null;
function observeReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

/* ---------- Năm hiện tại ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Chạy ---------- */
applyLang();
renderContact();
observeReveal();
