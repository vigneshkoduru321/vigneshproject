import {Link, withRouter} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'

import {Component} from 'react'
import Cookies from 'js-cookie'
import ContextTheme from '../../context/ContextTheme'
import './index.css'

import {NavHeader} from './styledComponent'

class Header extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight, changeTheme, changeSelectedLink} = value
          const onChangeTheme = () => {
            changeTheme()
          }
          const onClickHomeImg = () => {
            changeSelectedLink('home')
          }
          return (
            <NavHeader islight={islight}>
              <li>
                <Link onClick={onClickHomeImg} to="/">
                  <img
                    src={
                      islight
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
                    className="website-logo-header"
                  />
                </Link>
              </li>
              <li className="log-out-container">
                <button onClick={onChangeTheme} className="theme-button">
                  {islight ? (
                    <FaMoon className="moon" />
                  ) : (
                    <FiSun className="sun" />
                  )}
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  className="profile"
                />
                <button onClick={this.onClickLogout} className="logout-button">
                  Logout
                </button>
              </li>
            </NavHeader>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default withRouter(Header)
