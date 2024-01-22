import React from 'react';
import { Card } from 'antd';

type AntdCardProps = {
    dashboardName?:string,
    children: any,
    onClick?: any,
}

export function AntdCard({dashboardName, children, onClick}: AntdCardProps) {
    return (
        <Card title={dashboardName || undefined}  onClick={onClick} style={{"minHeight": 200}}>
            {children}
        </Card>
    )
}

export default AntdCard;