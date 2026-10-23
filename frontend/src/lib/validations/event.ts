import {z} from "zod"

export const step1Scheme = z.object({
    title: z.string()
        .min(1, "Event title is required")
        .max(100, "Title must be under 100 characters"),

    description: z.string()
        .min(10, "Description must be at least 10 characters")
        .max(280, "Description must be under 280 characters"),

    category: z.string()
        .min(1, "Please select a category"),
    
    // cover_image: z
    //     .instanceof(File, {message: "Image is required"})
    //     .refine(
    //         (file) => 
    //             file == null ||
    //             ["image/png", "image/jpeg", "image/webp"].includes(file.type),
    //             "Only PNG, JPEG, and WebP are allowed",
    //     )
    //     .refine(
    //         (file) => file.size <= 5 * 1024 * 1024,
    //         "Image must be smaller than 5 MB"
    //     )
})

export type Step1Data = z.infer<typeof step1Scheme>

export type step1Errors = Partial<Record<keyof Step1Data, string>>