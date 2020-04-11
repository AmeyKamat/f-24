import React from "react";

import Loader from "../Loader/index.js"
import Section from "../Section/index.js"

import "./index.css"
import Mask from "./mask.png"

class DeliveredCounter extends React.Component {

  render() {
    return this.props.deliveries == 0 ? <Loader /> :
        <div className="col counter-container">
            <div className="counter-wrapper text-center">
                <img src={Mask} className="mask" />
                <p className="counter text-center">{this.props.deliveries}</p>
                <p className="counter-label text-center">f-24 Delivered</p>
            </div>
        </div>;
  }
}

export default DeliveredCounter;
