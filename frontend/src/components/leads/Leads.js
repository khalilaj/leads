import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getLeads, deleteLead } from "../../actions/leads";
import { getSystem } from "../../actions/system";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    system: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
    getSystem: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getSystem();
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
            Systems{" "}
          </h1>

          <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
          <div className="row" style={{ marginTop: "50px" }}>
            {this.props.system.map(leads => (
              <div className="col-lg-4 col-sm-6 mb-4" key={leads.id}>
                <div className="card h-100">
                  <Link to="/register/">
                    <img
                      className="card-img-top"
                      src="http://placehold.it/700x400"
                      alt="http://placehold.it/700x400"
                    />
                  </Link>
                  <div className="card-body">
                    <h4 className="card-title">
                      <Link to="/register/">{leads.system_name}</Link>
                    </h4>
                    <p className="card-text">{leads.system_description}</p>
                  </div>
                  <div className="card-footer text-center">
                    <Link to="/conditions/" className="btn btn-primary">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads,
  system: state.system.systems
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLead, getSystem }
)(Leads);
