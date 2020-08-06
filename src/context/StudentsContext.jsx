import React from 'react'

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
    students: mockStudents,
    addStudents: () => {}
})
export default StudentsContext