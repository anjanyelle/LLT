import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../../../SideBar/SideBar";
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import Slide from "./Slide";


const SopTab = () => {

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
                  <h3 className="page-title">Write To Us </h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">ongoing Deals</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="carddesing m-1">
            <div class="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    
{/* 
    <a href="#" className="btn btn-primary">Go somewhere</a> */}

    <Slide />
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

export default SopTab;
