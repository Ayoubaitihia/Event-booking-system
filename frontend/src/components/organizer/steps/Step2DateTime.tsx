"use client"

import * as React from "react"

import { Input } from '@/components/ui/input'
import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

import DateTimePicker from "../DateTimePicker"
import TimePicker from "../TimePicker"
import { Step2Data, FormErrors } from "@/lib/validations/event"


interface Props {
    onChange: (key: keyof Step2Data, value: string | File | boolean | null) => void
    errors: FormErrors
}

export default function Step2DateTime({onChange, errors}: Props)
{
    const [isOnlineEvent, setIsOnlineEvent] = React.useState(false)

    const handleOnlineEvent = () =>{
        setIsOnlineEvent(!isOnlineEvent)
        onChange("is_online", !isOnlineEvent)
    }

    return(
        <div className="border flex flex-col text-gray-900 gap-y-4 rounded-md p-4">

            <div>
                <h3>Date, time & location</h3>
                <p className="text-xs">When and where is your event taking place?</p>
            </div>

            <div className="grid gap-4 grid-cols-2">
                <div>
                    <DateTimePicker
                        onChange={onChange}
                        fieldKey="starts_at"
                        label="Start date *"
                    />
                    {errors.starts_at && <span className="text-xs text-red-500">{errors.starts_at}</span>}
                </div>
                <div>
                    <TimePicker
                        onChange={onChange}
                        fieldKey="starts_at_time"
                        label="Start time *"
                    />
                    {errors.starts_at_time && <span className="text-xs text-red-500">{errors.starts_at_time}</span>}
                </div>
                <div>
                    <DateTimePicker
                        onChange={onChange}
                        fieldKey="ends_at"
                        label="End date *"
                    />
                    {errors.ends_at && <span className="text-xs text-red-500">{errors.ends_at}</span>}
                </div>
                <div>
                    <TimePicker
                        onChange={onChange}
                        fieldKey="ends_at_time"
                        label="End time *"
                    />
                    {errors.ends_at_time && <span className="text-xs text-red-500">{errors.ends_at_time}</span>}
                </div>
            </div>

            <Item variant="outline">
                <ItemContent>
                <ItemTitle>Online event</ItemTitle>
                <ItemDescription className="text-xs">
                    Add a URL instead of a physical location
                </ItemDescription>
                </ItemContent>
                <ItemActions>
                    <Switch
                        checked={isOnlineEvent}
                        onCheckedChange={handleOnlineEvent}
                        id="online-event"
                    />
                </ItemActions>

                {isOnlineEvent && (<Input
                    type="text"
                    onChange={(e) => onChange("online_url", e.target.value)}
                    placeholder="https://example.com"
                    className="outline-none text-xs placeholder:text-xs"
                />)}
            </Item>
            {errors.online_url && <span className="text-xs text-red-500">{errors.online_url}</span>}

            {!isOnlineEvent && (
            <Field>
                <FieldLabel className="text-xs" htmlFor="venue_name">
                    Venue name *
                </FieldLabel>
                <Input
                    id="venue_name"
                    type="text"
                    onChange={(e) => onChange("venue_name", e.target.value)}
                    placeholder="Venue name"
                    className="outline-none"
                />
                {errors.venue_name && <span className="text-xs text-red-500">{errors.venue_name}</span>}
            </Field>
            )}

            {!isOnlineEvent && (
            <Field>
                <FieldLabel className="text-xs" htmlFor="address">
                    Address *
                </FieldLabel>
                <Input
                    id="address"
                    type="text"
                    onChange={(e) => onChange("address", e.target.value)}
                    placeholder="Address"
                    className="outline-none"
                />
                {errors.address && <span className="text-xs text-red-500">{errors.address}</span>}
            </Field>
            )}

        </div>
    )
}
