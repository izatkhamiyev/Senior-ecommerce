import React, { useState, useEffect, useRef } from 'react';
import {Modal, Button} from 'react-bootstrap';
import {base_url} from 'constants/urls';
import {api_key} from 'constants/keys';

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
                    <iframe allow='camera' src={base_url + '?model=' + props.modelName + '&api_key=' + api_key}>

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