import { Button } from "@/components/ui/button";
import {useState} from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

type ShadcnDialogProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  setIsOpen: (isOpen: boolean) => void;
  theme?: any; // Define a more specific type if possible
};

export function DialogCloseButton({
  children,
  isOpen,
  onClose,
  title,
  setIsOpen,
  theme,
}: ShadcnDialogProps) {

  const onOpenChangeHandler = (open: boolean) => {
    if (isOpen == false && onClose) {
        onClose();
    }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChangeHandler}>
      <DialogContent className="h-4/5 overflow-y-auto w-full" style={{"minWidth": 800}}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}