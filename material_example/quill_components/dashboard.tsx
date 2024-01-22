import { Fragment, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Dashboard } from '@quillsql/react'
import { DateRange } from '@quillsql/react/src/DateRangePicker/DateRangePicker'
import { addDays} from "date-fns"
import ShadcnDatePickerAdapter from '@/adapters/ShadcnDatePickerAdapter'
import { SelectScrollable } from '@/shadcn_components/SelectScrollable'

export default function DashExample() {

  const dateProp: DateRange = [new Date(2022, 0, 20), addDays(new Date(2022, 0, 20), 20)];
  const [selection, setSelection] = useState("")
  const handleSelectChange = (newValue:string) => {
    setSelection(newValue);

  }

  return (
    <>
      <div className="min-h-full">
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1> */}
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
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
                <div>
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
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
