import CategoryDonut from "@/components/admin/stats/CategoryDonut";
import RevenueBarChart from "@/components/admin/stats/RevenueBarChart";
import StatsKPICard from "@/components/admin/stats/StatsKPICard";
import SideBar from "@/components/layout/Sidebar";

export default function AdminStats()
{
    return (
        <SideBar>
            <StatsKPICard/>
            <div className="grid grid-cols-3 gap-x-4">
                <div className="col-span-2">
                    <RevenueBarChart/>
                </div>
                <CategoryDonut/>
            </div>
        </SideBar>
    )
}