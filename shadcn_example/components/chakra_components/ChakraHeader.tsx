import React from 'react'
import { Heading } from '@chakra-ui/react'

export function ChakraHeader({children, subheader}) {
  return (
    <Heading as='h2' size={subheader?'xs':'sm'}>{children}</Heading>
  )
}

export default ChakraHeader 