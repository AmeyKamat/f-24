import React from "react";

import DeliveredCounter from "../DeliveredCounter/index.js"
import DailyProductionChart from "../DailyProductionChart/index.js"
import DeliveriesTable from "../DeliveriesTable/index.js"
import ProducersTable from "../ProducersTable/index.js"


class Home extends React.Component {

    state = {
        distributions: 0,
        distributionTableData: [],
        graphData: {},
        producersTableData: []
    }

    componentDidMount = () => {
        console.log("updated")
        let that = this;
        let graphData = {};
        let distributionTableData = [];
        let producersTableData = [];
        let distributions = 0;
        jQuery.get(
            "https://script.googleusercontent.com/macros/echo?user_content_key=qwgx3gdKvvgDkWYjxVHowmvs3BA847TNPF2YjDt5OkV_LOjW_U2XeWus5t9S5cNRsUtbpmOtLOMbXBlfhawmWtaOuFqxdeq7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD9YFbsoGm5qYjZ5D7ijj3ccEtdSh4dcw_TvG94obYmIMWBSMuISgfa6hlMYEdkAOUmlSuCLjN4zLthsSg96B3c&lib=M55blRpZfWsgsPQmfIMBwl1mwiqQBXdaz",
            {}, function(data) {
                data["Log"].forEach((item, i) => {
                    if(item["Provider"] in graphData){
                        graphData[item["Provider"]].push({
                            id: i,
                            quantity: item["Quantity"],
                            date: item["Date"].split("T")[0],
                            steralization: item["Steralization"],
                            provider: item["Provider"]
                        });
                    }
                    else {
                        graphData[item["Provider"]] = [];
                        graphData[item["Provider"]].push({
                            id: i,
                            quantity: item["Quantity"],
                            date: item["Date"].split("T")[0],
                            steralization: item["Steralization"],
                            provider: item["Provider"]
                        })
                    }


                })

                that.setState({graphData: graphData});

            }
        );

        jQuery.get(
            "https://script.googleusercontent.com/macros/echo?user_content_key=eaYkHHAiBbbvL_Wu5Kt1lSTRHGSR5IKzdCYsL2EPAEoGK-p6IRANmotnKjT-M7ebNdWriVBHz1dsR8nbnbgmnjT6cfXc-k-5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD9YFbsoGm5qYjZ5D7ijj3ccEtdSh4dcw_TvG94obYmIMWBSMuISgfa6hlMYEdkAOUmlSuCLjN4zTNasb5wToDU&lib=M55blRpZfWsgsPQmfIMBwl1mwiqQBXdaz",
            {}, function(data) {
                data["Distribution"].forEach((item, i) => {
                    distributionTableData.push({
                        id: i,
                        quantity: item["Quantity"],
                        deliveredTo: item["Distributed-to"],
                        steralization: item["Steralization"]
                        //date: item["Date"].split("T")[0]
                    });
                    distributions += item["Quantity"];
                })

                that.setState({distributionTableData: distributionTableData, distributions: distributions})
        });

        jQuery.get(
            "https://script.googleusercontent.com/macros/echo?user_content_key=-hYOKPVckiHVMYDN7TiJ2Q6Ir3utojY-vc8a5K7PDvbUfJryZvaOfUpTdcnMCIBQOAZjkJGHbI2COK5qEKmwnxqqG-Yvrz9qm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnD9YFbsoGm5qYjZ5D7ijj3ccEtdSh4dcw_TvG94obYmIMWBSMuISgfa6hlMYEdkAOUmlSuCLjN4z9Bmn9_iJSQM&lib=M55blRpZfWsgsPQmfIMBwl1mwiqQBXdaz",
            {}, function(data) {
                data["Producer"].forEach((item, i) => {
                    producersTableData.push({
                        id: i,
                        name: item["Name"],
                        //date: item["Date"].split("T")[0],
                        organisation: item["organisation"],
                        printer: item["3D-Printer"]
                    });
                })

                that.setState({producersTableData: producersTableData})
        });


    }

  render() {
    console.log(this.state)
    return <div className="row">
        <div className="col">
            <DeliveredCounter deliveries={this.state.distributions} />
            <DailyProductionChart graphData={this.state.graphData} />
            <DeliveriesTable tableData={this.state.distributionTableData} />
            <ProducersTable tableData={this.state.producersTableData} />
        </div>

    </div>;
  }
}

export default Home;
