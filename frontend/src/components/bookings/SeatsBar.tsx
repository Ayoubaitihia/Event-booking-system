import { Progress } from "@/components/ui/progress"
import { PcCase } from "lucide-react";
import { useEventContext } from "@/context/EventContext";

export default function SeatsBar()
{

    const {event} = useEventContext()
    const left = event.capacity - event.booked
    const pct = (event.booked / event.capacity) * 100

    return (
        <div className="flex flex-col justify-between text-sm">
            <Progress value={pct} />
            <span className="mt-1 flex items-center justify-between text-xs">
                <span>
                    {left == 0 
                    ? 'Sold out'
                    : `${left} seat${left == 1 ? '' : 's'} left`
                    }
                </span>
                <span>{event.capacity} total</span>
            </span>
        </div>
    )
}