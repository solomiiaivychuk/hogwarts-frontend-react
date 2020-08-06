import React from 'react'

const StudentsContext = React.createContext({
    students: [],
    addStudents: () => {}
})
export default StudentsContext