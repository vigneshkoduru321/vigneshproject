import {Component} from 'react'

import Loader from 'react-loader-spinner'
import {FaSave} from 'react-icons/fa'
import './index.css'

import ContextTheme from '../../context/ContextTheme'

import Header from '../Header'
import SideBar from '../SideBar'
import TopBar from '../TopBar'

import {DivMainSaved, HeadTrend, HeadContainer} from './styledComponent'

class Gaming extends Component {
  render() {
    return (
      <ContextTheme.Consumer>
        {value => {
          const {islight} = value
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
