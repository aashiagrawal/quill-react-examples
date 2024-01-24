import { useEffect, useState } from "react";
import { DateRangePickerComponentProps } from "@quillsql/react/src/Dashboard";
import { DateRange} from "react-day-picker";
import { Calendar } from "../ui/calendar";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button
  } from '@chakra-ui/react'

export default function ChakraDatePicker({dateRange, onChangeDateRange}: DateRangePickerComponentProps) {

    const [transformedDateRange, setTransformedDateRange] = useState({})

    useEffect(() => {
        setTransformedDateRange({ from: dateRange[0] || undefined,
            to: dateRange[1] || undefined})
    }, dateRange)

    const onChangeDateRangeTransformed = (value) => {
        onChangeDateRange([value.from, value.to]);
    };

    const onUpdateRange = (range: DateRange | undefined) => {
        // Assuming selectedRange is an object with 'from' and 'to' Date properties
        const newRange = {
          from: range?.from,
          to: range?.to,
        };
      
        setTransformedDateRange(newRange);
        onChangeDateRangeTransformed(newRange);
      };

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    return (
        <Popover placement='bottom-start'>
            <PopoverTrigger>
                <Button variant="outline" fontWeight="normal">{formatDate(transformedDateRange.from)} - {formatDate(transformedDateRange.to)}</Button>
            </PopoverTrigger>
            <PopoverContent width={'fit-content'}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={transformedDateRange?.from}
                    selected={transformedDateRange}
                    onSelect= {onUpdateRange}
                    numberOfMonths={2}
                />
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
  