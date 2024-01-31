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
import { CardComponent } from '@/components/shadcn_components/CardComponent'
import { CardHeader, CardContent, Card, Typography } from '@mui/material'
import { LabelDemo } from '@/components/shadcn_components/Label'
import { MantineCard } from '@/components/mantine_components/MantineCard'
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { LibraryNameContext } from '@/app/layout'
import { AntdDatePicker } from '../antd_components/AntdDatePicker'
import AntdCard from '../antd_components/AntdCard'
import { AntdSelect } from '../antd_components/AntdSelect'
import { ChakraSelect } from '../chakra_components/ChakraSelect'
import { ChakraCard } from '../chakra_components/ChakraCard'
import TailwindCard from '../tailwind_components/TailwindCard'
import TailwindSelect from '../tailwind_components/TailwindSelect'
import dayjs, { Dayjs } from 'dayjs'
import MantineDateRangePicker from '../mantine_components/MantineDateRangePicker'
import TailwindDateRangePicker from '../tailwind_components/TailwindDateRangePicker'
import { Heading } from '@chakra-ui/react'
import MantineSelect from '../mantine_components/MantineSelect'
import ChakraDatePicker from '../chakra_components/ChakraDateRangePicker'
import MaterialSelect from '../material_components/MaterialSelect'
export default function DashExample() {

  const [ style, setStyle] = useContext(LibraryNameContext);


  const dateProp: DateRange = [new Date(2022, 0, 20), addDays(new Date(2022, 0, 20), 20)];
  const [selection, setSelection] = useState("")

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
                label, 
                options, 
                onChange, 
                value
            }) => (
                <div>
                    <div style={{"marginBottom": 9, "marginTop": 24}}>
                      <LabelDemo children={label}/>
                    </div>
                    <SelectScrollable
                      label="Select"
                      options={options}
                      onChange={onChange}
                      value={value}
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
              <FormControl style={{"marginTop": 57}}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  label={label}
                  style={{ width: 230 }}
                  onChange={onChange}
                  placeholder="Select"
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
                          value={[dayjs(dateRange[0]), dayjs(dateRange[1])]}
                          slots={{ field: SingleInputDateRangeField }}
                          name="allowedRange"
                          onChange={(dateRange:[Dayjs|undefined, Dayjs|undefined]) => {onChangeDateRange([dateRange[0], dateRange[1]])}}
                        />
                      </div>
                      <div>
                        <MaterialSelect label={label} options={presetOptions}
                            onChange= {onChangePreset}
                            value={preset}/>
                      </div>
                      <div>
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
                label, 
                options = [], 
                onChange = (preset) => console.log("Preset Changed:", preset), 
                value = ""
              }) => (
                  <div className="flex">
                    <MantineSelect label={label} options={options} onChange={onChange} value={value}/>
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
                  <div className="flex">
                    <div style={{"marginRight": 10}}>
                      <MantineDateRangePicker
                        dateRange={dateRange}
                        onChangeDateRange={onChangeDateRange}
                        label={label}
                      />
                    </div>
                    <div>
                      <MantineSelect options={presetOptions} onChange={onChangePreset} value={preset}/>
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
            FilterDropdownComponent={({ 
              label, 
              options = [], 
              onChange = (preset) => console.log("Preset Changed:", preset), 
              value = ""
            }) => (
              <div>
                <div style={{"marginBottom": 9}}>
                  <LabelDemo children={label}/>
                </div>
                <div className="flex">
                  <AntdSelect options={options.map(option => option.label)} onChange={onChange} value={value}/>
                </div>
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
                <div style={{"marginBottom": 9}}>
                  <LabelDemo children={label}/>
                </div>
                <div className="flex">
                  <div style={{"marginRight": 10}}>
                    <AntdDatePicker 
                      dateRange={dateRange}
                      onChangeDateRange={onChangeDateRange}
                    />
                  </div>
                  <div>
                    <AntdSelect options={presetOptions} onChange={onChangePreset} value={preset}/>
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
              FilterDropdownComponent={({ 
                label, 
                options = [], 
                onChange = (preset) => console.log("Preset Changed:", preset), 
                value = ""
              }) => (
                <div>
                  <div style={{"marginBottom": 9}}>
                    <Heading as='h6' size='xs'>{label}</Heading>
                  </div>
                  <div className="flex">
                    <ChakraSelect label={label} options={options} onChange={onChange} value={value}/>
                  </div>
                </div>
              )}
              DateRangePickerComponent={({ 
                dateRange = dateProp as DateRange,
                label = {}, 
                onChangeDateRange = (value: DateRange) => {}, 
                selectedPreset = "", 
                presetOptions = [],
                onChangePreset = (preset: DateRangePickerOption) => {}, 
                preset, 
                theme = {} 
              }) => (
                <div>
                  <div style={{"marginBottom": 9}}>
                    <LabelDemo children={label}/>
                  </div>
                  <div className="flex">
                    <div style={{"marginRight": 10}}>
                      {/* <ShadcnDatePickerAdapter 
                        dateRange={dateRange}
                        label={label}
                        onChangeDateRange={onChangeDateRange}
                      /> */}
                      <ChakraDatePicker dateRange={dateRange} onChangeDateRange={onChangeDateRange}/>
                    </div>
                    <div>
                      <ChakraSelect options={presetOptions} onChange={onChangePreset} value={preset} label={label}/>
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
              FilterDropdownComponent={({ 
                label, 
                options = [], 
                onChange, 
                value = ""
              }) => (
                <div>
                  <p className="text-sm font-medium">
                    {label}
                  </p>
                  <div className="flex">
                    <SelectScrollable
                      label="Select"
                      options={options}
                      onChange={onChange}
                      value={value}
                    />
                  
                  </div>
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
                  <p className="text-sm font-medium">
                    {label}
                  </p>
                  <div className="flex">
                    <div style={{"marginRight": 10}}>

                      <TailwindDateRangePicker
                        dateRange={dateRange}
                        onChangeDateRange={onChangeDateRange}
                      />
                    </div>
                    <div className="min-w-100">
                      <TailwindSelect options={presetOptions} onChange={onChangePreset}/>
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
