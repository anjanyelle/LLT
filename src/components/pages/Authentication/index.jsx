import React, { useEffect, useRef, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactPasswordToggleIcon from "react-password-toggle-icon";
import { login } from "../../imagepath";
import { Link , useHistory } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { loginapi, userloginSection } from "../../HttpRequest/beforelogin";
import { digiterror, emailerror, toastrSuccess, toastrWarning } from "../Base UI Elements/Toast";
// import { HandleWithFooter } from "../Base UI Elements/SweetAlert";

const Login = () => {

  const [logdata , setlogdata]=useState({
    phoneNumberOrEmail: "",
    password: "",
    isValid:true,
    usernameerror:"",
    passworderror:""
  })

  const history = useHistory();
  let inputRef = useRef();
  const showIcon = () => (
    <i className="feather feather-eye" aria-hidden="true">
      <FeatherIcon icon="eye" />
    </i>
  );
  const hideIcon = () => (
    <i className="feather feather-eye-slash" aria-hidden="true">
      <FeatherIcon icon="eye-off" />
    </i>
  );
  
  const Submitlogin = async () => {
    console.log(logdata.phoneNumberOrEmail);
    console.log(logdata);
    if (logdata.phoneNumberOrEmail !== "" && logdata.password !== "") {
      console.log("input filed correct");
  
      try {
        const response = await loginapi(logdata);
        console.log(response);
        const data = response.data.accessToken;
        const id = response.data.id;
        localStorage.setItem("accessToken", data);
        localStorage.setItem("id", id);
        history.push("/dashboard");
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
    } else {
      console.log("login input field is empty");
    }
  };
  
  const handlechange = (event) => {
    const { name, value } = event.target;
    setlogdata({
      ...logdata,
      [name]: value,
    });
  };

  useEffect(()=>{

    if(logdata.phoneNumberOrEmail != "" && logdata.password != ""){
      setlogdata({
        ...logdata,
        isValid:false
      })
      console.log(logdata.isValid)
    }

  },[logdata.phoneNumberOrEmail , logdata.password])

  return (
    <>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <img className="img-fluid" src={login} alt="Logo" />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Welcome to LLT Overseas</h1>

                  <p className="account-subtitle">
                    Need an account? <Link to="/register">Sign Up</Link>
                  </p>
                  <h2>Sign in</h2>

       
                    <div className="form-group">
                      <label htmlFor="userloginusername">
                        Email <span className="login-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={logdata.phoneNumberOrEmail}
                        name="phoneNumberOrEmail"
                        onChange={handlechange}
                        id="phoneNumberOrEmail"
                        required
                      />
                      <span className="profile-views">
                        <i className="fas fa-user-circle" />
                      </span>
                    </div>
                    {logdata.usernameerror && (
                        <div className="text-danger">
                          {logdata.usernameerror}
                        </div>
                      )}
                    <div className="form-group">
                      <label htmlFor="userpassword">
                        Password <span className="login-danger">*</span>
                      </label>
                      <input
                        ref={inputRef}
                        className="form-control pass-input"
                        type="password"
                        name="password"
                        id="userpassword"
                        value={logdata.password}
                        onChange={handlechange}
                        required
                      />
                      {logdata.passworderror && (
                        <div className="text-danger">
                          {logdata.passworderror}
                        </div>
                      )}
                      <ReactPasswordToggleIcon
                        inputRef={inputRef}
                        showIcon={showIcon}
                        hideIcon={hideIcon}
                      />
                    </div>
                    <div className="forgotpass">
                      <div className="remember-me">
                        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                          Remember me
                          <input type="checkbox" name="remember" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <Link to="/forgotpassword">Forgot Password?</Link>
                    </div>
                    {  console.log(logdata.isValid)}
                    <div className="form-group">
 
                    {/* <Link > */}
                     {/* <Link to="/dashboard" > */}
                      <button
                        className="btn btn-primary btn-block"
                        type="button"
                        // disabled={userLogInInfo.isvalid}
                        // onClick={submitloginhandler}
                        disabled={logdata.isValid}
                        onClick={Submitlogin}
                      >
                        Login
                      </button>

                      {/* </Link>  */}

                    </div>


                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>

                  <div className="social-login">
                    <Link to="#">
                      <i className="fab fa-google-plus-g" />
                    </Link>
                    <Link to="/whatapplogin">
                      <i className="fa fa-whatsapp" />{" "}
                    </Link>
                    <Link onClick={() => {}} to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
