import React, {Fragment, useContext, useEffect, useState} from "react";
import styles from '../styles/AllStudentsList.module.css'
import Card from 'react-bootstrap/Card'
import StudentsContext from '../context/StudentsContext'
import ListItem from './ListItem'
import ListGroup from 'react-bootstrap/ListGroup'
import SkillsChart from './SkillsChart'
import {getStudentsList} from '../lib/api'

const AllStudentsList = () => {
    const studContext = useContext(StudentsContext);
    const [studs, setStuds] = useState([]);
    const [load, setLoad] = useState(true);


    const getStudents = async () => {
        const studentsFromBE = [];
        const studentsDict = await getStudentsList();
        for (let student in studentsDict.data) {
            studentsFromBE.push(studentsDict.data[student]);
        }
        studContext.addStudents(studentsFromBE);
    }

    useEffect(() => {
        getStudents();
    }, []);

    return (
        // <StudentsContext.Provider value={{studentsFromBE: studs}}>
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
                    </Fragment>
                )
                }
            </div>
        // </StudentsContext.Provider>

    )
}

export default AllStudentsList