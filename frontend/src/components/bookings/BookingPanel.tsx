import PriceHeader from "@/components/bookings/PriceHeader"
import EventDateTime from "./EventDateTime";
import SeatsBar from "./SeatsBar";
import TicketStepper from "./TicketStepper";
import BookingTotal from "./BookingTotal";
import LocationCard from "./LocationCard";
import ShareActions from "./ShareActions";

interface BookingPanelProps{
    price:     number;
    isFree:    boolean;
    startsAt:  string;
    endsAt:    string;
    booked:    number;
    capacity:  number;
    venue:     string;
    address:   string;
    shareUrl:  string;
    shareTitle: string;
    qty: number;
}


export default function BookingPanel({
    price,
    isFree,
    startsAt,
    endsAt,
    booked,
    capacity,
    venue,
    address,
    shareUrl,
    shareTitle,
    qty,
}: BookingPanelProps) {

    
    return (
        <>
            <div className="bg-gray-100 rounded-md border">
                <PriceHeader price="$49" isFree={false}/>

                <div className="p-4 flex flex-col gap-y-2 border-b">
                    <EventDateTime/>
                    <SeatsBar/>
                    <TicketStepper
                        value={qty}
                    />
                </div>

                <BookingTotal/>
            </div>

            <LocationCard/>

            <ShareActions/>
        </>
    )
}