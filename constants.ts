
export const REPORT_TYPES = [
    { value: 'proforma_invoice' },
    { value: 'purchase_contract' },
    { value: 'technical_spec' },
    { value: 'market_analysis' },
    { value: 'shipping_request' },
    { value: 'claim_report' },
];

export const DEFAULT_SUGGESTIONS = {
    legal_drafter_topic: [
        "پیش فاکتور میلگرد 16",
        "قرارداد خرید تیرآهن ذوب آهن",
        "استعلام قیمت ورق سیاه",
        "درخواست حمل بار به بندرعباس",
        "گزارش عدم تطابق بار"
    ],
    legal_drafter_description: [
        "خریدار شرکت ساختمانی الف، فروشنده استیل آنلاین، 20 تن میلگرد A3 نیشابور، تحویل درب کارخانه.",
        "قرارداد تامین 500 شاخه تیرآهن 14 برای پروژه برج سازی در تهران.",
        "بار ارسالی دارای زنگ زدگی بیش از حد استاندارد است و درخواست مرجوعی دارم.",
        "تحلیل نوسانات قیمت آهن در هفته جاری با توجه به نرخ ارز."
    ],
    lawyer_finder_keywords: [
        "تامین کننده میلگرد در اصفهان",
        "کارخانه تولید ورق روغنی",
        "فروشنده تیرآهن در بازار شادآباد",
        "انبار آهن در شورآباد",
        "نمایندگی فولاد مبارکه"
    ],
    notary_finder_keywords: [
        "انبار آهن مکان",
        "باسکول 60 تنی نزدیک تهران",
        "آزمایشگاه متالورژی",
        "باربری تریلی کفی",
        "گمرک بازرگان"
    ],
    news_summarizer_query: [
        "قیمت روز میلگرد",
        "تعرفه صادرات فولاد",
        "وضعیت بورس کالا فولاد",
        "نرخ ارز و تاثیر بر بازار آهن",
        "قطعی برق صنایع فولادی"
    ],
    case_strategist_goal: [
        "ساخت سوله صنعتی 500 متری",
        "تامین آهن آلات برج 20 طبقه",
        "صادرات شمش فولاد به عراق",
        "راه اندازی خط تولید لوله پروفیل",
        "خرید اعتباری آهن آلات"
    ],
    ai_guide_prompt: [
        "میخواهم قیمت روز میلگرد را بدانم.",
        "برای پروژه ساختمانی نیاز به برآورد هزینه آهن آلات دارم.",
        "دنبال تامین کننده معتبر ورق گالوانیزه هستم.",
        "یک قرارداد محکم برای خرید 1000 تن تیرآهن میخواهم.",
        "چطور تشخیص دهم میلگرد استاندارد است؟"
    ]
};

