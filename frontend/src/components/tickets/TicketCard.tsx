import { Badge } from "@/components/ui/badge"
import { IoIosArrowForward } from "react-icons/io";
import { MdLaptopWindows } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineGroup } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TicketDetailCard from "./TicketDetailCard";

export default function TicketCard(){
    return (
        <Dialog>
            <div className="border rounded-xl overflow-hidden">
                <div className="px-4 border-b flex items-center justify-between py-5 bg-gray-50">
                    <Badge>
                        <MdLaptopWindows />
                        Tech
                    </Badge>  
                    <Badge>
                        Upcoming
                    </Badge>      
                </div>
                <div className="p-3 flex justify-between items-start gap-x-2">
                    <div className="">
                        <h2 className="font-semibold mb-2">Next js & Laravel Full St...</h2>
                        <div className="flex flex-col text-[11px] font-medium text-gray-700 gap-y-0.5">
                            <span className="flex items-center gap-x-1">
                                <span><MdOutlineDateRange /></span>
                                <span>Sat 14 Jun 2026</span>
                            </span>
                            <span className="flex items-center gap-x-1">
                                <span><FaRegClock /></span>
                                <span>9:00 AM - 6:00 PM</span>
                            </span>
                            <span className="flex items-center gap-x-1">
                                <span><LuMapPin /></span>
                                <span>Sofitel Agadir Royal Bay</span>
                            </span>
                            <span className="flex items-center gap-x-1">
                                <span><MdOutlineGroup /></span>
                                <span>1 ticket</span>
                            </span>
                        </div>
                    </div>
                    <div className="border h-14 w-14 rounded-md">
                        
                    </div>
                </div>
                <div className="flex p-2 px-3 border-t items-center justify-between">
                    <span className="text-gray-700 text-[10px]">#BKG-0042</span>
                    <span className="text-sm font-semibold">$49.00</span>
                    <DialogTrigger className="flex cursor-pointer items-center text-blue-500 text-xs font-semibold">
                        View
                        <IoIosArrowForward />
                    </DialogTrigger >

                    <TicketDetailCard/>
                </div>
            </div>
        </Dialog>
    )
}