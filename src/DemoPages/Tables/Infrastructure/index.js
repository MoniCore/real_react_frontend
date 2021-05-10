import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import classnames from "classnames";
import "./index.css";

import VectorMapsAnimated from "./Maps/Animated";
import Process1 from './Process/Process1';
import Process2 from './Process/Process2';
import Process3 from "./Process/Process3";
import Usersflow from "./Usersflow/Usersflow";

import {
  Row,
  Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  Progress,
  TabContent,
  TabPane,
} from "reactstrap";

import {
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  Bar,
  BarChart,
  ComposedChart,
  CartesianGrid,
  Tooltip,
  LineChart,
} from "recharts";

const data = [
  { name: "Page A", uv: 200, amt: 140 },
  { name: "Page B", uv: 320, amt: 121 },
  { name: "Page C", uv: 425, amt: 129 },
  { name: "Page D", uv: 350, amt: 100 },
  { name: "Page E", uv: 360, amt: 118 },
  { name: "Page F", uv: 330, amt: 150 },
  { name: "Page G", uv: 279, amt: 110 },
  { name: "Page C", uv: 310, amt: 129 },
  { name: "Page D", uv: 328, amt: 100 },
  { name: "Page E", uv: 259, amt: 118 },
  { name: "Page F", uv: 339, amt: 150 },
  { name: "Page G", uv: 349, amt: 110 },
];

const data2 = [
  { name: "Page A", uv: 100, amt: 140 },
  { name: "Page B", uv: 120, amt: 121 },
  { name: "Page C", uv: 125, amt: 129 },
  { name: "Page D", uv: 150, amt: 100 },
  { name: "Page E", uv: 160, amt: 118 },
  { name: "Page F", uv: 130, amt: 150 },
  { name: "Page G", uv: 109, amt: 110 },
  { name: "Page C", uv: 110, amt: 129 },
  { name: "Page D", uv: 128, amt: 100 },
  { name: "Page E", uv: 159, amt: 118 },
  { name: "Page F", uv: 139, amt: 150 },
  { name: "Page G", uv: 149, amt: 110 },
];

export default class Infrastructure extends Component {
  constructor() {
    super();

    this.state = {
      dropdownOpen: false,
      activeTab1: "11",
    };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }

  render() {
    return (
      <Fragment>
        <div className="page-name">INFRASTRUCTURE</div>
        <div className="horizon-line"></div>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Row>
            <Col md="12" lg="6">
              <Card className="mb-3" id="left-top-card">
                <div className="performance-title">
                  <div>
                    <p id="processing-performance">Processing performance</p>
                  </div>
                  <div>
                    <p id="today">TODAY</p>
                  </div>
                </div>
                <div className="charts-group">
                  <Process1 />
                  <Process2 />
                  <Process3 />
                </div>
              </Card>
              <Row>
                <Col lg="12">
                  <Card className="mb-3" id="left-middle-card">
                    <div className="middle-left-graph">
                      <div className="widget-chart p-0">
                        <ResponsiveContainer height={150} width={380}>
                          <AreaChart
                            data={data}
                            margin={{
                              top: 20,
                              right: 0,
                              left: 0,
                              bottom: 0,
                            }}
                          >
                            <defs>
                              <linearGradient
                                id="colorPv2"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="10%"
                                  stopColor="var(--focus)"
                                  stopOpacity={0.7}
                                />
                                <stop
                                  offset="90%"
                                  stopColor="var(--focus)"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                            </defs>
                            <Tooltip />
                            <Area
                              type="monotoneX"
                              dataKey="uv"
                              stroke="var(--focus)"
                              strokeWidth={2}
                              fillOpacity={1}
                              fill="url(#colorPv2)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="middle-right-letters">
                        <p id="details">Details:</p>
                        <p id="cache">In cache requests</p>
                        <p id="cachevalue">140</p>
                        <p id="cache">Out of cache requests</p>
                        <p id="cachevalue">948</p>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <Card className="mb-3" id="left-middle-card">
                    <div className="middle-left-graph">
                      <div className="widget-chart p-0">
                        <ResponsiveContainer height={150} width={380}>
                          <AreaChart
                            data={data2}
                            margin={{
                              top: 20,
                              right: 0,
                              left: 0,
                              bottom: 0,
                            }}
                          >
                            <defs>
                              <linearGradient
                                id="colorPv1"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="10%"
                                  stopColor="#47ddcc"
                                  stopOpacity={0.7}
                                />
                                <stop
                                  offset="90%"
                                  stopColor="#47ddcc"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                            </defs>
                            <Tooltip />
                            <Area
                              type="monotoneX"
                              dataKey="uv"
                              stroke="#47ddcc"
                              strokeWidth={2}
                              fillOpacity={1}
                              fill="url(#colorPv1)"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="middle-right-letters">
                        <p id="details">Details:</p>
                        <p id="cache">In cache bandwidth</p>
                        <p id="cachevalue">31.41MB</p>
                        <p id="cache">Out of cache bandwidth</p>
                        <p id="cachevalue">31.72MB</p>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col md="12" lg="6">
              <Row>
                <Col md="12">
                  <div className="mb-3" id="right-top-card">
                    <div>
                      <div>USERS FLOW</div>
                      <div></div>
                    </div>
                    <div>
                      <Usersflow />
                    </div>
                  </div>
                </Col>
                <Col md="12">
                  <Card className="mb-3" id="right-bottom-card">
                    <VectorMapsAnimated />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}
