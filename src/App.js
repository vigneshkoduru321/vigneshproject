import {Component} from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import ContextTheme from './context/ContextTheme'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

// Replace your code here
class App extends Component {
  state = {islight: true}

  changeTheme = () => {
    this.setState(prevState => ({islight: !prevState.islight}))
  }

  render() {
    const {islight} = this.state
    return (
      <ContextTheme.Provider value={{islight, changeTheme: this.changeTheme}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </ContextTheme.Provider>
    )
  }
}

export default App
