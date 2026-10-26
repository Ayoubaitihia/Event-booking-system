"use client"

import * as React from "react"
import { Clock8Icon } from 'lucide-react'

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
import { Step2Data, step2Errors } from "@/lib/validations/event"


interface Props {
    data: Step2Data,
    onChange: (key: keyof Step2Data, value: string | File | boolean | null) => void
    errors: step2Errors
}

export default function Step2DateTime({data, onChange, errors}: Props)
{
    const [isOnlineEvent, setIsOnlineEvent] = React.useState(false)

    const handleOnlineEvent = () =>{
        setIsOnlineEvent(!isOnlineEvent)
        onChange("is_online", !isOnlineEvent)
    }

    const submit = () => {!
        console.log("is online:", data.is_online)
        console.log("URL online:", data.online_url)
        console.log("venue name:", data.venue_name)
        console.log("address:", data.address)
        console.log("submitted")
    }

    return(
        <div className="border flex flex-col text-gray-900 gap-y-4 rounded-md p-4">

            <div>
                <h3>Date, time & location</h3>
                <p className="text-xs">When and where is your event taking place?</p>
            </div>

            <div className="grid gap-4 grid-cols-2">
                <DateTimePicker
                    onChange={onChange}
                    label="Start date *"
                />
                <TimePicker
                    onChange={onChange}
                    label="Start time *"
                />
                <DateTimePicker 
                    onChange={onChange}
                    label="End date *"
                />
                <TimePicker
                    onChange={onChange}
                    label="End time *"
                />
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
                        id="airplane-mode"
                    />
                </ItemActions>

                {isOnlineEvent && (<Input 
                    id="input-demo-api-key"
                    type="text"
                    onChange={(e) => onChange("online_url", e.target.value)}
                    placeholder="https://example.com"
                    className="outline-none text-xs placeholder:text-xs"
                />)}
            </Item>

            {isOnlineEvent && (
            <Field>
                <FieldLabel
                    className="text-xs"
                    htmlFor="input-demo-api-key">
                        Venue name *
                </FieldLabel>
                <Input 
                    id="input-demo-api-key"
                    type="text"
                    onChange={(e) => onChange("venue_name", e.target.value)}
                    placeholder="Venue name"
                    className="outline-none"
                    />
            </Field>
            )}

            {isOnlineEvent && (
            <Field>
                <FieldLabel
                    className="text-xs"
                    htmlFor="input-demo-api-key">
                        Address *
                </FieldLabel>
                <Input 
                    id="input-demo-api-key"
                    type="text"
                    onChange={(e) => onChange("address", e.target.value)}
                    placeholder="Address"
                    className="outline-none"
                    />
            </Field>
            )}

            <button
            onClick={() => submit()}
            >
                Submit
            </button>

        </div>
    )
}