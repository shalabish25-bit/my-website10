

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Load saved theme or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Navigation functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Updated Project data with real images
const projectData = {
    posters: {
        title: 'بوسترات مدرسين',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
        description: 'نقوم بتصميم بوسترات احترافية للمدرسين والدورات التعليمية بأحدث الطرق والتقنيات لجذب الطلاب وتوضيح المحتوى التعليمي بشكل جذاب ومميز.',
        features: [
            'تصميم بوسترات تعليمية جذابة',
            'استخدام ألوان مناسبة للمحتوى',
            'خطوط واضحة وسهلة القراءة',
            'تنسيق احترافي للمعلومات',
            'تصميم متوافق مع الطباعة',
            'مراجعات مجانية حتى الرضا التام'
        ],
        price: '150 جنيه'
    },
    logos: {
        title: 'تصميم لوجوهات',
        image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=300&fit=crop',
        description: 'نصمم شعارات مميزة وهوية بصرية كاملة للشركات والمؤسسات التي تعكس قيم وطبيعة العمل بشكل إبداعي ومهني.',
        features: [
            'تصميم لوجو أصلي ومميز',
            'ملفات بجودة عالية (AI, PNG, JPG)',
            'ألوان متعددة ونسخة أبيض وأسود',
            'دليل استخدام الهوية البصرية',
            'مراجعات مجانية حتى الرضا التام',
            'حقوق ملكية كاملة للعميل'
        ],
        price: '300 جنيه'
    },
    websites: {
        title: 'تصاميم مواقع',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
        description: 'نقدم تصاميم مواقع حديثة ومتجاوبة مع جميع الأجهزة، مع التركيز على تجربة المستخدم والتصميم العصري.',
        features: [
            'تصميم متجاوب مع جميع الأجهزة',
            'واجهة مستخدم حديثة وجذابة',
            'تحسين سرعة التحميل',
            'تصميم متوافق مع محركات البحث',
            'دعم فني لمدة 3 أشهر',
            'تدريب على استخدام الموقع'
        ],
        price: '800 جنيه'
    },
    social: {
        title: 'بوسترات سوشيال ميديا',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
        description: 'تصاميم جذابة ومبتكرة لمنصات التواصل الاجتماعي تساعدك على جذب المتابعين وزيادة التفاعل مع المحتوى.',
        features: [
            'تصاميم حسب أحجام كل منصة',
            'محتوى بصري جذاب',
            'ألوان متناسقة مع الهوية',
            'نصوص واضحة ومؤثرة',
            'تصاميم قابلة للتعديل',
            'خطة محتوى شهرية'
        ],
        price: '100 جنيه'
    },
    motion: {
        title: 'موشن جرافيك',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop',
        description: 'فيديوهات متحركة وإعلانات تفاعلية مميزة تجذب الانتباه وتوصل الرسالة بشكل فعال ومؤثر.',
        features: [
            'فيديوهات متحركة احترافية',
            'مؤثرات بصرية جذابة',
            'موسيقى تصويرية مناسبة',
            'جودة عالية HD/4K',
            'مدة من 30 ثانية إلى 3 دقائق',
            'نسخ بأحجام مختلفة للمنصات'
        ],
        price: '500 جنيه'
    },
    branding: {
        title: 'هوية بصرية متكاملة',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
        description: 'تصميم هوية بصرية شاملة للشركات والمؤسسات تشمل اللوجو والألوان والخطوط وجميع المواد التسويقية.',
        features: [
            'تصميم لوجو احترافي',
            'دليل الهوية البصرية الكامل',
            'تصاميم بطاقات أعمال وأوراق رسمية',
            'قوالب عروض تقديمية',
            'تصاميم مواقع التواصل الاجتماعي',
            'دعم فني لمدة 6 أشهر'
        ],
        price: '1000 جنيه'
    },
    brochures: {
        title: 'بروشورات تسويقية',
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
        description: 'تصميم بروشورات احترافية وجذابة للشركات والمنتجات لجذب العملاء وتوضيح الخدمات بشكل مميز.',
        features: [
            'تصميم ثلاثي الطي احترافي',
            'محتوى بصري جذاب',
            'ألوان متناسقة مع الهوية',
            'طباعة عالية الجودة',
            'تصميم داخلي وخارجي',
            'مراجعات مجانية'
        ],
        price: '200 جنيه'
    },
    banners: {
        title: 'بانرات إعلانية',
        image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop',
        description: 'تصميم بانرات إعلانية مؤثرة للحملات التسويقية والفعاليات بأحجام مختلفة.',
        features: [
            'تصاميم بأحجام متنوعة',
            'رسائل تسويقية قوية',
            'ألوان جذابة للانتباه',
            'جودة طباعة عالية',
            'تصميم للداخل والخارج',
            'استشارة تسويقية مجانية'
        ],
        price: '150 جنيه'
    },
    packaging: {
        title: 'تصميم العبوات',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
        description: 'تصميم عبوات مبتكرة وجذابة للمنتجات التجارية لتميزها في السوق.',
        features: [
            'تصميم ثلاثي الأبعاد',
            'اختيار المواد المناسبة',
            'تصميم ملصقات المنتج',
            'دراسة السوق المستهدف',
            'مراعاة معايير الجودة',
            'نماذج أولية للاختبار'
        ],
        price: '300 جنيه'
    },
    presentations: {
        title: 'عروض تقديمية',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        description: 'تصميم شرائح احترافية للعروض التقديمية والاجتماعات المهمة.',
        features: [
            'قوالب PowerPoint احترافية',
            'تصاميم متناسقة',
            'رسوم بيانية وإنفوجرافيك',
            'انتقالات سلسة',
            'تنسيق النصوص والصور',
            'ملفات قابلة للتعديل'
        ],
        price: '250 جنيه'
    },
    illustrations: {
        title: 'رسوم توضيحية',
        image: 'https://images.unsplash.com/photo-1609013108424-d3dd82dadc62?w=400&h=300&fit=crop',
        description: 'رسوم رقمية مخصصة للكتب والمجلات والمحتوى التعليمي.',
        features: [
            'رسوم رقمية عالية الجودة',
            'أساليب فنية متنوعة',
            'ألوان زاهية وجذابة',
            'تناسب مع المحتوى',
            'ملفات بصيغ متعددة',
            'حقوق ملكية كاملة'
        ],
        price: '180 جنيه'
    },
    infographics: {
        title: 'إنفوجرافيك',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
        description: 'تصميم إنفوجرافيك جذاب ومفهوم لعرض البيانات والمعلومات بشكل بصري.',
        features: [
            'عرض البيانات بصرياً',
            'رسوم بيانية واضحة',
            'ألوان متدرجة جميلة',
            'ترتيب منطقي للمعلومات',
            'أيقونات توضيحية',
            'تصميم متجاوب'
        ],
        price: '120 جنيه'
    },
    certificates: {
        title: 'شهادات تقدير',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
        description: 'تصميم شهادات أنيقة وراقية للدورات والفعاليات والإنجازات.',
        features: [
            'تصاميم كلاسيكية وحديثة',
            'خطوط أنيقة ومقروءة',
            'حدود وزخارف جميلة',
            'مساحات للتوقيعات',
            'جودة طباعة ممتازة',
            'قوالب قابلة للتخصيص'
        ],
        price: '80 جنيه'
    },
    'ui-design': {
        title: 'تصميم واجهات التطبيقات',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop',
        description: 'تصميم واجهات مستخدم حديثة وسهلة الاستخدام للتطبيقات والمواقع الإلكترونية.',
        features: [
            'تصميم UI/UX احترافي',
            'واجهات متجاوبة',
            'تجربة مستخدم مميزة',
            'ألوان متناسقة',
            'رموز وأيقونات مخصصة',
            'نماذج أولية تفاعلية'
        ],
        price: '400 جنيه'
    },
    'book-covers': {
        title: 'أغلفة الكتب والمجلات',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        description: 'تصميم أغلفة جذابة ومميزة للكتب والمجلات والمنشورات الأدبية والعلمية.',
        features: [
            'تصاميم فنية راقية',
            'خطوط مناسبة للمحتوى',
            'ألوان جذابة للقراء',
            'تصميم الغلاف الأمامي والخلفي',
            'ملفات جاهزة للطباعة',
            'مراجعات حتى الرضا التام'
        ],
        price: '180 جنيه'
    },
    'business-cards': {
        title: 'بطاقات أعمال مميزة',
        image: 'https://images.unsplash.com/photo-1559291001-693fb5ef4229?w=400&h=300&fit=crop',
        description: 'تصميم بطاقات أعمال أنيقة وعصرية تترك انطباعاً مهنياً رائعاً.',
        features: [
            'تصاميم فريدة ومميزة',
            'طباعة عالية الجودة',
            'خامات فاخرة متنوعة',
            'تصميم الوجهين',
            'معلومات منظمة وواضحة',
            'نصائح تسويقية مجانية'
        ],
        price: '120 جنيه'
    },
    'digital-art': {
        title: 'الفنون الرقمية',
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop',
        description: 'إبداع فني رقمي مخصص للديكور والاستخدام الشخصي والتجاري.',
        features: [
            'رسوم رقمية أصلية',
            'تقنيات فنية متقدمة',
            'ألوان حية وجذابة',
            'دقة عالية للطباعة',
            'أساليب فنية متنوعة',
            'حقوق ملكية كاملة'
        ],
        price: '200 جنيه'
    },
    'merchandise': {
        title: 'تصميم المنتجات الترويجية',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
        description: 'تصاميم مخصصة للمنتجات الترويجية مثل التيشيرتات والأكواب والحقائب.',
        features: [
            'تصاميم للملابس',
            'تصاميم للأكواب والحقائب',
            'جودة طباعة ممتازة',
            'ألوان ثابتة',
            'تصاميم قابلة للتعديل',
            'استشارة تسويقية'
        ],
        price: '150 جنيه'
    }
};

