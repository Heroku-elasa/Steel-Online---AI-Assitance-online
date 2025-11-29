
import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from 'recharts';
import { 
  STEEL_CHECK_FLOW, STEEL_MATURITY_DATA, STEEL_PARTNER_TRUST, STEEL_CHECK_STATUS_DATA,
  STEEL_ALERTS, STEEL_CHECKS_LIST, STEEL_CUSTOMERS_CREDIT, STEEL_TRANSACTIONS_RECENT
} from '../constants';

// --- COLORS ---
const COLORS = {
  primary: '#1a365d',
  secondary: '#ed8936',
  success: '#48bb78',
  warning: '#ecc94b',
  danger: '#f56565',
  bg: '#f7fafc',
  white: '#ffffff',
  text: '#2d3748',
  textLight: '#718096'
};

const SteelOnline: React.FC = () => {
  const [viewMode, setViewMode] = useState<'storefront' | 'dashboard'>('dashboard');
  const [activeTab, setActiveTab] = useState<'home' | 'checks' | 'credit' | 'calendar' | 'reports'>('home');
  const [activeSlide, setActiveSlide] = useState(0);
  const [showCheckModal, setShowCheckModal] = useState(false);
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

  // --- INTERNAL COMPONENTS ---

  const CheckStatusBadge = ({ status, days }: { status: string, days?: number }) => {
      let colorClass = 'bg-gray-100 text-gray-600';
      let label = 'نامشخص';

      if (status === 'pending') {
          if (days !== undefined && days <= 3) {
              colorClass = 'bg-yellow-100 text-yellow-800';
              label = days === 0 ? 'سررسید امروز' : `${days} روز مانده`;
          } else {
              colorClass = 'bg-blue-100 text-blue-800';
              label = 'در جریان';
          }
      } else if (status === 'cleared') {
          colorClass = 'bg-green-100 text-green-800';
          label = 'وصول شده';
      } else if (status === 'bounced') {
          colorClass = 'bg-red-100 text-red-800';
          label = 'برگشتی';
      } else if (status === 'transferred') {
          colorClass = 'bg-purple-100 text-purple-800';
          label = 'واگذار شده';
      }

      return <span className={`px-2 py-1 rounded-full text-xs font-bold ${colorClass}`}>{label}</span>;
  };

  const NewCheckModal = () => (
      <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
              <div className="bg-[#1a365d] p-4 flex justify-between items-center text-white">
                  <h3 className="font-bold text-lg">📝 ثبت چک دریافتی جدید</h3>
                  <button onClick={() => setShowCheckModal(false)} className="hover:bg-white/10 p-1 rounded">✕</button>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">شماره چک *</label>
                      <input type="text" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#1a365d] outline-none" placeholder="123456" />
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">شماره صیادی *</label>
                      <input type="text" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#1a365d] outline-none" placeholder="16 رقم" />
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">مبلغ (ریال) *</label>
                      <input type="text" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#1a365d] outline-none" placeholder="500,000,000" />
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">بانک *</label>
                      <select className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#1a365d] outline-none">
                          <option>بانک ملت</option>
                          <option>بانک ملی</option>
                          <option>بانک صادرات</option>
                          <option>بانک تجارت</option>
                      </select>
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">تاریخ سررسید *</label>
                      <input type="text" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#1a365d] outline-none" placeholder="1404/05/15" />
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">صادرکننده *</label>
                      <input type="text" className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#1a365d] outline-none" placeholder="جستجوی مشتری..." />
                  </div>
                  <div className="md:col-span-2">
                       <label className="block text-sm font-bold text-gray-700 mb-2">توضیحات / بابت</label>
                       <textarea className="w-full border border-gray-300 rounded p-2 text-sm focus:border-[#1a365d] outline-none" rows={2} placeholder="بابت فاکتور شماره..." />
                  </div>
              </div>
              <div className="bg-gray-50 p-4 flex justify-end gap-3 border-t border-gray-200">
                  <button onClick={() => setShowCheckModal(false)} className="px-4 py-2 rounded text-gray-600 hover:bg-gray-200 text-sm font-bold">انصراف</button>
                  <button onClick={() => setShowCheckModal(false)} className="px-6 py-2 rounded bg-[#48bb78] text-white hover:bg-[#38a169] text-sm font-bold shadow-lg">ثبت نهایی</button>
              </div>
          </div>
      </div>
  );

  const DashboardHome = () => (
      <div className="space-y-6 animate-fadeIn">
          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                      <h3 className="text-gray-500 text-xs font-bold">کل چک‌های در جریان</h3>
                      <span className="text-blue-500 bg-blue-50 p-1.5 rounded-lg">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      </span>
                  </div>
                  <p className="text-2xl font-bold text-[#1a365d]">۴۵,۰۰۰,۰۰۰,۰۰۰ <span className="text-xs text-gray-400 font-normal">ریال</span></p>
                  <p className="text-xs text-gray-500 mt-1">۳۴ فقره چک</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#ecc94b]">
                  <div className="flex justify-between items-start mb-2">
                      <h3 className="text-gray-500 text-xs font-bold">سررسید این هفته</h3>
                      <span className="text-yellow-600 bg-yellow-50 p-1.5 rounded-lg">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </span>
                  </div>
                  <p className="text-2xl font-bold text-[#1a365d]">۸,۵۰۰,۰۰۰,۰۰۰ <span className="text-xs text-gray-400 font-normal">ریال</span></p>
                  <p className="text-xs text-red-500 mt-1 font-bold">۷ فقره (اقدام فوری)</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-[#f56565]">
                   <div className="flex justify-between items-start mb-2">
                      <h3 className="text-gray-500 text-xs font-bold">چک‌های برگشتی</h3>
                      <span className="text-red-500 bg-red-50 p-1.5 rounded-lg">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      </span>
                  </div>
                  <p className="text-2xl font-bold text-[#1a365d]">۲,۳۰۰,۰۰۰,۰۰۰ <span className="text-xs text-gray-400 font-normal">ریال</span></p>
                  <p className="text-xs text-green-600 mt-1">↓ ۵۰٪ کاهش نسبت به ماه قبل</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex justify-between items-start mb-2">
                      <h3 className="text-gray-500 text-xs font-bold">موجودی نقد</h3>
                      <span className="text-green-500 bg-green-50 p-1.5 rounded-lg">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      </span>
                  </div>
                  <p className="text-2xl font-bold text-[#1a365d]">۱۲,۸۰۰,۰۰۰,۰۰۰ <span className="text-xs text-gray-400 font-normal">ریال</span></p>
                  <p className="text-xs text-gray-500 mt-1">در ۴ حساب بانکی فعال</p>
              </div>
          </div>

          {/* Row 2: Alerts & Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Alerts Panel */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col h-[400px]">
                  <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-xl">
                      <h3 className="font-bold text-[#1a365d] flex items-center gap-2">
                          <span className="animate-pulse w-2 h-2 bg-red-500 rounded-full"></span>
                          هشدارهای مهم
                      </h3>
                      <button className="text-xs text-blue-600 hover:underline">مشاهده همه</button>
                  </div>
                  <div className="p-0 overflow-y-auto flex-1">
                      {STEEL_ALERTS.map((alert) => (
                          <div key={alert.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors flex gap-3 items-start">
                              <div className={`mt-1 min-w-[8px] h-2 rounded-full ${alert.type === 'danger' ? 'bg-red-500' : alert.type === 'warning' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                              <div>
                                  <p className="text-sm font-medium text-gray-700">{alert.message}</p>
                                  <p className="text-xs text-gray-400 mt-1">{alert.date}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Status Chart */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-[400px]">
                   <h3 className="font-bold text-[#1a365d] mb-6">وضعیت چک‌های دریافتی</h3>
                   <div className="flex-1">
                       <ResponsiveContainer width="100%" height="100%">
                           <PieChart>
                               <Pie 
                                   data={[
                                       { name: 'در جریان', value: 45, fill: '#3182ce' },
                                       { name: 'وصول شده', value: 35, fill: '#48bb78' },
                                       { name: 'واگذار شده', value: 15, fill: '#ecc94b' },
                                       { name: 'برگشتی', value: 5, fill: '#f56565' },
                                   ]}
                                   cx="50%" cy="50%" 
                                   innerRadius={60} 
                                   outerRadius={80} 
                                   paddingAngle={5}
                                   dataKey="value"
                               >
                                   <Cell fill="#3182ce" />
                                   <Cell fill="#48bb78" />
                                   <Cell fill="#ecc94b" />
                                   <Cell fill="#f56565" />
                               </Pie>
                               <Tooltip contentStyle={{borderRadius: '8px', fontFamily: 'Vazirmatn'}} />
                               <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{fontFamily: 'Vazirmatn', fontSize: '12px'}} />
                           </PieChart>
                       </ResponsiveContainer>
                   </div>
              </div>

              {/* Monthly Flow Chart */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-[400px]">
                   <h3 className="font-bold text-[#1a365d] mb-6">جریان نقدی ماهانه (۶ ماه)</h3>
                   <div className="flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={[
                                {name: 'دی', in: 4000, out: 2400},
                                {name: 'بهمن', in: 3000, out: 1398},
                                {name: 'اسفند', in: 2000, out: 5800},
                                {name: 'فروردین', in: 2780, out: 3908},
                                {name: 'اردیبهشت', in: 1890, out: 4800},
                                {name: 'خرداد', in: 2390, out: 3800},
                            ]} barGap={5}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                                <XAxis dataKey="name" tick={{fontSize: 12, fontFamily: 'Vazirmatn'}} axisLine={false} tickLine={false} />
                                <YAxis tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                                <Tooltip contentStyle={{borderRadius: '8px', fontFamily: 'Vazirmatn'}} />
                                <Bar dataKey="in" name="دریافتی" fill="#1a365d" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="out" name="پرداختی" fill="#ed8936" radius={[4, 4, 0, 0]} />
                                <Legend />
                            </BarChart>
                        </ResponsiveContainer>
                   </div>
              </div>
          </div>

          {/* Row 3: Tables */}
          <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                   <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                      <h3 className="font-bold text-[#1a365d]">آخرین تراکنش‌ها</h3>
                      <button className="text-xs px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">مشاهده همه</button>
                  </div>
                  <div className="overflow-x-auto">
                      <table className="w-full text-sm text-right">
                          <thead className="bg-gray-50 text-gray-500">
                              <tr>
                                  <th className="px-6 py-3">تاریخ</th>
                                  <th className="px-6 py-3">شرح</th>
                                  <th className="px-6 py-3">نوع</th>
                                  <th className="px-6 py-3">مبلغ</th>
                                  <th className="px-6 py-3">مانده</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                              {STEEL_TRANSACTIONS_RECENT.map((tx, idx) => (
                                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                                      <td className="px-6 py-4 font-mono text-gray-600">{tx.date}</td>
                                      <td className="px-6 py-4 text-gray-800">{tx.desc}</td>
                                      <td className="px-6 py-4">
                                          <span className={`px-2 py-1 rounded text-xs font-bold ${tx.type === 'in' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                              {tx.type === 'in' ? 'دریافت' : 'پرداخت'}
                                          </span>
                                      </td>
                                      <td className={`px-6 py-4 font-bold ${tx.type === 'in' ? 'text-green-600' : 'text-red-600'}`}>
                                          {tx.type === 'in' ? '+' : '-'}{tx.amount.toLocaleString()}
                                      </td>
                                      <td className="px-6 py-4 text-gray-600 font-mono">{tx.balance.toLocaleString()}</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
  );

  const ChecksView = () => (
      <div className="space-y-6 animate-fadeIn">
          {/* Action Bar */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-2 w-full md:w-auto">
                  <button onClick={() => setShowCheckModal(true)} className="px-4 py-2 bg-[#1a365d] text-white rounded-lg text-sm font-bold shadow hover:bg-[#132845] transition-colors flex items-center gap-2">
                      <span>+</span> ثبت چک جدید
                  </button>
                  <button className="px-4 py-2 bg-[#ed8936] text-white rounded-lg text-sm font-bold shadow hover:bg-[#dd6b20] transition-colors">
                      📤 واگذاری چک
                  </button>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                      <input type="text" placeholder="جستجوی شماره چک، صادرکننده..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:border-[#1a365d] outline-none" />
                      <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </button>
              </div>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-wrap gap-4 items-end">
              <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1">وضعیت</label>
                  <select className="px-3 py-1.5 border border-gray-300 rounded text-sm min-w-[120px] outline-none">
                      <option>همه</option>
                      <option>در جریان</option>
                      <option>وصول شده</option>
                      <option>برگشتی</option>
                  </select>
              </div>
              <div>
                   <label className="block text-xs font-bold text-gray-500 mb-1">بانک</label>
                  <select className="px-3 py-1.5 border border-gray-300 rounded text-sm min-w-[120px] outline-none">
                      <option>همه</option>
                      <option>ملت</option>
                      <option>ملی</option>
                      <option>صادرات</option>
                  </select>
              </div>
              <div className="mr-auto">
                  <button className="text-sm text-blue-600 hover:underline">پاک کردن فیلترها</button>
              </div>
          </div>

          {/* Check Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                  <table className="w-full text-sm text-right">
                      <thead className="bg-[#f1f5f9] text-gray-600 border-b border-gray-200">
                          <tr>
                              <th className="px-6 py-4 w-10"><input type="checkbox" className="rounded" /></th>
                              <th className="px-6 py-4">شماره چک</th>
                              <th className="px-6 py-4">صادرکننده</th>
                              <th className="px-6 py-4">بانک / شعبه</th>
                              <th className="px-6 py-4">مبلغ (ریال)</th>
                              <th className="px-6 py-4">تاریخ سررسید</th>
                              <th className="px-6 py-4">وضعیت</th>
                              <th className="px-6 py-4">عملیات</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                          {STEEL_CHECKS_LIST.map((check) => (
                              <tr key={check.id} className="hover:bg-[#f8fafc] transition-colors group">
                                  <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
                                  <td className="px-6 py-4 font-mono text-[#1a365d] font-bold">{check.id}</td>
                                  <td className="px-6 py-4 font-medium text-gray-800">{check.issuer}</td>
                                  <td className="px-6 py-4 text-gray-600">{check.bank} <span className="text-xs text-gray-400">({check.branch})</span></td>
                                  <td className="px-6 py-4 font-bold text-gray-800">{check.amount.toLocaleString()}</td>
                                  <td className="px-6 py-4 font-mono text-gray-600">{check.dueDate}</td>
                                  <td className="px-6 py-4">
                                      <CheckStatusBadge status={check.status} days={check.daysLeft} />
                                  </td>
                                  <td className="px-6 py-4">
                                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                          <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded" title="مشاهده"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></button>
                                          <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded" title="ویرایش"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></button>
                                          <button className="p-1.5 text-red-600 hover:bg-red-50 rounded" title="حذف"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                                      </div>
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
                  <span>نمایش ۱ تا ۶ از ۵۲ مورد</span>
                  <div className="flex gap-1">
                      <button className="px-2 py-1 border rounded bg-white hover:bg-gray-100 disabled:opacity-50">قبلی</button>
                      <button className="px-2 py-1 border rounded bg-[#1a365d] text-white">1</button>
                      <button className="px-2 py-1 border rounded bg-white hover:bg-gray-100">2</button>
                      <button className="px-2 py-1 border rounded bg-white hover:bg-gray-100">3</button>
                      <button className="px-2 py-1 border rounded bg-white hover:bg-gray-100">بعدی</button>
                  </div>
              </div>
          </div>
      </div>
  );

  const CreditView = () => (
      <div className="space-y-6 animate-fadeIn">
           {/* Credit Stats */}
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-xs font-bold mb-1">کل اعتبار داده شده</p>
                    <p className="text-xl font-bold text-[#1a365d]">۱۵۰ میلیارد</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-xs font-bold mb-1">اعتبار استفاده شده</p>
                    <p className="text-xl font-bold text-orange-500">۸۵ میلیارد</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-xs font-bold mb-1">اعتبار باقی‌مانده</p>
                    <p className="text-xl font-bold text-green-500">۶۵ میلیارد</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-gray-500 text-xs font-bold mb-1">مشتریان فعال اعتباری</p>
                    <p className="text-xl font-bold text-gray-700">۴۵ مشتری</p>
                </div>
           </div>

           {/* Credit Table */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-[#1a365d] mb-6">وضعیت اعتبار مشتریان</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-right">
                        <thead className="bg-[#f1f5f9] text-gray-600">
                            <tr>
                                <th className="px-6 py-4">مشتری</th>
                                <th className="px-6 py-4">سقف اعتبار</th>
                                <th className="px-6 py-4">استفاده شده</th>
                                <th className="px-6 py-4">چک در جریان</th>
                                <th className="px-6 py-4 w-1/3">وضعیت مصرف</th>
                                <th className="px-6 py-4">عملیات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {STEEL_CUSTOMERS_CREDIT.map((cust, idx) => {
                                const percent = Math.round((cust.used / cust.limit) * 100);
                                return (
                                    <tr key={idx} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-bold text-gray-800">{cust.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{cust.limit.toLocaleString()}</td>
                                        <td className="px-6 py-4 font-medium text-gray-800">{cust.used.toLocaleString()}</td>
                                        <td className="px-6 py-4 text-center">{cust.activeChecks}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className={`h-full rounded-full ${percent > 90 ? 'bg-red-500' : percent > 70 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{width: `${percent}%`}}></div>
                                                </div>
                                                <span className={`text-xs font-bold w-10 ${percent > 90 ? 'text-red-600' : percent > 70 ? 'text-yellow-600' : 'text-green-600'}`}>{percent}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-[#1a365d] hover:underline text-xs font-bold">مدیریت</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
           </div>
      </div>
  );

  return (
    <div className="w-full bg-[#f5f5f7] min-h-screen font-sans text-[#2d3748] dir-rtl">
      {/* CUSTOM STYLES */}
      <style>{`
        .dir-rtl { direction: rtl; }
        .dir-ltr { direction: ltr; }
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
      `}</style>

      {/* --- HEADER --- */}
      <div className="w-full bg-white h-[60px] shadow-sm fixed top-0 z-50 flex items-center justify-between px-6 border-b border-gray-200">
         <div className="flex items-center gap-4">
             <div className="w-8 h-8 bg-[#1a365d] rounded flex items-center justify-center text-white font-bold">S</div>
             <h1 className="font-bold text-lg text-[#1a365d]">استیل آنلاین ۲۰ <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded ml-2">سیستم مدیریت مالی</span></h1>
         </div>
         
         <div className="flex bg-[#f7fafc] p-1 rounded-lg border border-gray-200">
             <button 
                onClick={() => setViewMode('dashboard')}
                className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${viewMode === 'dashboard' ? 'bg-[#1a365d] text-white shadow' : 'text-gray-500 hover:text-gray-900'}`}
             >
                 داشبورد مدیریت
             </button>
             <button 
                onClick={() => setViewMode('storefront')}
                className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${viewMode === 'storefront' ? 'bg-[#D41F5B] text-white shadow' : 'text-gray-500 hover:text-gray-900'}`}
             >
                 فروشگاه آنلاین
             </button>
         </div>

         <div className="flex items-center gap-4">
             <div className="relative">
                 <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                 <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
             </div>
             <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                     {/* User Avatar Placeholder */}
                     <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 24H0V0h24v24z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                 </div>
                 <div className="hidden md:block">
                     <p className="text-sm font-bold text-gray-700">مدیر مالی</p>
                 </div>
             </div>
         </div>
      </div>

      <div className="pt-[60px] min-h-screen flex">
         
         {/* --- INTERNAL SIDEBAR (Only for Dashboard Mode) --- */}
         {viewMode === 'dashboard' && (
             <div className="w-[260px] bg-white border-l border-gray-200 hidden lg:flex flex-col fixed h-full z-40">
                 <div className="p-6">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">منوی اصلی</p>
                     <nav className="space-y-1">
                         <button 
                             onClick={() => setActiveTab('home')}
                             className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-colors ${activeTab === 'home' ? 'bg-[#ebf8ff] text-[#2c5282]' : 'text-gray-600 hover:bg-gray-50'}`}
                         >
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                             داشبورد اصلی
                         </button>
                         <button 
                             onClick={() => setActiveTab('checks')}
                             className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-colors ${activeTab === 'checks' ? 'bg-[#fffaf0] text-[#c05621]' : 'text-gray-600 hover:bg-gray-50'}`}
                         >
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                             مدیریت چک‌ها
                         </button>
                         <button 
                             onClick={() => setActiveTab('credit')}
                             className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-colors ${activeTab === 'credit' ? 'bg-[#f0fff4] text-[#276749]' : 'text-gray-600 hover:bg-gray-50'}`}
                         >
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                             مشتریان و اعتبار
                         </button>
                         <button 
                             onClick={() => setActiveTab('calendar')}
                             className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-colors ${activeTab === 'calendar' ? 'bg-[#f7fafc] text-[#2d3748]' : 'text-gray-600 hover:bg-gray-50'}`}
                         >
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                             تقویم سررسید
                         </button>
                         <button 
                             onClick={() => setActiveTab('reports')}
                             className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-colors ${activeTab === 'reports' ? 'bg-[#f7fafc] text-[#2d3748]' : 'text-gray-600 hover:bg-gray-50'}`}
                         >
                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                             گزارشات مالی
                         </button>
                     </nav>
                 </div>
                 <div className="mt-auto p-6 border-t border-gray-200">
                     <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                         خروج از سیستم
                     </button>
                 </div>
             </div>
         )}

         {/* --- MAIN CONTENT AREA --- */}
         <div className={`flex-1 p-6 transition-all duration-300 ${viewMode === 'dashboard' ? 'lg:mr-[260px]' : ''}`}>
             
             {viewMode === 'dashboard' ? (
                 <>
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <span>استیل آنلاین ۲۰</span>
                        <span>/</span>
                        <span className="font-bold text-[#1a365d]">{activeTab === 'home' ? 'داشبورد اصلی' : activeTab === 'checks' ? 'مدیریت چک‌ها' : activeTab === 'credit' ? 'اعتبار مشتریان' : '...'}</span>
                    </div>

                    {/* Render Content Based on Tab */}
                    {activeTab === 'home' && <DashboardHome />}
                    {activeTab === 'checks' && <ChecksView />}
                    {activeTab === 'credit' && <CreditView />}
                    {(activeTab === 'calendar' || activeTab === 'reports') && (
                        <div className="flex flex-col items-center justify-center h-[400px] bg-white rounded-xl border border-gray-200">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-700">این بخش در حال توسعه است</h3>
                            <p className="text-gray-500 mt-2">به زودی امکانات کامل تقویم و گزارش‌ساز پیشرفته اضافه خواهد شد.</p>
                        </div>
                    )}
                 </>
             ) : (
                 // --- STOREFRONT VIEW (Original) ---
                 <div className="animate-fadeIn">
                    {/* Hero Slider */}
                    <div className="relative w-full h-[200px] md:h-[400px] rounded-2xl overflow-hidden group shadow-lg mb-8">
                        <div className={`absolute inset-0 transition-opacity duration-500 ${activeSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="w-full h-full bg-gradient-to-r from-[#2c3e50] to-[#3498db] flex items-center justify-center text-white text-3xl font-bold">
                                تضمین بهترین قیمت آهن‌آلات
                            </div>
                        </div>
                        <div className={`absolute inset-0 transition-opacity duration-500 ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="w-full h-full bg-gradient-to-r from-[#c0392b] to-[#e74c3c] flex items-center justify-center text-white text-3xl font-bold">
                                خرید اعتباری و اقساطی
                            </div>
                        </div>
                        <button onClick={() => setActiveSlide(0)} className="absolute bottom-4 right-1/2 translate-x-4 w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100"></button>
                        <button onClick={() => setActiveSlide(1)} className="absolute bottom-4 left-1/2 -translate-x-4 w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100"></button>
                    </div>

                    {/* Split Flap Section */}
                    <section className="min-h-[400px] py-[40px] relative bg-gradient-to-l from-[#6B0029] to-[#620025] overflow-hidden rounded-2xl shadow-xl mb-8">
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
                            <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
                                {splitFlapPrices.map((item, idx) => (
                                    <div key={idx} className="min-w-[300px] md:min-w-[400px] snap-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                                        <h3 className="text-white text-2xl font-bold mb-2">{item.name.split(' ')[0]}</h3>
                                        <p className="text-white/70 text-sm mb-6">{item.name}</p>
                                        <div className="mb-8">
                                            <p className="text-white text-sm mb-2">قیمت همین لحظه (ریال)</p>
                                            <div className="flex justify-center dir-ltr gap-1">
                                                {item.price.split('').map((digit, dIdx) => (
                                                    <div key={dIdx} className="splitflap">{digit}</div>
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

                    {/* Footer for Storefront */}
                    <footer className="bg-white rounded-2xl p-8 shadow-sm text-center">
                        <h2 className="text-[#7F0031] font-bold text-xl mb-4">استیل آنلاین ۲۰</h2>
                        <div className="text-sm text-gray-500 mb-4">
                            <p>تهران، بازار آهن شادآباد، بلوار بهار</p>
                            <p>تماس: 021-54712</p>
                        </div>
                        <p className="text-xs text-gray-400">© ۱۴۰۴ کلیه حقوق محفوظ است.</p>
                    </footer>
                 </div>
             )}

         </div>
      </div>

      {/* Modals */}
      {showCheckModal && <NewCheckModal />}
      
    </div>
  );
};

export default SteelOnline;
