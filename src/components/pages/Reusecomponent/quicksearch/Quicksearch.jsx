import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../Header/Header";
import SideBar from "../../../SideBar/SideBar";
import '../../Reusecomponent/Addvancesearch/addvancesearch.css'
import Footer from "../../../Footer/Footer";
// import png1 from '../../../assets/img/profiles/png 1.png' ;
import png11  from  '../../../../assets/img/profiles/png 2.png'
import Selectdrop from "../Selectdrop";
import ProgramSearch from "../../Reusecomponent/ProgramSearch";

const Quicksearch = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [userdata, setuserdata] = useState({
    profileData: {},
  });
  const [files, setfile] = useState(null);
  const [queryfiledinput, setqueryfiledinput] = useState("");

  const [idnumber,setidnumber]=useState(false)
  const [program, setprogram]=useState(true)
  const  [searchbar, setsearchbar]=useState(false)
  const  [searchbar0, setsearchbar0]=useState(true)
  const [cardselectbar, setcardselectbar]=useState(false)
  const  [normalsearch, setnormalsearch]=useState(true);
  const [quicksearch, setquicksearch]=useState(true)


  console.log(userdata);

  const handleWriteClick = async () => {



  };
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
                  <Link to="/quicksearch" 
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
                    {/* </div> */}
                  </Link>
                </div>




               {quicksearch  && <>  <div className="card cardnormatserach">
                <div className="card-body card-narmal ">

<div className="col1">
                  <Selectdrop placeholder="Select Course" className="cssfor"/>
                  <Selectdrop placeholder="Select University"  className="cssfor"/>
                  </div>

                  <div className="col1">
                  <Selectdrop placeholder="Select Country" className="cssfor" />
                  <Selectdrop placeholder="Select Course" className="cssfor"/>

</div>        

  <div className="col1">
                  <Selectdrop placeholder="Select University" className="cssfor"/>
                  <Selectdrop placeholder="Select Country"  className="cssfor"/>
                  
                  
                  </div>
                  <div className="col1 center center1" >
                  <div className="cardsearch" style={{display:'flex',alignContent:'center',justifyContent:'center'}}  onClick={()=>{setprogram(true);setcardselectbar(true)}}><i class="fa-solid fa-magnifying-glass"></i><h5  style={{textAlign:'center'}}>ADD</h5> </div> </div> 
                  
                      
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

export default Quicksearch;
