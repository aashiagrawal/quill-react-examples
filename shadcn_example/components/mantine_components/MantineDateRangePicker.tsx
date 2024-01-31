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
            styles={{
              day: {
                "&[data-selected]": {
                  backgroundColor: "red",
                  color: "white",
                },
            
                "&[data-selected]:hover": {
                  backgroundColor: "green",
                  color: "yellow",
                },
              }
            }}
          />
    </div>
  );
}
