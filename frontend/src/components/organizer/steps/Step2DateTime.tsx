"use client"

import * as React from "react"
import * as chrono from "chrono-node"
import { CalendarIcon } from "lucide-react"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Clock8Icon } from 'lucide-react'


import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"


import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


function formatDate(date: Date | undefined) {
    
    if (!date) {
        return ""
    }

    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
}

export default function Step2DateTime()
{
    
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("In 2 days")
    const [date, setDate] = React.useState<Date | undefined>(
        chrono.parseDate(value) || undefined
    )

    return(
        <div className="border flex flex-col text-gray-900 gap-y-4 rounded-md p-4">

            <div>
                <h3>Date, time & location</h3>
                <p className="text-xs">When and where is your event taking place?</p>
            </div>


            <div className="grid gap-4 grid-cols-2">
                <Field>
                    <FieldLabel
                        className="text-xs"
                        htmlFor="input-demo-api-key">
                            Start date *
                    </FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            id="date-optional"
                            value={value}
                            placeholder="Tomorrow or next week"
                            onChange={(e) => {
                                
                                const newValue = e.target.value

                                setValue(newValue)

                                const parsedDate = chrono.parseDate(newValue)

                                if (parsedDate) {
                                    setDate(parsedDate)
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "ArrowDown") {
                                    e.preventDefault()
                                    setOpen(true)
                                }
                            }}
                        />
                    <InputGroupAddon align="inline-end">
                    <Popover open={open} onOpenChange={setOpen}>
                        
                        <PopoverTrigger asChild>
                            <InputGroupButton
                                id="date-picker"
                                variant="ghost"
                                size="icon-xs"
                                aria-label="Select date"
                            >
                            <CalendarIcon />
                                <span className="sr-only">
                                Select date
                                </span>
                            </InputGroupButton>
                        </PopoverTrigger>

                        <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="end"
                        sideOffset={8}
                        >
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            defaultMonth={date}
                            onSelect={(date) => {
                            setDate(date)
                            setValue(formatDate(date))
                            setOpen(false)
                            }}
                        />
                        </PopoverContent>
                    </Popover>
                    </InputGroupAddon>
                    </InputGroup>
                </Field>

                <Field>
                    <FieldLabel
                        className="text-xs"
                        htmlFor="input-demo-api-key">
                            Start time *
                    </FieldLabel>
                    <div className='relative'>
                        <div className='text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50'>
                        <Clock8Icon className='size-4' />
                        <span className='sr-only'>User</span>
                        </div>
                            <Input
                            type='time'
                            id='time-picker'
                            step='1'
                            defaultValue='08:30'
                            className='peer bg-background appearance-none pl-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
                            />
                    </div>
                </Field>

                <Field>
                    <FieldLabel
                        className="text-xs"
                        htmlFor="input-demo-api-key">
                            End date *
                    </FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            id="date-optional"
                            value={value}
                            placeholder="Tomorrow or next week"
                            onChange={(e) => {
                                
                                const newValue = e.target.value

                                setValue(newValue)

                                const parsedDate = chrono.parseDate(newValue)

                                if (parsedDate) {
                                    setDate(parsedDate)
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "ArrowDown") {
                                    e.preventDefault()
                                    setOpen(true)
                                }
                            }}
                        />
                    <InputGroupAddon align="inline-end">
                    <Popover open={open} onOpenChange={setOpen}>
                        
                        <PopoverTrigger asChild>
                            <InputGroupButton
                                id="date-picker"
                                variant="ghost"
                                size="icon-xs"
                                aria-label="Select date"
                            >
                            <CalendarIcon />
                                <span className="sr-only">
                                Select date
                                </span>
                            </InputGroupButton>
                        </PopoverTrigger>

                        <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="end"
                        sideOffset={8}
                        >
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            defaultMonth={date}
                            onSelect={(date) => {
                            setDate(date)
                            setValue(formatDate(date))
                            setOpen(false)
                            }}
                        />
                        </PopoverContent>
                    </Popover>
                    </InputGroupAddon>
                    </InputGroup>
                </Field>
            </div>

            <div>

            </div>

            <Field>
                <FieldLabel
                    className="text-xs"
                    htmlFor="input-demo-api-key">
                        Venue name *
                </FieldLabel>
                <Input 
                    id="input-demo-api-key"
                    type="text"
                    placeholder="Venue name"
                    className="outline-none"
                    />
            </Field>

            <Field>
                <FieldLabel
                    className="text-xs"
                    htmlFor="input-demo-api-key">
                        Address *
                </FieldLabel>
                <Input 
                    id="input-demo-api-key"
                    type="text"
                    placeholder="Address"
                    className="outline-none"
                    />
            </Field>

        </div>
    )
}