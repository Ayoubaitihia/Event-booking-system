import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import TicketTabs from "./TicketTabs"
import TicketCard from "./TicketCard"

const data = {
    tabs: [
        {
            name: "All",
            value: "all"
        },
        {
            name: "Upcoming",
            value: "upcoming"
        },
        {
            name: "Attended",
            value: "attended"
        },
        {
            name: "Cancelled",
            value: "cancelled"
        }
    ]
}

export default function TicketList(){
    return (
        <Tabs defaultValue="all" className="mt-3">
            <TicketTabs tabs={data.tabs}/>
            <TabsContent value="all">
                <div className="grid grid-cols-3 gap-2">
                    <TicketCard/>
                </div>
            </TabsContent>
        </Tabs>
    )
}