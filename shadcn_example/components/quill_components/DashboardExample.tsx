import { Fragment, useContext, useState, useEffect} from 'react'
import { Dashboard } from '@quillsql/react'
import { DateRange, DateRangePickerOption } from '@quillsql/react/src/DateRangePicker/DateRangePicker'
import { addDays} from "date-fns"
import ShadcnDatePickerAdapter from '@/adapters/ShadcnDatePickerAdapter'
import { SelectScrollable } from '@/components/shadcn_components/SelectScrollable'
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StyleContext } from '@/context/StyleContext'
import { CardComponent } from '@/components/shadcn_components/CardComponent'
import { CardHeader, CardContent, Card, Typography } from '@mui/material'
import { LabelDemo } from '@/components/shadcn_components/Label'
import { NativeSelect } from '@mantine/core';
import { Textarea } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates'
import { MantineCard } from '@/components/mantine_components/MantineCard'
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { LibraryNameContext } from '@/app/layout'
import { Library } from 'lucide-react'
import { AntdDatePicker } from '../antd_components/AntdDatePicker'
import AntdCard from '../antd_components/AntdCard'
import { AntdSelect } from '../antd_components/AntdSelect'
import { ChakraSelect } from '../chakra_components/ChakraSelect'
import { ChakraCard } from '../chakra_components/ChakraCard'
import TailwindCard from '../tailwind_components/TailwindCard'
import TailwindSelect from '../tailwind_components/TailwindSelect'

