import React, { Component } from "react";
import Ico1 from "../assets/img/icons/round_call_icon.png";
import Ico2 from "../assets/img/icons/round_email_icon.png";
import Ico3 from "../assets/img/icons/round_location_icon.png";
export class ContactUs extends Component {
  render() {
    return (
      <div className="container">
        <div className="pricing-header mx-auto text-center">
          <h1 className="display-4">DROP US A MESSAGE</h1>
          <p className="lead">
            We are always ready to help with any questions regarding the site
          </p>
        </div>

        <div className="container-form">
          <form method="post">
            <div className="row">
              <div className="col-md-6 my-5">
                <div className="container-form1">
                  <div className="form-group">
                    <div class="card" style={{ width: "31rem" }}>
                      <ul class="list-group list-group-flush text-muted">
                        <li class="list-group-item">
                          <img
                            src={Ico1}
                            style={{ margin: "5px" }}
                            alt="Visa"
                          />
                          (+94)034 123 4567
                        </li>
                        <li class="list-group-item">
                          <img
                            src={Ico2}
                            style={{ margin: "5px" }}
                            alt="mastercard"
                          />
                          docvvalidator@gmail.com
                        </li>
                        <li class="list-group-item">
                          <img
                            src={Ico3}
                            style={{ margin: "5px" }}
                            alt="paypal"
                          />
                          SLIIT Malabe Campus, New Kandy Rd, Malabe 10115
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 my-2">
                <div className="container-form1">
                  <div className="form-group">
                    <input
                      type="text"
                      name="txtName"
                      className="form-control"
                      placeholder="Your Name "
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="txtEmail"
                      className="form-control"
                      placeholder="Email "
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="txtMsg"
                      className="form-control"
                      placeholder="Message"
                      style={{ width: "27rem", height: "150px" }}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      name="btnSubmit"
                      className="btn btn-success"
                      value="Send Message"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
