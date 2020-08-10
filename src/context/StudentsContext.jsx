import React from 'react'
import { getStudentsList } from "../lib/api";

const mockStudents =
    [
        {
            email: "harrypotter@hogwarts.uk",
            fname: "Harry",
            lname: "Potter",
            exskills: [{
                skillName: "potions",
                skillLevel: "2"
            },
                {
                    skillName: "metamorphmagi",
                    skillLevel: "4"
                }],
            desskills: [{
                skillName: "spells"
            }]
        },
        {
            email: "hermionegranger@hogwarts.uk",
            fname: "Hermione",
            lname: "Granger",
            exskills: [{
                skillName: "potions",
                skillLevel: "2"
            },
                {
                    skillName: "metamorphmagi",
                    skillLevel: "4"
                }],
            desskills: [{
                skillName: "spells"
            }]
        },
        {
            email: "ronaldweasley@hogwarts.com",
            fname: "Ronald",
            lname: "Weasley",
            exskills: [{
                skillName: "potions",
                skillLevel: "2"
            },
                {
                    skillName: "metamorphmagi",
                    skillLevel: "4"
                }],
            desskills: [{
                skillName: "spells"
            }]
        }
    ];

const StudentsContext = React.createContext({
    students: [],
    addStudents: () => {}
})
export default StudentsContext