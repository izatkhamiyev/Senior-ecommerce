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
            centered
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title> Virtual Try on</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div id='iframe' style = {{
                    height: "80vh"
                }}>
                    <iframe allow='camera' style={{
                        width: "100%",
                        height: "100%",
                        border: "none"
                    }} src={base_url + '?model=' + props.modelName + '&api_key=' + api_key}>

                    </iframe>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.closeModal}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TryOn;