import React from "react";
// import "../design/C.css"
import "./Category.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
const Sunglasses=()=>{
  let navigate=useNavigate();
    return(
        <>
        <div id="upart">
        <div className="container">
        <div className="container col-xxl-8 px-4 pt-5"></div>
        <div className="row flex-lg-row-reverse align-items-center g-5 pt-5">
      <div className="col-10 col-sm-8 col-lg-6">
    <img
      src="/images/m23.jpg"
      className="d-block mx-lg-auto img-fluid"
      alt="Bootstrap Themes"
      width="700"
      height="500"
      loading="lazy"
    />
  </div>
  <div className="col-lg-6">
    <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{fontFamily:'Winky Rough, sans-serif',marginLeft:'-1px'}}>
     See the World in Style!!
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
    <li><a class="dropdown-item" href="#!">Under 100</a></li>
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
    <li><a class="dropdown-item" href="#!">Polarized</a></li>
    <li><a class="dropdown-item" href="#!">Sports</a></li>
    <li><a class="dropdown-item" href="#!">Rectangular</a></li>
  </ul>
</div>
</div>
<div className="col-auto">
  <div class="dropdown" style={{marginTop:'20px'}}>
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    New Arrivals
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#!">Wayfarer glasses</a></li>
    <li><a class="dropdown-item" href="#!">Oval shaped glasses</a></li>
    <li><a class="dropdown-item" href="#!">Retro glasses</a></li>
  </ul>
</div>
</div>
</div>
</div>
<div className="container">
<div className="row">
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m10.jpg" class="card-img-top" alt="..." height={300} onClick={()=>{navigate("/wsunglass");}}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}} >Oversized</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m13.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'55px'}}>Oval shaped </p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m14.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Rectangular</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m21.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Sports</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m16.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Round</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m19.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Retro</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m20.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Polarized</p>
  </div>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div class="card" style={{width: '18rem',border:'none',marginTop:'25px'}}>
  <img src="/images/m15.jpg" class="card-img-top" alt="..." height={300}/>
  <div class="card-body">
    <p class="card-text" style={{fontFamily:'cursive',fontSize:'30px',fontWeight:'bold',marginLeft:'60px'}}>Rectangular</p>
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
export default Sunglasses;