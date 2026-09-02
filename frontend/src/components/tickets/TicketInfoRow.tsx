import { MdOutlineDateRange } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineGroup } from "react-icons/md";
import { FiUser } from "react-icons/fi";

export default function TicketInfoRow()
{
    return (
         <div className="flex flex-col text-[11px] mt-2 font-medium text-gray-700 gap-y-0.5">
            <span className="flex items-center gap-x-1">
                <span><MdOutlineDateRange /></span>
                <span>Sat 14 Jun 2026 · 9:00 AM</span>
            </span>
            <span className="flex items-center gap-x-1">
                <span><LuMapPin /></span>
                <span>Sofitel Agadir Royal Bay</span>
            </span>
            <span className="flex items-center gap-x-1">
                <span><MdOutlineGroup /></span>
                <span>1 ticket · $49.00</span>
            </span>
            <span className="flex items-center gap-x-1">
                <span><FiUser /></span>
                <span>Organised by Amine Mrani</span>
            </span>
        </div>
    )
}