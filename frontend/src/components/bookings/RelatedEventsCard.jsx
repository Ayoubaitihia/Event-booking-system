import { LuCalendar1 } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { Badge } from "../ui/badge";

export default function RelatedEventsCard() {
    return (
        <div className="border rounded-lg overflow-hidden w-75">
            <div className="bg-gray-200 h-24"></div>
            <div className="p-4">
                <div className="flex items-start justify-between gap-x-4">
                    <h3 className="text-sm font-medium">
                    Gnawa Night — Live Music & Culture Festival
                    </h3>
                    <span className="text-xs">Free</span>
                </div>
                <span className="text-[11px] text-gray-600">sat 7 Jun</span>
            </div>
        </div>
    )
}