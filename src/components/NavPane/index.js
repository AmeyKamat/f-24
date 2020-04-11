import React from "react";
import { Link } from 'react-router-dom'

import Logo from "./logo.png";
import "./index.css";

class NavPane extends React.Component {

  render() {
      let data = [
          {
              label: "Home",
              link: "/"
          },
          {
              label: "Supported By",
              link: "/support"
          },
          {
              label: "Raw Material",
              link: "rawMaterial"
          },
          {
              label: "About",
              link: "/about"
          },
      ]

    return <div className="text-center">
        <img src={Logo} className="logo img-fluid" />
        {
            data.map(item => <div className="nav-wrapper text-center" key={item.label}>
                    <Link className="link text-center text-uppercase" to={item.link}>{item.label}</Link>
                </div>
            )
        }
    </div>;
  }
}

export default NavPane;
