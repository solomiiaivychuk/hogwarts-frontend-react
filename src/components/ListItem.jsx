import React, {useContext, useEffect, useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import styles from '../styles/ListItem.module.css'
import Button from 'react-bootstrap/Button'
import StudentsContext from "../context/StudentsContext";
import Modal from "react-bootstrap/Modal";

const ListItem = () => {
    const [studList, setStudList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const studContext = useContext(StudentsContext);

    useEffect(() => {
        setStudList(studContext.students);
        }, [studList]
    );

    const handleDelete = () => {
        return null;
    }
    const handleEdit = () => {
        return null;
    }

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return studList.map((student) => (
        <>
            <ListGroup.Item as="li" key={student.email} className={styles.ListItem}>
                <span className={styles.ListItemChildren}>
                        {student.fname} {student.lname}
                </span>
                <span className={styles.ListItemChildren}>
                    <a href={`/student/${student.email}`}>
                        {student.email}
                    </a>
                </span>
                <span className={styles.ListItemChildren}>
                    <Button
                        variant="warning"
                    ><a href={`/edit/${student.email}`}>Edit</a></Button>
                    {' '}
                    <Button
                        variant="danger"
                        onClick={handleShow}
                    >Delete</Button>

                </span>
            </ListGroup.Item>

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

        </>
        )
    )
}

export default ListItem