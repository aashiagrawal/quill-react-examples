import React, {useState} from 'react';
import { Input } from 'antd';
import { TextInputComponentProps } from '@quillsql/react/src/components/UiComponents';


export function AntdTextInput({onChange, label, value, placeholder, id, style}: TextInputComponentProps) { 
    const [currValue, setCurrValue] = useState(value);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setCurrValue(newValue);
      onChange(newValue); // Pass only the value, not the entire event
    };
  
    return (
        <Input 
        placeholder={placeholder} 
        onChange={onChangeHandler} 
        value={currValue} id={id} 
        style={style}
        />
    )
}