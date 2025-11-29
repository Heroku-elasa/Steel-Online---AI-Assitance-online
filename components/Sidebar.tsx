
import React from 'react';
import { MOCK_AUDIT_STATS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  currentView: 'dashboard' | 'chat' | 'finetuning' | 'resources' | 'wp_dashboard' | 'steel_online';
  onViewChange: (view: 'dashboard' | 'chat' | 'finetuning' | 'resources' | 'wp_dashboard' | 'steel_online') => void;
}

const Sidebar: React.FC<Props> = ({ currentView, onViewChange }) => {
  const { language, setLanguage, t, direction } = useLanguage();

  const isRTL = direction === 'rtl';

  // Map mock stats to translation keys based on index as a simple strategy
  const getStatLabel = (index: number) => {
    const keys = ['stat_docs', 'stat_discrepancies', 'stat_fraud', 'stat_score'];
    return t(keys[index] || 'stat_docs');
  };

  return (
    <div className={`w-80 bg-brand-black text-white flex-col hidden lg:flex h-screen sticky top-0 ${isRTL ? 'border-l' : 'border-r'} border-white/10 z-40`}>
      <div className="p-8 border-b border-white/10">
        <div className="flex items-center gap-3 mb-2">
           {/* Simulated Logo Icon */}
           <div className="w-8 h-8 bg-green-high rounded flex items-center justify-center text-brand-black font-bold text-xl">
             T
           </div>
           <h1 className="text-2xl font-bold tracking-tight text-white">{t('app_title')}</h1>
        </div>
        <p className="text-sage-3 text-xs mt-1 opacity-80">
          {t('app_subtitle')}
        </p>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-4">
          <ul className="space-y-1">
              <li>
                  <button 
                    onClick={() => onViewChange('dashboard')}
                    className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${currentView === 'dashboard' ? 'bg-white/10 text-green-high border border-green-high/20' : 'text-sage-3 hover:bg-white/5 hover:text-white'}`}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                      {t('nav_dashboard')}
                  </button>
              </li>
              <li>
                  <button 
                    onClick={() => onViewChange('chat')}
                    className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${currentView === 'chat' ? 'bg-white/10 text-green-high border border-green-high/20' : 'text-sage-3 hover:bg-white/5 hover:text-white'}`}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                      {t('nav_chat')}
                  </button>
              </li>
              <li>
                  <button 
                    onClick={() => onViewChange('finetuning')}
                    className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${currentView === 'finetuning' ? 'bg-brand-purple/40 text-purple-300 border border-purple-500/30' : 'text-sage-3 hover:bg-brand-purple/20 hover:text-purple-200'}`}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                      {t('nav_finetuning')}
                  </button>
              </li>
              <li>
                  <button 
                    onClick={() => onViewChange('resources')}
                    className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${currentView === 'resources' ? 'bg-amber-500/20 text-amber-200 border border-amber-500/30' : 'text-sage-3 hover:bg-amber-500/10 hover:text-amber-100'}`}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      {t('nav_resources')}
                  </button>
              </li>
              <li>
                  <button 
                    onClick={() => onViewChange('wp_dashboard')}
                    className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${currentView === 'wp_dashboard' ? 'bg-[#2271b1]/20 text-[#72aee6] border border-[#2271b1]/30' : 'text-sage-3 hover:bg-[#2271b1]/10 hover:text-blue-200'}`}
                  >
                      {/* WordPress Icon */}
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.0004 0.0512695C5.40141 0.0512695 0.0512695 5.40141 0.0512695 12C0.0512695 18.5986 5.40141 23.9487 12.0004 23.9487C18.5986 23.9487 23.9487 18.5986 23.9487 12C23.9487 5.40141 18.5986 0.0512695 12.0004 0.0512695ZM10.2224 18.9959L7.30459 10.3735L5.43285 16.425C6.96929 18.4231 9.42398 19.6644 12.0004 19.6644C12.3364 19.6644 12.6669 19.6482 12.9922 19.6174L10.2224 18.9959ZM19.3496 16.5746L16.2796 7.42588H17.8967C18.1566 7.42588 18.3672 7.21526 18.3672 6.95543C18.3672 6.6956 18.1566 6.48498 17.8967 6.48498H14.1294C13.8696 6.48498 13.659 6.6956 13.659 6.95543C13.659 7.21526 13.8696 7.42588 14.1294 7.42588H15.2289L13.1557 14.3916L10.9995 7.42588H12.1643C12.4241 7.42588 12.6347 7.21526 12.6347 6.95543C12.6347 6.6956 12.4241 6.48498 12.1643 6.48498H8.53724C8.27741 6.48498 8.06679 6.6956 8.06679 6.95543C8.06679 7.21526 8.27741 7.42588 8.53724 7.42588H9.68958L6.44421 17.8465C4.30006 16.4947 2.87321 14.1037 2.87321 12C2.87321 9.43265 3.93297 7.12458 5.62939 5.51737L10.4636 18.6659L12.0004 22.1154L13.7827 17.7513L19.3496 16.5746ZM19.6957 16.0964L16.8296 6.48498C19.3039 7.49301 21.1276 9.87355 21.1276 12C21.1276 13.5186 20.6121 14.9318 19.6957 16.0964Z"/></svg>
                      {t('nav_wp')}
                  </button>
              </li>
              <li>
                  <button 
                    onClick={() => onViewChange('steel_online')}
                    className={`w-full ${isRTL ? 'text-right' : 'text-left'} px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-3 ${currentView === 'steel_online' ? 'bg-[#9D003D]/20 text-[#D41F5B] border border-[#9D003D]/30' : 'text-sage-3 hover:bg-[#9D003D]/10 hover:text-red-200'}`}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                      {t('nav_steel')}
                  </button>
              </li>
          </ul>
      </nav>

      <div className="p-6 space-y-8 flex-1 overflow-y-auto">
        <div>
          <h2 className="text-xs font-bold text-green-high uppercase tracking-wider mb-4">{t('stats_today')}</h2>
          <div className="grid grid-cols-1 gap-3">
            {MOCK_AUDIT_STATS.map((stat, idx) => (
              <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-green-high/50 transition-colors">
                <p className="text-sage-3 text-xs mb-1">{getStatLabel(idx)}</p>
                <p className={`text-xl font-medium ${stat.color.includes('red') ? 'text-red-high' : 'text-white'}`}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 bg-black/20 border-t border-white/10">
        
        {/* Language Selector */}
        <div className="mb-4">
             <select 
               value={language} 
               onChange={(e) => setLanguage(e.target.value as any)}
               className="w-full bg-white/5 border border-white/10 rounded-lg text-xs text-white p-2 outline-none focus:border-green-high/50 appearance-none cursor-pointer"
             >
                 <option value="fa" className="bg-brand-black">فارسی (Persian)</option>
                 <option value="en" className="bg-brand-black">English</option>
                 <option value="ar" className="bg-brand-black">العربية (Arabic)</option>
                 <option value="sv" className="bg-brand-black">Svenska (Swedish)</option>
                 <option value="tr" className="bg-brand-black">Türkçe (Turkish)</option>
                 <option value="it" className="bg-brand-black">Italiano (Italian)</option>
             </select>
        </div>

        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sage-5 flex items-center justify-center text-white font-bold shadow-lg border border-white/20">
                M
            </div>
            <div>
                <p className="text-sm font-medium text-white">{t('role_manager')}</p>
                <p className="text-xs text-sage-3">Teamyar Audit Suite</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
