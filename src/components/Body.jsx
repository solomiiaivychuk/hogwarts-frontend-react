import React, {useContext, useEffect, useState } from 'react'
import LoginFormWrapper from './LoginFormWrapper'
import styles from '../styles/Body.module.css'
import AdminContext from "../context/AdminContext";
import AdminPage from "./AdminPage";


const Body = () => {
    const adminContext = useContext(AdminContext);
    const [admin, setAdmin] = useState("!null");

    useEffect(() => {
        console.log(admin)
    }, [admin]);

    return (
        <AdminContext.Provider value={{admin, setAdmin, logout: () => setAdmin(null)}}>
            <div className={styles.BodyWrapper}>
                {!admin &&
                <LoginFormWrapper/>
                }
                {admin &&
                <AdminPage/>
                }
            </div>
        </AdminContext.Provider>
    )
}
export default Body