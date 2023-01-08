import './index.css'

import {BiLike, BiDislike} from 'react-icons/bi'
import {IoIosSave} from 'react-icons/io'
import ReactPlayer from 'react-player'

import Cookies from 'js-cookie'

import {Component} from 'react'

import Header from '../Header'
import SideBar from '../SideBar'
import TopBar from '../TopBar'
import ContextTheme from '../../context/ContextTheme'
import {
  DivVideoMain,
  Button,
  TitleVideo,
  Para,
  ParaView,
  Hr,
  Name,
  Subscribers,
  Description,
  VideoContainer,
  ButtonSave,
} from './styledComponent'

class VideoDetail extends Component {
  state = {
    dataState: 'initial',
    Data: [],
    name: '',
    profileImageUrl: '',
    subscriberCount: '',
    selectedReaction: 'initial',
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({dataState: 'loading'})
    const JWT = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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

  onClickLike = () => {
    this.setState({selectedReaction: 'like'})
  }

  onClickDisLike = () => {
    this.setState({selectedReaction: 'dislike'})
  }

  onClickSaveButton = () => {
    this.setState({isSaved: true})
  }

  render() {
    const {
      dataState,
      Data,
      selectedReaction,
      name,
      profileImageUrl,
      subscriberCount,
      isSaved,
    } = this.state
    console.log(isSaved)
    const {
      description,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = Data

    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight, changeSavedList} = value
          const onClickSave = () => {
            changeSavedList(id)
            this.onClickSaveButton()
          }
          return (
            <DivVideoMain islight={islight}>
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
                <div className="content-container-detail">
                  <VideoContainer className="video-container">
                    <ReactPlayer height="100%" width="100%" url={videoUrl} />
                  </VideoContainer>
                  <div className="video-details-con">
                    <TitleVideo islight={islight}>{title}</TitleVideo>
                    <div className="like-dislike-con">
                      <div className="views">
                        <ParaView islight={islight} className="views-para">
                          {viewCount} Views
                        </ParaView>
                        <Para islight={islight} className="published-para">
                          {publishedAt}
                        </Para>
                      </div>
                      <div className="like">
                        <Button
                          onClick={this.onClickLike}
                          value="like"
                          selectedReaction={selectedReaction}
                        >
                          <BiLike className="like-logo" />
                          Like
                        </Button>
                        <Button
                          onClick={this.onClickDisLike}
                          value="dislike"
                          selectedReaction={selectedReaction}
                          className="like-button"
                        >
                          <BiDislike />
                          Dislike
                        </Button>
                        <ButtonSave
                          isSaved={isSaved}
                          onClick={onClickSave}
                          selectedReaction={selectedReaction}
                        >
                          <IoIosSave />
                          Save
                        </ButtonSave>
                      </div>
                    </div>
                    <div>
                      <Hr islight={islight} />
                    </div>
                    <div className="profile-img-con">
                      <img
                        src={profileImageUrl}
                        className="channel-img"
                        alt=""
                      />
                      <div className="name-content">
                        <Name islight={islight}>{name}</Name>
                        <Subscribers islight={islight}>
                          {subscriberCount} Subscribers
                        </Subscribers>
                      </div>
                    </div>
                    <div>
                      <Description islight={islight}>{description}</Description>
                    </div>
                  </div>
                </div>
              </div>
            </DivVideoMain>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default VideoDetail
