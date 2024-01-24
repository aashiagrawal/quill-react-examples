import { useState } from "react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { DateRangePickerComponentProps } from "@quillsql/react/src/Dashboard";
import { DateRange } from "react-day-picker";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button
  } from '@chakra-ui/react'
import ShadcnDatePickerAdapter from "@/adapters/ShadcnDatePickerAdapter";

export default function ChakraDatePicker({dateRange, onChangeDateRange}: DateRangePickerComponentProps) {

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
        <Popover>
            <PopoverTrigger>
                <Button variant="outline">{formatDate(dateRange[0])} - {formatDate(dateRange[1])}</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <ShadcnDatePickerAdapter
                        dateRange={dateRange}
                        onChangeDateRange={onChangeDateRange}
                        label={""}
                    />
                </PopoverBody>
            </PopoverContent>
        </Popover>
        // <RangeDatepicker
        //     selectedDates={[dateRange[0], dateRange[1]]}
        //     onDateChange={onChangeDateRange}
        // />
    )
}
  