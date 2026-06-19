import EventInfoCard from '@/app/(public)/events/EventInfoCard'

export default function EventInfoGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-2 ">
      <EventInfoCard/>
      <EventInfoCard/>
      <EventInfoCard/>
      <EventInfoCard/>
    </div>
  );
}