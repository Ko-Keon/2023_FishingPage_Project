import React from 'react'
import './css/mainTrip.css'

function MainTrip() {
    return (
        <div>
            <h1 className='trip-title'>Records</h1>
        <div className='body'>
            <div className='container'>
                <div className='card'>
                    <div className='imgBox'>
                        <img src={process.env.PUBLIC_URL+'/img/조행기1.png'}/>
                    </div>
                    <div className='content'>
                        <h2>[ 아징게임 ]</h2>
                        <p>날짜 : 2023 / 04 / 18</p>
                        <p>날씨 : 맑음 / 5물</p>
                        <p>지역 : 중리 방파제</p>
                        <p>사용 장비 : 로드-가마가츠 소희 S58FL / 릴-울테그라 C2000S /
                            라인-루미나샤인 / 웜-써티포 키메라 / 지그-0.8~1.5g</p>
                        <p>후기 : </p>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img src={process.env.PUBLIC_URL+'/img/조행기2.png'}/>
                    </div>
                    <div className='content'>
                    <h2>[ 아징게임 ]</h2>
                        <p>날짜 : 2023 / 04 / 19</p>
                        <p>날씨 : 맑음 / 6물</p>
                        <p>지역 : 감천항 동방파제</p>
                        <p>사용 장비 : 로드-가마가츠 소희 S58FL / 릴-울테그라 C2000S /
                            라인-루미나샤인 / 웜-써티포 키메라 / 지그-0.8~1.5g</p>
                        <p>후기 : </p>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img src={process.env.PUBLIC_URL+'/img/조행기3.png'}/>
                    </div>
                    <div className='content'>
                    <h2>[ 선상낚시 ]</h2>
                        <p>날짜 : 2023 / 04 / 07</p>
                        <p>날씨 : 맑음 / 6물</p>
                        <p>지역 : 송정 선상</p>
                        <p>사용 장비 : 로드-862ML 에깅대 / 릴-울테그라 /
                            라인-PE 0.8호 / 카드채비, 지그헤드 </p>
                        <p>후기 : </p>
                    </div>
                </div>
                <div className='card'>
                    <div className='imgBox'>
                        <img src={process.env.PUBLIC_URL+'/img/조행기4.png'}/>
                    </div>
                    <div className='content'>
                    <h2>[ 선상낚시 ]</h2>
                        <p>날짜 : 2023 / 04 / 01</p>
                        <p>날씨 : 맑음 / 6물</p>
                        <p>지역 : 기장 선상</p>
                        <p>사용 장비 : 로드-휴스크래프트 L대 / 릴-울테그라 C2000S /
                            라인-PE 0.4호 / 지그-5~7g, 청개비</p>
                        <p>후기 : </p>
                    </div>
                </div>
            </div>
            
            
        </div>
        </div>
    );
}

export default MainTrip;