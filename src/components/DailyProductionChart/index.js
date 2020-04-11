import React from "react";
import { Bar } from 'react-chartjs-2';

import Loader from "../Loader/index.js"
import Section from "../Section/index.js"

import "./index.css"

class DailyProductionChart extends React.Component {

    state = {
        selectedOption: "KBHS ATL"
    }

    handleSelect = e => {
        this.setState({selectedOption: e.target.value})
    }


    render() {
        let data = {
            labels: (this.props.graphData[this.state.selectedOption] || []).map(item => item.date),
            datasets: [{
                label: "Dataset #1",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 2,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: (this.props.graphData[this.state.selectedOption] || []).map(item => item.quantity),
            }]
        };

        let options = {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false,
                        color: "rgba(255,99,132,0.2)"
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            },
            animation: {
                easing: "easeInSine"
            }
        };

        return <Section title="Daily Production">
            {
                Object.keys(this.props.graphData).length === 0 ? <Loader /> :
                    <>
                        <div className="select-box float-right">
                            <select className="form-control" onChange={this.handleSelect} value={this.state.selectedOption}>
                                {
                                    Object.keys(this.props.graphData)
                                        .map(item => <option value={item} key={item}>{item}</option>)
                                }
                            </select>
                        </div>
                        <div className="chart-container">
                            <Bar data={data} options={options} />
                        </div>
                    </>
            }
        </Section>;
    }
}

/* <div className="chart-container">
    <canvas id="chart"></canvas>
    </div>*/

export default DailyProductionChart;
