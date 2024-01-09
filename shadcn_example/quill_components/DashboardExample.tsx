import { Fragment, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Dashboard } from '@quillsql/react'
import { DateRange } from '@quillsql/react/src/DateRangePicker/DateRangePicker'
import { addDays} from "date-fns"
import ShadcnDatePickerAdapter from '@/adapters/ShadcnDatePickerAdapter'
import { SelectScrollable } from '@/shadcn_components/SelectScrollable'
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type DashboardProps = {
  uiname:string
}

export default function DashExample({uiname}:DashboardProps) {

  const dateProp: DateRange = [new Date(2022, 0, 20), addDays(new Date(2022, 0, 20), 20)];
  const [selection, setSelection] = useState("")
  const handleSelectChange = (newValue:string) => {
    setSelection(newValue);
  }

  const renderDashboard = () => {
    switch(uiname) {
      case 'default':
        return (
          <Dashboard
          name="transactions"
          containerStyle={{
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 50,
            width: "100%",
          }}
        />
        )
      case 'shadcn':
        return (
          <Dashboard
              name="transactions"
              containerStyle={{
                paddingLeft: 25,
                paddingRight: 25,
                paddingTop: 30,
                width: "100%",
              }}
              DateRangePickerComponent={({ 
                dateRange = dateProp as DateRange,
                label = "Select Date Range", 
                onChangeDateRange = (value: DateRange) => console.log("Date Range Changed:", value), 
                selectedPreset = "lastMonth", 
                presetOptions = [
                    { value: 'wk', text: 'This week' },
                    { value: 'w', text: 'Last 7 days' },
                    { value: 't', text: 'Last 30 days' }
                ], 
                onChangePreset = (preset) => console.log("Preset Changed:", preset), 
                preset = "defaultPreset", 
                theme = {} 
            }) => (
                <div className="flex">
                    <ShadcnDatePickerAdapter 
                      dateRange={dateRange}
                      label={label}
                      onChangeDateRange={onChangeDateRange}
                      selectedPreset={selectedPreset}
                      presetOptions={presetOptions}
                      onChangePreset={onChangePreset}
                      preset={preset}
                      theme={theme}
                    />
                    <SelectScrollable
                      label="Select preset"
                      options={[{"label": "", "value": "This week"}, {"label": "", "value": "Last 7 days"}, {"label": "", "value": "Last 30 days"}]}
                      onChange={handleSelectChange}
                      value={selection}
                    />
                </div>
            )}
            /> 
        )
        case 'material-ui':
          return (
            <Dashboard
            name="transactions"
            containerStyle={{
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 30,
              width: "100%",
            }}
            FilterDropdownComponent={({ onChange, value, options, label }) => (
              <FormControl>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  label={label}
                  style={{ width: 230 }}
                  onChange={(event) => onChange(event.target.value)}
                >
                  {options.map((option) => (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            DateRangePickerComponent={({}) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                  slots={{ field: SingleInputDateRangeField }}
                  name="allowedRange"
                />
              </LocalizationProvider>
            )}
            />
          )
    }
  }

  return (
    <>
      <div className="min-h-full">
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              {renderDashboard()}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
