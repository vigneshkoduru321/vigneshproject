import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import {FaHome, FaSave} from 'react-icons/fa'
import {AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'

import ContextTheme from '../../context/ContextTheme'
import './index.css'

import {LinkText} from './styledComponent'

class TopBar extends Component {
  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight} = value
          const {match} = this.props
          const {path} = match
          return (
            <div className="top-links-container">
              <Link className="link" style={{textDecoration: 'none'}} to="/">
                <FaHome className="top-link-img" />
                <LinkText
                  values="home"
                  path={path}
                  valuePath="/"
                  islight={islight}
                >
                  Home
                </LinkText>
              </Link>

              <Link
                className="link"
                style={{textDecoration: 'none'}}
                to="/trending"
              >
                <AiFillFire className="top-link-img" />
                <LinkText
                  values="trending"
                  path={path}
                  valuePath="/trending"
                  islight={islight}
                >
                  Trending
                </LinkText>
              </Link>
              <Link
                className="link"
                style={{textDecoration: 'none'}}
                to="/gaming"
              >
                <IoLogoGameControllerB className="top-link-img" />
                <LinkText
                  values="gaming"
                  path={path}
                  valuePath="/gaming"
                  islight={islight}
                >
                  Gaming
                </LinkText>
              </Link>
              <Link
                className="link"
                style={{textDecoration: 'none'}}
                to="/saved-videos"
              >
                <FaSave className="top-link-img" />
                <LinkText
                  values="saved"
                  path={path}
                  valuePath="/saved-videos"
                  islight={islight}
                >
                  Saved
                </LinkText>
              </Link>
            </div>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default withRouter(TopBar)
