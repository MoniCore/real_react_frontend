import React from "react";
import ReactApexChart from "react-apexcharts";

class Process3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [62],
      options: {
        fill: {
          colors: ["#5764ea"],
        },
        colors: ["#5764ea"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
          },
        },
        labels: ["Process3"],
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

export default Process3;
