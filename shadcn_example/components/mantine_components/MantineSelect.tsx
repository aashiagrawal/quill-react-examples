import { Select } from '@mantine/core';
import { SelectComponentProps } from '@quillsql/react/src/Dashboard';

export default function MantineSelect({label, options, onChange, value}: SelectComponentProps) {
  // Transform options to have a 'label' property
  console.log("this is options: ", options)
  const transformedOptions = options.map(option => ({
    value: option.value,
    label: option.text || option.label // Use 'text' as the label
  }));

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Select
        label={label} 
        data={transformedOptions} // Use transformed options here
        onChange={onChange} 
        value={value}
        className='mt-6'
        placeholder="Select"
      />
    </div>
  );
}
