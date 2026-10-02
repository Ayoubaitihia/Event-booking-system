
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"


export default function Step1BasicInfo()
{
    return(
        <div className="border flex flex-col gap-y-4 rounded-md p-4">
            <div>
                <h3>Basic information</h3>
                <p className="text-gray-900 text-xs">Tell people what your event is about</p>
            </div>

            <Field>
                <FieldLabel
                    className="text-xs"
                    htmlFor="input-demo-api-key">
                        Event title *
                </FieldLabel>
                <Input 
                    id="input-demo-api-key"
                    type="text"
                    placeholder="Event title"
                    className="outline-none"
                    />
            </Field>


            <Field>
                <FieldLabel
                    className="text-xs"
                    htmlFor="block-end-textarea">
                        Description *
                    </FieldLabel>
                <InputGroup>
                    <InputGroupTextarea
                        id="block-end-textarea"
                        placeholder="Write description..."
                    />
                    <InputGroupAddon align="block-end">
                        <InputGroupText className="text-xs">0/280</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </Field>

        </div>
    )
}