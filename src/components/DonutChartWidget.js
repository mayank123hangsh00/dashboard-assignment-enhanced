import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

export default function DonutChartWidget({ title, data, colors }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h3 className="font-semibold mb-2">{title}</h3>
      <PieChart width={250} height={200}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
      <p className="text-center font-bold text-lg">{total} Total</p>
    </div>
  );
}
