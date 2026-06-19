import { LuCalendar1 } from "react-icons/lu";

export default function EventInfoCard() {
  return (
    <div className="bg-gray-100 flex items-start gap-x-3 p-4 rounded-md">
      <div className="bg-gray-700 p-2.5 rounded-md">
        <LuCalendar1 className="text-white" />
      </div>
      <div>
        <span className="text-xs font-medium text-gray-600">Date & time</span>
        <h3 className="text-sm font-semibold text-gray-900">Saturday, 14 June 2026</h3>
        <span className="text-xs text-gray-800">9:00 AM – 6:00 PM (GMT+1)</span>
      </div>
    </div>
  );
}