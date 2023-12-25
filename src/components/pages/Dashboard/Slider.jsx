import React from 'react';
import { Carousel } from 'antd';import './Step.css'
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const Slider = () => (
  <>
  <Carousel autoplay>
    <div>
        <h3 style={contentStyle}>
        <img src='https://img.freepik.com/premium-photo/male-student-using-laptop-with-smile-grey-background-indian-pakistani-model_561639-122.jpg?w=826' className='imagesfit'/> 
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src='https://img.freepik.com/free-photo/focused-students-using-tablet-discussing-information_1262-14929.jpg?w=740&t=st=1696248388~exp=1696248988~hmac=63e83deed9ae77ed7778e5a436f87cf97096c7cf35c53409fa9b04f7f50f10ba' className='imagesfit'/>
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
  <div>
    
    <h6>LLT Overseas</h6>
    One stop shop for all your international education needs Established in 2016, Orient Spectra has come a long way in providing quality services in the field of overseas education Representatives of premiere Universities in the UK, USA, Canada, Australia, Ireland, New Zealand, European countries.</div>
  </>
);
export default Slider;