export const fa = {
    langCode: 'fa',
    dir: 'rtl',
    font: 'font-vazir',
    common: {
        useLocation: 'جستجو در نزدیکی من'
    },
    header: {
        home: 'خانه',
        aiAssistant: 'تنظیم اسناد',
        lawyerFinder: 'تامین‌کنندگان',
        newsSummarizer: 'اخبار بازار',
        caseStrategist: 'مدیریت پروژه',
        notaryFinder: 'انبار و لجستیک',
        webAnalyzer: 'تحلیلگر بازار',
        contractAnalyzer: 'بررسی قرارداد',
        evidenceAnalyzer: 'بررسی کیفیت (تصویری)',
        imageGenerator: 'تصویرسازی سازه',
        corporateServices: 'خدمات شرکتی',
        insuranceServices: 'بیمه و حمل',
        siteArchitect: 'تحلیل سایت رقبا',
        courtAssistant: 'دستیار بازار (Live)',
        externalService: 'پیش‌نمایش',
        generalQuestions: 'سوالات متداول',
        contentHub: 'محتوای بازار',
        pricing: 'تعرفه‌ها و خدمات',
        services: 'خدمات ما',
        about: 'درباره ما',
        contact: 'تماس با ما',
        blog: 'بلاگ',
        createCheckpoint: 'ذخیره وضعیت',
        createCheckpointTitle: 'یک نسخه از وضعیت فعلی پروژه را ذخیره کنید',
        checkpoints: 'پروژه‌های من',
        projectHistory: 'تاریخچه',
        restore: 'بازیابی',
        delete: 'حذف',
        noCheckpoints: 'هیچ پروژه‌ای ذخیره نشده است.',
        checkpointPrompt: 'نام پروژه:',
        restoreConfirm: 'آیا از بازیابی این وضعیت مطمئن هستید؟',
        deleteConfirm: 'آیا حذف شود؟'
    },
    home: {
        title: 'مرجع هوشمند خرید و فروش آهن',
        subtitle: 'با استیل آنلاین و هوش مصنوعی، مطمئن خرید کنید',
        servicesTitle: 'خدمات استیل آنلاین',
        servicesSubtitle: 'تمامی خدمات زنجیره تامین فولاد در یک پلتفرم',
        stats: {
            cases: '+۱۰,۰۰۰ تن فروش موفق',
            support: 'مشاوره تخصصی',
            satisfaction: '+۵۰۰ مشتری راضی',
            experience: '+۱۵ سال سابقه'
        },
        process: {
            title: 'مراحل خرید',
            subtitle: 'خرید آسان و مطمئن آهن آلات',
            steps: [
                { title: 'استعلام قیمت', desc: 'مشاهده قیمت لحظه‌ای و دریافت پیش‌فاکتور آنی' },
                { title: 'تایید و پرداخت', desc: 'بررسی پیش‌فاکتور و پرداخت امن' },
                { title: 'تحویل بار', desc: 'بارگیری از نزدیک‌ترین انبار و تحویل در محل پروژه' }
            ]
        },
        reviews: {
            title: 'نظرات مشتریان',
            subtitle: 'تجربه همکاری با استیل آنلاین',
            items: [
                { name: 'مهندس رضایی', role: 'مدیر پروژه ساختمانی', text: 'سرعت تامین و قیمت رقابتی استیل آنلاین در پروژه الهیه بسیار کمک کننده بود.' },
                { name: 'شرکت فولاد گستر', role: 'تامین کننده', text: 'همکاری شفاف و تسویه حساب منظم از ویژگی‌های بارز این مجموعه است.' },
                { name: 'حسین کمالی', role: 'سازنده شخصی', text: 'مشاوره هوش مصنوعی سایت دقیقاً همان چیزی بود که برای برآورد هزینه نیاز داشتم.' }
            ]
        },
        location: {
            title: 'دفتر مرکزی',
            address: 'تهران، امانیه، جردن، خیابان طاهری، پلاک ۱۸',
            hours: 'شنبه تا چهارشنبه ۸:۳۰ تا ۱۷:۰۰',
            mapAlt: 'نقشه گوگل - دفتر استیل آنلاین'
        },
        cta: {
            main: 'دریافت قیمت روز',
            call: 'تماس با فروش'
        }
    },
    pricing: {
        title: 'سرویس‌های هوشمند بازار آهن',
        subtitle: 'دسترسی به ابزارهای پیشرفته تحلیل و خرید با تخفیف‌های ویژه',
        discountBadge: '۵۰٪ تخفیف',
        toman: 'تومان',
        selectPlan: 'انتخاب طرح',
        files: 'دریافت خروجی:',
        plans: [
            {
                id: 'petition',
                title: 'صدور پیش‌فاکتور رسمی',
                oldPrice: 360000,
                price: 180000,
                features: [
                    'محاسبه دقیق وزن و قیمت',
                    'اعمال آخرین نوسانات بازار',
                    'قالب استاندارد دارایی'
                ]
            },
            {
                id: 'bill',
                title: 'آنالیز تخصصی بازار',
                oldPrice: 240000,
                price: 120000,
                features: [
                    'پیش‌بینی قیمت هفته آینده',
                    'تحلیل تکنیکال نمودارها',
                    'سیگنال خرید و فروش'
                ]
            },
            {
                id: 'ai_consult',
                title: 'مشاوره خرید هوشمند',
                oldPrice: 160000,
                price: 80000,
                features: [
                    'مقایسه برندهای تولیدکننده',
                    'بهینه‌سازی لیست خرید (لیستوفر)',
                    'استفاده اولیه رایگان'
                ]
            },
            {
                id: 'phone_consult',
                title: 'مشاوره تلفنی تخصصی',
                oldPrice: 400000,
                price: 200000,
                features: [
                    'تماس مستقیم با کارشناس فروش',
                    'مذاکره قیمت برای تناژ بالا',
                    'هماهنگی حمل و نقل'
                ]
            }
        ],
        featuresTitle: 'چرا استیل آنلاین؟',
        features: [
            {
                title: 'خرید آگاهانه با هوش مصنوعی',
                items: [
                    'رصد لحظه‌ای قیمت‌ها در تمام مبادی',
                    'محاسبه سود و زیان احتمالی',
                    'جلوگیری از خرید گران'
                ]
            },
            {
                title: 'تضمین کیفیت و اصالت',
                items: [
                    'ارائه برگه آنالیز کارخانه',
                    'تطبیق وزن باسکول',
                    'عودت کالا در صورت عدم تطابق'
                ]
            },
            {
                title: 'لجستیک قدرتمند',
                items: [
                    'ارسال از نزدیک‌ترین انبار',
                    'پیگیری آنلاین بار',
                    'بیمه کامل محموله'
                ]
            },
            {
                title: 'تنوع محصولات',
                items: [
                    'تیرآهن، میلگرد، ورق، پروفیل',
                    'موجودی کامل برندهای معتبر',
                    'فروش اعتباری و LC'
                ]
            }
        ]
    },
    courtAssistant: {
        title: 'دستیار هوشمند بازار',
        subtitle: 'تحلیلگر لحظه‌ای بازار و مذاکرات تجاری',
        tabs: {
            citation: 'تحلیلگر متن/قرارداد',
            live: 'دستیار مذاکره (Live)'
        },
        citation: {
            title: 'بررسی قرارداد و استعلام',
            description: 'متن قرارداد یا پیش‌فاکتور را وارد کنید تا هوش مصنوعی مغایرت‌های قانونی و قیمتی را بررسی کند.',
            placeholder: 'متن قرارداد یا استعلام را اینجا وارد کنید...',
            button: 'بررسی و تحلیل',
            resultTitle: 'نتیجه تحلیل'
        },
        live: {
            title: 'دستیار زنده مذاکره',
            description: 'در حین مذاکره تلفنی یا حضوری، صحبت‌ها را وارد کنید تا بهترین پاسخ و استراتژی قیمت‌دهی را دریافت کنید.',
            inputPlaceholder: 'صحبت مشتری یا تامین‌کننده را بنویسید...',
            audioButton: 'ضبط مکالمه',
            listening: 'در حال گوش دادن...',
            send: 'تحلیل',
            personas: {
                label: 'حالت دستیار:',
                formal: 'کارشناس فنی (رسمی)',
                aggressive: 'مذاکره‌کننده قیمت (سرسخت)',
                calm: 'مشاور فروش (راهنما)'
            },
            scenarios: {
                objection: 'اعتراض به قیمت بالا',
                evidence: 'درخواست تخفیف',
                expert: 'استعلام موجودی',
                silence: 'اعلام نوسان بازار'
            },
            upload: 'بارگذاری عکس بار/فاکتور'
        }
    },
    faq: {
        title: 'سوالات متداول',
        subtitle: 'پاسخ به پرسش‌های رایج شما',
        items: [
            { q: 'آیا قیمت‌های سایت به‌روز است؟', a: 'بله، قیمت‌ها به صورت لحظه‌ای از کارخانه‌ها و بنگاه‌ها استعلام و به‌روزرسانی می‌شود.' },
            { q: 'هزینه حمل و نقل چگونه محاسبه می‌شود؟', a: 'هزینه حمل بر اساس وزن بار، مسافت و نوع خودرو (تریلی، تک، جفت) طبق تعرفه باربری محاسبه می‌گردد.' },
            { q: 'آیا امکان خرید اعتباری وجود دارد؟', a: 'بله، برای مشتریان شرکتی و پروژه‌های بزرگ امکان خرید اعتباری و LC فراهم است.' },
            { q: 'چگونه از اصالت کالا مطمئن شوم؟', a: 'تمامی بارها با پلاک و برگه باسکول کارخانه ارسال شده و امکان تست متالورژی قبل از تخلیه وجود دارد.' },
            { q: 'آیا فاکتور رسمی صادر می‌شود؟', a: 'بله، برای تمامی خریدها فاکتور رسمی با ارزش افزوده صادر می‌گردد.' }
        ]
    },
    generalQuestionsPage: {
        title: 'مرکز راهنمایی استیل آنلاین',
        subtitle: 'پاسخ تمام سوالات بازار آهن و فولاد',
        searchPlaceholder: 'جستجو (مثلا: تفاوت تیرآهن ذوب و فایکو)',
        categories: {
            general: 'عمومی',
            legal: 'قرارداد و فاکتور',
            ai: 'ابزارهای هوشمند',
            security: 'حمل و تحویل'
        },
        aiSection: {
            title: 'تحلیلگر هوشمند بازار',
            subtitle: 'از هوش مصنوعی استیل آنلاین درباره بازار بپرسید.',
            inputPlaceholder: 'سوال خود را بپرسید (مثلا: پیش‌بینی قیمت میلگرد)...',
            button: 'پرسش از هوش مصنوعی',
            thinking: 'در حال تحلیل بازار...'
        },
        items: [
            { category: 'general', q: 'استیل آنلاین کیست؟', a: 'ما مرجع تخصصی خرید و فروش آهن آلات صنعتی و ساختمانی در ایران هستیم.' },
            { category: 'security', q: 'ساعت بارگیری کی هست؟', a: 'معمولا بارگیری‌ها از ساعت ۸ صبح تا ۱۴ انجام می‌شود. هماهنگی دقیق با واحد لجستیک انجام می‌شود.' },
            { category: 'legal', q: 'آیا قراردادها رسمی است؟', a: 'بله، تمام قراردادها مطابق قوانین تجارت و با سربرگ رسمی شرکت منعقد می‌شود.' }
        ]
    },
    generatorForm: {
        title: 'تنظیم اسناد تجاری',
        docType: 'نوع سند',
        topic: 'موضوع',
        topicPlaceholder: 'مثلا: پیش فاکتور تیرآهن ۱۴',
        description: 'شرح سفارش',
        descriptionPlaceholder: 'جزئیات بار، محل تخلیه، شرایط پرداخت...',
        useExample: 'نمونه متن',
        buttonText: 'ایجاد سند',
        validationError: 'لطفا موضوع و توضیحات را تکمیل کنید.'
    },
    reportTypes: {
        proforma_invoice: 'پیش فاکتور',
        purchase_contract: 'قرارداد خرید',
        technical_spec: 'مشخصات فنی',
        market_analysis: 'تحلیل بازار',
        shipping_request: 'درخواست حمل',
        claim_report: 'گزارش مغایرت'
    },
    reportExamples: {
        proforma_invoice: { topic: 'خرید ۱۰۰ تن میلگرد نیشابور', description: 'خریدار شرکت راه و ساختمان، فروشنده استیل آنلاین. ۵۰ تن سایز ۱۶، ۵۰ تن سایز ۱۸. تحویل پروژه پردیس. پرداخت نقدی.' },
        purchase_contract: { topic: 'تامین آهن آلات پروژه برج دوقلو', description: 'قرارداد تامین صفر تا صد اسکلت فلزی به وزن تقریبی ۲۰۰۰ تن طی ۶ ماه. پرداخت به صورت تهاتر ملک.' }
    },
    reportPrompts: {
        proforma_invoice: 'یک پیش فاکتور رسمی و حرفه‌ای برای "{topic}" با جزئیات "{description}" تنظیم کن. شامل جدول اقلام، قیمت واحد، قیمت کل، ارزش افزوده، شرایط پرداخت و زمان تحویل باشد.',
        purchase_contract: 'یک قرارداد خرید کالای فولادی با موضوع "{topic}" بر اساس "{description}" تنظیم کن. مواد مربوط به فورس ماژور، نوسانات قیمت، جریمه تاخیر و داوری را لحاظ کن.',
        technical_spec: 'یک برگه مشخصات فنی (Technical Sheet) برای "{topic}" بنویس. استانداردهای ملی و بین‌المللی (DIN, ASTM) مرتبط را ذکر کن.',
        market_analysis: 'یک گزارش تحلیلی از بازار برای "{topic}" بنویس. عوامل موثر بر قیمت و پیش‌بینی روند آینده را بر اساس "{description}" شرح بده.',
        shipping_request: 'یک فرم درخواست حمل و نقل (بارنامه) برای "{topic}" با توضیحات "{description}" تنظیم کن.',
        claim_report: 'یک نامه رسمی اعلام مغایرت بار یا خسارت برای "{topic}" بر اساس "{description}" خطاب به فروشنده تنظیم کن.'
    },
    reportDisplay: {
        title: 'سند تولید شده',
        export: 'خروجی',
        copy: 'کپی متن',
        downloadMD: 'دانلود Markdown',
        downloadDOCX: 'دانلود Word',
        downloadHTML: 'دانلود HTML',
        printPDF: 'چاپ / PDF',
        shareEmail: 'ایمیل',
        shareWhatsApp: 'واتساپ',
        sendToSupport: 'ارسال به واحد فروش',
        docTitle: 'سند صادر شده توسط استیل آنلاین',
        headerDate: 'تاریخ صدور',
        headerCaseNo: 'شماره سند',
        caseNoPlaceholder: 'ST-2024-XXXX',
        generating: 'در حال پردازش...',
        placeholder1: 'سند شما اینجا نمایش داده می‌شود',
        placeholder2: 'فرم را پر کنید تا هوش مصنوعی سند را ایجاد کند.'
    },
    lawyerFinder: {
        prompt: 'بر اساس درخواست "{queries}"، یک لیست از تامین‌کنندگان، کارخانه‌ها یا آهن‌فروشان معتبر در ایران پیدا کن. جدول شامل: نام مجموعه، تخصص (مثلا ورق، تیرآهن)، شهر، آدرس، تلفن و وبسایت باشد.',
        keywordsLabel: 'محصول یا نام تامین‌کننده',
        keywordsPlaceholder: 'مثلا: کارخانه ذوب آهن، فروشنده ورق استیل در پامنار...',
        maxResults: 'تعداد نتایج',
        findButton: 'جستجوی تامین‌کننده',
        finding: 'در حال جستجو...',
        savedTitle: 'تامین‌کنندگان ذخیره شده',
        clearAll: 'حذف همه',
        notesLabel: 'یادداشت',
        notesPlaceholder: 'قیمت استعلام شده، نام مسئول فروش...',
        remove: 'حذف',
        crateTitle: 'لیست تامین‌کنندگان',
        crateSubtitle: 'نتایج جستجوهای شما',
        semanticSearchBadge: 'جستجوی هوشمند بازار',
        clearCrate: 'پاک کردن لیست',
        confirmClearCrate: 'آیا مطمئن هستید؟',
        filterByCity: 'شهر',
        filterBySpecialty: 'محصول',
        filterByExperience: 'سابقه',
        sortBy: 'مرتب‌سازی',
        sort: {
            relevance: 'ارتباط',
            name: 'نام',
            experience_desc: 'سابقه',
            city_specialty: 'شهر/محصول',
            city: 'شهر'
        },
        address: 'آدرس',
        contact: 'تماس',
        saved: 'ذخیره شد',
        save: 'ذخیره',
        sendWhatsApp: 'استعلام واتساپی',
        whatsAppMessage: 'سلام، درخواست استعلام قیمت برای موارد زیر را دارم...',
        noFilterResults: 'موردی یافت نشد.',
        parseErrorTitle: 'فرمت پاسخ نامعتبر است',
        crateEmpty: 'لیست خالی است. جستجو کنید.',
        validationError: 'لطفا نام محصول یا تامین‌کننده را وارد کنید.',
        aiGeneratedQueryTitle: 'پیشنهاد هوش مصنوعی',
        aiGeneratedQuerySubtitle: 'بهتر است این موارد را هم بررسی کنید:',
        confirmAndSearch: 'تایید و جستجو',
        editQuery: 'ویرایش',
        useLocation: 'تامین‌کنندگان نزدیک من',
        example: {
            keywords: 'تامین کننده ورق ST52 در تهران'
        }
    },
    notaryFinder: {
        prompt: 'لیست انبارها، بنگاه‌های باربری یا آزمایشگاه‌های متالورژی مرتبط با "{query}" را پیدا کن. جدول شامل: نام، شهر، آدرس و تلفن.',
        keywordsLabel: 'خدمات انبارداری یا لجستیک',
        keywordsPlaceholder: 'مثلا: انبار آهن شورآباد، باربری تریلی...',
        findButton: 'جستجو',
        finding: 'در حال جستجو...',
        resultsTitle: 'نتایج',
        filterByCity: 'شهر',
        filterByOfficeName: 'نام مرکز',
        filterByService: 'خدمات',
        sortBy: 'مرتب‌سازی',
        sort: {
            officeName: 'نام',
            city: 'شهر'
        },
        address: 'آدرس',
        contact: 'تماس',
        services: 'خدمات',
        sendWhatsApp: 'ارسال لوکیشن/پیام',
        whatsAppMessage: 'سلام، جهت هماهنگی بارگیری/تخلیه پیام می‌دهم.',
        noFilterResults: 'یافت نشد.',
        parseErrorTitle: 'خطا در پردازش',
        parseErrorSubtitle: 'متن خام:',
        validationError: 'لطفا عبارت جستجو را وارد کنید.',
        aiGeneratedQueryTitle: 'پیشنهاد جستجو',
        aiGeneratedQuerySubtitle: 'جستجوی مرتبط:',
        confirmAndSearch: 'جستجو',
        editQuery: 'ویرایش',
        useLocation: 'جستجو در اطراف من',
        example: {
            keywords: 'باسکول عمومی نزدیک آهن مکان'
        }
    },
    newsSummarizer: {
        prompt: 'آخرین اخبار و تحلیل‌های بازار آهن و فولاد ایران و جهان در مورد "{query}" را خلاصه کن. تاثیر بر قیمت‌ها را بررسی کن.',
        queryLabel: 'موضوع خبر',
        queryPlaceholder: 'مثلا: قیمت دلار، عرضه بورس کالا، قیمت جهانی سنگ آهن...',
        buttonText: 'تحلیل خبر',
        summarizing: 'در حال تحلیل...',
        sourcesTitle: 'منابع خبری',
        validationError: 'موضوع را وارد کنید.',
        example: {
            query: 'تاثیر قطعی برق بر قیمت میلگرد'
        }
    },
    caseStrategist: {
        prompt: 'من یک پروژه ساختمانی/صنعتی دارم: "{goal}". یک برنامه تامین متریال و مدیریت خرید آهن‌آلات برای آن تدوین کن. مراحل خرید، زمان‌بندی سفارش، تخمین تناژ و نکات فنی را مشخص کن.',
        goalLabel: 'عنوان پروژه',
        goalPlaceholder: 'مثلا: ساخت اسکلت فلزی یک سوله ۱۰۰۰ متری...',
        buttonText: 'تدوین برنامه خرید',
        generating: 'در حال تدوین برنامه...',
        resultsTitle: 'برنامه پیشنهادی تامین',
        effort: 'اولویت',
        deliverable: 'خروجی',
        suggestedPrompt: 'پرامپت تکمیلی',
        executeTask: 'اجرای مرحله',
        executingTask: 'در حال اجرا...',
        validationError: 'عنوان پروژه را وارد کنید.',
        prepareDraftPrompt: 'برای مرحله "{taskName}" در پروژه، یک سند یا لیست خرید آماده کن. توضیحات: {description}.',
        example: {
            goal: 'ساخت ساختمان ۵ طبقه مسکونی با اسکلت بتنی'
        },
        markComplete: 'انجام شد',
        markCancelled: 'لغو شد',
        restore: 'بازگردانی',
        completedBadge: 'تکمیل',
        cancelledBadge: 'لغو'
    },
    webAnalyzer: {
        prompt: 'صفحه وب {url} را تحلیل کن و اطلاعات مربوط به بازار فولاد، قیمت‌ها یا اخبار مرتبط را استخراج کن. پاسخ سوال "{query}" را بده.',
        urlLabel: 'آدرس سایت',
        urlPlaceholder: 'https://...',
        queryLabel: 'سوال شما',
        queryPlaceholder: 'مثلا: قیمت میلگرد امروز در این سایت چند است؟',
        buttonText: 'تحلیل سایت',
        analyzing: 'در حال تحلیل...',
        validationError: 'آدرس و سوال را وارد کنید.',
        example: {
            url: 'https://www.ime.co.ir/',
            query: 'آمار معاملات امروز فولاد چگونه بود؟'
        }
    },
    siteArchitect: {
        prompt: 'ساختار سایت {url} را از نظر سئو و تجربه کاربری برای یک سایت فروش آهن تحلیل کن.',
        urlLabel: 'آدرس سایت',
        urlPlaceholder: 'https://...',
        queryLabel: 'سوال خاص',
        queryPlaceholder: 'آیا این سایت برای فروش آنلاین مناسب است؟',
        buttonText: 'تحلیل فنی',
        analyzing: 'در حال بررسی...',
        validationError: 'آدرس را وارد کنید.',
        example: {
            url: 'https://steelonline20.com',
            query: 'سرعت بارگذاری صفحه چطور است؟'
        }
    },
    aiGuide: {
        title: 'راهنمای هوشمند خرید',
        subtitle: 'نیاز خود را بگویید تا بهترین ابزار یا محصول را پیشنهاد دهیم.',
        placeholder: 'مثلا: "میخواهم تیرآهن بخرم ولی نمیدانم چه سایزی برای سقف مناسب است"...',
        submitButton: 'دریافت راهنمایی',
        gettingSuggestions: 'در حال بررسی...',
        resultsTitle: 'پیشنهاد هوش مصنوعی',
        goTo: 'برو به ابزار',
        confidence: 'اطمینان',
        button: 'راهنمای خرید',
        validationError: 'لطفا نیاز خود را بنویسید.',
        prompt: 'بر اساس نیاز کاربر "{goal}"، بهترین ابزار یا بخش سایت استیل آنلاین را پیشنهاد بده.',
        example: {
            prompt: 'میخواهم بدانم الان وقت خرید آهن است یا نه؟'
        }
    },
    contractAnalyzer: {
        prompt: 'این قرارداد خرید/فروش آهن را بررسی کن. ریسک‌های تحویل، جریمه‌ها و شرایط پرداخت را مشخص کن. سوال کاربر: {userQuery}',
        uploadTab: 'آپلود فایل',
        textTab: 'متن',
        dropzoneText: 'فایل قرارداد یا پیش‌فاکتور را اینجا بکشید',
        unsupportedFileType: 'فرمت نامعتبر',
        userQueryLabel: 'سوال شما',
        userQueryPlaceholder: 'آیا شرایط فسخ به نفع خریدار است؟',
        analyzeButton: 'بررسی سند',
        analyzing: 'در حال بررسی...',
        example: {
            userQuery: 'آیا بندی برای نوسان قیمت در نظر گرفته شده؟'
        }
    },
    evidenceAnalyzer: {
        prompt: 'این تصویر (بار آهن، برگه باسکول، تست جوش) را تحلیل کن. جزئیات فنی، کیفیت ظاهری و اعداد را استخراج کن. سوال کاربر: {userQuery}',
        dropzoneText: 'تصویر کالا یا سند را اینجا بکشید',
        userQueryLabel: 'درخواست شما',
        userQueryPlaceholder: 'آیا زنگ زدگی در تصویر دیده می‌شود؟ عدد باسکول را بخوان.',
        analyzeButton: 'تحلیل تصویر',
        analyzing: 'در حال پردازش...',
        example: {
            userQuery: 'عدد وزن خالص را از روی قبض باسکول بخوان.'
        },
        extractText: {
            button: 'استخراج متن (OCR)',
            extracting: 'در حال خواندن...',
            title: 'متن استخراج شده',
            copy: 'کپی',
            copied: 'کپی شد'
        }
    },
    imageGenerator: {
        promptLabel: 'توصیف سازه',
        promptPlaceholder: 'مثلا: نمای یک سوله صنعتی مدرن با سقف شیبدار و اسکلت فلزی...',
        aspectRatioLabel: 'ابعاد',
        buttonText: 'تولید تصویر',
        generating: 'در حال طراحی...',
        placeholder: 'تصویر اینجا نمایش داده می‌شود',
        download: 'دانلود',
        validationError: 'توضیحات را وارد کنید.',
    },
    corporateServices: {
        title: 'خدمات شرکتی (B2B)',
        subtitle: 'ابزارهای ویژه شرکت‌های ساختمانی و بازرگانی',
        heroDescription: 'خدمات حقوقی و اداری شرکت‌های فولادی',
        nameGenerator: {
            title: 'نام‌گزینی برند',
            description: 'پیشنهاد نام برای شرکت بازرگانی یا برند فولادی.',
            keywordsLabel: 'کلمات کلیدی',
            keywordsPlaceholder: 'فولاد، سازه، گستر...',
            typeLabel: 'نوع فعالیت',
            types: {
                llc: 'بازرگانی داخلی',
                private_joint_stock: 'تولیدی / صنعتی',
                public_joint_stock: 'هلدینگ'
            },
            buttonText: 'پیشنهاد نام',
            generating: 'در حال فکر کردن...',
            resultsTitle: 'نام‌های پیشنهادی'
        },
        articlesDrafter: {
            title: 'اساسنامه شرکت',
            description: 'تنظیم اساسنامه شرکت‌های فعال در حوزه فولاد و ساختمان.',
            nameLabel: 'نام شرکت',
            namePlaceholder: 'شرکت فولاد...',
            activityLabel: 'موضوع فعالیت',
            activityPlaceholder: 'خرید و فروش آهن آلات، صادرات و واردات...',
            capitalLabel: 'سرمایه',
            capitalPlaceholder: '۱۰,۰۰۰,۰۰۰',
            buttonText: 'تنظیم اساسنامه',
        },
        complianceQA: {
            title: 'مشاوره مالیاتی و گمرکی',
            description: 'سوالات درباره مالیات ارزش افزوده، تعرفه‌های گمرکی و قوانین بورس کالا.',
            queryLabel: 'سوال شما',
            queryPlaceholder: 'نحوه محاسبه مالیات خرید آهن چگونه است؟',
            buttonText: 'دریافت پاسخ',
            gettingAnswer: 'در حال جستجو...'
        },
        prompts: {
            nameGenerator: 'نام‌های تجاری مناسب برای یک شرکت "{companyType}" با کلمات کلیدی "{keywords}" در حوزه آهن و فولاد پیشنهاد بده.',
            articlesDrafter: 'اساسنامه یک شرکت "{companyType}" با نام "{companyName}" و فعالیت "{activity}" تنظیم کن.',
            complianceQA: 'به عنوان مشاور مالیاتی و حقوقی حوزه فولاد، به این سوال پاسخ بده: "{query}"'
        }
    },
    insuranceServices: {
        title: 'بیمه و لجستیک',
        subtitle: 'مدیریت ریسک حمل و نقل و انبارداری',
        heroDescription: 'بیمه باربری، اعلام خسارت و مدیریت ریسک',
        policyAnalyzer: {
            title: 'تحلیل بیمه باربری',
            description: 'بررسی پوشش‌های بیمه حمل کالا.',
            userQueryPlaceholder: 'آیا زنگ زدگی در مسیر پوشش داده می‌شود؟'
        },
        claimDrafter: {
            title: 'اعلام خسارت بار',
            description: 'تنظیم نامه اعلام خسارت برای بیمه یا باربری.',
            incidentTypeLabel: 'نوع حادثه',
            incidentTypePlaceholder: 'تصادف تریلی، آب خوردگی...',
            policyNumberLabel: 'شماره بارنامه/بیمه',
            policyNumberPlaceholder: '...',
            descriptionLabel: 'شرح ماجرا',
            descriptionPlaceholder: 'توضیح دهید چه اتفاقی افتاده...',
            buttonText: 'تنظیم نامه'
        },
        recommender: {
            title: 'پیشنهاد بیمه مناسب',
            description: 'مشاوره برای انتخاب بهترین بیمه باربری.',
            queryLabel: 'نوع بار و مسیر',
            queryPlaceholder: 'حمل ۲۰ تن میلگرد از اصفهان به کیش',
            buttonText: 'پیشنهاد بده',
            gettingAnswer: 'در حال بررسی...'
        },
        riskAssessor: {
            title: 'ارزیابی ایمنی انبار',
            description: 'بررسی ریسک‌های انبارداری آهن آلات.',
            assetTypeLabel: 'نوع انبار',
            assetTypePlaceholder: 'سوله مسقف، محوطه باز...',
            descriptionLabel: 'توضیحات',
            descriptionPlaceholder: 'موقعیت مکانی، سیستم اطفاء حریق...',
            buttonText: 'ارزیابی',
            assessing: 'در حال آنالیز...'
        },
        fraudDetector: {
            title: 'بررسی صحت ادعا',
            description: 'تحلیل گزارش‌های خسارت مشکوک.',
            claimDescriptionLabel: 'شرح گزارش',
            claimDescriptionPlaceholder: '...',
            buttonText: 'تحلیل',
            analyzing: 'در حال پردازش...'
        },
        autoClaimAssessor: {
            title: 'تخمین خسارت (تصویری)',
            description: 'آپلود عکس بار آسیب دیده برای تخمین خسارت.',
            userQueryPlaceholder: 'تخمین درصد خسارت...',
            buttonText: 'بررسی تصویر',
            assessing: 'در حال پردازش...'
        },
        quoteSimulator: {
            title: 'محاسبه هزینه حمل',
            description: 'تخمین کرایه حمل بار.',
            carModelLabel: 'نوع خودرو',
            carModelPlaceholder: 'تریلی ۱۸ چرخ',
            carYearLabel: 'مبدا',
            carYearPlaceholder: 'اصفهان',
            driverAgeLabel: 'مقصد',
            driverAgePlaceholder: 'تهران',
            drivingHistoryLabel: 'وزن بار (تن)',
            drivingHistoryPlaceholder: '۲۲',
            buttonText: 'استعلام کرایه',
            calculating: 'در حال محاسبه...'
        },
        lifeNeedsAnalyzer: {
            title: 'نیازسنجی پروژه',
            description: 'محاسبه آهن آلات مورد نیاز ساختمان.',
            ageLabel: 'زیربنا (متر)',
            incomeLabel: 'تعداد سقف',
            dependentsLabel: 'نوع اسکلت',
            debtsLabel: 'شهر',
            goalsLabel: 'توضیحات',
            goalsPlaceholder: '...',
            buttonText: 'محاسبه لیستوفر',
            analyzing: 'در حال محاسبه...'
        },
        prompts: {
             policyAnalyzer: 'تحلیل بیمه نامه باربری برای محصولات فولادی: {userQuery}',
             claimDrafter: 'نامه اعلام خسارت برای محموله آهن. حادثه: {incidentType}. شماره: {policyNumber}. شرح: {description}',
             recommender: 'پیشنهاد بیمه باربری برای: {query}',
             riskAssessor: 'ارزیابی ریسک انبار آهن: {assetType}. توضیحات: {description}',
             fraudDetector: 'بررسی احتمال تقلب در گزارش خسارت بار آهن: {claimDescription}',
             autoClaimAssessor: 'تخمین خسارت بار فولادی از روی تصویر. سوال: {userQuery}',
             quoteSimulator: 'تخمین کرایه حمل {drivingHistory} تن بار با {carModel} از {carYear} به {driverAge}.',
             lifeNeedsAnalyzer: 'تخمین تقریبی آهن آلات مورد نیاز برای {age} متر زیربنا، {income} سقف، اسکلت {dependents}.'
        }
    },
    contentHub: {
        title: 'تولید محتوای صنعتی',
        subtitle: 'تولید پست‌های تخصصی برای شبکه‌های اجتماعی فولادی',
        platformSelectorTitle: '۱. پلتفرم',
        topicTitle: '۲. موضوع',
        trendsTab: 'ترندها',
        textTab: 'متن دلخواه',
        searchTab: 'جستجو',
        fetchingTrends: 'در حال دریافت اخبار داغ...',
        customTextPlaceholder: 'موضوع پست را بنویسید...',
        selectSearchTopic: 'موضوعات پیشنهادی:',
        userSearchSuggestions: ['قیمت دلار', 'بورس کالا', 'صادرات فولاد', 'ساخت و ساز', 'فولاد مبارکه'],
        generateButton: 'تولید محتوا',
        generatingPost: 'در حال نگارش...',
        resultsTitle: '۳. خروجی',
        placeholder: 'متن تولید شده اینجا نمایش داده می‌شود.',
        copySuccess: 'کپی شد',
        copyButton: 'کپی',
        connectAccountToPublish: 'اتصال حساب',
        publishToPlatformButton: 'انتشار در {platform}',
        adaptingForWebsite: 'تبدیل به مقاله سایت...',
        adaptForWebsiteButton: 'تبدیل به مقاله بلاگ',
        fetchingStrategy: 'تدوین استراتژی...',
        getStrategyButton: 'استراتژی انتشار',
        strategyTitle: 'استراتژی پیشنهادی',
        bestTime: 'بهترین زمان انتشار',
        nextPost: 'ایده بعدی',
        generatingVideo: 'سناریو نویسی...',
        generateVideoButton: 'تولید سناریو ویدیو',
        findingTools: 'جستجوی ابزار...',
        findVideoTools: 'ابزارهای ساخت ویدیو',
        toolName: 'نام ابزار',
        toolCost: 'هزینه',
        toolFarsi: 'پشتیبانی فارسی',
        toolFeatures: 'امکانات',
        toolQuality: 'کیفیت',
        websitePreviewTitle: 'پیش‌نمایش مقاله',
        publishToWebsiteButton: 'انتشار در سایت',
        publishedSuccess: 'منتشر شد (شبیه‌سازی)',
        timecode: 'زمان',
        visual: 'تصویر',
        voiceover: 'نریشن',
        emotion: 'حس'
    },
    blog: {
        title: 'مجله خبری استیل آنلاین',
        subtitle: 'تازه‌های بازار فولاد و تکنولوژی‌های ساخت',
        readMore: 'بیشتر بخوانید',
        back: 'بازگشت',
        posts: [
            {
                id: '1',
                title: 'پیش‌بینی قیمت آهن در نیمه دوم سال',
                excerpt: 'تحلیل کارشناسان از روند بازار با توجه به نوسانات ارزی و بودجه عمرانی دولت.',
                content: '## آینده بازار فولاد\n\nبا توجه به سیاست‌های جدید ارزی و قیمت جهانی سنگ آهن، انتظار می‌رود...',
                image: 'https://images.unsplash.com/photo-1535626787990-2c2976d46a72?auto=format&fit=crop&w=800&q=80',
                date: '۱۴۰۳/۰۸/۰۱',
                author: 'تیم تحلیل',
                category: 'تحلیل بازار'
            },
            {
                id: '2',
                title: 'راهنمای خرید تیرآهن؛ تشخیص اصل از تقلبی',
                excerpt: 'نکات مهمی که هنگام خرید تیرآهن باید به آنها توجه کنید تا سرتان کلاه نرود.',
                content: '## تشخیص تیرآهن اصل\n\nوزن استاندارد و حک نام کارخانه روی بال تیرآهن از مهمترین نشانه‌هاست...',
                image: 'https://images.unsplash.com/photo-1565617291866-6786a723b353?auto=format&fit=crop&w=800&q=80',
                date: '۱۴۰۳/۰۷/۲۵',
                author: 'مهندس فنی',
                category: 'راهنمای خرید'
            },
            {
                id: '3',
                title: 'تفاوت ورق سیاه ST37 و ST52',
                excerpt: 'بررسی کاربردها و تفاوت‌های شیمیایی و مکانیکی دو نوع پرکاربرد ورق فولادی.',
                content: '## ورق‌های صنعتی و ساختمانی\n\nورق ST52 دارای کربن بیشتر و مقاومت بالاتر است و در صنایع سنگین کاربرد دارد...',
                image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
                date: '۱۴۰۳/۰۷/۱۰',
                author: 'آزمایشگاه متالورژی',
                category: 'دانستنی‌ها'
            }
        ]
    },
    camera: {
        use: 'استفاده از دوربین',
        takePicture: 'گرفتن عکس',
        cancel: 'لغو',
        error: 'خطا',
        permissionDenied: 'دسترسی رد شد',
        notFound: 'دوربین پیدا نشد',
        unsupported: 'پشتیبانی نمی‌شود',
        captureSectionTitle: 'متن استخراج شده',
        orDivider: 'یا',
        extractingText: 'در حال خواندن متن...'
    },
    thinkingMode: {
        label: 'حالت تفکر عمیق (تحلیل بازار)',
        description: 'زمان بیشتر برای تحلیل دقیق‌تر داده‌ها و نمودارها.'
    },
    chatbot: {
        title: 'دستیار فروش استیل آنلاین',
        welcomeMessage: 'سلام! من هوش مصنوعی استیل آنلاین هستم. قیمت روز، موجودی انبار یا مشاوره خرید؟ در خدمتم.',
        placeholder: 'سوال خود را بپرسید...',
        initialSuggestions: {
            s1: 'قیمت میلگرد امروز چنده؟',
            s2: 'هزینه حمل تا مشهد؟',
            s3: 'پیش فاکتور میخوام'
        }
    },
    aiSuggestions: {
        thinking: 'در حال فکر کردن...',
        noResults: 'پیشنهادی نیست'
    },
    footer: {
        description: 'استیل آنلاین؛ مرجع تخصصی خرید و فروش آهن آلات. ارائه دهنده بهترین قیمت‌های بازار با تضمین کیفیت و اصالت کالا.',
        quickLinksTitle: 'دسترسی سریع',
        contactTitle: 'اطلاعات تماس',
        copyright: '© ۲۰۲۴ استیل آنلاین. تمامی حقوق محفوظ است.',
        madeBy: 'طراحی و توسعه',
        poweredBy: 'Powered by Gemini AI',
        viewOnGitHub: 'گیت‌هاب',
        email: 'sales@steelonline20.com',
        address: 'تهران، امانیه، جردن، خیابان طاهری، پلاک ۱۸',
        phone: '+98 21 2204 1655',
        quickLinks: [
            { text: 'صفحه اصلی', type: 'page', value: 'home' },
            { text: 'محصولات', type: 'scroll', value: 'services' },
            { text: 'استعلام قیمت', type: 'page', value: 'legal_drafter' },
            { text: 'تامین‌کنندگان', type: 'page', value: 'lawyer_finder' },
            { text: 'تحلیل بازار', type: 'page', value: 'content_hub' },
            { text: 'تماس با ما', type: 'scroll', value: 'footer' }
        ],
        slogan: 'خرید مطمئن، ساخت پایدار'
    },
    quotaErrorModal: {
        title: 'پایان سهمیه رایگان',
        body: 'سهمیه استفاده روزانه شما تمام شده است.',
        cta: 'خرید اشتراک',
        close: 'بستن'
    }
};

