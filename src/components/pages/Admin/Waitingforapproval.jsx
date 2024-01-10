import React from 'react'
import Header from '../../Header/Header';
import SideBar from '../../SideBar/SideBar';
import { Link } from 'react-router-dom';
import './adminstudent.css'
import Footer from '../../Footer/Footer';import { Avatar, Space, Table, Tag } from 'antd';
import Table1 from './Table1';
import WaitingTable from './WaitingTable';

export default function Waitingforapproval() {


  const columns = [
    {
      title: 'Image',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: imageUrl => <img src={imageUrl} alt='imagesuniverciy' className='cardunvercityimage' />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: name => (
        <div className='dataline'>
          <h6>{name}</h6>
          <p>Oxford university</p>
        </div>
      ),
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: avatar => <Avatar src={avatar} alt='student' className='containerv' />,
    },
    {
      title: 'Details',
      dataIndex: 'details',
      key: 'details',
      render: (text, record) => (
        <div className='dataline'>
          <p>{record.firstName}</p>
          <p>{record.lastName}</p>
        </div>
      ),
    },
    {
      title: 'Contact',
      dataIndex: 'contact',
      key: 'contact',
      render: (text, record) => (
        <div className='dataline' style={{ marginLeft: '9px' }}>
          <h6>{record.phone}</h6>
          <p>{record.date}</p>
        </div>
      ),
    },
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
      render: month => (
        <div style={{ marginLeft: '9px' }}>
          <h6>{month}</h6>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: () => (
        <div className='linecontener'>
          <h6>
            <Tag color="green">Active</Tag>
          </h6>
        </div>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space size="middle">
          <Link to="/chatsupport">
            <div className='chatcontaineradmin'>Chat <i className="fa-regular fa-message"></i></div>
          </Link>
          <div className='editcontiner'><i className="fa-regular fa-pen-to-square"></i></div>
          <div className='moreconatiner'>...</div>
        </Space>
      ),
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
                      <h3 className="page-title mt-2">All Applications </h3>
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
<div className='gridsearchinput  gridsearchinputt'>
<input  className='admininputfiled inputfiledwaiting'  type='text'   placeholder='University Name   /' />  
<input  className='admininputfiled'  type='text'   placeholder=' Country /' />  
<input  className='admininputfiled'  type='text'   placeholder=' Intake / ' /> 
<input  className='admininputfiled'  type='text'   placeholder=' Status' /> 
</div>
<div className='searchbox'><i class="fa-solid fa-magnifying-glass"></i> </div>
</div>    
      </div>


      {/* <Table columns={columns} dataSource={data} onChange={onChange} />     */}
<WaitingTable />         
      {/* <div   className='cardnivercitcopmponet'>  
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
<Link to="/chatsupport"><div className='chatcontaineradmin'>Chat <i class="fa-regular fa-message"></i></div></Link>
  <div className='editcontiner'><i class="fa-regular fa-pen-to-square"></i></div>
  <div className='moreconatiner'>...</div>
</div>
</div> */}


{/* <div   className='cardnivercitcopmponet'>  
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
  <div className='admindashchatcontaineradmin'>Chat <i class="fa-regular fa-message"></i></div>
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
  <div className='chatcontaineradmin'>Chat <i class="fa-regular fa-message"></i></div>
  <div className='editcontiner'><i class="fa-regular fa-pen-to-square"></i></div>
  <div className='moreconatiner'>...</div>
</div>
</div>
<hr></hr> */}


    </div>    
    
              </div>
              {/* Footer */}
              <Footer />
            </div>
          </div>
          {/* /Main Wrapper */}
        </>
      )
}