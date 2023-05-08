import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from "./reducer/userSlice.js"
import axios from 'axios'
import './css/login.css'

export default function Login() {
    const user = useSelector((state)=>{return state.user})
    const dispatch = useDispatch();

    const [id,setId] = useState("");
    const [password,setPassword] = useState("");

    const [loading,setLoading] = useState(false);
    const [msg,setMsg] = useState("");

    useEffect(()=>{
        if(msg) {
            setTimeout(()=>{
                setMsg("");
                setLoading(false)
            },1500)
        }
    },[msg])

    const LoginFunc = (e) => {
        e.preventDefault();

        if (!id) {
            return alert("ID를 입력하세요.")
        }
        else if (!password) {
            return alert("Password를 입력하세요.")
        }
        else if (id&&password) {
            return alert ("요청하신 주소를 찾을 수 없습니다. error : 404(Not Found) ")
        }
        else {
            const body = {
                id,
                password
            };

            setLoading(true);
            axios.post("로그인 승인 주소", body)
                .then((res) => {
                    console.log(res.data);
                    if(res.data.code === 200) {
                        console.log("로그인");
                        dispatch(loginUser(res.data.userInfo));
                        setMsg("");
                    }
                    if(res.data.code === 400) {
                        setMsg("ID, Password가 비어있습니다.");
                    }
                    if(res.data.code === 401) {
                        setMsg("존재하지 않는 ID입니다.");
                    }
                    if(res.data.code === 402) {
                        setMsg("Password가 틀립니다.");
                    }
                    
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        }
    }

    return (
        <div className='login'>
            <div className='login-wrap'>
            <h1>Login</h1>
            <form className='login-form' onSubmit={LoginFunc}>
                <label htmlFor='id'></label>
                <input placeholder='Username' type="text" id='id' value={id} onChange={(e)=> setId(e.target.value)}/>
                <br/>
                <label htmlFor='password'></label>
                <input placeholder='Password' type="password" id='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <br/>
                <button className='login-btn' type='submit' disabled={loading}>Sign In</button>
                <br/>
                {msg}
            </form>
            </div>
        </div>
    )
}
