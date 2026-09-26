import SideBar from "@/components/layout/Sidebar";
import TicketHeader from "@/components/tickets/TicketHeader";
import TicketList from "@/components/tickets/TicketList";
import TicketStatsRow from "@/components/tickets/TicketStatsRow";

export default function MyTickets()
{
    return(
        <SideBar>
            <TicketHeader/>
            <TicketStatsRow/>
            <TicketList/>
        </SideBar>
    )
}