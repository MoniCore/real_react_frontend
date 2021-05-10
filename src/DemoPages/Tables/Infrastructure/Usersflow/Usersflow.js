import React, { Component } from "react";
import Chart from "react-apexcharts";

class Usersflow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          height: 100,
          width: 500,
          zoom: {
            enabled: true,
            type: 'x',
            resetIcon: {
                offsetX: -10,
                offsetY: 0,
                fillColor: '#fff',
                strokeColor: '#37474F'
            },
            selection: {
                background: '#90CAF9',
                border: '#0D47A1'
            }    
        }
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
        },
        stroke: {
          curve: 'straight',
          width: 2
        },
        colors: ['#545a7a'],
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.9,
            stops: [0, 99, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
      },
      series: [
        {
          name: "",
          data: [39, 40, 53, 42, 50, 41, 40, 39, 33, 51, 54, 54, 52, 53, 52, 33, 32, 23, 34, 33, 23, 33, 32, 34, 37, 35, 34, 32, 32, 42]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="780"
              height="250"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Usersflow;