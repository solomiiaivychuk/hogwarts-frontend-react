import React, {useContext, useEffect, useState} from 'react'
import StudentContext from "../context/StudentContext";
import {useParams} from "react-router-dom";
import Card from 'react-bootstrap/Card'
import styles from '../styles/StudentPage.module.css'
import {getStudentByEmail} from "../lib/api";


const StudentPage = () => {
    const studentContext = useContext(StudentContext);
    const [student, setStudent] = useState(null);
    let params = useParams();
    let responseObj = null;
    const existingSkillsArr = []
    const desiredSkillsArr = []
    //let student = null;

    const getStudent = async () => {
        const response = await getStudentByEmail(params.email);
        const data = response.data;
        for (let key in data) {
            responseObj = data[key];
        }
        for (let skill in responseObj.existing_skills) {
            const ex_skill = {
                name: responseObj.existing_skills[skill].skill_name,
                level: responseObj.existing_skills[skill].skill_level
            }
            existingSkillsArr.push(ex_skill)
           }
        for (let skill in responseObj.desired_skills) {
            const des_skill = {
                name: responseObj.desired_skills[skill].skill_name,
            }
            desiredSkillsArr.push(des_skill)
        }
        const studentObj = {
            email: responseObj.email,
            first_name: responseObj.first_name,
            last_name: responseObj.last_name,
            existing_skills: existingSkillsArr,
            desired_skills: desiredSkillsArr
        }
        setStudent(studentObj);
        console.log(student);
    }

    useEffect(() => {
        getStudent();
    }, []);

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