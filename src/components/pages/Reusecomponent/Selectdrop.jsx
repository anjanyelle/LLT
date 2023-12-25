import React, { useMemo, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import { Select, Spin } from 'antd';
function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect

async function fetchUserList(username) {
  console.log('fetching user', username);
  return fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((body) =>
      body.results.map((user) => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
      })),
    );
}
const Selectdrop = ({className , placeholder , }) => {
  const [value, setValue] = useState([]);

  return (
    <DebounceSelect 
      mode="multiple"
      bordered={false}
      className={className}
      value={value}
      placeholder={placeholder}
      fetchOptions={fetchUserList}
      size="large"
      onChange={(newValue) => {
        setValue(newValue);
      }}
      dropdownStyle
    style={{
        width: '100%', 
           
        border:'none',
        fontSize:'1.1rem',
        fontWeight:'500',

      }}
    />
  );
};
export default Selectdrop;