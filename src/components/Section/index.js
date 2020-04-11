import React from "react";

import "./index.css";

class Section extends React.Component {

  render() {
    const {title, children} = this.props;

    return <div className="section-container">
        <h3>{title}</h3>
        <hr />
        <div className="col">{children}</div>
    </div>;
  }
}

export default Section;
