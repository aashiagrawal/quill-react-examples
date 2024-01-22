import { useState } from "react";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { DateRangePickerComponentProps } from "@quillsql/react/src/Dashboard";
import { DateRange } from "react-day-picker";

export default function ChakraDatePicker({dateRange, onChangeDateRange}: DateRangePickerComponentProps) {
    // const [selectedDates, setSelectedDates] = useState<Date[]>([new Date(), new Date()]);
    return (
        <RangeDatepicker
            selectedDates={[dateRange[0], dateRange[1]]}
            onDateChange={onChangeDateRange}
        />
    )
}
  