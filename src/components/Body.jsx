import React, { useContext } from 'react'
import LoginFormWrapper from './LoginFormWrapper'
import styles from '../styles/Body.module.css'
import AdminContext from "../context/AdminContext";
import AdminPage from "./AdminPage";

const Body = () => {
    const adminContext = useContext(AdminContext);
    return <div className={styles.BodyWrapper}>
        {!adminContext.admin &&
        <LoginFormWrapper />
        }
        {adminContext.admin &&
        <AdminPage />
        }
    </div>
}
export default Body