import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './css/header.css'

function Header() {
    useEffect(()=>{
        function Scroll() {
            const nav = document.querySelector("#nav")
            const topButton = document.querySelector("#top")
            // 스크롤이 일정 범위 이상 되었을 때 scrollon css 클래스 적용
            if(window.scrollY>=200) {
                nav.classList.add("scrollon")
            }
            else {
                nav.classList.remove("scrollon")
            }
            if(window.scrollY>=700) {
                // 1500이상일떄 오른쪽 하단에 top 버튼 생성
                topButton.classList.add("scrollon")
            }
            else{
                topButton.classList.remove("scrollon")
            }
        }
        window.addEventListener("scroll",Scroll)
        return ()=> {
            window.removeEventListener("scroll",Scroll)
        }
    },[])
    return (
        <div>
            <header className="head">
        <nav className="nav" id="nav">
                <div className='img'></div>
            <div className="logo">
                <span className='nav-title'>Busan Bada Lure</span>
                </div>
            <ul className="nav-menu">
                <span id='color1'><Link to = "/">메인</Link> &nbsp;</span>
                <span id='color2' className='space'><Link to = "/weather">날씨 / 물때</Link> &nbsp;</span>
                <span id='color3'><Link to = "/point">포인트 정보</Link></span>
                <span id='color4'><Link to = "/post">게시판</Link></span>
                <span id='color5'><Link to = "/login">Login</Link></span>
            </ul>
        </nav>

    </header>
        </div>
    )
}

export default Header