import { Button } from "@/components/ui/button"
import { Dispatch, SetStateAction } from "react";
import { useEventContext } from "@/app/(public)/events/EventContext";


export default function TicketStepper() {

    const {event, setEvent} = useEventContext()

    const handleIncrQty = () =>{
        const quantity = event.qty + 1
        setEvent({...event, qty: quantity})
    }

    const handleDecrQty = () =>{
        const quantity = Math.max(1, event.qty - 1)
        setEvent({...event, qty: quantity})
    }

    return (
        <div className="flex justify-between items-center text-sm py-2">
            <span className=" font-normal">Tickets</span>
            <div className="flex items-center gap-x-3">
                <Button 
                    variant="outline" 
                    className="cursor-pointer rounded-md"
                    onClick={handleIncrQty}
                >+</Button>
                <span className="text-lg">{event.qty}</span>
                <Button
                    variant="outline" 
                    className="cursor-pointer rounded-md"
                    onClick={handleDecrQty}
                >-</Button>
            </div>
        </div>
    )
}