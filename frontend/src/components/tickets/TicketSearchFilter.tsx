"use client"

import { SearchIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CiFilter } from "react-icons/ci";
import { FaSort } from "react-icons/fa";


export default function TicketSearchFilter()
{
    return(
        <div className="grid grid-cols-6 gap-2">
            <InputGroup className="col-span-4">
                <InputGroupInput id="inline-start-input" placeholder="Search..." />
                <InputGroupAddon align="inline-start">
                <SearchIcon className="text-muted-foreground" />
                </InputGroupAddon>
            </InputGroup>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CiFilter />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                fkfkf
              </PopoverContent>
            </Popover>

            <Button variant="outline">
              <FaSort />
              A-Z
            </Button>
        </div> 
    )
}
