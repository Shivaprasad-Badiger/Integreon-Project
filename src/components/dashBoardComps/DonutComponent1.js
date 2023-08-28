import React from "react";
import Chart from "react-apexcharts";

function DonutComponent1() {
  return (
    <div>
      <Chart
        options={{
          labels: ["E-Receipts", "E-Approvals", "Unindentified"],
          title: {
            text: "Total Requests",
            align: "right",
            margin: -10,
            offsetY: 15,
            offsetX: -30,
            itemMargin: {
              horizontal: 25,
              vertical: 0,
            },
            style: {
              fontSize: 13,
              fontWeight: 600,
              color: "#800080",
            },
          },
          legend: {
            show: true,
            position: "right",
            fontSize: "10px",
            formatter: (seriesName, opts) => {
              return [
                seriesName,
                "   ",
                opts.w.globals.series[opts.seriesIndex],
              ];
            },
            itemMargin: {
              horizontal: 25,
              vertical: 0,
            },
          },
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            pie: {
              expandOnClick: false,
              donut: {
                size: "50%",
                labels: {
                  show: true,
                  name: {
                    show: true,
                    fontSize: "22px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                    offsetY: -10,
                  },
                  value: {
                    show: true,
                    fontSize: "16px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                    offsetY: -10,
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
          chart: {
            type: "donut",
            background: "#FFFFFF",
						
          },
        }}
        series={[55, 44, 11]}
        type="donut"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default DonutComponent1;
