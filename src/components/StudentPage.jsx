import React, {useContext, useEffect, useState} from 'react'
import StudentContext from "../context/StudentContext";
import {useParams} from "react-router-dom";
import Card from 'react-bootstrap/Card'
import styles from '../styles/StudentPage.module.css'
import {getStudentByEmail} from "../lib/api";


const StudentPage = () => {
    const studentContext = useContext(StudentContext);
    const [students, setStudents] = useState([]);
    let params = useParams();
    let student_obj = null;
    const [student, setStudent] = useState(null)


    const getStudent = async () => {
        const response = await getStudentByEmail(params.email);
        const data = response.data;
        for (let key in data) {
            student_obj = data[key];
        }
        setStudent(student_obj);
        console.log(student_obj);
    }

    useEffect(() => {
        getStudent();
    }, [student_obj]);

    return (
        <div className={styles.StudentCard}>
            {student && (
                <Card style={{width: '45rem'}}>
                    <Card.Body className={styles.CardBody}>
                        <Card.Title>
                            <span className={styles.StudentName}> {student.first_name} {student.last_name} </span>
                        </Card.Title>
                        <span>{student.email}</span>
                        <span className={styles.SkillsList}>
                    <span className={styles.SkillsTitle}>Existing skills :</span>
                    <ul>
                    {student.existing_skills.map((skill) => (
                        <li className={styles.SkillsItem} key={skill.name}>
                            &#10003; {skill.name} : level {skill.level}
                        </li>
                    ))}
                    </ul>
                </span>
                        <span className={styles.SkillsList}>
                <span className={styles.SkillsTitle}>Desired skills :</span>
                    <ul>
                        {student.desired_skills.map((skill) => (
                            <li className={styles.SkillsItem} key={skill.name}>
                                &#10003; {skill.name}
                            </li>
                        ))}
                    </ul>
            </span>
                    </Card.Body>
                </Card>
            )}
            {!student && (
                <div>No data to display</div>
            )}
        </div>
    )
}
export default StudentPage