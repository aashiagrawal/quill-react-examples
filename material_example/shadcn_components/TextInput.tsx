import {useState} from 'react'
import { Input } from "@/components/ui/input"

type ShadcnInputProps = {
    onChange: (e: any) => void,
    value: string,
    id: string,
    placeholder?: string
  }
  
export function TextInput({ onChange, value, id, placeholder }: ShadcnInputProps) {
  const [currValue, setCurrValue] = useState(value);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCurrValue(newValue);
    onChange(newValue); // Pass only the value, not the entire event
  };

  return <Input onChange={onChangeHandler} value={currValue} id={id} placeholder={placeholder}/>;
}
  