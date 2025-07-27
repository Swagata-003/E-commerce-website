import React, { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./l.css";
import { useNavigate } from "react-router-dom";
const Mjeans =()=>{
  let navigate=useNavigate();
  const[selectedState,setSelectedState]=useState(null);
  const[selectedState1,setSelectedState1]=useState(null);
    const[selectedState2,setSelectedState2]=useState(null);
    const[selectedState3,setSelectedState3]=useState(null);
    const[selectedState4,setSelectedState4]=useState(null);
    const[selectedState5,setSelectedState5]=useState(null);
    const[selectedState6,setSelectedState6]=useState(null);
    const[selectedState7,setSelectedState7]=useState(null);
    return(
        <>
        <div style={{backgroundColor:'#F3E9DC'}}>
        <div class="container">
  <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

    <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
    <p className="display-5 fw-bold text-body-emphasis lh-1 mb-3" id="sec" style={{fontSize:'50px',marginTop:'20px'}} >
      <ShoppingCartIcon/>
        PickNShip
      </p>
    </a>
    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" style={{marginLeft:'840px'}}>
      <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
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
        <li><a class="dropdown-item" href="#!">Sign out</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
<div className="container">
  <div className="row">
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m78.webp" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">levis</h5>
    <p class="card-text">men Slim Straight Fit</p>
    <p class="card-text">Rs.2749</p>
    <div className="d-flex gap-2 mb-2">
        {['S', 'M', 'L', 'XL'].map((size) => (
          <button  key={size}
                onClick={() => setSelectedState(size)}
                className={`btn btn-sm rounded-circle ${
                  selectedState === size ? 'btn-dark text-white' : 'btn-outline-dark'
                }`}
                style={{ width: '35px', height: '35px' }}
              >
            {size}
          </button>
        ))}
      </div>
    <button class="btn btn-primary"style={{marginBottom:'15px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m79.webp" class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">Off Duty</h5>
    <p class="card-text">Mid Rise Jeans</p>
    <p class="card-text">Rs.1899</p>
    <div className="d-flex gap-2 mb-2">
        {['S', 'M', 'L', 'XL'].map((size) => (
          <button  key={size}
                onClick={() => setSelectedState1(size)}
                className={`btn btn-sm rounded-circle ${
                  selectedState1 === size ? 'btn-dark text-white' : 'btn-outline-dark'
                }`}
                style={{ width: '35px', height: '35px' }}
              >
            {size}
          </button>
        ))}
      </div>
    <button href="#!" class="btn btn-primary"style={{marginTop:'25px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m80.webp" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">The Roadster</h5>
    <p class="card-text">Non Stretcheble Jeans</p>
    <p class="card-text">Rs.1999</p>
    <div className="d-flex gap-2 mb-2">
        {['S', 'M', 'L', 'XL'].map((size) => (
          <button  key={size}
                onClick={() => setSelectedState2(size)}
                className={`btn btn-sm rounded-circle ${
                  selectedState2 === size ? 'btn-dark text-white' : 'btn-outline-dark'
                }`}
                style={{ width: '35px', height: '35px' }}
              >
            {size}
          </button>
        ))}
      </div>
    <button  class="btn btn-primary"style={{marginTop:'25px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m81.webp" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Mast & Harbour</h5>
    <p class="card-text">men Light Fade Regular Fit Pocket Jeans</p>
    <p className="card-text">Rs.2500</p>
    <div className="d-flex gap-2 mb-2">
        {['S', 'M', 'L', 'XL'].map((size) => (
          <button  key={size}
                onClick={() => setSelectedState3(size)}
                className={`btn btn-sm rounded-circle ${
                  selectedState3 === size ? 'btn-dark text-white' : 'btn-outline-dark'
                }`}
                style={{ width: '35px', height: '35px' }}
              >
            {size}
          </button>
        ))}
      </div>
    <button class="btn btn-primary"style={{marginTop:'25px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m82.webp" class="card-img-top" alt="..." height={290} />
  <div class="card-body">
    <h5 class="card-title">DENIMLOOK</h5>
    <p class="card-text">Men Relaxed Fit Stretchable Jeans</p>
    <p class="card-text">Rs.1749</p>
    <div className="d-flex gap-2 mb-2">
        {['S', 'M', 'L', 'XL'].map((size) => (
          <button  key={size}
                onClick={() => setSelectedState4(size)}
                className={`btn btn-sm rounded-circle ${
                  selectedState4 === size ? 'btn-dark text-white' : 'btn-outline-dark'
                }`}
                style={{ width: '35px', height: '35px' }}
              >
            {size}
          </button>
        ))}
      </div>
    <button class="btn btn-primary"style={{marginTop:'25px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m83.webp" class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">The Indian Garage</h5>
    <p class="card-text">Blue Slim Fit Jeans</p>
    <p class="card-text">Rs.919</p>
    <div className="d-flex gap-2 mb-2">
        {['S', 'M', 'L', 'XL'].map((size) => (
          <button  key={size}
                onClick={() => setSelectedState5(size)}
                className={`btn btn-sm rounded-circle ${
                  selectedState5 === size ? 'btn-dark text-white' : 'btn-outline-dark'
                }`}
                style={{ width: '35px', height: '35px' }}
              >
            {size}
          </button>
        ))}
      </div>
    <button class="btn btn-primary" style={{marginTop:'25px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m84.webp" class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">StyleCast</h5>
    <p class="card-text">Straight Fit Jeans</p>
    <p class="card-text">Rs.2499</p>
    <div className="d-flex gap-2 mb-2" >
        {['S', 'M', 'L', 'XL'].map((size) => (
          <button  key={size}
                onClick={() => setSelectedState6(size)}
                className={`btn btn-sm rounded-circle ${
                  selectedState6 === size ? 'btn-dark text-white' : 'btn-outline-dark'
                }`}
                style={{ width: '35px', height: '35px' }}
              >
            {size}
          </button>
        ))}
      </div>
    <button class="btn btn-primary" style={{marginTop:'25px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m85.webp" class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">Jack & Jones</h5>
    <p class="card-text">Slim Fit Low Rise Jeans</p>
    <p class="card-text">Rs.3599</p>
    <div className="d-flex gap-2 mb-2" >
        {['S', 'M', 'L', 'XL'].map((size) => (
          <button  key={size}
                onClick={() => setSelectedState7(size)}
                className={`btn btn-sm rounded-circle ${
                  selectedState7 === size ? 'btn-dark text-white' : 'btn-outline-dark'
                }`}
                style={{ width: '35px', height: '35px' }} 
              >
            {size}
          </button>
        ))}
      </div>
    <button class="btn btn-primary" style={{marginTop:'25px'}} onClick={()=>{navigate("/payment")}}>Add To Cart</button>
  </div>
</div>
  </div>
</div>
</div> 
<div style={{backgroundColor:'#F3E9DC',height:'80px'}}>
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
export default Mjeans;