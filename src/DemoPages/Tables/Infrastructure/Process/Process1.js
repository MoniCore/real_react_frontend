import React from "react";
import ReactApexChart from "react-apexcharts";

class Process1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [76],
      options: {
        fill: {
          colors: ["#8748fb"],
        },
        colors: ["#8748fb"],
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
          },
        },
        labels: ["Process1"],
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

export default Process1;
