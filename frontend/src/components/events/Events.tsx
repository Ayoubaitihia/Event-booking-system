import EventCard from "./EventCard";
import EventsPagination from "./EventsPagination";

export default function Events() {
  return(
    <div className="px-6 lg:px-8 py-6">
        <h3 className="font-medium text-lg">All events</h3>
        <div className="flex py-6 items-center justify-between">
            <div>
                <span className="text-sm">Sort by</span>
            </div>
            <span className="text-xs">124 events found</span>
            
        </div>
        <div className="grid grid-cols-4 pt-4 gap-4">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>

        <div className="flex items-center justify-center pt-8">
            <EventsPagination/>
        </div>
        
    </div>
  )
}