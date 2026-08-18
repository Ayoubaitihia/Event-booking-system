import SideBar from "@/components/layout/Sidebar";
import TicketList from "@/components/tickets/TicketList";
import TicketStatsRow from "@/components/tickets/TicketStatsRow";

export default function MyTickets()
{
    return(
        <SideBar>
            <TicketStatsRow/>
            <TicketList/>
        </SideBar>
    )
}