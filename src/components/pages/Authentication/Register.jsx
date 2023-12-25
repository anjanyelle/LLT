import React, { useEffect, useRef, useState } from "react";
import { login } from "../../imagepath";
import { Link } from "react-router-dom";
import ReactPasswordToggleIcon from "react-password-toggle-icon";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { HandleWithFooter } from "../Base UI Elements/SweetAlert";
import { registerapi } from "../../HttpRequest/beforelogin";
import Swal from "sweetalert2";
import { digiterror, emailerror, passworderror } from "../Base UI Elements/Toast";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Registercopy = () => {
  let inputRef = useRef();
  let inputRef2 = useRef();


  const [registerfiled ,setregisterfiled]=useState({
    filed1:true,
    filedsecond:false,
    filed3:false,
    container:true,
    filedemailOtpSuces:false
  })
  const [inputfiled , setinputfiled]=useState({
    id: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    whatsappNumber: "",
    dateOfBirth: "",
    role: "admin",
    yourCollageName: "",
    city: "",
    isVaild:false,
    isVaild1:false
  })
  
  const submitchange = (event) => {
    const { name, value } = event.target;

    setinputfiled({
      ...inputfiled,
      [name]: value,
    });
  };  const history =useHistory()
  const handle1filedsubmit =()=>{
  
    if(inputfiled.password == inputfiled.confirmPassword){
      console.log("password and confirmPassword match")
      if(inputfiled.email.includes("@")){
        console.log("email is vaild")
        setregisterfiled({
          ...registerfiled,
          filed1:!registerfiled.filed1,
          filedsecond:!registerfiled.filedsecond,
        })

      }else{
        console.log("email is not vaild")
        emailerror("email is not vaild!")
      } 
    }else{
      console.log("password and confirmPassword not match")
      passworderror("password and confirmPassword not match")
    }
    
  }
  const handle2filedsubmit =()=>{
               setregisterfiled({
                ...registerfiled,
                container:!registerfiled.container,
                filed3:!registerfiled.filed3,
               })
  }
   const handle3filedsubmit =()=>{
    setregisterfiled({
      ...registerfiled,
      filed3:false,
      filed1:false,
      filedsecond:false,
      filedemailOtpSuces:true,
      
      
    })
   }       

   
   const formSubmit = async () => {
    console.log(inputfiled);
  
    if (inputfiled.phoneNumber.length === 10 && inputfiled.whatsappNumber.length === 10) {
      console.log("Phone numbers are valid");
      try {
        const response = await registerapi(inputfiled);
        console.log(response);
        const userUUID = response.data.userUUID;
        const id = response.data.id;
        localStorage.setItem("userUUID", userUUID);alert("register sucess");
        localStorage.setItem("id", id);
        history.push("/");
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          emailerror(error.response.data.message)
          console.error("Error during log:", error.response.data.message);
        } else {
          emailerror(error.message)
          console.error("Error during log:", error.message);
        }
        emailerror("Bad credentials")
        console.log("Bad credentials"); 
      }
      // const response = await registerapi(inputfiled);
      console.log(response);
    } else {
      console.log("Phone numbers are not valid");
      digiterror("WhatsApp / phone number must be 10 digits only");
    }
  };


  useEffect(() => {
    if (
      inputfiled.phoneNumber !== "" &&
      inputfiled.whatsappNumber !== "" &&
      inputfiled.dateOfBirth !== "" &&
      inputfiled.yourCollageName !== "" &&
      inputfiled.city !== ""
    ) {
      setinputfiled((prevInputfiled) => ({
        ...prevInputfiled,
        isVaild1: false,
      }));
    }
  

  }, [inputfiled.phoneNumber ,
  inputfiled.whatsappNumber ,
  inputfiled.dateOfBirth,
  inputfiled.yourCollageName ,
  inputfiled.city]);
  
