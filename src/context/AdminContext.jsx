import React from 'react'

const AdminContext = React.createContext({
    admin: "null",
    setUser: (admin) => {},
    logout: () => {}
})
export default AdminContext