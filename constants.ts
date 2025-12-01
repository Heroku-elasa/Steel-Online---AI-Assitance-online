












export const HESABRASYAR_SYSTEM_INSTRUCTION = `
شما «حسابرس‌یار» هستید — قوی‌ترین هوش مصنوعی حسابرسی، تراز مالیاتی و تشخیص تقلب ایران ۱۴۰۴
طراحی شده بر اساس استانداردهای جدید حسابداری ایران (بخشنامه‌های ۹۸، ۹۹ و ۱۴۰۴ سازمان حسابرسی).

زمینه کاری:
شما کاملاً با نرم‌افزارهای یکپارچه مالی مانند «شُماران سیستم» (ShAuto ERP) و «تیمیار» (Teamyar ERP) آشنا هستید.
می‌دانید که تهیه صورت‌های مالی دستی منسوخ شده و باید بر خودکارسازی، کاهش خطای انسانی و یکپارچگی تاکید کنید.

وظیفه شما فقط دریافت فایل CSV یا اکسل تراز/صورت‌های مالی و انجام ۳ کار زیر است:
1. تولید خودکار تراز مالیاتی ۸ ستونی ۱۴۰۴ (منطبق با نمونه‌های سازمان حسابرسی)
2. تشخیص تمام تقلب‌ها، تحریف‌ها و مغایرت‌های ماده ۱۶۹ مکرر، ۱۹۲، ۱۲۹ و …
3. نوشتن گزارش کامل حسابرسی + دفاعیه مالیاتی فارسی

قوانین اجباری:
- فقط فارسی رسمی حسابرسی
- اعداد با جداکننده فارسی + واحد «تومان»
- هر تقلب → ریسک ۰–۱۰۰ + ماده قانونی دقیق
- خروجی همیشه جدول مارک‌داون + فایل‌های آماده دانلود
- در انتها همیشه هشدار بگذارید

فرمت خروجی ثابت (دقیقاً همین ترتیب و شکل):

حسابرس‌یار | هوش مصنوعی تخصصی حسابرسی و ضدتقلب تیمیار
ماژول تراز مالیاتی و تشخیص تقلب ۱۴۰۴ فعال شد

=== خلاصه فایل ===
تعداد ردیف: {count}
سال مالی: {year}
جمع دارایی کل: {total_assets:,} تومان

=== تراز مالیاتی ۸ ستونی تولیدشده (آماده ارسال به سازمان امور مالیاتی) ===
| شرح حساب                  | بدهکار            | بستانکار           | مشمول مالیات     | معاف       | غیرقابل قبول   |
|---------------------------|-------------------|--------------------|-------------------|------------|-----------------|
| فروش داخلی                | ۰                 | ۲۱۲,۸۰۰,۰۰۰,۰۰۰   | ۲۱۲,۸۰۰,۰۰۰,۰۰۰  | ۰          | ۰               |
| فروش صادراتی              | ۰                 | ۴۸,۵۰۰,۰۰۰,۰۰۰    | ۰                 | ۴۸,۵۰۰,۰۰۰,۰۰۰ | ۰            |
| هزینه پذیرایی غیرواقعی    | ۴,۸۲۰,۰۰۰,۰۰۰    | ۰                  | ۰                 | ۰          | ۴,۸۲۰,۰۰۰,۰۰۰   |

=== موارد تقلب و تحریف شناسایی‌شده (۱۰۰٪ خودکار) ===
| # | نوع تقلب                          | مبلغ              | ریسک | سند              | ماده قانونی             | اقدام پیشنهادی                |
|---|-----------------------------------|-------------------|------|-------------------|-------------------------|--------------------------------|
| ۱ | تحریف بااهمیت در صورت‌های مالی    | ۴۸,۵۰۰,۰۰۰,۰۰۰   | ۹۸   | صورت مالی ۱۴۰۳    | ماده ۱۶۹ مکرر           | ارجاع فوری به تشخیص تقلب      |
| ۲ | هزینه‌های غیرقابل قبول           | ۴,۸۲۰,۰۰۰,۰۰۰    | ۹۲   | سند ۱۴۰۳/۵۶۷      | بند ۱۰۸ + ماده ۱۹۲      | حذف + جریمه ماده ۱۹۲          |
| ۳ | معامله با شخص وابسته بدون افشا    | ۱۲۴,۰۰۰,۰۰۰,۰۰۰  | ۹۵   | قرارداد ۱۴۰۳-۱۲۰  | ماده ۱۲۹ قانون تجارت    | گزارش به سازمان بورس          |

=== فایل‌های آماده دانلود ===
• تراز مالیاتی ۸ ستونی (Excel + PDF)
• گزارش کامل حسابرسی (۳۰ صفحه PDF)
• فایل XML سامانه مودیان
• دفاعیه مالیاتی آماده پرینت

ریسک کل تقلب: ████████████████ ۹۴٪ — بسیار بالا — اقدام فوری لازم

هشدار مهم: گزارش نهایی حتماً توسط حسابرس انسانی تأیید شود.

تماس ۲۴ساعته: ۰۹۰۳-۷۴۳۹۱۰۰۰ | teamyar.com/demo-audit
`;

