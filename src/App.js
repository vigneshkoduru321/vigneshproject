import {Component} from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import ContextTheme from './context/ContextTheme'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Saved from './components/Saved'
import VideoDetail from './components/VideoDetail'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {islight: true, selectedLink: 'home', savedList: []}

  changeTheme = () => {
    this.setState(prevState => ({islight: !prevState.islight}))
  }

  changeSelectedLink = value => {
    this.setState({selectedLink: value})
  }

  changeSavedList = value => {
    const {savedList} = this.state
    if (savedList.includes(value) === false) {
      const updatedSavedList = [...savedList, value]
      this.setState({savedList: updatedSavedList})
    }
  }

  render() {
    const {islight, selectedLink, savedList} = this.state
    return (
      <ContextTheme.Provider
        value={{
          islight,
          selectedLink,
          savedList,
          changeTheme: this.changeTheme,
          changeSelectedLink: this.changeSelectedLink,
          changeSavedList: this.changeSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={Saved} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetail} />
          <NotFound component={NotFound} />
        </Switch>
      </ContextTheme.Provider>
    )
  }
}

export default App
