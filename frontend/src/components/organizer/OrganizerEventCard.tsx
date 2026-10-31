import { Badge } from "@/components/ui/badge"
import { RiGroupLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { MdOutlineLaptop } from "react-icons/md";
import BookingProgressBar from "@/components/organizer/BookingProgressBar"
import { PencilIcon, ShareIcon, TrashIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { EventProps } from "@/lib/static/events"


export default function OrganizerEventCard({event}: EventProps){

    const handleEdit = () => {
        console.log("Editing event...");
    };

    const handleShare = () => {
        console.log("Sharing event...");
    };

    const handleDelete = () => {
        console.log("Deleting event...");
    };

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
                            {/* <div className="rounded-sm border p-1 cursor-pointer">
                                <SlOptions className="text-sm"/>
                            </div> */}
                            <div className="rounded-sm border p-1 cursor-pointer">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        {/* <Button variant="outline">
                                            Actions
                                        </Button> */}
                                        <Button className="bg-transparent border-0 p-0 m-0" variant="outline">
                                            <SlOptions className="text-sm"/>
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent align="end">
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                <PencilIcon />
                                                Edit
                                            </DropdownMenuItem>

                                            <DropdownMenuItem>
                                                <ShareIcon />
                                                Share
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>

                                        <DropdownMenuSeparator />

                                        <DropdownMenuGroup>
                                            <DropdownMenuItem variant="destructive">
                                                <TrashIcon />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                    <BookingProgressBar/>
                </div>
            </div>
        </div>
    )
}