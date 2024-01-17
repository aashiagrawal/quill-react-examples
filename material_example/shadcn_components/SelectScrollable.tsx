import * as React from "react"
import { Option } from "@quillsql/react/src/components/UiComponents"
import {useState} from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type ShadcnSelectScrollableProps = {
    label: string,
    onChange: (value: string) => void,
    value: string,
    options: Option[]
  }

export function SelectScrollable({
    label, 
    options,
    onChange,
    value
  }: ShadcnSelectScrollableProps) {

  const map = options.reduce((acc, option) => {
      // Check if the label already exists in the map
      if (!acc[option.label]) {
          acc[option.label] = []; // Initialize an empty array for this label
      }
  
      // Push the value into the array corresponding to this label
      acc[option.label].push(option.value);
  
      return acc;
  }, {} as Record<string, string[]>);
  const [currValue, setCurrValue] = useState(value);

  const handleValueChange = (e: string) => {
    onChange(e);
    setCurrValue(e)
  }

  return (
    <Select value={currValue} onValueChange={handleValueChange}>
        <SelectTrigger className="w-[280px]">
            <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
            {Object.entries(map).map(([label, values]) => (
                <SelectGroup key={label}>
                    {values.map(value => (
                        <SelectItem key={value} value={value}>{value}</SelectItem>
                    ))}
                </SelectGroup>
            ))}
        </SelectContent>
    </Select>
  )
}
