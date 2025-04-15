"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface SuccessRateProps {
  successful: number;
  unsuccessful: number;
}

export default function SuccessRate({
  successful,
  unsuccessful,
}: SuccessRateProps) {
  const total = successful + unsuccessful;
  const successRate = Math.round((successful / total) * 100);

  const data = [
    { name: "Successful", value: successful },
    { name: "Unsuccessful", value: unsuccessful },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Success rate</h3>
      <div className="flex items-center justify-between">
        <div className="h-[200px] w-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                <Cell fill="#A6D997" />
                <Cell fill="#DFEEDB" />
              </Pie>
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xl"
                fill="#A6D997"
                fontSize={18}
                fontWeight="bold"
              >
                98%
              </text>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          <div className="text-4xl font-bold text-chart-2">{successRate}%</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#DFEEDB]" />
              <span className="text-sm text-muted-foreground">
                {successful} Successful
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#A6D997]" />
              <span className="text-sm text-muted-foreground">
                {unsuccessful} Unsuccessful
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
