
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage, PageKey } from '../types';

interface HomePageProps {
    setPage: (page: 'home' | PageKey) => void;
    onOpenAIGuide: () => void;
}

const ServiceCard: React.FC<{ icon: React.ReactElement; title: string; description: string; onClick: () => void; image: string }> = ({ icon, title, description, onClick, image }) => (
  <button onClick={onClick} className="group text-center p-0 space-y-0 bg-white dark:bg-[#1F1F1F] border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-brand-gold transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/10 w-full flex flex-col overflow-hidden h-full">
    <div className="w-full h-48 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end p-4">
             <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-brand-gold/90 text-brand-blue shadow-lg backdrop-blur-md transform translate-y-0 transition-transform duration-300 group-hover:-translate-y-2">
                {React.cloneElement(icon, { className: "h-6 w-6" })}
            </div>
        </div>
    </div>
    <div className="p-6 flex flex-col flex-grow items-start text-right w-full">
        <h4 className="text-xl font-bold text-gray-900 dark:text-white transition-colors group-hover:text-brand-gold mb-3">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify line-clamp-3">{description}</p>
        <div className="mt-auto pt-4 flex items-center text-brand-gold text-sm font-bold opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2 rtl:group-hover:-translate-x-2">
            مشاهده جزئیات
            <svg className="w-4 h-4 mr-2 rtl:mr-2 rtl:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </div>
    </div>
  </button>
);

const ProcessStep: React.FC<{ number: string; title: string; desc: string }> = ({ number, title, desc }) => (
    <div className="flex flex-col items-center text-center space-y-4 relative z-10">
        <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center text-brand-blue text-2xl font-bold shadow-lg shadow-brand-gold/30">
            {number}
        </div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs">{desc}</p>
    </div>
);

const ReviewCard: React.FC<{ name: string; role: string; text: string; stars: number }> = ({ name, role, text, stars }) => (
    <div className="bg-white dark:bg-[#1F1F1F] p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-brand-gold/50 transition-colors shadow-sm dark:shadow-none h-full flex flex-col">
        <div className="flex text-brand-gold mb-4 space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < stars ? 'fill-current' : 'text-gray-300 dark:text-gray-700'}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.603 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-loose flex-grow">"{text}"</p>
        <div className="text-right rtl:text-left pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
            <h5 className="text-brand-gold font-bold text-sm">{name}</h5>
            <span className="text-xs text-gray-500">{role}</span>
        </div>
    </div>
);

