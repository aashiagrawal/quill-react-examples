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
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className={`sm:max-w-md ${theme?.dialogContentClass}`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={() => onOpenChangeHandler(false)}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
