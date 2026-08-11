'use client';

import Navbar from "@/components/layout/Navbar"
import EventCover from '@/app/(public)/events/EventCover'
import EventPath from '@/app/(public)/events/EventPath'
import EventMeta from '@/app/(public)/events/EventMeta'
import EventInfoGrid from '@/app/(public)/events/EventInfoGrid'
import EventDescription from '@/app/(public)/events/EventDescription'
import EventSchedule from "@/components/events/EventSchedule"
import OrganizerCard from "@/components/events/OrganizerCard"
import BookingPanel from "@/components/bookings/BookingPanel"
import RelatedEvents from '@/components/bookings/RelatedEvents'
import { Dispatch, SetStateAction } from "react";
import { useState } from "react"
import { useEventContext } from "./EventContext";
import { EventContext } from "./EventContext";


export interface EventProps{
  price:     number;
  isFree:    boolean;
  startsAt:  string;
  endsAt:    string;
  booked:    number;
  capacity:  number;
  venue:     string;
  address:   string;
  shareUrl:  string;
  qty: number;
  shareTitle: string;
}


export interface EventPropsType{
  event: EventProps,
  setEvent: React.Dispatch<React.SetStateAction<EventProps>>
}


export default function EventsPage() {

  const [event, setEvent] = useState<EventProps>({
    price: 49,
    isFree: false,
    startsAt: "2026-06-14T09:00:00Z",
    endsAt: "2026-06-14T18:00:00Z",
    booked: 30,
    capacity: 200,
    venue: "Sofitel Agadir Royal Bay",
    address: "Agadir, Morocco",
    shareUrl: "https://evently.com/events",
    shareTitle: "Event title",
    qty: 1,
  })


  return (
    <>
        <Navbar/>
        <EventCover/>

        <EventContext.Provider
          value={{
            event: event,
            setEvent: setEvent
          }}
        >
          <div className="p-6 lg:px-8 grid grid-cols-[1fr_350px] gap-6">
              <div className="flex flex-col gap-y-5.5">
                  <EventPath/>
                  <EventMeta/>
                  <h1 className="text-2xl font-semibold">
                    Next.js & Laravel Full-Stack Conference 2026
                  </h1>
                  <EventInfoGrid/>
                  <EventDescription/>
                  <EventSchedule/>
                  <OrganizerCard/>
              </div>

              <aside className="sticky top-0">
                <BookingPanel/>
              </aside>
          </div>

          <div className="p-6 lg:px-8">
            <RelatedEvents/>
          </div>
        </EventContext.Provider>
      
    </>
  );
}