const FAQSection: React.FC = () => {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const faqItems: { q: string; a: string }[] = t('faq.items');

    return (
        <section className="py-24 bg-gray-50 dark:bg-[#111827] transition-colors border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{t('faq.title')}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{t('faq.subtitle')}</p>
                </div>
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1F1F1F] overflow-hidden transition-all hover:border-brand-gold/30">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-5 text-right rtl:text-right ltr:text-left font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                            >
                                <span>{item.q}</span>
                                <svg className={`w-5 h-5 text-brand-gold transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-5 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700/50">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HomePage: React.FC<HomePageProps> = ({ setPage, onOpenAIGuide }) => {
  const { t } = useLanguage();
  const [activeLogIndex, setActiveLogIndex] = useState(0);
  const [systemLoad, setSystemLoad] = useState(78);
  const [processedCount, setProcessedCount] = useState(1245);
  const scrollRef = useRef<HTMLDivElement>(null);

  const logs = [
      "در حال استعلام قیمت لحظه‌ای...",
      "بروزرسانی موجودی انبار...",
      "محاسبه هزینه حمل و نقل...",
      "تحلیل نمودار نوسانات بازار...",
      "بررسی کیفیت بارهای ورودی...",
      "صدور پیش‌فاکتورهای سیستمی..."
  ];

  useEffect(() => {
      const interval = setInterval(() => {
          setActiveLogIndex((prev) => (prev + 1) % logs.length);
          setSystemLoad(Math.floor(Math.random() * (95 - 60 + 1) + 60)); // Random between 60 and 95
          setProcessedCount(prev => prev + (Math.random() > 0.7 ? 1 : 0));
      }, 2500);
      return () => clearInterval(interval);
  }, []);

  const services = [
    {
        key: 'court_assistant',
        title: t('courtAssistant.title'),
        description: t('courtAssistant.subtitle'),
        image: 'https://images.weserv.nl/?url=images.unsplash.com/photo-1554200876-56c2f25224fa&w=600&q=80',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    { 
        key: 'legal_drafter', 
        title: t('header.aiAssistant'), 
        description: 'صدور پیش‌فاکتور آنی، قراردادهای خرید و اسناد تجاری با هوش مصنوعی', 
        image: 'https://images.weserv.nl/?url=images.unsplash.com/photo-1554224155-8d04cb21cd6c&w=600&q=80',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> 
    },
    { 
        key: 'contract_analyzer', 
        title: t('header.contractAnalyzer'), 
        description: 'بررسی و تحلیل قراردادهای خرید و فروش آهن و شرایط تحویل', 
        image: 'https://images.weserv.nl/?url=images.unsplash.com/photo-1450101499163-c8848c66ca85&w=600&q=80',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg> 
    },
    { 
        key: 'lawyer_finder', 
        title: t('header.lawyerFinder'), 
        description: 'یافتن بهترین تامین‌کنندگان و کارخانه‌های فولاد در سراسر کشور', 
        image: 'https://images.weserv.nl/?url=images.unsplash.com/photo-1504917595217-d4dc5ebe6122&w=600&q=80',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> 
    },
    { 
        key: 'corporate_services', 
        title: t('header.corporateServices'), 
        description: 'خدمات ویژه شرکت‌های ساختمانی و بازرگانی (B2B)', 
        image: 'https://images.weserv.nl/?url=images.unsplash.com/photo-1486406146926-c627a92ad1ab&w=600&q=80',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> 
    },
    { 
        key: 'insurance_services', 
        title: t('header.insuranceServices'), 
        description: 'بیمه حمل و نقل بار و مدیریت ریسک لجستیک', 
        image: 'https://images.weserv.nl/?url=images.unsplash.com/photo-1586528116311-ad8dd3c8310d&w=600&q=80',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg> 
    },
    { 
        key: 'notary_finder', 
        title: t('header.notaryFinder'), 
        description: 'یافتن انبارها، باربری‌ها و خدمات لجستیک فولاد', 
        image: 'https://images.weserv.nl/?url=images.unsplash.com/photo-1553413077-190dd305871c&w=600&q=80',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> 
    }
  ];

  const processSteps = t('home.process.steps');
  const reviews = t('home.reviews.items');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
        const { current } = scrollRef;
        const cardWidth = current.firstElementChild?.clientWidth || 300;
        const gap = 32; 
        const scrollAmount = cardWidth + gap;
        
        const left = direction === 'left' 
            ? current.scrollLeft - scrollAmount 
            : current.scrollLeft + scrollAmount;
            
        current.scrollTo({ left, behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in bg-gray-50 dark:bg-[#111827] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0 opacity-40" style={{backgroundImage: 'url(https://images.weserv.nl/?url=images.unsplash.com/photo-1535626787990-2c2976d46a72&w=1920&q=80)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-0 dark:from-[#111827] dark:via-[#111827]/80"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 text-right rtl:text-right ltr:text-left space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-sm font-semibold mb-2">
                    <span className="w-2 h-2 rounded-full bg-brand-gold ml-2 rtl:ml-2 ltr:mr-2 animate-pulse"></span>
                    {t('home.subtitle')}
                </div>
                <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight text-white">
                    <span className="text-brand-gold">{t('home.title').split(' ')[0]}</span> {t('home.title').split(' ').slice(1).join(' ')}
                </h1>
                <p className="text-xl text-gray-300 dark:text-gray-400 max-w-2xl leading-relaxed">
                    {t('home.servicesSubtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button onClick={onOpenAIGuide} className="px-8 py-4 bg-brand-gold text-brand-blue font-bold rounded-xl hover:bg-white transition-all text-lg shadow-[0_0_20px_rgba(234,88,12,0.3)] transform hover:-translate-y-1">
                        {t('home.cta.main')}
                    </button>
                    <button className="px-8 py-4 bg-transparent border-2 border-gray-400 dark:border-gray-600 text-white font-bold rounded-xl hover:border-brand-gold hover:text-brand-gold transition-all text-lg flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                        {t('home.cta.call')}
                    </button>
                </div>
            </div>
            
            <div className="w-full lg:w-1/2 relative">
                 {/* Visual element representing Steel + Tech */}
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 dark:bg-[#1F1F1F] p-2">
                    <img src="https://images.weserv.nl/?url=images.unsplash.com/photo-1504917595217-d4dc5ebe6122&w=800&q=80" alt="انبار مرکزی استیل آنلاین" className="rounded-xl opacity-90 w-full object-cover h-[400px] lg:h-[500px]" loading="lazy" />
                    {/* Professional Overlay Card */}
                    <div className="absolute bottom-6 right-6 left-6 bg-[#111827]/95 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold text-lg">پنل معاملات استیل آنلاین</h3>
                                <p className="text-gray-400 text-xs mt-1">تحلیلگر بازار و قیمت لحظه‌ای</p>
                            </div>
                            {/* Status Badge */}
                            <div className="flex items-center gap-2 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-md">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] font-medium text-green-400">بازار باز</span>
                            </div>
                        </div>
                        
                        {/* Progress Bar Area */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-wider">
                                <div className="flex items-center gap-2">
                                    <span>ترافیک سرور</span>
                                    <span className="text-brand-gold font-mono">{systemLoad}%</span>
                                </div>
                                <span className="font-mono text-gray-500">TXN: {processedCount.toLocaleString()}</span>
                            </div>
                            <div className="h-1.5 bg-gray-700 rounded-full w-full overflow-hidden">
                                <div 
                                    className="h-full bg-brand-gold transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(234,88,12,0.5)]"
                                    style={{ width: `${systemLoad}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Terminal-like Status Text */}
                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                            <span className="truncate pr-2">{logs[activeLogIndex]}</span>
                            <span className="text-brand-gold">v3.0.1</span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-[#1F1F1F] transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('home.servicesTitle')}</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t('home.servicesSubtitle')}</p>
                </div>
                <div className="hidden md:flex gap-2">
                    <button onClick={() => scroll('right')} className="p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"><svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
                    <button onClick={() => scroll('left')} className="p-3 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
                </div>
            </div>

            {/* Scrollable Cards Container */}
            <div 
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
            >
                {services.map((service) => (
                    <div key={service.key} className="min-w-[280px] sm:min-w-[320px] md:min-w-[350px] snap-center h-[420px]">
                        <ServiceCard 
                            icon={service.icon} 
                            title={service.title} 
                            description={service.description} 
                            image={service.image}
                            onClick={() => setPage(service.key as PageKey)} 
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-[#111827] transition-colors relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30 dark:opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('home.process.title')}</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t('home.process.subtitle')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>
                
                {processSteps.map((step, index) => (
                    <ProcessStep 
                        key={index} 
                        number={(index + 1).toString()} 
                        title={step.title} 
                        desc={step.desc} 
                    />
                ))}
            </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white dark:bg-[#1F1F1F] transition-colors border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('home.reviews.title')}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{t('home.reviews.subtitle')}</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-2 rtl:space-x-reverse overflow-hidden">
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        <span className="text-brand-gold font-bold">+۵۰۰</span> مشتری راضی
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <ReviewCard 
                        key={index} 
                        name={review.name} 
                        role={review.role} 
                        text={review.text} 
                        stars={5} 
                    />
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Map Section */}
      <section className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.488734926948!2d51.413557!3d35.712822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzQ2LjIiTiA1McKwMjQnNDguOCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={t('home.location.mapAlt')}
            className="w-full h-full"
         ></iframe>
         <div className="absolute top-4 right-4 bg-white dark:bg-[#1F1F1F] p-4 rounded-lg shadow-xl max-w-xs border border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">{t('home.location.title')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{t('home.location.address')}</p>
            <p className="text-xs text-gray-500">{t('home.location.hours')}</p>
         </div>
      </section>
    </div>
  );
};

export default HomePage;
