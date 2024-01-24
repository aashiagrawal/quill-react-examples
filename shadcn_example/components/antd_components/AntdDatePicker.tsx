// import React from 'react';
// import { DatePicker, Space } from 'antd';
// import dayjs, {Dayjs} from 'dayjs'
// import { DateRangePickerProps } from '@quillsql/react/src/DateRangePicker/DateRangePicker';

// const { RangePicker } = DatePicker;

// export function AntdDatePicker ({dateRange, onChangeDateRange}: DateRangePickerProps) {

//     const handleDateRangeChange = (newDateRange: [Dayjs|undefined, Dayjs|undefined]) => {
//         onChangeDateRange?([newDateRange?[0].toDate(), newDateRange?[1].toDate()]);
//     }
//     return (
//         <Space direction="vertical" size={12}>
//           <RangePicker 
//             value={[dayjs(dateRange?[0]), dayjs(dateRange?[1])]}
//             onChange={handleDateRangeChange}
//           />
//         </Space>
//     )
// }

import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { DateRangePickerProps } from '@quillsql/react/src/DateRangePicker/DateRangePicker';

const { RangePicker } = DatePicker;

export function AntdDatePicker({ dateRange, onChangeDateRange }: DateRangePickerProps) {

    const handleDateRangeChange = (newDateRange: [Dayjs | null, Dayjs | null]) => {
        if (onChangeDateRange) {
            onChangeDateRange([
                newDateRange[0]?.toDate(), // Convert Dayjs to Date
                newDateRange[1]?.toDate(), // Convert Dayjs to Date
            ]);
        }
    };

    return (
        <Space direction="vertical" size={12}>
            <RangePicker
                value={[
                    dateRange?[0] ? dayjs(dateRange[0]) : null: null, // Convert Date to Dayjs
                    dateRange?[1] ? dayjs(dateRange[1]) : null: null, // Convert Date to Dayjs
                ]}
                onChange={handleDateRangeChange}
            />
        </Space>
    );
}
