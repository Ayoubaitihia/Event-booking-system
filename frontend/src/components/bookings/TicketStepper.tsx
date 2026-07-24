import { Button } from "@/components/ui/button"

interface TicketStepperProps {
    value: number;
}

export default function TicketStepper({
    value
}: TicketStepperProps) {
    return (
        <div className="flex justify-between items-center text-sm py-2">
            <span className=" font-normal">Tickets</span>
            <div className="flex items-center gap-x-3">
                <Button variant="outline" className="cursor-pointer rounded-md">+</Button>
                <span className="text-lg">{value}</span>
                <Button variant="outline" className="cursor-pointer rounded-md">-</Button>
            </div>
        </div>
    )
}