import React from 'react'

const AdminContext = React.createContext({
    admin: null,
    setAdmin: () => {},
    logout: () => {}
})
export default AdminContext