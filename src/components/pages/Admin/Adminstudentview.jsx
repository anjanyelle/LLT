import React from 'react'
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import { Link } from 'react-router-dom';
import './adminstudent.css'
import Footer from '../../Footer/Footer';import { Table } from 'antd';

export default function Adminstudentview() {


  const columns = [
    {
      title: 'Course Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Ms mechanical engineering',
          value: 'Ms mechanical engineering',
        },
        {
          text: 'Category 1',
          value: 'Category 1',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.startsWith(value),
      width: '30%',
    },
    {
      title: 'Student Name',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Country',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Intake',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'More Option',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Ms mechanical engineering',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Ms mechanical engineering',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Ms  Engineering',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Ms mechanical engineering',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];   

  

  
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
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
                      <h3 className="page-title">All Applications </h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="/admindashboard">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Applications</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}


                <div className='adminstudetviewcontainer mt-2'>
              <h6>          <input type='checkbox'  name='Application'/>  Application</h6>
         <h6>          <input type='checkbox'  name='Application'/> All</h6>
             <h6>          <input type='checkbox'  name='Application'/>  Pending</h6>
         <h6>          <input type='checkbox'  name='Application'/>  Completed</h6>
                </div>
                <div className="carddesing m-1">
                <div class="card appcaltioncard">
 


  <div  className='applicationviewcardgrid'>  
<input  className='gridsearchinput'  type='text'   placeholder='student Id / Name /Email/Phone Number / Application ID' />
<div></div>    
<input  className='gridsearchinput  gridsearchinputt'  type='text'   placeholder='University  Name /  /Country /Intake / Status' />   
<div className='searchbox'><i class="fa-solid fa-magnifying-glass"></i> </div>
</div>    
      </div>


      {/* <Table columns={columns} dataSource={data} onChange={onChange} />     */}


      <div   className='cardnivercitcopmponet'>  
<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQor3aOtnvdUwbhjT1QMg4k8xSlr7w5yKd2CHeZYmGlGw&s'  alt='imagesuniverciy'  className='cardunvercityimage' />

<div  className='dataline'>
<h6>Ms mechanical engineering</h6>
<p>Oxford university</p>
</div>
<img src='https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png'  alt='student'  className='containerv'  />
<div  className='dataline'>
  <p>Bharagav</p>
  <p>matta</p>
</div>
<div  className='dataline'  style={{marginLeft: '9px'}}>
  <h6>+46443654656</h6>
  <p>01-06-2020</p>
</div>
<div   style={{marginLeft: '9px'}}>
  <h6>Feb 2020</h6>

</div>
<div  className='linecontener'>
<h6>Active  </h6>
</div>
<div className='linecontener'>
<Link to="/chatsupport"><div className='chatcontainer'>Chat <i class="fa-regular fa-message"></i></div></Link>
  <div className='editcontiner'><i class="fa-regular fa-pen-to-square"></i></div>
  <div className='moreconatiner'>...</div>
</div>
</div>
<hr></hr>

<div   className='cardnivercitcopmponet'>  
<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQor3aOtnvdUwbhjT1QMg4k8xSlr7w5yKd2CHeZYmGlGw&s'  alt='imagesuniverciy'  className='cardunvercityimage' />

<div  className='dataline'>
<h6>Ms mechanical engineering</h6>
<p>Oxford university</p>
</div>
<img src='https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png'  alt='student'  className='containerv'  />
<div  className='dataline'>
  <p>Bharagav</p>
  <p>matta</p>
</div>
<div  className='dataline'  style={{marginLeft: '9px'}}>
  <h6>+46443654656</h6>
  <p>01-06-2020</p>
</div>
<div   style={{marginLeft: '9px'}}>
  <h6>Feb 2020</h6>

</div>
<div  className='linecontener'>
<h6>Active  </h6>
</div>
<div className='linecontener'>
  <div className='admindashchatcontainer'>Chat <i class="fa-regular fa-message"></i></div>
  <div className='editcontiner'><i class="fa-regular fa-pen-to-square"></i></div>
  <div className='moreconatiner'>...</div>
</div>
</div>
<hr></hr>
<div   className='cardnivercitcopmponet'>  
<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQor3aOtnvdUwbhjT1QMg4k8xSlr7w5yKd2CHeZYmGlGw&s'  alt='imagesuniverciy'  className='cardunvercityimage' />

<div  className='dataline'>
<h6>Ms mechanical engineering</h6>
<p>Oxford university</p>
</div>
<img src='https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png'  alt='student'  className='containerv'  />
<div  className='dataline'>
  <p>Bharagav</p>
  <p>matta</p>
</div>
<div  className='dataline'  style={{marginLeft: '9px'}}>
  <h6>+46443654656</h6>
  <p>01-06-2020</p>
</div>
<div   style={{marginLeft: '9px'}}>
  <h6>Feb 2020</h6>

</div>
<div  className='linecontener'>
<h6>Active  </h6>
</div>
<div className='linecontener'>
  <div className='chatcontainer'>Chat <i class="fa-regular fa-message"></i></div>
  <div className='editcontiner'><i class="fa-regular fa-pen-to-square"></i></div>
  <div className='moreconatiner'>...</div>
</div>
</div>
<hr></hr>


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
