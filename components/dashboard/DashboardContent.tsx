import StatCard from "@/components/ui/StatCard";
import UserActivityTable from "@/components/dashboard/UserActivityTable";
import CostBenefitChart from "@/components/dashboard/CostBenefitChart";
import ROIByTask from "@/components/dashboard/ROIByTask";
import TaskSuitability from "@/components/dashboard/TaskSuitability";

export default function DashboardContent() {
    return (
        <>
            {/* KPI GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Total RPA Candidates"
                    value={7}
                    subtitle="Increase compared to last week"
                />
                <StatCard
                    title="Organizational ROI"
                    value="408.1%"
                    subtitle="You closed 96 out of 100 deals"
                />
                <StatCard
                    title="Avg. Payback Period"
                    value="2.4 months"
                />
            </div>

            {/* MAIN GRID */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <UserActivityTable />
                <CostBenefitChart />
            </div> */}

            {/* BOTTOM GRID */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <ROIByTask />
                <TaskSuitability />
            </div> */}
        </>
    );
}
