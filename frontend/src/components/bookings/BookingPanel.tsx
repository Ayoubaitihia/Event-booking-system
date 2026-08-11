import { Dispatch, SetStateAction } from "react";
import PriceHeader from "@/components/bookings/PriceHeader"
import EventDateTime from "./EventDateTime";
import SeatsBar from "./SeatsBar";
import TicketStepper from "./TicketStepper";
import BookingTotal from "./BookingTotal";
import LocationCard from "./LocationCard";
import ShareActions from "./ShareActions";
import { useEventContext } from "@/app/(public)/events/EventContext";

export default function BookingPanel() {

    const {event, setEvent} = useEventContext()

    const seatsleft = event.capacity - event.booked
    const total: number = event.qty * event.price
    
    return (
        <>
            <div className="bg-gray-100 rounded-md border">
                <PriceHeader
                    price={event.price} 
                    isFree={false}
                />

                <div className="p-4 flex flex-col gap-y-2 border-b">
                    <EventDateTime
                        startsAt={event.startsAt}
                        endsAt={event.endsAt}
                    />
                    <SeatsBar
                        booked={event.booked}
                        capacity={event.capacity}
                    />
                    {
                        seatsleft > 0 && (
                            <TicketStepper/>
                        )
                    }
                </div>

                <BookingTotal
                    price={event.price}
                    qty={event.qty}
                    total={total.toFixed(2)}
                />
            </div>

            <LocationCard
                venue={event.venue}
                address={event.address}
            />

            <ShareActions
                shareUrl={event.shareUrl}
                shareTitle={event.shareTitle}
            />
        </>
    )
}