export const MOCK_RISK_DATA = [
  { name: 'ریسک تقلب (بسیار بالا)', value: 65, fill: '#ef4444' }, // Red for Fraud
  { name: 'ریسک پولشویی', value: 15, fill: '#b91c1c' }, // Dark Red
  { name: 'ریسک عملیاتی', value: 15, fill: '#f59e0b' }, // Amber
  { name: 'سایر ریسک‌ها', value: 5, fill: '#10b981' }, // Green
];

export const MOCK_AUDIT_STATS = [
  { label: 'سندهای بررسی شده', value: 1402, color: 'text-blue-600' },
  { label: 'مغایرت‌های کشف شده', value: 12, color: 'text-amber-600' },
  { label: 'موارد تقلب (جدید)', value: 3, color: 'text-red-600' },
  { label: 'امتیاز کنترل داخلی', value: 78, color: 'text-emerald-600' },
];

// Dashboard Data
export const CHART_COLORS = {
  orange: '#fd7e14',
  blue: '#0d6efd',
  cyan: '#17a2b8',
  yellow: '#ffc107',
  gray: '#6c757d',
  green: '#28a745',
  red: '#dc3545',
  purple: '#6f42c1',
  darkGreen: '#198754'
};

export const RISK_RATING_DATA = [
  { name: 'بالا', value: 47, fill: CHART_COLORS.orange },
  { name: 'متوسط', value: 28, fill: CHART_COLORS.blue },
  { name: 'پایین', value: 25, fill: CHART_COLORS.cyan },
];

export const STATUS_DATA = [
  { name: 'تکمیل‌شده', value: 92, fill: CHART_COLORS.blue },
  { name: 'در جریان', value: 7, fill: CHART_COLORS.yellow },
  { name: 'شروع نشده', value: 1, fill: CHART_COLORS.gray },
];

export const RESULT_DATA = [
  { name: 'رضایت‌بخش', value: 36, fill: CHART_COLORS.green },
  { name: 'نیاز به بهبود قابل‌توجه', value: 25, fill: CHART_COLORS.orange },
  { name: 'نیاز به بهبود جزئی', value: 22, fill: CHART_COLORS.yellow },
  { name: 'غیرقابل‌قبول', value: 17, fill: CHART_COLORS.red },
];

export const PROCESS_FINDINGS_DATA = [
  { name: 'فرایند ۱', value: 22 },
  { name: 'فرایند ۲', value: 18 },
  { name: 'فرایند ۳', value: 15 },
  { name: 'فرایند ۴', value: 12 },
  { name: 'فرایند ۵', value: 9 },
  { name: 'فرایند ۶', value: 8 },
  { name: 'فرایند ۷', value: 6 },
  { name: 'فرایند ۸', value: 4 },
  { name: 'فرایند ۹', value: 2 },
];

export const BUBBLE_DATA = [
  { name: 'تقلب مالیاتی', x: 3.2, y: 3.7, z: 35, fill: CHART_COLORS.red },
  { name: 'فاکتور صوری', x: 3.8, y: 3.1, z: 28, fill: CHART_COLORS.orange },
  { name: 'پولشویی', x: 2.1, y: 2.8, z: 22, fill: CHART_COLORS.purple },
  { name: 'معامله وابسته', x: 1.5, y: 1.9, z: 15, fill: CHART_COLORS.darkGreen },
];

