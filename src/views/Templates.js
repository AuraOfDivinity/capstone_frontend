import React from "react";
import { Card, CardHeader, CardImg, CardBody, CardTitle, Row, Col, Button, ButtonToolbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import {TemplateView} from './TemplateView';
import {AddTemplate} from "./AddTemplate";
import {UpdateTemplate} from "./UpdateTemplate";
import {DeleteTemplate} from "./DeleteTemplate";

class Templates extends React.Component {
  constructor(props){
    super(props);
    this.state = {AddTemplateShow: false};
    this.state = {TemplateViewShow: false};
    this.state = {UpdateTemplateShow: false};
    this.state = {DeleteTemplateShow: false};
  }
    render() {
      let AddTemplateClose =() => this.setState({AddTemplateShow:false});
      let TemplateViewClose =() => this.setState({TemplateViewShow:false});  
      let UpdateTemplateClose =() => this.setState({UpdateTemplateShow:false});  
      let DeleteTemplateClose =() => this.setState({DeleteTemplateShow:false}); 
        return (
          <>
            <div className="content" style={{background:'white'}} >
              <Row>
                <Col md="12">
                <br></br>
                  <Card style={{background:'#e9edea'}}>
                    <CardHeader>
                      <div className="ml-auto mr-auto mb-6">
                      <ButtonToolbar>
                          <Button
                            className="btn-round btn-md"
                            color="primary"
                            type="submit"
                            size = "md"
                            onClick = {()=>this.setState({AddTemplateShow: true})} 
                          >
                            Upload Template
                          </Button>
                          <AddTemplate
                            show = {this.state.AddTemplateShow}
                            onHide = {AddTemplateClose}
                          />
                      </ButtonToolbar>
                      </div>
                      <div className="ml-auto mr-auto mb-1 mt-3">
                        <CardTitle tag="h5">Current Templates</CardTitle>
                        <hr />
                      </div>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col lg="3" md="6" sm="6">
                          <Card style={{width: '12rem'}}>
                            <CardImg top src={require("assets/img/pdf.png")}/>
                              <CardBody>
                                  <CardTitle>Tutorial</CardTitle>
                                    <div className="button-container">
                                      <Row>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="info"
                                              onClick = {()=>this.setState({TemplateViewShow: true})} 
                                              >
                                                <i className="fa fa-ellipsis-v fa-lg" />
                                            </Button>
                                            <TemplateView
                                              show = {this.state.TemplateViewShow}
                                              onHide = {TemplateViewClose}
                                            />
                                          </ButtonToolbar>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="success"
                                              onClick = {()=>this.setState({UpdateTemplateShow: true})} 
                                              >
                                                <i className="fa fa-edit" />
                                            </Button>
                                            <UpdateTemplate
                                              show = {this.state.UpdateTemplateShow}
                                              onHide = {UpdateTemplateClose}
                                            />
                                          </ButtonToolbar>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="danger"
                                              onClick = {()=>this.setState({DeleteTemplateShow: true})} 
                                              >
                                                <i className="fa fa-trash" />
                                            </Button>
                                            <DeleteTemplate
                                              show = {this.state.DeleteTemplateShow}
                                              onHide = {DeleteTemplateClose}
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
                                  <CardTitle>SE Tutorial</CardTitle>
                                    <div className="button-container">
                                      <Row>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="info"
                                              onClick = {()=>this.setState({TemplateViewShow: true})} 
                                              >
                                                <i className="fa fa-ellipsis-v fa-lg" />
                                            </Button>
                                            <TemplateView
                                              show = {this.state.TemplateViewShow}
                                              onHide = {TemplateViewClose}
                                            />
                                          </ButtonToolbar>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="success"
                                              onClick = {()=>this.setState({UpdateTemplateShow: true})} 
                                              >
                                                <i className="fa fa-edit" />
                                            </Button>
                                            <UpdateTemplate
                                              show = {this.state.UpdateTemplateShow}
                                              onHide = {UpdateTemplateClose}
                                            />
                                          </ButtonToolbar>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="danger"
                                              onClick = {()=>this.setState({DeleteTemplateShow: true})} 
                                              >
                                                <i className="fa fa-trash" />
                                            </Button>
                                            <DeleteTemplate
                                              show = {this.state.DeleteTemplateShow}
                                              onHide = {DeleteTemplateClose}
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
                            <CardImg top src={require("assets/img/ppoint.png")}/>
                              <CardBody>
                                  <CardTitle>SE Lecture Slides</CardTitle>
                                    <div className="button-container">
                                      <Row>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="info"
                                              onClick = {()=>this.setState({TemplateViewShow: true})} 
                                              >
                                                <i className="fa fa-ellipsis-v fa-lg" />
                                            </Button>
                                            <TemplateView
                                              show = {this.state.TemplateViewShow}
                                              onHide = {TemplateViewClose}
                                            />
                                          </ButtonToolbar>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="success"
                                              onClick = {()=>this.setState({UpdateTemplateShow: true})} 
                                              >
                                                <i className="fa fa-edit" />
                                            </Button>
                                            <UpdateTemplate
                                              show = {this.state.UpdateTemplateShow}
                                              onHide = {UpdateTemplateClose}
                                            />
                                          </ButtonToolbar>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="danger"
                                              onClick = {()=>this.setState({DeleteTemplateShow: true})} 
                                              >
                                                <i className="fa fa-trash" />
                                            </Button>
                                            <DeleteTemplate
                                              show = {this.state.DeleteTemplateShow}
                                              onHide = {DeleteTemplateClose}
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
                            <CardImg top src={require("assets/img/ppoint.png")}/>
                              <CardBody>
                                  <CardTitle>NC Worksheet</CardTitle>
                                    <div className="button-container">
                                      <Row>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="info"
                                              onClick = {()=>this.setState({TemplateViewShow: true})} 
                                              >
                                                <i className="fa fa-ellipsis-v fa-lg" />
                                            </Button>
                                            <TemplateView
                                              show = {this.state.TemplateViewShow}
                                              onHide = {TemplateViewClose}
                                            />
                                          </ButtonToolbar>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="success"
                                              onClick = {()=>this.setState({UpdateTemplateShow: true})} 
                                              >
                                                <i className="fa fa-edit" />
                                            </Button>
                                            <UpdateTemplate
                                              show = {this.state.UpdateTemplateShow}
                                              onHide = {UpdateTemplateClose}
                                            />
                                          </ButtonToolbar>
                                        </Col>
                                        <Col className="ml-auto mr-auto">
                                        <ButtonToolbar>
                                            <Button 
                                              className="btn-round btn-icon"
                                              size = "md"
                                              color="danger"
                                              onClick = {()=>this.setState({DeleteTemplateShow: true})} 
                                              >
                                                <i className="fa fa-trash" />
                                            </Button>
                                            <DeleteTemplate
                                              show = {this.state.DeleteTemplateShow}
                                              onHide = {DeleteTemplateClose}
                                            />
                                        </ButtonToolbar>
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


export default Templates;

