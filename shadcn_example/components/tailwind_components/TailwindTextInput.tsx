import React, {useState} from 'react'
import { TextInputComponentProps } from '@quillsql/react/src/components/UiComponents'

export function TailwindTextInput({onChange, label, value, placeholder, id}: TextInputComponentProps) {
  const [currValue, setCurrValue] = useState(value);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCurrValue(newValue);
    onChange(newValue); // Pass only the value, not the entire event
  };
  return (
      <div className="mt-2">
        <input
          id={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={currValue}
        />
      </div>
  )
}

export default TailwindTextInput