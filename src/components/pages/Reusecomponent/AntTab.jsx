import React, { useEffect, useState } from "react";
import { Radio, Switch, Tabs } from "antd";
import "./anttab.css";

import { Button, Checkbox, Form, Input } from "antd";
import { educationalDetails, handleuploadprofile, userId, workexperience } from "../../HttpRequest/afterlogin";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { fileSuccess } from "../Base UI Elements/SweetAlert";


const AntTab = ({ activeTab1 }) => {
  
  const [size, setSize] = useState("large");
  const onChange = (e) => {
    setSize(e.target.value);
  };

  const [activeExam, setActiveExam] = useState("");
  const [activeExamIELTS, setActiveExamIELTS] = useState(true);
  const [activeExamTOFEL, setActiveExamTOFEL] = useState(false);
  const [activeExamDET, setActiveExamDET] = useState(false);
  const [activeExamGMAT,setActiveExamGMAT] =useState(false)
  const [activeExamPTE , setActiveExamPTE] =useState(false);
  const [activeExamGRE1 ,setactiveExamGRE1]=useState(false);
  const [activeExamGRE, setActiveExamGRE] = useState(false);

  const [isdocument1 , setisdocument]=useState(true);
  const [isdocument2 , setisdocument2]=useState(false);

  const [activeTab, setActiveTab] = useState("");
  


const [education, setEducation]=useState({
   pg:{
    id: 0,
    type: "",
    instituteName: "",
    instituteAddress: "",
    startDate: "",
    endDate: "",
    marksGained: "",
    scale: "",
    boardOfStudy: "",
    numberOfBacklogs: "",
    userId: 0
    
  }, ug:{
  id: 0,
  type: "",
  instituteName: "",
  instituteAddress: "",
  startDate: "",
  endDate: "",
  marksGained: "",
  scale: "",
  boardOfStudy: "",
  numberOfBacklogs: "",
  userId: 0
  
},
intermediate:{
  id: 0,
  type: "",
  instituteName: "",
  instituteAddress: "",
  startDate: "",
  endDate: "",
  marksGained: "",
  scale: "",
  boardOfStudy: "",
  numberOfBacklogs: "",
  userId: 0
},
ssc:{
  id: 0,
  type: "",
  instituteName: "",
  instituteAddress: "",
  startDate: "",
  endDate: "",
  marksGained: "",
  scale: "",
  boardOfStudy: "",
  numberOfBacklogs: "",
  userId: 0
}
})


const [ugdoc , setUgdoc]=useState(false);
const [pgdoc , setPgdoc]=useState(false);
const [Interdoc , setInterdoc]=useState(false);
const [basicdoc , setbasicdoc]=useState(false);    const  [jobexperience1  , setJobexperience1]=useState(false);const  [jobexperience2  , setJobexperience2]=useState(false);



const  [addressfileobject  , setaddressfileobject]=useState({
  id: 0,
  houseNumber: "",
  apartment: "",
  city: "",
  state: "",
  pinCode: "",
  country: ""})


  const [jobexperience , setjobexperience]=useState([{
      id:userId,
      clientName: "",
      jobRole: "",
      startDate: "",
      endDate: "",
      visaCounselling: true,
      userId:userId
  }])
  
const [profiledatafiled , setprofiledatafiled]=useState({
  id: 0,
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: "",
  contactNumber: "",
  gender: "",
  whatsappNumber: "",
  maritalStatus: true,
  emailId: "",
  linkedInUrl: "",
  parentName: "",
  parentNumber: "",
  passportNumber: "",
  countryOfBirth: "",
  passportIssueDate: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  emergencyEmail: "",
  emergencyContactRelationship: "",
  emergencyAddress: "",
  userId: 0,
  passportExpiryDate: "",
  address:{
    id: 0,
    houseNumber: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
    country: ""},
  
})
const submitwork =async()=>{
  fileSuccess("Status: 200")
      
  try {
    const response = await workexperience(jobexperience);
    console.log(response.data);
  
      console.log("Status: 200");  
    // } else {
    //   console.log("Unexpected response status:", response.data.response.status);
    // }
      
  } catch (error) {
    console.error("Error occurred:", error);
  }    

}
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };


  const handleSubmit = async () => {
    console.log(profiledatafiled);
    const response = await handleuploadprofile(profiledatafiled);
    response
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    console.log(activeTab1);
    setActiveTab(activeTab1);
  
    // Assuming handleTabChange is a function you want to call
    handleTabChange(activeTab1);
  
    // Setting up variables for JSX, adjust as needed
    const id = activeTab1;
    const dataBsToggle = "tab";
    const dataBsTarget = `#${activeTab1}`; // Adjust the template string as needed
    const type = "button";
    const role = "tab";
    const ariaControls = activeTab1;
    const ariaSelected = activeTab === "home-tab-pane";
  
    // Now you can use these variables in your JSX
    console.log("id:", id);
    console.log("dataBsTarget:", dataBsTarget);
  
    // Additional checks or operations if needed
  
  }, [activeTab1, handleTabChange, activeTab]); // Include handleTabChange in dependencies if needed
  
  const onChangeDET = (exam)  => {
    // Your existing logic to handle the state change
    setActiveExam(exam);
    setActiveExamDET(!activeExamDET);
    console.log(exam);
  };
  const onChangeGMAT  =(exam)=>{
    setActiveExam(exam);
    setActiveExamGMAT(!activeExamGMAT);
    console.log(exam);
  }
  const onChangeGRE = (exam) => {
    // Your existing logic to handle the state change
    setActiveExam(exam);
    setActiveExamGRE(!activeExamGRE);
    console.log(exam);
  };
  const onChangePTE = (exam) => {
    // Your existing logic to handle the state change
    setActiveExam(exam);
    setActiveExamPTE(!activeExamPTE);
    console.log(exam);
  };
  const onChangeIELTS = (exam) => {
    // Your existing logic to handle the state change
    setActiveExam(exam);
    setActiveExamIELTS(!activeExamIELTS);
    console.log(exam);
  };
  const onChangeTOFEL = (exam) => {
    // Your existing logic to handle the state change
    setActiveExam(exam);
    setActiveExamTOFEL(!activeExamTOFEL);
    console.log(exam);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (event, type , index) => {
    const { name, value } = event.target;
  

    const userid=userId
    if (type === "ug") {
      setEducation({
        ...education,
        ug: {
          ...education.ug,
          [name]: value,
        },
      });
    }
  
    if (type === "intermediate") {
      setEducation({
        ...education,
        intermediate: {
          ...education.intermediate,
          [name]: value,
        },
      });
    }
  
    if (type === "ssc") {
      setEducation({
        ...education,
        ssc: {
          ...education.ssc, // Corrected this line
          [name]: value,
        },
      });
    }
    setaddressfileobject({
      ...addressfileobject, 
      
      [name]:value,
    })
    setprofiledatafiled({
      ...profiledatafiled,
      [name]:value
    });
    if (type === "jobexperience") {
      setjobexperience((prevJobExperience) => {
        const updatedExperiences = [...prevJobExperience];
        updatedExperiences[index] = {
          ...updatedExperiences[index],
          [name]: value,
          id:userid,
          userId:userid
        };
       
        return updatedExperiences;
      });
    }
  };
  
  useEffect(() => {
    setprofiledatafiled((prevProfileData) => ({
      ...prevProfileData,
      address: addressfileobject,
    }));
  }, [addressfileobject]);
  
  const  handleclickeductiondeatils=async()=>{

    console.log(education.intermediate)
    console.log(education.ug)
    console.log(education.ssc)
   
    try {
      const response = await educationalDetails(education.ug, education.intermediate,education.ssc);
      console.log(response);
    }catch(error){
      console.log(error)
    } 

  }
  const handlefiledchange=()=>{
      console.log()
  }
  return (
    <div className="tabnavbar tabnavbar1">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link nav-linkk1 ${
              activeTab === "home-tab-pane" ? "active" : ""
            }`}
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected={activeTab === "home-tab-pane"}
            onClick={() => handleTabChange("home-tab-pane")}
          >
            Home
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link nav-linkk1 ${
              activeTab === "profile-tab-pane" ? "active" : ""
            }`}
            id="education-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected={activeTab === "profile-tab-pane"}
            onClick={() => handleTabChange("profile-tab-pane")}
          >
            Education details
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link nav-linkk1 ${
              activeTab === "experience-tab-pane" ? "active" : ""
            }`}
            id="experience-tab"
            data-bs-toggle="tab"
            data-bs-target="#experience-tab-pane"
            type="button"
            role="tab"
            aria-controls="experience-tab-pane"
            aria-selected={activeTab === "experience-tab-pane"}
            onClick={() => handleTabChange("experience-tab-pane")}
          >
            Work experience
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link nav-linkk1 ${
              activeTab === "-tab-pane" ? "active" : ""
            }`}
            id="scores-tab"
            data-bs-toggle="tab"
            data-bs-target="#-tab-pane"
            type="button"
            role="tab"
            aria-controls="-tab-pane"
            aria-selected={activeTab === "-tab-pane"}
            onClick={() => handleTabChange("-tab-pane")}
          >
          Documents
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link nav-linkk1 ${
              activeTab === "upload-tab-pane" ? "active" : ""
            }`}
            id="document-tab"
            data-bs-toggle="tab"
            data-bs-target="#upload-tab-pane"
            type="button"
            role="tab"
            aria-controls="upload-tab-pane"
            aria-selected={activeTab === "upload-tab-pane"}
            onClick={() => handleTabChange("upload-tab-pane")}
          >
              Test Scores
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          

            <div className="row mt-3">
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  First Name
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"  
                  name="firstName"   
                  onChange={handleChange}
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Last Name
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"   
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                />
              </div>
              {/* <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  PAN Number
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter PAN Number"
                  name="pannumber"   
             onChange={handleChange}
                />
              </div> */}
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Contact Number
                  <span className="login-danger">*</span>
                </label>
                <input type="tel" className="form-control"  
                  name="contactNumber"   
             onChange={handleChange}
                
                />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Date of Birth
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker"  
                name="dateOfBirth"   
           onChange={handleChange} />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  {/* Father Name */}
                  Email Id
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Father Name"
                  name="emailId"
             onChange={handleChange}
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  WhatsApp No
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="number"
                  maxLength={10}
                  className="form-control"
                  placeholder="Enter WhatsApp "
                  name="whatsappNumber"
                  
             onChange={handleChange}
                />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Parent Name
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={10}
                  className="form-control"
                  placeholder="Parent Name"
                  name="parentName"
                  
             onChange={handleChange}
                />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Parent Number
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="number"
                  maxLength={10}
                  className="form-control"
                  placeholder="Parent Number "
                  name="parentNumber"
                  
             onChange={handleChange}
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Linked In Url
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter WhatsApp "
                  name="linkedInUrl"
                  
             onChange={handleChange}
                />
              </div>
              <div className="form-group ">
                <label>Gender</label>
                <div className="form-check form-check-inline">
                  <input
                    class="form-radio-input"
                    type="radio"
                    id="inlineCheckbox1"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                  />
                  <label
                    class="form-radio-label"
                    style={{ marginLeft: "10px" }}
                    for="inlineCheckbox1"
                    name="Female"
                  >
                    Female
                  </label>
                </div>
                <div
                  className="form-check form-check-inline"
                  style={{ marginLeft: "-1rem" }}
                >
                  <input
                    class="form-radio-input"
                    type="radio"
                    id="inlineCheckbox1"
                    name="gender"
                    onChange={handleChange}
                    value="Male"
                  />
                  <label
                    class="form-radio-label "
                    style={{ marginLeft: "10px" }}
                    for="inlineCheckbox2"
                  >
                    Male
                  </label>
                </div>
              </div>
              <hr></hr>
              <div className="mb-4"></div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Marital Status
                  <span className="login-danger">*</span>
                </label>
                <select
                  type="text"
                  className="form-control"
                  name="MaritalStatus"
             onChange={handleChange}
                  // placeholder="Enter Email Id"
                  placeholder="Marital Status"
                >

                  <option  value={true}>Single</option>
                  <option  value={false}>Married</option>
                </select>
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Passport Number
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="passportNumber"
             onChange={handleChange}
                  // placeholder="Enter Email Id"
                />
              </div>

              
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Country Of Birth
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="countryOfBirth"
             onChange={handleChange}
                  // placeholder="Enter Email Id"
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Passport IssueDate
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="passportIssueDate"
             onChange={handleChange}
                  // placeholder="Enter Email Id"
                />
              </div>

              {/*<div className="mb-4"></div>*/}
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Passport ExpiryDate
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="passportExpiryDate"
             onChange={handleChange}
                  // placeholder="Enter Email Id"
                />
              </div>
         
              
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Apartment Address
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Residence Address"
                  name="apartment"
             onChange={handleChange}
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                      House Number
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""name="houseNumber" />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Pin Code
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Pincode"
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Locality
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Locality "
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  City <span className="login-danger">*</span>  
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  State
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" name="state"  onChange={handleChange} />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Country
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" name="country"  onChange={handleChange}/>
              </div>
              
<hr></hr>     
<div className="mb-4"></div>    

<div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Emergency ContactName
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="emergencyContactName"
             onChange={handleChange}
                  // placeholder="Enter Email Id"
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Emergency ContactNumber
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="emergencyContactNumber"
             onChange={handleChange}
                  // placeholder="Enter Email Id"
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Emergency Email
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="emergencyEmail"
             onChange={handleChange}
                  // placeholder="Enter Email Id"
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                
                 Contact Relationship
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="emergencyContactRelationship"
             onChange={handleChange}
                  // placeholder="Enter Email Id"
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Emergency Address
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="emergencyAddress"
             onChange={handleChange}
                  // placeholder="Enter Email Id"
                />
              </div>


              <div className="col-12 ">
                <button
                  className="btn btn-primary col-md-4 col-12"
                  type="submit"  
                  onClick={handleSubmit}
                >
                  Save Deatils
                </button>
              </div>
            </div>

        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
   
            <div className="row mt-3">


            <div className="mb-4 mt-2"><div class="exambox exambox11 examboxcurue"><div class="eduexamcur eduexam ">PG  <Switch checked={pgdoc} onChange={() => setPgdoc(!pgdoc)} /></div></div></div>
            {pgdoc  && <><div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Pg
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" name="type" 
                    onChange={(event) => handleChange(event, "pg")}  />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Name of the college
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""  
                name="instituteName"   
                onChange={(event) => handleChange(event, "pg")}  />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  College address
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control"
                
                name="instituteAddress"   
                onChange={(event) => handleChange(event, "pg")} />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  From
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker"  
                 name="startDate"   
                 onChange={(event) => handleChange(event, "pg")} />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  To
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker"  
                 name="endDate"   
                 onChange={(event) => handleChange(event, "pg")} />
              </div>
             {/* <label>Father Name</label> */}
              
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                 Scale
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={10}
                  className="form-control"

                  name="endDate"   
             onChange={(event) => handleChange(event, "pg")}
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Board of study
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""  
                name="boardOfStudy"   
                onChange={(event) => handleChange(event, "pg")}  />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Marks Gained
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""  
                name="marksGained"   
                onChange={(event) => handleChange(event, "pg")}  />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Number of backlogs
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""  
                name="numberOfBacklogs"   
                onChange={(event) => handleChange(event, "pg")}  />
              </div></>}   
              <hr></hr>

              
              <div className="mb-4 mt-2"><div class="exambox exambox11 examboxcurue"><div class="eduexamcur eduexam ">UG  <Switch checked={ugdoc} onChange={() => setUgdoc(!ugdoc)} /></div></div></div>
           {ugdoc && <>   <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  UG
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" name="type" 
                    onChange={(event) => handleChange(event, "ug")}  />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Name of the college
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""  
                name="instituteName"   
                onChange={(event) => handleChange(event, "ug")}  />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  College address
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control"
                
                name="instituteAddress"   
                onChange={(event) => handleChange(event, "ug")} />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  From
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker"  
                 name="startDate"   
                 onChange={(event) => handleChange(event, "ug")} />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  To
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker"  
                 name="endDate"   
                 onChange={(event) => handleChange(event, "ug")} />
              </div>
             {/* <label>Father Name</label> */}
              
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                 Scale
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={10}
                  className="form-control"

                  name="endDate"   
             onChange={(event) => handleChange(event, "ug")}
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Board of study
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""  
                name="boardOfStudy"   
                onChange={(event) => handleChange(event, "ug")}  />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Marks Gained
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""  
                name="marksGained"   
                onChange={(event) => handleChange(event, "ug")}  />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                Number of backlogs
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""  
                name="numberOfBacklogs"   
                onChange={(event) => handleChange(event, "ug")}  />
              </div></>}
              <hr></hr>
              <div className="mb-4"></div>
              <div className="mb-4 mt-2"><div class="exambox exambox11 examboxcurue"><div class="eduexamcur eduexam ">Inter  <Switch checked={Interdoc} onChange={() => setInterdoc(!Interdoc)} /></div></div></div>
         
         {Interdoc   && <>     <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Intermediate or diploma
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  // placeholder="Enter Email Id"
                  name="type" 
                  onChange={(event) => handleChange(event, "intermediate")}
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Name of collage
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Residence Address"
                  name="instituteName"   
             onChange={(event) => handleChange(event, "intermediate")}
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Collage Address
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""
                name="instituteAddress"
                onChange={(event) => handleChange(event, "intermediate")} />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Starts From
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter Locality "
                  name="startDate"   
             onChange={(event) => handleChange(event, "intermediate")}
                />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  To <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control" placeholder=" "  
                 name="endDate"   
            onChange={(event) => handleChange(event, "intermediate")}/>
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Mark Gained
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""  
                 name="marksGained"   
            onChange={(event) => handleChange(event, "intermediate")}/>
              </div></>}


              <hr></hr>
              <div className="mb-4"></div>
              <div className="mb-4 mt-2"><div class="exambox exambox11 examboxcurue"><div class="eduexamcur eduexam ">10  <Switch checked={basicdoc} onChange={() => setbasicdoc(!basicdoc)} /></div></div></div>
       {basicdoc  && <>         <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  SSC /CBSE
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder=""  
                 name="type"   
            onChange={(event) => handleChange(event, "ssc")}/>
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Name of the School
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" 
                 name="instituteName"   
            onChange={(event) => handleChange(event, "ssc")}/>
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Starts From <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control" placeholder="" 
                 name="startDate"   
            onChange={(event) => handleChange(event, "ssc")}/>
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  To
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control" placeholder="" 
                 name="endDate"   
            onChange={(event) => handleChange(event, "ssc")}/>
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Mark Ganied <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" 
                 name="marksGained"   
            onChange={(event) => handleChange(event, "ssc")}
                 />
              </div>
              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Scale <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" 
                
                name="scale"   
           onChange={(event) => handleChange(event, "ssc")}
                />
              </div>  </>}
              <div className="col-12 ">
                <button
                  className="btn btn-primary col-md-4 col-12"
                  type="submit"  onClick={handleclickeductiondeatils}
                >
                  Save Deatils
                </button>
              </div>
            </div>
        </div>
        <div
          className="tab-pane fade"
          id="-tab-pane"
          role="tabpanel"
          aria-labelledby="-tab-pane"
          tabindex="0"
        >
              
              <div className="col-md-12 col-lg-12 row">
                       {isdocument1 &&  <div className="row mt-3">
                              <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  10th <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                  {/* <h6 className="settings-size">
                                    <span>
                                      Image Uploaded
                                      <i className="fa fa-chek text-bg-dark"></i>
                                    </span>
                                  </h6> */}
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  Inter  <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                  {/* <h6 className="settings-size">
                                    <span>
                                      Image Uploaded
                                      <i className="fa fa-chek text-bg-dark"></i>
                                    </span>
                                  </h6> */}
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  B. Tech Individual memo's <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                  {/* <h6 className="settings-size">
                                    <span>
                                      Image Uploaded
                                      <i className="fa fa-chek text-bg-dark"></i>
                                    </span>
                                  </h6> */}
                                </div>

                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  B. Tech Transcripts
                                    <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  Consolidated Marks Memo
                                    <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  Provisional Certificate
                                    <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  Original Degree/Course Completion Letter
                                    <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  Updated Resume
                                    <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                    Passport (front and back)
                                    <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                    Passport
                                    <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  Duolingo/IELTS/PTE/TOEFL
                                    <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  GRE/GMAT 
                                    <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                </div> <p><strong>If you have work experience </strong></p>     <div className="mb-4 mt-2"><div class="exambox exambox11 examboxcurue"><div class="eduexamcur eduexam ">  <Switch checked={isdocument2} onChange={() => setisdocument2(!isdocument2)} /></div></div></div>
                              </div>}


                              
                              {isdocument2  &&  <div className="row mt-3">
                              <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  Offer letter <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                  {/* <h6 className="settings-size">
                                    <span>
                                      Image Uploaded
                                      <i className="fa fa-chek text-bg-dark"></i>
                                    </span>
                                  </h6> */}
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  Pay Slips  <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                  {/* <h6 className="settings-size">
                                    <span>
                                      Image Uploaded
                                      <i className="fa fa-chek text-bg-dark"></i>
                                    </span>
                                  </h6> */}
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  Bank Statement of your salary account <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                  {/* <h6 className="settings-size">
                                    <span>
                                      Image Uploaded
                                      <i className="fa fa-chek text-bg-dark"></i>
                                    </span>
                                  </h6> */}
                                </div>


                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  Relieving letter
                                    <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                                </div>     

                                <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  SOP (statement of purpose) <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                              </div>

                              <div className="form-group col-12 col-md-6">
                                  <p className="settings-label">
                                  LOR - 3 (Letter of Recommendation) <span className="star-red">*</span>
                                  </p>
                                  <div className="settings-btn">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="file"
                                      className="hide-input"
                                    />
                                    <label htmlFor="file" className="upload">
                                      <i className="feather-upload">
                                        <FeatherIcon icon="upload" />
                                      </i>
                                    </label>
                                  </div>
                              </div>
                              </div>}
                              <button  className="btn btn-primary  col-12 col-md-2 mb-2" >upload</button>
                    
                          </div>
        </div>
        <div
  className="tab-pane fade"
  id="experience-tab-pane"
  role="tabpanel"
  aria-labelledby="experience-tab"
  tabIndex={0}  
>
          <div>
          
              <div className="row mt-3">
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Client Name
                    <span className="login-danger">*</span>
                  </label>
                  <input type="text" className="form-control" placeholder="" name="clientName"  onChange={(event)=>handleChange(event , "jobexperience" , 0 )} />
                </div>
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Job role
                    <span className="login-danger">*</span>
                  </label>
                  <input type="text" className="form-control" placeholder="" name="jobRole" onChange={(event)=>handleChange(event , "jobexperience" , 0 )}/>
                </div>
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Date of Joing
                    <span className="login-danger">*</span>
                  </label>
                  <input type="date" className="form-control datetimepicker" name="startDate" onChange={(event)=>handleChange(event , "jobexperience" , 0 )}/>
                </div>
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Date of Exit
                    <span className="login-danger">*</span>
                  </label>
                  <input type="date" className="form-control datetimepicker" name="endDate" onChange={(event)=>handleChange(event , "jobexperience" , 0 )}/>
                </div><div><button className="btn btn-primary col-md-3 col-12 ," onClick={submitwork}>submit</button>      </div>
                
                <div>
                    
                </div>
                <hr></hr>
                <div className="contan">
                  <div className="boxcontainer">
                    Do you have job experience ?
                  </div>
                </div>
              </div>


   
            <form>
              <div className="mt-1">
                <strong>If you have any additional experience</strong>
              </div>
            </form>
            <div className="mb-4 mt-2"><div class="exambox exambox11 examboxcurue"><div class="eduexamcur eduexam ">Add  <Switch checked={jobexperience1} onChange={() => setJobexperience1(!jobexperience1)} /></div></div></div>
            {jobexperience1 && <> 
              <div className="row mt-3">
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Client Name
                    <span className="login-danger">*</span>
                  </label>
                  <input type="text" className="form-control" placeholder="" name="clientName" onChange={(event)=>handleChange(event , "jobexperience" , 1 )}/>
                </div>
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Job role
                    <span className="login-danger">*</span>
                  </label>
                  <input type="text" className="form-control" placeholder="" name="jobRole" onChange={(event)=>handleChange(event , "jobexperience" , 1 )}/>
                </div>
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Date of Joing
                    <span className="login-danger">*</span>
                  </label>
                  <input type="date" className="form-control" placeholder="" name="startDate" onChange={(event)=>handleChange(event , "jobexperience" , 1 )}/>
                </div>
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Date of Exit
                    <span className="login-danger">*</span>
                  </label>
                  <input type="date" className="form-control" placeholder="" name="endDate" onChange={(event)=>handleChange(event , "jobexperience" , 1 )}/>
                </div>  <div><button className="btn btn-primary col-md-3 col-12 ," onClick={submitwork}>submit</button>      </div>

              </div>
           </>}

           <hr></hr><div className="mb-4 mt-2"><div class="exambox exambox11 examboxcurue"><div class="eduexamcur eduexam ">Add  <Switch checked={jobexperience2} onChange={() => setJobexperience2(!jobexperience2)} /></div></div></div>
           {jobexperience2 && <> 
              <div className="row mt-3">
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Client Name
                    <span className="login-danger">*</span>
                  </label>
                  <input type="text" className="form-control" placeholder="" name="clientName" onChange={(event)=>handleChange(event , "jobexperience" , 2 )}/>
                </div>
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Job role
                    <span className="login-danger">*</span>
                  </label>
                  <input type="text" className="form-control" placeholder="" name="jobRole" onChange={(event)=>handleChange(event , "jobexperience" , 2 )}/>
                </div>
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Date of Joing
                    <span className="login-danger">*</span>
                  </label>
                  <input type="date" className="form-control" placeholder="" name="startDate" onChange={(event)=>handleChange(event , "jobexperience" , 2 )}/>
                </div>
                <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                  <label>
                    Date of Exit
                    <span className="login-danger">*</span>
                  </label>
                  <input type="date" className="form-control" placeholder="" name="endDate" onChange={(event)=>handleChange(event , "jobexperience" , 2 )}/>
                </div>  <div><button className="btn btn-primary col-md-3 col-12 ," onClick={submitwork}>submit</button>      </div>

              </div>
           </>}
           
          </div>
        </div>
        <div
  className="tab-pane fade"
  id="example-tab-pane"  
  role="tabpanel"
  aria-labelledby="example-tab"
  tabIndex={0}
        >
          <div className="container " style={{ marginTop: "1rem" }}>
            <div className="container " style={{ marginTop: "1rem" }}>
   
            </div>
 

            <div className="col-12 ">
              <button className="btn btn-primary col-md-3 col-12" type="submit">
                Save Deatils
              </button>
            </div>
            {/* <div className='btngroup1'>
                              <div className='btnsubmit'>Submit</div>
                              <div className='btnsubmit'>Cancel</div>
                              </div> */}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="upload-tab-pane"
          role="tabpanel"
          aria-labelledby="upload-tab-pane"
          tabindex="0"
        >
          <div className="container " style={{ marginTop: "1rem" }}>
            <div className="exambox exambox11">
              <div
                className={`eduexam ${activeExam === "IELTS" ? "active" : ""}`}
                onClick={() => onChangeIELTS("IELTS")}
              >
                IELTS <Switch defaultChecked />
              </div>
              <div
                className={`eduexam ${activeExam === "TOFEL" ? "active" : ""}`}
                onClick={() => onChangeTOFEL("TOFEL")}
              >
                TOEFL <Switch />
              </div>
              <div
                  className={`eduexam ${activeExam === "PTE" ? "active" : ""}`}
                  onClick={() => onChangePTE("PTE")}
                >
                  PTE <Switch />
                </div>
              <div
                  className={`eduexam ${
                    activeExam === "DUOLINGO" ? "active" : ""
                  }`}
                  onClick={() => onChangeDET("DUOLINGO")}
                >
                  DUOLINGO <Switch />
                </div>
            </div>
            <div className="row mt-2">




              {activeExamGRE1 === true && (
                <>
                  {" "}
                  <hr></hr> <h6 className="grebacground">GRE</h6>
                  <div className="mb-4"></div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Quant
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Verbal
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      AWA
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Date of examination
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control datetimepicker"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Test valid Untill
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control datetimepicker"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Overall score
                      <span className="login-danger">*</span>
                    </label>
                    <input type="text" className="form-control " />
                  </div>
                </>
              )}
              {activeExamTOFEL === true && (
                <>
                  {" "}
                  <hr></hr> <h6 className="grebacground">TOEFL</h6>
                  <div className="mb-4"></div>
                  <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Listening
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Writing
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Speaking
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Reading
                  <span className="login-danger">*</span>
                </label>
                <input type="tel" className="form-control" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Date of examination
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Test valid Untill
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Overall score
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={10}
                  className="form-control"
                  placeholder=" "
                />
              </div>
                </>
              )}
              {activeExamIELTS === true && (
                <>
                  {" "}
                  <hr></hr> <h6 className="grebacground">IELTS</h6>
                  <div className="mb-4"></div>
                  <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Listening
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Writing
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Speaking
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Reading
                  <span className="login-danger">*</span>
                </label>
                <input type="tel" className="form-control" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Date of examination
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Test valid Untill
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Overall score
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={10}
                  className="form-control"
                  placeholder=" "
                />
              </div>
                </>
              )}

{activeExamPTE === true && (
                <>
                  {" "}
                  <hr></hr> <h6 className="grebacground">PTE</h6>
                  <div className="mb-4"></div>
                  <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Listening
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Writing
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Speaking
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Reading
                  <span className="login-danger">*</span>
                </label>
                <input type="tel" className="form-control" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Date of examination
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Test valid Untill
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Overall score
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={10}
                  className="form-control"
                  placeholder=" "
                />
              </div>
                </>
              )}
              {activeExamDET === true && (
                <>
                  {" "}
                  <hr></hr> <h6 className="grebacground">DUOLINGO</h6>
                  <div className="mb-4"></div>
                  <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Listening
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Writing
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Speaking
                  <span className="login-danger">*</span>
                </label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group col-12 col-sm-3 local-forms local-forms1">
                <label>
                  Reading
                  <span className="login-danger">*</span>
                </label>
                <input type="tel" className="form-control" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Date of examination
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Test valid Untill
                  <span className="login-danger">*</span>
                </label>
                <input type="date" className="form-control datetimepicker" />
              </div>

              <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                <label>
                  Overall score
                  <span className="login-danger">*</span>
                </label>
                <input
                  type="text"
                  maxLength={10}
                  className="form-control"
                  placeholder=" "
                />
              </div>   
                </>
              )}
                     <div className="mb-4"></div>
                     
                      <div className="exambox exambox11 examboxcurue">
              <div
                className={`eduexamcur eduexam ${activeExam === "GRE" ? "activee" : ""}`}
                onClick={() => onChangeGRE("GRE")}
              >
                GRE <Switch />
              </div>
              
  
            </div>
            {activeExamGRE === true && (
                <>
                  {" "}
                  <hr></hr> <h6 className="grebacground">GRE</h6>
                  <div className="mb-4"></div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Quant
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Verbal
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      AWA
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Date of examination
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control datetimepicker"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Test valid Untill
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control datetimepicker"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Overall score
                      <span className="login-danger">*</span>
                    </label>
                    <input type="text" className="form-control " />
                  </div>
                </>
              )}
 <div className="mb-4"></div>
<div className="exambox exambox11   examboxcurue">
              <div
                className={`eduexamcur eduexam ${activeExam === "GMAT" ? "activee" : ""}`}
                onClick={() => onChangeGMAT("GMAT")}
              >
                GMAT <Switch />
              </div>
              </div>
              {activeExamGMAT === true && (
                <>
                  {" "}
                  <hr></hr> <h6 className="grebacground">GMAT</h6>
                  <div className="mb-4"></div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Quant
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Verbal
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      AWA
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Date of examination
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control datetimepicker"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Test valid Untill
                      <span className="login-danger">*</span>
                    </label>
                    <input
                      type="date"
                      className="form-control datetimepicker"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-4 local-forms local-forms1">
                    <label>
                      Overall score
                      <span className="login-danger">*</span>
                    </label>
                    <input type="text" className="form-control " />
                  </div>
                </>
              )}
  
            </div>


    
            <div className="col-12 ">
              <button className="btn btn-primary col-md-3 col-12" type="submit">
                Save Deatils
              </button>
            </div>
            {/* <div className='btngroup1'>
                              <div className='btnsubmit'>Submit</div>
                              <div className='btnsubmit'>Cancel</div>
                              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AntTab;
