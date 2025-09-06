import React from "react";
import { BarChart, Bar, XAxis, Tooltip, Legend } from "recharts";

export default function BarChartWidget({ title, data, colors }) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h3 className="font-semibold mb-2">{title}</h3>
      <BarChart width={300} height={200} data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#3b82f6" />
      </BarChart>
    </div>
  );
}
