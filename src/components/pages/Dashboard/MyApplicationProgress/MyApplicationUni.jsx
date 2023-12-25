import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../Header/Header";
import SideBar from "../../../SideBar/SideBar";
import images  from '../../../../assets/img/pngtree-vector-business-man-icon-png-image_966609-removebg-preview (1).png'
import Footer from "../../../Footer/Footer";
import { allqueries, cancelled, resolved, pending } from "../../../imagepath";
import { HandleClick } from "../../Base UI Elements/SweetAlert";
import '../../Dashboard/Step.css'
import { Upload } from "feather-icons-react/build/IconComponents";
import { Steps } from "antd";

const MyApplicationUni = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [userdata, setuserdata] = useState({
    profileData: {},
    viewmore:false
  });
  const [files, setfile] = useState(null);
  const [queryfiledinput, setqueryfiledinput] = useState("");
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
            {/* <div className="student-group-form">
              <div className="row">
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card inovices-card">
                    <div className="card-body">
                      <div className="inovices-widget-header">
                        <span className="inovices-widget-icon">
                          <img src={allqueries} alt="" className="queyImage" />
                        </span>
                        <div className="inovices-dash-count">
                          <div className="inovices-amount">10</div>
                        </div>
                      </div>
                      <p className="inovices-all">
                        All Queries <span></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card inovices-card">
                    <div className="card-body">
                      <div className="inovices-widget-header">
                        <span className="inovices-widget-icon">
                          <img src={resolved} alt="" className="queyImage" />
                        </span>
                        <div className="inovices-dash-count">
                          <div className="inovices-amount">5</div>
                        </div>
                      </div>
                      <p className="inovices-all">
                        Resolved Queries <span></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card inovices-card">
                    <div className="card-body">
                      <div className="inovices-widget-header">
                        <span className="inovices-widget-icon">
                          <img src={cancelled} alt="" className="queyImage" />
                        </span>
                        <div className="inovices-dash-count">
                          <div className="inovices-amount">3</div>
                        </div>
                      </div>
                      <p className="inovices-all">
                        Cancelled Queries <span></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card inovices-card">
                    <div className="card-body">
                      <div className="inovices-widget-header">
                        <span className="inovices-widget-icon">
                          <img src={pending} alt="" className="queyImage" />
                        </span>
                        <div className="inovices-dash-count">
                          <div className="inovices-amount pull-left">2</div>
                        </div>
                      </div>
                      <p className="inovices-all">
                        Pending Queries <span></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table">
                  <div className="card-body card-body1">
                    {/* Page Header */}
                    <div className="page-header">
                      <div className="row align-items-center">
                      </div>
                    </div>
                    {/* /Page Header */}

                    <div className="row col-12">
                    <div className="displaysame">
                                      <div className="card" style={{width: '11rem'}}>
                <img src={images} className="card-img-top" alt="..."/>

              </div>
              <div >
              <div className="lineclass">
              <h5>Sai Kumar Gutti</h5>
              <button type="button" class="btn btn-success fontSize" style={{marginLeft: '3px',}}>Student ID: 12131</button>
               <button type="button" class="btn btn-primary fontSize">Application ID: 56520</button>
              <span></span>
              <button type="button" class="btn btn-secondary fontSize"><i class="bi bi-file-earmark"></i></button>
              </div>
              <div className="lineclass" style={{fontSize:'15px',gap:'8px',}}>
              <p style={{fontWeight: '300'}}><i class="bi bi-envelope" ></i> 6453462221</p>
              </div>
             
             
              <div className="lineclass" style={{fontSize:'15px', }}>
              <p style={{fontWeight: '300'}}><i class="bi bi-envelope" ></i> siakuamr12@gmail.com</p>
      
              </div>
              <div className="lineclass" style={{fontSize:'15px',gap:'8px',}}>
              <p style={{fontWeight: '300'}}><i class="bi bi-calendar-month" ></i> 02-09-2002</p>
              </div>
              <h6>Shiva Krishna (Study Advisor)</h6>
              </div>
              </div>
              <hr></hr>

              <div>
                <div className="buttongroup">
                <button className="btn btn-primary">Search  Program</button>
                <button className="btn btn-primary">My Wish List</button>
                <button className="btn btn-primary">Pending Application</button>
              <button className="btn btn-primary">My Applications</button>
         
                </div>
              <div className="page-header" style={{padding:'10px'}} >
                <div className="row align-items-center">
              {/* <div className="row col-12"> */}
  
                <h5>Adler University, Canada</h5>
                <h6>Intake: Dec 2022</h6>
                {/* <button className="btn btn-primary">Cancel Withdrawn  </button> */}

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
<h6 onClick={hadleviewMore} style={{color:'green'}}>View...</h6>
{userdata.viewmore  && <div>
  <h6>PREFFERED COURSE , TUITION FEE</h6>
<p>Master of Public Policy & Administration</p>
<p>Tuition Fee:1299</p> 
</div>}
 {userdata.viewmore && <div className="carddiv1">
  <div className="card manager">
    
    <div  className="managerdivavthar">
      <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.webp"  className="profileimagemanger" alt="profileimage" />
      <div className="profilebutton">Available</div>
    </div>
    <div className="contentitem">
    <h6>LLT consultancy</h6>
    <p>India</p>
    <p>8070075000</p>
    </div>
  </div>


  <div className="card manager">
    
    <div  className="managerdivavthar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUsFya9DL9bOADTtUIkMD01q4KlA1-8ESNIF05HPRug&s"  className="profileimagemanger" alt="profileimage" />
      <div className="profilebutton" style={{backgroundColor: '#45a745',}}>Available</div>
    </div>
    <div className="contentitem">
    <h6>Jyoti Verma LLT</h6>
    <p> Manager</p>
    <p>6685665000</p>
    </div>
  </div>


  <div className="card manager">
    
    <div  className="managerdivavthar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9Hn1ee6MdFbwlNI8NeybBM1dJDHMy5l1xyY-kKCxK3ThwZ-63S2h0OLwr3Uys8bP8pc&usqp=CAU"  className="profileimagemanger" alt="profileimage" />
      <div className="profilebutton" style={{  backgroundColor:'#ffc107'}}>Available</div>
    </div>
    <div className="contentitem">
    <h6>Priya Madaan LLT</h6>
    <p> Manager</p>
    <p>9685665000</p>
    </div>
  </div>
</div>}



</div>
                  </div></div>
                    </div>
                    {/* <p>Email: {userdata.profileData.data.email}</p>     <p>mobileNumber: {userdata.profileData.data.mobileNumber}</p> */}

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

export default MyApplicationUni;
