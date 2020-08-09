import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aux from "react-aux";

import Items from "../Items/Items";
import Aboutitem from "../Aboutitem/Aboutitem";
import Pagenotfound from "../Pagenotfound/Pagenotfound";

class Routerall extends Component {
  render() {
    return (
      <Aux>
        <Router>
          <Switch>
            <Route exact path="/" component={Items} />
            <Route exact path="/about/item/:id" component={Aboutitem} />
            <Route exact path="" component={Pagenotfound} />
          </Switch>
        </Router>
      </Aux>
    );
  }
}
export default Routerall;
