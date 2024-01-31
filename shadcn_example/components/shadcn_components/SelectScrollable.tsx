import * as React from "react"
import { Option } from "@quillsql/react/src/components/UiComponents"
import { DateRange, DateRangePickerOption } from '@quillsql/react/src/DateRangePicker/DateRangePicker'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type ShadcnSelectScrollableProps = {
    label: string,
    onChange: (preset: DateRangePickerOption) => void,
    value: string,
    options: Option[],
    width?:any
  }
  
export function SelectScrollable({
  label, 
  options,
  onChange,
  value,
  width
}: ShadcnSelectScrollableProps) {

  const validOptions = options.filter(option => option.value !== '');
  const selectTriggerStyle = width ? `w-[${width}px] z-100` : "w-[280px]";
  console.log("This is value in shadcn dropdown: ", value)
  return (
    <div>
      <Select onValueChange={onChange}>
        <SelectTrigger className={selectTriggerStyle}>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {validOptions.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.text || option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

  )
}
