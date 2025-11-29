
import React, { useState, useEffect } from 'react';
import { 
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend, ReferenceLine, ScatterChart, Scatter, ZAxis, BarChart,
  PieChart, Pie, Cell
} from 'recharts';
import { 
  LIVE_STREAM_DATA, CHART_COLORS, RISK_RATING_DATA, STATUS_DATA, RESULT_DATA, 
  PROCESS_FINDINGS_DATA, AUDIT_STAGES_DATA, PLANNING_RISK_DATA, PLANNING_STATUS_DATA,
  PLANNING_RESULTS_DATA, PLANNING_OBSERVATIONS_DATA, PLANNING_BUBBLE_DATA, PLANNING_PROCESS_DATA,
  EXECUTIVE_OVERVIEW_DATA, EXECUTIVE_TARGET_DATA, EXECUTIVE_TOP_RISKS, EXECUTIVE_STATS,
  EXECUTIVE_YEARLY_DATA
} from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Dashboard: React.FC = () => {
  const { t, direction } = useLanguage();
  const [activeTab, setActiveTab] = useState<'live' | 'static' | 'planning' | 'executive'>('executive');

  return (
    <div className="w-full h-full bg-[#f8f9fa] flex flex-col font-sans relative" dir={direction}>
      
      {/* Toggle Header */}
      <div className="w-full bg-white border-b border-gray-200 px-6 py-4 flex flex-wrap items-center justify-between sticky top-0 z-20 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
           {activeTab === 'live' && t('dash_live')}
           {activeTab === 'static' && t('dash_static')}
           {activeTab === 'planning' && t('dash_planning')}
           {activeTab === 'executive' && t('dash_executive')}
        </h1>
        
        <div className="flex bg-gray-100 p-1 rounded-lg">
           <button 
             onClick={() => setActiveTab('executive')}
             className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'executive' ? 'bg-[#1e293b] text-white shadow' : 'text-gray-500 hover:text-gray-900'}`}
           >
             {t('dash_executive')}
           </button>
           <button 
             onClick={() => setActiveTab('planning')}
             className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'planning' ? 'bg-white text-gray-900 shadow' : 'text-gray-500 hover:text-gray-900'}`}
           >
             {t('dash_planning')}
           </button>
           <button 
             onClick={() => setActiveTab('static')}
             className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'static' ? 'bg-white text-gray-900 shadow' : 'text-gray-500 hover:text-gray-900'}`}
           >
             {t('dash_static')}
           </button>
           <button 
             onClick={() => setActiveTab('live')}
             className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'live' ? 'bg-gray-900 text-green-400 shadow' : 'text-gray-500 hover:text-gray-900'}`}
           >
             <span className={`w-2 h-2 rounded-full ${activeTab === 'live' ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></span>
             {t('dash_live')}
           </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {activeTab === 'live' && <LiveDashboard />}
        {activeTab === 'static' && <StaticDashboard />}
        {activeTab === 'planning' && <PlanningDashboard />}
        {activeTab === 'executive' && <ExecutiveDashboard />}
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: EXECUTIVE DASHBOARD (Dark Theme) ---
const ExecutiveDashboard: React.FC = () => {
    const { direction } = useLanguage();
    const [timeRange, setTimeRange] = useState('year'); // '6months' | 'year'
    const [chartData, setChartData] = useState(EXECUTIVE_OVERVIEW_DATA);

    useEffect(() => {
        if (timeRange === 'year') {
             setChartData(EXECUTIVE_YEARLY_DATA);
        } else {
             setChartData(EXECUTIVE_OVERVIEW_DATA);
        }
    }, [timeRange]);

    return (
        <div className="bg-[#171c24] text-white p-6 min-h-full font-sans" dir={direction}>
            
            {/* Top Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {EXECUTIVE_STATS.map((stat, idx) => (
                    <div key={idx} className="bg-[#222b3c] rounded-xl p-5 shadow-lg border border-slate-700/50">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-lg ${idx === 0 ? 'bg-green-500/20 text-green-400' : idx === 1 ? 'bg-purple-500/20 text-purple-400' : idx === 2 ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {idx === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                                    {idx === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                                    {idx === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />}
                                    {idx === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />}
                                </svg>
                            </div>
                            <span className={`text-sm font-bold ${stat.change.includes('+') ? 'text-green-400' : 'text-red-400'}`}>{stat.change}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-gray-400 text-sm mb-1">{stat.suffix}</p>
                        <p className="text-gray-500 text-xs font-medium">{stat.title}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                
                {/* Main Trend Chart */}
                <div className="lg:col-span-2 bg-[#222b3c] rounded-xl p-6 shadow-lg border border-slate-700/50">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-white font-bold text-lg">روند کشف انحرافات و بودجه حسابرسی‌شده</h3>
                        <select 
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                            className="bg-[#171c24] text-gray-300 text-xs rounded border border-slate-600 px-2 py-1 outline-none"
                        >
                            <option value="6months">۶ ماه اخیر</option>
                            <option value="year">سال ۱۴۰۳</option>
                        </select>
                    </div>
                    <div className="h-[300px] w-full" dir="ltr">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={chartData} barGap={10} barCategoryGap={20}>
                                <defs>
                                    <linearGradient id="colorAudit" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                                <Tooltip 
                                    contentStyle={{backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px', color: '#fff'}}
                                    itemStyle={{fontSize: '12px'}}
                                />
                                <Legend wrapperStyle={{paddingTop: '10px'}} />
                                <Bar dataKey="audit" name="بودجه حسابرسی‌شده" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={30} />
                                <Line type="monotone" dataKey="fraud" name="انحراف کشف‌شده" stroke="#f59e0b" strokeWidth={3} dot={{fill: '#171c24', stroke: '#f59e0b', strokeWidth: 2, r: 4}} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Compliance Gauge (Pie Chart Simulation) */}
                <div className="bg-[#222b3c] rounded-xl p-6 shadow-lg border border-slate-700/50 flex flex-col items-center justify-center relative">
                    <h3 className="text-white font-bold text-lg mb-2 self-start w-full">امتیاز سلامت مالی</h3>
                    <div className="h-[250px] w-full relative">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={[{value: 85}, {value: 15}]}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={90}
                                    startAngle={90}
                                    endAngle={-270}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    <Cell key="val" fill="#10b981" />
                                    <Cell key="rem" fill="#334155" />
                                </Pie>
                            </PieChart>
                         </ResponsiveContainer>
                         <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                             <span className="text-4xl font-bold text-white">۸۵٪</span>
                             <span className="text-gray-400 text-sm mt-1">وضعیت: مطلوب</span>
                         </div>
                    </div>
                    <p className="text-xs text-gray-500 text-center px-4">
                        این امتیاز بر اساس شاخص‌های کنترل داخلی، شفافیت مالیاتی و ریسک تقلب محاسبه شده است.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Target vs Reality */}
                <div className="bg-[#222b3c] rounded-xl p-6 shadow-lg border border-slate-700/50">
                    <h3 className="text-white font-bold text-lg mb-6">تحقق اهداف حسابرسی (Target vs Reality)</h3>
                    <div className="h-[250px] w-full" dir="ltr">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={EXECUTIVE_TARGET_DATA} layout="vertical" barCategoryGap={20}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10}} />
                                <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} tick={{fill: '#e2e8f0', fontSize: 11, fontWeight: 'bold'}} />
                                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px', color: '#fff'}} />
                                <Legend />
                                <Bar dataKey="reality" name="عملکرد واقعی" fill="#4ade80" radius={[0, 4, 4, 0]} barSize={12} />
                                <Bar dataKey="target" name="هدف تعیین‌شده" fill="#facc15" radius={[0, 4, 4, 0]} barSize={12} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Top Risk Departments List */}
                <div className="bg-[#222b3c] rounded-xl p-6 shadow-lg border border-slate-700/50">
                    <h3 className="text-white font-bold text-lg mb-6">واحدهای سازمانی با بیشترین ریسک</h3>
                    <div className="space-y-5">
                        {EXECUTIVE_TOP_RISKS.map((item) => (
                            <div key={item.id}>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-gray-200">{item.name}</span>
                                    <span className="text-xs font-bold" style={{color: item.color}}>{item.popularity}٪ ریسک</span>
                                </div>
                                <div className="w-full bg-[#171c24] rounded-full h-2">
                                    <div 
                                        className="h-2 rounded-full transition-all duration-500" 
                                        style={{width: `${item.popularity}%`, backgroundColor: item.color}}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                     <button className="w-full mt-6 py-2 border border-slate-600 rounded-lg text-sm text-gray-300 hover:bg-slate-700 transition-colors">
                        مشاهده گزارش تفصیلی ریسک‌ها
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- SUB-COMPONENT: LIVE DASHBOARD (Real-Time) ---
const LiveDashboard: React.FC = () => {
  const { direction } = useLanguage();
  const [data, setData] = useState(LIVE_STREAM_DATA);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => {
        const lastItem = currentData[currentData.length - 1];
        const [hour, minute] = lastItem.time.split(':').map(Number);
        
        let newMinute = minute + 1;
        let newHour = hour;
        if (newMinute >= 60) {
          newMinute = 0;
          newHour = (newHour + 1) % 24;
        }

        const timeLabel = `${newHour}:${newMinute < 10 ? '0' + newMinute : newMinute}`;
        const baseValue = 5000 + Math.random() * 2000 + (Math.random() > 0.9 ? 3000 : 0);
        
        const newItem = {
          time: timeLabel,
          amount: Math.floor(baseValue),
          risk: Math.floor(Math.random() * 100),
          anomalyScore: baseValue > 7000 ? 1 : 0,
          high: baseValue + Math.random() * 500,
          low: baseValue - Math.random() * 500,
          open: baseValue - Math.random() * 200,
          close: baseValue + Math.random() * 200,
        };

        return [...currentData.slice(1), newItem];
      });
      setLastUpdate(new Date());
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 w-full bg-[#0f172a] min-h-full font-sans" dir={direction}>
      
      {/* Header with Architecture Status */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-700 pb-6">
        <div>
           <h1 className="text-2xl font-bold text-white mb-1">سامانه هوشمند پایش تراکنش‌ها (Real-Time)</h1>
           <p className="text-xs text-slate-400 font-mono">
             مسیر داده: لاگ تراکنش ← آپاچی کافکا ← رایزینگ‌ویو ← داشبورد
           </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono bg-slate-800 p-2 rounded-lg border border-slate-700" dir="ltr">
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-green-400">کافکا: متصل</span>
            </div>
            <div className="h-4 w-[1px] bg-slate-600"></div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75"></span>
                <span className="text-blue-400">رایزینگ‌ویو: همگام‌سازی</span>
            </div>
             <div className="h-4 w-[1px] bg-slate-600"></div>
            <div className="flex items-center gap-2">
                <span className="text-slate-400">تاخیر: 45ms</span>
            </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-slate-400 text-xs uppercase tracking-wider font-bold">نرخ پردازش (تراکنش/ثانیه)</h3>
            <div className="flex items-baseline gap-2 mt-2" dir="ltr">
                <span className="text-2xl font-bold text-white font-mono">{(data.reduce((acc, curr) => acc + (curr.amount/1000), 0) / 10).toFixed(1)}k</span>
                <span className="text-green-400 text-xs flex items-center">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                    +12.5%
                </span>
            </div>
        </div>
        
        <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-lg relative overflow-hidden">
             <div className="absolute top-0 left-0 p-3 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <h3 className="text-slate-400 text-xs uppercase tracking-wider font-bold">تشخیص ناهنجاری (زنده)</h3>
            <div className="flex items-baseline gap-2 mt-2" dir="ltr">
                <span className="text-2xl font-bold text-white font-mono">{data.filter(d => d.risk > 80).length}</span>
                <span className="text-red-400 text-xs">High Risk</span>
            </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-lg relative overflow-hidden">
             <div className="absolute top-0 left-0 p-3 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <h3 className="text-slate-400 text-xs uppercase tracking-wider font-bold">دقت مدل (Weave)</h3>
            <div className="flex items-baseline gap-2 mt-2" dir="ltr">
                <span className="text-2xl font-bold text-white font-mono">98.4%</span>
                <span className="text-slate-500 text-xs">v2.5-flash</span>
            </div>
        </div>
      </div>

      {/* Main Real-Time Chart */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl mb-6">
        <div className="flex justify-between items-center mb-6">
            <div>
                <h3 className="text-white font-bold text-lg">جریان زنده تراکنش‌های مالی</h3>
                <p className="text-slate-400 text-xs font-mono">دریافت جریان داده از تاپیک کافکا: `trx_logs_v1`</p>
            </div>
            <div className="flex gap-2" dir="ltr">
                <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded text-xs font-mono" dir="rtl">بازه: ۱ ثانیه</span>
                <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded text-xs font-mono" dir="rtl">پنجره: ۶۰ ثانیه</span>
            </div>
        </div>
        
        <div className="h-[350px] w-full" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={data}>
                    <defs>
                        <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis 
                        dataKey="time" 
                        stroke="#94a3b8" 
                        tick={{fontSize: 10, fill: '#94a3b8'}} 
                        tickLine={false} 
                        axisLine={false}
                    />
                    <YAxis 
                        yAxisId="left" 
                        stroke="#94a3b8" 
                        tick={{fontSize: 10, fill: '#94a3b8'}} 
                        tickLine={false} 
                        axisLine={false}
                        domain={[0, 'auto']}
                    />
                    <YAxis 
                        yAxisId="right" 
                        orientation="right" 
                        stroke="#ef4444" 
                        tick={{fontSize: 10, fill: '#ef4444'}} 
                        tickLine={false} 
                        axisLine={false}
                        domain={[0, 100]}
                    />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc', textAlign: 'right' }}
                        itemStyle={{ fontSize: '12px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Area yAxisId="left" type="monotone" dataKey="amount" name="حجم تراکنش ($)" stroke="#3b82f6" fillOpacity={1} fill="url(#colorAmount)" />
                    <Line yAxisId="right" type="step" dataKey="risk" name="نمره ریسک (Risk Score)" stroke="#ef4444" strokeWidth={2} dot={false}/>
                    <Bar yAxisId="left" dataKey="anomalyScore" name="ناهنجاری شناسایی‌شده" barSize={5} fill="#facc15" />
                    <ReferenceLine x={data[data.length - 1].time} stroke="white" strokeDasharray="3 3" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Grid: Candlestick & Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg">
             <h3 className="text-white font-bold text-sm mb-4">توزیع ناهنجاری‌ها (نمای کندل‌استیک)</h3>
             <div className="h-[250px] w-full" dir="ltr">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data.slice(-20)}>
                        <CartesianGrid stroke="#334155" strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="time" tick={{fontSize: 10, fill: '#64748b'}} axisLine={false} tickLine={false} />
                        <YAxis domain={['auto', 'auto']} hide />
                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#f8fafc' }} formatter={(value: number) => value.toFixed(0)} />
                        <Bar dataKey="high" fill="#10b981" barSize={6} name="حداکثر تراکنش" stackId="a" />
                        <Bar dataKey="low" fill="#0f172a" barSize={6} stackId="a" name="حداقل" /> 
                    </ComposedChart>
                </ResponsiveContainer>
             </div>
             <p className="text-xs text-slate-500 mt-2 text-center">نمایش دامنه نوسان تراکنش‌ها (High/Low) در هر دقیقه</p>
        </div>

        <div className="bg-black border border-slate-700 rounded-xl p-4 font-mono text-xs overflow-hidden flex flex-col h-[320px]">
            <div className="border-b border-slate-800 pb-2 mb-2 flex justify-between">
                <span className="text-slate-400">لاگ‌های سیستم (System Logs)</span>
                <span className="text-green-500">● Live</span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-1 text-slate-300" dir="ltr">
                <p><span className="text-slate-500">[{lastUpdate.toLocaleTimeString()}]</span> <span className="text-blue-400">INFO</span> RisingWave: جدول `fraud_detection_mv` به‌روزرسانی شد.</p>
                <p><span className="text-slate-500">[{lastUpdate.toLocaleTimeString()}]</span> <span className="text-blue-400">INFO</span> Kafka: دریافت ۴۲ پیام جدید از پارتیشن ۰.</p>
                {data[data.length - 1].risk > 80 && (
                     <p className="bg-red-900/30 text-red-400 p-1"><span className="text-slate-500">[{lastUpdate.toLocaleTimeString()}]</span> <span className="text-red-500 font-bold">ALERT</span> هشدار: تراکنش با ریسک بالا شناسایی شد! ID: #TRX-{Math.floor(Math.random()*99999)}</p>
                )}
                <p><span className="text-slate-500">[{lastUpdate.toLocaleTimeString()}]</span> <span className="text-purple-400">DEBUG</span> تاخیر استنتاج مدل: 12ms</p>
                <p><span className="text-slate-500">[{lastUpdate.toLocaleTimeString()}]</span> <span className="text-blue-400">INFO</span> Grafana: داشبورد از طریق WebSocket به‌روز شد.</p>
                 <p><span className="text-slate-500">[{lastUpdate.toLocaleTimeString()}]</span> <span className="text-blue-400">INFO</span> پردازشگر دسته‌ای: ۱۰۰٪ استفاده از پردازنده.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: STATIC DASHBOARD ---
const StaticDashboard: React.FC = () => {
  return (
    <div className="p-6 pb-32">
       <h1 className="text-2xl font-bold text-brand-black mb-6">داشبورد مدیریتی حسابرسی</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-xl border border-sage-2 shadow-soft hover:shadow-md transition-shadow">
                <h3 className="text-sm font-medium text-brand-black/70 mb-1">تعداد کل سندها</h3>
                <p className="text-3xl font-heading font-bold text-brand-green">۱,۴۵۲</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-sage-2 shadow-soft hover:shadow-md transition-shadow">
                <h3 className="text-sm font-medium text-brand-black/70 mb-1">مغایرت‌های کشف‌شده</h3>
                <p className="text-3xl font-heading font-bold text-amber-500">۳۴</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-sage-2 shadow-soft hover:shadow-md transition-shadow">
                <h3 className="text-sm font-medium text-brand-black/70 mb-1">ریسک‌های بحرانی</h3>
                <p className="text-3xl font-heading font-bold text-red-500">۳</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-sage-2 shadow-soft hover:shadow-md transition-shadow">
                <h3 className="text-sm font-medium text-brand-black/70 mb-1">دقت مدل هوشمند</h3>
                <p className="text-3xl font-heading font-bold text-brand-purple">۹۸٪</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-sage-2 shadow-soft h-[350px]">
                <h3 className="font-bold text-brand-black mb-6">تحلیل ریسک (ماده ۱۶۹ مکرر)</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={RISK_RATING_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e9efe7" />
                        <XAxis dataKey="name" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                        <YAxis tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e9efe7' }} />
                        <Bar dataKey="value" barSize={40} radius={[8, 8, 0, 0]}>
                            {RISK_RATING_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Bar>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white p-6 rounded-xl border border-sage-2 shadow-soft h-[350px]">
                <h3 className="font-bold text-brand-black mb-6">وضعیت حسابرسی فرایندها</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={PROCESS_FINDINGS_DATA} layout="vertical" margin={{ left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e9efe7" />
                        <XAxis type="number" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                        <YAxis dataKey="name" type="category" tick={{fontSize: 12}} axisLine={false} tickLine={false} width={80} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e9efe7' }} />
                        <Bar dataKey="value" fill={CHART_COLORS.blue} barSize={15} radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
  );
};

// --- SUB-COMPONENT: Mock Map of Iran ---
const MockIranMap: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-blue-50/20 rounded-xl">
            <svg viewBox="0 0 800 600" className="w-full h-full p-4">
                {/* Simplified Iran Outline */}
                <path
                    d="M170,120 L220,80 L350,60 L450,80 L550,60 L650,100 L700,200 L720,350 L600,450 L450,550 L300,500 L150,450 L100,300 L120,200 Z"
                    fill="#e0f2f1"
                    stroke="#00838f"
                    strokeWidth="2"
                    className="drop-shadow-sm"
                />
                
                {/* Simulated Audit Locations */}
                <circle cx="350" cy="180" r="8" fill="#d32f2f" className="animate-pulse">
                    <title>تهران - دفتر مرکزی (ریسک بالا)</title>
                </circle>
                <text x="365" y="185" fontSize="12" fill="#333" fontWeight="bold">تهران</text>
                
                <circle cx="420" cy="300" r="6" fill="#f57c00">
                    <title>اصفهان - شعبه تولید</title>
                </circle>
                <text x="435" y="305" fontSize="12" fill="#333">اصفهان</text>
                
                <circle cx="600" cy="150" r="6" fill="#1976d2">
                    <title>مشهد - انبار</title>
                </circle>
                <text x="615" y="155" fontSize="12" fill="#333">مشهد</text>
                
                <circle cx="150" cy="100" r="6" fill="#388e3c">
                    <title>تبریز - شعبه فروش</title>
                </circle>
                <text x="165" y="105" fontSize="12" fill="#333">تبریز</text>
                
                <circle cx="400" cy="450" r="6" fill="#fbc02d">
                    <title>شیراز - دفتر جنوب</title>
                </circle>
                <text x="415" y="455" fontSize="12" fill="#333">شیراز</text>
            </svg>
            <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded shadow text-xs text-gray-600 border border-gray-200">
                <div className="flex items-center gap-2 mb-1"><div className="w-2 h-2 rounded-full bg-red-600"></div>ریسک بحرانی</div>
                <div className="flex items-center gap-2 mb-1"><div className="w-2 h-2 rounded-full bg-orange-500"></div>ریسک بالا</div>
                <div className="flex items-center gap-2 mb-1"><div className="w-2 h-2 rounded-full bg-blue-600"></div>ریسک متوسط</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-600"></div>ریسک پایین</div>
            </div>
        </div>
    );
};


// --- SUB-COMPONENT: PLANNING DASHBOARD ---
const PlanningDashboard: React.FC = () => {
    const { direction } = useLanguage();
    const [filters, setFilters] = useState({
        geo: 'all',
        process: 'all',
        risk: 'all'
    });

    // Helper to simulate data filtering (just jiggles data for demo)
    const getFilteredData = (data: any[]) => {
        if (filters.geo === 'all' && filters.process === 'all' && filters.risk === 'all') return data;
        return data.map(d => ({
            ...d,
            value: typeof d.value === 'number' ? Math.floor(d.value * (0.5 + Math.random())) : d.value
        }));
    };

    return (
        <div className="p-6 w-full bg-white min-h-full font-sans pb-32" dir={direction}>
            
            {/* Filter Pane Mock */}
            <div className="bg-[#e0f7fa] p-4 rounded-lg border border-[#b2ebf2] mb-6 flex gap-4 items-center flex-wrap">
                <span className="font-bold text-[#006064] text-sm">فیلترها:</span>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">جغرافیا:</span>
                    <select 
                        className="bg-white px-3 py-1.5 rounded border border-[#b2ebf2] text-sm text-gray-600 outline-none"
                        value={filters.geo}
                        onChange={(e) => setFilters({...filters, geo: e.target.value})}
                    >
                        <option value="all">(همه)</option>
                        <option value="tehran">تهران</option>
                        <option value="isfahan">اصفهان</option>
                        <option value="mashhad">مشهد</option>
                    </select>
                </div>
                 <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">فرایند تجاری:</span>
                    <select 
                        className="bg-[#00838f] text-white px-3 py-1.5 rounded border border-[#006064] text-sm outline-none"
                        value={filters.process}
                        onChange={(e) => setFilters({...filters, process: e.target.value})}
                    >
                        <option value="all">(همه)</option>
                        <option value="sales">فروش</option>
                        <option value="procurement">خرید</option>
                        <option value="hr">منابع انسانی</option>
                    </select>
                </div>
                 <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">ریسک:</span>
                    <select 
                        className="bg-[#ffcc80] text-[#e65100] px-3 py-1.5 rounded border border-[#ffe0b2] text-sm outline-none"
                        value={filters.risk}
                        onChange={(e) => setFilters({...filters, risk: e.target.value})}
                    >
                        <option value="all">(همه)</option>
                        <option value="high">بالا</option>
                        <option value="medium">متوسط</option>
                        <option value="low">پایین</option>
                    </select>
                </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-6">داشبورد برنامه‌ریزی حسابرسی داخلی و رتبه‌بندی ریسک</h1>

            {/* Top Row: Pies and Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                
                {/* Risk Rating Pie */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col h-[300px]">
                    <h3 className="text-sm font-bold bg-[#e0f7fa] p-2 rounded text-[#006064] mb-2">رتبه‌بندی ریسک حسابرسی‌های برنامه‌ریزی‌شده</h3>
                    <div className="flex-1 w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie 
                                    data={getFilteredData(PLANNING_RISK_DATA)} 
                                    cx="50%" cy="50%" 
                                    innerRadius={40} outerRadius={70} 
                                    dataKey="value" 
                                    paddingAngle={5}
                                >
                                    {PLANNING_RISK_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{fontFamily: 'Vazirmatn'}} />
                                <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{fontFamily: 'Vazirmatn', fontSize: '11px'}} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Status Donut */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col h-[300px]">
                    <h3 className="text-sm font-bold bg-[#e0f7fa] p-2 rounded text-[#006064] mb-2">وضعیت حسابرسی‌های برنامه‌ریزی‌شده</h3>
                    <div className="flex-1 w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie 
                                    data={getFilteredData(PLANNING_STATUS_DATA)} 
                                    cx="50%" cy="50%" 
                                    innerRadius={50} outerRadius={80} 
                                    dataKey="value"
                                >
                                    {PLANNING_STATUS_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{fontFamily: 'Vazirmatn'}} />
                                <Legend layout="horizontal" verticalAlign="bottom" align="center" iconType="square" wrapperStyle={{fontFamily: 'Vazirmatn', fontSize: '11px'}} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                 {/* Results Donut */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col h-[300px]">
                    <h3 className="text-sm font-bold bg-[#e0f7fa] p-2 rounded text-[#006064] mb-2">نتایج حسابرسی‌های تکمیل‌شده</h3>
                    <div className="flex-1 w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie 
                                    data={getFilteredData(PLANNING_RESULTS_DATA)} 
                                    cx="50%" cy="50%" 
                                    innerRadius={50} outerRadius={80} 
                                    dataKey="value"
                                >
                                    {PLANNING_RESULTS_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{fontFamily: 'Vazirmatn'}} />
                                <Legend layout="vertical" verticalAlign="middle" align="right" iconType="square" width={110} wrapperStyle={{fontFamily: 'Vazirmatn', fontSize: '10px'}} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Observations Bar */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col h-[300px]">
                    <h3 className="text-sm font-bold bg-[#e0f7fa] p-2 rounded text-[#006064] mb-2">خلاصه مشاهدات در مقابل اصلاح‌شده‌ها</h3>
                    <div className="flex-1 w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={PLANNING_OBSERVATIONS_DATA} barGap={2} barCategoryGap={15}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" width={90} tick={{fontSize: 10, fontFamily: 'Vazirmatn'}} />
                                <Tooltip contentStyle={{fontFamily: 'Vazirmatn'}} />
                                <Bar dataKey="all" fill="#1f4e5f" name="کل مشاهدات" radius={[0, 4, 4, 0]} />
                                <Bar dataKey="remediated" fill="#ff9800" name="اصلاح‌شده" radius={[0, 4, 4, 0]} />
                                <Legend wrapperStyle={{fontSize: '10px', fontFamily: 'Vazirmatn'}} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm h-[300px]">
                    <h3 className="text-sm font-bold bg-[#fff3e0] p-2 rounded text-[#e65100] mb-2">مشاهدات حسابرسی بر اساس فرایند تجاری</h3>
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={getFilteredData(PLANNING_PROCESS_DATA)} margin={{top: 10}}>
                             <CartesianGrid strokeDasharray="3 3" vertical={false} />
                             <XAxis dataKey="name" tick={{fontSize: 10, fontFamily: 'Vazirmatn'}} interval={0} angle={-45} textAnchor="end" />
                             <YAxis />
                             <Tooltip contentStyle={{fontFamily: 'Vazirmatn'}} />
                             <Bar dataKey="value" fill="#8884d8">
                                {PLANNING_PROCESS_DATA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                             </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                 </div>

                 <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm h-[300px]">
                    <h3 className="text-sm font-bold bg-[#fff3e0] p-2 rounded text-[#e65100] mb-2">خلاصه مشاهدات حسابرسی بر اساس مکان</h3>
                    <MockIranMap />
                 </div>

                 <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm h-[300px]">
                    <h3 className="text-sm font-bold bg-[#fff3e0] p-2 rounded text-[#e65100] mb-2">تحلیل اثر و آسیب‌پذیری حسابرسی‌های تکمیل‌شده</h3>
                     <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid />
                            <XAxis type="number" dataKey="x" name="اثر (Impact)" unit="" tick={{fontFamily: 'Vazirmatn'}} />
                            <YAxis type="number" dataKey="y" name="آسیب‌پذیری (Vulnerability)" unit="" tick={{fontFamily: 'Vazirmatn'}} />
                            <ZAxis type="number" dataKey="z" range={[60, 400]} name="Score" unit="" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{fontFamily: 'Vazirmatn'}} />
                            <Scatter name="حسابرسی‌ها" data={PLANNING_BUBBLE_DATA} fill="#8884d8">
                                {PLANNING_BUBBLE_DATA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Scatter>
                        </ScatterChart>
                    </ResponsiveContainer>
                 </div>
            </div>

        </div>
    );
}

export default Dashboard;
