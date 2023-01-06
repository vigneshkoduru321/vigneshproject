import {Link} from 'react-router-dom'
import './index.css'

import {FaHome, FaSave} from 'react-icons/fa'
import {AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'

import ContextTheme from '../../context/ContextTheme'

import {DivSidebar, LinkName, ContactHead, ContactPara} from './styledComponent'

const SideBar = () => (
  <ContextTheme.Consumer>
    {value => {
      const {islight} = value
      return (
        <DivSidebar islight={islight}>
          <div className="links-container">
            <Link className="link-con" style={{textDecoration: 'none'}} to="/">
              <FaHome className="link-logo" />
              <LinkName islight={islight}>Home</LinkName>
            </Link>

            <Link className="link-con" style={{textDecoration: 'none'}} to="/">
              <AiFillFire className="link-logo" />
              <LinkName islight={islight}>Trending</LinkName>
            </Link>

            <Link className="link-con" style={{textDecoration: 'none'}} to="/">
              <IoLogoGameControllerB className="link-logo" />
              <LinkName islight={islight}>Gaming</LinkName>
            </Link>

            <Link className="link-con" style={{textDecoration: 'none'}} to="/">
              <FaSave className="link-logo" />
              <LinkName islight={islight}>Saved</LinkName>
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

export default SideBar
