import React, { useEffect, useRef } from 'react'
import './css/modal.css'

export default function PostModalBasic(props) {
    // 게시글 내용, 게시창 닫기 용도로 아래 props 받아오기
    const {setModalOpen,content} = props

    // 모달창 끄기
    const closeModal = () => {
        setModalOpen(false)
    }

    // 모달창 외부 클릭시 창 닫기
    // modal을 useRef로 처리
    const modalRef = useRef(null);

    useEffect(()=>{
        const handler = (e) => {
            // 이벤트 발생한 곳이 모달창이 아니면 모달창 닫기 처리
            if(modalRef.current && !modalRef.current.contains(e.target)){
                setModalOpen(false)
            }
        };
        
        // 모달창 외부 클릭시 창 닫기
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
        }, [setModalOpen]);
    

    return (
        // div에 modalRef를 설정하여 eventListener에서
        // 모달창을 제외한 바깥 영역인지 판단 가능하게 한다.
        <div ref={modalRef} className='modal-container'>
            <button className='close' onClick={closeModal}>닫기</button>
            <p className='modal-content'>{content}</p>
        </div>
)
}
