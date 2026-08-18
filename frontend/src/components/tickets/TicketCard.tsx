import { Badge } from "@/components/ui/badge"

export default function TicketCard(){
    return (
        <div className="border rounded-xl overflow-hidden">
            <div className="px-4 py-6 bg-gray-50">
                <Badge>Secondary</Badge>        
            </div>
            <div className="p-3 flex justify-between items-start gap-x-2">
                <div className="">
                    <h2 className="font-semibold mb-2">Next js & Laravel Full St...</h2>
                    <div className="flex flex-col text-xs font-medium gap-y-0.5">
                        <span>
                            <span></span>
                            <span>Sat 14 Jun 2026</span>
                        </span>
                        <span>
                            <span></span>
                            <span>Sat 14 Jun 2026</span>
                        </span>
                        <span>
                            <span></span>
                            <span>Sat 14 Jun 2026</span>
                        </span>
                        <span>
                            <span></span>
                            <span>Sat 14 Jun 2026</span>
                        </span>
                    </div>
                </div>
                <div className="border h-18 w-18 rounded-md">
                    
                </div>
            </div>
            <div className="flex p-2 px-3 border-t items-center justify-between">
                <span className="text-gray-700 text-xs">£BKG-0042</span>
                <span className="text-sm font-bold">$49.00</span>
                <span className="text-sm font-semibold">View</span>
            </div>
        </div>
    )
}