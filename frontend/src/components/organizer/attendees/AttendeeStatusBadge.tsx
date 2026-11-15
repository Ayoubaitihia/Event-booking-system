import { Badge } from "@/components/ui/badge"

type statusType = "Checked in" | "Pending" | "Cancelled"

interface StatusProps{
    status: statusType
}

export default function AttendeeStatusBadge({status}: StatusProps)
{
    let color = status == "Checked in" ? ['bg-green-50', 'text-green-700'] : 
    status == "Pending" ? ['bg-yellow-50', 'text-yellow-700'] : 
    status == "Cancelled" ? ['bg-red-50', 'text-red-700'] : 
    ['bg-green-50', 'text-green-700']

    return(
        <Badge className={`${color[0]} ${color[1]}`}>
            <span className={`w-2 h-2 bg-${color}-600 rounded-full`}></span>
            {status}
        </Badge>
    )
}