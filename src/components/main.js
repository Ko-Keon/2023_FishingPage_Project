import React, { Component } from 'react'
import MainVideo from './mainVideo'
import MainIntro from './mainIntro'
import MainTrip from './mainTrip'
import './css/main.css'



export class Main extends Component {
  render() {
    return (
      <div>
        <div className='main-wrap'>
          <div className='main-container'>
          <h1 className='main-title'>Enjoy Your Fishing Trip With Us !</h1>
          <h3 className='main-description'>다양한 정보를 바탕으로한 즐거운 낚시 여행,
          BBL은 여러분의 풍족한 조황을 기대합니다!</h3>
          </div>
        <MainVideo />
        </div>
        <MainIntro />
        <MainTrip/>
      </div>
    )
  }
}

export default Main










