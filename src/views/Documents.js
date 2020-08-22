import React from "react";
import { Card, CardHeader, CardImg, CardBody, CardTitle, Row, Col, Button, ButtonToolbar } from 'reactstrap';
import {AddDocument} from "./AddDocument";
import {ValidateDocument} from "./ValidateDocument";
import {ViewDocument} from "./ViewDocument";
import {DeleteDocument} from "./DeleteDocument";

class Documents extends React.Component {
  constructor(props){
    super(props);
    this.state = {addDocumentShow: false};
    this.state = {validateDocumentShow: false};
    this.state = {viewDocumentShow: false};
    this.state = {deleteDocumentShow: false};
  }
    render() {
      let addDocumentClose =() => this.setState({addDocumentShow:false}); 
      let validateDocumentClose =() => this.setState({validateDocumentShow:false}); 
      let viewDocumentClose =() => this.setState({viewDocumentShow:false}); 
      let deleteDocumentClose =() => this.setState({deleteDocumentShow:false}); 
        return (
          <>
            <div className="content">
              <Row>
                <Col md="12">
                  <Card>
                    <CardHeader>
                      <div className="ml-auto mr-auto mb-4">
                      <ButtonToolbar>
                          <Button
                            className="btn-round btn-md"
                            color="primary"
                            type="submit"
                            size = "md"
                            onClick = {()=>this.setState({addDocumentShow: true})} 
                          >
                            Upload Document
                          </Button>
                          <AddDocument
                            show = {this.state.addDocumentShow}
                            onHide = {addDocumentClose}
                          />
                        </ButtonToolbar>
                      </div>
                      <div className="ml-auto mr-auto mb-1 mt-3">
                        <CardTitle tag="h5">Uploaded Documents</CardTitle>
                        <hr />
                      </div>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col lg="3" md="6" sm="6">
                          <Card style={{width: '12rem'}}>
                            <CardImg top src={require("assets/img/pdf.png")}/>
                              <CardBody>
                                  <CardTitle>SE_Tutorial</CardTitle>
                                    <div className="button-container">
                                      <Row>
                                        <Col className="ml-auto mr-auto">
                                          <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="info"
                                              onClick = {()=>this.setState({viewDocumentShow: true})} 
                                              >
                                                <i className="fa fa-ellipsis-v fa-lg" />
                                            </Button>
                                            <ViewDocument
                                              show = {this.state.viewDocumentShow}
                                              onHide = {viewDocumentClose}
                                            />
                                          </ButtonToolbar>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                          <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="success"
                                              onClick = {()=>this.setState({validateDocumentShow: true})} 
                                              >
                                                <i className="fa fa-check fa-lg" />
                                            </Button>
                                            <ValidateDocument
                                              show = {this.state.validateDocumentShow}
                                              onHide = {validateDocumentClose}
                                            />
                                          </ButtonToolbar>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                          <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="danger"
                                              onClick = {()=>this.setState({deleteDocumentShow: true})} 
                                              >
                                                <i className="fa fa-times fa-lg" />
                                            </Button>
                                            <DeleteDocument
                                              show = {this.state.deleteDocumentShow}
                                              onHide = {deleteDocumentClose}
                                            />
                                          </ButtonToolbar>
                                        </Col>
                                      </Row>
                                    </div>
                              </CardBody>
                          </Card>
                        </Col>
                        <Col lg="3" md="6" sm="6">
                          <Card style={{width: '12rem'}}>
                            <CardImg top src={require("assets/img/word.png")}/>
                              <CardBody>
                                  <CardTitle>SE_Tute_Answers</CardTitle>
                                    <div className="button-container">
                                      <Row>
                                        <Col className="ml-auto mr-auto">
                                          <Button 
                                            className="btn-round btn-icon"
                                            size = "md"
                                            color="info">
                                              <i className="fa fa-ellipsis-v fa-lg" />
                                          </Button>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                          <Button 
                                            className="btn-round btn-icon"
                                            size = "md"
                                            color="success">
                                              <i className="fa fa-check fa-lg" />
                                          </Button>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                          <Button 
                                            className="btn-round btn-icon"
                                            size = "md"
                                            color="danger">
                                              <i className="fa fa-times fa-lg" />
                                          </Button>
                                        </Col>
                                      </Row>
                                    </div>
                              </CardBody>
                          </Card>
                        </Col>
                        <Col lg="3" md="6" sm="6">
                          <Card style={{width: '12rem'}}>
                            <CardImg top src={require("assets/img/ppoint.png")}/>
                              <CardBody>
                                  <CardTitle>SE_Lec_Notes</CardTitle>
                                    <div className="button-container">
                                      <Row>
                                        <Col className="ml-auto mr-auto">
                                          <Button 
                                            className="btn-round btn-icon"
                                            size = "md"
                                            color="info">
                                              <i className="fa fa-ellipsis-v fa-lg" />
                                          </Button>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                          <Button 
                                            className="btn-round btn-icon"
                                            size = "md"
                                            color="success">
                                              <i className="fa fa-check fa-lg" />
                                          </Button>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                          <Button 
                                            className="btn-round btn-icon"
                                            size = "md"
                                            color="danger">
                                              <i className="fa fa-times fa-lg" />
                                          </Button>
                                        </Col>
                                      </Row>
                                    </div>
                              </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </>
        );
      }
}

export default Documents;