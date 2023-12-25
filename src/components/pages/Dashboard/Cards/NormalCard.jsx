import React from 'react';
import { Card, Space } from 'antd';
import './card.css'

export default function NormalCard(props) { 
  return (
    <div>
      <Space direction="vertical" size={20}>
        <Card 
          title={props.universityname}
          extra={<a href="#">View Details</a>}
          style={{
            width: '30rem',
          }} 
        >
          <p><strong>{props.universityncourse}</strong></p>
          <div className='card cardcolornormal'  
          style={{backgroundColor: '#0d6efd2e',
          }}>
            <div className='card-body'>
          <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around',}}>  
            <div className='normal_sameline'>
          <i class="fa-regular fa-calendar-days"></i>
            <div className='normal_cardtext'>
            <p><strong>Application</strong> </p>
            <p>Fall, 05/12/2023</p>
            </div>
            </div>
            <div className='normal_sameline'>
            <i class="fa-solid fa-user-graduate"></i>
            <div className='normal_cardtext'>
            <p><strong>Degree</strong></p>
            <p>Masters</p>
            </div>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around',}}>
          <div className='normal_sameline'>
          <i class="fa-solid fa-user-graduate"></i>
            <div className='normal_cardtext'>
            <p><strong>Duration</strong></p>
            <p>NA</p>
            </div>
            </div>
            <div className='normal_sameline'>
            <i class="fa-regular fa-money-bill-1"></i>
            <div className='normal_cardtext'>
            <p><strong>Tuition fee</strong></p>
            <p>$35,9/yr</p>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className='card card1b cardcolornormal'>
              <div className='sameline1'>
              <i class="fa-solid fa-user-graduate"></i>
            <div>
              <p><strong>{props.data}</strong></p>
              <p>{props.datade}</p>
              <p className='badge text-bg-info '>View  chances...</p>
            </div>
            </div>
            </div>
            <p>Add and track all your university applications right here!...</p>
        </Card>
      </Space>
    </div>
  );
}
