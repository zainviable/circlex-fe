"use client";
// Import necessary libraries
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import LegendLabels from "../custmPiechart/LegendLabels";
import Heading from "../Heading/heading";

// Register chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderRadius: number;
  barThickness: number;
}

interface Data {
  labels: string[];
  datasets: Dataset[];
}

const CustomBarChart: React.FC = () => {
  const [barThickness, setBarThickness] = useState<number>(72); // Explicitly typing the state as number

  // Adjust barThickness based on the container width
  const adjustBarThickness = () => {
    const containerWidth =
      document.getElementById("chart-container")?.offsetWidth ?? 0;
    setBarThickness(Math.max(30, containerWidth / 10)); // Adjust thickness dynamically, minimum 30px
  };

  // Listen for window resize and adjust barThickness accordingly
  useEffect(() => {
    adjustBarThickness();
    window.addEventListener("resize", adjustBarThickness);
    return () => window.removeEventListener("resize", adjustBarThickness); // Cleanup on unmount
  }, []);

  const data: Data = {
    labels: ["Dec2", "Dec3", "Dec4", "Dec5", "Dec6"],
    datasets: [
      {
        label: "Group Sessions",
        data: [4, 8, 4, 6, 5],
        backgroundColor: "#0091BF",
        borderRadius: 10,
        barThickness: barThickness, // Use dynamic barThickness
      },
      {
        label: "1:1 Sessions",
        data: [4, 2, 2, 4, 3],
        backgroundColor: "#E99B28",
        borderRadius: 10,
        barThickness: barThickness, // Use dynamic barThickness
      },
    ],
  };

  // Define labels and colors arrays
  const labels = ["Group Sessions", "1:1 Sessions"];
  const colors = ["#0091BF", "#E99B28"];

  return (
    <div className="pieDropshadow bg-white lg:w-[50%] w-[100%] flex flex-col items-start mx-auto py-[50px] px-[30px] rounded-[40px]">
      <Heading
        text="User Distribution"
        textColor="#292D30"
        Fontsize="text-[24px]"
        LineHeight="leading-[24px]"
        FontWeight="font-bold"
      />
      <LegendLabels labels={labels} colors={colors} spacing="my-[30px]" />

      <div id="chart-container" style={{ width: "100%", height: "400px" }}>
        <Bar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false, // To allow the chart to fill the container properly
            plugins: {
              legend: {
                display: false, // Disable default legend
              },
              datalabels: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: () => "", // Removes the labels in tooltips
                },
              },
            },
            scales: {
              x: {
                stacked: true,
                grid: {
                  display: false, // Disable grid lines for x-axis
                },
              },
              y: {
                stacked: true,
                beginAtZero: true,
                grid: {
                  display: false, // Disable grid lines for y-axis
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CustomBarChart;
