import SideBar from "@/components/layout/Sidebar";
import EventForm from "@/components/organizer/EventForm";

export default function NewTicket()
{
    return(
        <SideBar>
            <div className="flex items-center justify-center">
                <EventForm/>
            </div>
        </SideBar>
    )
}