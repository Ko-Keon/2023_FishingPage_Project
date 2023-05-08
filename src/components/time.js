import React, { useState } from 'react';
import "./css/time.css"


const calenders = [
    { month: '1월', img: 'https://ifh.cc/g/9b0AGy.png' },
    { month: '2월', img: 'https://ifh.cc/g/XfWh2L.png' },
    { month: '3월', img: 'https://ifh.cc/g/jBjkDs.png' },
    { month: '4월', img: 'https://ifh.cc/g/nFq8Ny.png' },
    { month: '5월', img: 'https://ifh.cc/g/B1kBL0.png' },
    { month: '6월', img: 'https://ifh.cc/g/B9ft8m.png' },
    { month: '7월', img: 'https://ifh.cc/g/FQkbyM.png' },
    { month: '8월', img: 'https://ifh.cc/g/BgLLyc.png' },
    { month: '9월', img: 'https://ifh.cc/g/FcvYnT.png' },
    { month: '10월', img: 'https://ifh.cc/g/s9MsBO.png' },
    { month: '11월', img: 'https://ifh.cc/g/l3gm5r.png' },
    { month: '12월', img: 'https://ifh.cc/g/fdLB1N.png' },
]

// 기본 창이 현재 월의 달력을 띄우기 위해 사용
const thisMonth = new Date().getMonth();

// 각 월에 대한 버튼 생성, 클릭시 onClick
function MonthButton({month,onClick}) {
    return (
        <button className='time-btn' onClick={onClick}>
            {month}
        </button>
    )
}


export default function Time() {
    const [selectMonth, setSelectMonth] = useState(thisMonth+1+"월");
    // 버튼 클릭시 월 이미지 selectMonth에 저장
    function monthButtonClick(month) {
        setSelectMonth(month);
    }

    return(
        <div id='time'>
            <div id='time-title'>
                <h1>Calender</h1>
            </div>
            <div id='buttons'>
                <h3>2023년</h3>
                {
                    // calender 배열을 통해 MonthButton에 렌더링
                    // 버튼 클릭시 monthButtonClick 호출, select값 변경
                    calenders.map(({month})=>(
                        <MonthButton
                            key={month}
                            month={month}
                            onClick={()=>monthButtonClick(month)}
                        />
                    ))
                }
            </div>
            {   
                // selectMonth가 있는 경우 이미지 보여주기
                selectMonth &&
                    <div id='image'>
                        <img 
                            src={calenders.find(({month}) => month === selectMonth).img} 
                            alt={`${selectMonth}`} 
                            />
                    </div>
            }
            
        </div>
    )
}
