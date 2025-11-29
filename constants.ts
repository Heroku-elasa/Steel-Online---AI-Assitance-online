




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
  { name: 'بالا', value: 47, fill: '#ff7f0e' },
  { name: 'متوسط', value: 25, fill: '#2ca02c' },
  { name: 'پایین', value: 28, fill: '#1f77b4' }
];

export const PLANNING_STATUS_DATA = [
  { name: 'تکمیل‌شده', value: 92, fill: '#1f4e5f' },
  { name: 'در جریان', value: 4, fill: '#6baed6' },
  { name: 'شروع نشده', value: 4, fill: '#fd8d3c' }
];

export const PLANNING_RESULTS_DATA = [
  { name: 'غیرقابل‌قبول', value: 22, fill: '#1f4e5f' },
  { name: 'نیاز به بهبود جدی', value: 36, fill: '#6baed6' },
  { name: 'نیاز به بهبود جزئی', value: 25, fill: '#ff9800' },
  { name: 'رضایت‌بخش', value: 17, fill: '#f6c18d' }
];

export const PLANNING_OBSERVATIONS_DATA = [
    { name: 'رضایت‌بخش', all: 72, remediated: 83 },
    { name: 'نیاز به بهبود جزئی', all: 120, remediated: 154 },
    { name: 'نیاز به بهبود جدی', all: 165, remediated: 212 },
    { name: 'غیرقابل‌قبول', all: 121, remediated: 149 },
];

export const PLANNING_PROCESS_DATA = [
    { name: 'خرید و تدارکات', value: 5, fill: '#8884d8' },
    { name: 'فروش', value: 10, fill: '#83a6ed' },
    { name: 'منابع انسانی', value: 15, fill: '#8dd1e1' },
    { name: 'خزانه‌داری', value: 20, fill: '#82ca9d' },
    { name: 'انبار', value: 25, fill: '#a4de6c' },
    { name: 'تولید', value: 18, fill: '#d0ed57' },
    { name: 'فناوری اطلاعات', value: 12, fill: '#ffc658' },
    { name: 'حقوقی', value: 8, fill: '#ff8042' },
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