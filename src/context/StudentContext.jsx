import React from 'react'

const StudentContext = React.createContext({
    student: null,
    setStudent: () => {}
})
export default StudentContext