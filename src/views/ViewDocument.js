import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import GoogleDocsViewer from 'react-google-docs-viewer';

export class ViewDocument extends React.Component {
    render() {
        return (
            <Modal 
                isOpen = {this.props.show} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>SE_Tutorial</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <GoogleDocsViewer
                            width="100%"
                            height="842px"
                            fileUrl="https://www.coventry.gov.uk/download/downloads/id/17316/nursery_rhymes_1.pdf"
                        />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-round" color="secondary" onClick={this.props.onHide}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
      }
};