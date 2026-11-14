import SideBar from "@/components/layout/Sidebar";
import AttendeeStats from "@/components/organizer/attendees/AttendeeStats";
import AttendeeTable from "@/components/organizer/attendees/AttendeeTable";

export default function EventAttendess()
{
    return (
        <SideBar>
            <AttendeeStats/>
            <AttendeeTable/>
        </SideBar>
    )
}