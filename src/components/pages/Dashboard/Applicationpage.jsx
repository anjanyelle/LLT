import React, { useEffect, useState } from "react";
import SideBar from "../../SideBar/SideBar";
import './stytle.css'
import Header from "../../Header/Header";
import { Link } from "react-router-dom";
import { avatar02 } from "../../imagepath";
import FeatherIcon from "feather-icons-react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import NormalCard from "./Cards/NormalCard";
import Cards from "./MyApplicationProgress/Cards";
import Discussion from "./Cards/Discussion";



const Applicationpage = () => {


  return (
    <>
      <div className="main-wrapper">
        {/* Header */}
        <Header />
        {/* Sidebar */}
        <SideBar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title"></h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Profile</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-12">
                {/* <div className="profile-header">
                  <div className="row refer-notepoints "> */}
                {/* <ul style={{ listStyle: "block" }}>
                      <li className="disPlayNone">
                        For more information and frequently asked questions,
                        please visit
                        <a
                          href="https://sites.google.com/oxyloans.com/referrer-faq/home"
                          target="_blank"
                        >
                          {" "}
                          FAQS / MORE{" "}
                        </a>
                      </li>
                    </ul> */}

                {/* </div>
                </div> */}

                <div class="card">
                  <div class="card card11" >
                    <div class="card-body">
                      This is some text within a card body.
                      {/* <img src="https://images.unsplash.com/photo-1619139079319-ba9ff149a8c2?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhbmZvcmQlMjB1bml2ZXJzaXR5fGVufDB8fDB8fHww"   alt="image_university" className="imageofuniversity"  /> */}
                    </div>
                  </div>
                  <div class="card-body">
                    <h5>MS in Computer Science at Stanford University</h5>
                    <div className="sameline gap-2">
                      <p ><i class="fa-solid fa-building-columns"></i>  Stanford University</p>
                      <p className="marginbuttom"><i class="fa-solid fa-award"></i> Masters Program</p>
                      <p className="marginbuttom"><i class="fa-solid fa-book"></i>  Computer Science</p>
                    </div>

                    <p className="marginbuttom color">View University  <i class="fa-solid fa-chevron-right"></i></p>

                    <hr></hr>
                    <button className="btn btn-info btan AskOurExpert"><i class="fa-regular fa-heart"></i> Shortlisted</button>

                    <button className="btn btn-success btan AskOurExpert"><i class="fa-solid fa-user-graduate"></i> Ask Our Expert</button>    <button className="btn btn-info btan btnpos"><i class="fa-solid fa-users"></i>  View Group</button>

                  </div>


                </div>
                <div className="profile-menu">
                  <ul className="nav nav-tabs nav-tabs-solid">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        data-bs-toggle="tab"
                        to="#Overview"
                      >
                        <i class="fa-brands fa-searchengin"></i> Overview
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        // className="nav-link"
                        data-bs-toggle="tab"
                        to="#Overview"
                      >
                        {/* Overview */}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="#CourseHighlights"
                      >
                        <i class="fa-solid fa-book"></i> Course Highlights
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        data-bs-toggle="tab"
                        to="#Costs"
                      >
                        <i class="fa-solid fa-comment-dollar"></i> Costs
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        data-bs-toggle="tab"
                        to="#Pre-Requisites"
                      >
                        <i class="fa-solid fa-sheet-plastic"></i>  Pre-Requisites
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        data-bs-toggle="tab"
                        to="#Students"
                      >
                        <i class="fa-solid fa-graduation-cap"></i> Students
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        data-bs-toggle="tab"
                        to="#Discussions"
                      >
                        <i class="fa-regular fa-user"></i>  Discussions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link "
                        data-bs-toggle="tab"
                        to="#FAQ"
                      >
                        <i class="fa-solid fa-circle-question"></i> FAQ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="#BulkInvite_tab"

                      >
                        {/* Bulk Invite */}
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                      <Link
                        className="nav-link"
                        data-bs-toggle="tab"
                        to="#setupneo_tab"
                      >
                        Setup Neo Bank
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="tab-content profile-tab-cont">
                  {/* Change Password Tab */}
                  <div id="BulkInvite_tab" className="tab-pane fade">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-header">
                          <p>
                            <code>Note:</code> The file format should be .xlsx,
                            The columns in Excel should be arranged as follows:
                            Column 1: Name, Column 2: Email, Column 3: Phone
                            Number.
                          </p>
                        </div>
                        <h5 className="card-title my-lg-2">Bulk Upload</h5>
                        <div className="row  text-center w-100 h-50">
                          <div className="col-md-12 col-lg-12 d-flex justify-content-center">
                            <form>
                              <div className="row">

                                <a
                                  //  href={url}   
                                  //  <button  

                                  className="btn btn-outline-primary my-lg-3 border-2 "
                                  type="button"
                                >
                                  Browse From Computer
                                  {/* </button> */}   </a>


                                <button className="btn btn-outline-warning my-lg-3 border-2 ">
                                  Invite Through Gmail
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Change Password Tab */}
                  {/* Change Nominee Tab */}
                  <div id="setupneo_tab" className="tab-pane fade">
                    <div className="card">
                      <div className="card-header">
                        <p>
                          How to launch a NeoBank in 3 steps,detail site with
                          videos
                          <a
                            href="https://sites.google.com/oxyloans.com/neobank/home"
                            target="_blank"
                          >
                            : Click Here
                          </a>
                        </p>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Set-up a NeoBank.</h5>
                        <div className="row">
                          <div className="col-md-12 col-lg-12">
                            <p className="neo-Oxy ">Welcome to OxyLoans !</p>

                            <p className="neo-Oxycontent1 ">
                              In 2019-Feb, we got the RBI NBFC-P2P license.
                            </p>
                            <p className="neo-Oxycontent1 ">
                              Using this license, We are able to offer p2p
                              lending services.
                            </p>

                            <p className="neo-Oxycontent1">
                              In p2p lending lenders & borrowers, both are
                              Individuals/companies/PAN card holders.
                            </p>
                            <p className="neo-Oxycontent2">
                              Using the following referral links, you can launch
                              the p2p lending platform which we are calling a
                              Neo bank.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Change Nominee Tab */}
                  {/* ///profile Tab */}
                  <div id="Overview" className="tab-pane fade show active">
                    <div className="card ">
                      <div className="card-body">
                        <h5 className="card-title">About</h5>
                        <hr></hr>
                        <div class="container">
                          <div class="row">
                            <div class="col-sm-8">   
                            {/* <h5>About university</h5> */}
                               <div className="card cardabout cardcolornormal">
                            <div className="card-body">
                              <div className="carddatasameline">
                              <i class="fa-solid fa-building-columns"></i>
                              <div className="carddataforuni">
                                <p><strong>Public</strong></p>
                                <p>University Type</p>

                              </div>
                              <i class="fa-solid fa-ranking-star"></i>
                              <div className="carddataforuni">
                                <p><strong>269</strong></p>
                                <p>US  Global Rank</p>

                              </div>
                              <i class="fa-solid fa-hotel"></i>
                              <div className="carddataforuni">
                                <p><strong>$43,59</strong></p>
                                <p>Average Living Expenses</p>

                              </div>
                              </div>
                            </div>
                          </div>
                          
                          
                          <Card1 title="Top Reasons to Study in the Northern Illinois University"  data="Northern Illinois University (NIU) is a public research university in DeKalb, Illinoi"     heading="Strong academic reputation: " data1="Strong academic reputation: Northern Illinois University is a highly-ranked university with a strong focus on undergraduate education"
                         heading1="Vibrant campus life:" proje=" Northern Illinois University has a vibrant campus life with a variety of student organizations, intramural sports, and cultural events."/>
                          <p> <strong>Stanford University </strong> More than any other field, computer technology has shaped the modern world. Things considered common these days, like the <strong>Internet, Smart Phones, Cyber security systems,</strong> and more, wouldn’t have been possible without computing.</p>

 
 </div>
                            <div class="col-sm-4">   <div id="CourseHighlight" className="tab-pane fade show active">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Course </h5> <Card1 title="Study in the Northern" heading="Stanford University : " data="Stanford University is a top-ranked university in the world. It is a great place to get a world-class"   data1="Several reasons add to the popularity of international students' demand to study at Stanford University."/>

                          <div className="row">
                            <div class="row">
                              <div className="margintop">
                             
                              </div></div>
                          </div>
                        </div>
                      </div>
                    </div></div>
                          </div>
                          </div>
                    
                        </div>
                      </div>
                    </div>
                    {/* ///profile Tab */}

                    <div id="CourseHighlights" className="tab-pane fade show active">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Courses at Stanford University</h5>

                          <div className="coures">
                            <NormalCard  universityname="MS in Computer Science"
                            universityncourse="School of Engineering"
                            data="Admit Predictor"
                            datade="Get to know a close estimation of your admit chances for this course."
                          />   
