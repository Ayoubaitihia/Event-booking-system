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

import { Step1Data } from "@/lib/validations/event"
import { step1Scheme } from "@/lib/validations/event"
import { step1Errors } from "@/lib/validations/event"
import { Input } from "@/components/ui/input"
import CategoryGrid from "@/components/organizer/CategoryGrid"
import ImageUpload from "@/components/organizer/ImageUpload"
import { useState } from "react"

export default function Step1BasicInfo()
{

    const [data, setData] = useState<Step1Data>({
        title: "",
        description: "",
        category: "",
        cover_image: null,
    })

    const [errors, setErrors] = useState<step1Errors>({})

    const validate = () => {
        const result = step1Scheme.safeParse(data)

        console.log("Result", result)
    }

    return(
        <div className="border flex flex-col text-gray-900 gap-y-4 rounded-md p-4">
            <div>
                <h3>Basic information</h3>
                <p className="text-xs">Tell people what your event is about</p>
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
                    onChange={(e) => [
                        set
                    ]}
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

            <div className="flex flex-col gap-2">
                <span className="text-xs">Category *</span>

                <CategoryGrid/>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-xs">Cover image *</span>
                <ImageUpload />
            </div>

        </div>
    )
}