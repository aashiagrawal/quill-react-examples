import React from 'react';
import { Select } from 'antd';

export function AntdSelect({options, onChange, value}) {
    console.log(options)
    const convertedOptions = options.map(option => ({ label: option, value: option }));
    console.log("convertedOptions: ", convertedOptions)

    const handleChange = (value) => {
        onChange(value);
    };
    return (
        <Select
          style={{ minWidth: 200 }}
          placeholder="Select"
          onChange={onChange}
          options={convertedOptions}
          value = {value}
        />
    )
}
