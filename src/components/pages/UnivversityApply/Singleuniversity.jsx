import React from 'react';
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

const Singleuniversity = () => {





  return (
    <div className="main-wrapper">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <SideBar />

      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title"> University</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admindashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">University</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          
          {/* Display data from myObject */}
          <div className="carddesing m-1">
            <div className="card singleuniversitygrid">
              {/* <div className="card-header">Featured</div>
              <div className="card-body">

              </div> */}
            

<div className='universitycard-conatiner'>
  <img src='https://upload.wikimedia.org/wikipedia/commons/c/cd/University-of-Alabama-EngineeringResearchCenter-01.jpg' alt='universit-image'  className='university-image'/>   

  <div className='textdes mt-2'>
    <h6> <i class="fa-solid fa-building-columns"></i> University of  Urbana-Champaign</h6>

  </div>
  <div className='textdes'>
    <p><i class="fa-solid fa-location-dot"></i>  Birmingham , Alabama </p>
  </div>
  <div className='textdes'>
    <p><i class="fa-solid fa-globe"></i>  Canada </p>
  </div>
  <div className='textdes'>
    <p><i class="fa-solid fa-money-bills"></i>  Year tuition Fee : 1500$ </p>
  </div>
  <div className='textdes'>
    <p><i class="fa-solid fa-comments-dollar"></i>  Application Fee : 100$ </p>
  </div>
  <button     className='btn btn-primary applystyle'>Apply Now</button>
</div>
<div className='university-space-container'></div>
<div className='university-deatail-conatiner'>
  
  <div  className='circlebox'>
<div className='circlecontaner'>X</div>
  </div>
  <div className='textdes mt-2'>
    <h6 style={{color:'#2C63E1' ,fontSize:'18px'}}> University of  Urbana-Champaign Computer science</h6>

  </div>
  <div className='textdes'>
  <i class="fa-solid fa-graduation-cap"></i> <p > Study Level : Post Graduate </p>

  </div>
  <div className='textdes'>
  <i class="fa-solid fa-graduation-cap"></i> <p > Duration : 24 Month </p>

  </div>
  <div className='textdes'>
  <i class="fa-solid fa-graduation-cap"></i> <p > Application Time : <strong>Fall (Agu) 22 , Spring (Jun) 20.</strong> </p>

  </div>
  <div className='textdes'>
  <i class="fa-solid fa-graduation-cap"></i> <p >  </p>

  </div>
  <div  className='mt-2'>
  <h6 style={{color:'#2C63E1'}}> Entry Requirements</h6>
  </div>
  <div  className='mt-2'>
    <div  className='card cardbo'>
      <div className='box'>
        GRE
       <p className='hrtag'></p> 
        2.0
      </div>
      <div className='box'>
        GPA
       <p className='hrtag'></p>
        2.0
      </div>
      <div className='box'>
        IELTS
       <p className='hrtag'></p>
        2.0
      </div>
      <div className='box'>
        TOEFL
       <p className='hrtag'></p>
        2.0
      </div>

      <div className='box'>
          DET
       <p className='hrtag'></p>
        2.0
      </div>

      <div className='box'>
          PTE
       <p className='hrtag'></p>
        2.0
      </div>
    </div>     
    <div className='textdes'>
  <i class="fa-solid fa-graduation-cap"></i> <p > <strong>Intakes </strong> :  <strong>Sep 2020 | </strong>  <strong>Sep 2020 </strong> | <strong> Jun 2020 Open </strong> </p>

  </div>

  </div>
  <dv></dv>
</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Singleuniversity;
