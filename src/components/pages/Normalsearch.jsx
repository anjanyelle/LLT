import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import './normalsearch.css'
import Footer from "../Footer/Footer";
import png1 from '../../assets/img/profiles/png 1.png'
import png11  from  '../../assets/img/profiles/png 2.png'
import Selectdrop from "./Reusecomponent/Selectdrop";
import ProgramSearch from "./Reusecomponent/ProgramSearch";
import Selectcourse from "./Reusecomponent/Selectcourse";
import { handelsearch, handprofileapi } from "../HttpRequest/afterlogin";
import University1 from "./Reusecomponent/University1";
import Country from "./Reusecomponent/Country";
import IntakeEducation from "./Reusecomponent/IntakeEducation";
import Basedonprofile from "./Reusecomponent/Basedonprofile";




const Normalsearch = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [userdata, setuserdata] = useState({
    profileData: {},
    sarchprofiledata:[]
  });
  const [apidata , setapidata]=useState([])
  const [files, setfile] = useState(null);
  const [queryfiledinput, setqueryfiledinput] = useState("");

  const [idnumber,setidnumber]=useState(true)
  const [program, setprogram]=useState(false)
  const  [searchbar, setsearchbar]=useState(false)
  const  [searchbar0, setsearchbar0]=useState(false);const[handleprofile,sethandleprofile]=useState(false)
  const [cardselectbar, setcardselectbar]=useState(false);const [profiledatavisble , setprofiledatavisible]=useState(false)
  const  [normalsearch, setnormalsearch]=useState(true);
  const [quicksearch, setquicksearch]=useState(false)
  


  console.log(userdata);


  const handlechange = (event) => {
    console.log('Event:', event);
    if (event && event.target) {
      const { value, name } = event.target;
      console.log('Value:', value);
      console.log('Name:', name);
      setcourseName((prevCourseName) => ({
        ...prevCourseName,
        [name]: value,
      }));
    }
  };
  const handleWriteClick = async () => {



  };

