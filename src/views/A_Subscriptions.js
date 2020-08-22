import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class A_Subscriptions extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Manage Subscription Plans</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>SUBSCRIPTION</th>
                      <th>NEXT PAYMENT</th>
                      <th>TOTAL</th>
                      <th>STATUS</th>
                      <th>VIEW</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BASIC PLAN</td>
                      <td>28 July 2020</td>
                      <td>$15</td>
                      <td>Active</td>
                      <td>
                        <button className="btn btn-info">
                          <span align="center">
                            <i class="fa fa-eye"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>BASIC PLAN</td>
                      <td>21 August 2019</td>
                      <td>$10</td>
                      <td>Cancelled</td>
                      <td>
                        <button className="btn btn-info">
                          <span align="center">
                            <i class="fa fa-eye"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>STANDARD PLAN</td>
                      <td>21 January 2019</td>
                      <td>$12</td>
                      <td>Active</td>
                      <td>
                        <button className="btn btn-info">
                          <span align="center">
                            <i class="fa fa-eye"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Plan</CardTitle>
                <p className="card-category">Basic Plan</p>
              </CardHeader>
              <CardBody>
                <div className="row">
                  <div className="col">
                    <div className="card w-100">
                      <div className="card-body text-secondary">
                        <div className="row">
                          <div className="col-sm-5">
                            <br />
                            <h6>&nbsp;&nbsp; Subscription ID</h6>
                            <br />
                            <h6>&nbsp;&nbsp; Last Billing Date</h6>
                            <br />
                            <h6>&nbsp;&nbsp; Next Billing Date</h6>
                            <br />
                            <h6>&nbsp;&nbsp; Status</h6>
                            <br />
                          </div>
                          <div className="col-sm-1">
                            <br />
                            <h6> :</h6>
                            <br />
                            <h6> :</h6>
                            <br />
                            <h6> :</h6>
                            <br />
                            <h6> :</h6>
                            <br />
                          </div>
                          <div className="col-sm-5">
                            <br />
                            <h6> AB189180 </h6>
                            <br />
                            <h6> 21 July 2019</h6>
                            <br />
                            <h6> 22 August 2019</h6>
                            <br />
                            <h6> Active </h6>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card w-55">
                      <h4 className="text-right">
                        TOTAL AMOUNT PAYABLE&nbsp;&nbsp;
                      </h4>
                      <h3 className="text-right">$5&nbsp;&nbsp;</h3>
                      <div className="text-right">
                        <button className="btn btn-danger">
                          CANCEL SUBSCRIPTION
                        </button>
                        &nbsp;&nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default A_Subscriptions;
