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

    const {event} = useEventContext()

    const seatsleft = event.capacity - event.booked
    
    return (
        <>
            <div className="bg-gray-100 rounded-md border">
                <PriceHeader/>

                <div className="p-4 flex flex-col gap-y-2 border-b">
                    <EventDateTime/>
                    <SeatsBar/>
                    {
                        seatsleft > 0 && (
                            <TicketStepper/>
                        )
                    }
                </div>

                <BookingTotal/>
            </div>

            <LocationCard/>

            <ShareActions/>
        </>
    )
}