import React from 'react';
import { Button, Popover } from 'antd';
import { PopoverComponentProps } from '@quillsql/react/src/components/UiComponents';

export function AntdPopover({
    showTrigger, 
    children, 
    onClose, 
    parentRef, 
    style, 
    onClick, 
    setIsOpen,
    label}: PopoverComponentProps) {
    return (
        <Popover content={children} title={label} style={style}>
            <Button type="primary" style={{'backgroundColor': '#1677ff'}} onClick={onClick}>{label}</Button>
        </Popover>
    )
}