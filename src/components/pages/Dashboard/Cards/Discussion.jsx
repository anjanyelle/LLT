// import React from 'react'

// export default function Discussion() {
    import React from 'react';import '../../Dashboard/stytle.css'
    import { Card } from 'antd';
    const Discussion = ({subtext , free , cardtitle , international}) => (
      <Card title={cardtitle}>
        {/* <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
          Inner Card content
        </Card> */}
        <p><i class="fa-solid fa-tag"></i> {subtext}</p>
        <h6> <i class="fa-solid fa-book-open"></i>  {free}</h6>
        <div style={{marginTop: '0.8rem'}}>
        <Card>
      <div>
          <h6  style={{color:'blue'}}>{international}</h6>
          <button className='btn postionbutt AskOurExpert' >Check Loan Eligibility</button>
          </div>
          <p>Just fill in your preferences ad to-do! Reach the best loan offer with Loan Finder</p>
    
          <div className='cardgrup cardcolornormal'>
    
          <Card
        style={{
          width: 260,
        }}
      >
    
    
           <div className='gridcard'>
          <div className='icongrid'>
          <i class="fa-solid fa-people-roof"></i>
          </div>
          <div>
        <h5 >5000+ Students</h5>
        <p>Availed education loan</p>
        </div>
        </div>
      </Card>
      <Card
        style={{
          width: 260,
        }}
      >
        <div className='gridcard'>
          <div className='icongrid'>
          <i class="fa-solid fa-people-roof"></i>
          </div>
          <div>
        <h5>3000+ Cr</h5>
        <p>Loan 
          {/* amount */}
           sanctioned</p>
        </div>
        </div>
      </Card>
      <Card
        style={{
          width: 260,
        }}
      >
    
    <div className='gridcard'>
          <div className='icongrid'>
          <i class="fa-solid fa-people-roof"></i>
          </div>
          <div>
        <h5>100% Free</h5>
        <p>Assistance loan process</p>
        </div>
        </div>
      </Card>
          </div>
        </Card>
        </div>
      </Card>
    );
    export default Discussion;