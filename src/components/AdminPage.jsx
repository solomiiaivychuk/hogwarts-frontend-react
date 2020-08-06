import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import styles from '../styles/Header.module.css'
import AddStudentForm from './AddStudentForm'
import AllStudentsList from './AllStudentsList'
import Card from 'react-bootstrap/Card'
import stylesBackground from '../styles/AdminPage.module.css'

const AdminPage = () => {
    return (
        <Router>
                <Card className={styles.Header}>
                    <Card.Header>
                        <Link to={'/students'} className={styles.HeaderElement}>
                            List of all students
                        </Link>
                        <Link to={'/add-student'} className={styles.HeaderElement}>
                            Add new student
                        </Link>
                    </Card.Header>
                    <div className={stylesBackground.AdminPageWrapper}>
                        <Switch>
                            <Route exact path={'/students'}>
                                <AllStudentsList />
                            </Route>
                            <Route path={'/add-student'}>
                                <AddStudentForm />
                            </Route>
                        </Switch>
                </div>
                </Card>
        </Router>
    )
}

export default AdminPage