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

  console.log("entered modal");

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChangeHandler}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger> */}
      <DialogContent className="h-4/5 overflow-y-auto w-full" style={{"minWidth": 900}}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={() => onOpenChangeHandler(false)}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

// style={"pointer-events: auto; height: 85vh; overflow-y: scroll;"}