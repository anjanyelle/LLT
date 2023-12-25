import React, { useState } from 'react';
import { Radio, Space, Tabs } from 'antd';
const Tab = () => {
  const [tabPosition, setTabPosition] = useState('left');

  return (
    <> 

      <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      />
    </>
  );
};
export default Tab;