import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import TicketSearchFilter from "./TicketSearchFilter"
import TicketTabs from "./TicketTabs"
import TicketCard from "./TicketCard"


const data = {
    tabs: [
        {
            name: "All",
            value: "all",
            count: 13,
        },
        {
            name: "Upcoming",
            value: "upcoming",
            count: 3,
        },
        {
            name: "Attended",
            value: "attended",
            count: 8,
        },
        {
            name: "Cancelled",
            value: "cancelled",
            count: 2,
        }
    ]
}

export default function TicketList(){
    return (
        <Tabs defaultValue="all" className="mt-3">
            <TicketTabs tabs={data.tabs}/>
            <TicketSearchFilter/>
            <TabsContent value="all">
                <div className="grid grid-cols-3 gap-2">
                    <TicketCard/>
                </div>
            </TabsContent>
        </Tabs>
    )
}