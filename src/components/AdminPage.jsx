import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import styles from '../styles/Header.module.css'
import AddStudentForm from './AddStudentForm'
import AllStudentsList from './AllStudentsList'
import Card from 'react-bootstrap/Card'

const AdminPage = () => {
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
                        <Switch>
                            <Route exact path={'/'}>
                                <AllStudentsList />
                            </Route>
                            <Route path={'/add-student'}>
                                <AddStudentForm />
                            </Route>
                        </Switch>

                </Card>
        </Router>
    )
}

export default AdminPage