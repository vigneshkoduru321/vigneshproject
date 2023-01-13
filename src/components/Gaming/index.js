import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {IoLogoGameControllerB} from 'react-icons/io'

import Loader from 'react-loader-spinner'
import './index.css'

import ContextTheme from '../../context/ContextTheme'

import Header from '../Header'
import SideBar from '../SideBar'
import TopBar from '../TopBar'
import GameCard from '../GameCard'

import {DivMainGame, HeadGame, HeadContainer} from './styledComponent'

class Gaming extends Component {
  state = {dataState: 'initial', Data: []}

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({dataState: 'loading'})
    const JWT = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Beaber ${JWT}`,
      },
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const {videos} = fetchedData
      const updatedData = videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({Data: updatedData, dataState: 'success'})
    } else {
      this.setState({dataState: 'failure'})
    }
  }

  renderLoading = () => (
    <div id="loader" className="loader-con">
      <div className="products-loader-container">
        <Loader type="ThreeDots" color="red" height="50" width="50" />
      </div>
    </div>
  )

  renderSuccess = () => {
    const {Data} = this.state
    return (
      <ul className="videos-cards">
        {Data.map(each => (
          <GameCard details={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderFailure = () => (
    <div>
      <h1>failure</h1>
    </div>
  )

  renderItem() {
    const {dataState} = this.state
    switch (dataState) {
      case 'loading':
        return this.renderLoading()
      case 'success':
        return this.renderSuccess()
      case 'failure':
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight} = value
          return (
            <DivMainGame islight={islight}>
              <div className="header-con">
                <Header />
              </div>
              <div className="sidebar-content-container">
                <div className="left-side-bar">
                  <SideBar />
                </div>
                <div className="top-side-bar">
                  <TopBar />
                </div>
                <div className="content-container-gaming">
                  <div className="head-container">
                    <HeadContainer islight={islight}>
                      <IoLogoGameControllerB className="head-logo" />
                      <HeadGame islight={islight}>Gaming</HeadGame>
                    </HeadContainer>
                  </div>
                  <div className="renderItem-container">
                    {this.renderItem()}
                  </div>
                </div>
              </div>
            </DivMainGame>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default withRouter(Gaming)
