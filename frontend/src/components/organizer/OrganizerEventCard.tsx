import { Badge } from "@/components/ui/badge"
import { RiGroupLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import BookingProgressBar from "@/components/organizer/BookingProgressBar"

export default function OrganizerEventCard(){
    return (
        <div className="border rounded-xl p-3 flex flex-col gap-y-2">
            <div className="flex items-center">
                <Badge variant="default">Published</Badge>
            </div>
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="font-medium text-[15px]">Next.js & Laravel Conference 2026</h1>
                    <p className="text-[13px] font-light">14 Jun · Sofitel Agadir · 400 capacity</p>
                </div>
            
                <div className="flex items-center gap-x-1">
                    <div className="rounded-sm border p-1 cursor-pointer">
                        <RiGroupLine className="text-sm"/>
                    </div>
                     <div className="rounded-sm border p-1 cursor-pointer">
                        <FiEdit className="text-sm"/>
                    </div>
                    <div className="rounded-sm border p-1 cursor-pointer">
                        <SlOptions className="text-sm"/>
                    </div>
                </div>
            </div>
            <BookingProgressBar/>
        </div>
    )
}