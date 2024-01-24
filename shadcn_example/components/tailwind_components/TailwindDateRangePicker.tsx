import React, {useState, useEffect} from "react"; 
import { DateRangePickerComponentProps } from "@quillsql/react/src/Dashboard";
import { Calendar } from "../ui/calendar";
import { DateRange} from "react-day-picker";

export default function TailwindDateRangePicker({dateRange, onChangeDateRange}: DateRangePickerComponentProps) { 

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

    const [showPopover, setShowPopover] = useState(false)
    const togglePopover = () => {
        setShowPopover(!showPopover)
    }

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
        <div>
            <button
                type="button"
                className={"rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"}
                onClick={togglePopover}
            >   
                {formatDate(transformedDateRange.from)} - {formatDate(transformedDateRange.to)}
            </button>
            {
                showPopover &&
                
                <div
                    data-popover="popover"
                    className=" mt-3 z-50 absolute w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                    >
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={transformedDateRange?.from}
                        selected={transformedDateRange}
                        onSelect= {onUpdateRange}
                        numberOfMonths={2}
                    />
                </div>
            }
        </div>
    );
}; 