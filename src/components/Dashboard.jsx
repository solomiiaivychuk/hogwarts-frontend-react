import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Dashboard.module.css'
import {getExistingSkill, getDesiredSkill} from '../lib/api'

const skillsArr = [
    "Potion making",
    "Spells",
    "Quidditch",
    "Animagus",
    "Apparate",
    "Metamorphmagi",
    "Parseltongue",
]
const Dashboard = () => {
    const [existingSkill, setExistingSkill] = useState('');
    const [desiredSkill, setDesiredSkill] = useState('');
    const [numOfStudentsExSkill, setNumOfStudentsExSkill] = useState('');
    const [numOfStudentsDesSkill, setNumOfStudentsDesSkill] = useState('');

    const handleExSkillChange = async (event) => {
        setExistingSkill(event.target.value);
        console.log(event.target.value);

        const response = await getExistingSkill(event.target.value);
        console.log(response);
    }

    const handleDesSkillChange = (event) => {
        setDesiredSkill(event.target.value);
    }

    const getStudentsWithSkill = async (event) => {
        console.log(event.target.value);
        console.log("!")
        const response = await getExistingSkill(existingSkill)
        console.log(response);
    }

    const getStudentsWithDesiredSkill = (event) => {
        console.log("submit");
        console.log(JSON.stringify(desiredSkill));
        getDesiredSkill(desiredSkill).then((response) => {
            console.log(response);
        });
    }

    return(
        <div className={styles.DashboardRow}>
            <Card className={styles.ShowExistingSkills}>
                <Form onSubmit={getStudentsWithSkill}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>How many students have the skill?</Form.Label>
                        <Form.Control as="select" onChange={handleExSkillChange}>
                            <option>...</option>
                            {skillsArr.map((skill) =>
                                <option key={skill}>{skill}</option>
                                )
                            }
                        </Form.Control>
                        <div className={styles.StudentNumber}> { numOfStudentsExSkill || 0 } </div>
                    </Form.Group>
                </Form>
            </Card>
            <Card className={styles.ShowDesiredSkills}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>How many students want to have the skill</Form.Label>
                        <Form.Control as="select" onChange={handleDesSkillChange}>
                            <option>...</option>
                            {skillsArr.map((skill) =>
                                <option key={skill}>{skill}</option>
                            )
                            }
                        </Form.Control>
                        <div className={styles.StudentNumber}>{ numOfStudentsDesSkill || 0 }</div>
                    </Form.Group>
                </Form>
            </Card>

        </div>
    )
}

export default Dashboard