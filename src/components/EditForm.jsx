import React, {useContext, useState} from 'react'
import StudentsContext from "../context/StudentsContext";
import {useParams} from "react-router-dom";
import styles from "../styles/AddStudentForm.module.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import editFormStyles from '../styles/EditForm.module.css'

const EditForm = () => {

    const [potionMakingLevel, setPotionMakingLevel] = useState('')
    const [spellsLevel, setSpellsLevel] = useState('');
    const [quidditchLevel, setQuidditchLevel] = useState('');
    const [animagusLevel, setAnimagusLevel] = useState('');
    const [apparateLevel, setApparateLevel] = useState('');
    const [metamorphmagiLevel, setMetamorphMagiLevel] = useState('');
    const [parseltongueLevel, setParseltongueLevel] = useState('');

    const studentsContext = useContext(StudentsContext);
    let params = useParams();
    let student = null;

    for (let item of studentsContext.students) {
        if (item.email === params.edit) {
            student = item;
        }
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
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className={styles.FormWrapper}>
            <Card className={styles.FormCard}>
                 <Card.Title>
                     Edit the <span className={editFormStyles.StudentEmail}>{student.email} 's </span> data
                 </Card.Title>
                <Form
                    className={styles.Form}
                    onSubmit={(event) => handleSubmit(event)}>

                    <Form.Group >
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicRange" className={styles.SkillsList}>
                        <h6>Student's skills :</h6>
                        <Form.Label>Potion making : {potionMakingLevel}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handlePotionMakingLevel(event)}/>

                        <Form.Label>Spells : {spellsLevel}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleSpellsLevel(event)}/>

                        <Form.Label>Quidditch : {quidditchLevel}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleQuidditchLevel(event)}/>

                        <Form.Label>Animagus : {animagusLevel}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleAnimagusLevel(event)}/>

                        <Form.Label>Apparate : {apparateLevel}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleApparateLevel(event)}/>

                        <Form.Label>Metamorphmagi : {metamorphmagiLevel}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleMetamorphMagiLevel(event)}/>

                        <Form.Label>Parseltongue : {parseltongueLevel}</Form.Label>
                        <Form.Control
                            type="range"
                            min={'1'}
                            max={'5'}
                            onChange={(event) => handleParseltongueLevel(event)}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>Student's desired skills : </Form.Label>
                        <Form.Check type="checkbox" label="Potion making" />
                        <Form.Check type="checkbox" label="Spells" />
                        <Form.Check type="checkbox" label="Quidditch" />
                        <Form.Check type="checkbox" label="Animagus" />
                        <Form.Check type="checkbox" label="Apparate" />
                        <Form.Check type="checkbox" label="Metamorphmagi" />
                        <Form.Check type="checkbox" label="Parseltongue" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add student
                    </Button>
                </Form>
            </Card>
        </div>
    )
}
export default EditForm