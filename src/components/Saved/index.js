import {Component} from 'react'

import Loader from 'react-loader-spinner'
import {FaSave} from 'react-icons/fa'
import './index.css'

import ContextTheme from '../../context/ContextTheme'

import Header from '../Header'
import SideBar from '../SideBar'
import TopBar from '../TopBar'
import SavedCard from '../SavedCard'

import {
  DivMainSaved,
  HeadTrend,
  HeadContainer,
  SavedListCon,
  TitleNoSaved,
  ParaNoSaved,
} from './styledComponent'

class Gaming extends Component {
  state = {savedListState: []}

  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight, savedList} = value

          return (
            <DivMainSaved islight={islight}>
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
                      <div className="logo-con-head">
                        <FaSave className="head-logo" />
                      </div>
                      <HeadTrend islight={islight}>Saved</HeadTrend>
                    </HeadContainer>
                  </div>
                  <SavedListCon islight={islight}>
                    {savedList.length === 0 ? (
                      <div className="empty-container">
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                          alt=""
                          className="no-saved-img"
                        />
                        <TitleNoSaved islight={islight}>
                          No Saved Videos Found !
                        </TitleNoSaved>
                        <ParaNoSaved islight={islight}>
                          You can save your videos while watching them.
                        </ParaNoSaved>
                      </div>
                    ) : (
                      <div className="saved-containers">
                        {savedList.map(each => (
                          <SavedCard details={each} />
                        ))}
                      </div>
                    )}
                  </SavedListCon>
                </div>
              </div>
            </DivMainSaved>
          )
        }}
      </ContextTheme.Consumer>
    )
  }
}

export default Gaming
