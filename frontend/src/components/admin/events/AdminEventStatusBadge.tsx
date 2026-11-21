import { Badge } from "@/components/ui/badge"

type statusType = "published" | "draft" | "sold_out" | "cancelled"

type Props = {
    status: statusType
}

export default function AdminEventStatusBadge({status}: Props)
{

    console.log("status:", status)

    let color = status == "published" ? "bg-green-50 text-green-700" : 
    status == "draft" ? "bg-yellow-50 text-yellow-700" : 
    status == "sold_out" ? "bg-blue-50 text-blue-700" :
    status == "cancelled" ? "bg-red-50 text-red-700" : 
    "bg-green-50 text-green-700"

    return (
        <Badge className={`${color}`}>{status}</Badge>
    )
}