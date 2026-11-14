import { 
    Table,
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table";

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
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="uppercase">attendee</TableHead>
                    <TableHead className="uppercase">ticket</TableHead>
                    <TableHead className="uppercase">registered</TableHead>
                    <TableHead className="uppercase">status</TableHead>
                    <TableHead className="uppercase">actions</TableHead>
                </TableRow>
             </TableHeader>
            <TableBody>
                {attendees.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            <div className="flex items-center gap-x-4">
                                <img 
                                    className="w-10 h-10 rounded-full" 
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
                        <TableCell>{item.status}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}