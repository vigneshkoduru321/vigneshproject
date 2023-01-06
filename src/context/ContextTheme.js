import React from 'react'

const ContextTheme = React.createContext({
  islight: true,
  changeTheme: () => {},
})

export default ContextTheme
