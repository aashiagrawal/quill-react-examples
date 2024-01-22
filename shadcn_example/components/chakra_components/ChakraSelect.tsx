import { Select, Heading } from '@chakra-ui/react'
import { SelectComponentProps } from '@quillsql/react/src/Dashboard'
import { DateRangePickerOption } from '@quillsql/react/src/DateRangePicker/DateRangePicker'

type ShadcnSelectScrollableProps = {
    label: string,
    onChange: (preset: DateRangePickerOption) => void,
    value: string,
    options: Option[]
  }

export function ChakraSelect({options, onChange, value, label}: ShadcnSelectScrollableProps) {
    const validOptions = options.filter(option => option.value !== '');
    return (
        <div>
            <Select placeholder='Select option' onChange={onChange}>
                {validOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text || option.label}
                    </option>
                ))}
                {/* {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option} 
                    </option>
                ))} */}
            </Select>
        </div>
    );
}

// DateRangePickerComponent={({ 
//     dateRange = dateProp as DateRange,
//     label = {}, 
//     onChangeDateRange = (value: DateRange) => {}, 
//     selectedPreset = "", 
//     presetOptions = [],
//     onChangePreset = (preset: DateRangePickerOption) => {}, 
//     preset = "", 
//     theme = {} 
// }) => (
//   <div>
//     <div style={{"marginBottom": 9, "marginTop": 24}}>
//       <LabelDemo children={label}/>
//     </div>
//     <div className="flex">
//       <div style={{"marginRight": 10}}>
//         <ShadcnDatePickerAdapter 
//           dateRange={dateRange}
//           label={label}
//           onChangeDateRange={onChangeDateRange}
//         />
//       </div>
//       <div>
//         <SelectScrollable
//           label={label}
//           options={presetOptions}
//           onChange= {onChangePreset}
//           value={preset}
//         />
//       </div>
//     </div>
//   </div>
// )}