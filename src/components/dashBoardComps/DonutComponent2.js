import React from "react";
import Chart from "react-apexcharts";

function DonutComponent2() {
  return (
    <div>
      <div
        style={{
          width: "310px",
          position: "absolute",
          height: "60px",
          border: "1px solid #d5d5d5",
          transform: "translateY(25px) translateX(-2px)",
          borderRadius: '5px'
        }}
      ></div>
      <div
        style={{
          width: "110px",
          position: "absolute",
          height: "110px",
          border: "1px solid #d5d5d5",
          transform: "translateY(2px) translateX(2px)",
          borderRadius: "100px",
          backgroundColor: "white",
        }}
      ></div>
      <div
        style={{
          width: "309px",
          position: "absolute",
          height: "59.8px",
          transform: "translateY(25.8px) translateX(-1px)",
          backgroundColor: "white",
          borderRadius: '5px'
        }}
      ></div>

      <Chart
        options={{
          labels: ["I-129", "I-129S", "I-140"],
          title: {
            text: "E-Approvals",
            align: "center",
            margin: -10,
            offsetY: 35,
            offsetX: 0,
            style: {
              fontSize: 13,
              fontWeight: 600,
              color: "#800080",
            },
          },
          colors:['#03599e','#88d9d8','#9bb1b4'],
          legend: {
            show: true,
            position: "bottom",
            horizontalAlign: "right",
            offsetX: 10,
            offsetY: -35,
            fontSize: 10,
            formatter: (seriesName, opts) => {
              return [
                seriesName,
                "   ",
                opts.w.globals.series[opts.seriesIndex],
              ];
            },
          },
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            pie: {
              customScale: 3.3,
              expandOnClick: false,
              offsetX: -100,
              offsetY: 35,
              donut: {
                size: "50%",
                labels: {
                  show: true,
                  name: {
                    show: false,
                  },
                  value: {
                    show: true,
                    fontSize: "5px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                    offsetY: 2,
                  },
                  total: {
                    show: true,
                    label: "",
                    showAlways: true,
                  },
                },
              },
            },
          },
          stroke: {
            show: true,
            width: 0.5,
            colors: "#fff",
          },
          chart: {
            type: "donut",
            brush: true,
            offsetX: 7,
          },
        }}
        series={[33, 11, 11]}
        type="donut"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default DonutComponent2;
