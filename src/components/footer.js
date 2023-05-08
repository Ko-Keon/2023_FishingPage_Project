import React, { Component } from 'react'
import './css/footer.css'

export class Footer extends Component {
    render() {

    return (
        <div>
        <footer className="footer">
        <div className="footer-logo"></div>
        <div className="info">
            <p>주소 - 부산광역시 사하구 다대로</p>
            <p>대표전화 - 010 . 5792 . 8565</p>
            <p>SNS - @ go_do_aeng</p>
            <p>@2023 Busan Bada Lure</p>
            <a class="top" id="top" href="#">Top</a>
        </div>
    </footer>
        </div>
    )
    }
}

export default Footer