import {Link} from 'react-router-dom'
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
          const {islight, selectedLink, changeSelectedLink} = value
          const onClickHome = () => {
            changeSelectedLink('home')
          }

          const onClickTrending = () => {
            changeSelectedLink('trending')
          }

          const onClickGaming = () => {
            changeSelectedLink('gaming')
          }

          const onClickSaved = () => {
            changeSelectedLink('saved')
          }
          return (
            <div className="top-links-container">
              <Link
                onClick={onClickHome}
                className="link"
                style={{textDecoration: 'none'}}
                to="/"
              >
                <FaHome className="top-link-img" />
                <LinkText
                  values="home"
                  selectedLink={selectedLink}
                  islight={islight}
                >
                  Home
                </LinkText>
              </Link>

              <Link
                onClick={onClickTrending}
                className="link"
                style={{textDecoration: 'none'}}
                to="/trending"
              >
                <AiFillFire className="top-link-img" />
                <LinkText
                  values="trending"
                  selectedLink={selectedLink}
                  islight={islight}
                >
                  Trending
                </LinkText>
              </Link>
              <Link
                onClick={onClickGaming}
                className="link"
                style={{textDecoration: 'none'}}
                to="/gaming"
              >
                <IoLogoGameControllerB className="top-link-img" />
                <LinkText
                  values="gaming"
                  selectedLink={selectedLink}
                  islight={islight}
                >
                  Gaming
                </LinkText>
              </Link>
              <Link
                onClick={onClickSaved}
                className="link"
                style={{textDecoration: 'none'}}
                to="/saved-videos"
              >
                <FaSave className="top-link-img" />
                <LinkText
                  values="saved"
                  selectedLink={selectedLink}
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

export default TopBar
