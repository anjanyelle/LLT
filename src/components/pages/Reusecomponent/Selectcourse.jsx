import React, { useEffect, useState } from 'react'

import { Select } from 'antd';



   const Selectcourse =({className , placeholder   }) =>{

    const [coursename , setcourseName]=useState({
        course:"",
    });

    const courseinput =[
      { value: '1', label: 'university' },
      { value: '2', label: 'Computer Science' },
      { value: '3', label: 'Business Administration' },
      { value: '4', label: 'Mechanical Engineering' },
      { value: '5', label: 'Medicine' },
      { value: '6', label: 'Psychology' },
      { value: '7', label: 'Biology' },
      { value: '8', label: 'Literature' },
      { value: '9', label: 'Economics' },
      { value: '10', label: 'Cybersecurity' }, 
    ]
    const handlechange = (value, option) => {
        // Use the selected value and option as needed
        console.log('Selected Value:', value);
        console.log('Selected Option:', option.label);
      
        // Update your state or perform other actions
        setcourseName((prevCourseName) => ({
          ...prevCourseName,
          course: value,
        }));
        localStorage.setItem("concentration", option.label)
      };
  return (
        
        <Select
    showSearch
    bordered={false}
    className={className}    
    placeholder={placeholder}
    optionFilterProp="children"
    name="course"
    onChange={(value, option) => handlechange(value, option)}
    
    style={{
        width: '100%', 
           
        border:'none',
        fontSize:'1.1rem',
        fontWeight:'500',

      }}
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={courseinput}
  />
  )
}



export default Selectcourse