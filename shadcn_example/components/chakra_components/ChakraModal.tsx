import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'

import { ModalComponentProps } from '@quillsql/react/src/components/UiComponents'

export function ChakraModal({children, isOpen, onClose, title, setIsOpen}: ModalComponentProps){

    const handleClose = () => {
        setIsOpen(false)
        if(isOpen == false && onClose) {
            onClose()
        }
    }

    return (
        <>
        <Modal isOpen={isOpen} onClose={handleClose} size='xl'>
            <ModalOverlay />
            <ModalContent maxW={800}>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )

}

export default ChakraModal