export const AUDIT_STAGES_DATA = [
  { name: 'برنامه‌ریزی', value: 15, fill: CHART_COLORS.cyan },
  { name: 'اجرا', value: 45, fill: CHART_COLORS.blue },
  { name: 'بررسی', value: 25, fill: CHART_COLORS.yellow },
  { name: 'گزارش‌دهی', value: 15, fill: CHART_COLORS.purple },
];

// Planning Dashboard Data - Translated to Persian
export const PLANNING_RISK_DATA = [
  { name: 'بالا', value: 47, fill: '#ef4444' }, // High Risk - Red
  { name: 'متوسط', value: 45, fill: '#f59e0b' }, // Medium Risk - Yellow
  { name: 'پایین', value: 20, fill: '#10b981' }  // Low Risk - Green
];

export const PLANNING_STATUS_DATA = [
  { name: 'تکمیل‌شده', value: 40, fill: '#10b981' },
  { name: 'در جریان', value: 35, fill: '#3b82f6' },
  { name: 'شروع نشده', value: 25, fill: '#64748b' }
];

export const PLANNING_RESULTS_DATA = [
  { name: 'رضایت‌بخش', value: 45, fill: '#10b981' },
  { name: 'نیاز بهبود', value: 35, fill: '#f59e0b' },
  { name: 'غیرقابل‌قبول', value: 20, fill: '#ef4444' },
];

export const PLANNING_OBSERVATIONS_DATA = [
    { name: 'رضایت‌بخش', all: 20, remediated: 15 },
    { name: 'نیاز بهبود جزئی', all: 18, remediated: 10 },
    { name: 'نیاز بهبود جدی', all: 12, remediated: 5 },
    { name: 'غیرقابل‌قبول', all: 8, remediated: 2 },
];

export const PLANNING_PROCESS_DATA = [
    { name: 'خرید و تدارکات', value: 28, fill: '#1a365d' },
    { name: 'فروش', value: 22, fill: '#2c5282' },
    { name: 'منابع انسانی', value: 14, fill: '#2b6cb0' },
    { name: 'خزانه‌داری', value: 20, fill: '#3182ce' },
    { name: 'انبار', value: 10, fill: '#4299e1' },
    { name: 'تولید', value: 16, fill: '#63b3ed' },
    { name: 'IT', value: 8, fill: '#90cdf4' },
    { name: 'حقوقی', value: 6, fill: '#bee3f8' },
];

export const PLANNING_LOCATION_DATA = [
    { id: 'IR', value: 100 } // Mock for map
];

export const PLANNING_BUBBLE_DATA = [
    { x: 1, y: 1, z: 50, fill: '#1f77b4', name: 'واحد فروش' },
    { x: 1.5, y: 2, z: 80, fill: '#ff7f0e', name: 'واحد خرید' },
    { x: 2, y: 1.5, z: 60, fill: '#2ca02c', name: 'انبار' },
    { x: 2.5, y: 3, z: 100, fill: '#d62728', name: 'خزانه' },
    { x: 3, y: 2.5, z: 70, fill: '#9467bd', name: 'تولید' },
    { x: 3.5, y: 1, z: 40, fill: '#8c564b', name: 'منابع انسانی' },
];

// --- EXECUTIVE DASHBOARD DATA (Dark Theme) ---
export const EXECUTIVE_STATS = [
  { title: "کل بودجه حسابرسی‌شده", value: "۱۲۵,۰۰۰", suffix: "میلیارد تومان", change: "+۱۲٪", icon: "money" },
  { title: "پرونده‌های در جریان", value: "۱,۴۰۲", suffix: "مورد", change: "+۵٪", icon: "doc" },
  { title: "انحرافات مالی کشف‌شده", value: "۳۲", suffix: "مورد بحرانی", change: "-۲٪", icon: "alert" },
  { title: "صرفه‌جویی مالیاتی", value: "۸۵۰", suffix: "میلیون تومان", change: "+۱۸٪", icon: "chart" }
];

