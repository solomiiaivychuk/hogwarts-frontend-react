import React, {useContext} from 'react'
import StudentsContext from "../context/StudentsContext";
import {useParams} from "react-router-dom";
import Card from 'react-bootstrap/Card'
import styles from '../styles/StudentPage.module.css'


const StudentPage = () => {
    const studentsContext = useContext(StudentsContext);
    let params = useParams();
    let student = null;

    for (let item of studentsContext.students) {
        if (item.email === params.email) {
            student = item;
        }
    }
    return (
        <div className={styles.StudentCard}>
        <Card style={{width: '45rem'}}>
            <Card.Body className={styles.CardBody}>
                <Card.Title>
                    <span className={styles.StudentName}> {student.fname} {student.lname} </span>
                </Card.Title>
                <span>{student.email}</span>
                <span className={styles.SkillsList}>
                    <span className={styles.SkillsTitle}>Existing skills :</span>
                    <ul>
                    {student.exskills.map((skill) => (
                        <li className={styles.SkillsItem} key={skill.skillName}>
                            &#10003; {skill.skillName} : level {skill.skillLevel}
                        </li>
                    ))}
                    </ul>
                </span>
                <span className={styles.SkillsList}>
                <span className={styles.SkillsTitle}>Desired skills :</span>
                    <ul>
                        {student.desskills.map((skill) => (
                            <li className={styles.SkillsItem} key={skill.skillName}>
                                &#10003; {skill.skillName}
                            </li>
                        ))}
                    </ul>
            </span>
            </Card.Body>
        </Card>
        </div>
    )
}
export default StudentPage