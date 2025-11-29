
import React from 'react';
import { useLanguage } from '../types';

const PricingPage: React.FC = () => {
    const { t, language } = useLanguage();
    const plans: any[] = t('pricing.plans');
    const features: any[] = t('pricing.features');

    const formatPrice = (price: number) => {
        return price.toLocaleString(language === 'fa' ? 'fa-IR' : 'en-US');
    };

    return (
        <div className="animate-fade-in min-h-screen bg-gray-50 dark:bg-[#111827] transition-colors">
            {/* Hero Section */}
            <div className="bg-brand-blue text-white py-16 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('pricing.title')}</h1>
                    <p className="text-lg text-gray-300 mb-8">{t('pricing.subtitle')}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-10 relative z-20">
                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <div key={plan.id} className="bg-white dark:bg-[#1F1F1F] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 group">
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-gold transition-colors">{plan.title}</h3>
                                    <span className="bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold px-2 py-1 rounded-full border border-red-500/20">
                                        {t('pricing.discountBadge')}
                                    </span>
                                </div>
                                
                                <div className="mb-6">
                                    <div className="text-gray-400 line-through text-sm mb-1">{formatPrice(plan.oldPrice)} {t('pricing.toman')}</div>
                                    <div className="text-3xl font-black text-brand-blue dark:text-brand-gold">
                                        {formatPrice(plan.price)} <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('pricing.toman')}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-6 flex-grow">
                                    {plan.features.map((feature: string, idx: number) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                            <svg className="w-5 h-5 text-green-500 mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            <span className="leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-2 uppercase tracking-wider border-t border-gray-100 dark:border-gray-800 pt-4">
                                        {t('pricing.files')}:
                                    </div>
                                    <div className="flex gap-3 mb-6">
                                        <div className="flex items-center text-gray-600 dark:text-gray-300 text-xs">
                                            <svg className="w-4 h-4 text-red-500 mr-1 rtl:ml-1 rtl:mr-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.25h-3.5v-10.5h3.5v10.5zm5 0h-3.5v-10.5h3.5v10.5z"/></svg>
                                            PDF
                                        </div>
                                        <div className="flex items-center text-gray-600 dark:text-gray-300 text-xs">
                                            <svg className="w-4 h-4 text-blue-500 mr-1 rtl:ml-1 rtl:mr-0" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                                            Word
                                        </div>
                                    </div>
                                    <button className="w-full py-3 bg-brand-blue dark:bg-brand-gold text-white dark:text-brand-blue font-bold rounded-xl hover:opacity-90 transition-all shadow-lg transform active:scale-95">
                                        {t('pricing.selectPlan')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Detail Section */}
                <div className="mt-20 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('pricing.featuresTitle')}</h2>
                        <div className="w-20 h-1.5 bg-brand-gold mx-auto rounded-full mt-4"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature: any, idx: number) => (
                            <div key={idx} className="bg-white dark:bg-[#1F1F1F] p-6 rounded-xl border-l-4 border-brand-gold shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                                <ul className="space-y-2">
                                    {feature.items.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                                            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
