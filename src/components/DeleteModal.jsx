import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";

const DeleteModal = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (

        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete the student form the database?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}