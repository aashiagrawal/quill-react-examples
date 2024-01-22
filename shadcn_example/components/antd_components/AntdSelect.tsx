import React from 'react';
import { Select } from 'antd';

export function AntdSelect({options, onChange, value}) {
    console.log("options: ", options)
    const convertedOptions = options.map(option => ({ label: option.text?option.text: option.label? option.label: option, value: option.value?option.value: option }));

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
