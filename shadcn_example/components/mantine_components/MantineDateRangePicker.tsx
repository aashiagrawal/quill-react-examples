import { DatePickerInput, DatesProvider } from '@mantine/dates';
import { DateRange } from '@quillsql/react/src/DateRangePicker/DateRangePicker';

type MantineDateRangePickerProps = {
  dateRange: DateRange | undefined
  onChangeDateRange: (value: DateRange) => void
}

export default function MantineDateRangePicker({dateRange, onChangeDateRange}: MantineDateRangePickerProps) {
  return (
    <div>
          <DatePickerInput
            type="range"
            value={dateRange}
            onChange={onChangeDateRange}
            numberOfColumns={2}
          />
    </div>
  );
}
