import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import { DateRangePickerComponentProps } from "@quillsql/react/src/Dashboard";
import { Popover } from '@headlessui/react'
import ShadcnDatePickerAdapter from "@/adapters/ShadcnDatePickerAdapter";

export default function TailwindDateRangePicker({dateRange, onChangeDateRange}: DateRangePickerComponentProps) { 

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
                {formatDate(dateRange[0])} - {formatDate(dateRange[1])}
            </button>
            {
                showPopover &&

                <div
                    data-popover="popover"
                    className="absolute w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                    >
                    <ShadcnDatePickerAdapter dateRange={dateRange} onChangeDateRange={onChangeDateRange}/>
                </div>
            }
        </div>
    );
}; 