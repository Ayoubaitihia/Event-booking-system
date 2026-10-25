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
import { Button } from "@/components/ui/button"

interface Props {
    data: Step1Data,
    onChange: (key: keyof Step1Data, value: string | File | null) => void
    errors: step1Errors
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
                    <FieldLabel
                        className="text-xs"
                        htmlFor="input-demo-api-key">
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
                </Field>
                {errors.title?.[0] && (
                    <span>{errors.title[0]}</span>
                )}


                <Field>
                    <FieldLabel
                        className="text-xs"
                        htmlFor="block-end-textarea">
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
                </Field>
                {errors.description?.[0] && (
                    <span>{errors.description[0]}</span>
                )}

                <div className="flex flex-col gap-2">
                    <span className="text-xs">Category *</span>

                    <CategoryGrid
                        value={data.category}
                        onChange={(slug) => onChange("category", slug)}
                    />
                </div>
                {errors.category?.[0] && (
                    <span>{errors.category[0]}</span>
                )}

                <div className="flex flex-col gap-2">
                    <span className="text-xs">Cover image *</span>
                    <ImageUpload
                        value={data.cover_image}
                        onChange={(file) => onChange("cover_image", file)}
                    />
                </div>
                {errors.cover_image?.[0] && (
                    <span>{errors.cover_image[0]}</span>
                )}

            </div>
        </div>
    )
}