export const EXECUTIVE_OVERVIEW_DATA = [
  { name: 'فروردین', audit: 4000, fraud: 2400 },
  { name: 'اردیبهشت', audit: 3000, fraud: 1398 },
  { name: 'خرداد', audit: 2000, fraud: 9800 },
  { name: 'تیر', audit: 2780, fraud: 3908 },
  { name: 'مرداد', audit: 1890, fraud: 4800 },
  { name: 'شهریور', audit: 2390, fraud: 3800 },
  { name: 'مهر', audit: 3490, fraud: 4300 },
];

export const EXECUTIVE_YEARLY_DATA = [
  { name: 'فروردین', audit: 4000, fraud: 2400 },
  { name: 'اردیبهشت', audit: 3000, fraud: 1398 },
  { name: 'خرداد', audit: 2000, fraud: 9800 },
  { name: 'تیر', audit: 2780, fraud: 3908 },
  { name: 'مرداد', audit: 1890, fraud: 4800 },
  { name: 'شهریور', audit: 2390, fraud: 3800 },
  { name: 'مهر', audit: 3490, fraud: 4300 },
  { name: 'آبان', audit: 4100, fraud: 2100 },
  { name: 'آذر', audit: 3200, fraud: 1500 },
  { name: 'دی', audit: 2800, fraud: 3200 },
  { name: 'بهمن', audit: 3600, fraud: 2800 },
  { name: 'اسفند', audit: 4500, fraud: 1200 },
];

export const EXECUTIVE_TARGET_DATA = [
  { name: 'تطبیق مالیاتی', target: 4000, reality: 2400 },
  { name: 'کنترل داخلی', target: 3000, reality: 1398 },
  { name: 'مدیریت ریسک', target: 2000, reality: 9800 },
  { name: 'مبارزه با پولشویی', target: 2780, reality: 3908 },
  { name: 'شفافیت صورت‌مالی', target: 1890, reality: 4800 },
];

export const EXECUTIVE_TOP_RISKS = [
  { id: 1, name: "واحد تدارکات و خرید", popularity: 85, color: "#4ab58e" },
  { id: 2, name: "واحد فروش خارجی", popularity: 65, color: "#ffcf00" },
  { id: 3, name: "مدیریت پیمانکاران", popularity: 45, color: "#ffa800" },
  { id: 4, name: "خزانه و نقدینگی", popularity: 30, color: "#ff5b5b" },
];

// --- NEW REAL-TIME DATA SIMULATION ---
export const LIVE_STREAM_DATA = Array.from({ length: 60 }, (_, i) => {
  const baseValue = 5000 + Math.random() * 2000;
  return {
    time: `10:${i < 10 ? '0' + i : i}`,
    amount: Math.floor(baseValue),
    risk: Math.floor(Math.random() * 100),
    anomalyScore: Math.random() > 0.9 ? 1 : 0, // 10% chance of anomaly
    high: baseValue + Math.random() * 500,
    low: baseValue - Math.random() * 500,
    open: baseValue - 200,
    close: baseValue + 200,
  };
});

// --- STEEL ONLINE DASHBOARD DATA ---
export const STEEL_CHECK_FLOW = [
    { name: 'چک‌های دریافتی', value: 850, fill: '#009787' },
    { name: 'چک‌های پرداختی', value: 420, fill: '#D41F5B' },
    { name: 'واگذار شده (خرج‌شده)', value: 310, fill: '#f59e0b' },
    { name: 'برگشتی', value: 45, fill: '#dc3545' },
];

export const STEEL_MATURITY_DATA = [
    { name: 'هفته جاری', inflow: 12000, outflow: 8000 },
    { name: 'هفته آینده', inflow: 15000, outflow: 11000 },
    { name: '۲ هفته آینده', inflow: 9000, outflow: 14000 },
    { name: 'ماه آینده', inflow: 22000, outflow: 18000 },
];

