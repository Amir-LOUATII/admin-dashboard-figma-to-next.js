"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "n", label: "System errors", value: 1, color: "hsl(var(--chart-4))" },
  { name: "o", label: "Bank errors", value: 3, color: "hsl(var(--chart-3))" },
  { name: "x", label: "Fraud blocks", value: 5, color: "hsl(var(--chart-2))" },
  {
    name: "a",
    label: "Customer errors",
    value: 10,
    color: "hsl(var(--chart-1))",
  },
];

export default function PaymentIssues() {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Payment issues</h3>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="horizontal"
            margin={{ top: 0, right: 0, bottom: 0, left: -15 }}
          >
            <XAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis hide domain={[0, 12]} />
            <Bar dataKey="value" barSize={20} radius={[4, 4, 4, 4]}>
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">
          Total number of errors:{" "}
          <span className="font-medium text-foreground">{total}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
