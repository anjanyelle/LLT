import React, { useEffect, useState } from 'react';
import '../normalsearch.css';

export default function AddanceSearchresult({ data }) {
    const [api , setap]=useState([])
 
    useEffect(() => {
        if (data && Array.isArray(data)) {
          // Ensure data is an array before setting the state
          setap(data);
        } else if (data && data.data && Array.isArray(data.data)) {
          // If data is an object with a 'data' property that is an array
          setap(data.data);
        }
      }, [data]);

//   const  apires = [{
//     id: 11651,
//     university: "University of North Texas",
//     name: "M.S. in Information Systems and Technologies",
//     concentration: "Project Management & Software Development, Cloud Computing, Data Management & Business Intelligence, Analytics & Artificial Intelligence, Information Processing & Security",
//     websiteURL: "http://catalog.unt.edu/preview_program.php?catoid=31&poid=13546&returnto=3439",
//     campus: "Denton,Texas",
//     country: "United States of America",
//     studyLevel: "Postgraduate",
//     duration: "24 Months",
//     intakes: "Fall, Spring",
//     entryRequirements: "•GPA: 3.0 •GRE V - 153, Q -154",
//     ieltsScore: 6,
//     tofelScore: 79,
//     pteScore: 53,
//     applicationDeadline: "Fall: 15 May,Spring: 15 Oct",
//     applicationFee: "$75",
//     scholarshipAvailable: "Yes",
//     yearlyTuitionFees: "$ 18504.00",
//     remarks: "•AACSB accredited •STEM Designated •Documents to be sent in soft. •Score reporting is required. •3 years Bachelors degree accepted from NAAC \"A\" accredited college with overall GPA of 3.0 on a U.S. grading scale.",
//     backlogRange: "0-3",
//     eslelpDetail: "•Program Available: https://international.unt.edu/content/home-page-ieli",
//     applicationMode: null,
//     detScore: null,
//     greScore: 307,
//     gmatScore: 520,
//     status: true,
//     priority: "c",
//     ieltsnoBandLessThan: 0,
//     toeflnoBandLessThan: null,
//     ptenoBandLessThan: 0
//   },{
//     id: 11651,
//     university: "University of North Texas",
//     name: "M.S. in Information Systems and Technologies",
//     concentration: "Project Management & Software Development, Cloud Computing, Data Management & Business Intelligence, Analytics & Artificial Intelligence, Information Processing & Security",
//     websiteURL: "http://catalog.unt.edu/preview_program.php?catoid=31&poid=13546&returnto=3439",
//     campus: "Denton,Texas",
//     country: "United States of America",
//     studyLevel: "Postgraduate",
//     duration: "24 Months",
//     intakes: "Fall, Spring",
//     entryRequirements: "•GPA: 3.0 •GRE V - 153, Q -154",
//     ieltsScore: 6,
//     tofelScore: 79,
//     pteScore: 53,
//     applicationDeadline: "Fall: 15 May,Spring: 15 Oct",
//     applicationFee: "$75",
//     scholarshipAvailable: "Yes",
//     yearlyTuitionFees: "$ 18504.00",
//     remarks: "•AACSB accredited •STEM Designated •Documents to be sent in soft. •Score reporting is required. •3 years Bachelors degree accepted from NAAC \"A\" accredited college with overall GPA of 3.0 on a U.S. grading scale.",
//     backlogRange: "0-3",
//     eslelpDetail: "•Program Available: https://international.unt.edu/content/home-page-ieli",
//     applicationMode: null,
//     detScore: null,
//     greScore: 307,
//     gmatScore: 520,
//     status: true,
//     priority: "c",
//     ieltsnoBandLessThan: 0,
//     toeflnoBandLessThan: null,
//     ptenoBandLessThan: 0
//   }]
  return (
    <div>
      {api.map((item, index) => (

        <div  className='cardentera'  >
        <div className="card cardtemplate" key={index} style={{height:'100%' , width:'80%'}}>
          <div className="card" style={{ height: '100%', width: '100%' }}>
            <img
              src={item.imageUrl || 'https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?w=740&t=st=1699637655~exp=1699638255~hmac=7efda3207831e43577c5984a953c67bc9bd342cc8903b491b61c4ad7a7c6ff99'}
              alt="image"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
          </div>
          <div className="cardtemplatetext" style={{ backgroundColor: '#D9E0FC' }}>
            <div>
              <div className="sameline" style={{ justifyContent: 'space-between' }}>
                <h6 className="coursename">{item.name}</h6>
                <div className="sameline normalsameline">
                  <h6>
                    <i className="fa-regular fa-heart"></i>
                  </h6>
                  <h6>
                    <i className="fa-solid fa-upload"></i>
                  </h6>
                  <h6 className="programapplybtn">Apply</h6>
                </div>
              </div>
              <div className="sameline sameline1">
                <p>
                  <i className="fa-solid fa-building-columns"></i> {item.university}
                </p>
                <p>
                  <i className="fa-solid fa-comments-dollar"></i> fee: {item.yearlyTuitionFees} <i className="fa-solid fa-download"></i>
                </p>
              </div>
              <div className="sameline sameline1">
                <p>
                  <i className="fa-solid fa-calendar-days"></i> Duration: {item.duration}
                </p>
                <p>
                  <i className="fa-solid fa-money-bills"></i> {item.country}
                </p>
              </div>
              <div className="sameline samelinee" style={{ gap: '5px' }}>
                <p>
                  <i className="fa-solid fa-building-columns"></i> Intakes{' '}
                </p>
                <span>
                  {' '}
                  <strong> {item.intakes} </strong>
                </span>
              </div>
            </div>
            <div className="cardbox">
              <div className="card normalcardbox">
                <div className="diffline">
                  <p>
                    <strong>IELTS </strong>
                  </p>
                  <hr></hr>
                  <p>
                    <strong> {item.ieltsScore} </strong>
                  </p>
                </div>
              </div>
              <div className="card normalcardbox">
                <div className="diffline">
                  <p>
                    <strong>TOEFL </strong>
                  </p>
                  <hr></hr>
                  <p>
                    <strong> {item.toeflScore} </strong>
                  </p>
                </div>
              </div>
              <div className="card normalcardbox">
                <div className="diffline">
                  <p>
                    <strong>CELPIP </strong>
                  </p>
                  <hr></hr>
                  <p>
                    <strong> {item.pteScore} </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}
