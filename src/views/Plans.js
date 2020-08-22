import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export class Plans extends Component {
  render() {
    return (
      <>
        <div className="container">
          <form method="post">
            <div className="container-form3">
              <div className="row">
                <div className="col-6 my-5">
                  <div className="form-group">
                    <input
                      type="text"
                      name="txtName"
                      className="form-control"
                      placeholder="Your Institute or Organisation "
                    />
                  </div>
                </div>
                <div className="col-6 my-5">
                  <div className="form-group">
                    <input
                      type="text"
                      name="txtName"
                      className="form-control"
                      placeholder="Your FullName "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/**please change this **/}
            <div className="pricing-header mx-auto text-center">
              <h3 className="display-5">SELECT SUBSCRPTION PLAN</h3>

              <div className="container">
                <div className="card-deck mb-3 text-center">
                  <div className="card mt-1 mb-3 box-shadow bg-dark text-white d-flex justify-content-center">
                    <div className="card-body1">
                      <div className="card-header2 bg-danger ">
                        <h2 className="my-2 card-title font-weight-bold">
                          FREE
                        </h2>
                      </div>
                      <button
                        type="button"
                        className="my-5 btn btn-lg btn-outline-danger"
                      >
                        SELECT
                      </button>
                    </div>
                  </div>

                  <div className="card mt-1 mb-3 box-shadow bg-dark text-white d-flex justify-content-center">
                    <div className="card-body1">
                      <div className="card-header2 bg-warning ">
                        <h2 className="my-2 card-title font-weight-bold">
                          STANDARD
                        </h2>
                      </div>
                      <button
                        type="button"
                        className="my-5 btn btn-lg btn-outline-warning "
                      >
                        SELECT
                      </button>
                    </div>
                  </div>

                  <div className="card mt-1 mb-3 box-shadow bg-dark text-white d-flex justify-content-center">
                    <div className="card-body1">
                      <div className="card-header2 bg-primary ">
                        <h2 className="my-2 card-title font-weight-bold">
                          PREMIUM
                        </h2>
                      </div>
                      <button
                        type="button"
                        className="my-5 btn btn-lg btn-outline-primary "
                      >
                        SELECT
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <p className="lead">
                Go to Pricing Tab to know more information about the plans
              </p>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Plans;
