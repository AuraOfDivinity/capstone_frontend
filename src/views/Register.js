import React from "react";

import {
  Card,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import Main from "../assets/img/Main.jpg";

class Register extends React.Component {
  render() {
    return (
      <>
        <div
          className="content"
          style={{
            background: `url(${Main})`,
            backgroundSize: "cover",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Row>
            <Col lg="4" md="6" sm="12" style={{ margin: "5% auto" }}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Register</CardTitle>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormGroup>
                      <Label for="exampleEmail">First Name</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="First Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Last Name</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="lastName"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Email address</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter email"
                      />
                      <FormText color="muted">
                        We'll never share your email with anyone else.
                      </FormText>
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="Password"
                      />
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> Check me out
                        <span className="form-check-sign">
                          <span className="check"></span>
                        </span>
                      </Label>
                    </FormGroup>
                    <Button color="primary" type="submit">
                      Register
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Register;
