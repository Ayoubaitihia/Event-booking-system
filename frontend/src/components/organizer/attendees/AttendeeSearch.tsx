import { SearchIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export default function AttendeeSearch()
{
    const status = [
        {
            name: "All",
            capacity: 248,
        },
        {
            name: "Checked in",
            capacity: 183,
        },
        {
            name: "Pending",
            capacity: 53,
        },
        {
            name: "Cancelled",
            capacity: 12,
        }
    ]
    return(
        <div className="flex items-center justify-between gap-x-4">
            <InputGroup className="max-w-md">
                <InputGroupInput placeholder="Search by name or email..." />
                <InputGroupAddon>
                    <SearchIcon className="text-muted-foreground" />
                </InputGroupAddon>
            </InputGroup>

            <div className="flex p-1 border rounded-lg items-center justify-end gap-x-4">
                {status.map((item) => (
                    <div className="flex py-1 px-3 items-center gap-x-1">
                        <span className="text-sm  font-medium">{item.name}</span>
                        <span className="text-xs text-white px-1.5 py-0.5 rounded-full bg-gray-800">
                            {item.capacity}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}