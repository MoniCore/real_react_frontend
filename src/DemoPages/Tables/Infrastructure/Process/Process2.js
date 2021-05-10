import React from "react";
import ReactApexChart from "react-apexcharts";

class Process2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [46],
      options: {
        fill: {
          colors: ["#12d2be"],
        },
        colors: ["#12d2be"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
          },
        },
        labels: ["Process2"],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={220}
        />
      </div>
    );
  }
}

export default Process2;
