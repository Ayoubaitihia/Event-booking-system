import SideBar from "@/components/layout/Sidebar";
import OrganizerEventList from "@/components/organizer/OrganizerEventList.tsx"
import OrganizerEventRow from "@/components/organizer/OrganizerEventRow.tsx"

export default function OrganizerEvents()
{
    return(
        <SideBar>
            <OrganizerEventRow/>
            <OrganizerEventList/>
        </SideBar>
    )
}