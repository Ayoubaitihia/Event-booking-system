import SideBar from "@/components/layout/Sidebar";
import OrganizerEventHeader from "@/components/organizer/OrganizerEventHeader";
import OrganizerEventList from "@/components/organizer/OrganizerEventList"
import OrganizerEventRow from "@/components/organizer/OrganizerEventRow"

export default function OrganizerEvents()
{
    return(
        <SideBar>
            <OrganizerEventHeader/>
            <OrganizerEventRow/>
            <OrganizerEventList/>
        </SideBar>
    )
}