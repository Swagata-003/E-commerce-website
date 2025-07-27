import React, { useState } from 'react';
import './reg2.css';
import { useNavigate } from 'react-router-dom';

export default function Reglogin() {
    const [isLogin, setIsLogin]= useState(true);
    let navigate = useNavigate();

//   const handleLogin = () => {
//     navigate('/call');
//   };
    return(
        <>
        <div id='reglogin-full' style={{backgroundImage:`url("/images/first.jpg")`,backgroundPosition:'top center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
          <div className='reglogin-container'>
          <div className='reglogin-form-container'>
            <div className='reglogin-form-toggle'>
                <button className={isLogin ? "active":""} onClick={() => setIsLogin(true)}>Login</button>
                <button className={!isLogin ? "active":""} onClick={()=> setIsLogin(false)}>SignUp</button>
            </div>
            {isLogin ? <>
            <div className='reglogin-form'>
                <h2>Welcome User!!</h2>
                <input type="email" placeholder='Enter your email'></input>
                <input type="password" placeholder='Enter valid password'></input>
                <a href='#!'>Forgot Password?</a>
                <button onClick={()=>{navigate("/landing");}}>Login</button>
                <p>Not a member?<a href='#!' onClick={() => setIsLogin(false)}>Signup Now?</a></p>
            </div>  
            </>:<>
                <div className='reglogin-form'>
                <br></br>
                <h2>Welcome User!!</h2>
                <input type="text" placeholder='Enter your First name'></input>
                <input type="text" placeholder='Enter your Last name'></input>
                <input type="email" placeholder='Enter your email'></input>
                <input type="password" placeholder='Enter valid password'></input>
                <input type="password" placeholder='Confirm password'></input>
                <a href='#!'>Forgot Password?</a>
                <button onClick={()=>{navigate("/landing");}}>SignUp</button>
               <p>Already registered?<a href='#!' onClick={() => setIsLogin(true)}>Login</a></p>
                </div>
            </>}
          </div>

          </div>
          </div>

        </>
    )
}