export default function DashExample() {
  // const { style, setStyle} = useContext(StyleContext);
  const [ style, setStyle] = useContext(LibraryNameContext);


  const dateProp: DateRange = [new Date(2022, 0, 20), addDays(new Date(2022, 0, 20), 20)];
  const [selection, setSelection] = useState("")
  const handleSelectChange = (newValue:string) => {
    setSelection(newValue);
  }

  const renderDashboard = () => {
    switch(style) {
      case 'default':
        console.log("in default")
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

              FilterDropdownComponent={({ 
                label = "Date", 
                options = [], 
                onChange = (preset) => console.log("Preset Changed:", preset), 
                value = ""
            }) => (
                <div className="flex">
                    <SelectScrollable
                      label={label}
                      options={options}
                      onChange={handleSelectChange}
                      value={selection}
                    />
                </div>
            )}

              DateRangePickerComponent={({ 
                dateRange = dateProp as DateRange,
                label = {}, 
                onChangeDateRange = (value: DateRange) => {}, 
                selectedPreset = "", 
                presetOptions = [],
                onChangePreset = (preset: DateRangePickerOption) => {}, 
                preset = "", 
                theme = {} 
            }) => (
              <div>
                <div style={{"marginBottom": 9, "marginTop": 24}}>
                  <LabelDemo children={label}/>
                </div>
                <div className="flex">
                  <div style={{"marginRight": 10}}>
                    <ShadcnDatePickerAdapter 
                      dateRange={dateRange}
                      label={label}
                      onChangeDateRange={onChangeDateRange}
                    />
                  </div>
                  <div>
                    <SelectScrollable
                      label={label}
                      options={presetOptions}
                      onChange= {onChangePreset}
                      value={preset}
                    />
                  </div>
                </div>
              </div>
            )}
            DashboardItemComponent={({ dashboardItem, children }) => {
              return (
                <CardComponent
                  dashboardName={dashboardItem.name}
                  children={children}
                />
              );
            }}
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
            DateRangePickerComponent={({ 
                  dateRange = dateProp as DateRange,
                  label = {}, 
                  onChangeDateRange = (value: DateRange) => {}, 
                  selectedPreset = "", 
                  presetOptions = [],
                  onChangePreset = (preset: DateRangePickerOption) => {}, 
                  preset = "", 
                  theme = {} 
              }) => (
                <div style={{"marginTop": 24}}>
                  <Typography
                    style={{ marginBottom: 12, fontWeight: "600", fontSize: 14 }}
                  >
                    {label}
                  </Typography>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div className="flex">
                      <div style={{"marginRight": 10}}>
                        <DateRangePicker
                          slots={{ field: SingleInputDateRangeField }}
                          name="allowedRange"
                        />
                      </div>
                      <div>
                        <FormControl>
                          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value=""
                            label={label}
                            style={{ width: 230 }}
                            onChange={onChangePreset}
                          >
                            {presetOptions.map((option) => (
                              <MenuItem value={option.value}>{option.text}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  </LocalizationProvider>
                </div>
            )}
            DashboardItemComponent={({ dashboardItem, children }) => {
              return (
                <Card>
                  <CardHeader title={dashboardItem.name}/>
                  <CardContent>{children}</CardContent>
                </Card>
              );
            }}
            />
        )
      case 'mantine':
          console.log("here");
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
                label = {}, 
                onChangeDateRange = (value: DateRange) => {}, 
                selectedPreset = "", 
                presetOptions = [],
                onChangePreset = (preset: DateRangePickerOption) => {}, 
                preset = "", 
                theme = {} 
              }) => (
                <div>
                  <div style={{"marginBottom": 9, "marginTop": 24}}>
                    <LabelDemo children={label}/>
                  </div>
                  <div className="flex">
                    <div style={{"marginRight": 10}}>
                      <ShadcnDatePickerAdapter 
                        dateRange={dateRange}
                        label={label}
                        onChangeDateRange={onChangeDateRange}
                      />
                    </div>
                    <div>
                      <NativeSelect data={presetOptions.map(option => option.text)} onChange={onChangePreset}/>
                    </div>
                  </div>
                </div>
              )}
              DashboardItemComponent={({
                dashboardItem, children
              }) => (
                <div>
                  <MantineCard
                    children={children}
                    dashboardName={dashboardItem.name}
                  />
                </div>
              )}
            />
        )
      case 'antd': 
        return (
          <Dashboard
            name="transactions"
            containerStyle={{
              paddingLeft: 25,
              paddingRight: 25,
              paddingTop: 50,
              width: "100%",
            }}
            DateRangePickerComponent={({ 
              dateRange = dateProp as DateRange,
              label = {}, 
              onChangeDateRange = (value: DateRange) => {}, 
              selectedPreset = "", 
              presetOptions = [],
              onChangePreset = (preset: DateRangePickerOption) => {}, 
              preset = "", 
              theme = {} 
            }) => (
              <div>
                <div style={{"marginBottom": 9, "marginTop": 24}}>
                  <LabelDemo children={label}/>
                </div>
                <div className="flex">
                  <div style={{"marginRight": 10}}>
                    <ShadcnDatePickerAdapter 
                      dateRange={dateRange}
                      label={label}
                      onChangeDateRange={onChangeDateRange}
                    />
                  </div>
                  <div>
                    <AntdSelect options={presetOptions.map(option => option.text)} onChange={onChangePreset}/>
                  </div>
                </div>
              </div>
            )}
            DashboardItemComponent={({dashboardItem, children}) => (
              <AntdCard 
                dashboardName = {dashboardItem.name}
                children = {children}
              />
            )}
          />
        )
        case 'chakra': 
          return (
            <Dashboard
              name="transactions"
              containerStyle={{
                paddingLeft: 25,
                paddingRight: 25,
                paddingTop: 50,
                width: "100%",
              }}
              DateRangePickerComponent={({ 
                dateRange = dateProp as DateRange,
                label = {}, 
                onChangeDateRange = (value: DateRange) => {}, 
                selectedPreset = "", 
                presetOptions = [],
                onChangePreset = (preset: DateRangePickerOption) => {}, 
                preset = "", 
                theme = {} 
              }) => (
                <div>
                  <div style={{"marginBottom": 9, "marginTop": 24}}>
                    <LabelDemo children={label}/>
                  </div>
                  <div className="flex">
                    <div style={{"marginRight": 10}}>
                      <ShadcnDatePickerAdapter 
                        dateRange={dateRange}
                        label={label}
                        onChangeDateRange={onChangeDateRange}
                      />
                    </div>
                    <div>
                      <ChakraSelect options={presetOptions.map(option => option.text)} onChange={onChangePreset}/>
                    </div>
                  </div>
                </div>
              )}
              DashboardItemComponent={({dashboardItem, children}) => (
                <ChakraCard 
                  dashboardName = {dashboardItem.name}
                  children = {children}
                />
              )}
            />
        )
        case 'tailwind': 
          return (
            <Dashboard
              name="transactions"
              containerStyle={{
                paddingLeft: 25,
                paddingRight: 25,
                paddingTop: 50,
                width: "100%",
              }}
              DateRangePickerComponent={({ 
                dateRange = dateProp as DateRange,
                label = {}, 
                onChangeDateRange = (value: DateRange) => {}, 
                selectedPreset = "", 
                presetOptions = [],
                onChangePreset = (preset: DateRangePickerOption) => {}, 
                preset = "", 
                theme = {} 
              }) => (
                <div>
                  <div style={{"marginBottom": 9, "marginTop": 24}}>
                    <LabelDemo children={label}/>
                  </div>
                  <div className="flex">
                    <div style={{"marginRight": 10}}>
                      <ShadcnDatePickerAdapter 
                        dateRange={dateRange}
                        label={label}
                        onChangeDateRange={onChangeDateRange}
                      />
                    </div>
                    <div>
                      <TailwindSelect options={presetOptions.map(option => option.text)} onChange={onChangePreset}/>
                    </div>
                  </div>
                </div>
              )}
              DashboardItemComponent={({dashboardItem, children}) => (
                <TailwindCard 
                  dashboardName = {dashboardItem.name}
                  children = {children}
                />
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
