import React, { useEffect, useState } from "react";
import SideBar from "../../../SideBar/SideBar";
import Header from "../../../Header/Header";
import { Link } from "react-router-dom";
import "../anttab.css";
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import ChatComponent from "../../../ChatComponent";
import Uploaddoc from "./Uploaddoc";

const ChatUnivercity = () => {
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
                  <h3 className="page-title">Refer a Friend</h3>
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
                      <div className="chatgridcomponet">
                        {/* univercity name */}
                        <div className="univercitywhisecontainer">
                          <div className="card carunivercity">
                            <div className="card-body">
                              <div className="applicatinid">
                                <h5>Application Id: 121211/12</h5>
                              </div>
                              <h6 className="mt-3" style={{ color: "blue" }}>
                                <i class="fa-solid fa-graduation-cap"></i> Mtech
                                Civil Engineering
                              </h6>
                              <h6 className="mt-2">
                                <i class="fa-solid fa-building-columns"></i> New
                                york institute of technology{" "}
                              </h6>
                              <div className="sameline universityspace">
                                <h6 className="mt-2">
                                  <i class="fa-regular fa-clock"></i> Year :
                                  2000
                                </h6>{" "}
                                <h6 className="mt-2">
                                  <i class="fa-solid fa-download"></i> Intake :
                                  Spring{" "}
                                </h6>
                              </div>

                              <h6 className="mt-2">
                                <i class="fa-regular fa-circle-check"></i>{" "}
                                Status : Open
                              </h6>
                            </div>
                          </div>

                          <div className="card carunivercity">
                            <div className="card-body">
                              <div className="applicatinid">
                                <h5>Application Id: 121211/12</h5>
                              </div>
                              <h6 className="mt-3" style={{ color: "blue" }}>
                                <i class="fa-solid fa-graduation-cap"></i> Mtech
                                Civil Engineering
                              </h6>
                              <h6 className="mt-2">
                                <i class="fa-solid fa-building-columns"></i> New
                                york institute of technology
                              </h6>
                              <div className="sameline universityspace">
                                <h6 className="mt-2">
                                  <i class="fa-regular fa-clock"></i> Year :
                                  2000
                                </h6>{" "}
                                <h6 className="mt-2">
                                  <i class="fa-solid fa-download"></i> Intake :
                                  Spring{" "}
                                </h6>
                              </div>

                              <h6 className="mt-2">
                                <i class="fa-regular fa-circle-check"></i>{" "}
                                Status : Open
                              </h6>
                            </div>
                          </div>
                        </div>
                        {/* univercity chat grid */}
                        <div>
                        {showchat && <><div className="univercitychatbox">
                          <div className="card cardchatbox">
                            <h5 className="card-header card-headerchatbox">
                              New york institute of technology (Mtech Civil
                              Engineering)
                            </h5>

                            <ChatComponent chat={chat} />
                          </div>
                          {/* <input  type="text" className="card cardchatmall"   name="chat"  placeholder="Type Message .."  onChange={handlechage} />
<div  className="imagechat">


<i class="fa-solid fa-face-grin-wide"></i>
<i class="fa-solid fa-upload"></i>
<i class="fa-regular fa-paper-plane"></i>
</div> */}
                        </div></>}

                        {doc && <>lll
                        
                        <Uploaddoc /></>}
                        </div>
                        <div>
                          <FloatButton.Group
                            trigger="hover"
                            type="primary"
                            style={{
                              right: 50,
                            }}
                            icon={<CustomerServiceOutlined   />}
                            
                           
                          >
                            <FloatButton   onClick={()=>{setshowchat(false);setdoc(true)}} />
                            <FloatButton icon={<CommentOutlined   onClick={()=>{setshowchat(true);setdoc(false)}}  />} />
                          </FloatButton.Group>
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

export default ChatUnivercity;
