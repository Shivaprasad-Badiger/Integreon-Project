import React from "react";
import Chart from "react-apexcharts";

function ColumnChart() {
  const series = [
    {
      name: "WORKED",
      data: [
        { x: "DAY", y: 22 },
        { x: "DAY", y: 34 },
        { x: "DAY", y: 34 },
        { x: "DAY", y: 34 },
      ],
    },
    {
      name: "NOT WORKED",
      data: [
        { x: "DAY", y: 10 },
        { x: "DAY", y: 15 },
        { x: "DAY", y: 9 },
        { x: "DAY", y: 16 },
      ],
    },
  ];
  const chartOptions = {
    chart: {
      type: "bar",
      stacked: true,
      background: "#FFFFFF",
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      type: "category",
    },
    legend: {
      position: "top",
    },
    fill: {
      opacity: 1,
    },
  };
  return <Chart options={chartOptions} type="bar" series={series} />;
}

export default ColumnChart;
