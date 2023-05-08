import React from 'react';
import './css/mainVideo.css';



function MainVideo() {
    return (
    <div>
        <div id='video'>
        <video id="main-slide-video" autoPlay muted loop width="150%" height="120%">
            <source src="/video/Home.mp4" type="video/mp4" />
            홈페이집니다.
        </video>
        </div>
    </div>
);
}

export default MainVideo;