<NormalCard  universityname="MS in Computational and Mathematical Engineering"
                            universityncourse="School of Engineering"
/>   
<NormalCard  universityname="MS in Electrical Engineering"
                            universityncourse="School of Engineering"
/>   
<NormalCard  universityname="MS in Computer Science"
                            universityncourse="School of Engineering"
/>   

                          </div>
                          <div className="row">
                            <div class="row">
                              <div className="margintop">
                                <p>The masters in computer science course at the Stanford University is usually offered for 24 months. Through MS in computer science course at Stanford University, the students will receive the knowledge and experience that will help them demonstrate domain expertise and the ability to either continue educational training at the doctoral level or immediately work in the key economic sectors, such as government, business, industry, health care, and education. MS in CS at Stanford University also brings several career opportunities after course completion.</p>
                              </div></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="Costs" className="tab-pane fade show active">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Costs</h5>
                          <div class="card">

                            <Card2 subtext="Annual tuition fees" free="$35,9 / year"  cardtitle="Course Highlights"/>

                          </div>

                          <div className="row">
                            <div class="row">
                              <div className="margintop">
                                <p>The masters in computer science course at the Stanford University is usually offered for 24 months. Through MS in computer science course at Stanford University, the students will receive the knowledge and experience that will help them demonstrate domain expertise and the ability to either continue educational training at the doctoral level or immediately work in the key economic sectors, such as government, business, industry, health care, and education. MS in CS at Stanford University also brings several career opportunities after course completion.</p>
                              </div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="Students" className="tab-pane fade show active">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Students</h5>
                          <div class="card">

                            <Cards  international="Total International Students in the university 966"  subtext="Northern Illinois " free="International Students" cardtitle="Premium LLT profiles" />
                            
                          </div>

                          <div className="row">
                            <div class="row">
                              <div className="margintop alumin">
                                <strong>Alumni :</strong>


                                <p>Northern Illinois University has a distinguished alumni body, including:</p>
                                <p>distinguished alumni body, including:</p>
                                <p>University has a distinguished alumni body, including:</p>
                                <p> Illinois University has a distinguished alumni body, including:</p>
                              </div></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="Discussions" className="tab-pane fade show active">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Discussions</h5>
                          <div class="card">

                            <Discussion  international="Total International Students in the university 966"  subtext="Northern Illinois " free="International Students" cardtitle="Related Discussion for the Universities" />
                            
                          </div>

                          <div className="row">
                            <div class="row">
                              <div className="margintop alumin">
                                <strong>Alumni :</strong>


                                <p>Northern Illinois University has a distinguished alumni body, including:</p>
                                <p>distinguished alumni body, including:</p>
                                <p>University has a distinguished alumni body, including:</p>
                                <p> Illinois University has a distinguished alumni body, including:</p>
                              </div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Main Wrapper */}
      </>
      );
};

      export default Applicationpage;
