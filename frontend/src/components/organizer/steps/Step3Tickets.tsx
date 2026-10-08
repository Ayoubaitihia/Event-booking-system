
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
  InputGroupInput,
} from "@/components/ui/input-group"

import { RiGroupLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from '@/components/ui/input'
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

export default function Step3Tickets()
{
    const [isOnlineEvent, setIsOnlineEvent] = useState(false)

    return(
        <div className="border flex flex-col text-gray-900 gap-y-4 rounded-md p-4">

            <div>
                <h3>Tickets & pricing</h3>
                <p className="text-xs">Set capacity and ticket price for your event</p>
            </div>

            <Item variant="outline">
                <ItemContent>
                <ItemTitle>Free event</ItemTitle>
                <ItemDescription className="text-xs">
                    Attendees can book without paying
                </ItemDescription>
                </ItemContent>
                <ItemActions>
                    <Switch 
                        checked={isOnlineEvent}
                        onCheckedChange={setIsOnlineEvent}
                        id="airplane-mode"
                    />
                </ItemActions>
            </Item>

            <div className="grid grid-cols-2 gap-4">
                <Field>
                    <FieldLabel
                        className="text-xs"
                        htmlFor="input-demo-api-key">
                            Ticket price (USD) *
                    </FieldLabel>
                    <InputGroup>
                        <InputGroupInput className="placeholder:text-xs" id="inline-start-input" placeholder="0.00" />
                        <InputGroupAddon align="inline-start">
                            <BsCurrencyDollar />
                        </InputGroupAddon>
                    </InputGroup>
                </Field>

                <Field>
                    <FieldLabel
                        className="text-xs"
                        htmlFor="input-demo-api-key">
                            Capacity *
                    </FieldLabel>
                    <InputGroup>
                        <InputGroupInput className="placeholder:text-xs" id="inline-start-input" placeholder="100" />
                        <InputGroupAddon align="inline-start">
                            <RiGroupLine />
                        </InputGroupAddon>
                    </InputGroup>
                </Field>
            </div>

            

        </div>
    )
}