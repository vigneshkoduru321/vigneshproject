import {Component} from 'react'

import Cookies from 'js-cookie'

import {AiFillFire, AiOutlineClose} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'

import Loader from 'react-loader-spinner'
import './index.css'

import ContextTheme from '../../context/ContextTheme'

import Header from '../Header'
import SideBar from '../SideBar'
import TopBar from '../TopBar'
import TrendCard from '../TrendCard'

import {DivMainTrend, HeadTrend, HeadContainer} from './styledComponent'

class Trending extends Component {
  state = {dataState: 'initial', Data: []}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({dataState: 'loading'})
    const JWT = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
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
      <div>
        <Loader type="ThreeDots" color="red" height="50" width="50" />
      </div>
    </div>
  )

  renderSuccess = () => {
    const {Data} = this.state
    return (
      <ul className="videos-cards-trending">
        {Data.map(each => (
          <TrendCard details={each} key={each.id} />
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
            <DivMainTrend islight={islight}>
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
                      <AiFillFire className="head-logo" />
                      <HeadTrend islight={islight}>Trending</HeadTrend>
                    </HeadContainer>
                  </div>
                  <div className="renderItem-container">
                    {this.renderItem()}
                  </div>
                </div>
              </div>
            </DivMainTrend>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Trending
