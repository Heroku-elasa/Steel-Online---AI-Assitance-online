


import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { 
  STEEL_CHECK_FLOW, STEEL_MATURITY_DATA, STEEL_PARTNER_TRUST, STEEL_CHECK_STATUS_DATA 
} from '../constants';

const SteelOnline: React.FC = () => {
  const [viewMode, setViewMode] = useState<'storefront' | 'dashboard'>('storefront');
  const [activeSlide, setActiveSlide] = useState(0);
  const [splitFlapPrices, setSplitFlapPrices] = useState([
    { id: 'sp-0', price: '374545', name: 'میلگرد آجدار شاهین بناب 14 A3' },
    { id: 'sp-1', price: '590909', name: 'پروفیل 40*40 ضخامت 2' },
    { id: 'sp-2', price: '570909', name: 'ورق سیاه 3 فولاد مبارکه' },
  ]);

  // --- Split Flap Animation Logic ---
  useEffect(() => {
    const interval = setInterval(() => {
        setSplitFlapPrices(prev => prev.map(p => ({
            ...p,
            price: (parseInt(p.price) + Math.floor(Math.random() * 1000 - 500)).toString()
        })));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-background overflow-x-hidden font-sans text-[#292929] dir-rtl">
      
      {/* --- CUSTOM CSS INJECTION --- */}
      <style>{`
        .bg-background { background-color: #f5f5f7; }
        .text-ctaLightRed { color: #D41F5B; }
        .bg-ctaLightRed { background-color: #D41F5B; }
        .font-Bold { font-weight: 700; }
        .font-SemiBold { font-weight: 600; }
        
        .splitflap { 
            position: relative; 
            min-width: 30px; 
            height: 46px; 
            margin: 2px; 
            line-height: 46px; 
            font-size: 24px; 
            text-align: center; 
            color: #000; 
            background: #fff;
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
            font-family: monospace;
        }
        
        /* Clock Animation */
        .clock {
            width: 300px; height: 300px;
            position: absolute; right: -30px; bottom: -140px;
            border-radius: 50%;
            border: 4px solid #fff;
            background: rgba(255,255,255,0.1);
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .clock .hour, .clock .min, .clock .sec {
            position: absolute; bottom: 50%; left: 50%;
            transform-origin: bottom center;
            background: #fff;
        }
        .clock .hour { height: 60px; width: 4px; margin-left: -2px; }
        .clock .min { height: 90px; width: 3px; margin-left: -1.5px; }
        .clock .sec { height: 100px; width: 1px; background: red; margin-left: -0.5px; }

        .dir-rtl { direction: rtl; }
      `}</style>

      {/* --- HEADER --- */}
      <div className="w-full shadow-md fixed top-0 z-40 bg-white h-[60px] flex items-center justify-between px-4">
         <div className="flex items-center gap-4">
             <div className="text-[#514E46] text-2xl cursor-pointer">☰</div>
             <a href="#" className="font-bold text-xl text-[#7F0031]">استیل آنلاین ۲۰</a>
         </div>
         
         {/* View Mode Toggle */}
         <div className="hidden md:flex bg-[#f5f5f7] p-1 rounded-lg">
             <button 
                onClick={() => setViewMode('storefront')}
                className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${viewMode === 'storefront' ? 'bg-[#7F0031] text-white shadow' : 'text-[#514E46] hover:bg-gray-200'}`}
             >
                 فروشگاه آنلاین
             </button>
             <button 
                onClick={() => setViewMode('dashboard')}
                className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${viewMode === 'dashboard' ? 'bg-[#009787] text-white shadow' : 'text-[#514E46] hover:bg-gray-200'}`}
             >
                 پنل مالی و چک
             </button>
         </div>

         <div className="flex items-center gap-4">
             <a href="tel:02154712" className="flex flex-col items-center">
                 <span className="text-[0.8rem] text-[#514E46]">تماس جهت خرید</span>
                 <span className="text-[0.9rem] text-[#009787] font-bold">021-54712</span>
             </a>
             <div className="w-8 h-8 bg-[#00D3BD] rounded-full flex items-center justify-center text-white">
                 📞
             </div>
         </div>
      </div>

      <div className="mt-[60px]"></div>

      {viewMode === 'storefront' ? (
        <>
            {/* --- HERO SLIDER (Simulated) --- */}
            <div className="relative w-full h-[200px] md:h-[400px] bg-gray-200 overflow-hidden group">
                {/* Slide 1 */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-full h-full bg-gradient-to-r from-[#2c3e50] to-[#3498db] flex items-center justify-center text-white text-3xl font-bold">
                        تضمین بهترین قیمت آهن‌آلات
                    </div>
                </div>
                {/* Slide 2 */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-full h-full bg-gradient-to-r from-[#c0392b] to-[#e74c3c] flex items-center justify-center text-white text-3xl font-bold">
                        خرید اعتباری و اقساطی
                    </div>
                </div>

                {/* Controls */}
                <button onClick={() => setActiveSlide(0)} className="absolute bottom-4 right-1/2 translate-x-4 w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100"></button>
                <button onClick={() => setActiveSlide(1)} className="absolute bottom-4 left-1/2 -translate-x-4 w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100"></button>
            </div>

            {/* --- POPULAR PRODUCTS --- */}
            <div className="my-6 mx-4">
                <h2 className="text-center font-bold text-lg mb-4 text-[#514E46]">محصولات پرطرفدار</h2>
                <div className="grid grid-cols-2 gap-4">
                    {['میلگرد', 'ورق', 'پروفیل', 'تیرآهن'].map((item, idx) => (
                        <div key={idx} className="relative h-[120px] rounded-lg overflow-hidden cursor-pointer group">
                            <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-500"></div>
                            <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-4">
                                <span className="text-white font-bold text-lg">{item}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- SPLIT FLAP SECTION (The "Professional" Part) --- */}
            <section className="min-h-[500px] py-[40px] relative bg-gradient-to-l from-[#6B0029] to-[#620025] overflow-hidden">
                {/* Animated Clock Background */}
                <div className="clock opacity-20">
                    <div className="hour" style={{transform: 'rotate(45deg)'}}></div>
                    <div className="min" style={{transform: 'rotate(180deg)'}}></div>
                    <div className="sec animate-spin" style={{animationDuration: '60s'}}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-white text-right mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">با <span className="text-[#00D3BD]">حرفه‌ای‌ها</span> خرید کنید.</h2>
                        <p className="text-lg opacity-80">مشاهده لحظه‌ای قیمت‌ها در تابلوی اختصاصی استیل آنلاین</p>
                    </div>

                    {/* Price Boards Slider */}
                    <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
                        {splitFlapPrices.map((item, idx) => (
                            <div key={idx} className="min-w-[300px] md:min-w-[400px] snap-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                                <h3 className="text-white text-2xl font-bold mb-2">{item.name.split(' ')[0]}</h3>
                                <p className="text-white/70 text-sm mb-6">{item.name}</p>
                                
                                <div className="mb-8">
                                    <p className="text-white text-sm mb-2">قیمت همین لحظه (ریال)</p>
                                    <div className="flex justify-center dir-ltr gap-1">
                                        {item.price.split('').map((digit, dIdx) => (
                                            <div key={dIdx} className="splitflap">
                                                {digit}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full py-3 rounded border border-[#00E8CE] text-[#00E8CE] font-bold hover:bg-[#00E8CE] hover:text-[#6B0029] transition-colors">
                                    مشاهده لیست قیمت
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SEO CONTENT & FAQ --- */}
            <section className="py-10 px-6 bg-[#F5F5F7]">
                <div className="container mx-auto">
                    <h2 className="text-xl font-bold text-[#292929] mb-4">قیمت روز آهن آلات</h2>
                    <div className="text-sm text-[#5F5F5F] leading-7 text-justify mb-6">
                        <p>
                            مجموعه استیل آنلاین ۲۰، فعالیت حرفه‌ای خود را در زمینه تسهیل خرید و فروش آهن‌آلات آغاز نمود.
                            ما با ارائه قیمت‌های لحظه‌ای و شفاف، گامی مهم در جهت شفاف‌سازی بازار آهن برداشته‌ایم.
                            تامین سریع انواع میلگرد، تیرآهن، ورق و پروفیل از برندهای معتبر ذوب‌آهن، فولاد مبارکه و... تخصص ماست.
                        </p>
                    </div>

                    <h3 className="font-bold text-[#292929] mb-3">سوالات متداول</h3>
                    <ul className="list-disc pr-5 space-y-4 text-sm text-[#5F5F5F]">
                        <li>
                            <span className="font-bold text-[#656565]">نحوه خرید چگونه است؟</span>
                            <p className="mt-1">برای خرید، ابتدا محصول را در لیست قیمت بیابید و با کارشناسان ما (021-54712) تماس بگیرید.</p>
                        </li>
                        <li>
                            <span className="font-bold text-[#656565]">تفاوت قیمت بورس و بازار؟</span>
                            <p className="mt-1">قیمت بورس بر اساس عرضه و تقاضای کلان تعیین می‌شود و معمولاً کمی بالاتر از کف بازار است.</p>
                        </li>
                    </ul>
                </div>
            </section>

            {/* --- BLOG SECTION --- */}
            <section className="py-10 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h4 className="font-bold text-[#495057]">آخرین مقالات</h4>
                        <a href="#" className="text-[#D41F5B] text-sm flex items-center gap-1">همه مقالات ←</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-40 bg-gray-300"></div>
                                <div className="p-4">
                                    <h5 className="font-bold text-sm text-[#3a3a3a] mb-2">راهنمای خرید میلگرد در سال ۱۴۰۴</h5>
                                    <p className="text-xs text-[#616161] line-clamp-2">بررسی جامع بازار فولاد و پیش‌بینی قیمت‌ها در سه ماهه آینده...</p>
                                    <div className="mt-3 text-xs text-gray-400">۲ روز پیش</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
      ) : (
        // --- DASHBOARD VIEW (INTERNAL) ---
        <div className="p-6 bg-[#f0f2f5] min-h-screen pb-32">
            <div className="container mx-auto">
                
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-[#292929]">مدیریت اسناد دریافتنی و اعتبارات (استیل آنلاین)</h1>
                    <p className="text-sm text-gray-500">پایش چک‌ها، راس‌گیری، خرج چک و اعتبارسنجی شرکا</p>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xs text-gray-500 mb-1">کل چک‌های نزد صندوق</h3>
                        <p className="text-2xl font-bold text-[#009787]">۱۸۵ فقره</p>
                        <p className="text-xs text-green-600 mt-1">۱۲.۵ میلیارد تومان</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xs text-gray-500 mb-1">چک‌های سررسید هفته جاری</h3>
                        <p className="text-2xl font-bold text-[#f59e0b]">۱۴ فقره</p>
                        <p className="text-xs text-gray-600 mt-1">۸۵۰ میلیون تومان</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xs text-gray-500 mb-1">واگذار شده به شرکا (خرج چک)</h3>
                        <p className="text-2xl font-bold text-[#7F0031]">۴۲ فقره</p>
                        <p className="text-xs text-red-400 mt-1">۴.۲ میلیارد تومان</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-xs text-gray-500 mb-1">نسبت چک برگشتی (ماه)</h3>
                        <p className="text-2xl font-bold text-gray-800">۲.۴٪</p>
                        <p className="text-xs text-green-600 mt-1">کاهش نسبت به ماه قبل</p>
                    </div>
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    
                    {/* Check Flow Bar Chart */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-[350px]">
                        <h3 className="font-bold text-gray-800 mb-6 text-sm">جریان نقدینگی چک (Inflow vs Outflow)</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={STEEL_MATURITY_DATA}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                <XAxis dataKey="name" tick={{fontSize: 12, fontFamily: 'Vazirmatn'}} axisLine={false} tickLine={false} />
                                <YAxis tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{borderRadius: '8px', fontFamily: 'Vazirmatn'}} />
                                <Legend wrapperStyle={{fontFamily: 'Vazirmatn', fontSize: '12px'}} />
                                <Bar dataKey="inflow" name="وصولی (سررسید)" fill="#009787" radius={[4, 4, 0, 0]} barSize={20} />
                                <Bar dataKey="outflow" name="پرداختی (پ