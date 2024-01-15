import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
// import moment from 'moment';

interface DataType {
    key: React.Key
    id: number,
    amount: number,
    created_date: Date,
    merchant: string,
    user_name: string,
    category: string
}

type AntdTableProps = {
    columns: ColumnsType<DataType>,
    rows: DataType[]
}

export function AntdTable({columns, rows}: AntdTableProps) {

    const convertedColumns: ColumnsType<DataType> = columns.map(col => ({
        title: col.label,
        dataIndex: col.field,
        key: col.field,
        render: (text: any) => {
          return text;
        },
      }));

    return (
        <Table columns={convertedColumns} dataSource={rows} />
    )
}

export default AntdTable;