import { IconType } from "react-icons";

export type EventStatus = "draft" | "published" | "cancelled" | "completed";


export interface Category{
    id: number;
    name: string;
    slug: string;
    icon: IconType;
}

export interface EventFormData{

    // Step 1
    title:  string;
    description:    string;
    category:   string;
    cover_image:    File | null;

    // Step 2
    starts_at:   string;
    ends_at:     string;
    is_online:   boolean;
    online_url:  string;
    location:    string;
    address:     string;

    // Step 3
    capacity:    number;
    price:       number;
    is_free:     boolean;
    max_per_order: number;
}


export const defaultFormData: EventFormData = {
    title: "",
    description: "",
    category: "",
    cover_image: null,
    starts_at: "",
    ends_at: "",
    is_online: false,
    online_url: "",
    location: "",
    address: "",
    capacity: 100,
    price: 0,
    is_free: false,
    max_per_order: 10,
};