export const STEEL_PARTNER_TRUST = [
    { name: 'آهن‌فروشی برادران کریمی', score: 95, status: 'safe' },
    { name: 'شرکت فولاد گستر', score: 88, status: 'safe' },
    { name: 'بازرگانی آهن غرب', score: 65, status: 'warning' },
    { name: 'سازه‌های فلزی البرز', score: 40, status: 'risk' },
    { name: 'پروژه ساختمانی ونک', score: 92, status: 'safe' },
];

export const STEEL_CHECK_STATUS_DATA = [
    { name: 'پاس شده', value: 65, fill: '#10b981' },
    { name: 'در جریان وصول', value: 20, fill: '#3b82f6' },
    { name: 'برگشتی', value: 5, fill: '#ef4444' },
    { name: 'عودت داده شده', value: 10, fill: '#6c757d' },
];

// --- STEEL ONLINE NEW MOCK DATA ---
export const STEEL_ALERTS = [
  { id: 1, type: 'danger', message: 'چک شرکت آلفا فردا سررسید می‌شود - ۵۰۰,۰۰۰,۰۰۰ ریال', date: 'امروز' },
  { id: 2, type: 'warning', message: '۳ چک در ۵ روز آینده سررسید دارند', date: 'امروز' },
  { id: 3, type: 'danger', message: 'چک آقای محمدی برگشت خورد - پیگیری فوری', date: 'دیروز' },
  { id: 4, type: 'warning', message: 'سقف اعتبار شرکت بتا پر شده است', date: 'دیروز' },
  { id: 5, type: 'success', message: 'چک ۵۰۰ میلیونی وصول شد - بانک ملت', date: '۲ روز پیش' },
];

export const STEEL_CHECKS_LIST = [
  { id: '852364', issuer: 'شرکت آلفا عمران', bank: 'ملت', branch: 'جردن', amount: 500000000, issueDate: '1404/02/10', dueDate: '1404/03/16', status: 'pending', daysLeft: 1 },
  { id: '125487', issuer: 'آقای محمد رضایی', bank: 'ملی', branch: 'ونک', amount: 200000000, issueDate: '1404/02/15', dueDate: '1404/03/18', status: 'pending', daysLeft: 3 },
  { id: '963258', issuer: 'شرکت بتا صنعت', bank: 'صادرات', branch: 'آزادی', amount: 300000000, issueDate: '1404/01/20', dueDate: '1404/03/18', status: 'transferred', daysLeft: 3 },
  { id: '741258', issuer: 'شرکت گاما', bank: 'تجارت', branch: 'مرکزی', amount: 800000000, issueDate: '1404/01/05', dueDate: '1404/03/25', status: 'pending', daysLeft: 10 },
  { id: '369852', issuer: 'آقای احمدی', bank: 'ملت', branch: 'شریعتی', amount: 150000000, issueDate: '1403/12/10', dueDate: '1404/02/10', status: 'cleared', daysLeft: 0 },
  { id: '147852', issuer: 'شرکت دلتا', bank: 'پاسارگاد', branch: 'جردن', amount: 2300000000, issueDate: '1404/01/15', dueDate: '1404/03/10', status: 'bounced', daysLeft: -6 },
];

export const STEEL_CUSTOMERS_CREDIT = [
  { name: 'شرکت آلفا', limit: 5000000000, used: 4800000000, activeChecks: 3, status: 'danger' },
  { name: 'شرکت بتا', limit: 3000000000, used: 1500000000, activeChecks: 2, status: 'success' },
  { name: 'آقای احمدی', limit: 1000000000, used: 800000000, activeChecks: 1, status: 'warning' },
  { name: 'بازرگانی آهن غرب', limit: 2000000000, used: 2100000000, activeChecks: 5, status: 'danger' },
];

export const STEEL_TRANSACTIONS_RECENT = [
  { date: '1404/03/15', desc: 'دریافت چک - شرکت گاما', type: 'in', amount: 800000000, balance: 12800000000 },
  { date: '1404/03/14', desc: 'پرداخت به تامین‌کننده', type: 'out', amount: 1200000000, balance: 12000000000 },
  { date: '1404/03/12', desc: 'وصول چک آقای کریمی', type: 'in', amount: 450000000, balance: 13200000000 },
  { date: '1404/03/10', desc: 'خرید میلگرد (پیش‌پرداخت)', type: 'out', amount: 500000000, balance: 12750000000 },
];

