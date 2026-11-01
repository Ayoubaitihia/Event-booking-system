import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface DuplicateEventDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onDuplicate: () => void
}

export default function DuplicateEventDialog({ open, onOpenChange, onDuplicate }: DuplicateEventDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Duplicate Event</DialogTitle>
          <DialogDescription>
            A copy of this event will be created with the same details.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button className="cursor-pointer" onClick={onDuplicate}>Duplicate</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
