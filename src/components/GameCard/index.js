import './index.css'
import {Link} from 'react-router-dom'
import ContextTheme from '../../context/ContextTheme'

import {TitleGameCard, ViewsGameCard} from './styledComponent'

const GameCard = props => {
  const {details} = props
  const {id, thumbnailUrl, title, viewCount} = details
  return (
    <ContextTheme.Consumer>
      {value => {
        const {islight} = value
        return (
          <li className="game-card-con">
            <Link style={{textDecoration: 'none'}} to={`/videos/${id}`}>
              <img
                src={thumbnailUrl}
                className="thumbnailUrl-game-card"
                alt=""
              />
              <TitleGameCard islight={islight}>{title}</TitleGameCard>
              <ViewsGameCard islight={islight}>
                {viewCount} Watching Worldwide
              </ViewsGameCard>
            </Link>
          </li>
        )
      }}
    </ContextTheme.Consumer>
  )
}
export default GameCard
