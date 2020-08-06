import React, {useEffect, useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import styles from '../styles/ListItem.module.css'
import Button from 'react-bootstrap/Button'

const ListItem = () => {
    const [studList, setStudList] = useState([]);

    const arr =
        [
            {
                email: "harrypotter@hogwarts.uk",
                fname: "Harry",
                lname: "Potter",
                exskills: [{
                    skillName: "potions",
                    skillLevel: "2"
                },
                    {
                        skillName: "metamorphmagi",
                        skillLevel: "4"
                    }],
                desskills: [{
                    skillName: "spells"
                    }]
            },
            {
                email: "hermionegranger@hogwarts.uk",
                fname: "Hermione",
                lname: "Granger",
                exskills: [{
                    skillName: "potions",
                    skillLevel: "2"
                },
                    {
                        skillName: "metamorphmagi",
                        skillLevel: "4"
                    }],
                desskills: [{
                    skillName: "spells"
                }]
            },
            {
                email: "ronaldweasley@hogwarts.com",
                fname: "Ronald",
                lname: "Weasley",
                exskills: [{
                    skillName: "potions",
                    skillLevel: "2"
                },
                    {
                        skillName: "metamorphmagi",
                        skillLevel: "4"
                    }],
                desskills: [{
                    skillName: "spells"
                }]
            }
        ];
    useEffect(() => {
        setStudList(arr);
    }, [])


    return studList.map((student) => (
            <ListGroup.Item as="li" key={student.email} className={styles.ListItem}>
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
                <span className={styles.ListItemButtons}>
                    <Button variant="warning">Edit</Button>{' '}
                    <Button variant="danger">Delete</Button>

                </span>

            </ListGroup.Item>
        )
    )
}

export default ListItem