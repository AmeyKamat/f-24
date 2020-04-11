import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from 'react-router-dom';

import NavPane from "../NavPane/index.js";
import NavBar from "../NavBar/index.js"
import Home from "../Home/index.js";
import SupportedBy from "../SupportedBy/index.js";
import RawMaterial from "../RawMaterial/index.js";
import GetInvolved from "../GetInvolved/index.js";
import About from "../About/index.js";

class App extends React.Component {

  render() {

    return <BrowserRouter>
        <div className="row">
            <NavBar className="d-block d-sm-block d-md-none d-lg-none d-xl-none" />
            <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block col col-2"><NavPane /></div>
            <div className="col col-xs-12 col-sm-12 col-md-9 col-lg-10 col-xl-10">
                <Route path="/" component={Home} exact />
                <Route path="/support" component={SupportedBy} />
                <Route path="/rawMaterial" component={RawMaterial} />
                <Route path="/about" component={About} />
                <Route path="/getInvolved" component={GetInvolved} />
            </div>
        </div>
    </BrowserRouter>;
  }
}

export default App;
