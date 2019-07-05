import React, { Component, Fragment } from "react";

class Leads extends Component {
  render() {
    return (
      <div>
        <h2>Leads</h2>
        <table className="table table-striped table-responsive ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
              <th />
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Leads;
