import './index.css'

import {Link} from 'react-router-dom'
import ContextTheme from '../../context/ContextTheme'

import {ParaTrendCard, TitleTrendCard, ParaTrendCardP} from './styledComponent'

const TrendCard = props => {
  const {details} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
  const {name, profileImageUrl} = channel
  return (
    <ContextTheme.Consumer>
      {value => {
        const {islight} = value
        return (
          <Link style={{textDecoration: 'none'}} to={`/videos/${id}`}>
            <div className="trends-containers">
              <img src={thumbnailUrl} alt="" className="trends-img" />
              <div className="trends-content-container">
                <TitleTrendCard islight={islight}>{title}</TitleTrendCard>
                <ParaTrendCard islight={islight}>{name}</ParaTrendCard>
                <div className="views-count">
                  <ParaTrendCard islight={islight}>
                    {viewCount} Views
                  </ParaTrendCard>
                  <ParaTrendCardP islight={islight}>
                    {publishedAt}
                  </ParaTrendCardP>
                </div>
              </div>
            </div>
          </Link>
        )
      }}
    </ContextTheme.Consumer>
  )
}
export default TrendCard
