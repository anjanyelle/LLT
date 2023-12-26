import React, { useEffect, useState } from "react";
import SideBar from "../../../SideBar/SideBar";
import Header from "../../../Header/Header";
import { Link } from "react-router-dom";
import "../anttab.css";
import './chatsupport.css'
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import ChatComponent from "../../../ChatComponent";
import Uploaddoc from "../Chatsupport/Uploaddoc";


const TabContent = ({ activeTab }) => {
  return (
    <div className="tab-content tab-chatcomopnet" >
      {activeTab === 'active' && <div>
        <>
        <ChatComponent  />
        
        </></div>}
      {activeTab === 'link1' && <div>
      
                        
                        <Uploaddoc /></div>}
      {activeTab === 'link2' && <div>Content for Recent Chats tab</div>}
    </div>
  );
};

const ChatSupport = () => {
  const [chat, setChange] = useState("11");
  const [showchat , setshowchat]=useState(true)
  const [doc , setdoc]=useState(false)

  const handlechage = (event) => {
    const { value, name } = event.target;
    setChange({
      ...chat,
      [name]: value,
    });
    console.log(chat);
  };
  useEffect(() => {
    console.log(chat);
  }, [chat , doc]);

  const [activeTab, setActiveTab] = useState('active');

  const handleTabClick = (tab, event) => {
    event.preventDefault();
    setActiveTab(tab);
  };

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
                  <h3 className="page-title">University ChatCard</h3>
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
                <div className="mt-3">
                  <div class="card " style={{ backgroundColor: "white" }}>
                    <div class="card-body">
                    <div class="card univercitychatbacground" style={{ backgroundColor: "#F5F5F7" }}>
                    <div class="card-body gridchatsuppot">
                      {/* univercitychatcomponet */}
                      <div className="chatcontainer">

                      <div class="card univercitychat" >
  <img src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-to" alt="..."  />
  <div class="card-body">
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

    <div className="apliactionid">
                                Application Id: 000001
                        </div>
                        <div className="cardunivercityname">
                            <p><i class="fa-solid fa-school fw-bold"></i> <strong>MS Mechanical Engineering</strong></p>
                            <p><i class="fa-solid fa-graduation-cap fw-bold"></i> New York Institute of technology</p>
                            <p><i class="fa-solid fa-calendar-days fw-bold"></i> <strong>Year : 2020  </strong></p>
                            <p><i class="fa-solid fa-floppy-disk fw-bold"></i> <strong>Intakes  : Spring</strong></p>
                            <p><i class="fa-solid fa-school fw-bold"></i> <strong>Status : Open</strong></p>
                        </div>
  </div>
</div>
                      </div>
                      {/* chatwith univercity */}
  <div className="chatcontainer1">
  <ul className="nav nav-tabs">
        <li className={` nav-item1 nav-item ${activeTab === 'active' ? 'active' : ''}`}>
          <a
            className="nav-link"
            onClick={(e) => handleTabClick('active', e)}
            href="#"
          >
            Chats
          </a>
        </li>
        <li className={` nav-item1 nav-item ${activeTab === 'link1' ? 'active' : ''}`}>
          <a
            className="nav-link"
            onClick={(e) => handleTabClick('link1', e)}
            href="#"
          >
            Documents
          </a>
        </li>
        {/* <li className={` nav-item1 nav-item ${activeTab === 'link2' ? 'active' : ''}`}>
          <a
            className="nav-link"
            onClick={(e) => handleTabClick('link2', e)}
            href="#"
          >
            Recent Chats
          </a>
        </li> */}
      </ul>

      <TabContent activeTab={activeTab} />

    
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
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default ChatSupport;
