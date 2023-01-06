import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {DivLoginForm, Label, LabelShow} from './styledComponent'

import ContextTheme from '../../context/ContextTheme'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showError: false,
    error: '',
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    this.setState({username: '', password: ''})
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', fetchedData.jwt_token, {expires: 365})
      this.setState({showError: false})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({showError: true, error: fetchedData.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {username, password, showPassword, showError, error} = this.state
    const JWT = Cookies.get('jwt_token')
    if (JWT !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight} = value
          return (
            <div className="login-main-container">
              <DivLoginForm onSubmit={this.onSubmitLogin} islight={islight}>
                <img
                  src={
                    islight
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt=""
                  className="website-logo"
                />
                <div className="label-con">
                  <Label islight={islight} htmlFor="username">
                    USERNAME*
                  </Label>
                  <input
                    value={username}
                    id="username"
                    placeholder="USERNAME"
                    className="input-elements"
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="label-con">
                  <Label islight={islight} htmlFor="password">
                    PASSWORD*
                  </Label>
                  <input
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="PASSWORD"
                    className="input-elements"
                    onChange={this.onChangePassword}
                  />
                </div>
                <div className="show-con">
                  <input
                    onChange={this.toggleCheckbox}
                    id="checkbox"
                    type="checkbox"
                  />
                  <LabelShow islight={islight} htmlFor="checkbox">
                    Show Password
                  </LabelShow>
                </div>
                <div className="button-con">
                  <button className="login-button" type="submit">
                    Login
                  </button>
                </div>
                <div className="error-con">
                  {showError ? <p className="error">{error}</p> : null}
                </div>
              </DivLoginForm>
            </div>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Login
