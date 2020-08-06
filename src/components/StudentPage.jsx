import React from 'react'
import styles from "../styles/ListItem.module.css";
import ListGroup from "react-bootstrap/ListGroup";

const StudentPage = () => {
    const students = []
    return students.map((student) => (
        <div>
            <span className={styles.ListItemChildren}> {student.fname} {student.lname} </span>
            <span className={styles.ListItemChildren}>
                    <span className={styles.SkillsListTitle}>Existing skills :</span>
                    <ul>
                    {student.exskills.map((skill) => (
                        <li className={styles.SkillsList} key={skill.skillName}>
                            &#10003; {skill.skillName} : level {skill.skillLevel}
                        </li>
                    ))}
                    </ul>
                </span>
            <span className={styles.ListItemChildren}>
                    <span className={styles.SkillsListTitle}>Desired skills :</span>
                    <ul>
                        {student.desskills.map((skill) => (
                            <li className={styles.SkillsList} key={skill.skillName}>
                                &#10003; {skill.skillName}
                            </li>
                        ))}
                    </ul>

                </span>
        </div>
    ))
}