useEffect(()=>{
  const fetchData = async () => {
    if (handleprofile) {
      try {
        const response = await handprofileapi();
        console.log(response.data.data);
        setuserdata({
          ...userdata,
          sarchprofiledata:response.data.data
        })
        setprofiledatavisible(true)
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    } else {
      console.log("profileapierror");
    }
  };

  fetchData();
},[handleprofile])
  const handleuniver=async()=>{
    const name="engineering";
    const concentration= localStorage.getItem("concentration");
    const country= localStorage.getItem("country");
    const intake = localStorage.getItem("intake");
    const university = localStorage.getItem("university");
    
     const response = await handelsearch(concentration , name, country , intake , university);
      console.log(response.data.data)
      setapidata(response.data.data)
  
  
   }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setqueryfiledinput({
      ...queryfiledinput,
      [name]: value,
    });
  };


  const imageSubmit = (event) => {
    const file = event.target.files[0];
    setfile(file);
  };

  const handleimageupload = async () => {
    const response = fileuploads(files);

    console.log("file", files);
    response.then((data) => {
      console.log(data);
      if (data.request.status == 200) {
        alert("success");
      } else {
        alert("error");
      }
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
        <div className="page-wrapper ">

          <div>
            <div className="imagespropety"><div className="pagecolum">
            <div className="card cardselectsearch_button cardselectbar">
                  <Link
                    to="/Normalsearch"
                    className={`cardselectsearch_buttonbg ${
                      idnumber ? "idnumber" : null
                    }`}
                    onClick={() => {
                      setidnumber(true);
                      setsearchbar(false);
                      setsearchbar0(false);
                    }}
                  >
                    {" "}
                    <h6>Normal search</h6>
                  </Link>
                  <Link
                    to="/addvancesearch1"
                    className={`cardselectsearch_buttonbg ${
                      searchbar ? "searchbar" : null
                    }`}
                    onClick={() => {
                      setidnumber(false);
                      setsearchbar(true);
                      setsearchbar0(false);
                      setquicksearch(true);
                      setnormalsearch(false);
                    }}
                  >
                    <h6>Addvance Search </h6>
                  </Link>{" "}
                  <Link to="/quicksearch">
                    {" "}
                    <div
                      className={`cardselectsearch_buttonbg ${
                        searchbar0 ? "searchbar0" : null
                      }`}
                      onClick={() => {
                        setidnumber(false);
                        setsearchbar(true);
                        setsearchbar0(false);
                      }}
                    >
                      <h6>Quick Search </h6>
                    </div>
                  </Link>
                </div>

      {normalsearch && <>  <div className="card cardnormatserach">
                <div className="card-body card-narmal">
                <University1 placeholder="Select University" className="cssfor" inputfiled="university"/>
                  <Selectcourse placeholder="Select Course" className="cssfor" />
                  <Country placeholder="Select Country"  className="cssfor"  inputfiled="country"/>
                  <IntakeEducation placeholder="Select Intake"  className="cssfor"  inputfiled="course"/>
                  <div className="cardsearch" onClick={async () => {setprogram(true);setcardselectbar(true); handleuniver();}}><i className="fa-solid fa-magnifying-glass"></i></div>
                </div>
              </div>
              <div className="serachcheck">
                <input  type="checkbox" onChange={()=>sethandleprofile(true)}/>
                <label  style={{color:'white'}}> Search based on profile</label> 
                </div>   {program && <> <div class="card cardprogram">
                 <div class="card-body cardprogrampadding">
                  <ProgramSearch data={apidata}/>

                 {/* <div class="card cardtemplate">
                 <div class="card " style={{backgroundColor: 'gray',height:'100%', width:'100%'}}>
                   This is some text within a card body.
                 </div>
                 <div class=" cardtemplatetext"   style={{backgroundColor: '#D9E0FC',}}>
                  <div>
             
                   <div className="sameline " style={{justifyContent:'space-between'}}>
                   <h6 className="coursename">MS in Computer Science.</h6>
                 <div className="sameline normalsameline">
                  <h6><i class="fa-regular fa-heart"></i></h6>
                  <h6><i class="fa-solid fa-upload"></i></h6>
                  <h6 className="programapplybtn">Apply</h6>
                 </div>
                   </div>
                   <div className="sameline sameline1">
                    <p><i class="fa-solid fa-building-columns"></i> Northern Illinois University</p>
                    <p><i class="fa-solid fa-comments-dollar"></i> Yearly tuition fee :10$  <i class="fa-solid fa-download"></i></p>
                   </div>
                   <div className="sameline sameline1">
                    <p><i class="fa-solid fa-calendar-days"></i> Duration : 48months</p>
                    <p><i class="fa-solid fa-money-bills"></i>  United States of America</p>
                   </div>
                   <div className="sameline samelinee"  style={{gap:'5px'}}>
                    <p><i class="fa-solid fa-building-columns"></i> Intakes </p>
                    <span> <strong>  June 2022(open) | June 2022(open) | June 2022(open) </strong></span>

                   </div>
                   </div>

                   <div className="cardbox">
                    <div className="card normalcardbox">
                      <div className="diffline">
                      <p><strong>IELTS </strong></p>
                          <hr></hr>
                         <p><strong> 3.0 </strong></p>
                         </div>
                    </div>
                    <div className="card normalcardbox">
                      <div className="diffline">
                      <p><strong>IELTS </strong></p>
                          <hr></hr>
                         <p><strong> 3.0 </strong></p>
                         </div>
                    </div>

                    <div className="card normalcardbox">
                      <div className="diffline">
                      <p><strong>TOEFL </strong></p>
                          <hr></hr>
                         <p><strong> 2.0 </strong></p>
                         </div>
                    </div>
                    <div className="card normalcardbox">
                      <div className="diffline">
                      <p><strong>CELPIP </strong></p>
                          <hr></hr>
                         <p><strong> 2.0 </strong></p>
                         </div>
                    </div>

                   </div>
                 </div>
               </div> */}

                 </div>
               </div></> }</>}    {profiledatavisble  && <>  <Basedonprofile  data={userdata.sarchprofiledata} /></>}
  
  
               {quicksearch  && <>  <div className="card cardnormatserach">
                <div className="card-body card-narmal ">

<div className="col">
                  <Selectdrop placeholder="Select Course"/>
                  <Selectdrop placeholder="Select University"/>
                  </div>

                  <div className="col">
                  <Selectdrop placeholder="Select Country"/>
                  <Selectdrop placeholder="Select Course"/>

</div>        

  <div className="col">
                  <Selectdrop placeholder="Select University"/>
                  <Selectdrop placeholder="Select Country"/>
                  
                  
                  </div>
                  <div className="cardsearch"  onClick={()=>{setprogram(true);setcardselectbar(true)}}><i class="fa-solid fa-magnifying-glass"></i></div>     
                </div>
              </div>   {program && <> <div class="card cardprogram">
                 <div class="card-body cardprogrampadding">
                  <ProgramSearch />
                 </div>
               </div></> }</>}
            
               <img src={png11}    alt="images"     className="imagesearch" />
               
              </div>
            </div></div>

        </div >

        {/* Footer */}
        < Footer />
      </div >
      {/* /Main Wrapper */}
    </>
  );
};

export default Normalsearch;
