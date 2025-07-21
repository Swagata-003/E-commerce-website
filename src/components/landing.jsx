import React from "react";
import "./l.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
const Landing=()=>{
  let navigate=useNavigate();
    return(
        <>
         <div id="first">
            <div class="container">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
         <img src="/images/eland.jpg"
           class="d-block mx-lg-auto img-fluid"
           alt="Bootstrap Themes"
           width="700"
           height="500"
           loading="lazy"/>
     </div>
     <div class="col-lg-6">
      <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3" id="sec" >
      <ShoppingCartIcon/>
        PickNShip
      </h1>
      <p class="lead" style={{fontWeight:'bold',fontFamily:'PT Sans, sans-serif',marginBottom:'25px'}}>
       Welcome to your one-stop destination for everything you need and love. From the latest fashion trends to everyday essentials, we bring handpicked products to your doorstep with unbeatable prices, secure checkout, and lightning-fast delivery. Shop smarter, live better!!"
      </p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" onClick={()=>{navigate("/reglogin");}}><b>Sign Up</b></button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4"onClick={()=>{navigate("/reglogin");}}><b>Login</b></button>
      </div>
    </div>
  </div>
</div>
</div>
<h2 style={{fontFamily:'Libre Baskerville, serif',marginTop:'20px',marginLeft:'790px',fontWeight:'bolder'}}>Featured Categories</h2>
<div className="container" style={{marginTop:'25px'}}>
<div className="row">
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none'}}>
  <img src="/images/sun.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'90px'}}>Men</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none'}}>
  <img src="/images/women.jpg" class="card-img-top" alt="..." height={300} onClick={()=>{navigate("/categorywomen");}}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'90px'}}>Women</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none'}}>
  <img src="/images/men.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'90px'}}>Bags</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none'}}>
  <img src="/images/bag.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'90px'}}>Sunglasses</p>
  </div>
</div>
</div>
</div>
</div>
<h2 style={{fontFamily:'Libre Baskerville, serif',marginTop:'20px',marginLeft:'858px',fontWeight:'bolder'}}>Best Sellers</h2>
<div className="container" style={{marginTop:'25px'}}>
<div className="row">
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',height:'300px'}}>
  <img src="/images/tops.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
  <p class="card-text" style={{fontFamily:'PT Sans, sans-serif',fontSize:'20px',fontWeight:'bold',marginLeft:'50px'}}>Women Floral Top</p>
  <p class="card-text" style={{fontFamily:'PT Sans, sans-serif',fontSize:'20px',fontWeight:'bold',marginLeft:'90px'}}>Rs.550</p>
    <button type="button" class="btn btn-primary" style={{marginLeft:'69px',marginTop:'7px',border:'15px'}}>Add To Cart</button>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',height:'300px'}}>
  <img src="/images/jeans.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'PT Sans, sans-serif',fontSize:'20px',fontWeight:'bold',marginLeft:'50px'}}>High Waist Jeans</p>
  <p class="card-text" style={{fontFamily:'PT Sans, sans-serif',fontSize:'20px',fontWeight:'bold',marginLeft:'90px'}}>Rs.2250</p>
    <button type="button" class="btn btn-primary" style={{marginLeft:'69px',marginTop:'7px',border:'15px'}}>Add To Cart</button>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',height:'300px'}}>
  <img src="/images/gb.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'PT Sans, sans-serif',fontSize:'20px',fontWeight:'bold',marginLeft:'50px'}}>Women Floral Dress</p>
  <p class="card-text" style={{fontFamily:'PT Sans, sans-serif',fontSize:'20px',fontWeight:'bold',marginLeft:'90px'}}>Rs.800</p>
    <button type="button" class="btn btn-primary" style={{marginLeft:'69px',marginTop:'7px',border:'15px'}}>Add To Cart</button>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',height:'300px'}}>
  <img src="/images/tees.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'PT Sans, sans-serif',fontSize:'20px',fontWeight:'bold',marginLeft:'69px'}}>Men T-shirt</p>
  <p class="card-text" style={{fontFamily:'PT Sans, sans-serif',fontSize:'20px',fontWeight:'bold',marginLeft:'90px'}}>Rs.480</p>
    <button type="button" class="btn btn-primary" style={{marginLeft:'69px',marginTop:'7px',border:'15px'}}>Add To Cart</button>
  </div>
</div>
</div>
</div>
</div>
<div id="last">
<div className="container" style={{marginTop:'230px'}}>
<footer className="py-5">
  <div className="row">
    {/* Column 1 */}
    <div className="col-6 col-md-2 mb-3">
      <h5>Explore</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link p-0 text-body-secondary">Home</a>
        </li>
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link p-0 text-body-secondary">Features</a>
        </li>
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link p-0 text-body-secondary">FAQs</a>
        </li>
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link p-0 text-body-secondary">About</a>
        </li>
      </ul>
    </div>

    {/* Column 2 (duplicate section) */}
    <div className="col-6 col-md-2 mb-3">
      <h5>Contact Us</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link p-0 text-body-secondary">+(91)8765120931</a>
        </li>
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link p-0 text-body-secondary">picknship25@gmail.com</a>
        </li>
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link p-0 text-body-secondary">Business address</a>
        </li>
      </ul>
    </div>
    {/* Column 3 */}
    <div className="col-6 col-md-2 mb-3">
      <h5>Policy</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link p-0 text-body-secondary">Refund Policy</a>
        </li>
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link p-0 text-body-secondary">Privacy Policy</a>
        </li>
        <li className="nav-item mb-2">
          <a href="#!" className="nav-link p-0 text-body-secondary">Terms and Conditions</a>
        </li>
      </ul>
    </div>

    {/* Newsletter column */}
    <div className="col-md-5 offset-md-1 mb-3">
      <form>
        <h5>Subscribe to our newsletter</h5>
        <p>Discover new arrivals,deals and more.</p>
        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
          <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
          <input
            id="newsletter1"
            type="email"
            className="form-control"
            placeholder="Email address"
          />
          <button className="btn btn-primary" type="button">Subscribe</button>
        </div>
      </form>
    </div>
  </div>

  {/* Bottom footer with icons */}
  <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
    <p>© 2025 Company, Inc. All rights reserved.</p>
    <ul className="list-unstyled d-flex">
      <li className="ms-3">
        <a className="link-body-emphasis" href="#!" aria-label="Instagram">
          <img src="/images/fb.jpg" alt="...." height={24} width={24}/>
        </a>
      </li>
      <li className="ms-3">
        <a className="link-body-emphasis" href="#!" aria-label="Facebook">
          <img src="/images/insta.jpg" alt="...." height={24} width={24}/>
        </a>
      </li>
    </ul>
  </div>
</footer>
</div>
</div>


        </>
    )
}
export default Landing;