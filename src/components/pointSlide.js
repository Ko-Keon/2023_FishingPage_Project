import React, { useState } from 'react';
import './css/pointSlide.css';
import pointInfo from '../api/pointInfo.json'; // 파일 경로를 올바르게 지정

function PointSlide({index,setIndex}) {
    // useState 훅으로 선택된 이미지 인덱스를 상태로 관리
    const [imageIndex, setImageIndex] = useState(0);


    const images = pointInfo[index].images; // images 배열을 pointInfo에서 가져옴

    // 이전 이미지 보여주는 함수
    function btnPrev() {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
    
    // 다음 이미지 보여주는 함수
    function btnNext() {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    return (
    <div id='point-slide'>
        <img id='point-slide-img' src={images[imageIndex]} alt={`Image ${imageIndex + 1}`} />
        <div id='slide-btn'>
            <button id='prev-btn' onClick={btnPrev}>{'<'}</button>
            <button id='next-btn' onClick={btnNext}>{'>'}</button>
        </div>
    </div>
);
}

export default PointSlide;