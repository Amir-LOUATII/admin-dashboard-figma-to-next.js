"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import StatusBox from "./status-box";
import Card from "../shared/card";

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
    { name: "Unsuccessful", value: unsuccessful },
    { name: "Successful", value: successful },
  ];

  const COLORS = ["#DFEEDB", "#A6D997"];

  return (
    <Card title="Success rate">
      <div className="h-[200px] w-full flex justify-center items-center ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              startAngle={180}
              endAngle={-180}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#A6D997"
              fontSize={18}
              fontWeight="bold"
            >
              {successRate}%
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className=" flex items-center justify-around w-full">
        <StatusBox label="unsuccess" count={unsuccessful} color="#DFEEDB" />
        <StatusBox label="success" count={successful} color="#A6D997" />
      </div>
    </Card>
  );
}
