import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import OrganizerEventTabs from "./OrganizerEventTabs"
import OrganizerEventCard from "./OrganizerEventCard"
import OrganizerEventSearch from "./OrganizerEventSearch"
import { STATIC_EVENTS } from "@/lib/static/events"

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
            <OrganizerEventSearch/>
            <TabsContent value="all">
                <span className="text-xs text-gray-700">Showing 6 of 6 events</span>
                <div className="flex flex-col gap-y-2 mt-2">
                    {
                        STATIC_EVENTS.map((event) => (
                            <OrganizerEventCard key={event.id} event={event}/>
                        ))
                    }
                </div>
            </TabsContent>
        </Tabs>
    )
}