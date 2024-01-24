import { DatePickerInput } from '@mantine/dates';
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
            placeholder="Pick dates range"
            value={dateRange}
            onChange={onChangeDateRange}
          />
    </div>
  );
}
