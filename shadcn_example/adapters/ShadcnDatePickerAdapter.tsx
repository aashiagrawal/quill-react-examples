'use client'
import { DateRange, DateRangePickerOption } from '@quillsql/react/src/DateRangePicker/DateRangePicker'
import { DateRange as ReactDateRange} from 'react-day-picker'
import { DatePickerWithRange } from '../shadcn_components/DatePickerWithRange'
import React, {useState, useEffect} from 'react'

// interface QuillShadcnDateRangePickerComponentProps extends Omit<ShadcnDateRangePickerComponentProps & DateRangePickerProps, "className"> {
//     className: string
//   }

type ShadcnDatePickerAdapterProps = {
    dateRange: DateRange;
    label: string;
    onChangeDateRange: (value: DateRange) => void;
    selectedPreset: string;
    presetOptions: DateRangePickerOption[];
    onChangePreset: (preset: DateRangePickerOption) => void;
    preset: string;
    theme: any;
};

const ShadcnDatePickerAdapter = (props: ShadcnDatePickerAdapterProps) => {

    const transformedDateRange = {
        from: props.dateRange[0] || undefined,
        to: props.dateRange[1] || undefined,
    }

    // Date Range change handler compatible with shadcn Date Range component
    const onChangeDateRangeTransformed = (value: ReactDateRange) => {
        props.onChangeDateRange([value.from, value.to]);
    };
    
  return (
    <DatePickerWithRange className="" dateRange={transformedDateRange} onChangeDateRange={onChangeDateRangeTransformed} selectedPreset = {props.selectedPreset} presetOptions={props.presetOptions} onChangePreset={props.onChangePreset} preset={props.preset} theme={props.theme}></DatePickerWithRange>
  )
}

export default ShadcnDatePickerAdapter