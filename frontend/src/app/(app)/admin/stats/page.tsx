import CategoryDonut from "@/components/admin/stats/CategoryDonut";
import RecentEventsTable from "@/components/admin/stats/RecentEventsTable";
import RevenueBarChart from "@/components/admin/stats/RevenueBarChart";
import StatsKPICard from "@/components/admin/stats/StatsKPICard";
import TopOrganizersList from "@/components/admin/stats/TopOrganizersList";
import SideBar from "@/components/layout/Sidebar";

export default function AdminStats()
{
    return (
        <SideBar>
            <StatsKPICard/>
            <div className="grid lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                    <RevenueBarChart/>
                </div>
                <CategoryDonut/>
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
                <RecentEventsTable/>
                <TopOrganizersList/>
            </div>
        </SideBar>
    )
}