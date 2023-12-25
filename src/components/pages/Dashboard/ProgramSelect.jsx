import React, { useState } from 'react';
import { Select, Space } from 'antd';import './Step.css'
import Select1 from './Select1';
import Side1 from './Side1';
const provinceData = ['Zhejiang', 'Jiangsu','Zhejiang'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
const ProgramSelect = () => {
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const  [size ,setsize]=useState('large')
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const[programSelect, setProgramSelect]=useState({
    programSelectapi:'',
    searchbaropen:false

  })

  

  const AdvancedSearch =()=>{
setProgramSelect({
  ...programSelect,
  searchbaropen:!programSelect.searchbaropen,
})
  }
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };
  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };
  return (
    <>
    <div className='program'>
    <Space wrap>    
      {/* <Select
        defaultValue={provinceData[0]}
        style={{
        //   width: 120,
        width: '14rem',
        
        }}
        size={size}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({
          label: province,
          value: province,
        
        }))}
      /> */}
      <Select1 placeholder="Select Course"/>
      <Select1 placeholder="Select University"/>
      <Select1 placeholder="Select Country"/>
         {/* <Select
        style={{
          width: '14rem',
        }}
        size={size}
        value={secondCity}
        onChange={onSecondCityChange}
        options={cities.map((city) => ({
          label: city,
          value: city,
        }))}
      />
      <Select
        style={{
          width: '14rem',
        }}
        size={size}
        value={secondCity}
        onChange={onSecondCityChange}
        options={cities.map((city) => ({
          label: city,
          value: city,
        }))}
      /> */}
    </Space>


{programSelect.searchbaropen && <Side1 toggel={programSelect.searchbaropen} />}
    <button  className="btn btn-primary col-md-2 mx-2">
        Program Finder
          </button>
    </div>
       <p  className='addvancesearch' onClick={AdvancedSearch}>Advanced Search ?</p>
       </>
  );
};
export default ProgramSelect;