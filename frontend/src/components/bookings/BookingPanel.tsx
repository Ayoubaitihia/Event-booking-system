import { LuCalendar1 } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function BookingPanel() {
    return (
        <>
            <div className="bg-gray-100 rounded-md border">
                <div className="border-b p-4 flex flex-col">
                    <span className="text-2xl font-semibold">$49</span>
                    <span className="text-sm">per person</span>
                </div>

                <div className="p-4 flex flex-col gap-y-2 border-b">
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
                    <div className="flex flex-col justify-between text-sm">
                        <Progress value={33} />
                        <span className="mt-1 flex items-center justify-between text-xs">
                            <span>80 seats left</span>
                            <span>400 total</span>
                        </span>
                    </div>
                </div>

                <div className="p-4">
                    <span className="flex justify-between items-center text-lg font-semibold">
                        <span>Total</span>
                        <span>$49,00</span>
                    </span>
                    <Button className="mt-2 p-4 py-6 w-full cursor-pointer" variant="outline">
                        Book now
                    </Button>
                    <p className="mt-2 text-xs font-light text-center">Free cancellation up to 48 hours before the event</p>
                </div>
            </div>
        </>
    )
}