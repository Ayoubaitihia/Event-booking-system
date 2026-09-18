
export default function OrganizerEventRow(){

    const Booking = [
        {
            id: 1,
            total: 4,
            type: "Published"
        },
        {
            id: 2,
            total: 8,
            type: "Pending"
        },
        {
            id: 3,
            total: 2,
            type: "draft"
        },
        {
            id: 4,
            total: 13,
            type: "Total Bookings"
        }
    ]

    return (
        <div className="grid grid-cols-4 items-center gap-x-4">
            {Booking.map((item) => (
                <div key={item.id} className="border p-4 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-400" />
                    <h2 className="text-lg font-semibold">{item.total}</h2>
                    <h3 className="text-gray-700 text-sm font-medium">{item.type}</h3>
                </div>
            ))}
        </div>
        
    )
}