import React, { useState } from 'react';
import './Step.css';
import startflag from '../../../assets/img/flag.png'
import startflag1 from '../../../assets/img/flag (1).png'
import { Divider, Steps ,Popover } from 'antd';
import Carda from './Carda';
const StepIn = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const CardContent=[
    {
      title: 'University shortlisted',
      description:'Initial Screening Content',
      content:"You have been shortlisted by the university."
   
    },
    {
      title: 'Application submitted',
      description:'Initial Shortlisting',
      content:"Your application is being reviewed"
    },
    {
      title: 'I20 received',
      description:'Final Admission Decision',
      content:"You have received your I-20 document"

    },
    {
      title: 'Visa approved',
      description:'Congratulation',
      content:"Congratulations on your achievement!"
    },
    
  ]

  // const content = [
  //   (
  //     <div>
  //       <p>Content 1</p>
  //       <p>Content 1</p>
  //     </div>
  //   ),
  //   (
  //     <div>
  //       <p>Content 2</p>
  //       <p>Content 2</p>
  //     </div>
  //   ),

  // ]
  const startcontent = 'Start curreer with our constituency.';
  const successcontent = 'Reach your goal';
  return (
    <>
     <Steps    
  
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'university shortlisted',
            description:'Initial Screening',
          },
          {
            title: 'application submitted',
            description:'Shortlisting',
          },
          {
            title: 'i20 received',
            description:'Final Admission Decision',
          },
          {
            title: 'Visa approved',
            description:'Congratulation',
          },
          
        ]}
      />
      <div className='flagdiv'>
      <Popover content={startcontent} title="Title">
   <img src="https://cdn-icons-png.flaticon.com/512/5524/5524562.png" alt="startflag" className='flags' />
   </Popover>
   <Popover content={successcontent} title="Title">
   <img src={startflag} alt="startflag" className='flags' />
   </Popover>

   </div>
      <Divider />
      <div className='cardcantiner '>
        {CardContent.map((data,index)=>
        {
        return <><Popover content={data.content} title="Title">
         <Carda   data={data}/>   </Popover> </>
        
        })}

{/* <Carda />
<Carda />
<Carda /> */}
</div>
    </>
  );
};
export default StepIn;