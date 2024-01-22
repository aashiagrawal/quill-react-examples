import React from 'react'
import { SelectComponentProps } from '@quillsql/react/src/Dashboard'

export function TailwindSelect({options, onChange, value, label}: SelectComponentProps){
  return (
    <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
            {label}
        </label>
        <select
        id="id"
        name="name"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={value}
        onChange={onChange}
        >
            {options.map(option => (
                <option>{option}</option>
            ))}

        </select>
    </div>
  )
}

export default TailwindSelect