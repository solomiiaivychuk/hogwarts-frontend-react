import React, {useContext, useEffect, useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import styles from '../styles/ListItem.module.css'
import Button from 'react-bootstrap/Button'
import StudentsContext from "../context/StudentsContext";

const ListItem = () => {
    const [studList, setStudList] = useState([]);
    const studContext = useContext(StudentsContext);

    useEffect(() => {
        setStudList(studContext.students);
        }, [studList]
    );


    return studList.map((student) => (
            <ListGroup.Item as="li" key={student.email} className={styles.ListItem}>
                <span className={styles.ListItemChildren}> {student.fname} {student.lname} </span>
                <span className={styles.ListItemChildren}>
                    <Button variant="warning">Edit</Button>{' '}
                    <Button variant="danger">Delete</Button>

                </span>

            </ListGroup.Item>
        )
    )
}

export default ListItem