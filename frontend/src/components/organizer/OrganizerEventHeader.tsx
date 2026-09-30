import React from 'react'
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6";

const OrganizerEventHeader = () => {
  return (
    <div className="flex items-center justify-between">
        <h3>My tickets</h3>

        <Button className='flex items-center gap-x-2'>
            <FaPlus />
            New event
        </Button>
    </div>
  )
}

export default OrganizerEventHeader