import { Button, ButtonGroup } from '@chakra-ui/react'
import { ButtonComponentProps } from '@quillsql/react/src/components/UiComponents'

export function ChakraButton({onClick, label, primary}: ButtonComponentProps){
  return (
    <Button colorScheme='blue' variant={primary?'solid': 'outline'} onClick={onClick}>{label}</Button>
  )
}