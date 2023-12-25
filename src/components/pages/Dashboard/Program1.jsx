import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";
import { allqueries, cancelled, resolved, pending } from "../../imagepath";
import { HandleClick } from "../Base UI Elements/SweetAlert";
import { Upload } from "feather-icons-react/build/IconComponents";
import ProgramSelect from "./ProgramSelect";
import Side1 from "./Side1";
import Applicationcard from "./Applicationcard";

export default function Program1() {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [userdata, setuserdata] = useState({
      profileData: {},
    });
    const [files, setfile] = useState(null);
    const [queryfiledinput, setqueryfiledinput] = useState("");
  
    // useEffect(() => {
    //   getUserDetails().then((data) => {
    //     setuserdata({
    //       ...userdata,
    //       profileData: data,
    //     });
    //   });
  
    //   // alert(userdata)
    // }, []);
  
    console.log(userdata);
  

    const handleChange = (event) => {
      const { name, value } = event.target;
      setqueryfiledinput({
        ...queryfiledinput,
        [name]: value,
      });
    };
  
    const imageSubmit = (event) => {
      const file = event.target.files[0];
      setfile(file);
    };
  
    const handleimageupload = async () => {
      const response = fileuploads(files);
  
      console.log("file", files);
      response.then((data) => {
        console.log(data);
        if (data.request.status == 200) {
          alert("success");
        } else {
          alert("error");
        }
      });
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
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">Program Finder </h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/admindashboard">Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active">Program Finder</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
            
              <div className="card card-table">
                    <div className="card-body">
                      {/* Page Header */}
                      <div className="page-header">
                        {/* <div className="row align-items-center">
                          <div className="col">
                            <h3 className="page-title">Program Finder</h3>
                          </div>
                        </div> */}
                      </div>
                      {/* /Page Header */}
  
                 
                      <div className="row col-12">

                        
                        <ProgramSelect />
                      </div>
                    </div>
                  </div><div  className="imagedata"><Applicationcard />
 
                  <Applicationcard />
                  <Applicationcard />
                  <Applicationcard />
                  </div>
            </div>
            {/* Footer */}
            <Footer />
          </div>
        </div>
        {/* /Main Wrapper */}
      </>
    );
}
