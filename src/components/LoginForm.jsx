import React, {useContext, useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from '../styles/LoginForm.module.css'
import AdminContext from "../context/AdminContext";
import Alert from "react-bootstrap/Alert";
import { login } from '../lib/api'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const adminContext = useContext(AdminContext);

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setErrorMessage("Password's minimum length is 6 characters")
        } else {
            const newAdmin = ({
                email: email,
                password: password,
            });
            try {
                login(newAdmin)
                setAdmin(!admin);
                //adminContext.setAdmin(admin);
            }
            catch(error) {
                console.log(error);
                setErrorMessage(error);
            }

        }
    }

    useEffect(() => {
        adminContext.setAdmin(admin);
    }, [admin]);

    return (
        <Form
            onSubmit={handleLogin}
            className={styles.LoginForm}
        >
            {errorMessage && (
                <Alert variant={'danger'}>
                    {errorMessage}
                </Alert>
            )}

            <Form.Group controlId="formBasicEmail" className={styles.LoginFormElement}>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(event) => onEmailChange(event)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className={styles.LoginFormElement}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(event) => onPasswordChange(event)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}

export default LoginForm