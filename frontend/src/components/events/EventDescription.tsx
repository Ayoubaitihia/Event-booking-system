import { useEventContext } from "@/context/EventContext";

export default function EventDescription() {

  const {event} = useEventContext()
  
  return (
    <div>
      <h3 className="font-medium">About this event</h3>
      <p className="mt-2 text-gray-700 text-sm">
        {event.description}
      </p>
    </div>
  );
}