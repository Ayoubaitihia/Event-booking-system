import { Progress } from "@/components/ui/progress"


interface BookingProps{
    capacity: number,
    booked: number
}

function getIndicatorColor(pct: number) {
    if (pct >= 80) return "bg-red-500"
    if (pct >= 50) return "bg-orange-400"
    return "bg-green-500"
}

export default function BookingProgressBar({capacity, booked}: BookingProps){
    const pct = capacity > 0 ? (booked / capacity) * 100 : 0
    return(
        <div className="flex items-center gap-x-8">
            <Progress value={pct} indicatorClassName={getIndicatorColor(pct)} />
            <span className="text-xs">{booked}/{capacity}</span>
        </div>
    )
}