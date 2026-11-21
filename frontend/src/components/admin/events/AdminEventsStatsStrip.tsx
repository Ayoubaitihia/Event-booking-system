export default function AdminEventsStatsStrip()
{
    const states = [
        {
            id: 1, 
            title: "Total events",
            value: 142,
        },
        {
            id: 2, 
            title: "Published",
            value: 89,
        },
        {
            id: 3, 
            title: "Drafts",
            value: 38,
        },
        {
            id: 4, 
            title: "Sold out",
            value: 15
        }
    ]

    return(
        <div>
            <div className="mt-4 grid grid-cols-4 gap-x-2">
                {
                    states.map((item) => (
                        <div key={item.id} className="border p-4 rounded-md bg-gray-50">
                            <span className="text-gray-600 font-medium uppercase text-xs">
                                {item.title}
                            </span>
                            <h3 className="text-2xl text-gray-900 font-bold">{item.value}</h3>
                        </div>
                    ))
                }
            </div>
           
        </div>
    )
}