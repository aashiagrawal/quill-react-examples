import React from 'react'
import { Button } from 'antd';

export function AntdButton({primary, onClick, label}) {
  return (
    <Button type={primary? "primary": "default"} onClick={onClick} style={primary?{'backgroundColor': '#1677ff'}: {}}>{label}</Button>
  )
}

export default AntdButton