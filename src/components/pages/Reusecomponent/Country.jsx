import React, { useEffect, useState } from 'react'

import { Select } from 'antd';



   const Country =({className , placeholder   }) =>{

    const [coursename , setcourseName]=useState({
        course:"",
    });

    const onChange = (value) => {
      console.log(`selected ${value}`);
      localStorage.setItem("country", value)
      
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

  { value: 'United States of America' , label:'United States'},
  { value: 'United Kingdom' , label:'United Kingdom'},
  { value: 'Canada' , label:'Canada'},
  { value: 'Australia' , label:'Australia'},
  { value: 'Germany' , label:'Germany'},
  { value: 'France' , label:'France'},


  

]}
  />
  )
}



export default Country