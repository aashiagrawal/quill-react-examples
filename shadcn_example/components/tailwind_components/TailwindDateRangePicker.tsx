import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import { DateRangePickerComponentProps } from "@quillsql/react/src/Dashboard";

export default function TailwindDateRangePicker({dateRange, onChangeDateRange}: DateRangePickerComponentProps) { 

    const transformedDateRange = {
        starDate: dateRange[0] || undefined,
        endDate: dateRange[1] || undefined,
    }

    const onChangeDateRangeTransformed = (value) => {
        onChangeDateRange([value.starDate, value.endDate]);
    };

    return (
        <Datepicker 
        useRange={false}
            value={transformedDateRange} 
            onChange={onChangeDateRangeTransformed} 
        /> 
    );
}; 