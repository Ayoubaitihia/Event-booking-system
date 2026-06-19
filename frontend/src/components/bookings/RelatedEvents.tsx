import RelatedEventsCard from '@/components/bookings/RelatedEventsCard'

export default function RelatedEvents() {
    return (
        <>
            <h3 className="font-medium">More tech events near you</h3>

            <div className="flex items-center mt-4 gap-3">
                <RelatedEventsCard/>
                <RelatedEventsCard/>
                <RelatedEventsCard/>
            </div>
        </>
    )
}