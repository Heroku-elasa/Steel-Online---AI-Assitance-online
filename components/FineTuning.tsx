
import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, Cell, AreaChart, Area
} from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

// --- MOCK DATA FOR DASHBOARD ---
const EXPERIMENTS_DATA = [
  { id: 'run-1', name: 'glowing-sunset-12', date: '2 min ago', epochs: 6, batch: 4, acc: 98.5, loss: 0.04, status: 'completed', color: '#10b981', user: 'Ali M.', runtime: '12m 30s' },
  { id: 'run-2', name: 'azure-sky-11', date: '2 hours ago', epochs: 4, batch: 8, acc: 94.2, loss: 0.12, status: 'completed', color: '#3b82f6', user: 'Sara K.', runtime: '08m 15s' },
  { id: 'run-3', name: 'crimson-moon-10', date: '1 day ago', epochs: 3, batch: 4, acc: 89.1, loss: 0.35, status: 'failed', color: '#ef4444', user: 'Admin', runtime: '02m 45s' },
  { id: 'run-4', name: 'silent-breeze-09', date: '2 days ago', epochs: 10, batch: 16, acc: 96.8, loss: 0.09, status: 'completed', color: '#8b5cf6', user: 'Ali M.', runtime: '25m 10s' },
  { id: 'run-5', name: 'misty-river-08', date: '3 days ago', epochs: 5, batch: 4, acc: 91.5, loss: 0.18, status: 'completed', color: '#f59e0b', user: 'Reza P.', runtime: '10m 00s' },
];

const METRICS_HISTORY = Array.from({ length: 20 }, (_, i) => ({
  step: i,
  'glowing-sunset-12': Math.min(0.99, 0.6 + Math.log(i + 1) * 0.12 + Math.random() * 0.02),
  'azure-sky-11': Math.min(0.96, 0.5 + Math.log(i + 1) * 0.14 + Math.random() * 0.03),
  'crimson-moon-10': 0.4 + Math.random() * 0.3, // erratic
  'silent-breeze-09': Math.min(0.97, 0.55 + Math.log(i + 1) * 0.13 + Math.random() * 0.01),
  'misty-river-08': Math.min(0.92, 0.5 + Math.log(i + 1) * 0.11 + Math.random() * 0.02),
}));

const PREDICTIONS_DATA = [
    { id: 1, text: "فاکتور شماره ۱۲۳۰۰ برای شرکت کاغذی آلفا بدون کد اقتصادی", label: "Fraud", models: { 'glowing-sunset-12': { pred: "Fraud", conf: 99 }, 'azure-sky-11': { pred: "Fraud", conf: 88 }, 'crimson-moon-10': { pred: "Clean", conf: 45 } } },
    { id: 2, text: "هزینه پذیرایی نرمال مطابق آیین‌نامه داخلی", label: "Clean", models: { 'glowing-sunset-12': { pred: "Clean", conf: 98 }, 'azure-sky-11': { pred: "Clean", conf: 92 }, 'crimson-moon-10': { pred: "Fraud", conf: 55 } } },
    { id: 3, text: "خرید دارایی ثابت بدون تاییدیه کمیسیون معاملات", label: "Fraud", models: { 'glowing-sunset-12': { pred: "Fraud", conf: 95 }, 'azure-sky-11': { pred: "Fraud", conf: 70 }, 'crimson-moon-10': { pred: "Clean", conf: 30 } } },
];

const GPU_METRICS = Array.from({ length: 20 }, (_, i) => ({
    time: i,
    usage: 40 + Math.random() * 50,
    memory: 60 + Math.random() * 20
}));

