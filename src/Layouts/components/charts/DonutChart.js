import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
const data = [
    { name: 'Red', value: 50 },
    { name: 'Orange', value: 50 },
    { name: 'Yellow', value: 50 },
    { name: 'Green', value: 50 },
    { name: 'Purple', value: 50 },
  ];
  
  const COLORS = ['#FF5D5D', '#FFA733', '#FFD633', '#3DDC84', '#7C6BFF'];
  
  // ✅ Custom label renderer
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) / 2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  export default function DonutChart() {
    const total = data.reduce((acc, item) => acc + item.value, 0);
  
    return (
      <div className="relative w-[250px] h-[250px] mx-auto">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
            paddingAngle={0}
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
  
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-[#0E253C]">{total}</span>
        </div>
      </div>
    );
  }