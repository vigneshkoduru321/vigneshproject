import React from 'react'

const ContextTheme = React.createContext({
  islight: true,
  changeTheme: () => {},
  changeSelectedLink: () => {},
  selectedLink: 'home',
})

export default ContextTheme
