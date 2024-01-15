import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export function AntdHeader({children, subheader}) {
    return (
        <Title level={subheader? 5: 5}>{children}</Title>
    )
}