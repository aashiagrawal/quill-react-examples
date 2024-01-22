import { Select } from '@mantine/core';
import { SelectComponentProps } from '@quillsql/react/src/Dashboard';

export default function MantineSelect({label, options, onChange, value}: SelectComponentProps) {
  
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Select
          label={label} 
          data={options} 
          onChange={onChange} 
          value={value}
      />
    </div>
  );
}