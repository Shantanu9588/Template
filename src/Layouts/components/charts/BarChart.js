// RevenueChart.jsx
import React from "react";
import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid
} from "recharts";
import Tabs from "../formFields/Tabs";

const data = [
  { name: "Jan", revenue: 589.12 },
  { name: "Feb", revenue: 840.2 },
  { name: "Mar", revenue: 898.0 },
  { name: "Apr", revenue: 203.0 },
  { name: "May", revenue: 400.01 },
  { name: "Jun", revenue: 920.12 },
  { name: "Jul", revenue: 398.0 },
  { name: "Aug", revenue: 882.0 },
  { name: "Sep", revenue: 390.0 },
  { name: "Oct", revenue: 910.0 },
  { name: "Nov", revenue: 410.12 },
  { name: "Dec", revenue: 840.2 },
];

export default function BarChart() {
  const totalRevenue = data
    .reduce((acc, curr) => acc + curr.revenue, 0)
    .toFixed(2);

  return (
    <div className="bg-white p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-semi-base font-semibold text-blue-900">Revenue</h2>
        <span className="text-semi-xs font-normal text-blue-900-85">
          Total Revenue:{" "}
          <span className="font-semibold text-base text-blue-900">
            ${totalRevenue}
          </span>
        </span>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <Chart data={data} margin={{ left: 20 }}>
        <CartesianGrid
          vertical={false}         // disable vertical lines
          stroke="#0E253C1A"         // Tailwind slate-300
          strokeDasharray="4 4"    // dashed pattern
        />
          <XAxis
            dataKey="name"
            axisLine={false} // removes the x-axis line
            tickLine={false} // removes tick lines
            stroke="#94a3b8"
          />
          <YAxis
            stroke="#94a3b8"
            axisLine={false} // removes the x-axis line
            tickLine={false} // removes tick lines
            tickFormatter={(v) => `$${v.toFixed(2)}`}
          />
          <Tooltip cursor={false} formatter={(value) => `$${value.toFixed(2)}`} />
          <Bar dataKey="revenue" fill="#5F33D6" radius={[4, 4, 0, 0]}>
            <LabelList
              dataKey="revenue"
              position="top"
              formatter={(val) => `$${val.toFixed(2)}`}
            />
          </Bar>
        </Chart>
      </ResponsiveContainer>

      {/* Year Label */}
      <div className="flex justify-center mt-4 text-sm text-gray-500">
        • 2023
      </div>
    </div>
  );
}
