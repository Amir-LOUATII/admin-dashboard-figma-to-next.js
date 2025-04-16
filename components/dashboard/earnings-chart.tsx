"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Mar 1 - 7", amount: 45000 },
  { name: "Mar 8 - 14", amount: 120000 },
  { name: "Mar 15 - 21", amount: 115000 },
  { name: "Mar 22 - 28", amount: 118000 },
  { name: "Final wk", amount: 180000 },
];

export default function EarningsChart() {
  return (
    <div className="h-[392px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="name" className="text-sm text-[#969696]" />
          <YAxis
            className="text-sm text-[#969696]"
            tickFormatter={(value) => value.toLocaleString()}
            ticks={[50000, 100000, 150000, 200000]}
          />
          <Bar
            dataKey="amount"
            fill="#ECCCFF"
            barSize={79}
            radius={[15, 15, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
