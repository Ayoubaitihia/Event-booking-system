import { LuCalendar1 } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";

interface EventDateTimeProps{
    startsAt: string;
    endsAt: string
}

export default function EventDateTime({
    startsAt,
    endsAt
}: EventDateTimeProps){
    return (
        <div>
            <div className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-x-1 font-light">
                    <LuCalendar1/>
                    <span className="mt-1">Date</span>
                </span>
                <span className="font-base">{startsAt}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-x-1 font-light">
                        <FaRegClock />
                        <span className="mt-1">Time</span>
                    </span>
                <span className="font-base">{endsAt}</span>
            </div>
        </div> 
    )
}