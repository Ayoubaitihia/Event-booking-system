import {z} from "zod"

export const step1Scheme = z.object({
    title: z.string().min(1, "Title is required").max(100, "Max 100 characters"),
    description: z.string().min(10, "At least 10 characters").max(280, "Max 280 characters"),
    category: z.string().min(1, "Please select a category"),
    cover_image: z
        .instanceof(File, {message: "Image is required"})
        .refine(
            (file) => 
                file == null ||
                ["image/png", "image/jpeg", "image/webp"].includes(file.type),
                "Only PNG, JPEG, and WebP are allowed",
        )
        .refine(
            (file) => file.size <= 5 * 1024 * 1024,
            "Image must be smaller than 5 MB"
        )
})

export type Step1Data = z.infer<typeof step1Scheme>

export type step1Errors = Partial<Record<keyof Step1Data, string>>