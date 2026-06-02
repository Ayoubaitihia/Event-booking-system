import { Badge } from "../ui/badge";
import { LuCalendar1 } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { RiGroupLine } from "react-icons/ri";
import { Button } from "../ui/button";

export default function FeaturedEventCard() {
  return(
    <div className="border border-gray-200 rounded-lg grid grid-cols-2 overflow-hidden">
      
      <div className="bg-gray-300 w-full"></div>
      <div className="flex flex-col p-8">
        <div className="flex items-center gap-x-2 pb-3">
          <Badge>Tech</Badge>
          <Badge>Featured</Badge>
        </div>
        <h1 className="text-xl font-semibold pb-4">
          Next.js & Laravel Full-Stack Conference 2026
        </h1>
        <p className="text-gray-900">
          Two days of deep-dive talks on modern full-stack development.
          Speakers from Vercel, Laravel, and top engineering teams.
        </p>
        <div className="pt-5 flex flex-col gap-y-2 text-gray-900">
          <span className="flex items-center gap-x-2">
            <LuCalendar1 className="font-medium" />
            <span className="text-xs">Saturday 14 June 2026, 9:00 AM</span>
          </span>
          <span className="flex items-center gap-x-2">
            <FiMapPin className="font-medium" />
            <span className="text-xs">Sofitel Agadir Royal Bay</span>
          </span>
          <span className="flex items-center gap-x-2">
            <RiGroupLine className="font-medium" />
            <span className="text-xs">320 attending · 80 seats left</span>
          </span>
        </div>
        <div className="flex items-center justify-between pt-5">
          <div className="flex flex-col">
            <span className="font-bold text-[22px]">$49</span>
            <span className="text-gray-900">per person</span>
          </div>
          <Button variant="outline" className="border border-black cursor-pointer py-5 px-4 text-sm rounded-md font-medium">
            Book now
          </Button>
        </div>
      </div>
    </div>
  )
}