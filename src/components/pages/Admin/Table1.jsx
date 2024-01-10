import { Avatar, Space, Table, Tag } from 'antd';
import React, { useState } from 'react'
import './adminstudent.css'
import { Link } from 'react-router-dom';






const { Column } = Table;  
export default function Table1() {

  const columns = [
    {
      title: '',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: imageUrl => <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQor3aOtnvdUwbhjT1QMg4k8xSlr7w5yKd2CHeZYmGlGw&s" alt='imagesuniverciy' className='cardunvercityimage' />,
    },
    {
      title: name =>(<div>
        <p className='mb-0'>University Name</p>
        <p>Course Name</p>
      </div>),
      dataIndex: 'name',
      key: 'name',
      render: name => (
        <div className='dataline'>
           <Link  to="/adminuniversity"> <h6>{name}</h6> </Link> 
           <Link  to="/adminuniversity">  <p>Oxford university</p></Link> 
        </div>
      ),
    },
    {
      title: '',
      dataIndex: 'avatar',
      key: 'avatar',
      render: avatar => <Link to= "/profile"><Avatar src="https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png"   alt='student' className='containerv' /></Link>,
    },
    {
      title: 'Student_Name',
      dataIndex: 'details',
      key: 'details',
      render: (text, record) => (
        <div className='dataline'>
          <Link  to="/profile" ><p  style={{fontWeight:"blod"}}   className='fw-bold'>{record.firstName} Bharagav </p>     </Link>
          <Link  to="/profile" ><p  >{record.lastName} Ma</p>     </Link>
          {/* <p>{record.lastName} Ma</p> */}
        </div>
      ),
    },
    {
      title:  name =>(<div>
        <p className='mb-0'>Application_Id</p>
        <p>App. Date</p>
      </div>) ,
      dataIndex: 'contact',
      key: 'contact',
      render: (text, record) => (
        <div className='dataline' style={{ marginLeft: '9px' }}>
          <p>{record.phone} 545542353</p>
          <p>{record.date}  02-08-2020</p>
        </div>
      ),
    },
    {
      title: 'Intake',
      dataIndex: 'month',
      key: 'month',
      render: month => (
        <div style={{ marginLeft: '9px' }}>
          <div>{month} Sep 2020</div>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: () => (
        <div className='linecontener'>
      <div>
      <select
            className="form-select form-select-sm"
            aria-label="Small select example"
            style={{ border: 'none', boxShadow: '#d9dada 1px 1px 6px 1px' }}
            onChange={(e) => handleFirstDropdownChange(e.target.value)}
          >
            <option value="ApplicationPending">Application Pending</option>
            <option value="Documentmissing">Document missing</option>
            <option value="ApplicationSubmitted">Application Submitted</option>
            <option value="ApproveandAssign">Approve and Assign</option>
            <option value="Reject">Reject</option>

          </select>
          
</div>

{showapplicationpending && (
  <div>
             
             <select
            className="form-select form-select-sm"
            aria-label="Small select example"
            style={{ border: 'none', boxShadow: '#d9dada 1px 1px 6px 1px' }}
            onChange={(e) => handleFirstDropdownChange(e.target.value)}
          >
             <option value="Paymentpending" style={{ color: 'green' }}>
             Missing Documents 
            </option>
            <option value="PaymentPending">Payment Pending</option>
            <option value="PaymentSuccessful">Payment Successful</option>
            <option value="ApplicationSubmitted"> Application Submitted</option>

          </select>
             
    </div>
)}
{showSecondDropdown && (
      <div>
             <select
            className="form-select form-select-sm"
            aria-label="Small select example"
            style={{ border: 'none', boxShadow: '#d9dada 1px 1px 6px 1px' }}
            onChange={(e) => handleFirstDropdownChange(e.target.value)}
          >
            <option value="Paymentpending" style={{ color: 'green' }}>
              Payment pending
            </option>
            <option value="2">Document missing</option>
            <option value="3">Application Submitted</option>

          </select>
        </div>
        )}
        </div>
      ),
    },
    {
      title: 'More Options',
      key: 'actions',
      render: () => (

        <Space size="middle">
          <Link to="/chatsupport">
            <div className='chatcontainer chatcss'>Chat <i className="fa-regular fa-message"></i></div>
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

  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [showapplicationpending  ,setshowapplicationpending ]=useState(false)
  const handleFirstDropdownChange = (value) => {
    setShowSecondDropdown(value === 'Documentmissing');
    if(value === 'ApplicationPending'){
      setshowapplicationpending(value === 'ApplicationPending');


      
    }
  };
  return (
    <div><Table columns={columns} dataSource={data} onChange={onChange} />;</div>
  )
}
