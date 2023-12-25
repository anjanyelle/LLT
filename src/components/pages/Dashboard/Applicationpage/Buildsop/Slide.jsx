import React, { useState } from 'react';
import { Button, Input, message, Steps, theme } from 'antd';

import '../build.css'
import { Link } from 'react-router-dom';
const Slide = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [inputValue, setInputValue] = useState(''); // State for the input value

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'First',
      content: <>
      <div className='formdata'>
 



  <div class="col" >
  <select className="form-select" aria-label="Default select example"  >
  <option selected>UG discipline</option>
  <option value="1">IT</option>
  <option value="2">CSE</option>
  <option value="3"></option>
</select>
  </div></div></>,
    },
    {
      title: 'Second',
      content: <>
      <div  className='formdata1'>
      <h6>Professional experience</h6>
      <div className='experience'>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
<div>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" for="flexCheckDefault">
  i dont have any Gap
  </label>
</div>
<div>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" for="flexCheckDefault">
  i don't have experience but have gap
  </label>

  </div>
</div>
</div></div>
      </>,
    },
    {
      title: 'Last',
      content: <>
         <div  className='formdata1'>
      <h6 className='graduate-courses'>desired graduate courses</h6>
      <div className='experience'>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" for="flexCheckDefault">
  similar to  my ug
  </label>
<div>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" for="flexCheckDefault">
  stream change
  </label>
</div>
<div>
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" for="flexCheckDefault">
  similar  to job experiences
  </label>

  </div>
</div>
</div></div></>,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    // lineHeight: '260px',
    // textAlign: 'center',
    // color: token.colorTextTertiary,
    // backgroundColor: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    // marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Link to="/buildFilter" ><Button type="primary" onClick={() => message.success(`Processing complete! Input: ${inputValue}`)}>
            Done
          </Button>           </Link>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default Slide;
