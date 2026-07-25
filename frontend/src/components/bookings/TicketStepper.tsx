import { Button } from "@/components/ui/button"
import { Dispatch, SetStateAction } from "react";

interface TicketStepperProps {
    qty: number;
    setQty: Dispatch<SetStateAction<number>>;
}

export default function TicketStepper({
    qty,
    setQty
}: TicketStepperProps) {
    return (
        <div className="flex justify-between items-center text-sm py-2">
            <span className=" font-normal">Tickets</span>
            <div className="flex items-center gap-x-3">
                <Button 
                    variant="outline" 
                    className="cursor-pointer rounded-md"
                    onClick={() => setQty((value) => value + 1)}
                >+</Button>
                <span className="text-lg">{qty}</span>
                <Button
                    variant="outline" 
                    className="cursor-pointer rounded-md"
                    onClick={() => setQty((value) => Math.max(1, value - 1))}
                >-</Button>
            </div>
        </div>
    )
}