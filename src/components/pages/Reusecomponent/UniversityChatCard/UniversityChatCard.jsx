import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../Header/Header";
import SideBar from "../../../SideBar/SideBar";
import Footer from "../../../Footer/Footer";
import './universityChat.css'


export default function UniversityChatCard() {


       
  const [universitychat  , setuniversitychat]=useState({
    recentchat:true,
  })
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
                    <h3 className="page-title">My Applications </h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/admindashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">My Applications</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
            
              <div className="card card-table">
                    <div className="card-body">
                      {/* Page Header */}
                 
                      {/* /Page Header */}
  
                      <input   className="form-control" placeholder="Enter the"     />
                      <div className="-search searchunivercitybox">
                      <i class="fa-solid fa-magnifying-glass"></i>
                      </div>
                
                      <div className="row col-12">

                <div  className="chatgrop">
                    <div className="chatcards">
                        <div className="apliactionid">
                                Application Id: 000001
                        </div>
                        <div className="cardunivercityname">
                            <p><i class="fa-solid fa-school fw-bold"></i> <strong>MS Mechanical Engineering</strong></p>
                            <p><i class="fa-solid fa-graduation-cap fw-bold"></i> New York Institute of technology</p>
                            <p><i class="fa-solid fa-calendar-days fw-bold"></i> <strong>Year : 2020  </strong></p>
                            <p><i class="fa-solid fa-floppy-disk fw-bold"></i> <strong>Intakes  : Spring</strong></p>
                            <p><i class="fa-solid fa-school fw-bold"></i> <strong>Status : Open</strong></p>
                        </div>
                        <div  className="boxcontainer1">
                            <Link to="/chatsupport" ><div className="boxcontai">
                            <i class="fa-regular fa-comment"></i>  Chat With Us!
                            </div></Link>
                        </div>
                    </div>
                    <div className="chatcards">
                        <div className="apliactionid">
                                Application Id: 000001
                        </div>
                        <div className="cardunivercityname">
                            <p><i class="fa-solid fa-school fw-bold"></i> <strong>MS Mechanical Engineering</strong></p>
                            <p><i class="fa-solid fa-graduation-cap fw-bold"></i> New York Institute of technology</p>
                            <p><i class="fa-solid fa-calendar-days fw-bold"></i> <strong>Year : 2020  </strong></p>
                            <p><i class="fa-solid fa-floppy-disk fw-bold"></i> <strong>Intakes  : Spring</strong></p>
                            <p><i class="fa-solid fa-school fw-bold"></i> <strong>Status : Open</strong></p>
                        </div>
                        <div  className="boxcontainer1">
                            <Link to="/chatsupport"> <div className="boxcontai">
                            <i class="fa-regular fa-comment"></i>  Chat With Us!
                            </div></Link>
                        </div>
                    </div>
                    <div className="chatcards">
                        <div className="apliactionid">
                                Application Id: 000001
                        </div>
                        <div className="cardunivercityname">
                            <p><i class="fa-solid fa-school fw-bold"></i> <strong>MS Mechanical Engineering</strong></p>
                            <p><i class="fa-solid fa-graduation-cap fw-bold"></i> New York Institute of technology</p>
                            <p><i class="fa-solid fa-calendar-days fw-bold"></i> <strong>Year : 2020  </strong></p>
                            <p><i class="fa-solid fa-floppy-disk fw-bold"></i> <strong>Intakes  : Spring</strong></p>
                            <p><i class="fa-solid fa-school fw-bold"></i> <strong>Status : Open</strong></p>
                        </div>
                        <div  className="boxcontainer1">
                            <Link to="/chatsupport"> <div className="boxcontai">
                            <i class="fa-regular fa-comment"></i>  Chat With Us!
                            </div></Link>
                        </div>
                    </div>
                    {/* <div className="chatcards">
                        <div className="apliactionid">
                                Application Id: 000001
                        </div>
                        <div className="cardunivercityname">
                            <p><i class="fa-solid fa-school fw-bold"></i> <strong>MS Mechanical Engineering</strong></p>
                            <p><i class="fa-solid fa-graduation-cap fw-bold"></i> New York Institute of technology</p>
                            <p><i class="fa-solid fa-calendar-days fw-bold"></i> <strong>Year : 2020  </strong></p>
                            <p><i class="fa-solid fa-floppy-disk fw-bold"></i> <strong>Intakes  : Spring</strong></p>
                            <p><i class="fa-solid fa-school fw-bold"></i> <strong>Status : Open</strong></p>
                        </div>
                        <div  className="boxcontainer1">
                            <div className="boxcontai">
                            <i class="fa-regular fa-comment"></i>  Chat With Us!
                            </div>
                        </div>
                    </div> */}

                    
                    {universitychat.recentchat  ? <>
                    
  
                    </>    :<>     
             
                    <div class="card chatuniversity">
  <div class="card-header   univercitycard-header">
    <div>Recent chat</div>
  
<i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <div class="card-body chatunivercit">
    <h6   >New york institute of technology</h6>
        <div  className="universitychatcard">
<div><strong>Intake</strong> : Spring</div>
<div><strong>Year</strong>  : 2023</div>
        </div>
        <hr></hr>

        <h6   >New york institute of technology</h6>
        <div  className="universitychatcard">
<div><strong>Intake</strong> : Spring</div>
<div><strong>Year</strong>  : 2023</div>
        </div>
        <hr></hr>

        <h6   >New york institute of technology</h6>
        <div  className="universitychatcard">
<div><strong>Intake</strong> : Spring</div>
<div><strong>Year</strong>  : 2023</div>
        </div>
  </div>
</div></> }
                    {/* <div className="chatcards"></div>
                    <div className="chatcards"></div> */}
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
}
