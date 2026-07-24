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

export default function EventsPage() {

  let qty: number = 120

  return (
    <>
        <Navbar/>
        <EventCover/>

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
              <BookingPanel
                price={4900}
                isFree={false}
                startsAt="2026-06-14T09:00:00Z"
                endsAt="2026-06-14T18:00:00Z"
                booked={320}
                capacity={400}
                venue="Sofitel Agadir Royal Bay"
                address="Agadir, Morocco"
                shareUrl={`https://evently.com/events`}
                shareTitle="Event title"
                qty={qty}
              />
            </aside>
        </div>

        <div className="p-6 lg:px-8">
          <RelatedEvents/>
        </div>
      
    </>
  );
}