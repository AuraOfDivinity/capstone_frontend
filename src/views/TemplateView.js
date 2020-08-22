
import React from "react";
import { Modal, Card, CardHeader, CardTitle, CardBody, ModalHeader, ModalBody, ModalFooter, Row, Button } from 'reactstrap';
import "../assets/css/styles.css";

import GoogleDocsViewer from 'react-google-docs-viewer';

export class TemplateView extends React.Component {
    render() {
        return (
            <Modal 
                isOpen = {this.props.show} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                contentClassName="custom-modal-style"
            >
                <ModalHeader>
                  View Template
                </ModalHeader>
                <ModalBody>
                <div className="content">
                <Row>
                    <Card>
                        <CardHeader>
                            <CardTitle tag = "h5"> LabSheet 
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <GoogleDocsViewer
                                width="690px"
                                height="900px"
                                fileUrl="https://www.softwaretestingclass.com/wp-content/uploads/2016/06/Beginner-Guide-To-Software-Testing.pdf"
                            />
                        </CardBody>
                    </Card>
                </Row>              
            </div> 
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-round" color="secondary" onClick={this.props.onHide}>Close</Button>
                </ModalFooter>
            </Modal>
        );
      }
};