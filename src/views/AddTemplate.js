import React,{ useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';

export class AddTemplate extends React.Component {
    render() {
        return (
            <Modal 
                isOpen = {this.props.show} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>Upload New Template</ModalHeader>
                <ModalBody>
                <div className="container">
                <Form>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Title</label>
                              <Input
                                defaultValue="Worksheet"
                                placeholder="Title"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
    
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Category</label>
                              <Input
                                defaultValue=""
                                placeholder="Category"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                        <Col md="12">
                            <FormGroup>
                              <label>Upload Type</label>
                              <Input type="select" name="select" id="inputState" >
                                <option>Choose...</option>
                                <option>File Upload</option>
                                <option>Text Upload</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row>
                        <Col md="12">
                            <FormGroup>
                              <label> Type</label>
                              <Input type="select" name="select" id="inputState" >
                                <option>Choose...</option>
                                <option>Word</option>
                                <option>PowerPoint</option>
                                <option>PDF</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                      
                        <Row>
                        <Col md="12">
                            <FormGroup>
                            <div class = "form-group files">
                            <label>Upload File</label>
                            <Input
                                type="file" class="form-control" multiple=""
                            />
                            </div>
                            </FormGroup>
                        </Col>
                        </Row>
                      </Form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-round" color="primary">Upload</Button>{' '}
                    <Button className="btn-round" color="secondary" onClick={this.props.onHide}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
      }
};