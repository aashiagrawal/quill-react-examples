import { Input } from '@chakra-ui/react'
import { TextInputComponentProps } from '@quillsql/react/src/components/UiComponents'
import { useState } from 'react';

export function ChakraTextInput({onChange, label, value, placeholder, id}: TextInputComponentProps) {
  const [currValue, setCurrValue] = useState(value);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCurrValue(newValue);
    onChange(newValue); // Pass only the value, not the entire event
  };
  return (
    <Input onChange={onChangeHandler} placeholder={placeholder} value={currValue} id={id}/>
  )
}

export default ChakraTextInput