import React, { useState } from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import styles from '../styles/Header.module.css'
import AddStudentForm from './AddStudentForm'
import AllStudentsList from './AllStudentsList'
import Card from 'react-bootstrap/Card'
import stylesBackground from '../styles/AdminPage.module.css'
import StudentsContext from "../context/StudentsContext";


const AdminPage = () => {
    const [students, addStudents] = useState([]);

    return (
        //<StudentsContext.Provider value={{students, addStudents}}>
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
                        </Switch>
                    </div>
                </Card>
            </Router>
        //</StudentsContext.Provider>
    )
}

export default AdminPage