const FineTuning: React.FC = () => {
  const { t, direction } = useLanguage();
  const [activeTab, setActiveTab] = useState<'studio' | 'dashboard'>('studio');

  // Studio State
  const [isTraining, setIsTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [modelName, setModelName] = useState(() => localStorage.getItem('hesabrasyar_ft_modelName') || "حسابرس‌یار ضدتقلب (JAR2020)");
  const [epochs, setEpochs] = useState(() => parseInt(localStorage.getItem('hesabrasyar_ft_epochs') || '6'));
  const [batchSize, setBatchSize] = useState(() => parseInt(localStorage.getItem('hesabrasyar_ft_batchSize') || '4'));
  const [trainingSequence, setTrainingSequence] = useState<string[]>([]);
  const [metricData, setMetricData] = useState<{epoch: number, loss: number, accuracy: number}[]>([]);

  useEffect(() => {
      localStorage.setItem('hesabrasyar_ft_modelName', modelName);
      localStorage.setItem('hesabrasyar_ft_epochs', epochs.toString());
      localStorage.setItem('hesabrasyar_ft_batchSize', batchSize.toString());
  }, [modelName, epochs, batchSize]);

  useEffect(() => {
    if (isTraining && trainingSequence.length > 0) {
      let step = 0;
      const interval = setInterval(() => {
        if (step >= trainingSequence.length) {
          clearInterval(interval);
          setIsTraining(false);
          return;
        }
        setLogs(prev => [...prev, trainingSequence[step]]);
        setProgress(prev => Math.min(prev + (100 / trainingSequence.length), 100));
        step++;
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isTraining, trainingSequence]);

  const runSimulation = () => {
    const sequence = [
        "Initializing Vertex AI client...",
        "Connecting to Weights & Biases (W&B)...",
        "W&B API Key verified: 2fc8***...98d",
        "Initializing Weave project: 'hesabrasyar-intelligent-audit-assistant/hesabrasyar-fraud-detection-1404'...",
        "Weave Op Tracking: Enabled (@weave.op)",
        `Loading dataset: '${file ? file.name : 'Unknown'}'...`,
        "Analysis: 170 records detected (85 Fraud / 85 Clean)",
        "Mapping columns to Iranian Accounting Standards (1404)...",
        "Feature Engineering: 'misstate' mapped to 'تحریف بااهمیت' (Article 169)",
        "Converting to JSONL format for Gemini 2.5 Flash...",
        "Uploading to gs://hesabyar-fraud-data/train/...",
        `Creating tuning job: '${modelName.replace(/\s+/g, '-').toLowerCase()}'...`,
        `Configuration: Base=gemini-2.5-flash, Epochs=${epochs}, Batch Size=${batchSize}`,
        "W&B Run: 'hesabrasyar-fraud-detection-1404' started..."
    ];

    const newMetrics = [];
    for (let i = 1; i <= epochs; i++) {
        const loss = parseFloat((1.5 - (i / epochs) * 1.3 + (Math.random() * 0.1)).toFixed(2));
        const accuracy = parseInt((60 + (i / epochs) * 35 - (Math.random() * 2)).toFixed(0));
        
        sequence.push(`Epoch ${i}/${epochs} - Loss: ${loss} - Accuracy: ${accuracy}%`);
        sequence.push(`Weave Trace: Batch processed. Logging metrics to W&B...`);
        newMetrics.push({ epoch: i, loss, accuracy });
    }

    sequence.push("Tuning completed successfully.");
    sequence.push("Evaluation: Running 'fraud_detection_score' on validation set...");
    sequence.push("Score: 98.5% detection rate on JAR 2020 holdout.");
    sequence.push("Model exported to Vertex AI Model Registry.");
    sequence.push("W&B Run finished. Syncing artifacts to dashboard...");
    sequence.push("Model is ready for 'Misstatement Detection (Article 169)'.");

    setTrainingSequence(sequence);
    setMetricData(newMetrics);
    
    setLogs([]);
    setProgress(0);
    setIsTraining(true);
  };

  const handleStartTraining = async () => {
    if (!file && !file?.name?.includes('JAR2020')) {
        if (!file) {
             alert("لطفاً ابتدا فایل دیتاست (JAR 2020) را آپلود کنید یا دکمه تست را بزنید.");
             return;
        }
    }
    runSimulation();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      if (e.target.files && e.target.files[0]) {
          const selectedFile = e.target.files[0];
          const fileName = selectedFile.name.toLowerCase();
          if (!fileName.endsWith('.csv') && !fileName.endsWith('.jsonl')) {
              setError("فرمت فایل نامعتبر است. لطفاً فقط فایل‌های CSV یا JSONL انتخاب کنید.");
              setFile(null);
              e.target.value = '';
              return;
          }
          setFile(selectedFile);
      }
  };

  const loadDemoData = () => {
      setError(null);
      const demoFile = { name: 'data_FraudDetection_JAR2020.csv', size: 185000, type: 'text/csv' } as File;
      setFile(demoFile);
      setModelName("HesabrasYar Anti-Fraud (JAR2020)");
      setEpochs(6);
      setBatchSize(4);
  };

  const handleDownloadLogs = () => {
    if (logs.length === 0) return;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const logContent = logs.join('\n');
    const blob = new Blob([logContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hesabrasyar-logs-${timestamp}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 w-full bg-[#f5f7fa] min-h-screen pb-32" dir={direction}>
      {/* Header with Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-200 pb-4">
        <div>
           <h1 className="text-2xl font-bold text-brand-black mb-1">
               {activeTab === 'studio' ? t('ft_studio_title') : t('ft_dash_title')}
           </h1>
           <p className="text-sage-5 text-sm">
                {activeTab === 'studio' 
                   ? t('ft_studio_desc') 
                   : t('ft_dash_desc')}
           </p>
        </div>
        <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
           <button 
               onClick={() => setActiveTab('studio')}
               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === 'studio' ? 'bg-brand-green text-white shadow' : 'text-gray-500 hover:text-gray-800'}`}
           >
               {t('ft_tab_studio')}
           </button>
           <button 
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'dashboard' ? 'bg-brand-green text-white shadow' : 'text-gray-500 hover:text-gray-800'}`}
           >
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
               {t('ft_tab_dashboard')}
           </button>
        </div>
      </div>

      {activeTab === 'studio' ? (
        // --- STUDIO VIEW ---
        <div className="grid grid-cols-12 gap-6">
            {/* Configuration Column */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
                <div className="bg-[#e0f2fe] border border-[#bae6fd] rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3">
                    <div className="mt-1">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0369a1]" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2-1-2-1-2 1 2 1zm0-3.5L6 6l6-1.5L18 6l-6 1.5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    </div>
                    <div>
                    <h4 className="font-bold text-[#0c4a6e] text-sm">{t('ft_connect_wb')}</h4>
                    <p className="text-xs text-[#075985] mt-1 mb-3 leading-relaxed">
                        {t('ft_connect_desc')}
                    </p>
                    <button onClick={() => setActiveTab('dashboard')} className="inline-flex items-center gap-2 bg-[#0284c7] text-white text-xs px-3 py-2 rounded-lg hover:bg-[#0369a1] transition-colors shadow-sm">
                        <span>{t('ft_view_dash')}</span>
                    </button>
                    </div>
                </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-sage-2 shadow-sm">
                    <h3 className="font-bold text-brand-black mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 bg-sage-2 rounded-full flex items-center justify-center text-xs text-brand-green">1</span>
                        {t('ft_step_1')}
                    </h3>
                    <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors relative group mb-4 ${error ? 'border-red-400 bg-red-50' : 'border-sage-3 hover:bg-sage-1'}`}>
                        <input type="file" accept=".xlsx,.csv,.jsonl" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                        <div className="flex flex-col items-center gap-3">
                            {error ? <span className="text-sm font-bold text-red-600">{error}</span> : file ? <span className="text-brand-green font-bold text-sm bg-green-50 px-3 py-1 rounded">{file.name}</span> : <span className="text-sm font-medium text-brand-black">{t('ft_drop_file')}</span>}
                        </div>
                    </div>
                    <div className="bg-sage-1/50 rounded-lg p-3 border border-sage-2">
                        <button onClick={loadDemoData} className="text-xs w-full flex items-center justify-between bg-white border border-sage-3 hover:border-brand-blue hover:text-brand-blue transition-all px-3 py-2 rounded text-gray-600 group">
                            <span className="group-hover:font-medium">{t('ft_test_data')}</span>
                            <span className="text-[10px] bg-blue-50 text-brand-blue px-2 py-0.5 rounded-full flex items-center gap-1"><span>▶</span> Test</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-sage-2 shadow-sm">
                    <h3 className="font-bold text-brand-black mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 bg-sage-2 rounded-full flex items-center justify-center text-xs text-brand-green">2</span>
                        {t('ft_step_2')}
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">{t('ft_model_name')}</label>
                            <input type="text" value={modelName} onChange={(e) => setModelName(e.target.value)} className="w-full bg-sage-1 border border-sage-3 rounded-lg px-3 py-2 text-sm outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">{t('ft_epochs')}</label>
                                <input type="number" value={epochs} onChange={(e) => setEpochs(parseInt(e.target.value) || 5)} className="w-full bg-sage-1 border border-sage-3 rounded-lg px-3 py-2 text-sm outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">{t('ft_batch_size')}</label>
                                <input type="number" value={batchSize} onChange={(e) => setBatchSize(parseInt(e.target.value) || 4)} className="w-full bg-sage-1 border border-sage-3 rounded-lg px-3 py-2 text-sm outline-none" />
                            </div>
                        </div>
                    </div>
                    <button onClick={handleStartTraining} disabled={isTraining} className={`w-full mt-6 py-3 rounded-lg font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${isTraining ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-brand-green to-green-600'}`}>
                        {isTraining ? t('ft_training') : t('ft_start_btn')}
                    </button>
                    {(progress > 0) && (
                        <div className="mt-5">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-xs font-medium text-gray-500">{t('ft_progress')}</span>
                                <span className="text-xs font-bold text-brand-green">{Math.round(progress)}%</span>
                            </div>
                            <div className="w-full bg-sage-1 rounded-full h-2.5 overflow-hidden border border-sage-2">
                                <div className={`bg-gradient-to-r from-brand-green to-green-400 h-full rounded-full transition-all duration-300 ease-out`} style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Visualization Column */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
                <div className="bg-[#1e1e1e] rounded-xl shadow-lg overflow-hidden flex flex-col h-[400px]">
                    <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-xs text-gray-400 ml-2 font-mono">weave-shell — wandb-enabled</span>
                        </div>
                        <button onClick={handleDownloadLogs} disabled={logs.length === 0} className="text-xs text-gray-300 hover:text-white flex items-center gap-1"><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg> Save Trace</button>
                    </div>
                    <div className="p-4 font-mono text-xs md:text-sm text-green-400 overflow-y-auto flex-1 space-y-1" dir="ltr">
                        <p className="text-gray-500"># Waiting for job to start...</p>
                        {logs.map((log, index) => <p key={index} className="break-words"><span className="text-blue-400 mr-2">➜</span>{log}</p>)}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-sage-2 shadow-sm h-[300px]">
                    <h3 className="font-bold text-brand-black mb-6 text-sm flex justify-between items-center">
                        <span>{t('ft_convergence')}</span>
                        <span className="text-xs font-normal text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Live from Weave
                        </span>
                    </h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={progress > 0 ? metricData.slice(0, Math.max(1, Math.ceil((progress / 100) * epochs))) : []}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                            <XAxis dataKey="epoch" tick={{fontSize: 12}} axisLine={false} tickLine={false} domain={[1, epochs]} type="number" />
                            <YAxis yAxisId="left" tick={{fontSize: 12}} axisLine={false} tickLine={false} domain={[0, 2]} />
                            <YAxis yAxisId="right" orientation="right" tick={{fontSize: 12}} axisLine={false} tickLine={false} domain={[0, 100]} />
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            <Line yAxisId="left" type="monotone" dataKey="loss" stroke="#dc3545" strokeWidth={2} dot={{r: 4}} name="Loss" />
                            <Line yAxisId="right" type="monotone" dataKey="accuracy" stroke="#28a745" strokeWidth={2} dot={{r: 4}} name="Accuracy %" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
      ) : (
        // --- DASHBOARD VIEW ---
        <div className="space-y-6">
            
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs">{t('ft_kpi_runs')}</p>
                        <p className="text-xl font-bold text-gray-800">12 Run</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs">{t('ft_kpi_acc')}</p>
                        <p className="text-xl font-bold text-gray-800">98.5%</p>
                    </div>
                </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs">{t('ft_kpi_time')}</p>
                        <p className="text-xl font-bold text-gray-800">45h 12m</p>
                    </div>
                </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs">{t('ft_kpi_res')}</p>
                        <p className="text-xl font-bold text-gray-800">Healthy</p>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-12 gap-6">
                
                {/* Runs Table */}
                <div className="col-span-12 lg:col-span-4 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-bold text-gray-800 text-sm">{t('ft_list_title')}</h3>
                        <div className="flex gap-2">
                             <input type="text" placeholder={t('ft_search')} className="bg-gray-50 text-xs px-2 py-1 rounded border border-gray-200 outline-none w-24" />
                        </div>
                    </div>
                    <div className="overflow-x-auto flex-1">
                        <table className={`w-full text-xs ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                            <thead className="bg-gray-50 text-gray-500 font-medium">
                                <tr>
                                    <th className="px-3 py-2">{t('ft_col_name')}</th>
                                    <th className="px-3 py-2">{t('ft_epochs')}</th>
                                    <th className="px-3 py-2">Batch</th>
                                    <th className="px-3 py-2">{t('ft_col_acc')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {EXPERIMENTS_DATA.map(run => (
                                    <tr key={run.id} className="hover:bg-blue-50/50 cursor-pointer transition-colors group">
                                        <td className="px-3 py-2 font-medium flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: run.color }}></span>
                                            <div className="flex flex-col">
                                                <span className="text-gray-800 group-hover:text-blue-600">{run.name}</span>
                                                <span className="text-[10px] text-gray-400">{run.date} • {run.user}</span>
                                            </div>
                                        </td>
                                        <td className="px-3 py-2 text-gray-600">{run.epochs}</td>
                                        <td className="px-3 py-2 text-gray-600">{run.batch}</td>
                                        <td className="px-3 py-2 font-bold" style={{ color: run.status === 'failed' ? 'red' : 'green' }}>{run.acc}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Charts Area */}
                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 gap-6">
                    
                    {/* Metrics Comparison */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                         <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-gray-800 text-sm">{t('ft_chart_metrics')}</h3>
                            <div className="flex gap-2">
                                <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-500">Validation Accuracy</span>
                                <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded text-gray-400">Training Loss</span>
                            </div>
                         </div>
                         <div className="h-[250px] w-full" dir="ltr">
                             <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={METRICS_HISTORY}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="step" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                                    <YAxis domain={[0.4, 1]} tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                                    <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '12px' }} />
                                    <Legend wrapperStyle={{fontSize: '11px', paddingTop: '10px'}} />
                                    {EXPERIMENTS_DATA.filter(r => r.status !== 'failed').map(run => (
                                        <Line 
                                            key={run.id} 
                                            type="monotone" 
                                            dataKey={run.name} 
                                            stroke={run.color} 
                                            strokeWidth={2} 
                                            dot={false}
                                            activeDot={{r: 6}} 
                                        />
                                    ))}
                                </LineChart>
                             </ResponsiveContainer>
                         </div>
                    </div>

                    {/* Predictions Visualization */}
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                         <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-purple" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                {t('ft_chart_pred')}
                            </h3>
                            <button className="text-xs text-blue-600 hover:underline">View All</button>
                         </div>
                         <div className="overflow-x-auto">
                            <table className={`w-full text-xs ${direction === 'rtl' ? 'text-right' : 'text-left'} border-collapse`}>
                                <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                                    <tr>
                                        <th className="px-3 py-2 w-1/2">{t('ft_col_input')}</th>
                                        <th className="px-3 py-2">{t('ft_col_label')}</th>
                                        <th className="px-3 py-2 text-center border-r border-gray-200" style={{color: '#10b981'}}>glowing-sunset-12</th>
                                        <th className="px-3 py-2 text-center" style={{color: '#3b82f6'}}>azure-sky-11</th>
                                        <th className="px-3 py-2 text-center" style={{color: '#ef4444'}}>crimson-moon-10</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {PREDICTIONS_DATA.map(item => (
                                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-3 py-3 text-gray-700 leading-relaxed max-w-xs truncate" title={item.text}>{item.text}</td>
                                            <td className="px-3 py-3">
                                                <span className={`px-2 py-1 rounded-full text-[10px] ${item.label === 'Fraud' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                                    {item.label}
                                                </span>
                                            </td>
                                            {/* Model 1 Prediction */}
                                            <td className="px-3 py-3 text-center border-r border-gray-200 bg-[#10b981]/5">
                                                 <div className="flex flex-col items-center">
                                                    <span className={`font-bold ${item.models['glowing-sunset-12'].pred === item.label ? 'text-green-600' : 'text-red-500'}`}>
                                                        {item.models['glowing-sunset-12'].pred}
                                                    </span>
                                                    <span className="text-[9px] text-gray-400">{item.models['glowing-sunset-12'].conf}% Conf</span>
                                                 </div>
                                            </td>
                                            {/* Model 2 Prediction */}
                                            <td className="px-3 py-3 text-center bg-[#3b82f6]/5">
                                                <div className="flex flex-col items-center">
                                                    <span className={`font-bold ${item.models['azure-sky-11'].pred === item.label ? 'text-green-600' : 'text-red-500'}`}>
                                                        {item.models['azure-sky-11'].pred}
                                                    </span>
                                                    <span className="text-[9px] text-gray-400">{item.models['azure-sky-11'].conf}% Conf</span>
                                                 </div>
                                            </td>
                                            {/* Model 3 Prediction */}
                                            <td className="px-3 py-3 text-center bg-[#ef4444]/5">
                                                 <div className="flex flex-col items-center">
                                                    <span className={`font-bold ${item.models['crimson-moon-10'].pred === item.label ? 'text-green-600' : 'text-red-500'}`}>
                                                        {item.models['crimson-moon-10'].pred}
                                                    </span>
                                                    <span className="text-[9px] text-gray-400">{item.models['crimson-moon-10'].conf}% Conf</span>
                                                 </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                         </div>
                    </div>

                     {/* System Metrics */}
                     <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                         <h3 className="font-bold text-gray-800 text-sm mb-4">{t('ft_sys_metrics')}</h3>
                         <div className="h-[150px] w-full" dir="ltr">
                             <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={GPU_METRICS}>
                                    <defs>
                                        <linearGradient id="colorGpu" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="time" hide />
                                    <YAxis hide />
                                    <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '12px' }} />
                                    <Area type="monotone" dataKey="usage" stroke="#8884d8" fillOpacity={1} fill="url(#colorGpu)" name="GPU Usage %" />
                                    <Area type="monotone" dataKey="memory" stroke="#82ca9d" fillOpacity={0.3} fill="#82ca9d" name="Memory Usage %" />
                                </AreaChart>
                             </ResponsiveContainer>
                         </div>
                     </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default FineTuning;
