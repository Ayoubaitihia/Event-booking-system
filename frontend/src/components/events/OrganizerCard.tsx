import { Button } from "@/components/ui/button"

export default function OrganizerCard() {
    return(
        <>
            <h3 className="font-medium">Organizer</h3>

            <div className="flex items-center justify-between p-4 border rounded-md bg-gray-50">
                <div className="flex items-center gap-x-3">
                    <div className="h-9.5 w-9.5 bg-gray-500 rounded-md"></div>
                    <div className="flex flex-col">
                        <span className="text-[15px] font-medium">Amine Mrani</span>
                        <span className="text-xs text-gray-700">12 events · 3,400 attendees</span>
                    </div>
                </div>

                <Button className="p-4 cursor-pointer" variant="outline">Follow</Button>
                
            </div>
        </>
    )
}