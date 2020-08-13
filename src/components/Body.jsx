import React, {useContext, useEffect, useState} from 'react'
import LoginFormWrapper from './LoginFormWrapper'
import styles from '../styles/Body.module.css'
import AdminContext from "../context/AdminContext";
import AdminPage from "./AdminPage";
import StudentsContext from "../context/StudentsContext";
import StudentContext from "../context/StudentContext";
import StudentPage from "./StudentPage";


const Body = () => {
    const adminContext = useContext(AdminContext);
    const [admin, setAdmin] = useState(null);
    const [students, addStudents] = useState([]);
    const [student, setStudent] = useState(null)

    useEffect(() => {

    }, [admin]);

    return (
        <AdminContext.Provider value={{admin, setAdmin, logout: () => setAdmin(null)}}>
            <StudentsContext.Provider value={{students, addStudents}}>
                <StudentContext.Provider value={{student, setStudent}}>
                <div className={styles.BodyWrapper}>
                    {!admin &&
                    <LoginFormWrapper/>
                    }
                    {admin &&
                    <AdminPage/>
                    }
                </div>
                </StudentContext.Provider>
            </StudentsContext.Provider>
        </AdminContext.Provider>
    )
}
export default Body