import React, { Component } from "react";
import Main from "./Main";
import Leads from "../leads/Leads";

export class SystemCrops extends Component {
  render() {
    return (
      <Main>
        <Leads />
      </Main>
    );
  }
}

export default SystemCrops;
