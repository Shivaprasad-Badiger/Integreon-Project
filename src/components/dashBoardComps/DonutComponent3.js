import React from "react";
import Chart from "react-apexcharts";

function DonutComponent3() {
  return (
    <div>
      <Chart
      style={{
        border: '1px solid #d5d5d5'
      }}
        options={{
          labels: ["E-Receipts", "E-Approvals"],
          title: {
            text: "Unmatched Requests",
            align: 'left',
            style: {
              fontSize: 13,
              fontWeight: 600,
              color: "#800080",
            },
          },
          legend: {
            show: true,
            offsetY: 30,
            offsetX: 30,
            formatter: (seriesName, opts) => {
              return [
                seriesName,
                opts.w.globals.series[opts.seriesIndex],
              ];
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
                    show: false,
                  },
                  value: {
                    show: true,
                    fontSize: "16px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: 600,
                  },
                  total: {
                    show: true,
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
          colors: ['#ed7d39', '#ffd622']
        }}
        series={[6, 4]}
        type="donut"
        width="100%"
        height="100%"
        
      />
    </div>
  );
}

export default DonutComponent3;
