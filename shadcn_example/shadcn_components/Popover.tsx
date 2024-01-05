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

  console.log("style ", style)

  return (
    <Popover open={isOpen} onOpenChange={onOpenChangeHandler}>
      {
        showTrigger && (
          <PopoverTrigger asChild>
            <Button variant="outline">{label ?? "Open"}</Button>
          </PopoverTrigger>
        )
      }

      {
        isOpen && (
          <PopoverContent onClick={onClick} className="w-80" style={style} ref={parentRef}>
            {children}
          </PopoverContent>
        )
      }

    </Popover>
  )
}
