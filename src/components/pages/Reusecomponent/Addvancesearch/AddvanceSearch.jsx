import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../Header/Header";
import SideBar from "../../../SideBar/SideBar";
import "./addvancesearch.css";
import Footer from "../../../Footer/Footer";
// import png1 from '../../../assets/img/profiles/png 1.png' ;
import png11 from "../../../../assets/img/profiles/png 2.png";
import Selectdrop from "../Selectdrop";
import ProgramSearch from "../../Reusecomponent/ProgramSearch";
import { Switch } from "antd";
import { handelsearchapi } from "../../../HttpRequest/afterlogin";
import AddanceSearchresult from "../AddanceSearchresult";

const Addvancesearch = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [userdata, setuserdata] = useState({
    profileData: {},
    greScore:false,
    abroad:"",
    tofelScore:false,
    ieltsScore:false,
    pteScore:false,
    gmatScore:false,
    pteScore:true,
    applicationFeeFlag:false,
    scholarshipAvailableFlag:false,
    maxYearlyTuitionFees:"",
    minYearlyTuitionFees:""

    });

  const onChange = (checked , value) => {
    console.log(`switch to ${checked} ${value}`);
    if(value == "greScore"){
      console.log(value)
      setuserdata({
        ...userdata,
        greScore:!userdata.greScore
      })
      
    }
    if(value === "ieltsScore"){
      console.log(value)
      setuserdata({
        ...userdata,
        ieltsScore:!userdata.ieltsScore
      })
    } 
    if(value === "tofelScore"){
      console.log(value)
      setuserdata({
        ...userdata,
        tofelScore:!userdata.tofelScore
      })
    } 
    if(value == "applicationFeeFlag"){
      console.log(value)
      setuserdata({
        ...userdata,
        applicationFeeFlag:!userdata.applicationFeeFlag
      })
    }
    if(value === "scholarshipAvailableFlag"){
      console.log(value)
      setuserdata({
        ...userdata,
        scholarshipAvailableFlag:!userdata.scholarshipAvailableFlag
      })
    }if(value == "gmatScore"){
      setuserdata({
        ...userdata,
        gmatScore:!userdata.gmatScore
      })
    }
    if(value === "pteScore"){
      console.log(value)
      setuserdata({
        ...userdata,
        pteScore:!userdata.pteScore
      })
    }
  };
  const [files, setfile] = useState(null);
  const [queryfiledinput, setqueryfiledinput] = useState("");

  const [idnumber, setidnumber] = useState(false);
  const [program, setprogram] = useState(true);
  const [searchbar, setsearchbar] = useState(true);
  const [searchbar0, setsearchbar0] = useState(false);
  const [cardselectbar, setcardselectbar] = useState(false);
  const [normalsearch, setnormalsearch] = useState(true);
  const [quicksearch, setquicksearch] = useState(true);
  const [api ,setApi]=useState({
    apires: [],
    search:false
  })

  console.log(userdata);

  const handleWriteClick = async () => {};
  const handleChange = (event) => {
    const { name, value } = event.target;
    setqueryfiledinput({
      ...queryfiledinput,
      [name]: value,
    });
  };
const handlechan =()=>{
  const { name, value } = event.target;
  setuserdata({
    ...userdata,
    [name]: value,
  });
}

