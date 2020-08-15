import React from "react";
import { Link, withRouter } from "react-router-dom";

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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

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
            <Col lg="4" md="6" sm="12" style={{ margin: "10% auto" }}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Login</CardTitle>
                </CardHeader>
                <CardBody>
                  <form>
                    <FormGroup>
                      <Label for="exampleEmail">Email address</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter email"
                        onChange={this.onChange}
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
                        onChange={this.onChange}
                      />
                    </FormGroup>
                    <FormGroup check>
                      <FormText color="muted">
                        Don't have an account?
                        <Link to={{ pathname: "/register" }}>
                          Register here!
                        </Link>
                      </FormText>
                    </FormGroup>
                    <Button color="primary" type="submit">
                      Login
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

export default withRouter(Login);
