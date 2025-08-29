import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Backdrop from "./Backdrop";

const mapStateToProps = (state) => ({
  isVisible: state.ui.sideDrawerVisible,
});

// Se não estiver usando dispatch, pode omitir
// const mapDispatchToProps = null;

class SideDrawer extends Component {
  render() {
    const { isVisible } = this.props;
    if (!isVisible) return null;

    return (
      <Fragment>
        <Backdrop type="sideDrawer" />
        <div className="SideDrawer">Lista de Characters:</div>
      </Fragment>
    );
  }
}

// Export default do connect
export default connect(mapStateToProps)(SideDrawer);
