import React from 'react'
import { ButtonComponentProps } from '@quillsql/react/src/components/UiComponents'

export function TailwindButton({label, onClick, primary}: ButtonComponentProps) {
    const primary_className = "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    const secondary_className = "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
  return (
    <button
        type="button"
        className={primary?primary_className:secondary_className}
        onClick={onClick}
    >
        {label}
    </button>
  )
}

export default TailwindButton