// Project modal functionality
const modal = document.getElementById('projectModal');
const projectCards = document.querySelectorAll('.project-card');
const closeModal = document.querySelector('.close');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectType = card.getAttribute('data-project');
        const project = projectData[projectType];

        if (project) {
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalImage').src = project.image;
            document.getElementById('modalDescription').textContent = project.description;
            document.getElementById('modalPrice').textContent = project.price;

            const featuresList = document.getElementById('modalFeatures');
            featuresList.innerHTML = '';
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Enhanced Chatbot functionality
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbot = document.getElementById('chatbot');
const closeChatbot = document.getElementById('closeChatbot');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');

chatbotToggle.addEventListener('click', () => {
    const isVisible = chatbot.style.display === 'flex';
    chatbot.style.display = isVisible ? 'none' : 'flex';

    // Add welcome message if opening for first time
    if (!isVisible && chatMessages.children.length === 1) {
        setTimeout(() => {
            const welcomeMessages = [
                '🌟 مرحباً بك في Elsawy Design!',
                '🎨 أنا هنا لمساعدتك في اختيار الخدمة المناسبة لك',
                '💡 اكتب "خدمات" لرؤية كل ما نقدمه، أو "أسعار" لمعرفة التكلفة'
            ];

            welcomeMessages.forEach((msg, index) => {
                setTimeout(() => {
                    const msgDiv = document.createElement('div');
                    msgDiv.classList.add('bot-message');
                    chatMessages.appendChild(msgDiv);
                    typeWriterEffect(msgDiv, msg, 40);
                }, index * 2000);
            });
        }, 500);
    }
});

closeChatbot.addEventListener('click', () => {
    chatbot.style.display = 'none';
});

// Enhanced Professional Chatbot with AI-like responses
const botResponses = {
    // Greetings
    'مرحبا': '🌟 أهلاً وسهلاً بك في Elsawy Design! \n\n🤖 أنا المساعد الذكي المطور للمصمم أحمد الصاوي، متاح 24/7 لمساعدتك في:\n\n🎨 استكشاف خدماتنا المتنوعة والمبتكرة\n💰 الحصول على عروض أسعار فورية ومخصصة\n⏰ معرفة جدولة المشاريع والمواعيد\n📞 التواصل المباشر مع المصمم\n🎁 العروض والخصومات الحصرية\n\n✨ يمكنني أيضاً:\n• توجيهك لطلب المشروع عبر الواتساب مباشرة\n• تقديم نصائح تصميمية\n• شرح تفاصيل كل خدمة\n\n💬 اكتب ما تريد أو جرب: "خدمات" - "أسعار" - "طلب مشروع"',
    'مرحبا بك': 'مرحباً! 😊 أنا المساعد الرقمي المتطور لـ Elsawy Design\n\n🚀 هدفي مساعدتك في:\n• إيجاد الخدمة المثالية لمشروعك\n• توفير الوقت والجهد\n• ضمان تجربة استثنائية\n\nكيف يمكنني تحقيق رؤيتك الإبداعية اليوم؟',
    'السلام عليكم': 'وعليكم السلام ورحمة الله وبركاته! 🌟 \n\nمرحباً بك في استوديو Elsawy Design للتصميم الإبداعي\n\n🎯 نحن متخصصون في تحويل الأفكار إلى واقع بصري مذهل!\n\nبماذا يمكنني خدمتك اليوم؟',
    'اهلا': '🎉 أهلاً بك في عائلة Elsawy Design! \n\n💡 أنا هنا لأكون دليلك الشخصي في رحلة إنشاء مشروعك المثالي\n\n🔥 دعني أعرض عليك أحدث عروضنا الحصرية!\n\nما نوع التصميم الذي تحلم به؟',

    // Services & Projects
    'السعر': '💰 **قائمة أسعارنا التنافسية - يناير 2024**\n\n🔥 **الخدمات الأساسية:**\n📱 بوسترات سوشيال ميديا: 100 جنيه\n👨‍🏫 بوسترات تعليمية للمدرسين: 150 جنيه\n🎨 تصميم لوجو احترافي: 300 جنيه\n\n🚀 **الخدمات المتقدمة:**\n🎬 موشن جرافيك عالي الجودة: 500 جنيه\n💻 تصميم موقع متجاوب: 800 جنيه\n🏢 هوية بصرية متكاملة: 1000 جنيه\n\n🎁 **مميزات مجانية:**\n✅ مراجعات غير محدودة\n✅ استشارة أولية مجانية\n✅ ضمان الرضا 100%\n✅ دعم فني لمدة شهر\n\n💬 اكتب "عرض خاص" للحصول على خصومات حصرية!',
    'الاسعار': '💰 أسعار خدماتنا التنافسية:\n\n🔥 العروض الحالية:\n📱 باقة سوشيال ميديا (10 بوسترات): 800 جنيه بدلاً من 1000\n🎨 لوجو + بطاقة أعمال: 450 جنيه بدلاً من 500\n\n💡 هل تحتاج عرض سعر مخصص لمشروعك؟',
    'المشاريع': '🚀 خدماتنا المتخصصة:\n\n🎨 **التصميم الجرافيكي:**\n• لوجوهات وهويات بصرية\n• بوسترات تعليمية ودعائية\n• تصاميم طباعة واعلانات\n\n💻 **التصميم الرقمي:**\n• تصاميم مواقع متجاوبة\n• واجهات تطبيقات جوال\n• بوسترات سوشيال ميديا\n\n🎬 **الموشن والفيديو:**\n• موشن جرافيك احترافي\n• اعلانات متحركة\n• انترو وأوترو للفيديوهات',
    'الخدمات': '⭐ نحن متخصصون في 6 مجالات رئيسية:\n\n1️⃣ **لوجوهات وهويات بصرية** - شعارك المميز\n2️⃣ **بوسترات تعليمية** - لجذب الطلاب\n3️⃣ **تصاميم مواقع** - حضورك الرقمي\n4️⃣ **سوشيال ميديا** - محتوى جذاب\n5️⃣ **موشن جرافيك** - فيديوهات مؤثرة\n6️⃣ **هوية متكاملة** - حلول شاملة\n\nأي خدمة تهمك أكثر؟ 🤔',

    // Contact & Communication
    'التواصل': '📞 طرق التواصل معنا:\n\n💬 **الطرق السريعة:**\n• واتساب: +201093376913\n• تيليجرام: @ElsawyDesign\n\n📧 **الطرق الرسمية:**\n• البريد: amk.ahmed2xd@gmail.com\n• موقعنا: elsawydesign.com\n\n🌐 **وسائل التواصل:**\n• فيسبوك، انستجرام، تويتر\n• لينكد إن، يوتيوب\n\n⏰ متاحون 24/7 للرد على استفساراتكم!',
    'رقم الهاتف': '📱 للتواصل السريع:\n• واتساب: +201093376913\n• مكالمات مباشرة: نفس الرقم\n\n💡 الواتساب هو الأسرع للرد!',
    'الواتساب': '💚 واتساب هو وسيلتنا المفضلة للتواصل!\n\n📱 الرقم: +201093376913\n\n✅ مميزات التواصل عبر الواتساب:\n• رد سريع خلال دقائق\n• إمكانية إرسال أمثلة ومراجع\n• متابعة حالة مشروعك\n• استلام الملفات النهائية',
    'ايميل': '📧 البريد الإلكتروني:\nelsawydesign@gmail.com\n\n📝 أرسل لنا تفاصيل مشروعك وسنرد عليك خلال 24 ساعة بعرض مفصل!',

    // Timing & Process
    'الوقت': '⏰ مدة تنفيذ مشاريعنا:\n\n🚀 **السريع:**\n• بوسترات سوشيال ميديا: 24 ساعة\n• تعديلات بسيطة: نفس اليوم\n\n📅 **القياسي:**\n• بوسترات مدرسين: 2-3 أيام\n• لوجوهات: 3-5 أيام\n\n📆 **المتقدم:**\n• موشن جرافيك: 5-7 أيام\n• مواقع: 7-14 يوم\n• هوية متكاملة: 2-3 أسابيع\n\n⚡ التسليم العاجل متاح برسوم إضافية!',
    'المدة': '📅 جدولنا الزمني للتنفيذ مرن حسب احتياجاتك:\n\n🏃‍♂️ **تسليم عاجل:** خلال 24 ساعة (+50% رسوم)\n⚡ **تسليم سريع:** 2-3 أيام (+25% رسوم)\n📆 **تسليم قياسي:** حسب الجدول المعتاد\n\nأي نوع تسليم تفضل؟',
    'متى': 'متى تحتاج مشروعك؟ 🤔\n\nأخبرني بنوع المشروع والموعد المطلوب وسأعطيك خطة تنفيذ مفصلة!',

    // Specific Services
    'لوجو': '🎨 **خدمة تصميم اللوجوهات المتميزة:**\n\n📦 ما تحصل عليه:\n• 3 مفاهيم تصميم مختلفة\n• ملفات AI, PNG, JPG, SVG\n• نسخ ملونة ووحيدة اللون\n• دليل استخدام مفصل\n• مراجعات مجانية لا محدودة\n\n💰 السعر: 300 جنيه\n⏰ التسليم: 3-5 أيام\n\n🔥 عرض خاص: لوجو + بطاقة أعمال = 450 جنيه!',
    'موشن': '🎬 **موشن جرافيك احترافي:**\n\n🌟 خدماتنا تشمل:\n• انترو وأوترو للفيديوهات\n• اعلانات متحركة\n• شرح المنتجات بالحركة\n• فيديوهات تسويقية\n• أنيميشن للوجوهات\n\n📹 المواصفات:\n• جودة 4K عالية\n• مدة حتى 60 ثانية\n• موسيقى مجانية\n• نسخ بأحجام مختلفة\n\n💰 السعر: 500 جنيه\n⏰ التسليم: 5-7 أيام',
    'بوستر': '📋 **بوسترات احترافية لكل المناسبات:**\n\n📚 **للتعليم:**\n• بوسترات مدرسين ودورات\n• اعلانات تعليمية\n• شهادات وأوراق رسمية\n\n📱 **لوسائل التواصل:**\n• فيسبوك وانستجرام\n• تويتر ولينكد إن\n• يوتيوب وتيك توك\n\n💰 الأسعار:\n• سوشيال ميديا: 100 جنيه\n• مدرسين: 150 جنيه\n\n🎁 عرض: 10 بوسترات سوشيال = 800 جنيه!',
    'موقع': '💻 **تصميم مواقع متطورة:**\n\n🌟 ما نقدمه:\n• تصميم متجاوب 100%\n• سرعة تحميل فائقة\n• تحسين محركات البحث SEO\n• لوحة تحكم سهلة\n• استضافة مجانية لسنة\n\n📱 أنواع المواقع:\n• مواقع شخصية وبورتفوليو\n• مواقع شركات ومؤسسات\n• متاجر إلكترونية\n• مواقع تعليمية\n\n💰 السعر: من 800 جنيه\n⏰ التسليم: 7-14 يوم',
    'هوية': '🏢 **هوية بصرية متكاملة:**\n\nالباقة الشاملة تشمل:\n✅ لوجو احترافي\n✅ ألوان وخطوط مخصصة\n✅ بطاقات أعمال وأوراق رسمية\n✅ أختام وتواقيع\n✅ قوالب عروض تقديمية\n✅ تصاميم سوشيال ميديا\n✅ دليل الهوية كامل\n\n💰 السعر: 1000 جنيه\n⏰ التسليم: 2-3 أسابيع\n🎁 دعم فني 6 أشهر مجاناً!',

    // Process & Quality
    'كيف': '🔧 **عملية العمل معنا بسيطة:**\n\n1️⃣ **استشارة مجانية:** نفهم احتياجاتك\n2️⃣ **عرض سعر:** تسعيرة واضحة وشفافة\n3️⃣ **بداية العمل:** دفعة أولى 50%\n4️⃣ **عرض أولي:** نعرض عليك التصميم\n5️⃣ **المراجعات:** تعديلات مجانية\n6️⃣ **التسليم النهائي:** استلام كامل\n\n💡 كل خطوة معك خطوة بخطوة!',
    'جودة': '⭐ **ضمان الجودة العالية:**\n\n🏆 معايير جودتنا:\n• ملفات بأعلى دقة ممكنة\n• تصاميم أصلية 100%\n• اختبار على جميع الأجهزة\n• مراجعة دقيقة قبل التسليم\n• ضمان رضا العميل\n\n🎯 التزامنا:\n• لا نسلم إلا بعد موافقتك التامة\n• مراجعات مجانية بلا حدود\n• دعم ما بعد التسليم',
    'خبرة': '👨‍💼 **خبرتنا وتخصصنا:**\n\n📈 **إنجازاتنا:**\n• +200 مشروع مكتمل\n• +150 عميل راضي\n• 5 سنوات خبرة متخصصة\n• تقييم 5 نجوم من العملاء\n\n🛠️ **برامج نستخدمها:**\n• Adobe Photoshop\n• Adobe Illustrator\n• Adobe After Effects\n• Figma للمواقع\n• Cinema 4D للموشن',

    // Packages & Offers
    'عروض': '🔥 **عروضنا الحصرية:**\n\n💥 **عرض الباقة الذهبية:**\nلوجو + بطاقة أعمال + 5 بوسترات سوشيال ميديا = 650 جنيه بدلاً من 800!\n\n🎓 **خصم الطلاب:** 20% خصم فوري\n⚡ **التسليم السريع:** أطلب اليوم واستلم خلال 24 ساعة!\n👥 **خصم الإحالة:** 15% لكل صديق تدعوه\n\nكود الخصم: ELSAWY2024',
    'خصم': '🎉 **خصومات وعروض خاصة:**\n\n👥 خصم الكمية:\n• 3 مشاريع: خصم 10%\n• 5 مشاريع: خصم 15%\n• 10 مشاريع: خصم 20%\n\n🎓 خصم الطلاب: 20%\n🔄 خصم العملاء المكررين: 15%\n💰 الدفع المقدم كامل: خصم 10%\n\nكود الخصم: ELSAWY2024',
    'باقة': '📦 **باقاتنا المميزة:**\n\n🥈 **الباقة الفضية** (800 جنيه):\n• لوجو + بطاقة أعمال\n• 5 بوسترات سوشيال ميديا\n• غلاف فيسبوك وانستجرام\n\n🥇 **الباقة الذهبية** (1200 جنيه):\n• كل ما في الفضية\n• موشن جرافيك 30 ثانية\n• قالب عرض تقديمي\n\n💎 **الباقة الماسية** (2000 جنيه):\n• هوية بصرية كاملة\n• موقع ويب احترافي\n• دعم 6 أشهر',

    // Payment & Guarantee
    'دفع': '💳 **طرق الدفع المتاحة:**\n\n🏪 **محلياً في مصر:**\n• فودافون كاش\n• محافظ إلكترونية\n• حوالة بنكية\n• باي بال\n\n📋 **شروط الدفع:**\n• دفعة أولى 50% لبدء العمل\n• الباقي عند التسليم النهائي\n• ضمان استرداد في حالة عدم الرضا\n\n🛡️ **ضمانات:**\n• مراجعات مجانية\n• ضمان الجودة\n• حفظ حقوق الملكية',
    'ضمان': '🛡️ **ضماناتنا لك:**\n\n✅ ضمان الجودة العالية\n✅ ضمان التسليم في الموعد\n✅ ضمان الأصالة والإبداع\n✅ ضمان الدعم الفني\n✅ ضمان الرضا التام\n\n🔄 **في حالة عدم الرضا:**\n• تعديلات مجانية بلا حدود\n• استرداد كامل إذا لم نحقق توقعاتك\n• بديل مجاني\n\nراحتك وثقتك أهم من كل شيء! 💙',

    // Feedback & Reviews
    'رأي': '⭐ **آراء عملائنا الكرام:**\n\n🎯 "أفضل مصمم تعاملت معه، سرعة ودقة وإبداع" - أحمد محمد\n\n🚀 "اللوجو اللي عمله لشركتي خلاها تبان أحترافية أكتر" - سارة أحمد\n\n💎 "موشن جرافيك رهيب، العملاء بقوا يسألوا مين اللي عمله" - محمد علي\n\n🌟 تقييمنا: 4.9/5 نجوم من +150 عميل\n\nعايز تشوف أعمالنا؟ اضغط على قسم "مشروعاتنا" 👆',
    'تقييم': '⭐ **تقييمات حقيقية من عملائنا:**\n\n🏆 **إحصائيات الجودة:**\n• 99% نسبة رضا العملاء\n• 4.95/5 متوسط التقييم\n• +500 مشروع مكتمل بنجاح\n• صفر شكاوى جودة\n\n💬 **آراء العملاء:**\n"أفضل مصمم تعاملت معه على الإطلاق" - سارة أحمد\n"جودة خيالية وسرعة في التسليم" - محمد علي\n"إبداع بلا حدود!" - فاطمة حسن\n\n🏅 **جوائز حصلنا عليها:**\n• أفضل مصمم شاب 2023\n• جائزة الإبداع الرقمي\n• شهادة الجودة ISO',

    // Help & Support
    'مساعدة': '🆘 **كيف يمكنني مساعدتك:**\n\n❓ **أسئلة شائعة:**\n• "أسعار" - للاستفسار عن التكلفة\n• "وقت" - لمعرفة مدة التنفيذ\n• "خدمات" - لرؤية كل ما نقدمه\n• "جودة" - لمعرفة ضماناتنا\n\n💬 **أو اكتب سؤالك مباشرة وسأجيبك فوراً!**\n\nلا تتردد، أنا هنا لخدمتك! 😊',
    'سؤال': 'بالطبع! 🤝 اطرح سؤالك وسأجيبك بكل وضوح:\n\n📝 يمكنك السؤال عن:\n• تفاصيل أي خدمة\n• طريقة العمل\n• الأسعار والخصومات\n• أمثلة من أعمالنا\n• أي شيء آخر!\n\nأنا في انتظار سؤالك 🎯',

    // Thanks & Closing
    'شكرا': '🙏 العفو! سعيد جداً أنني استطعت مساعدتك!\n\n💡 **نصائح أخيرة:**\n• احفظ رقم الواتساب: +201093376913\n• تابعنا على السوشيال ميديا لآخر أعمالنا\n• أخبر أصدقاءك عنا واحصل على خصم 15%!\n\n🎯 دائماً في خدمتك، وفي انتظار مشروعك القادم! ✨',

    // Quick Order Responses
    'طلب مشروع': '📱 **طريقة طلب المشروع:**\n\n🔥 **الطريقة السريعة:**\n1️⃣ اضغط على أي زر "اطلب المشروع الآن" في الموقع\n2️⃣ سيتم فتح واتساب تلقائياً مع رسالة جاهزة\n3️⃣ أرسل الرسالة وسيرد عليك أحمد خلال دقائق!\n\n💡 **أو اتصل مباشرة:**\n📞 واتساب: +201093376913\n\n✨ **مميزات الطلب عبر الواتساب:**\n• رد فوري خلال دقائق\n• إمكانية إرسال أمثلة ومراجع\n• متابعة حالة مشروعك لحظة بلحظة\n• استلام الملفات النهائية مباشرة',
    
    'واتساب مباشر': '📱 **اتصل الآن عبر الواتساب:**\n\n🔗 الرقم: +201093376913\n\n💬 **رسالة جاهزة للنسخ:**\n"مرحباً أحمد، أريد الاستفسار عن خدماتكم في التصميم"\n\n⚡ **مدة الرد:** عادة خلال 5-10 دقائق\n🕒 **متاح:** من 9 صباحاً حتى 11 مساءً\n\n🎯 **نصيحة:** كلما كانت تفاصيل مشروعك أوضح، كلما حصلت على عرض سعر أدق!',

    // Additional Smart Responses
    'عرض خاص': '🔥 **عروض حصرية لفترة محدودة!**\n\n💥 **عرض الباقة الذهبية:**\nلوجو + بطاقة أعمال + 5 بوسترات = 650 جنيه بدلاً من 800!\n\n🎓 **خصم الطلاب:** 25% خصم فوري\n⚡ **التسليم السريع:** خلال 24 ساعة بدون رسوم إضافية\n👥 **خصم الإحالة:** 15% لكل صديق تدعوه\n\nكود الخصم: ELSAWY2024\n\n📞 للطلب الفوري: اضغط أي زر "اطلب المشروع الآن" في الموقع!',

    'استشارة': '📅 **احجز موعدك:**\n💬 واتساب: +201093376913\n📧 إيميل: amk.ahmed2xd@gmail.com\n\n⏰ متاح يومياً من 9 ص إلى 11 م',
    'تقييم': '⭐ **تقييمات حقيقية من عملائنا:**\n\n🏆 **إحصائيات الجودة:**\n• 99% نسبة رضا العملاء\n• 4.95/5 متوسط التقييم\n• +500 مشروع مكتمل بنجاح\n• صفر شكاوى جودة\n\n💬 **آراء العملاء:**\n"أفضل مصمم تعاملت معه على الإطلاق" - سارة أحمد\n"جودة خيالية وسرعة في التسليم" - محمد علي\n"إبداع بلا حدود!" - فاطمة حسن\n\n🏅 **جوائز حصلنا عليها:**\n• أفضل مصمم شاب 2023\n• جائزة الإبداع الرقمي\n• شهادة الجودة ISO',
    'شكرا لك': '😊 لا شكر على واجب! هذا عملي وشغفي!\n\n🌟 **لا تنس:**\n• احفظ رقمنا: +201093376913\n• زور معرض أعمالنا\n• اطلب استشارة مجانية\n\n🚀 في انتظار إبداعاتنا المشتركة!',
    'وداع': '👋 إلى اللقاء! وأهلاً بك في أي وقت!\n\n📞 **للتواصل السريع:**\nواتساب: +201093376913\n\n💫 **تذكر:** أفكارك تستحق تصميماً مميزاً!\n\nفي أمان الله! 🌟',

    // Default enhanced response
    'default': '🤖 **مرحباً! أنا المساعد الذكي لـ Elsawy Design**\n\n💡 **يمكنني مساعدتك في:**\n\n🎨 معرفة خدماتنا وتفاصيلها\n💰 الاستفسار عن الأسعار والعروض\n⏰ معرفة مدة تنفيذ المشاريع\n📞 طرق التواصل والدعم\n🎁 العروض والخصومات الحالية\n\n🔍 **جرب كتابة:**\n"خدمات" - "أسعار" - "عروض" - "تواصل"\n\nأو اكتب سؤالك مباشرة وسأساعدك! 😊'
};

function sendBotMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('bot-message');
    messageDiv.innerHTML = message.replace(/\n/g, '<br>');
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('user-message');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase().trim();

    // Smart conversation memory
    const conversationContext = localStorage.getItem('chatContext') || '';

    // Advanced keyword matching with multiple word support
    const keywords = Object.keys(botResponses).filter(key => key !== 'default');

    // Find exact matches first
    for (const key of keywords) {
        if (lowerMessage === key || lowerMessage.includes(key)) {
            return botResponses[key];
        }
    }

    // Enhanced pattern matching with context awareness
    if (lowerMessage.includes('سعر') || lowerMessage.includes('كم') || lowerMessage.includes('تكلفة') || lowerMessage.includes('فلوس') || lowerMessage.includes('ثمن') || lowerMessage.includes('كلفة')) {
        return botResponses['السعر'];
    }

    if (lowerMessage.includes('وقت') || lowerMessage.includes('مدة') || lowerMessage.includes('متى') || lowerMessage.includes('خلال') || lowerMessage.includes('كام يوم') || lowerMessage.includes('التسليم')) {
        return botResponses['الوقت'];
    }

    if (lowerMessage.includes('تواصل') || lowerMessage.includes('رقم') || lowerMessage.includes('اتصال') || lowerMessage.includes('كلم') || lowerMessage.includes('واتس') || lowerMessage.includes('موبايل')) {
        return botResponses['التواصل'];
    }

    if (lowerMessage.includes('شغل') || lowerMessage.includes('خدمة') || lowerMessage.includes('ايه') || lowerMessage.includes('تعمل') || lowerMessage.includes('خدمات') || lowerMessage.includes('مشاريع')) {
        return botResponses['الخدمات'];
    }

    if (lowerMessage.includes('طلب') || lowerMessage.includes('عايز') || lowerMessage.includes('أريد') || lowerMessage.includes('محتاج') || lowerMessage.includes('order') || lowerMessage.includes('اطلب')) {
        return botResponses['طلب مشروع'];
    }

    if (lowerMessage.includes('واتساب مباشر') || lowerMessage.includes('whatsapp') || lowerMessage.includes('واتس اب') || lowerMessage.includes('المباشر')) {
        return botResponses['واتساب مباشر'];
    }

    if (lowerMessage.includes('عرض') || lowerMessage.includes('خصم') || lowerMessage.includes('تخفيض') || lowerMessage.includes('offer')) {
        return botResponses['عرض خاص'];
    }

    if (lowerMessage.includes('استشارة') || lowerMessage.includes('مشورة') || lowerMessage.includes('نصيحة') || lowerMessage.includes('consultation')) {
        return botResponses['استشارة'];
    }

    // Personality responses
    if (lowerMessage.includes('ازيك') || lowerMessage.includes('عامل') || lowerMessage.includes('حالك') || lowerMessage.includes('ايه أخبارك')) {
        return '😄 الحمد لله تمام! ومشتغل على مشاريع رائعة كتير.\n\n🎨 النهاردة خلصت 3 لوجوهات و 5 بوسترات جديدة!\n\nإيه اللي جابك لعندنا؟ عايز تعمل مشروع إبداعي جديد؟';
    }

    if (lowerMessage.includes('ممتاز') || lowerMessage.includes('رائع') || lowerMessage.includes('جميل') || lowerMessage.includes('حلو') || lowerMessage.includes('perfect') || lowerMessage.includes('excellent')) {
        return '🥰 شكراً لذوقك الراقي! ده يدينا طاقة إيجابية نكمل بيها.\n\n🚀 عايز نبدأ في مشروع جديد مع بعض؟\n\n💡 عندي أفكار إبداعية كتير ممكن تعجبك!';
    }

    if (lowerMessage.includes('مين') || lowerMessage.includes('who') || lowerMessage.includes('أنت مين')) {
        return '🤖 أنا المساعد الذكي المطور خصيصاً لـ Elsawy Design\n\n⚡ **قدراتي:**\n• فهم احتياجاتك بدقة\n• تقديم معلومات فورية\n• ربطك بالمصمم مباشرة\n• متابعة طلباتك 24/7\n\n🎯 هدفي الوحيد: تحقيق رؤيتك الإبداعية!';
    }

    // Store conversation context
    localStorage.setItem('chatContext', lowerMessage);

    return botResponses.default;
}

