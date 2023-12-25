import React from 'react';
import { Table, Divider } from 'antd';
const columns = [
  {
    title: 'UG Course',
    dataIndex: 'name',
  },
  {
    title: 'Job',
    dataIndex: 'age',
  },
  {
    title: 'Masters',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'MECH',
    age: 'Related to MECH',
    address: 'MECH',
  },

];
const Buildtable = () => (
  <>    
    <Table columns={columns} dataSource={data} size="small" />
  </>
);
export default Buildtable;