import { Input } from '@chakra-ui/react'
import { TextInputComponentProps } from '@quillsql/react/src/components/UiComponents'

export function ChakraTextInput({onChange, label, value, placeholder, id}: TextInputComponentProps) {
  return (
    <Input onChange={onChange} placeholder={placeholder} value={value} id={id}/>
  )
}

export default ChakraTextInput