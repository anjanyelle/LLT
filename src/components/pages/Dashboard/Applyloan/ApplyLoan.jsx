import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../Header/Header";
import SideBar from "../../../SideBar/SideBar";
import Footer from "../../../Footer/Footer";
import cardimage  from  '../../../../assets/img/pngg.png';import  logopart from '../../../../assets/img/icon.png';import  mappart from '../../../../assets/img/map png.png'  
import '../../../../components/pages/Reusecomponent/UniversityChatCard/universityChat.css'
import { Card } from "antd";import  edudoc from '../../../../assets/img/edu.png'


export default function ApplyLoan() {


       
  const [universitychat  , setuniversitychat]=useState({
    recentchat:true,

  })

  const[applyloan1 , setapplyloan1] =useState(false);
  const[applyloan  , setapplyloan]   =useState(true);
  const[applyloan2 , setapplyloan2]=useState(false);
  const[upload2 , setupload2]=useState(false);
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
                    <h3 className="page-title mt-2">Apply Loan </h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/admindashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Apply Loan</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
            
              <div className="card card-table cardimages formdata">

             
              <img src={logopart}   alt="imagesside"   className="imagessidelogo1"   />
                    {/* <div className="card-body"> */}
                      {/* Page Header */}
                 
                      {/* /Page Header */}
  
                
                      {/* <div className="row col-12"> */}
                         {/* <img  src={cardimage}   alt="imagescard"    className="imagescard"/> */}

                      {/* </div> */}
                    {/* </div> */}
{applyloan  && <>    
<div  className="card form-card ">

<div>
<img src={edudoc}  alt="formimage"  className="form_image" />
</div>
{/* <p>pjhfjpfgpj</p> */}
<div  className="form-inputdata">

<div className="form-group  form-groupapply col-12 col-sm-4 local-forms">
      <label>
        Name
        <span className="login-danger">*</span>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Facebook Url"
      />
    </div>
    <div className="form-group  form-groupapply col-12 col-sm-4 local-forms">
      <label>
        Name
        <span className="login-danger">*</span>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Facebook Url"
      />
    </div>
    <div className="form-group form-groupapply  col-12 col-sm-4 local-forms">
      <label>
        Name
        <span className="login-danger">*</span>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Facebook Url"
      />
    </div>
    <div className="form-group form-groupapply  col-12 col-sm-4 local-forms">
      <label>
        Name
        <span className="login-danger">*</span>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Facebook Url"
      />
    </div>
    

    <button  className="btn btn-primary applybutton"  onClick={()=>{setapplyloan1(true);setapplyloan(false)}}>next</button>
</div>    
</div></>}


{applyloan1    &&  <>

  <div  className="card form-card ">

<div  className="formdivapply">
<h4>Educational Documents</h4> 

<div   className="carduploa">
<Card
    style={{
      width: 260,
    }}
  >
     <h6  className="patag">Upload the  10th Certificate</h6>
    <input   type="text"   className="uploadoc"   placeholder="Select File"/>


  </Card>

  <Card
    style={{
      width: 260,
    }}
  >
    <h6  className="patag">Upload the  12th Certificate</h6>
    <input   type="text"   className="uploadoc"   placeholder="Select File"/>

  </Card>
  <Card
    style={{
      width: 260,
    }}
  >
     <h6  className="patag">Upload Studnt Bachelors UG Marks Sheet</h6>
    <input   type="text"   className="uploadoc"   placeholder="Select File"/>


  </Card>
  <Card
    style={{
      width: 260,
    }}
  >
     <h6  className="patag">Upload Aadhar Card</h6>
    <input   type="text"   className="uploadoc"   placeholder="Select File"/>


  </Card>
  </div>
  <div className="button-group12">
<button  className="btn btn-primary applybutton"onClick={()=>{setapplyloan1(false);setapplyloan(true)}}>Prev</button> 
<button  className="btn btn-primary applybutton" onClick={()=>{setapplyloan1(false);setapplyloan(false);setupload2(true)}}>submit</button> 
</div>
</div>
  

</div>
</>}

{upload2   &&          <>

  <div  className="card form-card ">

<div  className="formdivapply">
<h4>Educational Documents</h4> 

<div   className="carduploa">
<Card
    style={{
      width: 260,
    }}
  >
     <h6  className="patag">Upload Student Passport Size Photo</h6>
    <input   type="text"   className="uploadoc"   placeholder="Select File"/>


  </Card>

  <Card
    style={{
      width: 260,
    }}
  >
    <h6  className="patag">Upload Passport</h6>
    <input   type="text"   className="uploadoc"   placeholder="Select File"/>

  </Card>
  <Card
    style={{
      width: 260,
    }}
  >
  <h6  className="patag">Upload Student Pancard</h6>
    <input   type="text"   className="uploadoc"   placeholder="Select File"/>


  </Card>
  <Card
    style={{
      width: 260,
    }}
  >
     <h6  className="patag">Other</h6>
    <input   type="text"   className="uploadoc"   placeholder="Select File"/>


  </Card>
  </div>
  <div className="button-group12">
<button  className="btn btn-primary applybutton"onClick={()=>{setapplyloan1(false);setapplyloan(true)}}>Prev</button> 
<button  className="btn btn-primary applybutton" onClick={()=>{setapplyloan1(false);setapplyloan(false);setapplyloan2(true)}}>submit</button> 
</div>
</div>
  

</div>
</>}


{applyloan2    && <>

  <div  className="card form-card ">

{/* <p>pjhfjpfgpj</p> */}

<div>
<img src={edudoc}  alt="formimage"  className="form_image" />
</div>
<div  className="form-inputdata">

<div className="form-group  form-groupapply col-12 col-sm-4 local-forms">
      <label>
        Name
        <span className="login-danger">*</span>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Facebook Url"
      />
    </div>
    <div className="form-group  form-groupapply col-12 col-sm-4 local-forms">
      <label>
        name1
        <span className="login-danger">*</span>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Facebook Url"
      />
    </div>
    <div className="form-group form-groupapply  col-12 col-sm-4 local-forms">
      <label>
        Name
        <span className="login-danger">*</span>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Facebook Url"
      />
    </div>
    <div className="form-group form-groupapply  col-12 col-sm-4 local-forms">
      <label>
        Name
        <span className="login-danger">*</span>
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Facebook Url"
      />
    </div>
    

   
</div>   
<div className="button-group12">
<button  className="btn btn-primary applybutton"onClick={()=>{setapplyloan1(true);setapplyloan(false);setapplyloan2(false)}}>Prev</button> 
<button  className="btn btn-primary applybutton" onClick={()=>{setapplyloan1(false);setapplyloan(false);setapplyloan2(true)}}>submit</button> 
</div>
</div>

</>}
                    
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
