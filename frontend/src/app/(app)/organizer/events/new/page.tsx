import SideBar from "@/components/layout/Sidebar";
import EventForm from "@/components/organizer/EventForm";

export default function NewTicket()
{
    return(
        <SideBar>
            <div>
                <EventForm/>
            </div>
        </SideBar>
    )
}