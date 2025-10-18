import React, { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./l.css";
import { useNavigate } from "react-router-dom";
const Shirts =()=>{
  let navigate=useNavigate();
  const[selectedState,setSelectedState]=useState(null);
  const[selectedState1,setSelectedState1]=useState(null);
    const[selectedState2,setSelectedState2]=useState(null);
    const[selectedState3,setSelectedState3]=useState(null);
    const[selectedState4,setSelectedState4]=useState(null);
    const[selectedState5,setSelectedState5]=useState(null);
    const[selectedState6,setSelectedState6]=useState(null);
    const[selectedState7,setSelectedState7]=useState(null); const products=[
            {name:'DressBerry'},
            {name:'PowerLook'},
            {name:'DaMENSCh'},
            {name:'H&M'},
            {name:'StyleCast'},
            {name:'WROGN'},
            {name:'PowerLook'},
            {name:'PowerLook'}];
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
      <input type="search" class="form-control" placeholder="Search..." aria-label="Search" onChange={handleSearch}/>
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
  {filteredData.some(item => item.name === "DressBerry") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m76.webp" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">DressBerry</h5>
    <p class="card-text">Men Solid colour Shirt </p>
    <p class="card-text">Rs.749</p>
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
  )}
  {filteredData.some(item => item.name === "PowerLook") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m69.webp" class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">POWERLOOK</h5>
    <p class="card-text">Men Striped T-Shirt</p>
    <p class="card-text">Rs.899</p>
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
  )}
  {filteredData.some(item => item.name === "DaMENSCh") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m70.webp" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">DaMENSCh</h5>
    <p class="card-text">Men Textured T-Shirt</p>
    <p class="card-text">Rs.1299</p>
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
  )}
  {filteredData.some(item => item.name === "H&M") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m71.webp" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">H&M</h5>
    <p class="card-text">Round Neck T-Shirt</p>
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
  )}
  {filteredData.some(item => item.name === "StyleCast") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m72.webp" class="card-img-top" alt="..." height={290} />
  <div class="card-body">
    <h5 class="card-title">StyleCast</h5>
    <p class="card-text">Men Polo Collar T-Shirt</p>
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
  )}
  {filteredData.some(item => item.name === "WROGN") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m73.webp" class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">WROGN</h5>
    <p class="card-text">Blue Striped Slim Fit T-Shirt</p>
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
  )}
  {filteredData.some(item => item.name === "PowerLook") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m74.webp" class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">PowerLook</h5>
    <p class="card-text">Polo Collar T-Shirt</p>
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
  )}
  {filteredData.some(item => item.name === "PowerLook") && (
  <div className="col-lg-3 col-md-6 col-sm-12">
    <div class="card" style={{width: '18rem',marginTop:'15px',height:'530px'}}>
  <img src="/images/m75.webp" class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">PowerLook</h5>
    <p class="card-text">Polo Collar T-Shirt</p>
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
export default Shirts