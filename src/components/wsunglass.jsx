import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./l.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Wsunglass=()=>{
  let navigate=useNavigate();
  const products=[
        {name:'HAUTE SAUCE'},
        {name:'Carlton London'},
        {name:'Twenty Dresses'},
        {name:'Joker & Witch'},
        {name:'Ted Smith'},
        {name:'HAUTE SAUCE'},
        {name:'KAZO'},
        {name:'HAUTE SAUCE'}];
      const [filteredData,setfilterData]=useState(products);
      const handleSearch=(e)=>{
        const text=e.target.value.toLowerCase();
        const filtered=products.filter((item)=>item.name.trim().toLowerCase().includes(text));
        setfilterData(filtered);
      }
    return(
        <>
        <div style={{backgroundColor:'#F3E9DC'}}>
        <div class="container">
  <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

    
    <p className="display-5 fw-bold text-body-emphasis lh-1 mb-3" id="sec" style={{fontSize:'50px',marginTop:'20px',cursor:'pointer'}} onClick={()=>{navigate("/landing");}}>
      <ShoppingCartIcon/>
        PickNShip
      </p>
    
    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" style={{marginLeft:'840px'}}>
      <input type="search" class="form-control" placeholder="Search..." aria-label="Search" onChange={handleSearch} />
    </form>
    <div class="dropdown text-end">
      <a href="#!" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="/images/avatar.jpg" alt="mdo" width="32" height="32" class="rounded-circle"/>
      </a>
      <ul class="dropdown-menu text-small">
        <li><a class="dropdown-item" href="#!">Profile</a></li>
        <li><a class="dropdown-item" href="#!">Orders Placed</a></li>
        <li><a class="dropdown-item" href="#!">Wishlist</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li style={{cursor:'pointer',marginLeft:'15px'}} onClick={()=>{navigate("/landing")}}>Sign out</li>
      </ul>
    </div>
  </div>
</div>
</div>
<div className="container">
  <div className="row">
  {filteredData.some(item => item.name === "HAUTE SAUCE") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'545px'}}>
  <img src="/images/m94.webp" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <h5 class="card-title">HAUTE SAUCE</h5>
    <p class="card-text">Women Brown Lens Sunglasses</p>
    <p class="card-text">Rs.749</p>
    <button class="btn btn-primary"style={{marginBottom:'-140px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  )}
  {filteredData.some(item => item.name === "Carlton London") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'545px'}}>
  <img src="/images/m95.webp" class="card-img-top" alt="..." height={300} />
  <div class="card-body">
    <h5 class="card-title">Carlton London</h5>
    <p class="card-text">Premium Oversized Sunglasses</p>
    <p class="card-text">Rs.899</p>
    <button href="#!" class="btn btn-primary"style={{marginBottom:'-140px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  )}
  {filteredData.some(item => item.name === "Twenty Dresses") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'545px'}}>
  <img src="/images/m96.webp" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <h5 class="card-title">Twenty Dresses</h5>
    <p class="card-text">Oversized Sunglasses</p>
    <p class="card-text">Rs.1299</p>
    <button  class="btn btn-primary"style={{marginBottom:'-140px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  )}
  {filteredData.some(item => item.name === "Joker & Witch") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'545px'}}>
  <img src="/images/m97.webp" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <h5 class="card-title">Joker & Witch</h5>
    <p class="card-text">Oversized Sunglasses</p>
    <p className="card-text">Rs.2500</p>
    <button class="btn btn-primary"style={{marginBottom:'-140px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  )}
  {filteredData.some(item => item.name === "Ted Smith") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'545px'}}>
  <img src="/images/m98.webp" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <h5 class="card-title">Ted Smith</h5>
    <p class="card-text">Pink UV Oversized Sunglasses</p>
    <p class="card-text">Rs.1749</p>
    <button class="btn btn-primary"style={{marginBottom:'-140px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  )}
  {filteredData.some(item => item.name === "HAUTE SAUCE") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'545px'}}>
  <img src="/images/m99.webp" class="card-img-top" alt="..." height={300} />
  <div class="card-body">
    <h5 class="card-title">HAUTE SAUCE</h5>
    <p class="card-text">Women Oversized Sunglasses</p>
    <p class="card-text">Rs.919</p>
    <button class="btn btn-primary" style={{marginBottom:'-140px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  )}
  {filteredData.some(item => item.name === "KAZO") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'545px'}}>
  <img src="/images/m100.webp" class="card-img-top" alt="..."  height={300}/>
  <div class="card-body">
    <h5 class="card-title">KAZO</h5>
    <p class="card-text">Women Brown Lens Oversized</p>
    <p class="card-text">Rs.2499</p>
    <button class="btn btn-primary" style={{marginBottom:'-140px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  )}
  {filteredData.some(item => item.name === "HAUTE SAUCE") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'545px'}}>
  <img src="/images/m101.webp" class="card-img-top" alt="..." height={300} />
  <div class="card-body">
    <h5 class="card-title">HAUTE SAUCE</h5>
    <p class="card-text">Women Butterfly Sunglasses</p>
    <p class="card-text">Rs.3599</p>
    <button class="btn btn-primary" style={{marginBottom:'-140px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  )}
</div>
</div> 
<div style={{backgroundColor:'#F3E9DC',height:'80px'}}>
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    
    <div class="col-md-4 d-flex align-items-center">
      
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-1" id="sec1" style={{cursor:'pointer'}} onClick={()=>{navigate("/landing")}}>
      <ShoppingCartIcon/>
        PickNShip
      </h1>
      
      <span class="mb-3 mb-md-0 text-body-secondary">&nbsp;© 2025 Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3">
        <a class="text-body-secondary" href="#!" aria-label="Instagram">
         <img src="/images/fb.jpg" alt="...." height={24} width={24}/>
        </a>
      </li>
      <li class="ms-3">
        <a class="text-body-secondary" href="#!" aria-label="Facebook">
        <img src="/images/insta.jpg" alt="...." height={24} width={24}/>
        </a>
      </li>
    </ul>

  </footer>
</div>
</div>





            
       
        </>
    )
}
export default Wsunglass