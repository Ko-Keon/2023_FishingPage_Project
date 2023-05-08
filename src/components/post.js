import React from 'react'
import PostList from './postList'
import './css/post.css'




export default function Post() {
    const list = [
        {id:1, title : " ＃(공지사항) 변경내용 및 추가사항 공지 ", date : "(2023-05-01)", modalContent : "2023년 05월 01일 부로 상기 내용이 변경 되었음을 공지드립니다."},
        {id:2, title : "# (동출요청) 거제 한치 선상낚시", date : "(2023-05-02)", modalContent : "이번 주 금요일 (5/5) 휴일을 맞아 거제대구낚시 한치 선상 동출요청 글입니다 출조를 희망하는 분은 아래 번호로 연락바랍니다."},
        {id:3, title : "# (이벤트) 부산 바다 루어 오픈 이벤트", date : "(2023-05-03)", modalContent : "BusanBadaLure 홈페이지 오픈 기념을 맞아 소정의 루어 용품 이벤트를 진행하려고합니다 이벤트 진행사항은 --"},
        {id:4, title : "# (Tip) 입문자들에게 추천하는 루어 장비 추천", date : "(2023-05-04)", modalContent : "처음 낚시에 입문하신 분들을 위한 낚시 장비 선택법에 대한 영상 링크입니다 해당 링크를 통해 확인하시기 바랍니다."},
        {id:5, title : "# (Tip) 물때표 읽는 방법 및 설명", date : "(2023-05-05)", modalContent : "물때표를 보고 해석이 불가능하여 많은 어려움을 겪고 계신 것 같아 관련 내용 링크 아래에 첨부하겠습니다."},
    ]


  return (
    <div className='post'>
        <h1>Announcement</h1>
        <div className='post-list'>
        <PostList items={list}/>
        </div>
    </div>
  )
}
