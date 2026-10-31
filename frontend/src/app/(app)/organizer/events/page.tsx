import SideBar from "@/components/layout/Sidebar";
import OrganizerEventHeader from "@/components/organizer/OrganizerEventHeader";
import OrganizerEventList from "@/components/organizer/OrganizerEventList"
import OrganizerEventRow from "@/components/organizer/OrganizerEventRow"
import { STATIC_EVENTS } from "@/lib/static/events";

export default function OrganizerEvents()
{
    return(
        <SideBar>
            <OrganizerEventHeader/>
            <OrganizerEventRow/>
            <OrganizerEventList events={STATIC_EVENTS}/>
        </SideBar>
    )
}