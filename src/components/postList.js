import React, { useState } from 'react'
import './css/post.css'
import PostModalBasic from './postModalBasic';

export default function PostList(props) {
  // 각 item은 id, title, date, modalContent를 가진다
  const {items} = props

  // 모달 노출 여부, 선택 게시글 정보를 담는 state
  const [modalOpen,setModalOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState();

  // 모달창 띄우기
  // item에 modalContent를 매개로 받아와 selectedPost state에 변수를 저장
  // modalOpen state 변수를 true로 변경하여 모달창이 뜨도록 한다
  const showModal = (content) => {
    setSelectedPost(content)
    setModalOpen(true);
  }
  return (
    <div>
      {items.map((item) => (
        <div className='post-list' key={item.id} onClick={() => showModal(item.modalContent)}>
          <div className='title'>{item.title}</div>
          <div>{item.date}</div>
        </div>
      ))}

      {/* 
        모달창 구현 
        setModalOpen 프로퍼티로 modalOpen의 state변수 변경
        content 프로퍼티로 선택된 item의 modalContent 전달
      */}
      {
        modalOpen && 
        <PostModalBasic setModalOpen={setModalOpen} content={selectedPost}/>
      }
    </div>
  );
}
