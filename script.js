// بيانات الترجمة
const translations = {
    ar: {
        "nav-home": "الرئيسية",
        "nav-about": "عن الخدمات",
        "nav-products": "المنتجات",
        "nav-services": "الخدمات",
        "nav-contact": "اتصل بنا",
        "hero-title": "الرعاية الطبية للصيصان",
        "hero-description": "نحن هنا لنقدم أفضل رعاية صحية لصغار الدواجن لضمان صحتهم ورفاهيتهم.",
        "hero-button": "استعرض المنتجات",
        "about-title": "عن الخدمات",
        "about-description": "نقدم الرعاية الطبية المتخصصة في علاج الصيصان باستخدام منتجات طبية ذات جودة عالية للحفاظ على صحتهم.",
        "products-title": "المنتجات الطبية المتوفرة",
        "product1-title": "دواء مناعي للصيصان",
        "product1-description": "يعزز مناعة الصيصان ويحافظ على صحتهم.",
        "product1-order": "طلب الآن",
        "services-title": "الخدمات",
        "service1-title": "الاستشارات الطبية",
        "service1-description": "نقدم استشارات طبية متخصصة لمعالجة الصيصان وفق أفضل المعايير.",
        "contact-text": "تواصل معنا عبر الهاتف أو البريد الإلكتروني لأي استفسار."
    },
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-products": "Produits",
        "nav-services": "Services",
        "nav-contact": "Contactez-nous",
        "hero-title": "Soins médicaux pour les poussins",
        "hero-description": "Nous sommes ici pour fournir les meilleurs soins de santé aux jeunes poules pour assurer leur santé et leur bien-être.",
        "hero-button": "Voir les produits",
        "about-title": "À propos des services",
        "about-description": "Nous offrons des soins médicaux spécialisés pour traiter les poussins en utilisant des produits médicaux de haute qualité pour préserver leur santé.",
        "products-title": "Produits médicaux disponibles",
        "product1-title": "Médicament immunitaire pour les poussins",
        "product1-description": "Renforce l'immunité des poussins et préserve leur santé.",
        "product1-order": "Commander maintenant",
        "services-title": "Services",
        "service1-title": "Consultations médicales",
        "service1-description": "Nous offrons des consultations médicales spécialisées pour traiter les poussins selon les meilleures normes.",
        "contact-text": "Contactez-nous par téléphone ou e-mail pour toute question."
    }
};

// دالة لتطبيق الترجمة وتحديث الاتجاه
function setLanguage(language) {
    document.body.classList.toggle('rtl', language === 'ar');
    document.body.classList.toggle('ltr', language === 'fr');

    // تطبيق النصوص المترجمة
    for (const [id, text] of Object.entries(translations[language])) {
        const element = document.getElementById(id);
        if (element) element.textContent = text;
    }
}
