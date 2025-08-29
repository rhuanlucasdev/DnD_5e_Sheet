import React, { Component } from "react";
import Traits from "../Traits/Traits";
import css from "../../css/CharacterSheet.css";
import SideDrawer from "../UIComponents/SideDrawer"; // default export

class CharacterSheet extends Component {
  render() {
    const sideDrawer = <SideDrawer />;
    return (
      <div className="CharacterSheet">
        <Traits />
        {sideDrawer}
      </div>
    );
  }
}

export default CharacterSheet;
