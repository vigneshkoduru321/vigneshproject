import './index.css'

import {Link} from 'react-router-dom'
import ContextTheme from '../../context/ContextTheme'

import {ParaTrendCard, TitleTrendCard} from './styledComponent'

const TrendCard = props => {
  const {details} = props
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = details
  const {name, profileImageUrl} = channel
  return (
    <ContextTheme.Consumer>
      {value => {
        const {islight} = value
        return (
          <li>
            <Link
              style={{textDecoration: 'none'}}
              className="trend-card-con"
              to="/trending"
            >
              <div>
                <img
                  src={thumbnailUrl}
                  alt=""
                  className="trending-thumbnailUrl-img"
                />
              </div>
              <div className="content-trends-con">
                <TitleTrendCard className="title-trends" islight={islight}>
                  {title}
                </TitleTrendCard>
                <ParaTrendCard className="para-trends" islight={islight}>
                  {name}
                </ParaTrendCard>
                <div className="views-con-trends">
                  <ParaTrendCard className="para-trends" islight={islight}>
                    {viewCount} Views
                  </ParaTrendCard>
                  <ParaTrendCard className="para-trends" islight={islight}>
                    {publishedAt}
                  </ParaTrendCard>
                </div>
              </div>
            </Link>
          </li>
        )
      }}
    </ContextTheme.Consumer>
  )
}
export default TrendCard
