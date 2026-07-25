import { Progress } from "@/components/ui/progress"
import { PcCase } from "lucide-react";

interface SeatsBarProps{
    booked: number;
    capacity: number;
}

export default function SeatsBar({
    booked,
    capacity
}: SeatsBarProps)
{
    const left = capacity - booked
    const pct = (booked / capacity) * 100

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
                <span>{capacity} total</span>
            </span>
        </div>
    )
}