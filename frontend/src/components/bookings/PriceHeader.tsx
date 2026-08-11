import { useEventContext } from "@/app/(public)/events/EventContext"


export default function PriceHeader(){

    const {event} = useEventContext()

    return (
        <div className="border-b p-4 flex flex-col">
            <span className="text-2xl font-semibold">
                {event.isFree ? 'Free' : `${event.price}$`}
            </span>
            
            {!event.isFree && (
                <span className="text-sm">per person</span>
            )}
        </div> 
    )
}