const handleclick=async()=>{
     
  console.log(userdata)
  const response =await handelsearchapi(userdata);
  console.log(response)
  setApi({
    ...api,
    apires:response,
    search:true
  })
}
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
            <div className="imagespropety">
              <div className="pagecolum">
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

                {/* {quicksearch && (
                  <>
                    {" "}
                    <div className="card cardnormatserach">
                      <div className="card-body card-narmal ">
                        <div className="col1">
                          <Selectdrop
                            placeholder="Select Course"
                            className="cssfor"
                          />
                          <Selectdrop
                            placeholder="Select University"
                            className="cssfor"
                          />
                        </div>

                        <div className="col1">
                          <Selectdrop
                            placeholder="Select Country"
                            className="cssfor"
                          />
                          <Selectdrop
                            placeholder="Select Course"
                            className="cssfor"
                          />
                        </div>

                        <div className="col1">
                          <Selectdrop
                            placeholder="Select University"
                            className="cssfor"
                          />
                          <Selectdrop
                            placeholder="Select Country"
                            className="cssfor"
                          />
                        </div>
                        <div className="col1 center center1">
                          <div
                            className="cardsearch"
                            style={{
                              display: "flex",
                              alignContent: "center",
                              justifyContent: "center",
                            }}
                            onClick={() => {
                              setprogram(true);
                              setcardselectbar(true);
                            }}
                          >
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <h5 style={{ textAlign: "center" }}>ADD</h5>{" "}
                          </div>{" "}
                        </div>
                      </div>
                    </div>{" "}
                    {program && (
                      <>
                        {" "}
                        <div class="card cardprogram">
                          <div class="card-body cardprogrampadding">
                            <ProgramSearch />
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )} */}
                <div class="card card1c">
  <div class="card-header searchcard-header">


    <div className="card cardnormatserach cardnormatsera">
                      <div className="cardmatchsearch">
                        <div className="col1">
                          <Selectdrop
                            placeholder="Select Course"
                            className="cssfor"
                          />
                          <Selectdrop
                            placeholder="Select University"
                            className="cssfor"
                          />
                        </div>

                        <div className="col1">
                          <Selectdrop
                            placeholder="Select Country"
                            className="cssfor"
                          />
                          <Selectdrop
                            placeholder="Select Course"
                            className="cssfor"
                          />
                        </div>

                        <div className="col1">
                          <Selectdrop
                            placeholder="Select University"
                            className="cssfor"
                          />
                          <Selectdrop
                            placeholder="Select Country"
                            className="cssfor"
                          />
                        </div>
                        {/* <div className="col1 center center1">
                          <div
                            className="cardsearch"
                            style={{
                              display: "flex",
                              alignContent: "center",
                              justifyContent: "center",
                            }}
                            onClick={() => {
                              setprogram(true);
                              setcardselectbar(true);
                            }}
                          >
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <h5 style={{ textAlign: "center" }}>ADD</h5>{" "}
                          </div>{" "}
                        </div> */}
                      </div>
                    </div>
  </div>
  <div class="card-body">
   <div className="row g-3 align-items-center just-space">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label fw-bold">Study level</label>
  </div>
  <div class="col-auto  addvancesearchselect"  >
  <select onChange={handlechan}
  name="abroad" value={userdata.abroad}>
      <option value="postgraduate">postgraduate</option>
      <option value="Ug">Ug</option>
      <option value="Bachelors">Bachelors</option>
      <option value="Bachelors">Bachelors</option>
    </select>
  </div>
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label  fw-bold"> Without GMAT</label>
  </div>
  <div class="col-auto  addvancesearchselect"  >
<Switch   onChange={(checked) => onChange(checked, "gmatScore")}/>
  </div>
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label fw-bold"> Without GRE</label>
  </div>
  <div class="col-auto  addvancesearchselect"  >
<Switch  onChange={(checked) => onChange(checked, "greScore")} />
  </div>
   </div>

   
   <br></br>
   <div className="row g-3 align-items-center just-spacebet">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label fw-bold">English proficiency </label>
  </div>
  <div class="col-auto  addvancesearchselect"  >
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(event) => onChange(event.target.checked, "ieltsScore")} />
  <label class="form-check-label" for="flexCheckDefault">
    IELTS 
  </label>
</div>
  </div>
  <div class="col-auto  addvancesearchselect"  >
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"    onChange={(event) => onChange(event.target.checked, "tofelScore")}  />
  <label class="form-check-label" for="flexCheckDefault">
TOFEL
  </label>
</div>
  </div>
  <div class="col-auto  addvancesearchselect"  >
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"    onChange={(event) => onChange(event.target.checked, "pteScore")}  />
  <label class="form-check-label" for="flexCheckDefault">
    PET
  </label>
</div>
  </div>
  {/* <div class="col-auto  addvancesearchselect"  >
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
   DUOLINGO
  </label>
</div>
  </div> */}
   </div>

       <br></br>
   <div className="row g-3 align-items-center just-spacebet">
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label fw-bold">Without Application fee </label>
  </div>
  <div class="col-auto  addvancesearchselect"  >
  <div class="form-check">
  <Switch     onChange={(checked) => onChange(checked, "applicationFeeFlag")} />
</div>
  </div>
  <div class="col-auto  addvancesearchselect"  >
  <div class="form-check">
  <label class="form-check-label" for="flexCheckDefault">
  Scholarship Available  </label>
</div>
  </div>




  <div class="col-auto  addvancesearchselect"  >
  <div class="form-check">
  <Switch onChange={(checked) => onChange(checked, "scholarshipAvailableFlag")} />

</div>
  </div>

   </div>

   <br></br>
   <div className="row g-3 align-items-center just-spacebet">
  <div class="row g-3 align-items-center">

  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label fw-bold">Without Application fee </label>       
  </div>
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Min</label>
  </div>
  <div class="col-auto ">
    <input type="password" id="inputPassword6" class="form-control formmin"   name="minYearlyTuitionFees" aria-describedby="passwordHelpInline" onChange={handlechan} />
  </div>
  
  <div class="col-auto">
    <label for="inputPassword6" class="col-form-label">Min</label>
  </div>
  <div class="col-auto ">
    <input type="password" id="inputPassword6" class="form-control formmin"  name="maxYearlyTuitionFees" aria-describedby="passwordHelpInline"   onChange={handlechan}/>
  </div><button  onClick={handleclick}>Search</button>
  </div>

   </div>
  </div>
</div>
{api.search  && <> <AddanceSearchresult  data={api.apires} /></>}
                <img src={png11} alt="images" className="imagesearch" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Addvancesearch;