// Add typing effect and message status
function addMessageStatus(messageDiv, status = 'sent') {
    const statusDiv = document.createElement('div');
    statusDiv.className = 'message-status';

    if (status === 'sent') {
        statusDiv.innerHTML = '<i class="fas fa-check"></i>';
    } else if (status === 'delivered') {
        statusDiv.innerHTML = '<i class="fas fa-check-double"></i>';
    }

    messageDiv.appendChild(statusDiv);
}

sendMessage.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        sendUserMessage(message);
        chatInput.value = '';

        // Enhanced typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('bot-message', 'typing-indicator');
        typingDiv.innerHTML = `
            <div class="typing-animation">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span class="typing-text">Elsawy يكتب...</span>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate more realistic typing delay
        const responseTime = Math.random() * 2000 + 1500; // 1.5-3.5 seconds

        setTimeout(() => {
            chatMessages.removeChild(typingDiv);
            const response = getBotResponse(message);

            // Create response message with typing effect
            const responseDiv = document.createElement('div');
            responseDiv.classList.add('bot-message');
            chatMessages.appendChild(responseDiv);

            // Type the response character by character
            typeWriterEffect(responseDiv, response, 25);

            // Add message reactions
            setTimeout(() => {
                addQuickReplies(response);
            }, response.length * 25 + 500);

        }, responseTime);
    }
});

// Add quick reply suggestions
function addQuickReplies(lastResponse) {
    let suggestions = [];

    if (lastResponse.includes('خدمات')) {
        suggestions = ['الأسعار', 'أمثلة من الأعمال', 'تواصل معي'];
    } else if (lastResponse.includes('أسعار')) {
        suggestions = ['عروض خاصة', 'طرق الدفع', 'اطلب عرض سعر'];
    } else if (lastResponse.includes('وقت')) {
        suggestions = ['تسليم عاجل', 'ابدأ مشروعي', 'أسعار'];
    } else {
        suggestions = ['الخدمات', 'الأسعار', 'تواصل معي'];
    }

    const quickRepliesDiv = document.createElement('div');
    quickRepliesDiv.className = 'quick-replies';
    quickRepliesDiv.innerHTML = '<span class="quick-replies-title">اقتراحات سريعة:</span>';

    suggestions.forEach(suggestion => {
        const button = document.createElement('button');
        button.className = 'quick-reply-btn';
        button.textContent = suggestion;
        button.onclick = () => {
            chatInput.value = suggestion;
            sendMessage.click();
            quickRepliesDiv.remove();
        };
        quickRepliesDiv.appendChild(button);
    });

    chatMessages.appendChild(quickRepliesDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage.click();
    }
});

// Advanced scroll animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Add animation class to elements when page loads
window.addEventListener('load', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.project-card, .about-content, .contact-content, .testimonial-card, .contact-card'
    );
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// Enhanced navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.backdropFilter = 'blur(15px)';
    }
});

// Enhanced WhatsApp integration for project orders
function orderProject(projectTitle, projectPrice) {
    const message = `🎨 مرحباً أحمد!\n\n✨ أريد طلب خدمة: ${projectTitle}\n💰 السعر: ${projectPrice}\n\n📋 التفاصيل:\n• أحتاج هذه الخدمة للمشروع الخاص بي\n• أرجو التواصل معي لمناقشة التفاصيل\n• متى يمكن البدء في العمل؟\n\nشكراً لك! 🙏`;
    const whatsappUrl = `https://wa.me/201093376913?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Order button functionality with WhatsApp integration
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('order-btn')) {
        const projectTitle = document.getElementById('modalTitle').textContent;
        const projectPrice = document.getElementById('modalPrice').textContent;
        orderProject(projectTitle, projectPrice);
    }
    
    if (e.target.classList.contains('order-project-btn')) {
        const projectCard = e.target.closest('.main-project-card');
        const projectTitle = projectCard.querySelector('h4').textContent;
        const projectPrice = projectCard.querySelector('.project-price').textContent;
        orderProject(projectTitle, projectPrice);
    }
});

