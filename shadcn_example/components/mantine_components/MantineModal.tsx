import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Title } from '@mantine/core';


type MantineModaProps = {
    children: any,
    setIsOpen: (isOpen: boolean) => void,
    isOpen: boolean,
    title: string | undefined,
}

export default function MantineModal({children, setIsOpen, isOpen, title}: MantineModaProps) {
  return (
    <>
      <Modal opened={isOpen} onClose={()=> setIsOpen(false)} size="xl" title={title}>
        {children}
      </Modal>
    </>
  );
}