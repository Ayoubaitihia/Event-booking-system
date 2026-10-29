
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert"

import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuTicket } from "react-icons/lu";
import { AiOutlineDollar } from "react-icons/ai";
import { GoClock } from "react-icons/go";
import { AllFields } from "@/lib/validations/event";

interface Props {
    data: AllFields
}

function formatDate(dateStr: string): string {
    if (!dateStr) return "—"
    const d = new Date(dateStr + "T00:00:00")
    return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" })
}

function formatTime(timeStr: string): string {
    if (!timeStr) return "—"
    const [h, m] = timeStr.split(":").map(Number)
    const ampm = h >= 12 ? "PM" : "AM"
    const hour = h % 12 || 12
    return `${hour}:${m.toString().padStart(2, "0")} ${ampm}`
}

export default function Step4Review({data}:Props)
{
    const dateDescription = `${formatDate(data.starts_at)} · ${formatTime(data.starts_at_time)} – ${formatTime(data.ends_at_time)}`

    const locationDescription = data.is_online
        ? (data.online_url || "Online")
        : [data.venue_name, data.address].filter(Boolean).join(", ")

    const price = data.price ?? 0
    const capacity = data.capacity ?? 0

    const ticketsDescription = data.is_free
        ? `${capacity} capacity · Free`
        : `${capacity} capacity · $${price} per person`

    const revenueDescription = data.is_free
        ? "Free event"
        : `Up to $${(price * capacity).toFixed(2)}`

    const event = [
        {
            id: 1,
            title: 'Event',
            description: data.title,
            icon: <FaRegFileAlt />
        },
        {
            id: 2,
            title: 'Category',
            description: data.category,
            icon: <FaRegFileAlt/>
        },
        {
            id: 3,
            title: 'Date',
            description: dateDescription,
            icon: <MdOutlineDateRange />
        },
        {
            id: 4,
            title: 'Location',
            description: locationDescription,
            icon: <GrLocation />
        },
        {
            id: 5,
            title: 'Tickets',
            description: ticketsDescription,
            icon: <LuTicket />
        },
        {
            id: 6,
            title: 'Revenue',
            description: revenueDescription,
            icon: <AiOutlineDollar />
        },
    ]

    return(
        <div className="border flex flex-col text-gray-900 gap-y-4 rounded-md p-4">

            <div>
                <h3>Review your event</h3>
                <p className="text-xs">Everything look good? Submit for approval.</p>
            </div>
            
            <div className="flex flex-col gap-y-2">
                {
                    event.map((event) => (
                        <Item key={event.id} className="bg-gray-50" variant="outline">
                            <ItemMedia variant="icon">
                                {event.icon}
                            </ItemMedia>
                            <ItemContent>
                                <ItemDescription className="text-xs">{event.title}</ItemDescription>
                                <ItemTitle className="text-sm text-gray-800">{event.description}</ItemTitle>
                            </ItemContent>
                        </Item>
                    ))
                }
            </div>

            <Alert className="flex items-center">
                <GoClock className="mb-1" />
                <AlertDescription className="text-xs ">
                    After submitting, an admin will review your event before it goes live.
                </AlertDescription>
            </Alert>
            
            
        </div>
    )
}