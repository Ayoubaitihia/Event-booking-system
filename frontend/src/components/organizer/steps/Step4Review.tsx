
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

import { InboxIcon } from "lucide-react"

import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuTicket } from "react-icons/lu";
import { AiOutlineDollar } from "react-icons/ai";
import { GoClock } from "react-icons/go";


const event = [
    {
        id: 1,
        title: 'Event',
        description: 'Next.js & Laravel Full-Stack Conference 2026',
        icon: <FaRegFileAlt />
    },
    {
        id: 2,
        title: 'Category',
        description: 'Tech',
        icon: <FaRegFileAlt/>
    },
    {
        id: 3,
        title: 'Date',
        description: 'Sat 14 Jun 2026 · 9:00 AM – 6:00 PM',
        icon: <MdOutlineDateRange />
    },
    {
        id: 4,
        title: 'Location',
        description: 'Sofitel Agadir Royal Bay, Agadir',
        icon: <GrLocation />
    },
    {
        id: 5,
        title: 'Tickets',
        description: '400 capacity · $49 per person',
        icon: <LuTicket />
    },
    {
        id: 6,
        title: 'Revenue',
        description: 'Up to $19,600',
        icon: <AiOutlineDollar />
    },
]

export default function Step4Review()
{
    return(
        <div className="border flex flex-col text-gray-900 gap-y-4 rounded-md p-4">

            <div>
                <h3>Review your event</h3>
                <p className="text-xs">Everything look good? Submit for approval.</p>
            </div>
            
            <div className="flex flex-col gap-y-2">
                {
                    event.map((event) => (
                        <Item className="bg-gray-50" variant="outline">
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
                <AlertDescription className="text-xs">
                    After submitting, an admin will review your event before it goes live.
                </AlertDescription>
            </Alert>
            
            
        </div>
    )
}