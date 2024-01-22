import React from 'react';
import { Input } from 'antd';
import { TextInputComponentProps } from '@quillsql/react/src/components/UiComponents';


export function AntdTextInput({onChange, label, value, placeholder, id}: TextInputComponentProps) { 
    return (
        <Input placeholder={placeholder} onChange={onChange} value={value} id={id}/>
    )
}