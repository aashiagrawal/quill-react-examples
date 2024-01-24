import { Popover, Text, Button, Container } from '@mantine/core';

type MantinePopoverProps = {
    label: string,
    onClick?: ()=>void,
    children: any,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    showTrigger: boolean | undefined,
    parentRef?: any,
    title?: string
}

export default function MantinePopover({label, onClick, children, isOpen, setIsOpen, showTrigger, parentRef, title}: MantinePopoverProps) {
  const handleClose = () => {
    // Close the popover only if the Select dropdown is not focused
    if (!document.activeElement.classList.contains('mantine-Select-input')) {
        setIsOpen(false);
    }
  };  
  return (
      <Popover styles={{ dropdown: { minWidth: '300px' } }} withArrow shadow="md" opened={isOpen} onClose={handleClose} position='bottom-end'>
        <Popover.Target>
          {
            showTrigger 
              ? <Button variant="default" color="gray" onClick={(event) => setIsOpen(true) }>{label}</Button>
              : <span style={{ display: 'none' }}></span> // Render an invisible element when showTrigger is false
          }
        </Popover.Target>
        <Popover.Dropdown>
          <div>
              {children}
          </div>
        </Popover.Dropdown>
      </Popover>
  );
}
