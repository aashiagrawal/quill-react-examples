import { DateRange } from "react-day-picker"
"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { DateRangePickerOption } from "@quillsql/react/src/DateRangePicker/DateRangePicker"

type ShadcnDateRangePickerComponentProps = {
  className: string
  dateRange:DateRange,
  onChangeDateRange: (value: DateRange) => void,
  presetOptions: DateRangePickerOption[],
  onChangePreset: (preset: DateRangePickerOption) => void,
  preset: string,
  theme: any,
  selectedPreset: string
}
  
// interface QuillShadcnDateRangePickerComponentProps extends Omit<ShadcnDateRangePickerComponentProps & DateRangePickerProps, "className"> {
//   className: string
// }

export function DatePickerWithRange({
  className,
  dateRange, 
  onChangeDateRange,
  presetOptions,
  onChangePreset,
  preset,
  theme,
  selectedPreset
}: ShadcnDateRangePickerComponentProps) {

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: dateRange.from,
    to: dateRange.to,
  })


const onUpdateRange = (range: DateRange | undefined) => {
  // Assuming selectedRange is an object with 'from' and 'to' Date properties
  const newRange = {
    from: range?.from,
    to: range?.to,
  };

  setDate(newRange);
  onChangeDateRange(newRange);
};

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect= {onUpdateRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
