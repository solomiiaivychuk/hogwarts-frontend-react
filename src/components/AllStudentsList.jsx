import React, {Fragment, useContext, useState} from "react";
import styles from '../styles/AllStudentsList.module.css'
import Card from 'react-bootstrap/Card'
import StudentsContext from '../context/StudentsContext'
import ListItem from './ListItem'
import ListGroup from 'react-bootstrap/ListGroup'
import SkillsChart from './SkillsChart'

const AllStudentsList = () => {
    const studContext = useContext(StudentsContext);
    const [studs, setStuds] = useState([]);
    const [load, setLoad] = useState(true);


    return (
        <div className={styles.ListWrapper}>
            {!load &&
            <Card className={styles.ListCard}>
                <Card.Header>
                    The list is empty!
                </Card.Header>
            </Card>
            }
            {load && (
                <Fragment>
                    <ListGroup as="ul" className={styles.ListCard}>
                        <ListItem></ListItem>
                    </ListGroup>
                    <SkillsChart/>
                </Fragment>
            )

            }

        </div>
    )
}

export default AllStudentsList