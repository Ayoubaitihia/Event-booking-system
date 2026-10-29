import {
  Field,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

import { Step1Data, FormErrors } from "@/lib/validations/event"
import { Input } from "@/components/ui/input"
import CategoryGrid from "@/components/organizer/CategoryGrid"
import ImageUpload from "@/components/organizer/ImageUpload"

interface Props {
    data: Step1Data,
    onChange: (key: keyof Step1Data, value: string | File | null) => void
    errors: FormErrors
}

export default function Step1BasicInfo({data, onChange, errors}: Props)
{
    return(
        <div>
            <div className="border flex flex-col text-gray-900 gap-y-4 rounded-md p-4">
                <div>
                    <h3>Basic information</h3>
                    <p className="text-xs">Tell people what your event is about</p>
                </div>

                <Field>
                    <FieldLabel className="text-xs" htmlFor="title">
                        Event title *
                    </FieldLabel>
                    <Input
                        id="title"
                        name="title"
                        type="text"
                        value={data.title}
                        onChange={(e) => onChange("title", e.target.value)}
                        placeholder="Event title"
                        className="outline-none"
                    />
                    {errors.title && <span className="text-xs text-red-500">{errors.title}</span>}
                </Field>

                <Field>
                    <FieldLabel className="text-xs" htmlFor="description">
                        Description *
                    </FieldLabel>
                    <InputGroup>
                        <InputGroupTextarea
                            id="description"
                            name="description"
                            placeholder="Write description..."
                            value={data.description}
                            onChange={(e) => onChange("description", e.target.value)}
                        />
                        <InputGroupAddon align="block-end">
                            <InputGroupText className="text-xs">{data.description.length}/280</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.description && <span className="text-xs text-red-500">{errors.description}</span>}
                </Field>

                <div className="flex flex-col gap-2">
                    <span className="text-xs">Category *</span>
                    <CategoryGrid
                        value={data.category}
                        onChange={(slug) => onChange("category", slug)}
                    />
                    {errors.category && <span className="text-xs text-red-500">{errors.category}</span>}
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xs">Cover image *</span>
                    <ImageUpload
                        value={data.cover_image}
                        onChange={(file) => onChange("cover_image", file)}
                    />
                    {errors.cover_image && <span className="text-xs text-red-500">{errors.cover_image}</span>}
                </div>
            </div>
        </div>
    )
}
