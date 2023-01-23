import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {FaMoon, FaYoutube} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import {RiAccountPinBoxLine, RiLogoutCircleLine} from 'react-icons/ri'
import {GrChannel} from 'react-icons/gr'
import {HiLocationMarker} from 'react-icons/hi'
import {GoTextSize} from 'react-icons/go'
import {AiOutlineClose} from 'react-icons/ai'

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
                <Popup
                  modal
                  trigger={
                    <button className="profile-button">
                      <img
                        src="https://res.cloudinary.com/djomnr5y2/image/upload/v1672749238/Avatarprofile_euhp3a.png"
                        alt="profile"
                        className="profile"
                      />
                    </button>
                  }
                >
                  {close => (
                    <div className="profile-container">
                      <div>
                        <div className="profile-con">
                          <img
                            className="profile"
                            src="https://res.cloudinary.com/djomnr5y2/image/upload/v1672749238/Avatarprofile_euhp3a.png"
                            alt=""
                          />
                          <p className="profile-name">Rahul Attuluri</p>
                        </div>

                        <p className="profile-gmail">rahulattuluri@gmail.com</p>
                        <hr className="profile-hr" />
                        <div className="div-con-pro">
                          <GrChannel className="p-logo" />
                          <p className="pa">Your Channel</p>
                        </div>
                        <div className="div-con-pro">
                          <FaYoutube className="p-logo" />
                          <p className="pa">Nxt Watch Studio</p>
                        </div>
                        <div className="div-con-pro">
                          <RiAccountPinBoxLine className="p-logo" />
                          <p className="pa">Switch Account</p>
                        </div>
                        <hr className="profile-hr" />
                        <div className="div-con-pro">
                          <GoTextSize className="p-logo" />
                          <p className="pa">
                            Language :
                            <span className="span-profile"> ENGLISH</span>
                          </p>
                        </div>
                        <div className="div-con-pro">
                          <HiLocationMarker className="p-logo" />
                          <p className="pa">
                            Location :
                            <span className="span-profile"> INDIA</span>
                          </p>
                        </div>
                        <hr />
                        <button
                          onClick={this.onClickLogout}
                          className="logout-button-p"
                        >
                          <div className="div-con-pro">
                            <RiLogoutCircleLine className="p-logo" />
                            <p className="pa">Logout</p>
                          </div>
                        </button>
                      </div>
                      <button
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        <div className="close-con">
                          <AiOutlineClose className="p-logo" />
                          <p className="pa">Close</p>
                        </div>
                      </button>
                    </div>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={<button className="logout-button">Logout</button>}
                >
                  {close => (
                    <div className="logout-container">
                      <p className="logout-para pa">
                        Are you sure,you want to logout?
                      </p>
                      <div>
                        <button
                          type="button"
                          className="logout-cancel"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>
                        <button onClick={this.onClickLogout} className="logout">
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </Popup>
              </li>
            </NavHeader>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default withRouter(Header)
