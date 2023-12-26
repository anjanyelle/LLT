import React, { useEffect } from 'react'
import '../normalsearch.css'
import { handlefavoriteapi } from '../../HttpRequest/afterlogin'

export default function ProgramSearch({data}) {     

const hadlefavorite=async(UniversityId)=>{
  const response =await handlefavoriteapi(UniversityId)
  console.log(response)
}
  useEffect(()=>{

    if(data != ""){


    }
  },[data])

  
  return (
    <div>
<div>
  {data.map((item, index) => {
    // Assuming item.entryRequirements contains the GPA information
    var infoString = item.entryRequirements || '';

    // Use regular expression to match GPA: followed by a space and the GPA value
    var match = infoString.match(/GPA:\s*([0-9]\.[0-9]+)/);

    // Extract the GPA value if there is a match
    var gpa = match ? match[1] : '';

    console.log("GPA:", gpa);

    return (
        
        <div class="card cardtemplate">
                         <div class="card " style={{height:'100%', width:'100%'}}>
                           <img src='https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?w=740&t=st=1699637655~exp=1699638255~hmac=7efda3207831e43577c5984a953c67bc9bd342cc8903b491b61c4ad7a7c6ff99'   alt='imag'   style={{height:'100%' , width:'100%', objectFit:'contain'}}/>
                         </div>
                         <div class=" cardtemplatetext"   style={{backgroundColor: '#D9E0FC',}}>
                          <div>
                          {/* </div> */}  
                           <div className="sameline " style={{justifyContent:'space-between'}}>
                           <h6 className="coursename">{item.name}</h6>
                         <div className="sameline normalsameline">
                          <h6><div  onClick={()=>hadlefavorite(item.id)}><i class="fa-regular fa-heart"></i></div></h6>
                          <h6><i class="fa-solid fa-upload"></i></h6>
                          <h6 className="programapplybtn">Apply</h6>
                         </div>
                           </div>
                           <div className="sameline sameline1">
                            <p><i class="fa-solid fa-building-columns"></i> {item.university}</p>
                            <p><i class="fa-solid fa-comments-dollar"></i>  fee :{item.yearlyTuitionFees}  <i class="fa-solid fa-download"></i></p>
                           </div>
                           <div className="sameline sameline1">
                            <p><i class="fa-solid fa-calendar-days"></i> Duration : {item.duration}</p>
                            <p><i class="fa-solid fa-money-bills"></i>  {item.country}</p>
                           </div>
                           <div className="sameline samelinee"  style={{gap:'5px'}}>
                            <p><i class="fa-solid fa-building-columns"></i> Intakes </p>
                            <span> <strong> {item.intakes} </strong></span>
        
                            <p><i class="fa-solid fa-comments-dollar"></i> ApplicationFee </p>
                            <span> <strong> {item.applicationFee} </strong></span>
                           </div>
                           <div className="sameline samelinee"  style={{gap:'5px'}}>
                     
        
                           </div>
                           </div>
        
                           <div className="cardbox">
        
                           <div className="card normalcardbox">
                              <div className="diffline">
                              <p><strong>GPA </strong></p>
                                  <hr></hr>
                                 <p><strong> {gpa} </strong></p>
                                 </div>
                            </div>
        
                            <div className="card normalcardbox">
                              <div className="diffline">
                              <p><strong>GRE </strong></p>
                                  <hr></hr>
                                 <p><strong> {item.greScore} </strong></p>
                                 </div>
                            </div>
                            <div className="card normalcardbox">
                              <div className="diffline">
                              <p><strong>IELTS </strong></p>
                                  <hr></hr>
                                 <p><strong> {item.ieltsScore} </strong></p>
                                 </div>
                            </div>
                            <div className="card normalcardbox">
                              <div className="diffline">
                              <p><strong>TOEFL </strong></p>
                                  <hr></hr>
                                 <p><strong> {item.tofelScore} </strong></p>
                                 </div>
                            </div>
        
                            <div className="card normalcardbox">
                              <div className="diffline">
                              <p><strong>DET </strong></p>
                                  <hr></hr>
                                 <p><strong> 2.0 </strong></p>
                                 </div>
                            </div>
                            <div className="card normalcardbox">
                              <div className="diffline">
                              <p><strong>PTE </strong></p>
                                  <hr></hr>
                                 <p><strong> {item.pteScore} </strong></p>
                                 </div>
                            </div>
                            
        
                           </div>
                         </div>
                       </div>
    );
  })}
</div>
    </div>
  )
}
