import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../Header/Header";
import SideBar from "../../../SideBar/SideBar";
import Footer from "../../../Footer/Footer";
import '../applicationstatus.css'
import '../../../pages/Dashboard/Step.css'
import { Upload } from "feather-icons-react/build/IconComponents";
import { Steps } from "antd";
import Tab from "../Tab";
import AntTab from "../AntTab";


const ProfileTab = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [userdata, setuserdata] = useState({
    profileData: {},
    viewmore:false
  });
  const [files, setfile] = useState(null);
  const [queryfiledinput, setqueryfiledinput] = useState("");
  const [activeTab, setActiveTab] = useState('home-tab-pane');
  const [forceRerender, setForceRerender] = useState(false);
  const  [isActive , setActive]=useState(true)
  const  [isActiveGre , setActiveGre]=useState(false)
  // const  [isActiveDoc , setActiveDoc]=useState(true)
  const  [isActiveEdu , setActiveEdu]=useState(false)
  
  const  [isActiveWork , setActiveWork]=useState(false)
  const [current, setCurrent] = useState("");
  // const
  const  [isActiveDoc , setActiveDoc]=useState(false)
  const onChange = (value) => {
    console.log('onChange:', value);
    setActiveTab(value);
    setForceRerender((prev) => !prev); // Toggle the dummy state

  };




  
  useEffect(()=>{
    
  })

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

 
  // const handleButtonClick = () => {
  //   setActive(!isActive);
  // };

  const hadleviewMore =()=>{
    setuserdata({
      ...userdata,
      viewmore:!userdata.viewmore,
    })
  }
  // console.log(userdata);

  const handleWriteClick = async () => {
    handleimageupload();

    const response = writequery(userdata, queryfiledinput);
    response.then((data) => {
      console.log(data);
      if (data.request.status == 200) {
        alert(data.status);
      } else {
        alert("error");
      }
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setqueryfiledinput({
      ...queryfiledinput,
      [name]: value,
    });
  };



  useEffect(()=>{
  //  window.location.reload()
  },[])

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
              <div className="row align-items-center" style={{marginTop: '2rem',padding:'1rem'}}>
                <div className="col">
                  <h3 className="page-title">My Application </h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">My Application</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
                  <div className="student-group-form " style={{marginTop: '3rem',}}>
                    <div       
                    className="card Applcationscardgrid" >
                    <div className="row">  
                     
    <div className="card h-60">
    <div className="col divcenter">
      <img src="..." className="card-img-top" alt="..."/>
      </div>
      <div className="card-body">
        <h4 className="card-title text-center margintopcss">Liveen Madhava</h4>
        <p  className="card-text text-start fw-bold mb-1 " style={{fontFamily:'sans-serif'}}> <i class="fa-solid fa-envelope"></i> liveeenmadhava@gmail.com</p>
        <div className="sameline linespace"><p  className="card-text text-start fw-bold mb-1"><i class="fa-solid fa-phone"></i> +91 8843523412</p>

        </div>

          {/* <p  className="card-text text-start fw-bold mb-1 ml-2"><i class="fa-solid fa-phone"></i> Shiva Krishna (Study Advisor)</p> */}
       <div className="sameline linespace">
          <p className="card-text text-start fw-bold mb-1"> <i class="fa-solid fa-mars-and-venus"></i>  Female</p>
          <p className="card-text text-start fw-bold mb-1"> <i class="fa-regular fa-calendar-days"></i> 22-04-1999</p>
       </div>

      </div>
   
      <div className="boxcenter">
        <p  className="studentIdbutton">StudentID :12312</p>
       </div></div>       <div className="buttonscrollrender">
   
       {/* <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <Link
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            to="#profile_tab"
            role="tab"
          >
            Educt
          </Link>
        </div> */}

        {/* <p id="Study">Educt</p>
        <p id="Money">Educt</p>
        <p id="Job">Educt</p> */}
    <div className={`button-container ${isActive ? 'active' : ''}`}>
      <span className="buttonspan"></span>
      <div className="buttontabpan" onClick={()=>{setActive(!isActive);setActiveDoc(false);setActiveEdu(false);setActiveGre(false);setActiveTab(false);onChange("education-tab")}}>
        {/* Eduction */}
         Profile 
      </div>
    </div>
    <div className={`button-container mt-3 ${isActiveEdu ? 'active' : ''}`}>
      <span className="buttonspan"></span>
      <div className="buttontabpan" onClick={()=>{setActive(false);setActiveDoc(true);setActiveEdu(false);setActiveGre(false);setActiveTab(false);onChange("profile-tab-pane")}}>
      Eduction
      </div>
    </div>
    <div className={`button-container mt-3 ${isActiveWork ? 'active' : ''}`}>
      <span className="buttonspan"></span>
      <div className="buttontabpan" onClick={()=>{setActiveWork(!isActiveWork);onChange("experience-tab")}}>
      Work Experience
      </div>
    </div>
    <div className={`button-container mt-3 ${isActiveDoc ? 'active' : ''}`}>
      <span className="buttonspan"></span>
      <div className="buttontabpan"  onClick={()=>{setActiveDoc(!isActiveDoc);onChange("-tab-pane")}} >
      Documents
      </div>
    </div>
    <div className={`button-container mt-3 ${isActiveGre ? 'active' : ''}`}>
      <span className="buttonspan"></span>
      <div className="buttontabpan"  onClick={()=>{setActiveGre(!isActiveGre);onChange("document-tab")}} >
      Test Scores
      </div>
    </div>
       </div>
       

                     </div>
                     <AntTab key={forceRerender} activeTab1={activeTab} />
                
      <div className="tab-content">
        <div className="tab-pane" id="profile_tab" role="tabpanel">
          {/* Content for the "Educt" tab goes here */}
          {/* This is where you can place your white box */}
          <div className="white-box">
            {/* Your content */}
            <h6></h6>
          </div>
        </div>
        {/* Add more tab panes as needed */}
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

export default ProfileTab;
