import React from 'react'
import './css/post.css'


export default function PostItem(props) {
  // props 값으로 받아와  사용
  const {id,title,date} = props;
  return (
    <div className='post-list'>
        <span>{id}</span>
        <span className='title'>{title}</span>
        <span>{date}</span>
    </div>
  )
}
