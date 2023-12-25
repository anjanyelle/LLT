import React, { useEffect } from 'react'
import '../normalsearch.css'

export default function Basedonprofile({data}) {     

  useEffect(()=>{

    if(data != ""){
 console.log(data)

    }
  },[data])
  return (
    <div>
   {data.map((item, index) => (
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
                  <h6><i class="fa-regular fa-heart"></i></h6>
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

                   </div>
                   </div>

                   <div className="cardbox">
                    <div className="card normalcardbox">
                      <div className="diffline">
                      <p><strong>IELTS </strong></p>
                          <hr></hr>
                         <p><strong> {item.ieltsScore} </strong></p>
                         </div>
                    </div>
                    <div className="card normalcardbox">
                      <div className="diffline">
                      <p><strong>IELTS </strong></p>
                          <hr></hr>
                         <p><strong> {item.tofelScore} </strong></p>
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
                         <p><strong> {item.pteScore} </strong></p>
                         </div>
                    </div>

                   </div>
                 </div>
               </div>))}
    </div>
  )
}
