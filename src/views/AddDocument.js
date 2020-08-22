import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';

export class AddDocument extends React.Component {
    render() {
        return (
            <Modal 
                isOpen = {this.props.show} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>Upload New Document</ModalHeader>
                <ModalBody>
                <div className="container">
                    <Form>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                    <label>Title</label>
                                    <Input
                                        placeholder="Give a unique title to the file"
                                        type="text"
                                    />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                    <label>Category</label>
                                    <Input type="select">
                                        <option>Tutorial</option>
                                        <option>Lecture Notes</option>
                                        <option>Lab Sheet</option>
                                    </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <FormGroup>
                                    <label>Type</label>
                                    <Input type="select">
                                        <option>PDF</option>
                                        <option>Word</option>
                                        <option>PowerPoint</option>
                                    </Input>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row >
                                <Col md="12">
                                    <FormGroup>
                                    <label>File Upload</label>
                                    <Input
                                        type="file" 
                                    />
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