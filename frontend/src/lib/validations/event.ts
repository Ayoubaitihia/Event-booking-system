import {date, z} from "zod"

export const step1Scheme = z.object({
    title: z.string()
        .min(1, "Event title is required")
        .max(100, "Title must be under 100 characters"),

    description: z.string()
        .min(10, "Description must be at least 10 characters")
        .max(280, "Description must be under 280 characters"),

    category: z.string()
        .min(1, "Please select a category"),

    cover_image: z
        .instanceof(File, {message: "Image is required"})
        .nullable()
        .refine(
            (file) =>
                file == null ||
                ["image/png", "image/jpeg", "image/webp"].includes(file.type),
                "Only PNG, JPEG, and WebP are allowed",
        )
        .refine(
            (file) => file == null || file.size <= 5 * 1024 * 1024,
            "Image must be smaller than 5 MB"
        )
        .refine((file) => file !== null, "Image is required")
})


export const step2Scheme = z.object({
    starts_at: z.string()
        .min(1, "Start date is required"),

    starts_at_time: z.string()
        .min(1, "Start time is required"),

    ends_at: z.string()
        .min(1, "End date is required"),

    ends_at_time: z.string()
        .min(1, "End time is required"),

    is_online: z.boolean(),
    online_url: z.string()
        .optional(),
    venue_name: z.string(),
    address: z.string()
})
.refine(
    (data) => !data.is_online || !!data.online_url?.trim(),
    {
        message: "Online URL is required for online events",
        path: ["online_url"]
    }
)
.refine(
    (data) => data.is_online || data.venue_name.trim().length > 0,
    {
        message: "Venue name is required for in-person events",
        path: ["venue_name"]
    }
)
.refine(
    (data) => data.is_online || data.address.trim().length > 0,
    {
        message: "Address is required for in-person events",
        path: ["address"]
    }
)
.refine(
    (data) =>{

        if (data.starts_at > data.ends_at)
            return false

        if ((data.starts_at == data.ends_at) && (data.starts_at_time >= data.ends_at_time)){
            return false
        }

        return true
    },{
        message: "End date and time must be after start date and time",
        path: ["ends_at_time"]
    }
)



export const step3Scheme = z.object({
    is_free: z.boolean(),

    price: z.number()
        .min(0, "Price cannot be negative")
        .nullable(),

    capacity: z.number()
        .min(1, "Capacity must be at least 1")
        .nullable(),
})
.refine(
    (data) => data.capacity !== null,
    { message: "Capacity is required", path: ["capacity"] }
)
.refine(
    (data) => data.is_free || (data.price !== null && data.price > 0),
    { message: "Price is required for paid events", path: ["price"] }
)



export type Step1Data = z.infer<typeof step1Scheme>
export type Step2Data = z.infer<typeof step2Scheme>
export type Step3Data = z.infer<typeof step3Scheme>

export type step1Errors = Partial<Record<keyof Step1Data, string>>
export type step2Errors = Partial<Record<keyof Step2Data, string>>
export type step3Errors = Partial<Record<keyof Step3Data, string>>

export type AllFields = Step1Data & Step2Data & Step3Data
export type FormErrors = Partial<Record<keyof AllFields, string>>
