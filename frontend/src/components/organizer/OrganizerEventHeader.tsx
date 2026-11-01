"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const OrganizerEventHeader = () => {

  const router = useRouter()

  return (
    <div className="flex items-center justify-between">
        <h3>My tickets</h3>

        <Button 
          onClick={() => router.push('organizer/events/new')}
          className='flex items-center gap-x-2'>
            <FaPlus />
            New event
        </Button>
    </div>
  )
}

export default OrganizerEventHeader