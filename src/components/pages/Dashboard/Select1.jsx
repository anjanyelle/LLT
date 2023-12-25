import React, { useState } from 'react';
import { Select } from 'antd';

const OPTIONS=["Australia",
"Canada",
"Germany",
"Switzerland",
"US",
"UK",
"New Zealand",
"The Netherlands",]
// const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
const Select1 = ({placeholder  }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <Select
      mode="multiple"
      placeholder={placeholder}
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '14rem',
      }}
      size='large'
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};
export default Select1;