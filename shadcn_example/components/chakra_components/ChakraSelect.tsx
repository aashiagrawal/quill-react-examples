import { Select } from '@chakra-ui/react'
import { SelectComponentProps } from '@quillsql/react/src/Dashboard'

export function ChakraSelect({options, onChange, value, label}: SelectComponentProps) {
    
    return (
        <Select placeholder='Select option' onChange={(event) => onChange(event.target.value)} >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option} 
                </option>
            ))}
        </Select>
    );
}