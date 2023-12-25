import React , { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";
import ProgramSelect from "./pages/Dashboard/ProgramSelect";
import './normal.css'
import QuickSelect1 from "./QuickSelect1";
import ChatComponent from "./ChatComponent";

export default function Quickapply() {

    
  const [files, setfile] = useState(null);
  const [queryfiledinput, setqueryfiledinput] = useState("");
  const [quickapply , setquickapply]=useState({
    whatapp:false,
    chatsuppert:false,
    viewmore:true
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setqueryfiledinput({
      ...queryfiledinput,
      [name]: value,
    });
  };

  const handleQuickApply = () => {
    setquickapply({
      ...quickapply,
      viewmore: true,
      chatsuppert:false,
      whatapp:false,
    });
  };
  const handleQuickApplywhatapp = () => {
    setquickapply({
      ...quickapply,
      whatapp: true,
      viewmore:false,
      chatsuppert:false,
    });
  };
  
  const handleQuickApplychat = () => {
    setquickapply({
      ...quickapply,
      chatsuppert: true,
      whatapp:false,
      viewmore:false,
     
    });
  };
  
  return (


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
                      {/* <li className="breadcrumb-item active">Program Finder</li> */}
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

                        
                        <QuickSelect1 />
                        <div></div>
                      </div>
                    </div>
                  </div><div  className="imagedata">
 
             
                  </div>
                  <h5 style={{color:'blue'}}>Selected Programs</h5>
                  <div className="qickapplysam">
                  <div className="card card-table" style={{width:'22rem'}}>
                    <div className="card-body">
                      {/* Page Header */}
                      <div className="page-header">
                        <div className="col ">
                          <div className="col">
                            <p className="page fw-bold">
                              Pre-Master's for Business, Law or Finance</p>
                          
                           {/* <button className="btn btn-primary btn-display"><i class="fa-solid fa-xmark"></i> Remove</button> */}
                          </div>
                        </div>
                        <div className="cardcontent1">
                        <div className="conatent_card_">
                         <p className="ptag">  <strong><i class="fa-solid fa-building-columns"></i> University:</strong>(KAPLAN) Bournemouth University</p>
                         <p className="ptag">  <strong> <i class="fa-regular fa-calendar-days"></i> Intakes:</strong>(KAPLAN) Bournemouth </p>
                         <p className="ptag">  <strong><i class="fa-solid fa-share-from-square"></i>  Duration:</strong>68 Month(s)</p>
                         </div>
                         <div className="conatent_card_">
                         <p className="ptag">  <strong><i class="fa-solid fa-earth-americas"></i>  Country:</strong>United Kingdom</p>
                         <p className="ptag">  <strong> <i class="fa-solid fa-comments-dollar"></i> Tuition Fee:</strong>£14,</p>
                         </div>
                         <div className="conatent_card_">
                         <p className="ptag">  <strong>Selected Intake:</strong> Nov-2026</p>
                         <p className="ptag">  <strong>Application Fee:</strong>GBP0</p>
                         <p className="ptag">  <strong> Select Priority:</strong><select>
                          <option>None</option>
                          <option>3 rd proirtie</option>
                          <option>None</option>
                          </select></p>
                         </div>
                         </div>
                         <hr></hr>
                         <div  className="quickapply_line" style={{display: 'flex',}}>  <button className="btn btn-primary btn-display"><i class="fa-solid fa-xmark"></i> Remove</button>
                         <div className="suppotcontainer">
                          <p onClick={handleQuickApply}><i class="fa-solid fa-phone-volume"></i></p>
                          <p onClick={handleQuickApplywhatapp}><i class="fa-brands fa-whatsapp" style={{color:'#26aa26;'}}></i></p>
                          <p onClick={handleQuickApplychat}><i class="fa-solid fa-comments"></i></p>
                         </div>
                         </div>
                       
                      </div>
                      {/* /Page Header */}
  
                 
                      <div className="row col-12">

                        
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-table" style={{width:'22rem'}}>
                    <div className="card-body">
                      {/* Page Header */}
                      <div className="page-header">
                        <div className="col ">
                          <div className="col">
                            <p className="page fw-bold">
                              Pre-Master's for Business, Law or Finance</p>
                          
                           {/* <button className="btn btn-primary btn-display"><i class="fa-solid fa-xmark"></i> Remove</button> */}
                          </div>
                        </div>
                        <div className="cardcontent1">
                        <div className="conatent_card_">
                         <p className="ptag">  <strong><i class="fa-solid fa-building-columns"></i> University:</strong>(KAPLAN) Bournemouth University</p>
                         <p className="ptag">  <strong> <i class="fa-regular fa-calendar-days"></i> Intakes:</strong>(KAPLAN) Bournemouth </p>
                         <p className="ptag">  <strong><i class="fa-solid fa-share-from-square"></i>  Duration:</strong>68 Month(s)</p>
                         </div>
                         <div className="conatent_card_">
                         <p className="ptag">  <strong><i class="fa-solid fa-earth-americas"></i>  Country:</strong>United Kingdom</p>
                         <p className="ptag">  <strong> <i class="fa-solid fa-comments-dollar"></i> Tuition Fee:</strong>£14,</p>
                         </div>
                         <div className="conatent_card_">
                         <p className="ptag">  <strong>Selected Intake:</strong> Nov-2026</p>
                         <p className="ptag">  <strong>Application Fee:</strong>GBP0</p>
                         <p className="ptag">  <strong> Select Priority:</strong><select>
                          <option>None</option>
                          <option>3 rd proirtie</option>
                          <option>None</option>
                          </select></p>
                         </div>
                         </div>
                         <hr></hr>
                         <div  className="quickapply_line" style={{display: 'flex',}}>  <button className="btn btn-primary btn-display"><i class="fa-solid fa-xmark"></i> Remove</button>
                         <div className="suppotcontainer">
                          <p onClick={handleQuickApply}><i class="fa-solid fa-phone-volume"></i></p>
                          <p onClick={handleQuickApplywhatapp}><i class="fa-brands fa-whatsapp" style={{color:'#26aa26;'}}></i></p>
                          <p onClick={handleQuickApplychat}><i class="fa-solid fa-comments"></i></p>
                         </div>
                         </div>
                       
                      </div>

                      
                      {/* /Page Header */}
  
                 
                      <div className="row col-12">

                        
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-table" style={{width:'22rem'}}>
                    <div className="card-body">
                      {/* Page Header */}
                      <div className="page-header">
                        <div className="col ">
                          <div className="col">
                            <p className="page fw-bold">
                              Pre-Master's for Business, Law or Finance</p>
                          
                           {/* <button className="btn btn-primary btn-display"><i class="fa-solid fa-xmark"></i> Remove</button> */}
                          </div>
                        </div>
                        <div className="cardcontent1">
                        <div className="conatent_card_">
                         <p className="ptag">  <strong><i class="fa-solid fa-building-columns"></i> University:</strong>(KAPLAN) Bournemouth University</p>
                         <p className="ptag">  <strong> <i class="fa-regular fa-calendar-days"></i> Intakes:</strong>(KAPLAN) Bournemouth </p>
                         <p className="ptag">  <strong><i class="fa-solid fa-share-from-square"></i>  Duration:</strong>68 Month(s)</p>
                         </div>
                         <div className="conatent_card_">
                         <p className="ptag">  <strong><i class="fa-solid fa-earth-americas"></i>  Country:</strong>United Kingdom</p>
                         <p className="ptag">  <strong> <i class="fa-solid fa-comments-dollar"></i> Tuition Fee:</strong>£14,</p>
                         </div>
                         <div className="conatent_card_">
                         <p className="ptag">  <strong>Selected Intake:</strong> Nov-2026</p>
                         <p className="ptag">  <strong>Application Fee:</strong>GBP0</p>
                         <p className="ptag">  <strong> Select Priority:</strong><select>
                          <option>None</option>
                          <option>3 rd proirtie</option>
                          <option>None</option>
                          </select></p>
                         </div>
                         </div>
                         <hr></hr>
                         <div  className="quickapply_line" style={{display: 'flex',}}>  <button className="btn btn-primary btn-display"><i class="fa-solid fa-xmark"></i> Remove</button>
                         <div className="suppotcontainer">
                          <p onClick={handleQuickApply}><i class="fa-solid fa-phone-volume"></i></p>
                          <p onClick={handleQuickApplywhatapp}><i class="fa-brands fa-whatsapp" style={{color:'#26aa26;'}}></i></p>
                          <p onClick={handleQuickApplychat}><i class="fa-solid fa-comments"></i></p>
                         </div>
                         </div>
                       
                      </div>
                      {/* /Page Header */}
  
                 
                      <div className="row col-12">

                        
                        <div></div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div  className="imagedata">
 
             
                  </div>
                  <div className="card">
            
            <div className="card-body">
            {quickapply.viewmore && 
            <> <h5  style={{marginBottom: '1rem',}}>Initial contact person </h5>
            <div className="carddiv1">
  <div className="card manager">
    
    <div  className="managerdivavthar">
      <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.webp"  className="profileimagemanger" alt="profileimage" />
      <div className="profilebutton">Available</div>
    </div>
    <div className="contentitem">
    <h6>LLT consultancy</h6>
    <p>India</p>
    <p>8070075000</p>
    </div>
  </div>


  <div className="card manager">
    
    <div  className="managerdivavthar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUsFya9DL9bOADTtUIkMD01q4KlA1-8ESNIF05HPRug&s"  className="profileimagemanger" alt="profileimage" />
      <div className="profilebutton" style={{backgroundColor: '#45a745',}}>Available</div>
    </div>
    <div className="contentitem">
    <h6>Jyoti Verma LLT</h6>
    <p> Manager</p>
    <p>6685665000</p>
    </div>
  </div>


  <div className="card manager">
    
    <div  className="managerdivavthar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9Hn1ee6MdFbwlNI8NeybBM1dJDHMy5l1xyY-kKCxK3ThwZ-63S2h0OLwr3Uys8bP8pc&usqp=CAU"  className="profileimagemanger" alt="profileimage" />
      <div className="profilebutton" style={{  backgroundColor:'#ffc107'}}>Available</div>
    </div>
    <div className="contentitem">
    <h6>Priya Madaan LLT</h6>
    <p> Manager</p>
    <p>9685665000</p>
    </div>
  </div>
</div> </>  }

{quickapply.whatapp && <><h5  style={{marginBottom: '1rem',}}>Touch with whatsapp message</h5>
            <div className="carddiv1">
  <div className="card manager">
    
    <div  className="managerdivavthar">
      <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.webp"  className="profileimagemanger" alt="profileimage" />
      <div className="profilebutton">Available</div>
    </div>
    <div className="contentitem">
    <h6>LLT consultancy</h6>
    <p>India</p>
    <p>8070075000</p>
    </div>
  </div>


  <div className="card manager">
    
    <div  className="managerdivavthar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUsFya9DL9bOADTtUIkMD01q4KlA1-8ESNIF05HPRug&s"  className="profileimagemanger" alt="profileimage" />
      <div className="profilebutton" style={{backgroundColor: '#45a745',}}>Available</div>
    </div>
    <div className="contentitem">
    <h6>Jyoti Verma LLT</h6>
    <p> Manager</p>
    <p>6685665000</p>
    </div>
  </div>


  <div className="card manager">
    
    <div  className="managerdivavthar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9Hn1ee6MdFbwlNI8NeybBM1dJDHMy5l1xyY-kKCxK3ThwZ-63S2h0OLwr3Uys8bP8pc&usqp=CAU"  className="profileimagemanger" alt="profileimage" />
      <div className="profilebutton" style={{  backgroundColor:'#ffc107'}}>Available</div>
    </div>
    <div className="contentitem">
    <h6>Priya Madaan LLT</h6>
    <p> Manager</p>
    <p>9685665000</p>
    </div>
  </div>
</div></>  }
{quickapply.chatsuppert && <>  <   ChatComponent/></>  }
            </div>
          
            </div>
            </div>
            {/* Footer */}     

          
            <Footer />
          </div>
        </div>


    );
}

