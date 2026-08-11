import { LuCalendar1 } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { useEventContext } from "@/context/EventContext";


export default function EventDateTime(){

    const {event} = useEventContext()

    return (
        <div>
            <div className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-x-1 font-light">
                    <LuCalendar1/>
                    <span className="mt-1">Date</span>
                </span>
                <span className="font-base">{event.startsAt}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-x-1 font-light">
                        <FaRegClock />
                        <span className="mt-1">Time</span>
                    </span>
                <span className="font-base">{event.endsAt}</span>
            </div>
        </div> 
    )
}