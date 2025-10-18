import React, { useState } from 'react';
import './reg2.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default function Reglogin() {
    const [isLogin, setIsLogin]= useState(true);
    let navigate = useNavigate();
    const initialValuesreg={first:"",last:"",email:"",password:"",conpass:""}
    const initialLoginValues = { email: "", password: "" };
    const [formValues,setformValues]=useState(initialValuesreg);
    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const [formErrors,setformErrors]=useState({});
    const [loginErrors, setLoginErrors] = useState({});
    //const [isSubmit,setisSubmit]=useState(false);
    const handleChange=(e)=>{
        const  {name,value}=e.target;
        //setformValues({...formValues,[name]:value});
        if (isLogin) {
      setLoginValues({ ...loginValues, [name]: value });
    } else {
      setformValues({ ...formValues, [name]: value });
    }
    };
    const handleSignUp=(e)=>{
        e.preventDefault();
        const errors=validate(formValues);
        setformErrors(errors);
        //setisSubmit(true);
        if (Object.keys(errors).length === 0) {
      axios.post("http://localhost:5000/signup", {
      first: formValues.first,
      last: formValues.last,
      email: formValues.email,
      password: formValues.password,
    })
    .then(result => {
    console.log(result);
    navigate("/landing");
})
.catch(err => console.log(err));
    }
    };
    const handleLogin=(e)=>{
        e.preventDefault();
        const errors=validateLogin(loginValues);
        setLoginErrors(errors);
        //setisSubmit(true);
        if (Object.keys(errors).length === 0) {
      //console.log("Form submitted successfully", formValues);
      axios.post("http://localhost:5000/login", {
      email: loginValues.email,
      password: loginValues.password,
    })
    .then(result => {
    console.log(result);
    if(result.data==="Success"){
    navigate("/landing");
    }
})
.catch(err => console.log(err));
    }
};
    const validate=(values)=>{
        const errors={};
        const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!values.first){
            errors.first="First name is Required!!"
        }
        if(!values.last){
            errors.last="Last name is Required!!"
        }
        if(!values.email){
            errors.email="Email is Required!!"
        }
        else if(!regex.test(values.email)){
            errors.email="Enter valid email!!";
        }
        if(!values.password){
            errors.password="Password is Required!!"
        }
        else if(values.password.length<4){
            errors.password="Enter valid password!!";
        }
        else if(values.password.length>10){
            errors.password="Enter valid password!!";
        }
        if(!values.conpass){
            errors.conpass="Confirm password is Required!!"
        }
        else if(values.password.length!==values.conpass.length)
        {
             errors.conpass="Enter correct password !!"

        }

        return errors;



    }
    const validateLogin=(values)=>{
        const errors={};
        const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!values.email){
            errors.email="Email is Required!!"
        }
        else if(!regex.test(values.email)){
            errors.email="Enter valid email!!";
        }
        if(!values.password){
            errors.password="Password is Required!!"
        }
        else if(values.password.length<4){
            errors.password="Enter valid password!!";
        }
        else if(values.password.length>10){
            errors.password="Enter valid password!!";
        }
        return errors;
        
    }
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
                <input type="email" placeholder='Enter your email' name='email' value={loginValues.email} onChange={handleChange}></input>
                <p className='error'>{loginErrors.email}</p>
                <input type="password" placeholder='Enter valid password' name='password' value={loginValues.password} onChange={handleChange}></input>
                <p className='error'>{loginErrors.password}</p>
                <a href='#!'>Forgot Password?</a>
                <button onClick={handleLogin}>Login</button>
                <p>Not a member?<a href='#!' onClick={() => setIsLogin(false)}>Signup Now?</a></p>
            </div>  
            </>:<>
                <div className='reglogin-form'>
                <br></br>
                <h2>Welcome User!!</h2>
                <input type="text" placeholder='Enter your First name' name='first' value={formValues.first} onChange={handleChange}></input>
                <p className='error'>{formErrors.first}</p>
                <input type="text" placeholder='Enter your Last name' name='last' value={formValues.last} onChange={handleChange}></input>
                <p className='error'>{formErrors.last}</p>
                <input type="email" placeholder='Enter your email' name='email' value={formValues.email} onChange={handleChange}></input>
                <p className='error'>{formErrors.email}</p>
                <input type="password" placeholder='Enter valid password' name='password' value={formValues.password} onChange={handleChange}></input>
                <p className='error'>{formErrors.password}</p>
                <input type="password" placeholder='Confirm password' name='conpass' value={formValues.conpass} onChange={handleChange}></input>
                <p className='error'>{formErrors.conpass}</p>
                <a href='#!'>Forgot Password?</a>
                <button onClick={handleSignUp}>SignUp</button>
               <p>Already registered?<a href='#!' onClick={() => setIsLogin(true)}>Login</a></p>
                </div>
            </>}
          </div>

          </div>
          </div>

        </>
    )
}