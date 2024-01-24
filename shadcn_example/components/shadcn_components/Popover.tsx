import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ShadcnPopoverProps {
  children: any;
  onClose?: () => void;
  parentRef?: any;
  style?: any;
  onClick?: () => void;
  showTrigger?: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  label?: string,
  title?: string,
}

export function ShadcnPopover({
  showTrigger, 
  children, 
  onClose, 
  parentRef, 
  style, 
  onClick, 
  isOpen, 
  setIsOpen,
  label,
  title,

}: ShadcnPopoverProps) {
  
  const onOpenChangeHandler = (open: boolean) => {
    if (open === false && onClose) {
      onClose();
    }

    setIsOpen(open)
  }
  
  return (
    <div style={{ position: 'relative' }}>
      <Popover open={isOpen} onOpenChange={onOpenChangeHandler}>
        {
          showTrigger && (
            <PopoverTrigger asChild>
              <Button variant="outline" className="bg-transparent">{label ?? "Open"}</Button>
            </PopoverTrigger>
          )
        }

        {
          isOpen && (
            <PopoverContent onClick={onClick} className="w-300 absolute right-0 top-full" style={style} ref={parentRef}>
                {children}
            </PopoverContent>
          )
        }

      </Popover>
    </div>
  )
}
