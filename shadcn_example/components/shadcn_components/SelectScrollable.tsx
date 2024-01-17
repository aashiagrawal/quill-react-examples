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
    options: Option[]
  }
  
export function SelectScrollable({
  label, 
  options,
  onChange,
  value
}: ShadcnSelectScrollableProps) {

  console.log("label: ", label)
  console.log("options: ", options)

  const validOptions = options.filter(option => option.value !== '');

  return (
    <div>
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder={label} />
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
