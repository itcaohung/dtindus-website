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
  { img: "proj-baria.jpg",     nameKey: "projects.p8.name",    loc: "Bà Rịa - Vũng Tàu",          cap: "999 kWp",   year: "2020", eq: "Trina 450Wp • KACO 82kW" },
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
    "hero.title": "Giải pháp năng lượng mặt trời & thiết bị điện tin cậy",
    "hero.sub": "Dịch vụ thi công lắp đặt hệ thống điện năng lượng mặt trời - từ nhà dân dụng, nhà xưởng đến farm, xà lan - cùng sản xuất tủ bảng điện và vật tư cơ khí.",
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
    "about.p1": "Công ty TNHH Công nghiệp Đức Tiến (DUC TIEN INDUSTRIAL CO., LTD) hoạt động trong lĩnh vực dịch vụ thi công lắp đặt hệ thống điện năng lượng mặt trời, với mong muốn phục vụ khách hàng tốt nhất.",
    "about.p2": "Với đội ngũ kỹ sư, chuyên viên trong ngành năng lượng mặt trời, Đức Tiến luôn đưa ra những giải pháp năng lượng, tiết kiệm điện tối ưu nhất cho Quý khách hàng. Đến với chúng tôi, khách hàng sẽ được trải nghiệm những dịch vụ tốt nhất, hoàn hảo nhất với giá cạnh tranh và hỗ trợ 24/7.",
    "about.badge": "Tận tâm • Uy tín • Chất lượng",
    "about.li1": "Điện mặt trời áp mái dân dụng, nhà xưởng, xà lan, farm & mini farm",
    "about.li2": "Sản xuất tủ bảng điện và vật tư cơ khí theo tiêu chuẩn kỹ thuật",
    "about.li3": "Đội ngũ kỹ sư chuyên nghiệp, trang thiết bị chuyên dụng hiện đại, dịch vụ 24/7",

    "fields.title": "Lĩnh vực hoạt động",
    "fields.sub": "Các lĩnh vực hoạt động chính của Đức Tiến",
    "fields.f1.name": "Điện mặt trời áp mái nhà dân dụng",
    "fields.f1.desc": "Giải pháp điện mặt trời áp mái cho hộ gia đình, tiết kiệm chi phí điện, góp phần bảo vệ môi trường.",
    "fields.f2.name": "Điện mặt trời áp mái nhà xưởng",
    "fields.f2.desc": "Lắp đặt hệ thống NLMT áp mái nhà xưởng quy mô lớn, tối ưu diện tích mái, giảm chi phí vận hành sản xuất.",
    "fields.f3.name": "Điện mặt trời dùng cho xà lan",
    "fields.f3.desc": "Hệ thống điện mặt trời chuyên dụng cho xà lan, phương tiện thủy, đáp ứng nhu cầu năng lượng khi di chuyển.",
    "fields.f4.name": "Điện mặt trời farm & mini farm",
    "fields.f4.desc": "Triển khai các dự án NLMT dạng farm, mini farm với quy trình thi công chuyên nghiệp, đúng tiến độ.",
    "fields.f5.name": "Sản xuất vật tư cơ khí",
    "fields.f5.desc": "Sản xuất vật tư cơ khí phục vụ lắp đặt hệ thống NLMT và các công trình công nghiệp theo yêu cầu.",
    "fields.f6.name": "Sản xuất tủ bảng điện",
    "fields.f6.desc": "Sản xuất tủ bảng điện, tủ phân phối, tủ điều khiển đáp ứng tiêu chuẩn kỹ thuật và yêu cầu khách hàng.",

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
    "machines.extra": "Ngoài ra còn có 2 dàn cẩu trục nhà xưởng (5 tấn & 3 tấn), máy hàn laser 1.2kW cùng các loại máy móc thiết bị phụ trợ khác.",

    "values.title": "Tầm nhìn - Sứ mệnh",
    "values.sub": "Định hướng phát triển của Đức Tiến",
    "values.coreLabel": "Giá trị cốt lõi",
    "values.core1": "Tận tâm",
    "values.core2": "Uy tín",
    "values.core3": "Chất lượng",
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
    "footer.copyright": "Công ty TNHH Công nghiệp Đức Tiến. Bảo lưu mọi quyền."
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.fields": "Fields",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",

    "hero.eyebrow": "DUC TIEN INDUSTRIAL CO., LTD",
    "hero.title": "Reliable solar energy & electrical equipment solutions",
    "hero.sub": "EPC services for solar power systems - from residential rooftop, industrial rooftop to solar farms and barges - together with switchboard and mechanical components manufacturing.",
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
    "about.p1": "Duc Tien Industrial Co., Ltd operates in the field of solar power system installation services, with the desire to serve customers in the best way.",
    "about.p2": "With a team of engineers and specialists in the solar energy industry, Duc Tien always provides the most optimal energy-saving solutions for customers. We deliver the best, most perfect services at competitive prices with 24/7 support.",
    "about.badge": "Devotion • Reputation • Quality",
    "about.li1": "Rooftop solar for residential, industrial, barges, farms & mini farms",
    "about.li2": "Switchboard and mechanical components manufacturing to technical standards",
    "about.li3": "Professional engineering team, modern specialized equipment, 24/7 service",

    "fields.title": "Fields of activity",
    "fields.sub": "Main fields of activity of Duc Tien",
    "fields.f1.name": "Residential Rooftop Solar",
    "fields.f1.desc": "Rooftop solar solutions for households, saving electricity costs and protecting the environment.",
    "fields.f2.name": "Industrial Rooftop Solar",
    "fields.f2.desc": "Large-scale rooftop solar installation, optimizing roof area and reducing production operating costs.",
    "fields.f3.name": "Solar for Barges",
    "fields.f3.desc": "Specialized solar systems for barges and watercraft, meeting energy needs while traveling.",
    "fields.f4.name": "Solar Farm & Mini Farm",
    "fields.f4.desc": "Implementation of farm and mini farm solar projects with professional construction processes and on-time delivery.",
    "fields.f5.name": "Mechanical Components",
    "fields.f5.desc": "Manufacturing mechanical components for solar installation and industrial projects on request.",
    "fields.f6.name": "Switchboard Manufacturing",
    "fields.f6.desc": "Manufacturing distribution boards and control panels meeting technical standards and customer requirements.",

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
    "machines.extra": "We also have 2 overhead cranes (5 tons & 3 tons), a 1.2kW laser welding machine and other supporting equipment.",

    "values.title": "Vision - Mission",
    "values.sub": "Development orientation of Duc Tien",
    "values.coreLabel": "Core values",
    "values.core1": "Devotion",
    "values.core2": "Reputation",
    "values.core3": "Quality",
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
    "footer.copyright": "Duc Tien Industrial Co., Ltd. All rights reserved."
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
