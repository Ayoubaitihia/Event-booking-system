import { LuCalendar1 } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";

export default function EventDateTime(){
    return (
        <div>
            <div className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-x-1 font-light">
                    <LuCalendar1/>
                    <span className="mt-1">Date</span>
                </span>
                <span className="font-base">14 Jun 2026</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-x-1 font-light">
                        <FaRegClock />
                        <span className="mt-1">Time</span>
                    </span>
                <span className="font-base">9:00 AM</span>
            </div>
        </div> 
    )
}