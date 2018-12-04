import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Header from "../../components/layout/header/Header";
import Main from "../../containers/main/Main";
import Footer from "../../components/layout/footer/Footer";
import { withRouter } from "react-router";

class Layout extends Component {
  state = {
    nav: [
      {
        name: "Work",
        link: "/work"
      },
      {
        name: "Contact",
        link: "/contact"
      }
    ]
  };

  render() {
    return (
      <Aux>
        <Header nav={this.state.nav} />
        <Main />
        <Footer />
      </Aux>
    );
  }
}

export default withRouter(Layout);
