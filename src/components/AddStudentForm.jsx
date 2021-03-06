import React, { useState, useEffect, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import styles from '../styles/AddStudentForm.module.css'
import SkillsContext from "../context/SkillsContext";
import { addNewStudent } from "../lib/api";
import Alert from 'react-bootstrap/Alert'

const AddStudentForm = () => {
    const [submitted, setSubmitted] = useState(false)

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [potionMakingLevel, setPotionMakingLevel] = useState('')
    const [spellsLevel, setSpellsLevel] = useState('');
    const [quidditchLevel, setQuidditchLevel] = useState('');
    const [animagusLevel, setAnimagusLevel] = useState('');
    const [apparateLevel, setApparateLevel] = useState('');
    const [metamorphmagiLevel, setMetamorphMagiLevel] = useState('');
    const [parseltongueLevel, setParseltongueLevel] = useState('');

    const [potionMakingDesired, setPotionMakingDesired] = useState(false);
    const [spellsDesired, setSpellsDesired] = useState(false);
    const [quidditchDesired, setQuidditchDesired] = useState(false);
    const [animagusDesired, setAnimagusDesired] = useState(false);
    const [apparateDesired, setApparateDesired] = useState(false);
    const [metamorphmagiDesired, setMetamorphMagiDesired] = useState(false);
    const [parseltongueDesired, setParseltongueDesired] = useState(false);

    const desSkillsContext = useContext(SkillsContext);

    const existingSkillsArray = [
        {
            name: 'Potion Making',
            level: potionMakingLevel,
        },
        {
            name: 'Spells',
            level: spellsLevel,
        },
        {
            name: 'Quidditch',
            level: quidditchLevel,
        },
        {
            name: 'Animagus',
            level: animagusLevel,
        },
        {
            name: 'Apparate',
            level: apparateLevel,
        },
        {
            name: 'Metamorphmagi',
            level: metamorphmagiLevel,
        },
        {
            name: 'Parsel Tongue',
            level: parseltongueLevel,
        },
    ]

    const desiredSkillsArray = [
        {
            name: 'Potion Making',
            desired: potionMakingDesired
        },
        {
            name: 'Spells',
            desired: spellsDesired,
        },
        {
            name: 'Quidditch',
            desired: quidditchDesired,
        },
        {
            name: 'Animagus',
            desired: animagusDesired,
        },
        {
            name: 'Apparate',
            desired: apparateDesired,
        },
        {
            name: 'Metamorphmagi',
            desired: metamorphmagiDesired,
        },
        {
            name: 'Parsel Tongue',
            desired: parseltongueDesired,
        }
    ];

    const studentExistingSkills = [];
    for (let skill of existingSkillsArray) {
        if (skill.level != "") {
            studentExistingSkills.push(skill);
        }
    }
    const studentDesiredSkills = [];
    for (let skill of desiredSkillsArray) {
        if (skill.desired === true) {
            studentDesiredSkills.push(skill);
            //desSkillsContext.desiredSkills.push(skill);
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handlePotionMakingLevel = (event) => {
        setPotionMakingLevel(event.target.value);
     }
    const handleSpellsLevel = (event) => {
        setSpellsLevel(event.target.value);
    }
    const handleQuidditchLevel = (event) => {
        setQuidditchLevel(event.target.value);
    }
    const handleAnimagusLevel = (event) => {
        setAnimagusLevel(event.target.value);
    }
    const handleApparateLevel = (event) => {
        setApparateLevel(event.target.value);
    }
    const handleMetamorphMagiLevel = (event) => {
        setMetamorphMagiLevel(event.target.value);
    }
    const handleParseltongueLevel = (event) => {
        setParseltongueLevel(event.target.value);
    }
    const handlePotionMakingDesired = (event) => {
        setPotionMakingDesired(!potionMakingDesired);
    }

    const handleSpellsDesired = (event) => {
        setSpellsDesired(!spellsDesired);
    }

    const handleQuidditchDesired = (event) => {
        setQuidditchDesired(!spellsDesired);
    }

    const handleAnimagusDesired = (event) => {
        setAnimagusDesired(!spellsDesired);
    }

    const handleApparateDesired = (event) => {
        setApparateDesired(!apparateDesired);
    }

    const handleMetamorphmagiDesired = (event) => {
        setMetamorphMagiDesired(!metamorphmagiDesired);
    }

    const handleParselTongueDesired = (event) => {
        setParseltongueDesired(!parseltongueDesired);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const student = {
            email: email,
            first_name: firstName,
            last_name: lastName,
            existing_skills: studentExistingSkills,
            desired_skills: studentDesiredSkills,
        }
        try {
            await addNewStudent(student);
            setSubmitted(true);
            console.log(student);
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.FormWrapper}>
        <Card className={styles.FormCard}>
            <h4>Fill the student's data</h4>
            {!submitted && (


            <Form
                className={styles.Form}
                onSubmit={(event) => handleSubmit(event)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(event) => handleEmailChange(event)}/>
                </Form.Group>

                <Form.Group >
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        onChange={(event) => handleFirstNameChange(event)}
                    />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        onChange={(event) => handleLastNameChange(event)}
                    />
                </Form.Group>

                    <Form.Group controlId="formBasicRange" className={styles.SkillsList}>
                        <h6>Student's skills :</h6>
                        <Form.Label>Potion making : {potionMakingLevel || 0}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handlePotionMakingLevel(event)}/>

                        <Form.Label>Spells : {spellsLevel || 0}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleSpellsLevel(event)}/>

                        <Form.Label>Quidditch : {quidditchLevel || 0}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleQuidditchLevel(event)}/>

                        <Form.Label>Animagus : {animagusLevel || 0}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleAnimagusLevel(event)}/>

                        <Form.Label>Apparate : {apparateLevel || 0}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleApparateLevel(event)}/>

                        <Form.Label>Metamorphmagi : {metamorphmagiLevel || 0}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleMetamorphMagiLevel(event)}/>

                        <Form.Label>Parseltongue : {parseltongueLevel || 0}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleParseltongueLevel(event)}/>
                    </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Label>Student's desired skills : </Form.Label>
                    <Form.Check
                        type="checkbox"
                        label="Potion making"
                        onChange={(event) => handlePotionMakingDesired(event)}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Spells"
                        onChange={(event) => handleSpellsDesired(event)}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Quidditch"
                        onChange={(event) => handleQuidditchDesired(event)}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Animagus"
                        onChange={handleAnimagusDesired}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Apparate"
                        onChange={handleApparateDesired}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Metamorphmagi"
                        onChange={handleMetamorphmagiDesired}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Parseltongue"
                        onChange={handleParselTongueDesired}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add student
                </Button>
            </Form>

            )}
            {submitted && (
                <Card className={styles.SuccessAlert}>
                    <Alert variant={"success"}>Added student successfully</Alert>
                    <Button
                        variant={"success"}
                        onClick={() => setSubmitted(false)}
                        >
                        Add new student
                    </Button>
                </Card>
            )}
        </Card>
        </div>
    )
}

export default AddStudentForm