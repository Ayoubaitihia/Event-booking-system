import EventInfoCard from "./EventInfoCard";

export default function EventInfoGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 ">
      <EventInfoCard/>
      <EventInfoCard/>
      <EventInfoCard/>
      <EventInfoCard/>
    </div>
  );
}