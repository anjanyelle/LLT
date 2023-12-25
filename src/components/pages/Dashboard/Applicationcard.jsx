import React from 'react';import './Step.css';import './stytle.css'
import image  from  '../../../assets/img/university-logo.png'
import { Link } from 'react-router-dom';

export default function Applicationcard() {
  return (
    <div>
         <div className="card card11 card10">
  <div className="card-body applcationprogramgrid">
  <div className='linetag'></div>
    <div> <div class="card">
    {/* This is some text within a card body. */}
        <img  src={image} className='imagecopa' />
</div></div>
    <div className='applicationgrid'>     
    <div>  <div   className='applydivbox'>
  <span className='boxspan'><i class="bi bi-heart "></i></span>
  <span className='boxspan'><i class="bi bi-card-list"></i></span>
 <Link to="/applicationpage1"> <span className='boxspan boxspa'>Apply</span></Link>
</div>  <div className='applicard'  style={{backgroundColor:  '#e0dfdf6',}}> 
    

    
    <h6>B.A. in Classical Studies</h6>
    <div className='applicatoline'>
       <p> <i class="fa-solid fa-building"></i> Acadia University <i class="fa-solid fa-arrow-up-right-from-square"  style={{fontSize:'13px'}}></i></p>
    <p  style={{marginLeft: '10px',}}><i class="fa-solid fa-location-dot"></i> Canada</p>
    <p><i class="fa-solid fa-money-check-dollar"></i>  Yearly Tuition Fees: $ 18500</p></div>
   <p><i class="fa-regular fa-clock"></i> Duration: 24 Month(s)</p>

    </div></div>
   
    <div className='bagess'><p  className='imagesmarigin'><i class="fa-solid fa-download"></i>  Intakes:</p><p  className='bagesdata'>Sep 2023 (Open)</p>
    <p  className='bagesdata'>Sep 2023 (Open)</p>
    <p  className='bagesdata'>Sep 2023 (Open)</p></div>
    
    <div className='applicard1'    style={{backgroundColor: '#3d5ee121',}}>    
    <div className='cardcomponet'>
      <p><strong>TUITION FEE </strong></p>
      <p> $ 19407 CAD</p>
    </div>

    <div className='cardcomponet'>
      <p><strong>APPLICATION FEE </strong></p>
      <p> $ 40 CAD</p>
    </div>

    <div className='cardcomponet'>
      <p><strong>TUITION FEE </strong></p>
      <p> $ 19407 CAD</p>
    </div>

    <div className='cardcomponet'>
      <p><strong>INTAKE</strong> </p>
      <p> Sep Jan</p>
    </div>

    <div className='cardcomponet'>
      <h6><strong>ETS </strong></h6>
      <p> IELTS-6.5(6)</p>
    </div>


   

    </div>
   
   </div>
  </div>
</div>
    </div>
  )
}
