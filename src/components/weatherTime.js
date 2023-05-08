import React from 'react'
import Time from './time'


export default function WeatherTime({children}) {
  return (
    <div>
      <Time/>
      {/* 아래 children은 App.js에서 자식요소로 가져온 값(weather -> windy api 지도) */}
      {children}
    </div>
  )
}
