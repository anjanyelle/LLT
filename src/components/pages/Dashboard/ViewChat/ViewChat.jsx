import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MeetingMessage } from 'react-chat-elements'
import Header from "../../../Header/Header";
import '../Step.css'
import SideBar from "../../../SideBar/SideBar";

import Footer from "../../../Footer/Footer";
import { allqueries, cancelled, resolved, pending } from "../../../imagepath";
import MyChatComponent from "./MyChatComponent";
import ChatComponent from "../../../ChatComponent";

const ViewChat = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };





  return (
    <>
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
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">view chat</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="student-group-form">
              <div className="row">
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table">
                  <div className="card-body">
                    {/* Page Header */}
                    <div className="page-header">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="page-title">My Applications</h3>
                        </div>
                      </div>
                    </div>
             
<div  className="card11">
<div className="card chatcard" style={{width: '23vw',height:'100%'}}>
{/* <div className="cardmain"> */}
<div
      className={`cardmain ${isClicked ? 'clicked' : ''}`}
      onClick={handleCardClick}
    >
<div className="cardp">
    <p className="application">Appliction Id: 139964/23-24</p>
    <h6 className="blue"> <i class="fa-solid fa-book"></i> M.S. in Mechanical Engineering</h6>
    <p> <i class="fa-sharp fa-solid fa-building-columns"></i> New York Institute of Technology</p>
    <div className="intake" style={{marginTop: '3px',}}>
    <p><strang>Year:</strang> 2024</p>  <p><strang>Intake:</strang> Spring</p>
    </div>
  <p>Status:<strong style={{color:'red',}}> Case Closed</strong></p>
</div>
</div>
<div className="cardmain"> 
   <hr></hr>
<div className="cardp">
    <p className="application">Appliction Id: 139964/23-24</p>
    <h6 className="blue"> <i class="fa-solid fa-book"></i> M.S. in Mechanical Engineering</h6>
    <p> <i class="fa-sharp fa-solid fa-building-columns"></i> New York Institute of Technology</p>
    <div className="intake" style={{marginTop: '3px',}}>
    <p><strang>Year:</strang> 2024</p>  <p><strang>Intake:</strang> Spring</p>
    </div>
  <p>Status:<strong style={{color:'red',}}> Case Closed</strong></p>
</div> 
</div>
<div className="cardmain"><hr></hr>
<div className="cardp">
    <p className="application">Appliction Id: 139964/23-24</p>
    <h6 className="blue"> <i class="fa-solid fa-book"></i> M.S. in Mechanical Engineering</h6>
    <p> <i class="fa-sharp fa-solid fa-building-columns"></i> New York Institute of Technology</p>
    <div className="intake" style={{marginTop: '3px',}}>
    <p><strang>Year:</strang> 2024</p>  <p><strang>Intake:</strang> Spring</p>
    </div>
  <p>Status:<strong style={{color:'red',}}> Case Closed</strong></p>
</div>
 </div>
</div>  
<div className="chatcar">

  <div  className="card-body">      <h6 className="blue"> <i class="fa-solid fa-book"></i> M.S. in Mechanical Engineering</h6>
    <p style={{marginBottom: '1px',}}> <i class="fa-sharp fa-solid fa-building-columns"></i> New York Institute of Technology</p> <ChatComponent />  </div>
  </div> 
</div>  

 {/* <MyChatComponent /> */}    
 {/* <ChatComponent  /> */}   


                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default ViewChat;
