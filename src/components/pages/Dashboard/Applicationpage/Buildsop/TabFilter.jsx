import React from 'react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
const TabFilter = () => (
  <Tabs
    defaultActiveKey="4"
    items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
      const id = String(i + 1);
      return {
        label: (
          <span>
            <Icon />
            Tab {id}
          </span>
        ),
        key: id,
        children: `Tab ${id}`,
      };
    })}
  />
);
export default TabFilter;