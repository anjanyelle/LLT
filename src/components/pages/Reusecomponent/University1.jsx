import React, { useEffect, useState } from 'react'

import { Select } from 'antd';



   const University1 =({className , placeholder   }) =>{

    const [coursename , setcourseName]=useState({
        course:"",
    });

    const onChange = (value) => {
      console.log(`selected ${value}`);
      localStorage.setItem("university", value)
      
    };
    const onSearch = (value) => {
      console.log('search:', value);
    };
    // const handlechange = (value, option) => {
    //     // Use the selected value and option as needed
    //     console.log('Selected Value:', value);
    //     console.log('Selected Option:', option.label);
      
    //     // Update your state or perform other actions
    //     setcourseName((prevCourseName) => ({
    //       ...prevCourseName,
    //       course: value,
    //     }));
    //     localStorage.setItem("course", option.label)
    //   };

      const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  return (
        
        <Select
        showSearch
        bordered={false}
        placeholder={placeholder}
        optionFilterProp="children"
        className={className}
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
    
    style={{
        width: '100%', 
           
        border:'none',
        fontSize:'1.1rem',
        fontWeight:'500',

      }}


options={[

  { value: '(Shorelight) Johns Hopkins University' , label:'(Shorelight) Johns Hopkins University'},
  { value: 'University of Maryland Baltimore County' , label:'University of Maryland Baltimore County'},
  { value: 'Florida International University, Florida' , label:'Florida International University, Florida'},
  { value: 'California Institute of Technology (Caltech)' , label:'California Institute of Technology (Caltech)'},
  { value: 'Princeton University' , label:'Princeton University'},
  { value: 'Yale University' , label:'Yale University'},
  { value: 'Columbia University' , label:'Columbia University'},
  { value: 'University of Chicago' , label:'University of Chicago'},
  { value: 'University of California, Berkeley' , label:'University of California, Berkeley'},
  { value: 'University of Pennsylvania' , label:'University of Pennsylvania'},
  { value: 'Johns Hopkins University' , label:'Johns Hopkins University'},
  { value: 'Northwestern University' , label:'Northwestern University'},
  { value: 'Duke University' , label:'Duke University'},
  { value: 'University of Michigan' , label:'University of Michigan'},
]}
  />
  )
}



export default University1