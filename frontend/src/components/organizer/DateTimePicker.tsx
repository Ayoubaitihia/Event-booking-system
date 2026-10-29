"use client"

import * as React from "react"
import * as chrono from "chrono-node"
import { CalendarIcon } from "lucide-react"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


import { Calendar } from "@/components/ui/calendar"
import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

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

  import { Step2Data, step2Errors } from "@/lib/validations/event"


function formatDate(date: Date | undefined) {
    if (!date) return ""
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    })
}

interface DateTimePickerProps {
    label: string,
    fieldKey: keyof Step2Data,
    onChange: (key: keyof Step2Data, value: string | File | boolean | null) => void
    errors?: step2Errors
}

export default function DateTimePicker({ label, fieldKey, onChange }: DateTimePickerProps)
{
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const [date, setDate] = React.useState<Date | undefined>(undefined)

    return(
        <Field>
            <FieldLabel
                className="text-xs"
                htmlFor="input-demo-api-key">
                    {label}
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
                            onChange(fieldKey, parsedDate.toLocaleDateString("en-CA"))
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
                            onChange(fieldKey, date ? date.toLocaleDateString("en-CA") : null)
                            setValue(formatDate(date))
                            setOpen(false)
                            }}
                        />
                        </PopoverContent>
                    </Popover>
                </InputGroupAddon>
            </InputGroup>
        </Field>
    )
}