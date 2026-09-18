import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import OrganizerEventTabs from "./OrganizerEventTabs"
import OrganizerEventCard from "./OrganizerEventCard"

const data = {
    tabs: [
        {
            name: "All",
            value: "all"
        },
        {
            name: "Published",
            value: "published"
        },
        {
            name: "Pending",
            value: "pending"
        },
        {
            name: "Draft",
            value: "draft"
        },
        {
            name: "Cancelled",
            value: "cancelled"
        }
    ]
}

export default function OrganizerEventList(){
    return (
        <Tabs defaultValue="all" className="mt-3">
            <OrganizerEventTabs tabs={data.tabs}/>
            <TabsContent value="all">
                <div className="">
                    <OrganizerEventCard/>
                </div>
            </TabsContent>
        </Tabs>
    )
}