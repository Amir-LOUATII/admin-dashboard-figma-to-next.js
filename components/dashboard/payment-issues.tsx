"use client";

import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Card from "../shared/card";

export default function PaymentIssuesChart() {
  // Data is ordered to match the image (a, x, o, n)
  const data = [
    { name: "a", value: 1, color: "#FFB963", label: "Customer errors" },
    { name: "x", value: 5, color: "#FFDA93", label: "Fraud blocks" },
    { name: "o", value: 3, color: "#FF7576", label: "Bank errors" },
    { name: "n", value: 10, color: "#80E0E5", label: "System errors" },
  ];

  const totalErrors = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card title="Payment issues">
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="horizontal"
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            barSize={61}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 16, fill: "#999" }}
            />
            <YAxis hide />
            <Bar
              dataKey="value"
              isAnimationActive={false}
              radius={[8, 8, 8, 8]}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
              <LabelList
                dataKey="value"
                position="top"
                fill="#666"
                fontSize={18}
                fontWeight="500"
                offset={10}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 text-center">
        <div className="mb-4 text-[14px] text-[#FFA14E] font-semibold">
          Total number of errors:{" "}
          <span className="text-[#FFA14E] font-bold text-lg">
            {totalErrors}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="h-[22px] w-[22px] rounded-[8px] flex items-center justify-center text-white text-xs"
                style={{ backgroundColor: item.color }}
              >
                {item.name}
              </div>
              <div className="text-gray-500 text-left">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
