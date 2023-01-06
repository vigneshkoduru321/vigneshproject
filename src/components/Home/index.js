import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import './index.css'
import {AiOutlineClose} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'

import ContextTheme from '../../context/ContextTheme'
import Header from '../Header'
import SideBar from '../SideBar'
import TopBar from '../TopBar'
import VideoCard from '../VideoCard'

import {DivMainHome} from './styledComponent'

class Home extends Component {
  state = {showBanner: true, dataState: 'initial', Data: [], searchText: ''}

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({dataState: 'loading'})
    const {searchText} = this.state
    const JWT = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
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

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearch = event => {
    this.setState({searchText: event.target.value})
  }

  search = () => {
    this.getVideosData()
  }

  renderLoading = () => (
    <div id="loader" className="loader-con">
      <div className="products-loader-container">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </div>
    </div>
  )

  renderSuccess = () => {
    const {Data} = this.state
    return (
      <ul className="videos-container">
        {Data.map(each => (
          <VideoCard details={each} key={each.id} />
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
    const {showBanner} = this.state
    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight} = value
          return (
            <DivMainHome islight={islight}>
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
                <div className="content-container">
                  {showBanner ? (
                    <div className="banner-div">
                      <div className="banner-container">
                        <div className="banner-content">
                          <img
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt=""
                            className="banner-website-logo"
                          />
                          <p className="banner-para">
                            Buy Nxt Watch Premium Prepaid Plans with UPI
                          </p>
                          <button className="get-it-now">GET IT NOW</button>
                        </div>
                        <div>
                          <button
                            className="cross-button"
                            onClick={this.closeBanner}
                          >
                            <AiOutlineClose className="close" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div>
                    <div className="search-input-container">
                      <input
                        onChange={this.onChangeSearch}
                        placeholder="SEARCH"
                        type="search"
                        className="search-input"
                      />
                      <button onClick={this.search} className="search-button">
                        <FiSearch className="search" />
                      </button>
                    </div>
                  </div>
                  <div className="videos">{this.renderItem()}</div>
                </div>
              </div>
            </DivMainHome>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Home
