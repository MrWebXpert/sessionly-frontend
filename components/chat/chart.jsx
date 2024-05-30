"use client";
import { useRef, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
export default function Chart() {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      const context = chartRef.current.getContext("2d");
      const newChart = new ChartJS(context, {
        type: "line",
        data: {
          labels: ["Jhon", "James", "Doe", "halley", "Sam", "Amrit", "Jovy"],
          datasets: [
            {
              label: "Info",
              data: [34, 64, 23, 44, 56, 67, 70],
              backgroundColor: [
                "rgb(255, 99, 132 , 0.2 )",
                "rgb(255, 99, 192  , 0.2)",
                "rgb(255, 94, 64 , 0.2 )",
                "rgb(76, 99, 86  , 0.2)",
                "rgb(87, 193 132 , 0.2 )",
                "rgb(255, 102, 255 , 0.2 )",
                "rgb(255, 203, 207 , 0.2 )",
              ],
              borderColor: [
                "rgb(255, 99, 132  )",
                "rgb(255, 99, 192  )",
                "rgb(255, 94, 192  )",
                "rgb(75, 99, 192  )",
                "rgb(87, 193 207  )",
                "rgb(255, 102, 255  )",
                "rgb(201, 203, 207  )",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <canvas ref={chartRef} />
    </div>
  );
}
