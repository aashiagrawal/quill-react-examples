import { Select, Heading } from '@chakra-ui/react'
import { SelectComponentProps } from '@quillsql/react/src/Dashboard'
import { DateRangePickerOption } from '@quillsql/react/src/DateRangePicker/DateRangePicker'

type ShadcnSelectScrollableProps = {
    label: string,
    onChange: (preset: DateRangePickerOption) => void,
    value: string,
    options: Option[]
  }
  
export function ChakraSelect({ options, onChange, value, label }: ShadcnSelectScrollableProps) {
    const validOptions = options.filter(option => option.value !== '');
  
    // Update to handle the synthetic event and extract the value
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value);
    };
  
    return (
      <div>
        <Select placeholder='Select' onChange={handleChange} value={value} style={{"width": "185px"}}>
          {validOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.text || option.label}
            </option>
          ))}
        </Select>
      </div>
    );
  }