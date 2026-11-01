"use client"

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import OrganizerEventTabs from "./OrganizerEventTabs"
import OrganizerEventCard from "./OrganizerEventCard"
import OrganizerEventSearch from "./OrganizerEventSearch"
import { EventProps } from "@/lib/static/events"
import { useEffect, useState } from "react"

const data = {
    tabs: [
        {
            id: 1,
            name: "All",
            value: "all"
        },
        {
            id: 2,
            name: "Published",
            value: "published"
        },
        {
            id: 3,
            name: "Pending",
            value: "pending"
        },
        {
            id: 4,
            name: "Draft",
            value: "draft"
        },
        {
            id: 5,
            name: "Cancelled",
            value: "cancelled"
        }
    ]
}

export default function OrganizerEventList({events}: EventProps){

    const [searchQuery, setSearchQuery] = useState({
        title: "",
        status: "",
        category: "",
    })
    const [filtered_events, setFiltered_events] = useState([])

    const onChange = (key, value) =>{
        setSearchQuery(prev => ({ ...prev, [key]: value}))
    }

    useEffect(() => {
        const filtered = events.filter(event => 
            event.title.toLowerCase().includes(searchQuery.title.toLowerCase())
        )
        setFiltered_events(filtered)

        // console.log("filtered_events:", filtered_events)
    }, [searchQuery.title])

    return (
        <Tabs defaultValue="all" className="mt-3">
            {/* <OrganizerEventTabs
                tabs={data.tabs}
            /> */}

            <OrganizerEventSearch
                onChange={onChange}
            />

            <TabsContent value="all">
                {filtered_events.length ? (
                    <span className="text-xs text-gray-700">Showing 6 of {filtered_events.length} event
                    {filtered_events.length > 1 ? ('s') : ('')}</span>
                ): ""}
                <div className="flex flex-col gap-y-2 mt-2">
                    {filtered_events.length ?(
                        filtered_events.map((event: EventProps) => (
                            <OrganizerEventCard
                                key={event.id}
                                event={event}/>
                        ))
                    ): (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <p className="text-gray-400 text-sm mt-2">No events found matching your search.</p>
                        </div>
                    )}
                </div>
            </TabsContent>
        </Tabs>
    )
}