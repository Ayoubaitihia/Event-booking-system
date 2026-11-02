import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6";
import Link from 'next/link';

const OrganizerEventHeader = () => {

  return (
    <div className="flex items-center justify-between">
        <h3>My tickets</h3>

        <Link
        href="/organizer/events/new"
        >
          <Button 
            className='flex cursor-pointer items-center gap-x-2'>
              <FaPlus />
              New event
          </Button>
        </Link>
    </div>
  )
}

export default OrganizerEventHeader