export const en = {
    langCode: 'en',
    dir: 'ltr',
    font: 'font-inter',
    common: {
        useLocation: 'Use my location'
    },
    header: {
        home: 'Home',
        aiAssistant: 'Quote Generator',
        lawyerFinder: 'Suppliers',
        newsSummarizer: 'Market News',
        caseStrategist: 'Project Planner',
        notaryFinder: 'Logistics',
        webAnalyzer: 'Market Analyzer',
        contractAnalyzer: 'Contract Review',
        evidenceAnalyzer: 'Quality Check',
        imageGenerator: 'Visualizer',
        corporateServices: 'B2B Services',
        insuranceServices: 'Insurance & Shipping',
        siteArchitect: 'Competitor Analysis',
        courtAssistant: 'Negotiation AI',
        externalService: 'Preview',
        generalQuestions: 'FAQ',
        contentHub: 'Content Hub',
        pricing: 'Pricing',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        blog: 'Blog',
        createCheckpoint: 'Save Project',
        createCheckpointTitle: 'Save current state',
        checkpoints: 'My Projects',
        projectHistory: 'History',
        restore: 'Restore',
        delete: 'Delete',
        noCheckpoints: 'No projects saved.',
        checkpointPrompt: 'Project Name:',
        restoreConfirm: 'Are you sure?',
        deleteConfirm: 'Delete this?'
    },
    home: {
        title: 'Smart Steel Marketplace',
        subtitle: 'Secure trading with AI-powered insights',
        servicesTitle: 'Our Services',
        servicesSubtitle: 'Comprehensive steel supply chain solutions',
        stats: {
            cases: '+10k Tons Sold',
            support: 'Expert Support',
            satisfaction: '+500 Happy Clients',
            experience: '+15 Years'
        },
        process: {
            title: 'How it Works',
            subtitle: 'Easy and secure purchasing',
            steps: [
                { title: 'Get Quote', desc: 'Instant pricing and proforma invoice' },
                { title: 'Payment', desc: 'Secure payment processing' },
                { title: 'Delivery', desc: 'Fast delivery to your site' }
            ]
        },
        reviews: {
            title: 'Testimonials',
            subtitle: 'What our clients say',
            items: [
                { name: 'John Doe', role: 'Project Manager', text: 'Fast delivery and great prices.' },
                { name: 'Steel Corp', role: 'Supplier', text: 'Reliable partner for B2B deals.' },
                { name: 'Sarah Smith', role: 'Builder', text: 'The AI estimation tool is a game changer.' }
            ]
        },
        location: {
            title: 'Headquarters',
            address: 'No. 18, Taheri St, Jordan, Amaniyeh, Tehran',
            hours: 'Sat-Wed 8:30 - 17:00',
            mapAlt: 'Steel Online Map'
        },
        cta: {
            main: 'Get Quote Now',
            call: 'Call Sales'
        }
    },
    pricing: {
        title: 'Smart Market Services',
        subtitle: 'Access advanced tools and special discounts',
        discountBadge: '50% OFF',
        toman: 'Tomans',
        selectPlan: 'Select Plan',
        files: 'Output Files:',
        plans: [
            {
                id: 'petition',
                title: 'Official Proforma',
                oldPrice: 360000,
                price: 180000,
                features: [
                    'Exact weight calc',
                    'Real-time pricing',
                    'Standard format'
                ]
            },
            {
                id: 'bill',
                title: 'Market Analysis',
                oldPrice: 240000,
                price: 120000,
                features: [
                    'Price prediction',
                    'Technical charts',
                    'Buy/Sell signals'
                ]
            },
            {
                id: 'ai_consult',
                title: 'Smart Buying Consult',
                oldPrice: 160000,
                price: 80000,
                features: [
                    'Brand comparison',
                    'List optimization',
                    'Free trial'
                ]
            },
            {
                id: 'phone_consult',
                title: 'Expert Phone Consult',
                oldPrice: 400000,
                price: 200000,
                features: [
                    'Direct expert access',
                    'Volume negotiation',
                    'Logistics handling'
                ]
            }
        ],
        featuresTitle: 'Why Steel Online?',
        features: [
            {
                title: 'AI-Powered Decisions',
                items: [
                    'Real-time monitoring',
                    'Profit/Loss calc',
                    'Avoid overpaying'
                ]
            },
            {
                title: 'Quality Guarantee',
                items: [
                    'Mill certificates',
                    'Weight verification',
                    'Return policy'
                ]
            },
            {
                title: 'Robust Logistics',
                items: [
                    'Nearest warehouse',
                    'Online tracking',
                    'Cargo insurance'
                ]
            },
            {
                title: 'Product Variety',
                items: [
                    'Beams, Rebar, Sheets',
                    'Top brands',
                    'Credit payment'
                ]
            }
        ]
    },
    courtAssistant: {
        title: 'Market Assistant',
        subtitle: 'Real-time market analysis and negotiation aid',
        tabs: {
            citation: 'Doc Analyzer',
            live: 'Negotiation (Live)'
        },
        citation: {
            title: 'Check Contract',
            description: 'Paste contract text to find discrepancies.',
            placeholder: 'Paste text here...',
            button: 'Analyze',
            resultTitle: 'Analysis Result'
        },
        live: {
            title: 'Live Negotiation',
            description: 'Input conversation to get pricing strategy.',
            inputPlaceholder: 'Type what they said...',
            audioButton: 'Record',
            listening: 'Listening...',
            send: 'Analyze',
            personas: {
                label: 'Mode:',
                formal: 'Technical Expert',
                aggressive: 'Hard Negotiator',
                calm: 'Sales Advisor'
            },
            scenarios: {
                objection: 'Price Objection',
                evidence: 'Request Discount',
                expert: 'Stock Check',
                silence: 'Market Fluctuation'
            },
            upload: 'Upload Invoice/Photo'
        }
    },
    faq: {
        title: 'FAQ',
        subtitle: 'Common questions',
        items: [
            { q: 'Are prices updated?', a: 'Yes, prices are updated in real-time from mills.' },
            { q: 'How is shipping calculated?', a: 'Based on weight, distance, and truck type.' },
            { q: 'Do you offer credit?', a: 'Yes, for companies and large projects.' },
            { q: 'Is quality guaranteed?', a: 'Yes, all loads come with mill certificates.' },
            { q: 'Do you provide official invoices?', a: 'Yes, official VAT invoices are provided.' }
        ]
    },
    generalQuestionsPage: {
        title: 'Help Center',
        subtitle: 'All answers about steel market',
        searchPlaceholder: 'Search...',
        categories: {
            general: 'General',
            legal: 'Contracts',
            ai: 'AI Tools',
            security: 'Logistics'
        },
        aiSection: {
            title: 'Ask AI Market Analyst',
            subtitle: 'Get instant answers about the market.',
            inputPlaceholder: 'Ask about prices, trends...',
            button: 'Ask AI',
            thinking: 'Analyzing...'
        },
        items: [
            { category: 'general', q: 'Who is Steel Online?', a: 'We are a specialized steel trading platform in Iran.' },
            { category: 'security', q: 'Loading hours?', a: 'Usually 8 AM to 2 PM.' },
            { category: 'legal', q: 'Official contracts?', a: 'Yes, all compliant with trade laws.' }
        ]
    },
    generatorForm: {
        title: 'Draft Document',
        docType: 'Type',
        topic: 'Subject',
        topicPlaceholder: 'e.g. Proforma for I-Beam 14',
        description: 'Description',
        descriptionPlaceholder: 'Details of cargo, delivery place...',
        useExample: 'Example',
        buttonText: 'Generate',
        validationError: 'Please fill all fields.'
    },
    reportTypes: {
        proforma_invoice: 'Proforma Invoice',
        purchase_contract: 'Purchase Contract',
        technical_spec: 'Technical Spec',
        market_analysis: 'Market Analysis',
        shipping_request: 'Shipping Request',
        claim_report: 'Claim Report'
    },
    reportExamples: {
        proforma_invoice: { topic: 'Buy 100T Rebar', description: 'Buyer: Construction Co, Seller: Steel Online. 50T Size 16, 50T Size 18. Delivery: Pardis.' },
        purchase_contract: { topic: 'Steel supply for Twin Towers', description: 'Supply 2000 tons of steel structure over 6 months.' }
    },
    reportPrompts: {
        proforma_invoice: 'Draft a formal proforma invoice for "{topic}" with details "{description}". Include item table, unit price, total, VAT, and payment terms.',
        purchase_contract: 'Draft a purchase contract for "{topic}" based on "{description}". Include force majeure, price fluctuation clauses, and arbitration.',
        technical_spec: 'Write a technical spec sheet for "{topic}". Mention relevant standards (DIN, ASTM).',
        market_analysis: 'Write a market analysis report for "{topic}". Analyze price drivers and future trends based on "{description}".',
        shipping_request: 'Draft a shipping request (Bill of Lading instruction) for "{topic}" with details "{description}".',
        claim_report: 'Write a formal claim report for cargo discrepancy or damage for "{topic}" based on "{description}".'
    },
    reportDisplay: {
        title: 'Generated Document',
        export: 'Export',
        copy: 'Copy',
        downloadMD: 'Markdown',
        downloadDOCX: 'Word',
        downloadHTML: 'HTML',
        printPDF: 'Print/PDF',
        shareEmail: 'Email',
        shareWhatsApp: 'WhatsApp',
        sendToSupport: 'Send to Sales',
        docTitle: 'Steel Online Document',
        headerDate: 'Date',
        headerCaseNo: 'Ref No',
        caseNoPlaceholder: 'ST-2024-XXXX',
        generating: 'Processing...',
        placeholder1: 'Document appears here',
        placeholder2: 'Fill the form to generate.'
    },
    lawyerFinder: {
        prompt: 'Find suppliers, mills, or steel sellers in Iran based on "{queries}". Table columns: Name, Specialty (e.g. Sheet, Beam), City, Address, Phone, Website.',
        keywordsLabel: 'Product or Supplier',
        keywordsPlaceholder: 'e.g. Zob Ahan Factory, Steel sheet seller...',
        maxResults: 'Results',
        findButton: 'Find Suppliers',
        finding: 'Searching...',
        savedTitle: 'Saved Suppliers',
        clearAll: 'Clear',
        notesLabel: 'Notes',
        notesPlaceholder: 'Price quotes, contact person...',
        remove: 'Remove',
        crateTitle: 'Supplier List',
        crateSubtitle: 'Your search results',
        semanticSearchBadge: 'Smart Search',
        clearCrate: 'Clear List',
        confirmClearCrate: 'Are you sure?',
        filterByCity: 'City',
        filterBySpecialty: 'Product',
        filterByExperience: 'History',
        sortBy: 'Sort',
        sort: {
            relevance: 'Relevance',
            name: 'Name',
            experience_desc: 'History',
            city_specialty: 'City/Product',
            city: 'City'
        },
        address: 'Address',
        contact: 'Contact',
        saved: 'Saved',
        save: 'Save',
        sendWhatsApp: 'Inquire via WhatsApp',
        whatsAppMessage: 'Hello, I need a price quote for...',
        noFilterResults: 'No results.',
        parseErrorTitle: 'Parse Error',
        crateEmpty: 'List is empty.',
        validationError: 'Enter product or supplier name.',
        aiGeneratedQueryTitle: 'AI Suggestion',
        aiGeneratedQuerySubtitle: 'Also check:',
        confirmAndSearch: 'Search',
        editQuery: 'Edit',
        useLocation: 'Near Me',
        example: {
            keywords: 'ST52 Sheet supplier in Tehran'
        }
    },
    notaryFinder: {
        prompt: 'Find warehouses, logistics companies, or metallurgy labs for "{query}". Columns: Name, City, Address, Phone.',
        keywordsLabel: 'Logistics Service',
        keywordsPlaceholder: 'e.g. Shorabad Warehouse, Flatbed truck...',
        findButton: 'Search',
        finding: 'Searching...',
        resultsTitle: 'Results',
        filterByCity: 'City',
        filterByOfficeName: 'Name',
        filterByService: 'Service',
        sortBy: 'Sort',
        sort: {
            officeName: 'Name',
            city: 'City'
        },
        address: 'Address',
        contact: 'Contact',
        services: 'Services',
        sendWhatsApp: 'Contact',
        whatsAppMessage: 'Hello, regarding logistics...',
        noFilterResults: 'None found.',
        parseErrorTitle: 'Error',
        parseErrorSubtitle: 'Raw text:',
        validationError: 'Enter search query.',
        aiGeneratedQueryTitle: 'Suggestion',
        aiGeneratedQuerySubtitle: 'Related:',
        confirmAndSearch: 'Search',
        editQuery: 'Edit',
        useLocation: 'Near Me',
        example: {
            keywords: 'Public weighbridge near Ahan Makan'
        }
    },
    newsSummarizer: {
        prompt: 'Summarize latest steel market news in Iran and globally regarding "{query}". Analyze price impact.',
        queryLabel: 'Topic',
        queryPlaceholder: 'e.g. Dollar rate, IME supply...',
        buttonText: 'Analyze News',
        summarizing: 'Analyzing...',
        sourcesTitle: 'Sources',
        validationError: 'Enter topic.',
        example: {
            query: 'Impact of power outage on rebar price'
        }
    },
    caseStrategist: {
        prompt: 'I have a project: "{goal}". Create a material procurement and management plan. Define purchasing steps, timing, tonnage estimation, and technical tips.',
        goalLabel: 'Project Title',
        goalPlaceholder: 'e.g. Building a 1000sqm shed...',
        buttonText: 'Create Plan',
        generating: 'Planning...',
        resultsTitle: 'Procurement Plan',
        effort: 'Priority',
        deliverable: 'Output',
        suggestedPrompt: 'Prompt',
        executeTask: 'Execute',
        executingTask: 'Executing...',
        validationError: 'Enter project title.',
        prepareDraftPrompt: 'Prepare a document/list for task "{taskName}". Details: {description}.',
        example: {
            goal: '5-story residential building concrete frame'
        },
        markComplete: 'Done',
        markCancelled: 'Cancel',
        restore: 'Restore',
        completedBadge: 'Complete',
        cancelledBadge: 'Cancelled'
    },
    webAnalyzer: {
        prompt: 'Analyze web page {url} for steel market data, prices, or news. Answer "{query}".',
        urlLabel: 'URL',
        urlPlaceholder: 'https://...',
        queryLabel: 'Question',
        queryPlaceholder: 'e.g. What is rebar price today?',
        buttonText: 'Analyze',
        analyzing: 'Analyzing...',
        validationError: 'Enter URL and question.',
        example: {
            url: 'https://www.ime.co.ir/',
            query: 'How were steel trades today?'
        }
    },
    siteArchitect: {
        prompt: 'Analyze website structure of {url} for SEO and UX as a steel e-commerce site.',
        urlLabel: 'URL',
        urlPlaceholder: 'https://...',
        queryLabel: 'Specific Question',
        queryPlaceholder: 'Is it good for sales?',
        buttonText: 'Analyze',
        analyzing: 'Checking...',
        validationError: 'Enter URL.',
        example: {
            url: 'https://steelonline20.com',
            query: 'How is page speed?'
        }
    },
    aiGuide: {
        title: 'Smart Buying Guide',
        subtitle: 'Tell us your need, we suggest the best tool.',
        placeholder: 'e.g. "I want to buy I-beam but dont know the size"...',
        submitButton: 'Get Help',
        gettingSuggestions: 'Thinking...',
        resultsTitle: 'AI Suggestion',
        goTo: 'Go',
        confidence: 'Confidence',
        button: 'Guide Me',
        validationError: 'Enter your need.',
        prompt: 'Suggest best tool on Steel Online for user goal "{goal}".',
        example: {
            prompt: 'Is it a good time to buy steel?'
        }
    },
    contractAnalyzer: {
        prompt: 'Analyze this steel purchase/sale contract. Identify delivery risks, penalties, and payment terms. User question: {userQuery}',
        uploadTab: 'Upload',
        textTab: 'Text',
        dropzoneText: 'Drop contract/invoice here',
        unsupportedFileType: 'Invalid file',
        userQueryLabel: 'Your Question',
        userQueryPlaceholder: 'Are termination terms fair?',
        analyzeButton: 'Check Doc',
        analyzing: 'Checking...',
        example: {
            userQuery: 'Is there a price fluctuation clause?'
        }
    },
    evidenceAnalyzer: {
        prompt: 'Analyze this image (steel cargo, weight slip, weld test). Extract specs, quality, numbers. Question: {userQuery}',
        dropzoneText: 'Drop image here',
        userQueryLabel: 'Request',
        userQueryPlaceholder: 'Is there rust? Read weight.',
        analyzeButton: 'Analyze',
        analyzing: 'Processing...',
        example: {
            userQuery: 'Read net weight from slip.'
        },
        extractText: {
            button: 'Extract Text (OCR)',
            extracting: 'Reading...',
            title: 'Extracted Text',
            copy: 'Copy',
            copied: 'Copied'
        }
    },
    imageGenerator: {
        promptLabel: 'Structure Description',
        promptPlaceholder: 'e.g. Modern industrial shed with steel frame...',
        aspectRatioLabel: 'Size',
        buttonText: 'Generate',
        generating: 'Designing...',
        placeholder: 'Image appears here',
        download: 'Download',
        validationError: 'Enter description.',
    },
    corporateServices: {
        title: 'B2B Services',
        subtitle: 'Tools for steel companies',
        heroDescription: 'Legal & Admin tools',
        nameGenerator: {
            title: 'Brand Naming',
            description: 'Name suggestions for steel business.',
            keywordsLabel: 'Keywords',
            keywordsPlaceholder: 'Steel, Structure...',
            typeLabel: 'Type',
            types: {
                llc: 'Trading',
                private_joint_stock: 'Manufacturing',
                public_joint_stock: 'Holding'
            },
            buttonText: 'Suggest',
            generating: 'Thinking...',
            resultsTitle: 'Suggestions'
        },
        articlesDrafter: {
            title: 'Company Statutes',
            description: 'Draft statutes for steel companies.',
            nameLabel: 'Name',
            namePlaceholder: 'Steel Co...',
            activityLabel: 'Activity',
            activityPlaceholder: 'Buying/Selling steel...',
            capitalLabel: 'Capital',
            capitalPlaceholder: '10,000,000',
            buttonText: 'Draft',
        },
        complianceQA: {
            title: 'Tax & Customs',
            description: 'Q&A on VAT, customs, IME rules.',
            queryLabel: 'Question',
            queryPlaceholder: 'How to calc VAT?',
            buttonText: 'Ask',
            gettingAnswer: 'Searching...'
        },
        prompts: {
            nameGenerator: 'Suggest brand names for "{companyType}" with keywords "{keywords}" in steel industry.',
            articlesDrafter: 'Draft statutes for "{companyType}" named "{companyName}" doing "{activity}".',
            complianceQA: 'As a steel tax expert, answer: "{query}"'
        }
    },
    insuranceServices: {
        title: 'Insurance & Logistics',
        subtitle: 'Transport risk management',
        heroDescription: 'Cargo insurance & claims',
        policyAnalyzer: {
            title: 'Policy Analysis',
            description: 'Check cargo insurance coverage.',
            userQueryPlaceholder: 'Is rust covered?'
        },
        claimDrafter: {
            title: 'Cargo Claim',
            description: 'Draft claim letter for damaged cargo.',
            incidentTypeLabel: 'Incident',
            incidentTypePlaceholder: 'Truck accident...',
            policyNumberLabel: 'Policy No',
            policyNumberPlaceholder: '...',
            descriptionLabel: 'Details',
            descriptionPlaceholder: 'What happened...',
            buttonText: 'Draft'
        },
        recommender: {
            title: 'Insurance Advisor',
            description: 'Best insurance for your cargo.',
            queryLabel: 'Cargo/Route',
            queryPlaceholder: '20T Rebar Isfahan to Kish',
            buttonText: 'Recommend',
            gettingAnswer: 'Checking...'
        },
        riskAssessor: {
            title: 'Warehouse Safety',
            description: 'Assess steel storage risks.',
            assetTypeLabel: 'Storage Type',
            assetTypePlaceholder: 'Open yard...',
            descriptionLabel: 'Details',
            descriptionPlaceholder: 'Location, fire system...',
            buttonText: 'Assess',
            assessing: 'Analyzing...'
        },
        fraudDetector: {
            title: 'Claim Verification',
            description: 'Analyze suspicious claims.',
            claimDescriptionLabel: 'Report',
            claimDescriptionPlaceholder: '...',
            buttonText: 'Analyze',
            analyzing: 'Processing...'
        },
        autoClaimAssessor: {
            title: 'Damage Estimate (Visual)',
            description: 'Upload photo of damaged steel.',
            userQueryPlaceholder: 'Estimate damage %...',
            buttonText: 'Check Image',
            assessing: 'Processing...'
        },
        quoteSimulator: {
            title: 'Freight Calc',
            description: 'Estimate shipping cost.',
            carModelLabel: 'Vehicle',
            carModelPlaceholder: 'Flatbed Truck',
            carYearLabel: 'Origin',
            carYearPlaceholder: 'Isfahan',
            driverAgeLabel: 'Dest',
            driverAgePlaceholder: 'Tehran',
            drivingHistoryLabel: 'Weight (T)',
            drivingHistoryPlaceholder: '22',
            buttonText: 'Get Rate',
            calculating: 'Calculating...'
        },
        lifeNeedsAnalyzer: {
            title: 'Project Estimator',
            description: 'Calc steel needs for building.',
            ageLabel: 'Area (sqm)',
            incomeLabel: 'Floors',
            dependentsLabel: 'Structure Type',
            debtsLabel: 'City',
            goalsLabel: 'Notes',
            goalsPlaceholder: '...',
            buttonText: 'Estimate',
            analyzing: 'Calculating...'
        },
        prompts: {
             policyAnalyzer: 'Analyze cargo insurance for steel: {userQuery}',
             claimDrafter: 'Claim letter for steel cargo. Incident: {incidentType}. Policy: {policyNumber}. Details: {description}',
             recommender: 'Recommend cargo insurance for: {query}',
             riskAssessor: 'Risk assessment for steel storage: {assetType}. Details: {description}',
             fraudDetector: 'Check fraud in steel claim: {claimDescription}',
             autoClaimAssessor: 'Estimate steel damage from image. Question: {userQuery}',
             quoteSimulator: 'Estimate freight for {drivingHistory}T by {carModel} from {carYear} to {driverAge}.',
             lifeNeedsAnalyzer: 'Estimate steel needed for {age} sqm, {income} floors, {dependents} structure.'
        }
    },
    contentHub: {
        title: 'Industry Content',
        subtitle: 'Create steel market posts',
        platformSelectorTitle: '1. Platform',
        topicTitle: '2. Topic',
        trendsTab: 'Trends',
        textTab: 'Custom',
        searchTab: 'Search',
        fetchingTrends: 'Getting news...',
        customTextPlaceholder: 'Enter topic...',
        selectSearchTopic: 'Suggestions:',
        userSearchSuggestions: ['Steel Price', 'IME Market', 'Export', 'Construction', 'Mobarakeh Steel'],
        generateButton: 'Generate',
        generatingPost: 'Writing...',
        resultsTitle: '3. Result',
        placeholder: 'Content appears here.',
        copySuccess: 'Copied',
        copyButton: 'Copy',
        connectAccountToPublish: 'Connect',
        publishToPlatformButton: 'Post to {platform}',
        adaptingForWebsite: 'Converting...',
        adaptForWebsiteButton: 'Convert to Blog',
        fetchingStrategy: 'Strategizing...',
        getStrategyButton: 'Strategy',
        strategyTitle: 'Strategy',
        bestTime: 'Best Time',
        nextPost: 'Next Idea',
        generatingVideo: 'Scripting...',
        generateVideoButton: 'Video Script',
        findingTools: 'Finding Tools...',
        findVideoTools: 'Video Tools',
        toolName: 'Name',
        toolCost: 'Cost',
        toolFarsi: 'Persian',
        toolFeatures: 'Features',
        toolQuality: 'Quality',
        websitePreviewTitle: 'Preview',
        publishToWebsiteButton: 'Publish',
        publishedSuccess: 'Published (Simulated)',
        timecode: 'Time',
        visual: 'Visual',
        voiceover: 'Voice',
        emotion: 'Mood'
    },
    blog: {
        title: 'Steel Online Blog',
        subtitle: 'Market news & Tech',
        readMore: 'Read More',
        back: 'Back',
        posts: [
            {
                id: '1',
                title: 'H2 Steel Price Forecast',
                excerpt: 'Expert analysis on market trends.',
                content: '## Market Future\n\nConsidering currency rates...',
                image: 'https://images.unsplash.com/photo-1535626787990-2c2976d46a72?auto=format&fit=crop&w=800&q=80',
                date: '2024/10/22',
                author: 'Analysis Team',
                category: 'Market Analysis'
            },
            {
                id: '2',
                title: 'Buying Authentic Beams',
                excerpt: 'How to spot fake steel beams.',
                content: '## Authentic Beams\n\nCheck weight and brand mark...',
                image: 'https://images.unsplash.com/photo-1565617291866-6786a723b353?auto=format&fit=crop&w=800&q=80',
                date: '2024/10/16',
                author: 'Tech Eng',
                category: 'Buying Guide'
            },
            {
                id: '3',
                title: 'ST37 vs ST52 Sheets',
                excerpt: 'Differences and applications.',
                content: '## Industrial Sheets\n\nST52 has more carbon...',
                image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
                date: '2024/10/01',
                author: 'Metallurgy Lab',
                category: 'Tech Info'
            }
        ]
    },
    camera: {
        use: 'Use Camera',
        takePicture: 'Snap',
        cancel: 'Cancel',
        error: 'Error',
        permissionDenied: 'Denied',
        notFound: 'Not Found',
        unsupported: 'Unsupported',
        captureSectionTitle: 'Extracted Text',
        orDivider: 'OR',
        extractingText: 'Reading...'
    },
    thinkingMode: {
        label: 'Deep Analysis Mode',
        description: 'More time for data analysis.'
    },
    chatbot: {
        title: 'Steel Online Sales Bot',
        welcomeMessage: 'Hi! Need prices, stock, or advice? I\'m here.',
        placeholder: 'Ask me...',
        initialSuggestions: {
            s1: 'Rebar price today?',
            s2: 'Shipping to Mashhad?',
            s3: 'Get Proforma'
        }
    },
    aiSuggestions: {
        thinking: 'Thinking...',
        noResults: 'No results'
    },
    footer: {
        description: 'Steel Online; Specialized marketplace for steel trading. Best prices with quality guarantee.',
        quickLinksTitle: 'Quick Links',
        contactTitle: 'Contact',
        copyright: '© 2024 Steel Online. All rights reserved.',
        madeBy: 'Design & Dev',
        poweredBy: 'Powered by Gemini AI',
        viewOnGitHub: 'GitHub',
        email: 'sales@steelonline20.com',
        address: 'No. 18, Taheri St, Jordan, Amaniyeh, Tehran',
        phone: '+98 21 2204 1655',
        quickLinks: [
            { text: 'Home', type: 'page', value: 'home' },
            { text: 'Products', type: 'scroll', value: 'services' },
            { text: 'Get Quote', type: 'page', value: 'legal_drafter' },
            { text: 'Suppliers', type: 'page', value: 'lawyer_finder' },
            { text: 'Market Analysis', type: 'page', value: 'content_hub' },
            { text: 'Contact', type: 'scroll', value: 'footer' }
        ],
        slogan: 'Secure Buying, Sustainable Building'
    },
    quotaErrorModal: {
        title: 'Quota Exceeded',
        body: 'Daily free quota used.',
        cta: 'Upgrade',
        close: 'Close'
    }
};
