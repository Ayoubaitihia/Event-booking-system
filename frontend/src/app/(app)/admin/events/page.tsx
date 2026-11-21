import { 
    Table,
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table";
import AdminEventsTable from "@/components/admin/events/AdminEventsTable";
import SideBar from "@/components/layout/Sidebar";
import AdminEventsStatsStrip from "@/components/admin/events/AdminEventsStatsStrip"
import AdminEventsToolbar from "@/components/admin/events/AdminEventsToolbar";


export default function AdminEvents()
{
    return (
        <SideBar>
            <AdminEventsStatsStrip/>
            <AdminEventsToolbar/>
            <AdminEventsTable/>
        </SideBar>
    )
}