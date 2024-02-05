import React from 'react';
import { Select } from 'antd';

export function AntdSelect({options, onChange, value, style}) {
    // Adding a default 'Select' option
    const defaultOption = { label: "Select", value: "" };
    console.log("this is options: ", options)
    // Convert options and include the default option
    const convertedOptions = [defaultOption, ...options.map(option => ({
        label: option.text || option.label || option,
        value: option.value || option
    }))];

    return (
        <Select
          style={{ width: "200px" }}
          placeholder="Select"
          onChange={onChange}
          options={convertedOptions}
          value={value}
        />
    );
}
