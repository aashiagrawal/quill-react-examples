// 'use client'
// import { DateRange, DateRangePickerOption } from '@quillsql/react/src/DateRangePicker/DateRangePicker'
// import { DateRange as ReactDateRange} from 'react-day-picker'
// import * as dayjs from 'dayjs'
// import { AntdDatePicker } from '@/components/antd_components/AntdDatePicker'
// import React, {useState, useEffect} from 'react'

// type AntdDatePickerAdapterProps = {
//     dateRange: DateRange;
//     label: string;
//     onChangeDateRange: (value: DateRange) => void;
// };

// const AntdDatePickerAdapter = (props: AntdDatePickerAdapterProps) => {

//     const transformedDateRange = []
//     const transformedDateRange = {
//         from: props.dateRange[0] || undefined,
//         to: props.dateRange[1] || undefined,
//     }

//     // Date Range change handler compatible with shadcn Date Range component
//     const onChangeDateRangeTransformed = (value: ReactDateRange) => {
//         props.onChangeDateRange([value.from, value.to]);
//     };
    
//   return (
//     <AntdDatePicker className="" dateRange={transformedDateRange} onChangeDateRange={onChangeDateRangeTransformed}/>
//   )
// }

// export default AntdDatePickerAdapter