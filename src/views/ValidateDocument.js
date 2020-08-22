import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';

export class ValidateDocument extends React.Component {
    render() {
        return (
            <Modal 
                isOpen = {this.props.show} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>Validate Document</ModalHeader>
                <ModalBody>
                    <div className="container">
                    <Form>
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                <label>Save As</label>
                                <Input
                                    placeholder="Give a unique name to the report"
                                    type="text"
                                />
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
                        <Row>
                            <Col md="12">
                                <FormGroup>
                                <label>Choose Template</label>
                                <Input type="select">
                                    <option>Template 1</option>
                                    <option>Template 2</option>
                                    <option>Template 3</option>
                                </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </ModalBody>
            <ModalFooter>
                    <Button className="btn-round" color="primary">Validate</Button>{' '}
                    <Button className="btn-round" color="secondary" onClick={this.props.onHide}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
      }
};