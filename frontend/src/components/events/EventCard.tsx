import { LuCalendar1 } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { Badge } from "../ui/badge";

export default function EventCard() {
  return(
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-200 h-25">
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium">
          Gnawa Night — Live Music & Culture Festival
        </h3>
        <div className="pt-3 flex flex-col gap-y-1 text-gray-900">
          <span className="flex items-center gap-x-2">
            <LuCalendar1 className="font-medium" />
            <span className="text-[10px]">Saturday 14 June 2026, 9:00 AM</span>
          </span>
          <span className="flex items-center gap-x-2">
            <FiMapPin className="font-medium" />
            <span className="text-[10px]">Sofitel Agadir Royal Bay</span>
          </span>
        </div>
        <div className="mt-3 pt-2 border-t flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Badge className="font-mono px-1 rounded-sm text-xs">KF</Badge>
            <span className="text-sm font-medium">Karim Fadel</span>
          </div>
          <span className="text-xs font-medium">42 left</span>
        </div>
      </div>
    </div>
  )
}