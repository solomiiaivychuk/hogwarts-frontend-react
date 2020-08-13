import React from 'react'
import Card from 'react-bootstrap/Card'
import styles from '../styles/LoginFormWrapper.module.css'
import SignUpForm from './SignUpForm'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import LoginForm from './LoginForm';


const LoginFormWrapper = () => {

    return (
        <>
            <Router>
                <div className={styles.LoginFormWrapper}>
                    <Card
                        bg={'light'}
                        text={'dark'}
                        style={{width: '35rem'}}
                        className={'mt-2'}
                    >
                        <Card.Header>
                            <Link to={'/'}>
                                Login
                            </Link>
                            <span> / </span>
                            <Link to={'/signup'}>
                                Sign up
                            </Link>

                        </Card.Header>
                        <Card.Body
                            className={"p-2"}
                        >
                            <Card.Img variant="top" src="../../images/logo.png" className={styles.LogoImage}/>
                            <Card.Title> Please enter your email and password </Card.Title>
                            <Switch>
                                <Route exact path={"/"}>
                                    <LoginForm></LoginForm>
                                </Route>
                                <Route path={"/signup"}>
                                    <SignUpForm></SignUpForm>
                                </Route>
                            </Switch>
                        </Card.Body>
                    </Card>
                </div>
            </Router>
        </>
    )
}

export default LoginFormWrapper