import { DatePickerInput, DatesProvider } from '@mantine/dates';
import { DateRange } from '@quillsql/react/src/DateRangePicker/DateRangePicker';

type MantineDateRangePickerProps = {
  dateRange: DateRange | undefined
  onChangeDateRange: (value: DateRange) => void
  label: string
}

export default function MantineDateRangePicker({dateRange, onChangeDateRange, label}: MantineDateRangePickerProps) {
  return (
    <div>
          <DatePickerInput
            type="range"
            label={label}
            value={dateRange}
            onChange={onChangeDateRange}
            numberOfColumns={2}
            // styles={{

            //   // monthCell: { backgroundColor: "red" },
            //   day: { 
            //     // {"data-selected"}? "red": "black"
            //   // "data-selected]" : {
            //   //   backgroundColor: "red"
            //   // },
                
            //     backgroundColor: "green"}
              
            // }}
          />
    </div>
  );
}
