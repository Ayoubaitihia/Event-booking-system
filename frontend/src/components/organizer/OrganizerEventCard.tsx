import { Badge } from "@/components/ui/badge"
import { RiGroupLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { MdOutlineLaptop } from "react-icons/md";
import BookingProgressBar from "@/components/organizer/BookingProgressBar"


interface Event{
    id: number,
    slug: string,
    title: string,
    description: string,
    category: string,
    cover_image: File,
    starts_at: string,
    ends_at: string,
    is_online: boolean,
    online_url: string | null,
    venue_name: string,
    address: string,
    capacity: number,
    booked: number,
    price: number,
    is_free: boolean,
    status: string,
    created_at: string,
}

interface Props{
    event: Event
}

export default function OrganizerEventCard({event}: Props){
    return (
        <div className="border rounded-xl p-3 flex flex-col gap-y-2">
            <div className="flex items-center gap-x-3">
                <div className="border p-3 rounded-md">
                    <MdOutlineLaptop size={20} />
                </div>
                <div className="w-full">
                    <div className="flex mb-2 items-center justify-between">
                         <Badge variant="default">{event.status}</Badge>
                        <span className="float-end text-xs font-medium">${event.price}</span>
                    </div>
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="font-medium text-[15px]">{event.title}</h1>
                            <p className="text-[13px] font-light">14 Jun · Sofitel Agadir · {event.capacity} capacity</p>
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
            </div>
        </div>
    )
}