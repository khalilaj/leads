import React, { Component } from "react";

export class LeadForm extends Component {
  render() {
    return (
      <div className="card  card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" type="text" name="name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" type="text" name="message" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LeadForm;
