import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from './reducer/userSlice'

export default function MyFishing() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const logoutFunc = () => {
    console.log('로그아웃')
    dispatch(clearUser()) // 로그아웃 버튼 클릭시 clearUser 액션 dispatch
  }

  return (
    <div>
      <h1>My BBL</h1>
      <p>{user.name ? `${user.name}님, 부산 바다 루어에 오신것을 환영합니다!` : '로그인이 필요합니다.'}</p>
      {user.name && <button onClick={logoutFunc}>로그아웃</button>}
    </div>
  )
}
