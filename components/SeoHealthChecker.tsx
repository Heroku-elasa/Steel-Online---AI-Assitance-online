
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface Issue {
  type: 'error' | 'warning' | 'success';
  message: string;
}

const SeoHealthChecker: React.FC = () => {
  const { t } = useLanguage();
  const [score, setScore] = useState(0);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const analyzeSEO = () => {
    setAnalyzing(true);
    setAnalyzed(false);
    setIssues([]);

    // Simulate scanning delay to give user feedback
    setTimeout(() => {
      let tempScore = 100;
      const tempIssues: Issue[] = [];

      // 1. Check Title
      if (document.title.length < 10) {
        tempScore -= 20;
        tempIssues.push({ type: 'error', message: t('seo_title_short') });
      } else {
        tempIssues.push({ type: 'success', message: `Title length is good (${document.title.length} chars)` });
      }

      // 2. Check Meta Description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc || !metaDesc.getAttribute('content')) {
        tempScore -= 20;
        tempIssues.push({ type: 'error', message: t('seo_desc_missing') });
      } else {
        tempIssues.push({ type: 'success', message: 'Meta Description found.' });
      }

      // 3. Check H1
      const h1 = document.getElementsByTagName('h1');
      if (h1.length === 0) {
        tempScore -= 15;
        tempIssues.push({ type: 'error', message: t('seo_missing_h1') });
      } else if (h1.length > 1) {
        tempScore -= 5;
        tempIssues.push({ type: 'warning', message: 'Multiple H1 tags found (Recommended: 1)' });
      } else {
        tempIssues.push({ type: 'success', message: 'H1 Tag exists.' });
      }

      // 4. Check Images Alt
      const images = document.getElementsByTagName('img');
      let missingAlt = 0;
      for (let i = 0; i < images.length; i++) {
        if (!images[i].alt) missingAlt++;
      }
      if (missingAlt > 0) {
        tempScore -= 10;
        tempIssues.push({ type: 'warning', message: `${t('seo_alt_missing')} (${missingAlt})` });
      } else {
        tempIssues.push({ type: 'success', message: 'All images have Alt text.' });
      }

      // 5. Check Canonical
      const canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
          tempScore -= 5;
          tempIssues.push({ type: 'warning', message: 'Missing Canonical URL' });
      } else {
          tempIssues.push({ type: 'success', message: 'Canonical URL present.' });
      }

      // 6. Check Viewport
      const viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
          tempIssues.push({ type: 'success', message: 'Mobile Viewport configured.' });
      } else {
          tempScore -= 10;
          tempIssues.push({ type: 'error', message: 'Mobile Viewport missing.' });
      }

      // 7. Check Open Graph (Social SEO)
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      
      if (!ogTitle || !ogDesc) {
           tempScore -= 10;
           tempIssues.push({ type: 'warning', message: t('seo_missing_og') });
      } else {
           tempIssues.push({ type: 'success', message: 'Social Meta Tags (Open Graph) are present.' });
      }

      setScore(Math.max(0, tempScore));
      setIssues(tempIssues);
      setAnalyzing(false);
      setAnalyzed(true);
    }, 1500);
  };

  const getScoreColor = (s: number) => {
    if (s >= 90) return '#10b981'; // Green
    if (s >= 70) return '#f59e0b'; // Yellow
    return '#ef4444'; // Red
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-brand-black p-4 text-white flex justify-between items-center">
        <h2 className="font-bold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-high" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t('seo_score_title')}
        </h2>
        {!analyzing && (
            <button 
                onClick={analyzeSEO}
                className="bg-green-high text-brand-black px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-green-400 transition-colors"
            >
                {t('seo_btn_analyze')}
            </button>
        )}
      </div>

      <div className="p-6">
        {analyzing ? (
            <div className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 border-4 border-gray-200 border-t-brand-green rounded-full animate-spin mb-4"></div>
                <p className="text-gray-500 font-medium">{t('seo_analyzing')}</p>
            </div>
        ) : !analyzed ? (
            <div className="text-center py-12 text-gray-500">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-lg font-medium mb-2">Check Your Page SEO</p>
                <p className="text-sm">Click the "Start Analysis" button to scan the current page for SEO best practices.</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Score Chart */}
                <div className="col-span-1 flex flex-col items-center justify-center border-b md:border-b-0 md:border-l border-gray-100 pb-6 md:pb-0">
                    <div className="relative w-48 h-48">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={[{ value: score }, { value: 100 - score }]}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    startAngle={90}
                                    endAngle={-270}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    <Cell fill={getScoreColor(score)} />
                                    <Cell fill="#f3f4f6" />
                                </Pie>
                            </PieChart>
                         </ResponsiveContainer>
                         <div className="absolute inset-0 flex flex-col items-center justify-center">
                             <span className="text-4xl font-bold text-gray-800">{score}</span>
                             <span className="text-sm text-gray-400">/ 100</span>
                         </div>
                    </div>
                    <p className="font-bold mt-2" style={{ color: getScoreColor(score) }}>
                        {score >= 90 ? t('seo_good_job') : score >= 70 ? 'Needs Improvement' : 'Critical Issues'}
                    </p>
                </div>

                {/* Issues List */}
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2">{t('seo_issue_title')}</h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                        {issues.map((issue, idx) => (
                            <div key={idx} className={`p-3 rounded-lg flex items-start gap-3 ${issue.type === 'error' ? 'bg-red-50 text-red-700' : issue.type === 'warning' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'}`}>
                                <div className="mt-0.5">
                                    {issue.type === 'error' && <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                    {issue.type === 'warning' && <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
                                    {issue.type === 'success' && <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
                                </div>
                                <span className="text-sm font-medium">{issue.message}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
      </div>

      {/* External Tools */}
      <div className="bg-gray-50 p-6 border-t border-gray-200">
          <h3 className="font-bold text-gray-800 mb-4">{t('seo_reg_tools')}</h3>
          <div className="flex flex-wrap gap-4">
              <a 
                href="https://search.google.com/search-console" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
              >
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  {t('seo_reg_gsc')}
              </a>
              <a 
                href="https://www.bing.com/webmasters" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all"
              >
                  <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12.91 2.5L7.26 4.38L4.5 17.06L5.5 19.5L14.73 15.65L19.5 7.61L12.91 2.5ZM13.3 13.91L8.5 15.93L10.32 7.5L13.3 13.91Z"/></svg>
                  {t('seo_reg_bing')}
              </a>
          </div>
      </div>
    </div>
  );
};

export default SeoHealthChecker;
