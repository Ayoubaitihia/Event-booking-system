import { 
    Table,
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {ADMIN_EVENTS} from "@/lib/static/events"
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { BiUserCheck } from "react-icons/bi";


export default function AdminEventsTable()
{
    return (
        <Table className="border">
            <TableHeader>
                <TableRow>
                    <TableHead className="uppercase text-gray-600">Event</TableHead>
                    <TableHead className="uppercase text-gray-600">Organizer</TableHead>
                    <TableHead className="uppercase text-gray-600">Date</TableHead>
                    <TableHead className="uppercase text-gray-600">Status</TableHead>
                    <TableHead className="uppercase text-gray-600">Capacity</TableHead>
                    <TableHead className="uppercase text-gray-600">Revenue</TableHead>
                    <TableHead className="uppercase text-gray-600"></TableHead>
                </TableRow>
             </TableHeader>
            <TableBody>
                {ADMIN_EVENTS.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            <h4 className="font-medium">{item.title}</h4>
                            <span className="text-xs">{item.categoryEmoji}{item.category} . {item.organizer}</span>
                        </TableCell>
                        <TableCell className="flex items-center justify-start gap-2">
                            <span className="p-1.5 text-xs rounded-full font-semibold text-gray-500 border bg-gray-50">
                                {item.organizerInitials}
                            </span>
                            <span className="font-medium">{item.organizer}</span>
                        </TableCell>
                        <TableCell>
                            <span className="text-gray-600 font-light">{item.date}</span>
                        </TableCell>
                        <TableCell>
                            <Badge className="text-green-600 bg-green-200">{item.status}</Badge>
                        </TableCell>
                        <TableCell>
                            <span className="text-xs">{item.attendees}/{item.capacity}</span>
                            <Progress value={60} className="mt-1 w-[60%]" />
                        </TableCell>
                        <TableCell>
                            <span className="text-xs font-semibold">$9,360</span>
                        </TableCell>
                        <TableCell>
                            <span className="flex items-center gap-x-3">
                                <BiUserCheck />
                                <CiEdit />
                                <CiTrash />
                            </span>
                        </TableCell>
                    </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}