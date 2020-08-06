import React, {useContext, useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import styles from '../styles/SignupForm.module.css'
import AdminContext from "../context/AdminContext";
import Alert from "react-bootstrap/Alert";

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [admin, setAdmin] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const adminContext = useContext(AdminContext)
    let newAdmin = {};

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const onPassword1Change = (event) => {
        setPassword1(event.target.value);
    }

    const onPassword2Change = (event) => {
        setPassword2(event.target.value);
    }

    const handleSignup = (event) => {
        event.preventDefault();
        if (email.length < 1) {
            setErrorMessage('Please provid a valid email')
        } else if (password1.length < 6) {
            setErrorMessage("Password's minimum length is 6 characters")
        } else if (password1 != password2) {
            setErrorMessage("Passwords do not match")
        } else {
            newAdmin = ({
                email: email,
                password1: password1,
                password2: password2,
            });
        }
    }


    return (
        <Form
            onSubmit={handleSignup}
        >
            {errorMessage && (
                <Alert variant={'danger'}>
                    {errorMessage}
                </Alert>
            )}

            <Form.Group controlId="formBasicEmail" className={styles.SignupFormElement}>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(event) => onEmailChange(event)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className={styles.SignupFormElement}>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(event) => onPassword1Change(event)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className={styles.SignupFormElement}>
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(event) => onPassword2Change(event)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign up
            </Button>
        </Form>
    )
}

export default SignUpForm