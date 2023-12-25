import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import profile  from '../../../assets/img/pngtree-vector-business-man-icon-png-image_966609-removebg-preview (1).png'
import Footer from "../../Footer/Footer";
import './applicationstatus.css'
import '../Dashboard/Step.css'
import { Upload } from "feather-icons-react/build/IconComponents";
import { Steps } from "antd";
import Tab from "./Tab";
import TabList from "./Tab/TabList";

const ApplicationStatus = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [userdata, setuserdata] = useState({
    profileData: {},
    viewmore:false
  });
  const [files, setfile] = useState(null);
  const [queryfiledinput, setqueryfiledinput] = useState("");
  const  [Application , setApplication]=useState({
    ApplicationAll:true,
    pendding:false,
    shortlist:false,
    mywhishlist:false,
    apply:false
  })
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  // useEffect(() => {
  //   getUserDetails().then((data) => {
  //     setuserdata({
  //       ...userdata,
  //       profileData: data,
  //     });
  //   });

  //   // alert(userdata)
  // }, []);

  const hadleviewMore =()=>{
    setuserdata({
      ...userdata,
      viewmore:!userdata.viewmore,
    })
  }
  console.log(userdata);

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

       </div>
       

                     </div>
                     <div className="row gridtemplateapplicatio">
                     {/* <div></div> */}
                 
                 <div className="sameline  btngroup btngroupsameline" >
                  <button className="btn btn-primary applicationbtn-primary text-center">Application</button>
                  <Link to="/programfinder" className="btn btn-primary applicationbtn-primary">Search Program</Link>
                  <button className="btn btn-primary applicationbtn-primary" onClick={()=>setApplication({
                    ...Application,
                    ApplicationAll:false,
                    pendding:true

                  })}>Pending Application</button>
                  <button className="btn btn-primary applicationbtn-primary" onClick={()=>setApplication({
                    ...Application,
                    ApplicationAll:false,
                    pendding:false,
                    mywhishlist:true,

                  })}>My Wish List</button>
                 </div>
                 <div className="card applicationcard"  >
               {Application.ApplicationAll && <><div  className="card-body">  
               <h6>Adler University, Canada</h6>
               {/* <h4>Adler University, Canada</h4> */}
               <h6>Intake : june 2020</h6>
               <div className="apllcationflex">
               <p className="applicationcard1 applicationid">Application Id:1231234</p> <div   className="sameline "><p className="shortlistedcard mx-1"><i class="fa-solid fa-heart"></i></p> <p className="applicationid mx-1">shortlisted </p></div> </div>   <hr></hr>
               {/* <h4>Adler University, Canada</h4> */}
               <h6>Stanford University, USA</h6>
               <h6>Intake : june 2020</h6>
               <div className="apllcationflex">
               <p className="applicationcard1 applicationid">Application Id:1231234</p> <div   className="sameline "><p className="shortlistedcard mx-1"><i class="fa-solid fa-heart"></i></p> <p className="applicationid appliycard mx-1"> Applied </p></div> </div>   <hr></hr>
               <h6>Princeton University , USA</h6>
               <h6>Intake : june 2020</h6>
               <div className="apllcationflex">
               <p className="applicationcard1 applicationid">Application Id:1231234</p> <div   className="sameline "><p className="shortlistedcard mx-1"><i class="fa-solid fa-heart"></i></p> <p className="applicationid appliycard mx-1"> Applied </p></div> </div>   <hr></hr>
               </div></>}
          
               {Application.pendding && <><div  className="card-body">  
               <h6>Adler University, Canada</h6>
               {/* <h4>Adler University, Canada</h4> */}
               <h6>Intake : june 2020</h6>
               <div className="apllcationflex">
               <p className="applicationcard1 applicationid">Application Id:1231234</p> <div   className="sameline "><p className="shortlistedcard mx-1"><i class="fa-solid fa-heart"></i></p> <p className="applicationid mx-1 pending">Pending </p></div> </div>   <hr></hr>
               {/* <h4>Adler University, Canada</h4> */}
               <h6>Stanford University, USA</h6>
               <h6>Intake : june 2020</h6>
               <div className="apllcationflex">
               <p className="applicationcard1 applicationid">Application Id:1231234</p> <div   className="sameline "><p className="shortlistedcard mx-1"><i class="fa-solid fa-heart"></i></p> <p className="applicationid appliycard mx-1  pending"> Pending </p></div> </div>   <hr></hr>
               <h6>Princeton University , USA</h6>
               <h6>Intake : june 2020</h6>
               <div className="apllcationflex">
               <p className="applicationcard1 applicationid">Application Id:1231234</p> <div   className="sameline "><p className="shortlistedcard mx-1"><i class="fa-solid fa-heart"></i></p> <p className="applicationid appliycard mx-1 pending"> Pending </p></div> </div>   <hr></hr>
               </div></>}
               {Application.mywhishlist && <><div  className="card-body">  
               <h6>Adler University, Canada</h6>
               {/* <h4>Adler University, Canada</h4> */}
               <h6>Intake : june 2020</h6>
               <div className="apllcationflex">
               <p className="applicationcard1 applicationid">Application Id:1231234</p> <div   className="sameline "><p className="shortlistedcard mx-1"><i class="fa-solid fa-heart"></i></p> <p className="applicationid mx-1 success" onClick={()=>setApplication({
                ...Application,
                apply:true,
               })}> {Application.apply ? <>Applied </>  : <>Apply</>} </p></div> </div>   <hr></hr>
               {/* <h4>Adler University, Canada</h4> */}
               <h6>Stanford University, USA</h6>
               <h6>Intake : june 2020</h6>
               <div className="apllcationflex">
               <p className="applicationcard1 applicationid">Application Id:1231234</p> <div   className="sameline "><p className="shortlistedcard mx-1"><i class="fa-solid fa-heart"></i></p> <p className="applicationid  mx-1  success" onClick={()=>setApplication({
                ...Application,
                apply:true,
               })}>   {Application.apply ? <>Applied </>  : <>Apply</>}  </p></div> </div>   <hr></hr>
               <h6>Princeton University , USA</h6>
               <h6>Intake : june 2020</h6>
               <div className="apllcationflex">
               <p className="applicationcard1 applicationid">Application Id:1231234</p> <div   className="sameline "><p className="shortlistedcard mx-1"><i class="fa-solid fa-heart"></i></p> <p className="applicationid   mx-1 success" 
               onClick={()=>setApplication({
                ...Application,
                apply:true,
               })}>  {Application.apply ? <>Applied </>  : <>Apply</>} </p></div> </div>   <hr></hr>
               </div></>}
                 </div>
                     </div>
</div>
<div className="card cardstrap" >
  <div className="card-body"  >
  <Steps    
  
  current={current}
  onChange={onChange}
  items={[
    {
      title: 'university ',
      description:'Apply ',
    },
    {
      title: 'Review  ',
      description:'Course ',
    },
    {
      title: 'LOA',
      description:'OL ',
    },
    {
      title: 'Tuition',
      description:'Free paid',
    },
    {
      title: 'Visa',
      description:'approved',
    },
    {
      title: 'i20 received',
      description:'Final Admission Decision',
    },
    
  ]}
/>
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

export default ApplicationStatus;
