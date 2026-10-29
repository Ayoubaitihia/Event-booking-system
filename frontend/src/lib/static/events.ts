import { EventFormData } from "@/lib/types"

export type EventStatus = "draft" | "published" | "cancelled" | "completed"

export interface EventProps {
  id:          number
  slug:        string
  title:       string
  description: string
  category:    string
  cover_image: string | null
  starts_at:   string
  ends_at:     string
  is_online:   boolean
  online_url:  string | null
  venue_name:  string | null
  address:     string | null
  capacity:    number
  booked:      number
  price:       number
  is_free:     boolean
  status:      EventStatus
  created_at:  string
}

export interface AttendeeRow {
  id:        number
  name:      string
  email:     string
  tickets:   number
  total_paid: number
  booked_at: string
  status:    "confirmed" | "pending" | "cancelled"
}

export const STATIC_EVENTS: EventProps[] = [
  {
    id:          1,
    slug:        "sonic-waves-festival-2025",
    title:       "Sonic Waves Festival",
    description: "A three-day outdoor music festival featuring local and international artists across three stages.",
    category:    "music",
    cover_image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    starts_at:   "2025-07-18T16:00",
    ends_at:     "2025-07-20T23:00",
    is_online:   false,
    online_url:  null,
    venue_name:  "Riverside Park Arena",
    address:     "12 Riverside Blvd, Casablanca",
    capacity:    2000,
    booked:      1430,
    price:       49,
    is_free:     false,
    status:      "published",
    created_at:  "2025-04-01T10:00",
  },
  {
    id:          2,
    slug:        "react-summit-2025",
    title:       "React Summit 2025",
    description: "A full-day conference covering the latest in React, Next.js, and the modern frontend ecosystem.",
    category:    "technology",
    cover_image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
    starts_at:   "2025-09-05T09:00",
    ends_at:     "2025-09-05T18:00",
    is_online:   true,
    online_url:  "https://reactsummit.example.com/live",
    venue_name:  null,
    address:     null,
    capacity:    500,
    booked:      312,
    price:       29,
    is_free:     false,
    status:      "published",
    created_at:  "2025-05-10T09:00",
  },
  {
    id:          3,
    slug:        "city-marathon-2025",
    title:       "City Marathon 2025",
    description: "Annual 42km city marathon through the historic streets. Open to all fitness levels.",
    category:    "sports",
    cover_image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800",
    starts_at:   "2025-10-12T07:00",
    ends_at:     "2025-10-12T14:00",
    is_online:   false,
    online_url:  null,
    venue_name:  "City Hall Square",
    address:     "1 City Hall Pl, Casablanca",
    capacity:    800,
    booked:      800,
    price:       15,
    is_free:     false,
    status:      "completed",
    created_at:  "2025-03-20T08:00",
  },
  {
    id:          4,
    slug:        "startup-pitch-night",
    title:       "Startup Pitch Night",
    description: "Eight early-stage startups pitch to a panel of investors. Networking dinner included.",
    category:    "business",
    cover_image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
    starts_at:   "2025-11-20T18:00",
    ends_at:     "2025-11-20T22:00",
    is_online:   false,
    online_url:  null,
    venue_name:  "The Innovation Hub",
    address:     "45 Tech Street, Casablanca",
    capacity:    150,
    booked:      60,
    price:       0,
    is_free:     true,
    status:      "draft",
    created_at:  "2025-10-01T14:00",
  },
  {
    id:          5,
    slug:        "photography-masterclass",
    title:       "Photography Masterclass",
    description: "Learn composition, lighting, and post-processing from award-winning photographer Leila Amrani.",
    category:    "education",
    cover_image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800",
    starts_at:   "2025-12-06T10:00",
    ends_at:     "2025-12-06T16:00",
    is_online:   false,
    online_url:  null,
    venue_name:  "Studio 9",
    address:     "9 Art Quarter Lane, Casablanca",
    capacity:    30,
    booked:      22,
    price:       75,
    is_free:     false,
    status:      "published",
    created_at:  "2025-10-15T11:00",
  },
]

export const STATIC_ATTENDEES: AttendeeRow[] = [
  { id: 1, name: "Sara El Fassi",    email: "sara@example.com",   tickets: 2, total_paid: 98,  booked_at: "2025-05-01T10:00", status: "confirmed" },
  { id: 2, name: "Karim Benhaddou", email: "karim@example.com",  tickets: 1, total_paid: 49,  booked_at: "2025-05-03T14:00", status: "confirmed" },
  { id: 3, name: "Nadia Oufkir",    email: "nadia@example.com",  tickets: 3, total_paid: 147, booked_at: "2025-05-10T09:00", status: "pending"   },
  { id: 4, name: "Youssef Tahiri",  email: "youssef@example.com",tickets: 1, total_paid: 49,  booked_at: "2025-05-12T16:00", status: "confirmed" },
  { id: 5, name: "Amine Chraibi",   email: "amine@example.com",  tickets: 2, total_paid: 98,  booked_at: "2025-05-15T11:00", status: "cancelled" },
  { id: 6, name: "Fatima Zahra",    email: "fatima@example.com", tickets: 1, total_paid: 49,  booked_at: "2025-05-18T13:00", status: "confirmed" },
  { id: 7, name: "Omar Benali",     email: "omar@example.com",   tickets: 4, total_paid: 196, booked_at: "2025-05-20T10:00", status: "confirmed" },
  { id: 8, name: "Hind Lakrimi",    email: "hind@example.com",   tickets: 1, total_paid: 49,  booked_at: "2025-05-22T15:00", status: "pending"   },
]