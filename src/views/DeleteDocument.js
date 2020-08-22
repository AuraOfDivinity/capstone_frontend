import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';

export class DeleteDocument extends React.Component {
    render() {
        return (
            <Modal 
                isOpen = {this.props.show} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ModalHeader>Delete Document</ModalHeader>
                <ModalBody>
                    <div className="container">
                        Are you sure you want to delete this document ?
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-round" color="danger">Delete</Button>{' '}
                    <Button className="btn-round" color="secondary" onClick={this.props.onHide}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
      }
};