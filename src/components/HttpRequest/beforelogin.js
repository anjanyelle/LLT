import axios from "axios";
const userisIn = "local";
let API_BASE_URL =
  userisIn == "local"
    ? "http://llt-app-env-1.eba-nkkpwhvd.ap-south-1.elasticbeanstalk.com/api/v1/auth/"
    : "";

const handleApiRequestBeforeLogin = async (
  method,
  BASE_URL,
  End_Url,
  POSTDATA
) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${End_Url}`,
      data: POSTDATA,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      return response;
    }
  } catch (error) {
    return error;
  }
};

export const userloginSection = async (email, password) => {
  const checkLoginMode = email.includes("@") == true ? true : false;
  const postdata =
    checkLoginMode === true
      ? JSON.stringify({ password: password, email: email })
      : JSON.stringify({
          password: password,
          mobileNumber: email,
        });

  const response = await handleApiRequestBeforeLogin(
    "POST",
    API_BASE_URL,
    "login?grantType=PWD",
    postdata
  );

  if (response.status == 200) {
    const accessTokenFromHeader = response.headers["accesstoken"];
    sessionStorage.setItem("accessToken", accessTokenFromHeader);
    sessionStorage.setItem("userId", response.data.id);
    return response;
  } else {
    return response;
  }
};


export const loginapi=async(logdata)=>{

 var data = {
  phoneNumberOrEmail: logdata.phoneNumberOrEmail,
  password: logdata.password
  }

  const response = await  handleApiRequestBeforeLogin(

  "POST",
    API_BASE_URL,
    'login',
    data
  )
  return response;
}
export   const registerapi= async(filed)=>{
    
  var data={
    id: 0,
    firstName: filed.firstName,
    lastName: filed.lastName,
    email: filed.email,
    password: filed.password,
    confirmPassword: filed.confirmPassword,
    phoneNumber: filed.phoneNumber,
    whatsappNumber: filed.whatsappNumber,
    dateOfBirth: filed.dateOfBirth,
    role: "admin",
    yourCollageName: filed.yourCollageName,
    city: filed.city,
  }

  response = await    handleApiRequestBeforeLogin(
    "POST",
    API_BASE_URL,
  
    `signup`,
    data
  )
  return response;

}
