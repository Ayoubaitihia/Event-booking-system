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
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"

export default function TicketSearchFilter()
{
    return(
        <div className="grid grid-cols-6 gap-2">
            <InputGroup className="col-span-4">
                <InputGroupInput id="inline-start-input" placeholder="Search by event name, location..." />
                <InputGroupAddon align="inline-start">
                <SearchIcon className="text-muted-foreground" />
                </InputGroupAddon>
            </InputGroup>

            <Popover>
              <PopoverTrigger asChild>
                <Button className="cursor-pointer" variant="outline">
                  <CiFilter />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-150">
                <div className="grid grid-cols-3 items-start gap-x-4 p-2">
                  <div>
                    <span className="uppercase text-[10px] font-light">Status</span>
                    <FieldGroup className="mt-2 gap-y-2.5 ml-1.5">
                      <Field orientation="horizontal">
                        <Checkbox id="terms-checkbox" name="terms-checkbox" />
                        <Label className="text-xs" htmlFor="terms-checkbox">Upcoming</Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox id="terms-checkbox" name="terms-checkbox" />
                        <Label className="text-xs" htmlFor="terms-checkbox">Attended</Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox id="terms-checkbox" name="terms-checkbox" />
                        <Label className="text-xs" htmlFor="terms-checkbox">Cancelled</Label>
                      </Field>
                    </FieldGroup>
                  </div>
                  <div>
                    <span className="uppercase text-[10px] font-light">Category</span>
                    <FieldGroup className="mt-2 gap-y-2.5 ml-1.5">
                      <Field orientation="horizontal" >
                        <Checkbox id="terms-checkbox" name="terms-checkbox" />
                        <Label className="text-xs" htmlFor="terms-checkbox">Tech</Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox id="terms-checkbox" name="terms-checkbox" />
                        <Label className="text-xs" htmlFor="terms-checkbox">Sports</Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox id="terms-checkbox" name="terms-checkbox" />
                        <Label className="text-xs" htmlFor="terms-checkbox">Arts</Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox id="terms-checkbox" name="terms-checkbox" />
                        <Label className="text-xs" htmlFor="terms-checkbox">Food</Label>
                      </Field>
                    </FieldGroup>
                  </div>
                  <div>
                    <span className="uppercase text-[10px] font-light">Status</span>
                    <FieldGroup className="mt-2 gap-y-2.5 ml-1.5">
                      <Field orientation="horizontal">
                        <Checkbox id="terms-checkbox" name="terms-checkbox" />
                        <Label className="text-xs" htmlFor="terms-checkbox">Free</Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox id="terms-checkbox" name="terms-checkbox" />
                        <Label className="text-xs" htmlFor="terms-checkbox">Paid</Label>
                      </Field>
                    </FieldGroup>
                  </div>
                </div>
                <div className="border-t py-2 flex items-center justify-between">
                  <Button className="cursor-pointer text-xs" variant="outline">
                    Clear all filters
                  </Button>
                  <Button className="cursor-pointer text-xs" variant="outline">
                    Apply filters
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            <Button className="cursor-pointer" variant="outline">
              <FaSort />
              A-Z
            </Button>
        </div> 
    )
}
