import React from 'react';
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

const UniversityApply = (props) => {





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
                <h3 className="page-title">Apply University</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admindashboard">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Ongoing Deals</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          
          {/* Display data from myObject */}
          <div className="carddesing m-1">
            <div className="card">
              <div className="card-header">Featured</div>
              <div className="card-body">

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

export default UniversityApply;
