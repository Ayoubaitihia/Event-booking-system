export default function AttendeeStats()
{
    const states = [
        {
            id: 1, 
            title: "Total Attendees",
            value: 248,
            description: "of 300 capacity"
        },
        {
            id: 2, 
            title: "Checked In",
            value: 248,
            description: "73.8% attendance rate"
        },
        {
            id: 3, 
            title: "Revenue",
            value: 248,
            description: "from ticket sales"
        },
        {
            id: 4, 
            title: "Cancellations",
            value: 21,
            description: "4.8% cancellation rate"
        }
    ]

    return(
        <div>
            <div>
                <h2 className="text-3xl font-bold">React Summit 2024</h2>
                <span className="text-xs text-gray-700">Nov 14, 2024 - 10:00 AM – 6:00 PM Amsterdam, Netherlands</span>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-x-2">
                {
                    states.map((item) => (
                        <div key={item.id} className="border p-4 rounded-md bg-gray-50">
                            <span className="text-gray-700 font-medium uppercase text-sm">
                                {item.title}
                            </span>
                            <h3 className="text-3xl text-gray-900 font-bold">{item.value}</h3>
                            <span className="text-gray-700 text-xs">
                                {item.description}
                            </span>
                        </div>
                    ))
                }
            </div>
           
        </div>
    )
}