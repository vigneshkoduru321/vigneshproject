import {Component} from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import ContextTheme from './context/ContextTheme'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
class App extends Component {
  state = {islight: true, selectedLink: 'home'}

  changeTheme = () => {
    this.setState(prevState => ({islight: !prevState.islight}))
  }

  changeSelectedLink = value => {
    this.setState({selectedLink: value})
  }

  render() {
    const {islight, selectedLink} = this.state
    return (
      <ContextTheme.Provider
        value={{
          islight,
          selectedLink,
          changeTheme: this.changeTheme,
          changeSelectedLink: this.changeSelectedLink,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </ContextTheme.Provider>
    )
  }
}

export default App
