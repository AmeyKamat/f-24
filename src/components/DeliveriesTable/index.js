import React from "react";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import Loader from "../Loader/index.js"
import Section from "../Section/index.js"

import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class DeliveriesTable extends React.Component {

    state = {
        tableData : []
    }


    render() {

        const options = {
            sizePerPage: 5,
            hideSizePerPage: true
        };

        console.log(this.props.tableData);

        return <Section title="Deliveries">
                {
                    this.props.tableData.length === 0 ? <Loader /> :
                        <BootstrapTable data={this.props.tableData} options={options} pagination striped hover>
                            <TableHeaderColumn isKey hidden dataField='id'>ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='quantity'>Quantity</TableHeaderColumn>
                            <TableHeaderColumn dataField='deliveredTo'>Delivered To</TableHeaderColumn>
                            <TableHeaderColumn dataField='steralization'>Steralization</TableHeaderColumn>
                        </BootstrapTable>
                }
        </Section>;

    }
}

export default DeliveriesTable;
