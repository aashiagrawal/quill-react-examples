import { TextInput } from '@mantine/core';
import { useState } from 'react';

type MantineTextInputProps = {
    onChange: (e:any)=>void,
    label: string,
    value: string,
    placeholder: string,
}

export default function MantineTextInput({onChange, label, value, placeholder}: MantineTextInputProps) {
  
  const [currValue, setCurrValue] = useState(value);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCurrValue(newValue);
    onChange(newValue); // Pass only the value, not the entire event
  };

  return (
    <TextInput
    //   label={label}
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={currValue}
      style={{width:"206px"}}
    />
  );
}