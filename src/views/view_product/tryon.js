import React, { useState, useEffect, useRef } from 'react';
import {Modal, Button} from 'react-bootstrap';
import base_url from 'constants/urls';

const TryOn = (props) => {

    // const [showModal, setShowModal] = useState(false);      
    return (
        <Modal
            show={props.show}
            onHide={props.closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title> Virtual Try on</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id='iframe'>
                    <iframe allow='camera' src={'http://localhost:3001/?model=eyeglasess_transparent&api_key=local'}>

                    </iframe>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>
                Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TryOn;