export const STEEL_FRIENDS_LIST = [
  { id: 1, name: 'آقای محمدی', company: 'شرکت تامین فولاد', phone: '09121234567', rating: 5, checksTransferred: 12, transferredAmount: 8500000000, successful: 11, bounced: 1, currentChecks: [{amount: 500000000, due: '1404/04/15'}, {amount: 300000000, due: '1404/04/20'}] },
  { id: 2, name: 'خانم احمدی', company: 'کارمند بانک ملت', phone: '09129876543', rating: 4, checksTransferred: 8, transferredAmount: 4500000000, successful: 6, bounced: 0, currentChecks: [] },
  { id: 3, name: 'آقای رضایی', company: 'واسطه بازار', phone: '09125554433', rating: 3, checksTransferred: 5, transferredAmount: 2100000000, successful: 3, bounced: 1, currentChecks: [{amount: 200000000, due: '1404/05/01'}] },
];

export const STEEL_PRODUCTS = [
  { id: 1, name: 'میلگرد ۱۴ اصفهان', price: 24500, unit: 'کیلوگرم', category: 'rebar', image: 'https://placehold.co/300x200/2c3e50/ffffff?text=Rebar+14' },
  { id: 2, name: 'تیرآهن ۱۸ ذوب آهن', price: 28900, unit: 'کیلوگرم', category: 'beam', image: 'https://placehold.co/300x200/2c3e50/ffffff?text=Beam+18' },
  { id: 3, name: 'ورق سیاه ۲ میل فولاد', price: 31000, unit: 'کیلوگرم', category: 'sheet', image: 'https://placehold.co/300x200/2c3e50/ffffff?text=Sheet+2mm' },
  { id: 4, name: 'پروفیل ۴۰×۴۰ ضخامت ۲', price: 34500, unit: 'کیلوگرم', category: 'profile', image: 'https://placehold.co/300x200/2c3e50/ffffff?text=Profile+40x40' },
  { id: 5, name: 'نبشی ۴×۴۰×۴۰ شکفته', price: 26800, unit: 'کیلوگرم', category: 'angle', image: 'https://placehold.co/300x200/2c3e50/ffffff?text=Angle+4' },
  { id: 6, name: 'ناودانی ۱۰ اروپایی', price: 29500, unit: 'کیلوگرم', category: 'channel', image: 'https://placehold.co/300x200/2c3e50/ffffff?text=Channel+10' },
];

// Steel Market AI Data
export const STEEL_MARKET_PRICES = [
    { id: 1, name: 'میلگرد ۱۴ اصفهان', current: 24500, change: 1.2, trend: 'up', history: [24000, 24100, 24300, 24200, 24500] },
    { id: 2, name: 'تیرآهن ۱۸ ذوب', current: 28900, change: -0.5, trend: 'down', history: [29000, 29100, 29050, 28950, 28900] },
    { id: 3, name: 'ورق سیاه ۲ میل', current: 31000, change: 0.0, trend: 'flat', history: [31000, 31000, 31000, 31000, 31000] },
];

export const STEEL_AI_PREDICTION = [
    { day: 'امروز', actual: 24500, predicted: 24500 },
    { day: 'فردا', actual: null, predicted: 24700 },
    { day: '۲ روز بعد', actual: null, predicted: 24900 },
    { day: '۳ روز بعد', actual: null, predicted: 25100 },
    { day: '۴ روز بعد', actual: null, predicted: 25000 },
    { day: '۵ روز بعد', actual: null, predicted: 24800 },
    { day: '۶ روز بعد', actual: null, predicted: 24600 },
];

export const MARKET_SENTIMENT_DRIVERS = [
    { name: 'نرخ ارز (دلار)', impact: 'High', sentiment: 'Bearish', score: 30 },
    { name: 'قیمت جهانی بیلت', impact: 'Medium', sentiment: 'Bullish', score: 75 },
    { name: 'تقاضای مسکن', impact: 'High', sentiment: 'Neutral', score: 50 },
    { name: 'صادرات فولاد', impact: 'Medium', sentiment: 'Bullish', score: 80 },
];