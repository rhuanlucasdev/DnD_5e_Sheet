import React, { Component } from "react";
import { connect } from "react-redux";
import DrawerToggle from "./DrawerToggle"; // default export do DrawerToggle

const mapStateToProps = (state) => ({
  auth: true,
});

class Header extends Component {
  render() {
    const { auth } = this.props;
    const drawerToggleElement = auth ? <DrawerToggle /> : null;

    return (
      <div>
        <div className="ui Header">Character Sheet 5e</div>
        {drawerToggleElement}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
