import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import styles from '../styles/Header.module.css'
import AddStudentForm from './AddStudentForm'
import AllStudentsList from './AllStudentsList'
import Card from 'react-bootstrap/Card'
import stylesBackground from '../styles/AdminPage.module.css'
import StudentPage from "./StudentPage";
import EditForm from "./EditForm";
import StudentsContext from "../context/StudentsContext";
import {getStudentsList} from "../lib/api";

const AdminPage = () => {
    const [students, addStudents] = useState([]);
    const [desiredSkills, setDesiresSkills] = useState([]);


    return (

            <Router>
                <Card className={styles.Header}>
                    <Card.Header>
                        <Link to={'/'} className={styles.HeaderElement}>
                            List of all students
                        </Link>
                        <Link to={'/add-student'} className={styles.HeaderElement}>
                            Add new student
                        </Link>
                    </Card.Header>
                    <div className={stylesBackground.AdminPageWrapper}>
                        <Switch>
                            <Route exact path={'/'}>
                                <AllStudentsList/>
                            </Route>
                            <Route path={'/add-student'}>
                                <AddStudentForm/>
                            </Route>
                            <Route path={'/student/:email'} children={<StudentPage/>}>
                            </Route>
                            <Route path={'/edit/:edit'} children={<EditForm/>}>
                            </Route>
                        </Switch>
                    </div>
                </Card>
            </Router>

    )
}

export default AdminPage