import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

import { IoIosArrowRoundForward } from "react-icons/io";


export default function RecentEventsTable()
{
    return (
        <div>
            <Card>
                <CardHeader className="flex items-center justify-between">
                    <CardTitle>Recent events</CardTitle>
                    <span className="flex items-center gap-x-1 text-xs">
                        View all
                        <IoIosArrowRoundForward />
                    </span>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-gray-700">Event</TableHead>
                                <TableHead className="text-gray-700">Status</TableHead>
                                <TableHead className="text-gray-700">Revenue</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <h4 className="text-sm font-medium">React Summit 2024</h4>
                                    <h5 className="text-xs text-gray-600">💻 Tech · 248 attendees</h5>
                                </TableCell>
                                <TableCell>
                                    <Badge className="bg-green-100 text-green-600">
                                        Published
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <span className="font-semibold text-sm">$18,450</span>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}