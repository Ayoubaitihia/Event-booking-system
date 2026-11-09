export default function AttendeeStats()
{
    return(
        <div>
            <div>
                <h2 className="text-3xl font-bold">React Summit 2024</h2>
                <span className="text-xs text-gray-700">Nov 14, 2024 - 10:00 AM – 6:00 PM Amsterdam, Netherlands</span>
            </div>
            <div className="border p-4 rounded-md">
                <span className="text-gray-700 font-medium uppercase text-sm">
                    Total Attendees
                </span>
                <h3 className="text-3xl text-gray-900 font-bold">248</h3>
                <span className="text-gray-700 text-xs">
                    of 300 capacity
                </span>
            </div>
        </div>
    )
}