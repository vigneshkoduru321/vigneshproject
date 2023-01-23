import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import ContextTheme from '../../context/ContextTheme'

import {
  TitleSaved,
  NameSaved,
  PublishedSaved,
  ViewsSaved,
} from './styledComponent'

class SavedCard extends Component {
  state = {
    dataState: 'initial',
    Data: [],
    name: '',
    profileImageUrl: '',
    subscriberCount: '',
  }

  componentDidMount() {
    this.getSavedCardDetails()
  }

  getSavedCardDetails = async () => {
    const {details} = this.props
    console.log(details)
    const JWT = Cookies.get('jwt_token')
    this.setState({dataState: 'loading'})
    const url = `https://apis.ccbp.in/videos/${details}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Beaber ${JWT}`,
      },
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok) {
      const videoDetails = fetchedData.video_details
      const updatedData = {
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      this.setState({
        Data: updatedData,
        name: updatedData.channel.name,
        profileImageUrl: updatedData.channel.profileImageUrl,
        subscriberCount: updatedData.channel.subscriberCount,
        dataState: 'success',
      })
    } else {
      this.setState({dataState: 'failure'})
    }
  }

  renderLoading = () => (
    <div id="loader" className="loader-con-save">
      <div className="products-loader-container">
        <Loader type="ThreeDots" color="red" height="50" width="50" />
      </div>
    </div>
  )

  renderSuccess = () => {
    const {Data, name, profileImageUrl, subscriberCount} = this.state
    const {thumbnailUrl, title, viewCount, publishedAt, id} = Data

    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight} = value
          return (
            <Link style={{textDecoration: 'none'}} to={`/videos/${id}`}>
              <div className="save-main-container">
                <img src={thumbnailUrl} alt="" className="thumbnailUrl-saved" />
                <div className="saved-content">
                  <TitleSaved islight={islight}>{title}</TitleSaved>
                  <NameSaved islight={islight}>{name}</NameSaved>
                  <div className="view-con">
                    <ViewsSaved islight={islight}>{viewCount} Views</ViewsSaved>
                    <PublishedSaved islight={islight}>
                      {publishedAt}
                    </PublishedSaved>
                  </div>
                </div>
              </div>
            </Link>
          )
        }}
      </ContextTheme.Consumer>
    )
  }

  renderFailure = () => {}

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
    const {details} = this.props
    return <div className="renderItem-container-saved">{this.renderItem()}</div>
  }
}

export default SavedCard
