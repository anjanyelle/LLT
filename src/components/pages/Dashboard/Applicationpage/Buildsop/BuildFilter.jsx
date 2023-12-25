import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../../Header/Header";
import SideBar from "../../../../SideBar/SideBar";
import Footer from "../../../../Footer/Footer";
import "../../../Reusecomponent/applicationstatus.css";
import "../../../Dashboard/Step.css";
import { Upload } from "feather-icons-react/build/IconComponents";
import { Space, Alert } from "antd";
import Tab from "../../../Reusecomponent/Tab";
import AntTab from "../../../Reusecomponent/AntTab";
import Buildtable from "./Buildtable";
import Introduction from "./Introduction";

const BuildFilter = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [userdata, setuserdata] = useState({
    profileData: {},
    viewmore: false,
  });
  const [files, setfile] = useState(null);
  const [queryfiledinput, setqueryfiledinput] = useState("");
  const [activeTab, setActiveTab] = useState("-tab-pane");
  const [forceRerender, setForceRerender] = useState(false);
  const [isActive, setActive] = useState(true);
  const [isActiveGre, setActiveGre] = useState(false);
  // const  [isActiveDoc , setActiveDoc]=useState(true)
  const [isActiveEdu, setActiveEdu] = useState(false);

  const [isActiveWork, setActiveWork] = useState(false);
  const [current, setCurrent] = useState("");
  // const
  const [isActiveDoc, setActiveDoc] = useState(false);
  const onChange = (value) => {
    console.log("onChange:", value);
    setActiveTab(value);
    setForceRerender((prev) => !prev); // Toggle the dummy state
  };

  useEffect(() => {});

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // const handleButtonClick = () => {
  //   setActive(!isActive);
  // };

  const hadleviewMore = () => {
    setuserdata({
      ...userdata,
      viewmore: !userdata.viewmore,
    });
  };
  // console.log(userdata);

  const handleWriteClick = async () => {
    handleimageupload();

    const response = writequery(userdata, queryfiledinput);
    response.then((data) => {
      console.log(data);
      if (data.request.status == 200) {
        alert(data.status);
      } else {
        alert("error");
      }
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setqueryfiledinput({
      ...queryfiledinput,
      [name]: value,
    });
  };

  useEffect(() => {
    //  window.location.reload()
  }, []);

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
              <div
                className="row align-items-center"
                style={{ marginTop: "2rem", padding: "1rem" }}
              >
                <div className="col">
                  <h3 className="page-title">STATEMENT OF PURPOSE </h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">STATEMENT OF PURPOSE</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="student-group-form " style={{ marginTop: "3rem" }}>
              <div className="card Applcationscardgrid">
                <div className="row ">
                  <div className="card h-60 cardbuild ">
                    <div className="col divcenter">
                      <img src="..." className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-center margintopcss">
                        Liveen Madhava
                      </h4>
                      <p
                        className="card-text text-start fw-bold mb-1 "
                        style={{ fontFamily: "sans-serif" }}
                      >
                        {" "}
                        <i class="fa-solid fa-envelope"></i>{" "}
                        liveeenmadhava@gmail.com
                      </p>
                      <div className="sameline linespace">
                        <p className="card-text text-start fw-bold mb-1">
                          <i class="fa-solid fa-phone"></i> +91 8843523412
                        </p>
                      </div>

                      {/* <p  className="card-text text-start fw-bold mb-1 ml-2"><i class="fa-solid fa-phone"></i> Shiva Krishna (Study Advisor)</p> */}
                      <div className="sameline linespace">
                        <p className="card-text text-start fw-bold mb-1">
                          {" "}
                          <i class="fa-solid fa-mars-and-venus"></i> Female
                        </p>
                        <p className="card-text text-start fw-bold mb-1">
                          {" "}
                          <i class="fa-regular fa-calendar-days"></i> 22-04-1999
                        </p>
                      </div>
                      <div className="boxcenter">
                      <p className="studentIdbutton">StudentID :12312</p>
                    </div>
                  </div>{" "}
                  <div className="buttonscrollrender"  style={{marginTop: '1rem',}}>
                    {/* <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <Link
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            to="#profile_tab"
            role="tab"
          >
            Educt
          </Link>
        </div> */}

                    {/* <p id="Study">Educt</p>
        <p id="Money">Educt</p>
        <p id="Job">Educt</p> */}
                    <div
                      className={`button-container ${isActive ? "active" : ""}`}
                    >
                      <span className="buttonspan"></span>
                      
                      <a  href="#profile">
                      <div
                        className="buttontabpan"
                        onClick={() => {
                          setActive(!isActive);
                          setActiveDoc(false);
                          setActiveEdu(false);
                          setActiveGre(false);
                          setActiveTab(false);
                          onChange("education-tab");
                        }}
                      >
                        {/* Eduction */}
                        Introduction
                      </div>
                      </a>
                    </div>
                    <div
                      className={`button-container mt-3 ${
                        isActiveEdu ? "active" : ""
                      }`}
                    >
                      <span className="buttonspan"></span>
                      <a  href="#background">
                      <div
                        className="buttontabpan"
                        onClick={() => {
                          setActive(false);
                          setActiveDoc(true);
                          setActiveEdu(false);
                          setActiveGre(false);
                          setActiveTab(false);
                          onChange("profile-tab-pane");
                        }}
                      >
                        Background 
                      </div>
                      </a>
                    </div>
                    <div
                      className={`button-container mt-3 ${
                        isActiveWork ? "active" : ""
                      }`}
                    >
                      <span className="buttonspan"></span>
                      <div
                        className="buttontabpan"
                        onClick={() => {
                          setActiveWork(!isActiveWork);
                          onChange("experience-tab");
                        }}
                      >
                        Why this course
                      </div>
                    </div>
                    <div
                      className={`button-container mt-3 ${
                        isActiveDoc ? "active" : ""
                      }`}
                    >
                      <span className="buttonspan"></span>
                      <div
                        className="buttontabpan"
                        onClick={() => {
                          setActiveDoc(!isActiveDoc);
                          onChange("-tab-pane");
                        }}
                      >
                        Documents
                      </div>
                    </div>
                    <div
                      className={`button-container mt-3 ${
                        isActiveGre ? "active" : ""
                      }`}
                    >
                      <span className="buttonspan"></span>
                      <div
                        className="buttontabpan"
                        onClick={() => {
                          setActiveGre(!isActiveGre);
                          onChange("document-tab");
                        }}
                      >
                        Test Scores
                      </div>
                    </div>
                  </div>
                    </div>

                 
                </div>

                <div className="card">
                  <div className="card-header">STATEMENT OF PURPOSE</div>
                  {/* <div className="card-body">
                    <blockquote className="blockquote mb-0"> */}
                      {/* <p>
                        A well-known quote, contained in a blockquote element.
                      </p> */}
                      {/* <Buildtable />
                      <h6 id="profile">STATEMENT OF PURPOSE :-</h6>
                    </blockquote>
                    <p style={{ marginTop: "1rem" }}>
                      In the scenario where you have a background in mechanical
                      engineering and professional experience in the mechanical
                      field but are looking to transition to a master's in
                      Computer Science and Engineering (CSE), it's crucial to
                      effectively communicate your motivations, relevant skills,
                      and how your unique background enhances your candidacy.
                    </p>
                    <br></br>
                    <h6>Why this Course - Key Emphasis Section :-</h6>
                    <p>
                      <strong >Introduction:</strong> In the introduction, you
                      want to grab the reader's attention by clearly stating the
                      academic field you are passionate about. Rather than
                      beginning with personal details, dive into the subject
                      matter. Explain what aspects of this field interest you
                      and why. This could include specific experiences, classes,
                      or personal moments that sparked your interest. Convey
                      your enthusiasm for the subject and provide a brief
                      glimpse into what you hope to achieve within this domain.
                    </p>
                    <br></br>
                    <h6>Mistakes that need to be taken care of:-</h6>
                    <ul>
                      <br></br>
                      <li id="background">
                        <strong>Avoid Ambiguity:</strong> Clearly articulate why
                        this field captures your interest. Vague statements may
                        leave the reader unsure about your genuine passion.
                      </li>
                      <li>
                        <strong>Steer Clear of Clichés: </strong>Be original in
                        expressing your interest. Avoid clichés that might make
                        your introduction sound generic.
                      </li>
                    </ul>
                    <br></br>
                    <p>
                      <strong>Background:-</strong> This section is an
                      opportunity to showcase your academic and, if applicable,
                      professional journey. Detail your academic achievements,
                      focusing on relevant courses or projects that have
                      prepared you for the desired program. If you have work
                      experience, highlight how it has contributed to your
                      skills and knowledge. In the case of extracurricular
                      activities, emphasize those that demonstrate skills
                      applicable to the academic and professional world.
                    </p>
                    <p>
                      <strong>Mistakes that need to be taken care of:</strong>
                    </p>
                    <p>
                      <strong>Irrelevant Details:- </strong>While providing your
                      background, stay focused on elements that directly
                      contribute to your suitability for the program. Avoid
                      unnecessary details.{" "}
                    </p>
                    <p>
                      <strong>Overemphasis on Grades:- </strong> While academic
                      achievements are important, balance the discussion with
                      other aspects of your background to present a holistic
                      picture.
                    </p>
                    <div class="alert alert-info" role="alert">
                      <p>
                        <strong>
                          Why this Course - Key Emphasis Section :-
                        </strong>
                      </p>
                      <p>
                        <strong>What to Include:- </strong>
                      </p>
                      <p>
                        <strong>1. Motivation for Transition:-</strong> Clearly
                        articulate your motivation for transitioning from
                        mechanical engineering to CSE. Explain the factors that
                        led to this decision, such as a growing interest,
                        industry trends, or a desire for a new challenge.
                      </p>
                      <p>
                        <strong>
                          2. Relevant Skills from Mechanical Engineering::-
                        </strong>
                        Highlight skills from your mechanical engineering
                        background that are transferable to CSE. This could
                        include problem-solving, analytical thinking, project
                        management, or any programming skills you may have
                        developed.
                      </p>
                      <p>
                        <strong>
                          3. Professional Experience in Mechanical Field:-
                        </strong>{" "}
                        Discuss your professional experience in the mechanical
                        field. Emphasize projects, responsibilities, or
                        achievements that showcase your adaptability, technical
                        prowess, and any intersection with CSE concepts or
                        technologies.
                      </p>
                      <p>
                        <strong>
                          4. Self-Learning and Skill Development::-
                        </strong>{" "}
                        If applicable, mention any self-learning initiatives,
                        online courses, or projects you undertook to build
                        foundational CSE skills. This demonstrates your
                        proactive approach to acquiring the necessary knowledge.{" "}
                      </p>
                      <p>
                        <strong>5. Alignment with Career Goals:-</strong>{" "}
                        Clearly state how the master's program in CSE aligns
                        with your career goals. Discuss specific aspects of the
                        program, such as courses, specializations, or research
                        opportunities, that will help you achieve your
                        objectives in the tech industry.
                      </p>
                      <p>
                        <strong>How to Pen It:</strong>
                      </p>
                      <li>
                        Begin by expressing your motivation for transitioning
                        from mechanical engineering to CSE. Clearly articulate
                        your passion for the field and the factors that
                        influenced your decision.
                      </li>
                      <li>
                        Showcase skills from your mechanical engineering
                        background that are applicable to CSE, demonstrating
                        your ability to bring a unique perspective to the
                        program.
                      </li>
                      <li>
                        Discuss your professional experience in the mechanical
                        field, emphasizing projects or responsibilities that
                        have equipped you with valuable skills relevant to CSE.
                        Highlight any exposure to programming or technology
                        integration.
                      </li>
                      <li>
                        Mention any self-learning initiatives or courses you
                        have undertaken to prepare for the transition. Emphasize
                        your commitment to acquiring the necessary skills
                        independently.
                      </li>
                      <li>
                        Conclude by summarizing how your unique background,
                        skills, and experiences make you a strong candidate for
                        the master's program in CSE. Express your eagerness to
                        contribute to the program and leverage your diverse
                        background in the tech industry.
                      </li>
                      <li></li>
                    </div> */}
                    {/* <li></li> */}
                    {/* <strong>Example:</strong>
                    <p>
                      "My journey in mechanical engineering has been
                      characterized by a commitment to technical excellence and
                      a passion for problem-solving. However, my professional
                      experiences have led me to a pivotal realization—the
                      transformative impact of technology in addressing complex
                      challenges. Motivated by a deepening interest and a desire
                      for a new challenge, I am now eager to transition to the
                      dynamic field of Computer Science and Engineering. My
                      background in mechanical engineering equips me with a
                      strong foundation in analytical thinking, project
                      management, and problem-solving—skills that I believe are
                      transferable and complementary to the tech industry.
                      During my time in the mechanical field, I actively sought
                      opportunities to integrate technology into projects,
                      gaining exposure to programming and automation. This shift
                      is not merely a change in academic focus but a strategic
                      decision to align my skills with the evolving landscape of
                      technology. I have undertaken self-learning initiatives in
                      [specific areas] and am excited about the prospect of
                      leveraging these skills in the Master's program at
                      [University]. The program's emphasis on [specific aspects
                      of CSE] perfectly aligns with my career goals, and I am
                      eager to contribute my unique perspective to the dynamic
                      community at [University]."
                    </p>
                    <hr></hr>
                    <div className="alert alert-info" role="alert">
                      <h6>Career Goals</h6>
                      <strong>Explanation: </strong> In this section, clearly
                      outline your short-term and long-term career goals.
                      Specify what you aim to achieve immediately after
                      completing the course and paint a vivid picture of your
                      aspirations for the next 10-15 years. Avoid mentioning a
                      desire to stay in a foreign country for an extended
                      period, as it can be perceived as a lack of commitment.
                    </div>
                    <h6>Mistakes that need to be taken care of:</h6>
                    <strong>Vagueness: </strong> Clearly define your goals,
                    providing details about the industry, role, or projects you
                    aim to be involved in.
                    <br></br>
                    <strong>Contradictions: </strong> Ensure that your stated
                    goals align with the course you are applying for.
                    Consistency is crucial for credibility.
                    <hr></hr>
                    <div className="alert alert-info" role="alert">
                      <strong>Why this University: </strong>This section is your
                      chance to show that you've done your homework on the
                      university. Highlight specific features, resources, or
                      faculty members that attract you. Explain how these
                      elements align with your academic and career objectives.
                      Convey a genuine interest in what the university offers
                      beyond just a prestigious name.
                    </div>
                    <h6>Mistakes that need to be taken care of:</h6>
                    <li>
                      <strong>Generic Praise:</strong>Avoid using generic
                      statements about the university's reputation. Instead,
                      focus on unique features that resonate with your goals.
                    </li>
                    <li>
                      <strong>Lack of Personalization: </strong>Ensure your
                      reasons for choosing the university go beyond general
                      information available on their website. Personalize your
                      response to demonstrate a deep understanding.
                    </li>
                    <div className="alert alert-info" role="alert">
                      <h6>Mistakes that need to be taken care of: </h6>
                      <li>
                        <strong>Introducing New Information: </strong>The
                        conclusion is not the place for new information. Stick
                        to summarizing what you've already discussed.
                      </li>
                      <li>
                        <strong>Lack of Confidence: </strong> Convey confidence
                        in your goals and how the chosen course at the
                        university is integral to your success.
                      </li>
                    </div>
                  </div> */}

                  <div  className="card-body">

                    

                    <Introduction />
                  </div>
                </div>
                {/* <AntTab key={forceRerender} activeTab1={activeTab} /> */}

                <div className="tab-content">
                  <div className="tab-pane" id="profile_tab" role="tabpanel">
                    {/* Content for the "Educt" tab goes here */}
                    {/* This is where you can place your white box */}
                    <div className="white-box">
                      {/* Your content */}
                      <h6></h6>
                    </div>
                  </div>
                  {/* Add more tab panes as needed */}
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default BuildFilter;
