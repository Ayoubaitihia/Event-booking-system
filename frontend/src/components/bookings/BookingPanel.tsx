import { Dispatch, SetStateAction } from "react";
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
    setQty: Dispatch<SetStateAction<number>>;
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
    setQty,
}: BookingPanelProps) {

    const seatsleft = capacity - booked
    const total: number = qty * price

    console.log("qty", qty)
    
    return (
        <>
            <div className="bg-gray-100 rounded-md border">
                <PriceHeader
                    price={price} 
                    isFree={false}
                />

                <div className="p-4 flex flex-col gap-y-2 border-b">
                    <EventDateTime
                        startsAt={startsAt}
                        endsAt={endsAt}
                    />
                    <SeatsBar
                        booked={booked}
                        capacity={capacity}
                    />
                    {
                        seatsleft > 0 && (
                            <TicketStepper
                                qty={qty}
                                setQty={setQty}
                            />
                        )
                    }
                </div>

                <BookingTotal
                    price={price}
                    qty={qty}
                    total={total.toFixed(2)}
                />
            </div>

            <LocationCard
                venue={venue}
                address={address}
            />

            <ShareActions
                shareUrl={shareUrl}
                shareTitle={shareTitle}
            />
        </>
    )
}