"use client";

import React from "react";
interface LegendLabelsProps {
  labels: string[];
  colors: string[];
  spacing?: string;
}
const LegendLabels: React.FC<LegendLabelsProps> = ({
  labels,
  colors,
  spacing = "mt-[40px]",
}) => {
  return (
    <div className={`flex flex-wrap gap-4 ${spacing}`}>
      {labels.map((label, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded"
            style={{
              backgroundColor: colors[index],
              display: "inline-block",
            }}
          ></span>
          <span className="text-sm font-bold text-[#8D9092]">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default LegendLabels;
