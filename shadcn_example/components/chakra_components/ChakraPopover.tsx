import React from 'react'
import { PopoverComponentProps } from '@quillsql/react/src/components/UiComponents'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button
  } from '@chakra-ui/react'

export function ChakraPopover({
    showTrigger, 
    children, 
    onClose,
    parentRef, 
    style, 
    onClick, 
    setIsOpen, 
    label,
    title}: PopoverComponentProps) {
  
    return (
        <Popover placement='bottom-end'>
            {showTrigger && 
                <PopoverAnchor>
                    <PopoverTrigger>
                        <Button onClick={onClick}>{label}</Button>
                    </PopoverTrigger>
                </PopoverAnchor>
            }
        <PopoverContent minWidth={516} width={'auto'}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>{title}</PopoverHeader>
            <PopoverBody>{children}</PopoverBody>
        </PopoverContent>
        </Popover>
    )
}

export default ChakraPopover