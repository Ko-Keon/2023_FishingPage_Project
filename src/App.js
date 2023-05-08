import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import WeatherTime from './components/weatherTime';
import Point from './components/point';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Weather from './components/weather';
import { useRef } from 'react';
import Post from './components/post';
import Login from './components/Login';
import { Provider, useSelector } from 'react-redux';
import store from './components/reducer/store';
import MyFishing from './components/myFishing';




function App() {
  // 라우트에서 바로 연결하여 사용한 결과 내부 기능이 삭제되는 현상이 발생하여
  // App 하단에 먼저 출력을 하고 WeatherTime에서 자식요소로 사용
  // 이후 App 하단에 들어가있는 windy api를 
  // css(hidden, show)를 적용시켜 안보이게 설정

  // ref사용, current값을 가지며 dom 요소에 접근
  const WindyApp = useRef(null);

  // 연결된 라우터로 페이지 이동시 항상 페이지가 최상단으로 초기화되게 설정
  const navigateTop = useNavigate();
  useEffect(()=>{
    window.scrollTo(0,0);
  },[navigateTop])


  
  return (
    <div>
      <Provider store={store}>
      <Header/>
        <div style={{marginTop:"101px"}}>
          <div className='background'>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/weather' element={<WeatherTime/>}/>
        <Route path='/point' element={<Point/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='myfishing' element={<MyFishing/>}/>
      </Routes>
      </div>
        </div>
      <Weather ref={WindyApp}/>
      <Footer/>
      </Provider>
      
    </div>
  )
}

export default App;
