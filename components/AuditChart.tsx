import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { MOCK_RISK_DATA } from '../constants';

// Map mock data colors to new palette
const COLORS = ['#ffa486', '#12281e', '#dcff79', '#a9ff9b']; // red-high, brand-black, yellow-high, green-high

const AuditChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-soft border border-sage-2 h-full flex flex-col">
      <h3 className="text-brand-black font-bold mb-6 text-sm border-b border-sage-2 pb-3">تحلیل ریسک‌های حسابرسی (نمونه)</h3>
      <div className="flex-1 w-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={MOCK_RISK_DATA}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {MOCK_RISK_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
              ))}
            </Pie>
            <Tooltip 
                contentStyle={{ fontFamily: 'Vazirmatn', borderRadius: '12px', border: '1px solid #e9efe7', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', color: '#22281e' }}
            />
            <Legend 
                wrapperStyle={{ fontFamily: 'Vazirmatn', fontSize: '12px', color: '#22281e' }} 
                layout="vertical" 
                verticalAlign="middle" 
                align="right"
                iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AuditChart;