import PriceHeader from "@/components/bookings/PriceHeader"
import EventDateTime from "./EventDateTime";
import SeatsBar from "./SeatsBar";
import TicketStepper from "./TicketStepper";
import BookingTotal from "./BookingTotal";
import LocationCard from "./LocationCard";
import ShareActions from "./ShareActions";


export default function BookingPanel() {
    return (
        <>
            <div className="bg-gray-100 rounded-md border">
                <PriceHeader price="$49" isFree={false}/>

                <div className="p-4 flex flex-col gap-y-2 border-b">
                    <EventDateTime/>
                    <SeatsBar/>
                    <TicketStepper/>
                </div>

                <BookingTotal/>
            </div>

            <LocationCard/>

            <ShareActions/>
        </>
    )
}