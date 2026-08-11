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
import { useState } from "react"
import { EventContext } from "./EventContext";

export interface AgendaItem {
  time:     string;
  title:    string;
  speaker?: string;
}

export interface organizerType{
  id: number,
  name: string,
  email: string,
  event_count: number,
  attendee_count: number
}

export interface EventProps{
  id:         number,
  title:      string,
  slug:       string,
  description: string,

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

  organizer: organizerType

  agenda: AgendaItem[];
}


export interface EventPropsType{
  event: EventProps,
  setEvent: React.Dispatch<React.SetStateAction<EventProps>>
}


export default function EventsPage() {

  const [event, setEvent] = useState<EventProps>({
    
    id: 1,
    title: 'Next.js & Laravel Full-Stack Conference 2026',
    slug: 'nextjs-laravel-conference-2026',
    description: 'Two days of deep-dive talks on modern full-stack development. Speakers from Vercel, Laravel core team, and companies shipping production apps at scale.',

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

    organizer: {
      id:             1,
      name:           'Amine Mrani',
      email:          'amine@example.com',
      event_count:    12,
      attendee_count: 3400,
    },

    agenda: [
      { time: '08:30', title: 'Registration & welcome coffee' },
      { time: '09:00', title: 'Keynote — The future of full-stack', speaker: 'Vercel team' },
      { time: '10:30', title: 'Deep dive — Laravel Sanctum & API auth', speaker: 'Taylor Otwell' },
      { time: '13:00', title: 'Lunch break' },
      { time: '14:00', title: 'Workshop — Server Actions in production' },
      { time: '17:00', title: 'Panel — Monorepo patterns & deployment' },
    ],
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
                    {event.title}
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