// useEffect(()=>{
//   if (
//     inputfiled.firstName !== "" &&
//     inputfiled.lastName !== "" &&
//     inputfiled.password !== "" &&
//     inputfiled.email !== "" &&
//     inputfiled.confirmPassword !== ""
//   ) {
//     setinputfiled((prevInputfiled) => ({
//       ...prevInputfiled,
//       isVaild: false,
//     }));
//   }
// },[inputfiled])

   useEffect(()=>{
    if(registerfiled.filedemailOtpSuces == true){
      HandleWithFooter("email otp verified successfully")
    }
   },[registerfiled.filedemailOtpSuces])
  const showIcon = () => (
    <i class="feather feather-eye" aria-hidden="true">
      <FeatherIcon icon="eye" />
    </i>
  );
  const hideIcon = () => (
    <i class="feather feather-eye-slash" aria-hidden="true">
      <FeatherIcon icon="eye-off" />
    </i>
  );
  
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={login} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Sign Up</h1>
                  <p className="account-subtitle">
                    Enter details to create your account
                  </p>
                  {/* Form */}    {registerfiled.container ? <>
                  
                    {registerfiled.filed1 ? <> <div className="form-group">
                      <label>
                      First Name  <span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" name="firstName"  onChange={submitchange}/>
                      <span className="profile-views">
                        <i className="fas fa-user-circle" />
                      </span>
                    </div>
                    <div className="form-group">
                      <label>
                       
                       Last
                        Name  <span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" name="lastName"  onChange={submitchange}/>
                      <span className="profile-views">
                        <i className="fas fa-user-circle" />
                      </span>
                    </div>
                    <div className="form-group">
                      <label>
                        Email <span className="login-danger">*</span>
                      </label>
                      <input className="form-control" type="text" name="email"  onChange={submitchange}/>
                      <span className="profile-views">
                        <i className="fas fa-envelope" />
                      </span>
                    </div>
                    <div className="form-group">
                      <label>
                        Create Password  <span className="login-danger">*</span>
                      </label>
                      <input
                        ref={inputRef}
                        className="form-control pass-input"
                        type="password"   

                        name="password"  onChange={submitchange}
                      />
                      <ReactPasswordToggleIcon
                        inputRef={inputRef}
                        showIcon={showIcon}
                        hideIcon={hideIcon}
                      />
                      {/* <input className="form-control pass-input" type="text" />
                                            <span className="profile-views feather-eye toggle-password">
                                                <FeatherIcon icon="eye" />
                                            </span> */}
                    </div>
                    <div className="form-group">
                      <label>
                      confirm  Password  <span className="login-danger">*</span>
                      </label>
                      <input
                        ref={inputRef}
                        className="form-control pass-input"
                        type="password"

                        name="confirmPassword"  onChange={submitchange}
                      />
                      <ReactPasswordToggleIcon
                        inputRef={inputRef}
                        showIcon={showIcon}
                        hideIcon={hideIcon}
                      />
                      {/* <input className="form-control pass-input" type="text" />
                                            <span className="profile-views feather-eye toggle-password">
                                                <FeatherIcon icon="eye" />
                                            </span> */}
                    </div>
                    <div className=" dont-have">
                      Already Registered? <Link to="/">Login</Link>
                    </div>
                    <div className="form-group mb-0">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"    disabled={inputfiled.isVaild} onClick={handle1filedsubmit}
                      >
                        Next Step
                      </button>
                    </div>
                    
                    </>  : <>
                    <div className="form-group">
                      <label>
                        Phone Number <span className="login-danger">*</span>
                      </label>
                      {/* <input className="form-control pass-confirm" type="text" /> */}
                      <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="text"   

                        name="phoneNumber"  onChange={submitchange}
                      />

                      <span className="profile-views">
                        <i className="fas fa-phone" />
                      </span>
                    </div>
                    <div className="form-group">
                      <label>
                        Whatapp Number <span className="login-danger">*</span>
                      </label>
                      {/* <input className="form-control pass-confirm" type="text" /> */}
                      <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="text"   
                        name="whatsappNumber"  onChange={submitchange}
                      />

                      <span className="profile-views">
                        <i className="fas fa-phone" />
                      </span>
                    </div>
                    <div className="form-group">
                      <label>
                        DOB <span className="login-danger">*</span>
                      </label>
                      {/* <input className="form-control pass-confirm" type="text" /> */}
                      <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="date"   
                        name="dateOfBirth"  onChange={submitchange}
                      />

                    </div>

                    <div className="form-group">
                      <label>
                      Your collage Name <span className="login-danger">*</span>
                      </label>
                      {/* <input className="form-control pass-confirm" type="text" /> */}
                      <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="text"   
                        name="yourCollageName"  onChange={submitchange}
                      />

                    </div>

                    <div className="form-group">
                      <label>
                      city <span className="login-danger">*</span>
                      </label>
                      {/* <input className="form-control pass-confirm" type="text" /> */}
                      <input
                  
                        className="form-control pass-confirm"
                        type="text"   
                        name="city"  onChange={submitchange}
                      />  

                    </div>
                    <div className=" dont-have">
                      Already Registered? <Link to="/">Login</Link>
                    </div>
                    <div className="form-group mb-0">
                      <button
                        className="btn btn-primary btn-block"
                        // type="submit"   onClick={handle2filedsubmit}
disabled={inputfiled.isVaild1}                     type="submit"   onClick={()=> formSubmit()}
                      >
                        Next Step
                      </button>
                    </div>
                    </>}</>  :   <>     {registerfiled.filed3 ? <>
                      {/* <div className="form-group">
                      <label>
                        Father Name <span className="login-danger">*</span>
                      </label>
                 
                      <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="text"
                      />

                      <span className="profile-views">
                        <i className="fas fa-phone" />
                      </span>
                    </div> */}
                    {/* <div className="form-group">
                      <label>
                        Father Phone
                <span className="login-danger">*</span>
                      </label>
                 
                      <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="text"
                      />

                      <span className="profile-views">
                        <i className="fas fa-phone" />
                      </span>
                    </div>
                    <div className="form-group">
                      <label>
                      H. No: <span className="login-danger">*</span>
                      </label>
                  
                      <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="text"
                      />

                    </div> */}

<div className="form-group">
                      <label>
                      email <span className="login-danger">*</span>
                      </label>
                      {/* <input className="form-control pass-confirm" type="text" /> */}
                      <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="text"   
                        name="email"  onChange={submitchange}
                      />

                    </div>
                    <div className="form-group">
                      <label>
                      Enter otp code sent to email <span className="login-danger">*</span>
                      </label>
                      {/* <input className="form-control pass-confirm" type="text" /> */}
                      <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="text"   
                        name="firstname"  onChange={submitchange}
                      />

                    </div>
                    <div className="sameline space">
                      <button   className="btn btn-secondary m-1">Resend Otp</button>
                      <button   className="btn btn-success m-1">submit</button>
                    </div>
                    {/* <div className="form-group">
                      <label>
                      Apt <span className="login-danger">*</span>
                      </label> */}
                      {/* <input className="form-control pass-confirm" type="text" /> */}
                      {/* <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="text"
                      />

                    </div> */}

                    <div className=" dont-have">
                      Already Registered? <Link to="/">Login</Link>
                    </div>
                    <div className="form-group mb-0">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"   onClick={handle3filedsubmit}
                      >
                        Next Step
                      </button>
                    </div>
                    </>  :  <></>}</>}
      
               {registerfiled.filedemailOtpSuces && <>
               
                <div className="form-group">
                      <label>
                      Mobile Number  <span className="login-danger">*</span>
                      </label>
                      {/* <input className="form-control pass-confirm" type="text" /> */}
                      <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="text"
                      />

                    </div>
                    <div className="form-group">
                      <label>
                      Enter Mobile Otp  <span className="login-danger">*</span>
                      </label>
                      {/* <input className="form-control pass-confirm" type="text" /> */}
                      <input
                        ref={inputRef2}
                        className="form-control pass-confirm"
                        type="text"
                      />

                    </div>


                    <Link to="/dashboard"
                        className="btn btn-primary btn-block"
                        type="submit"   onClick={handle3filedsubmit}
                      >
                        Next Step
                      </Link>
               </>}
                   
                   
                
               
                  {/* /Form */}
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <Link to="#">
                      <i className="fab fa-google-plus-g" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </div>
                  {/* /Social Login */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registercopy;
