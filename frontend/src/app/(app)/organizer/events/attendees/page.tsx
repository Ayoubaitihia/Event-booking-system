import SideBar from "@/components/layout/Sidebar";
import AttendeePagination from "@/components/organizer/attendees/AttendeePagination";
import AttendeeSearch from "@/components/organizer/attendees/AttendeeSearch";
import AttendeeStats from "@/components/organizer/attendees/AttendeeStats";
import AttendeeTable from "@/components/organizer/attendees/AttendeeTable";

export default function EventAttendess()
{
    return (
        <SideBar>
            <AttendeeStats/>
            <AttendeeSearch/>
            <AttendeeTable/>
            <AttendeePagination/>
        </SideBar>
    )
}