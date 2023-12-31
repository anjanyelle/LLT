import React, { useEffect, useRef, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactPasswordToggleIcon from "react-password-toggle-icon";
import { login } from "../../imagepath";
import { loginapi } from "./api";
import { Link } from "react-router-dom";
import axios from "axios";
import FeatherIcon from "feather-icons-react";
import "./login.css";
import { useHistory } from "react-router-dom";
import OtpInput from "./OtpInput";

const Whatapplog = () => {
  let inputRef = useRef();
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

  const [handlewhatapp, sethandlewhatapp] = useState(true);
  const [value, setValue] = useState();
  const [dataIpv6, setdataIpv6] = useState({});
  const [dataIpv4, setdataIpv4] = useState("");



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
                {handlewhatapp ? (
                  <>
                    <div className="login-right-wrap">
                      <h1>Welcome to Oxyloans</h1>
                      <p className="account-subtitle">
                        Need an account? <Link to="/register">Sign Up</Link>
                      </p>

                      <h2>Sign in</h2>
                      <div className="phoneinput form-group">
                        <label>
                          Whatsapp number
                          <span className="login-danger">*</span>
                        </label>
                        <PhoneInput
                          className="phoneinputfiled form-control"
                          value={value}
                          onChange={setValue}
                        />
                      </div>
                      <div className="forgotpass">
                        <Link to="/forgotpassword">Forgot Password?</Link>
                      </div>
                      <div className="form-group">
                        <Link to="/dashboard">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                    
                        >
                          Send OTP
                        </button>
                        </Link>
                      </div>

                      {/* </form> */}
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
                        <Link to="/whatapplogin">
                          <i className="fa fa-whatsapp  " />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="login-right-wrap">
                      <h1>Welcome to Oxyloans</h1>
                      <p className="account-subtitle">
                        Need an account? <Link to="/register">Sign Up</Link>
                      </p>
                      <h2>Otp verification</h2>
                      <div className="texts">
                        <OtpInput />
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-primary btn-block mt-4"
                          type="submit"
                          onClick={() => sethandlewhatapp(false)}
                        >
                          Submit
                        </button>
                      </div>
                      {/* </form> */}
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
                        <Link to="/whatapplogin">
                          <i className="fa fa-whatsapp  " />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatapplog;
