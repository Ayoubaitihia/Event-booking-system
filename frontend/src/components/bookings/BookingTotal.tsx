import { Button } from "@/components/ui/button"

export default function BookingTotal() {
    return (
        <div className="p-4">
            <span className="flex justify-between items-center text-lg font-semibold">
                <span>Total</span>
                <span>$49,00</span>
            </span>
            <Button className="mt-2 p-4 py-6 w-full cursor-pointer" variant="outline">
                Book now
            </Button>
            <p className="mt-2 text-xs font-light text-center">Free cancellation up to 48 hours before the event</p>
        </div>
    )
}