// Personal Gallery functionality
document.addEventListener('DOMContentLoaded', () => {
    // Create modal for gallery
    const galleryModal = document.createElement('div');
    galleryModal.className = 'gallery-modal';
    galleryModal.innerHTML = `
        <span class="gallery-close">&times;</span>
        <div class="gallery-modal-content">
            <img src="" alt="صورة أحمد الصاوي">
        </div>
    `;
    document.body.appendChild(galleryModal);

    const galleryItems = document.querySelectorAll('.gallery-item');
    const modalImg = galleryModal.querySelector('img');
    const closeBtn = galleryModal.querySelector('.gallery-close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            modalImg.src = img.src;
            galleryModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && galleryModal.style.display === 'block') {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Add hover effects to project cards
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });

    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        }, 150);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroAnimation = document.querySelector('.hero-animation');
    if (heroAnimation) {
        heroAnimation.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Initialize AOS and other animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Add entrance animation to hero content
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-stats, .hero-buttons');
    heroElements.forEach((element, index) => {
        element.style.animation = `fadeInUp 0.8s ease ${0.2 * index}s both`;
    });

    // Add staggered animation to project cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease ${0.1 * index}s both`;
    });

    // Add floating animation to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach((link, index) => {
        link.style.animation = `fadeInUp 0.5s ease ${0.1 * index}s both`;
    });
});

// Add loading state for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });

    img.addEventListener('error', function() {
        this.src = 'https://via.placeholder.com/400x300?text=صورة+غير+متاحة';
    });
});

// Performance optimization - Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}