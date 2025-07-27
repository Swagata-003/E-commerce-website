import React from "react";
// import "../design/C.css"
import "./Category.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
const Bags=()=>{
  let navigate=useNavigate();
    return(
        <>
        <div id="upart">
        <div className="container">
        <div className="container col-xxl-8 px-4 pt-5"></div>
        <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
      <div className="col-10 col-sm-8 col-lg-6">
    <img
      src="/images/bagback.jpg"
      className="d-block mx-lg-auto img-fluid"
      alt="Bootstrap Themes"
      width="700"
      height="500"
      loading="lazy"
    />
  </div>
  <div className="col-lg-6">
    <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{fontFamily:'Winky Rough, sans-serif',marginLeft:'-25px'}}>
      Bags That Speak Fashion!!
    </h1>
    <div className="d-grid gap-2 d-md-flex justify-content-md-start" >
      <nav className="navbar bg-body-tertiary"style={{marginTop:'25px',marginLeft:'-45px'}}>
     <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" style={{width:'500px'}}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  </div>
</div>
</div>
</div>
<div className="container">
<div className="row">
<div className="col-auto">
  <div class="dropdown" style={{marginTop:'20px'}}>
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Price Filters
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#!">Under 3000</a></li>
    <li><a class="dropdown-item" href="#!">Under 1000</a></li>
    <li><a class="dropdown-item" href="#!">Under 800</a></li>
  </ul>
</div>
</div>
<div className="col-auto">
  <div class="dropdown" style={{marginTop:'20px'}}>
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Top Rated
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#!">Sling Bags</a></li>
    <li><a class="dropdown-item" href="#!">Handbags</a></li>
    <li><a class="dropdown-item" href="#!">Tote Bags</a></li>
  </ul>
</div>
</div>
<div className="col-auto">
  <div class="dropdown" style={{marginTop:'20px'}}>
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    New Arrivals
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#!">Oversized Totes</a></li>
    <li><a class="dropdown-item" href="#!">Lavie Sling Bags</a></li>
    <li><a class="dropdown-item" href="#!">Zouk Bags</a></li>
  </ul>
</div>
</div>
</div>
</div>

<div className="container">
<div className="row">
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m24.jpg" class="card-img-top" alt="..." height={300} onClick={()=>{navigate("/wbags")}}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Sling Bags</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m25.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Tote Bags</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m26.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Shoulder Bags</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m31.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Women Bagpacks</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m28.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Potlis</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m29.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Clutches</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m30.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Travel Bags</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m27.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Men Bagpacks</p>
  </div>
</div>
</div>
</div>
</div>
<div class="spart">
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    
    <div class="col-md-4 d-flex align-items-center">
      <a href="#!" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-1" id="sec1">
      <ShoppingCartIcon/>
        PickNShip
      </h1>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2025 Company, Inc</span>
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
export default Bags;