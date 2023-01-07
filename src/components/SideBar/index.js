import {Link, withRouter} from 'react-router-dom'
import './index.css'

import {Component} from 'react'

import {FaHome, FaSave} from 'react-icons/fa'
import {AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'

import ContextTheme from '../../context/ContextTheme'

import {DivSidebar, LinkName, ContactHead, ContactPara} from './styledComponent'

class SideBar extends Component {
  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight, changeSelectedLink, selectedLink} = value

          const onClickSaved = () => {
            changeSelectedLink('saved')
          }
          const onClickHome = () => {
            changeSelectedLink('home')
          }
          const onClickTrending = () => {
            changeSelectedLink('trending')
          }
          const onClickGaming = () => {
            changeSelectedLink('gaming')
          }
          return (
            <DivSidebar islight={islight}>
              <div className="links-container">
                <Link
                  onClick={onClickHome}
                  className="link-con"
                  style={{textDecoration: 'none'}}
                  to="/"
                >
                  <FaHome className="link-logo" />
                  <LinkName
                    selected={selectedLink}
                    value="home"
                    islight={islight}
                  >
                    Home
                  </LinkName>
                </Link>

                <Link
                  onClick={onClickTrending}
                  className="link-con"
                  style={{textDecoration: 'none'}}
                  to="/trending"
                >
                  <AiFillFire className="link-logo" />
                  <LinkName
                    selected={selectedLink}
                    value="trending"
                    islight={islight}
                  >
                    Trending
                  </LinkName>
                </Link>

                <Link
                  onClick={onClickGaming}
                  className="link-con"
                  style={{textDecoration: 'none'}}
                  to="/gaming"
                >
                  <IoLogoGameControllerB className="link-logo" />
                  <LinkName
                    selected={selectedLink}
                    value="gaming"
                    islight={islight}
                  >
                    Gaming
                  </LinkName>
                </Link>

                <Link
                  onClick={onClickSaved}
                  className="link-con"
                  style={{textDecoration: 'none'}}
                  to="/saved-videos"
                >
                  <FaSave className="link-logo" />
                  <LinkName
                    selected={selectedLink}
                    value="saved"
                    islight={islight}
                  >
                    Saved
                  </LinkName>
                </Link>
              </div>
              <div className="contacts-container">
                <ContactHead islight={islight}>CONTACT US</ContactHead>
                <div className="logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="logo"
                  />
                </div>
                <ContactPara islight={islight}>Enjoy!!</ContactPara>
              </div>
            </DivSidebar>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default withRouter(SideBar)
