"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Heading from "../Heading/heading";
import LegendLabels from "./LegendLabels"; // Import the LegendLabels component

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const CustomPieChart: React.FC = () => {
  const labels = [
    "Cancer Survivor",
    "Health Expert",
    "Health Org",
    "Cancer Patient",
  ];

  const colors = ["#E99B28", "#176A45", "#EE5D38", "#0091BF"];

  const data = {
    labels,
    datasets: [
      {
        label: "User Distribution",
        data: [25, 20, 15, 40],
        backgroundColor: colors,
        borderColor: ["#ffffff00"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="pieDropshadow bg-white lg:w-[50%] w-[100%]  flex flex-col items-center mx-auto py-[50px] px-[30px] rounded-[40px]">
        <Heading
          text="User Distribution"
          textColor="#292D30"
          Fontsize="text-[24px]"
          LineHeight="leading-[24px]"
          FontWeight="font-bold"
        />
        <div
          style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}
          className="flex justify-center pt-[20px]"
        >
          <Pie
            data={data}
            options={{
              layout: {
                padding: {
                  top: 20,
                },
              },
              plugins: {
                legend: {
                  display: false, // Hide default legend
                },
                datalabels: {
                  formatter: (value: number) => `${value}%`,
                  color: "#fff",
                  font: {
                    size: 24,
                    family: "'Urbanist', sans-serif",
                    weight: "normal",
                  },
                },
              },
            }}
          />
        </div>
        {/* Custom Legend */}
        <LegendLabels labels={labels} colors={colors} />
      </div>
    </>
  );
};

export default CustomPieChart;
