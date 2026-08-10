import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import BookingModal from "./BookingModal"


interface BookingTotalProps{
    total: number,
    price: number,
    qty: number
}

export default function BookingTotal({
    total,
    qty,
    price
}: BookingTotalProps) {
    return (
        <div className="p-4">
            <span className="flex justify-between items-center text-lg font-semibold">
                <span>Total</span>
                <span>${total}</span>
            </span>
            <AlertDialog>
                <AlertDialogTrigger className="w-full">
                    <Button variant="outline" className="mt-2 p-4 py-6 w-full text-black cursor-pointer">
                        Book now
                    </Button>
                </AlertDialogTrigger>
                <BookingModal 
                    price={price}
                    qty={qty}
                    total={total} 
                />
            </AlertDialog>
            <p className="mt-2 text-xs font-light text-center">
                Free cancellation up to 48 hours before the event
            </p>
        </div>
    )
}