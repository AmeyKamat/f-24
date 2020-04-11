import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import Loader from "../Loader/index.js"
import Section from "../Section/index.js"

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ProducersTable extends React.Component {

    state = {
        tableData : []
    }


    render() {

        const options = {
            sizePerPage: 5,
            hideSizePerPage: true
        };

        console.log(this.props.tableData);

        return <Section title="Producers">
                {
                    this.props.tableData.length === 0 ? <Loader /> :
                        <BootstrapTable data={this.props.tableData} options={options} pagination striped hover>
                            <TableHeaderColumn isKey hidden dataField='id'>ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='organisation'>Organization</TableHeaderColumn>
                            <TableHeaderColumn dataField='printer'>Printer</TableHeaderColumn>
                        </BootstrapTable>
                }
        </Section>;

    }
}

/* <div className="chart-container">
    <canvas id="chart"></canvas>
    </div>*/

export default ProducersTable;
