import { TextInput } from '@mantine/core';

type MantineTextInputProps = {
    onChange: (e:any)=>void,
    label: string,
    value: string,
    placeholder: string,
}

export default function MantineTextInput({onChange, label, value, placeholder}: MantineTextInputProps) {
  return (
    <TextInput
    //   label={label}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}