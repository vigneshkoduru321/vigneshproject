import {Link} from 'react-router-dom'

import './index.css'

import {Title, Name} from './styledComponent'
import ContextTheme from '../../context/ContextTheme'

const VideoCard = props => {
  const {details} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = details
  const {name, profileImageUrl} = channel
  return (
    <ContextTheme.Consumer>
      {value => {
        const {islight} = value
        return (
          <Link style={{textDecoration: 'none'}} to="/">
            <li className="video-card">
              <img src={thumbnailUrl} alt="" className="thumbnailUrl" />
              <div className="video-card-container">
                <img src={profileImageUrl} alt="" className="profileImageUrl" />

                <div className="content-card-con">
                  <Title islight={islight}>{title}</Title>
                  <Name islight={islight}>{name}</Name>
                  <div className="views-con">
                    <Name islight={islight}>{viewCount} Views</Name>
                    <Name islight={islight}>{publishedAt}</Name>
                  </div>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </ContextTheme.Consumer>
  )
}

export default VideoCard
