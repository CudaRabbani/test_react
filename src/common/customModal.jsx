import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap";
import CustomForm from "./customForm";

class CustomModal extends Component {

    render() {

        const {show, onHide, formData, formTitle} = this.props;

        return (
            <Modal
                show
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {formTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CustomForm formElement={formData}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>this.props.onHide()}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


export default CustomModal;