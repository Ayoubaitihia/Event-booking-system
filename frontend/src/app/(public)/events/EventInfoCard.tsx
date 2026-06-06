import { LuCalendar1 } from "react-icons/lu";

export default function EventInfoCard() {
  return (
    <div className="bg-gray-100 flex items-start gap-x-3 p-4 rounded-md border w-fit">
      <div className="bg-gray-800 p-2.5 rounded-md">
        <LuCalendar1 className="text-white" />
      </div>
      <div>
        <span className="text-xs font-medium">Date & time</span>
        <h3 className="text-sm font-semibold">Saturday, 14 June 2026</h3>
        <span className="text-sm font-semibold">9:00 AM – 6:00 PM (GMT+1)</span>
      </div>
    </div>
  );
}