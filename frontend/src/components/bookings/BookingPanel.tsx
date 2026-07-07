import { LuCalendar1 } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { MdOutlineOpenInNew } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiLinkM } from "react-icons/ri";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

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
                    <div className="flex justify-between items-center text-sm py-2">
                        <span className=" font-normal">Tickets</span>
                        <div className="flex items-center gap-x-3">
                            <Button variant="outline" className="cursor-pointer rounded-md">+</Button>
                            <span className="text-lg">1</span>
                            <Button variant="outline" className="cursor-pointer rounded-md">-</Button>
                        </div>
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

            <div className="mt-4 bg-gray-100 rounded-md border p-4">
                <span className="flex items-center gap-x-4">
                    <FaMapMarkerAlt className="text-gray-800 text-sm"/>
                    <div className="flex flex-col items-start">
                        <span className="text-sm">Sofitel Agadir Royal Bay</span>
                        <span className="text-xs text-gray-800">Agadir, Morocco</span>
                    </div>
                </span>
                <span className="flex items-center gap-x-4 mt-2">
                    <MdOutlineOpenInNew className="text-gray-800 text-sm"/>
                    <span className="text-sm text-blue-600">View on map</span>
                </span>
            </div>

            <div className="flex mt-4 justify-start items-center gap-x-2">
                <div className="text-[13px] cursor-pointer flex items-center gap-x-2 border rounded-md p-2">
                    <RiLinkM />
                    <span className="font-light">Copy link</span> 
                </div>
                <div className="text-[13px] flex cursor-pointer items-center gap-x-2 border rounded-md p-2">
                    <CiShare2 />
                    <span className="font-light">Share</span> 
                </div>
                <div className="text-[13px] flex cursor-pointer items-center gap-x-2 border rounded-md p-2">
                    <CiHeart />
                    <span className="font-light">Save</span> 
                </div>
            </div>
        </>
    )
}