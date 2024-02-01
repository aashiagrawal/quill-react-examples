'use client'
import { DateRange, DateRangePickerOption } from '@quillsql/react/src/DateRangePicker/DateRangePicker'
import { DateRange as ReactDateRange} from 'react-day-picker'
import { DatePickerWithRange } from '../components/shadcn_components/DatePickerWithRange'
import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs'

type ShadcnDatePickerAdapterProps = {
    dateRange: DateRange;
    label: string;
    onChangeDateRange: (value: DateRange) => void;
};

const ShadcnDatePickerAdapter = (props: ShadcnDatePickerAdapterProps) => {
    let transformedDateRange = {}

    if (dayjs.isDayjs(props.dateRange[0])) {
      transformedDateRange = {
        from: props.dateRange[0].toDate() || undefined,
        to: props.dateRange[1].toDate() || undefined,
      }
    } else {
            transformedDateRange = {
            from: props.dateRange[0] || undefined,
            to: props.dateRange[1] || undefined,
        }
    }

    // Date Range change handler compatible with shadcn Date Range component
    const onChangeDateRangeTransformed = (value: ReactDateRange) => {
        props.onChangeDateRange([value.from, value.to]);
    };
    
  return (
    <DatePickerWithRange className="" dateRange={transformedDateRange} onChangeDateRange={onChangeDateRangeTransformed}></DatePickerWithRange>
  )
}

export default ShadcnDatePickerAdapter