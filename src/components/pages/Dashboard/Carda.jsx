import React from 'react';
import './Step.css';


export default function Carda({ data }) {
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <div>
      <div className="card card1border">
        <div className="card-body">
          <div className='flexrow'>
            <div className='cardcircle'>
              1
            </div>
            <p>STEP:1</p>
          </div>
          
          <h6 className="card-subtitle mb-2 text-body-secondary" >{data.title}</h6>
          <p className="card-text" style={{fontSize:'12px',marginBottom:'2px'}}>
            {data.description}
          </p>
          <p style={{marginBottom: '2px'}}>Completed - 03-Nov-2022</p>
          <a href="#" className="card-link" style={{fontSize:'13px'}} >
            View Details    
          </a>
        </div>
      </div>
    </div>
  );
}
