import React, { Component } from "react";
import { Link } from "react-router-dom";

import SystemConditions from "../leadDetails/SystemConditions";
import LeadForm from "./LeadForm";
import Leads from "./Leads";

export class LeadDetails extends Component {
  render() {
    return (
      <div style={{ paddingTop: "10px" }}>
        <ul class="nav nav-pills mb-3 " id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              System Conditions
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              System Crops
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              System Pump
            </a>
          </li>
        </ul>
        <hr />
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="container">
              <SystemConditions />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div>
              <LeadForm />
              <Leads />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div>
              <LeadForm />
              <Leads />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeadDetails;
