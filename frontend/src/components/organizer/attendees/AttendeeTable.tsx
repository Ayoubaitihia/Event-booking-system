import { 
    Table,
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button"
import AttendeeStatusBadge from "./AttendeeStatusBadge";
import CheckInButton from "./CheckInButton";


export default function AttendeeTable()
{
    const attendees = [
        {
            id: 1,
            attendee: {
                image: "",
                name: "Sarah Chen",
                email: "sarah.chen@gmail.com"
            },
            ticket: {
                category: "Early Bird",
                price: 49
            },
            registered: "Oct 3, 2024",
            status: "Checked in"
        },
        {
            id: 2,
            attendee: {
                image: "",
                name: "Sarah Chen",
                email: "sarah.chen@gmail.com"
            },
            ticket: {
                category: "Standard",
                price: 89
            },
            registered: "Oct 3, 2024",
            status: "Pending"
        },
        {
            id: 2,
            attendee: {
                image: "",
                name: "Sarah Chen",
                email: "sarah.chen@gmail.com"
            },
            ticket: {
                category: "VIP",
                price: 149
            },
            registered: "Oct 3, 2024",
            status: "Cancelled"
        },
    ];

    return (
        <Table className="border">
            <TableHeader>
                <TableRow>
                    <TableHead className="uppercase text-gray-600">attendee</TableHead>
                    <TableHead className="uppercase text-gray-600">ticket</TableHead>
                    <TableHead className="uppercase text-gray-600">registered</TableHead>
                    <TableHead className="uppercase text-gray-600">status</TableHead>
                    <TableHead className="uppercase text-gray-600">actions</TableHead>
                </TableRow>
             </TableHeader>
            <TableBody>
                {attendees.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            <div className="flex items-center gap-x-3">
                                <img 
                                    className="w-8 h-8 rounded-full" 
                                    src="https://randomuser.me/api/portraits/men/62.jpg"
                                    alt=""
                                />
                                <div className="flex flex-col">
                                    <span className="font-semibold">{item.attendee.name}</span>
                                    <span className="font-light">{item.attendee.email}</span>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>
                            <span className="flex flex-col">
                                <span  className="font-semibold">{item.ticket.category}</span>
                                <span>${item.ticket.price}</span>
                            </span>

                        </TableCell>
                        <TableCell>
                            <span className="font-light">{item.registered}</span>
                        </TableCell>
                        <TableCell>
                            {/* <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400">
                                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                                {item.status}
                            </Badge> */}
                            <AttendeeStatusBadge status={item.status}/>
                        </TableCell>
                        <TableCell className="flex items-center gap-x-4">
                            <CheckInButton/>
                            <Button size="sm" className="m-0" variant="outline">
                                View
                            </Button>
                        </TableCell>
                    </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}