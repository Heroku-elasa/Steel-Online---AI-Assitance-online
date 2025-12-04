
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SeoHealthChecker from './SeoHealthChecker';

const Resources: React.FC = () => {
  const { t, direction } = useLanguage();
  const [activeTab, setActiveTab] = useState<'files' | 'seo'>('files');

  return (
    <div className="p-6 w-full bg-[#f5f7fa] min-h-screen pb-32 font-sans" dir={direction}>
        
        {/* Header */}
        <div className="mb-8 border-b border-gray-200 pb-4 flex flex-col md:flex-row justify-between md:items-end gap-4">
           <div>
               <h1 className="text-2xl font-bold text-brand-black mb-1">{t('res_title')}</h1>
               <p className="text-gray-500 text-sm">{t('res_subtitle')}</p>
           </div>
           
           {/* Tab Switcher */}
           <div className="flex bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
               <button 
                  onClick={() => setActiveTab('files')}
                  className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'files' ? 'bg-[#1a365d] text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
               >
                  {t('res_tab_files')}
               </button>
               <button 
                  onClick={() => setActiveTab('seo')}
                  className={`px-4 py-2 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'seo' ? 'bg-green-600 text-white shadow' : 'text-gray-500 hover:bg-gray-50'}`}
               >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {t('res_tab_seo')}
               </button>
           </div>
        </div>

        {activeTab === 'seo' ? (
            <div className="max-w-4xl mx-auto">
                 <SeoHealthChecker />
                 <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-xl text-sm text-blue-800">
                     <h4 className="font-bold mb-2 flex items-center gap-2">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         Note on Single Page Applications (SPA)
                     </h4>
                     <p>
                         Since HesabrasYar is a React SPA, traditional SEO crawlers might see different content than users. 
                         Ensure your <code>index.html</code> has meaningful default Meta Tags, and consider using Server-Side Rendering (SSR) 
                         or Prerendering services if public indexing is critical.
                     </p>
                 </div>
            </div>
        ) : (
            <>
                {/* Top Banner: ShAuto ERP Integration */}
                <div className="bg-gradient-to-r from-[#034737] to-[#0a6c56] rounded-xl p-6 mb-8 text-white shadow-lg relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <svg className="w-6 h-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                {t('res_erp_title')}
                            </h2>
                            <p className="text-green-100 text-sm max-w-2xl leading-relaxed">
                                {t('res_erp_desc')}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button className="bg-white text-[#034737] font-bold py-2 px-4 rounded-lg text-sm shadow hover:bg-gray-100 transition-colors">
                                ShAuto ERP
                            </button>
                            <button className="bg-[#034737]/50 border border-white/30 text-white font-medium py-2 px-4 rounded-lg text-sm hover:bg-[#034737] transition-colors">
                                Teamyar Connect
                            </button>
                        </div>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Section 1: Downloads */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            </span>
                            {t('res_sec_templates')}
                        </h3>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-700 font-bold text-xs">XLSX</div>
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm group-hover:text-green-700">{t('res_dl_excel')}</p>
                                        <p className="text-xs text-gray-400">Standard 1404 • 250 KB</p>
                                    </div>
                                </div>
                                <svg className="w-5 h-5 text-gray-300 group-hover:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            </div>
                            <div className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-700 font-bold text-xs">PDF</div>
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm group-hover:text-red-700">{t('res_dl_pdf')}</p>
                                        <p className="text-xs text-gray-400">Sample Report • 1.2 MB</p>
                                    </div>
                                </div>
                                <svg className="w-5 h-5 text-gray-300 group-hover:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Definitions */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            </span>
                            {t('res_sec_definitions')}
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-brand-black mb-1">{t('res_def_balance')}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{t('res_desc_balance')}</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-brand-black mb-1">{t('res_def_pl')}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{t('res_desc_pl')}</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="text-sm font-bold text-brand-black mb-1">{t('res_def_cash')}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{t('res_desc_cash')}</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Info */}
                <div className="mt-12 text-center border-t border-gray-200 pt-8">
                    <p className="text-xs text-gray-400">
                        Powered by Teamyar Audit Suite & Shomaran System • Standards 1404
                    </p>
                </div>
            </>
        )}
    </div>
  );
};

export default Resources;
