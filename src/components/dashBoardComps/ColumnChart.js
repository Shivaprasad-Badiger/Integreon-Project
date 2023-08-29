import React from "react";
import Chart from "react-apexcharts";

function ColumnChart() {
  return (
    <Chart
      style={{
        border: "1px solid #d5d5d5",
      }}
      options={{
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          background: "#FFFFFF",
          toolbar: {
            show: false,
          },
        },
        markers: {
          shape: "circle",
          radius: 2,
        },
        title: {
          text: "Closed Requests",
          align: "left",
          offsetY: 10,
          style: {
            fontSize: 13,
            fontWeight: 600,
            color: "#800080",
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: "13px",
                  fontWeight: 600,
                },
              },
            },
          },
        },
        xaxis: {
          type: "TIME",
          categories: ["10AM", "12PM", "02PM", "04PM", "06PM", "08PM", "10PM"],
        },
        legend: {
          position: "top",
          offsetX: 250,
          offsetY: -25,
          markers: {
            height: 12,
            width: 12,
            strokeWidth: 12,
            radius: 12,
          },
        },
        fill: {
          opacity: 1,
        },
        colors: ["#737ed8", "#d1d3fe"],
      }}
      type="bar"
      series={[
        {
          name: "E-Reciepts",
          data: [44, 55, 41, 67, 22, 43, 28],
        },
        {
          name: "E-Approvals",
          data: [13, 23, 20, 8, 13, 27, 24],
        },
      ]}
    />
  );
}

export default ColumnChart;
