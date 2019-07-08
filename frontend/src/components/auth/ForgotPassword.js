import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class ForgotPassword extends Component {
  render() {
    return (
      <div
        className="row align-items-center h-100"
        style={{
          paddingBottom: "50px",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="col-md-4 mb-5  align-items-center ">
          <div className="card card-login mx-auto mt-5 h-100">
            <div className="card-header">Reset Password</div>

            <div className="card-body">
              <div className="text-center mb-4">
                <h4>Forgot your password?</h4>
                <p>
                  Enter your email address and we will send you instructions on
                  how to reset your password.
                </p>
              </div>

              <form>
                <div className="form-group">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Enter email address"
                      required="required"
                    />
                    <label>Enter email address</label>
                  </div>
                </div>
                <a className="btn btn-success btn-block">Reset Password</a>
              </form>

              <div className="text-center ">
                <Link to="/register" className="d-block text-dark small mt-3">
                  Register an Account
                </Link>
                <Link to="/login" className="d-block small text-success">
                  Login Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
