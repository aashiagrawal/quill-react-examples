import { DatePickerInput, DatesProvider } from '@mantine/dates';
import { DateRange } from '@quillsql/react/src/DateRangePicker/DateRangePicker';

type MantineDateRangePickerProps = {
  dateRange: DateRange | undefined
  onChangeDateRange: (value: DateRange) => void
  label: string
}

export default function MantineDateRangePicker({dateRange, onChangeDateRange, label}: MantineDateRangePickerProps) {
  const getDayProps: DatePickerProps['getDayProps'] = (date) => {
    if (date.getDay() === 5 && date.getDate() === 13) {
      return {
        style: {
          backgroundColor: 'var(--mantine-color-red-filled)',
          color: 'var(--mantine-color-white)',
        },
      };
    }
  
    return {};
  };
  
  const getYearControlProps: DatePickerProps['getYearControlProps'] = (date) => {
    if (date.getFullYear() === new Date().getFullYear()) {
      return {
        style: {
          color: 'var(--mantine-color-blue-filled)',
          fontWeight: 700,
        },
      };
    }
  
    if (date.getFullYear() === new Date().getFullYear() + 1) {
      return { disabled: true };
    }
  
    return {};
  };
  
  const getMonthControlProps: DatePickerProps['getMonthControlProps'] = (date) => {
    if (date.getMonth() === 1) {
      return {
        style: {
          color: 'var(--mantine-color-blue-filled)',
          fontWeight: 700,
        },
      };
    }
  
    if (date.getMonth() === 5) {
      return { disabled: true };
    }
  
    return {};
  };
  return (
    <div>
      <DatesProvider>
          <DatePickerInput
            type="range"
            label={label}
            placeholder="Pick dates range"
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
      </DatesProvider>
    </div>
  );
}
