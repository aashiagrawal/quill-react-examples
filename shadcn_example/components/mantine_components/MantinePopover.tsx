import { Popover, Text, Button } from '@mantine/core';

type MantinePopoverProps = {
    label: string,
    onClick: ()=>void,
    children: any,
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    showTrigger: boolean | undefined,
    parentRef: any,
    title: string
}

export default function MantinePopover({label, onClick, children, isOpen, setIsOpen, showTrigger, parentRef, title}: MantinePopoverProps) {
  return (
    <Popover width = {640} withArrow shadow="md" opened={isOpen} onClose={()=> {setIsOpen(false)}} position='bottom-end'>
      <Popover.Target>
        {
            showTrigger && (
                <Button variant="default" color="gray" onClick={(event) => setIsOpen(true) }>{label}</Button>
            )
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