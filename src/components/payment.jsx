import React from "react";
import {useState,useRef} from "react";
const Payment=()=>{
  const[paymentSuccess,setPaymentSuccess]=useState(false);
  const formRef=useRef(null);
  const handleSubmit=()=>{
    setPaymentSuccess(true);
    formRef.current.reset();
    setTimeout(()=>{
      setPaymentSuccess(false)
    },3000);
  }
    return(
        <>
            <div className="container" style={{marginTop:'190px',marginLeft:'700px',border:'solid grey',height:'500px',width:'500px',backgroundColor:'#EEEEEE',borderRadius:'10px'}}>
               <h3 style={{marginLeft:'90px',fontWeight:'bold',marginTop:'5px'}}>CREDIT/DEBIT CARD</h3> 
    <form ref={formRef} style={{marginTop:'20px'}}>
    <label style={{fontSize:'20px',fontWeight:'bold',marginBottom:'30px'}}><input type="radio" name="cardtype" value="visa" />Visa</label>
    <label style={{fontSize:'20px',fontWeight:'bold',marginBottom:'30px'}}><input type="radio" name="cardtype" value="mcard" style={{marginLeft:'30px'}}/>MasterCard</label>
    <label style={{fontSize:'20px',fontWeight:'bold',marginBottom:'30px'}}><input type="radio" name="cardtype" value="rupay"  style={{marginLeft:'30px'}}/>Rupay</label>
        <input type="text" placeholder="Card Number" style={{width:'450px',height:'40px',border:'solid black',borderRadius:'10px'}}/><br/>
        <input type="text" placeholder="Expiry Date" style={{width:'450px',marginTop:'35px',border:'solid black',borderRadius:'10px',height:'40px'}} /><br/>
        <input type="text" placeholder="CVV" style={{width:'450px',marginTop:'35px',border:'solid black',borderRadius:'10px',height:'40px'}}/><br/>
        <input type="text" placeholder="Name on card" style={{width:'450px',marginTop:'35px',border:'solid black',borderRadius:'10px',height:'40px'}}/><br/>
        <button type="button" class="btn btn-success" style={{marginTop:'40px',marginLeft:'170px'}} onClick={handleSubmit}>Pay Now</button>
    </form>
    {paymentSuccess && (
      <div class="alert alert-success" role="alert">
        Payment Successful !!
   </div>
    )}
            </div>
            
        </>
    )
}
export default Payment