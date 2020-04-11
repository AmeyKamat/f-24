import React from "react";

import "./index.css";

class Loader extends React.Component {

  render() {
    const {title, children} = this.props;

    return <div className="loader text-center">Loading...</div>
  }
}

export default Loader;
