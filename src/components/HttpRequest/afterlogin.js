import axios from "axios";
import { data } from "jquery";
const userisIn = "local";
let API_BASE_URL =
userisIn == "local"
    ? "http://llt-app-env-1.eba-nkkpwhvd.ap-south-1.elasticbeanstalk.com/api/v1/users/"
    : "https://fintech.oxyloans.com/oxyloans/v1/user/";

const handleApiRequestAfterLogin = async (
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



    const accessToken=localStorage.getItem("accessToken")
export  const token = accessToken;

const  id=localStorage.getItem("id")
export  const userId = id;


export  const educationalDetails =async(educationug, educationintermediate,educationssc)=>{

       var data=[{

            id: userId,
            type: educationug.type,
            instituteName: educationug.instituteName,
            instituteAddress: educationug.instituteAddress,
            boardOfStudy: educationug.boardOfStudy,
            startDate: educationug.startDate,
            endDate: educationug.endDate,
            marksGained: educationug.marksGained,
            scale: educationug.scale,
            numberOfBacklogs: educationug.numberOfBacklogs != "" ? educationug.numberOfBacklogs : "0",
            userId: userId

       },
       {

        id: userId,
        type: educationintermediate.type ? educationintermediate.type : "",
        instituteName: educationintermediate.instituteName ? educationintermediate.instituteName : "",
        instituteAddress: educationintermediate.instituteAddress ? educationintermediate.instituteAddress : "",
        boardOfStudy: educationintermediate.boardOfStudy ? educationintermediate.boardOfStudy  : "",
        startDate: educationintermediate.startDate ? educationintermediate.startDate : "",
        endDate: educationintermediate.endDate ? educationintermediate.endDate : "",
        marksGained: educationintermediate.marksGained  ? educationintermediate.marksGained : "",
        scale: educationintermediate.scale ? educationintermediate.scale  : "",
        numberOfBacklogs: educationintermediate.numberOfBacklogs ? educationintermediate.numberOfBacklogs : "0",
        userId: userId
      
      },
      {

        id: userId,
        type: educationssc.type ? educationssc.type : "",
        instituteName: educationssc.instituteName !="" ? educationssc.instituteName : "",
        instituteAddress: educationssc.instituteAddress !="" ? educationssc.instituteAddress : "",
        boardOfStudy: educationssc.boardOfStudy !="" ? educationssc.boardOfStudy  : "",
        startDate: educationssc.startDate  !="" ? educationssc.startDate : "",
        endDate: educationssc.endDate !="" ? educationssc.endDate : "",
        marksGained: educationssc.marksGained  !="" ? educationssc.marksGained : "",
        scale: educationssc.scale  !="" ? educationssc.scale  : "",
        numberOfBacklogs: educationssc.numberOfBacklogs !="" ? educationssc.numberOfBacklogs : "0",
        userId: userId  
      
      }
    ] 
    const response = await  handleApiRequestAfterLogin(
        "post",
        API_BASE_URL,
        "educational-details",
        data
    );
       return  response;
}

export  const handleuploadprofile=async(profiledatafiled)=>{
  console.log(profiledatafiled)
  // var data={

  // }
  var data=profiledatafiled
  const response = await  handleApiRequestAfterLogin(
    "POST",
    API_BASE_URL,
    "profile-details",
    data
  );  return response;

  
}

export  const handelsearchapi=async(userdata)=>{
  
  console.log(userdata);
  const response = await axios.get(`http://llt-app-env-1.eba-nkkpwhvd.ap-south-1.elasticbeanstalk.com/api/v1/master-data/adv-search?studyLevel=${userdata.abroad}&greScore=${userdata.greScore}&tofelScore=${userdata.tofelScore}&gmatScore=${userdata.gmatScore}&ieltsScore=${userdata.ieltsScore}&pteScore=${userdata.pteScore}&applicationFeeFlag=${userdata.applicationFeeFlag}&scholarshipAvailableFlag=${userdata.scholarshipAvailableFlag}&minYearlyTuitionFees=${userdata.minYearlyTuitionFees}&maxYearlyTuitionFees=${userdata.maxYearlyTuitionFees}`);
  return response;
}
export const handelsearch = async (concentration ,name, country , intake , university) => {
  // data={
  //   name: "engineering",
  //   university : "(Shorelight) Johns Hopkins University",
  //   country: "United States of America"
  // }
  console.log(concentration , name, country , intake , university)
  const response = await axios.get(`http://llt-app-env-1.eba-nkkpwhvd.ap-south-1.elasticbeanstalk.com/api/v1/master-data/search?${name ? `&name=${name}` : ''}${country ? `&country=${country}` : ''}${university ? `&university=${university}` : ''}&page=0&size=10`);
  return response;
};
export const workexperience =async(data)=>{ 

  const data1=data

   const response = await  handleApiRequestAfterLogin(
    "POST",
    API_BASE_URL,
    "workexperience",
    data1,
    token
  );
  return response;
}

export  const handprofileapi=async()=>{
  const    response = await axios.get("http://llt-app-env-1.eba-nkkpwhvd.ap-south-1.elasticbeanstalk.com/api/v1/master-data/profile-based-search?name=engineering&userId=11101&page=0&size=10")

  
  return   response;
}