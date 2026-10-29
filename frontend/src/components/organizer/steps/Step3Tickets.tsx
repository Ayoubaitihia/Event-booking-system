
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
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { Step3Data, FormErrors } from "@/lib/validations/event";

interface Props {
    data: Step3Data,
    onChange: (key: keyof Step3Data, value: number | boolean | null) => void
    errors: FormErrors
}

export default function Step3Tickets({data, onChange, errors}: Props)
{
    const [isFreeEvent, setIsFreeEvent] = useState(false)

    const handleFreeEvent = () => {
        const next = !isFreeEvent
        setIsFreeEvent(next)
        onChange("is_free", next)
        if (next) onChange("price", null)
    }

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
                        checked={isFreeEvent}
                        onCheckedChange={handleFreeEvent}
                        id="free-event"
                    />
                </ItemActions>
            </Item>

            <div className="grid grid-cols-2 gap-4">
                <Field>
                    <FieldLabel className="text-xs" htmlFor="price">
                        Ticket price (USD) *
                    </FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            id="price"
                            readOnly={data.is_free}
                            value={data.price ?? ""}
                            onChange={(e) => onChange("price", e.target.value === "" ? null : Number(e.target.value))}
                            className="placeholder:text-xs"
                            placeholder="0.00"
                        />
                        <InputGroupAddon align="inline-start">
                            <BsCurrencyDollar />
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.price && <span className="text-xs text-red-500">{errors.price}</span>}
                </Field>

                <Field>
                    <FieldLabel className="text-xs" htmlFor="capacity">
                        Capacity *
                    </FieldLabel>
                    <InputGroup>
                        <InputGroupInput
                            id="capacity"
                            value={data.capacity ?? ""}
                            onChange={(e) => onChange("capacity", e.target.value === "" ? null : Number(e.target.value))}
                            className="placeholder:text-xs"
                            placeholder="0"
                        />
                        <InputGroupAddon align="inline-start">
                            <RiGroupLine />
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.capacity && <span className="text-xs text-red-500">{errors.capacity}</span>}
                </Field>
            </div>

        </div>
    )
}
