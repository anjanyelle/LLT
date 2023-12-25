import React from 'react';
import { Card } from 'antd';
const Card1 = (props) => (
  <Card title={props.title}>
    {/* <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </Card> */}
    <p><i class="fa-solid fa-tag"></i> {props.data}</p>
    <p> <i class="fa-solid fa-book-open"></i> <strong>{props.heading}</strong>{props.data1}  </p>
    <p> <i class="fa-solid fa-book-open"></i> <strong>{props.heading1}</strong> {props.proje}  </p>
    <p><strong>Commitment to research: </strong>Northern Illinois University is a major research university with over $50 million in annual research expenditures.</p>
    <p><strong>Beautiful campus: </strong> Northern Illinois University's campus is located in a beautiful setting on the shores of DeKalb Lake.</p>
     <p> <strong>Strong alumni network: </strong> Northern Illinois University has a strong alumni network that can provide students with support and guidance after graduation.</p>
  </Card>
);
export default Card1;