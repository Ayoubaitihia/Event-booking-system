import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

import { IoIosArrowRoundForward } from "react-icons/io";


export default function TopOrganizersList()
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
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <span className="border font-bold text-gray-600 p-2 rounded-full">
                                        SC
                                    </span>
                                </TableCell>
                                <TableCell className="flex flex-col">
                                    <span className="text-sm font-medium">Sarah Chen</span>
                                    <span className="text-xs text-gray-600">12 events</span>
                                </TableCell>
                                <TableCell>
                                    <span>
                                        <Progress value={33} />
                                        $24.1k
                                    </span>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}