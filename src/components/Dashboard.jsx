import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from '../styles/Dashboard.module.css'
import { getStudentsWantingSpecificSkill, getStudentsHavingSpecificSkill, getStudentsAddedOnDate } from '../lib/api'

const skillsArr = [
    "Potion making",
    "Spells",
    "Quidditch",
    "Animagus",
    "Apparate",
    "Metamorphmagi",
    "Parseltongue",
]
const years = [
    "2020",
    "2019",
    "2018",
    "2017"
]
const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
const days = ["1", "17", "18"]

const Dashboard = () => {
    const [date, setDate] = useState('');
    const [listOfStudentsExSkill, setListOfStudentsExSkill] = useState([]);
    const [listOfStudentsDesSkill, setListOfStudentsDesSkill] = useState([]);
    const [listOfStudentsDate, setListOfStudentsDate] = useState([])

    const handleExSkillChange = async (event) => {
        const skill = {
            skill: event.target.value
        }
        let emailArr = []
        const response = await getStudentsHavingSpecificSkill(skill);
        for (let stud of response.data) {
            emailArr.push(stud.email)
        }
        setListOfStudentsExSkill(emailArr);
    }

    const handleDesSkillChange = async (event) => {
        const skill = {
            skill: event.target.value
        };
        let emailArr = []
        const response = await getStudentsWantingSpecificSkill(skill)
        for (let stud of response.data) {
            emailArr.push(stud.email)
        }
        setListOfStudentsDesSkill(emailArr)
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const getStudentsByDate = async (event) => {
        event.preventDefault();
        const dateObj = {
            "date": date
        }
        let emailArr = []
        const response = await getStudentsAddedOnDate(dateObj);
        for (let stud of response.data) {
            emailArr.push(stud.email)
        }
        setListOfStudentsDate(emailArr);
    }

    return(
        <div className={styles.DashboardRow}>
            <Card className={styles.DashboardCard}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Which students have the skill?</Form.Label>
                        <Form.Control as="select" onChange={handleExSkillChange}>
                            <option>...</option>
                            {skillsArr.map((skill) =>
                                <option key={skill}>{skill}</option>
                                )
                            }
                        </Form.Control>
                        <ul className={styles.StudentList}> {
                            listOfStudentsExSkill.map((email) =>
                            <li key={email}>
                                <a href={`/student/${email}`}>
                                {email}
                                </a>
                            </li>
                            )
                        } </ul>
                    </Form.Group>
                </Form>
            </Card>
            <Card className={styles.DashboardCard}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Which students desire the skill</Form.Label>
                        <Form.Control as="select" onChange={handleDesSkillChange}>
                            <option>...</option>
                            {skillsArr.map((skill) =>
                                <option key={skill}>{skill}</option>
                            )
                            }
                        </Form.Control>
                            <ul className={styles.StudentList}> {
                                listOfStudentsDesSkill.map((email) =>
                                    <li key={email}>
                                        <a href={`/student/${email}`}>
                                            {email}
                                        </a>
                                    </li>
                                )
                            } </ul>
                    </Form.Group>
                </Form>
            </Card>
            <Card className={styles.DashboardCard}>
                <Form onSubmit={getStudentsByDate}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Which students were added on date</Form.Label>
                        <div className={styles.DateInputRow}>
                            <Form.Control
                                type="text"
                                placeholder="YYYY-MM-DD"
                                onChange={(event) => handleDateChange(event)}
                            >
                            </Form.Control>
                            <Button type="submit">get</Button>
                        </div>
                            <ul className={styles.StudentList}> {
                                listOfStudentsDate.map((email) =>
                                    <li key={email}>
                                        <a href={`/student/${email}`}>
                                            {email}
                                        </a>
                                    </li>
                                )
                            } </ul>
                    </Form.Group>
                </Form>
            </Card>

        </div>
    )
}

export default Dashboard