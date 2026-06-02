import EventCard from "./EventCard";

export default function Events() {
  return(
    <div className="px-6 lg:px-8 py-6">
        <h3 className="font-medium text-lg">All events</h3>
        <div>
            
        </div>
        <div className="grid grid-cols-4 pt-4 gap-4">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </div>
        
    </div>
  )
}