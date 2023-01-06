import {Link} from 'react-router-dom'

import {FaHome, FaSave} from 'react-icons/fa'
import {AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'

import ContextTheme from '../../context/ContextTheme'
import './index.css'

import {LinkText} from './styledComponent'

const TopBar = () => (
  <ContextTheme.Consumer>
    {value => {
      const {islight} = value
      return (
        <div className="top-links-container">
          <Link className="link" style={{textDecoration: 'none'}} to="/">
            <FaHome className="top-link-img" />
            <LinkText islight={islight}>Home</LinkText>
          </Link>
          <Link className="link" style={{textDecoration: 'none'}} to="/">
            <AiFillFire className="top-link-img" />
            <LinkText islight={islight}>Trending</LinkText>
          </Link>
          <Link className="link" style={{textDecoration: 'none'}} to="/">
            <IoLogoGameControllerB className="top-link-img" />
            <LinkText islight={islight}>Gaming</LinkText>
          </Link>
          <Link className="link" style={{textDecoration: 'none'}} to="/">
            <FaSave className="top-link-img" />
            <LinkText islight={islight}>Saved</LinkText>
          </Link>
        </div>
      )
    }}
  </ContextTheme.Consumer>
)

export default TopBar
