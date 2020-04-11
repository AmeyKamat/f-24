

import React from "react";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

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

        return <nav className={`${this.props.className} navbar fixed-top navbar-dark bg-dark`}>
            <a className="navbar-brand" href="#">F-24</a>
            <button className="navbar-toggler float-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                {
                    data.map(item => <li className="nav-item active" key={item.label}>
                        <Link className="nav-link" to={item.link}>{item.label}</Link>
                    </li>)
                }
                </ul>
            </div>
        </nav>
    }
}

export default NavBar;
