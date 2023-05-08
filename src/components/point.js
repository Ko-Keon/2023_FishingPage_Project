import React,{useState} from 'react'
import PointMap from './pointMap'
import PointSlide from './pointSlide'
import PointDescription from './pointDescription'
import './css/point.css'


export default function Point() {
  const [index, setIndex] = useState(0);
  return (
    <div className='point'>
      <PointMap setIndex={setIndex}/>
      <PointSlide index={index} setIndex={setIndex}/>
      <PointDescription index={index}/>
    </div>
  )
}

