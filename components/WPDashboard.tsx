
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WPDashboard: React.FC = () => {
  const { t, direction } = useLanguage();
  const [draftTitle, setDraftTitle] = useState('');
  const [draftContent, setDraftContent] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);

  const isRTL = direction === 'rtl';

  const menuItems = [
    { label: t('wp_dashboard'), icon: 'dashboard', active: true },
    { label: t('wp_posts'), icon: 'pin', active: false },
    { label: t('wp_media'), icon: 'images', active: false },
    { label: t('wp_pages'), icon: 'page', active: false },
    { label: t('wp_comments'), icon: 'bubble', active: false },
    { label: t('wp_appearance'), icon: 'brush', active: false, sep: true },
    { label: t('wp_plugins'), icon: 'plug', active: false },
    { label: t('wp_users'), icon: 'users', active: false },
    { label: t('wp_tools'), icon: 'tools', active: false },
    { label: t('wp_settings'), icon: 'settings', active: false },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f0f0f1] font-sans text-[#3c434a]" dir={direction}>
      
      {/* --- WP ADMIN TOP BAR --- */}
      <div className="h-[32px] bg-[#1d2327] text-[#c3c4c7] flex items-center justify-between px-3 text-[13px] z-50 sticky top-0 w-full">
        <div className="flex items-center h-full">
            <div className="w-8 flex items-center justify-center hover:text-[#72aee6] hover:bg-[#2c3338] h-full cursor-pointer transition-colors">
                {/* WordPress "W" Icon */}
                <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0004 0.0512695C5.40141 0.0512695 0.0512695 5.40141 0.0512695 12C0.0512695 18.5986 5.40141 23.9487 12.0004 23.9487C18.5986 23.9487 23.9487 18.5986 23.9487 12C23.9487 5.40141 18.5986 0.0512695 12.0004 0.0512695ZM10.2224 18.9959L7.30459 10.3735L5.43285 16.425C6.96929 18.4231 9.42398 19.6644 12.0004 19.6644C12.3364 19.6644 12.6669 19.6482 12.9922 19.6174L10.2224 18.9959ZM19.3496 16.5746L16.2796 7.42588H17.8967C18.1566 7.42588 18.3672 7.21526 18.3672 6.95543C18.3672 6.6956 18.1566 6.48498 17.8967 6.48498H14.1294C13.8696 6.48498 13.659 6.6956 13.659 6.95543C13.659 7.21526 13.8696 7.42588 14.1294 7.42588H15.2289L13.1557 14.3916L10.9995 7.42588H12.1643C12.4241 7.42588 12.6347 7.21526 12.6347 6.95543C12.6347 6.6956 12.4241 6.48498 12.1643 6.48498H8.53724C8.27741 6.48498 8.06679 6.6956 8.06679 6.95543C8.06679 7.21526 8.27741 7.42588 8.53724 7.42588H9.68958L6.44421 17.8465C4.30006 16.4947 2.87321 14.1037 2.87321 12C2.87321 9.43265 3.93297 7.12458 5.62939 5.51737L10.4636 18.6659L12.0004 22.1154L13.7827 17.7513L19.3496 16.5746ZM19.6957 16.0964L16.8296 6.48498C19.3039 7.49301 21.1276 9.87355 21.1276 12C21.1276 13.5186 20.6121 14.9318 19.6957 16.0964Z"/></svg>
            </div>
            
            {/* Site Name */}
            <div className="flex items-center gap-2 px-3 h-full hover:text-[#72aee6] hover:bg-[#2c3338] cursor-pointer transition-colors border-r border-[#2c3338] border-l-0 rtl:border-r-0 rtl:border-l">
                <svg className="w-4 h-4 text-[#9ca2a7]" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                <span className="font-semibold">{t('app_title')}</span>
            </div>

            {/* Updates */}
            <div className="flex items-center gap-2 px-3 h-full hover:text-[#72aee6] hover:bg-[#2c3338] cursor-pointer transition-colors">
                <svg className="w-4 h-4 text-[#9ca2a7]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" /></svg>
                <span>3</span>
            </div>

             {/* Comments */}
            <div className="flex items-center gap-2 px-3 h-full hover:text-[#72aee6] hover:bg-[#2c3338] cursor-pointer transition-colors">
                 <svg className="w-4 h-4 text-[#9ca2a7]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /></svg>
                 <span>0</span>
            </div>
             
             {/* New (+ New) */}
            <div className="flex items-center gap-1 px-3 h-full hover:text-[#72aee6] hover:bg-[#2c3338] cursor-pointer transition-colors">
                 <svg className="w-4 h-4 text-[#9ca2a7]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                 <span className="font-bold hidden md:inline">New</span>
            </div>
        </div>

        <div className="flex items-center h-full px-3 hover:text-[#72aee6] hover:bg-[#2c3338] cursor-pointer transition-colors">
            <span className="mr-2 ml-2">Howdy, {t('role_manager')}</span>
            <div className="w-5 h-5 bg-gray-500 rounded-sm"></div> {/* Avatar Placeholder */}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        {/* --- WP SIDEBAR --- */}
        <div className="w-[160px] bg-[#23282d] text-white flex-col text-[13px] hidden md:flex shrink-0">
            {menuItems.map((item, idx) => (
                <div key={idx} className={`${item.sep ? 'mt-3' : ''}`}>
                    <div className={`
                        flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors relative
                        ${item.active ? 'bg-[#2271b1] text-white font-bold' : 'text-[#f0f0f1] hover:bg-[#191e23] hover:text-[#72aee6]'}
                    `}>
                        {item.active && <div className={`absolute w-1 h-full bg-[#72aee6] top-0 ${isRTL ? 'right-[-4px]' : 'left-[-4px]'}`}></div>}
                        
                        {/* Simple Icon Placeholders */}
                        <div className={`w-5 h-5 flex items-center justify-center opacity-70 ${item.active ? 'opacity-100' : ''}`}>
                             {item.icon === 'dashboard' && <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/></svg>}
                             {item.icon === 'pin' && <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/></svg>}
                             {item.icon === 'images' && <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/></svg>}
                             {item.icon === 'page' && <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/></svg>}
                             {item.icon === 'bubble' && <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/></svg>}
                             {item.icon === 'brush' && <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.6 16c.6.6 1.6.6 2.1 0l.4-.4c.6-.6.6-1.6 0-2.1L9.8 11.2c-.6-.6-1.6-.6-2.1 0l-.4.4c-.6.6-.6 1.6 0 2.1l2.3 2.3zM15 4c0-1.1-.9-2-2-2s-2 .9-2 2l-1 5 3 3 5-1c1.1 0 2-.9 2-2s-.9-2-2-2h-3z"/></svg>}
                             {item.icon === 'plug' && <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
                             {item.icon === 'users' && <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>}
                             {item.icon === 'tools' && <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/></svg>}
                             {item.icon === 'settings' && <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/></svg>}
                        </div>
                        
                        <span>{item.label}</span>
                    </div>
                </div>
            ))}
            <div className="mt-auto p-3">
                 <div className="flex items-center gap-2 text-[#a7aaad] hover:text-[#72aee6] cursor-pointer">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"/></svg>
                    <span>Collapse Menu</span>
                 </div>
            </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="flex-1 overflow-auto p-5 md:p-8">
            <h1 className="text-2xl font-normal text-[#1d2327] mb-6">{t('wp_dashboard')}</h1>

            {/* Welcome Panel */}
            {showWelcome && (
                <div className="bg-white p-6 border border-[#c3c4c7] mb-6 relative">
                    <button onClick={() => setShowWelcome(false)} className="absolute top-2 right-2 text-[#2271b1] text-xs hover:underline">Dismiss</button>
                    <h2 className="text-xl font-semibold mb-2">{t('wp_welcome_title')}</h2>
                    <p className="text-[15px] mb-6">{t('wp_welcome_subtitle')}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                        <div>
                            <h3 className="font-semibold mb-3">Get Started</h3>
                            <button className="bg-[#2271b1] text-white px-4 py-2 rounded text-[13px] font-medium hover:bg-[#135e96] transition-colors mb-2 block w-max">Customize Your Site</button>
                            <p className="text-[#646970]">or, <a href="#" className="text-[#2271b1] hover:underline">change your theme completely</a></p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3">Next Steps</h3>
                            <ul className="space-y-2 text-[#2271b1]">
                                <li><a href="#" className="flex items-center gap-2 hover:underline"><span className="text-[#646970] text-lg">📄</span> Write your first blog post</a></li>
                                <li><a href="#" className="flex items-center gap-2 hover:underline"><span className="text-[#646970] text-lg">➕</span> Add an About page</a></li>
                                <li><a href="#" className="flex items-center gap-2 hover:underline"><span className="text-[#646970] text-lg">🖼️</span> Set up your homepage</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3">More Actions</h3>
                            <ul className="space-y-2 text-[#2271b1]">
                                <li><a href="#" className="flex items-center gap-2 hover:underline"><span className="text-[#646970] text-lg">🔧</span> Manage widgets</a></li>
                                <li><a href="#" className="flex items-center gap-2 hover:underline"><span className="text-[#646970] text-lg">📑</span> Turn comments on or off</a></li>
                                <li><a href="#" className="flex items-center gap-2 hover:underline"><span className="text-[#646970] text-lg">🎓</span> Learn more about getting started</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Dashboard Widgets Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                
                {/* At a Glance */}
                <div className="bg-white border border-[#c3c4c7] p-0 shadow-sm relative">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-[#c3c4c7] bg-white">
                        <h3 className="font-semibold text-[14px] m-0">{t('wp_at_a_glance')}</h3>
                        <button className="text-[#2271b1] hover:text-[#135e96] p-1">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" /></svg>
                        </button>
                    </div>
                    <div className="p-4 text-[13px]">
                         <div className="grid grid-cols-2 gap-4 mb-4">
                             <div className="flex items-center gap-2 text-[#2271b1] hover:text-[#135e96] cursor-pointer group">
                                 <svg className="w-5 h-5 fill-gray-400 group-hover:fill-[#2271b1]" viewBox="0 0 20 20"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/></svg>
                                 <span className="font-semibold">4 Posts</span>
                             </div>
                             <div className="flex items-center gap-2 text-[#2271b1] hover:text-[#135e96] cursor-pointer group">
                                 <svg className="w-5 h-5 fill-gray-400 group-hover:fill-[#2271b1]" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/></svg>
                                 <span className="font-semibold">2 Pages</span>
                             </div>
                             <div className="flex items-center gap-2 text-[#2271b1] hover:text-[#135e96] cursor-pointer group">
                                 <svg className="w-5 h-5 fill-gray-400 group-hover:fill-[#2271b1]" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/></svg>
                                 <span className="font-semibold">No Comments</span>
                             </div>
                         </div>
                         <p className="text-[#646970]">WordPress 6.5.3 running Twenty Twenty-Four theme.</p>
                    </div>
                </div>

                {/* --- GITHUB PROJECT STATUS WIDGET --- */}
                <div className="bg-white border border-[#c3c4c7] p-0 shadow-sm relative">
                  <div className="flex justify-between items-center px-4 py-3 border-b border-[#c3c4c7] bg-white">
                      <h3 className="font-semibold text-[14px] m-0">{t('wp_github_project')}</h3>
                      <button className="text-[#2271b1] hover:text-[#135e96] p-1">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" /></svg>
                      </button>
                  </div>
                  <div className="p-4 text-[13px]">
                      <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#171515]"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                          </div>
                          <div>
                              <p className="font-bold text-[#1d2327] text-sm">hesabrasyar-core</p>
                              <p className="text-[#646970] text-xs">teamyar-org / private</p>
                          </div>
                      </div>
                      
                      <div className="space-y-3">
                          <div className="flex justify-between items-center border-b border-[#f0f0f1] pb-2">
                              <span className="text-[#646970]">{t('wp_gh_branch')}:</span>
                              <span className="bg-[#dcf0ff] text-[#005c87] px-2 py-0.5 rounded text-xs font-mono">main</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-[#f0f0f1] pb-2">
                               <span className="text-[#646970]">{t('wp_gh_sync')}:</span>
                               <span className="flex items-center gap-1 text-[#007017]">
                                   <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                                   Synced
                               </span>
                          </div>
                          <div className="pt-1">
                              <p className="text-[#646970] mb-1">{t('wp_gh_last_commit')}:</p>
                              <p className="text-[#1d2327] font-medium truncate" title="feat: Add Article 169 fraud logic">feat: Add Article 169 fraud logic</p>
                              <p className="text-[#646970] text-xs mt-1">2 hours ago by <span className="text-[#2271b1]">Ali M.</span></p>
                          </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#f0f0f1] flex gap-2">
                          <button className="px-3 py-1.5 bg-[#f6f7f7] text-[#2271b1] border border-[#2271b1] rounded text-xs hover:bg-[#f0f0f1] transition-colors font-medium">
                              {t('wp_gh_view_repo')}
                          </button>
                          <button className="px-3 py-1.5 bg-[#f6f7f7] text-[#b32d2e] border border-[#b32d2e] rounded text-xs hover:bg-[#f0f0f1] transition-colors font-medium">
                              Fetch
                          </button>
                      </div>
                  </div>
                </div>

                {/* Activity */}
                <div className="bg-white border border-[#c3c4c7] p-0 shadow-sm relative">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-[#c3c4c7] bg-white">
                        <h3 className="font-semibold text-[14px] m-0">{t('wp_activity')}</h3>
                        <button className="text-[#2271b1] hover:text-[#135e96] p-1">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" /></svg>
                        </button>
                    </div>
                    <div className="p-4 text-[13px]">
                        <p className="text-[#646970] mb-4 uppercase text-xs tracking-wide">Recently Published</p>
                        <ul className="space-y-3 mb-4">
                            <li className="flex justify-between">
                                <span className="text-[#2271b1] font-medium hover:underline cursor-pointer">Audit Report #852</span>
                                <span className="text-[#646970]">May 12, 2:03 pm</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-[#2271b1] font-medium hover:underline cursor-pointer">Tax Declaration 1403</span>
                                <span className="text-[#646970]">May 10, 10:00 am</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="text-[#2271b1] font-medium hover:underline cursor-pointer">Fraud Detection Log</span>
                                <span className="text-[#646970]">May 9, 4:45 pm</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Quick Draft */}
                <div className="bg-white border border-[#c3c4c7] p-0 shadow-sm relative">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-[#c3c4c7] bg-white">
                        <h3 className="font-semibold text-[14px] m-0">{t('wp_quick_draft')}</h3>
                        <button className="text-[#2271b1] hover:text-[#135e96] p-1">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" /></svg>
                        </button>
                    </div>
                    <div className="p-4 text-[13px]">
                        <div className="mb-3">
                            <label className="block text-[#1d2327] mb-1 font-medium">{t('wp_title_placeholder')}</label>
                            <input 
                                type="text" 
                                value={draftTitle}
                                onChange={(e) => setDraftTitle(e.target.value)}
                                className="w-full border border-[#8c8f94] p-1.5 text-sm rounded-sm focus:border-[#2271b1] focus:ring-1 focus:ring-[#2271b1] outline-none" 
                            />
                        </div>
                        <div className="mb-3">
                            <label className="block text-[#1d2327] mb-1 font-medium">{t('wp_content_placeholder')}</label>
                            <textarea 
                                rows={4} 
                                value={draftContent}
                                onChange={(e) => setDraftContent(e.target.value)}
                                className="w-full border border-[#8c8f94] p-1.5 text-sm rounded-sm focus:border-[#2271b1] focus:ring-1 focus:ring-[#2271b1] outline-none"
                            ></textarea>
                        </div>
                        <button className="bg-[#f6f7f7] text-[#2271b1] border border-[#2271b1] px-3 py-1.5 rounded text-[13px] font-medium hover:bg-[#f0f0f1] transition-colors">
                            {t('wp_save_draft')}
                        </button>
                    </div>
                </div>

                {/* News */}
                <div className="bg-white border border-[#c3c4c7] p-0 shadow-sm relative">
                    <div className="flex justify-between items-center px-4 py-3 border-b border-[#c3c4c7] bg-white">
                        <h3 className="font-semibold text-[14px] m-0">{t('wp_news')}</h3>
                        <button className="text-[#2271b1] hover:text-[#135e96] p-1">
                            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" /></svg>
                        </button>
                    </div>
                    <div className="p-4 text-[13px]">
                        <div className="space-y-3">
                             <div>
                                 <a href="#" className="text-[#2271b1] font-bold hover:underline block mb-1">Teamyar ERP Update v8.2 Released</a>
                                 <p className="text-[#646970]">New accounting features for 1404 compliance are now available.</p>
                             </div>
                             <div>
                                 <a href="#" className="text-[#2271b1] font-bold hover:underline block mb-1">Audit AI Seminar in Tehran</a>
                                 <p className="text-[#646970]">Join us next week for a deep dive into AI-powered fraud detection.</p>
                             </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="mt-8 pt-4 border-t border-[#c3c4c7] text-[#646970] text-[13px]">
                <p>Thank you for creating with <a href="#" className="text-[#2271b1] hover:underline">Teamyar Audit Suite</a>.</p>
                <p className="text-xs mt-1">Version 1.0.0</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default WPDashboard;
