'use client'

import StatCard from "@/components/ui/StatCard";
import UserActivityTable from "@/components/dashboard/UserActivityTable";
import CostBenefitChart from "@/components/dashboard/CostBenefitChart";
import ROIByTask from "@/components/dashboard/ROIByTask";
import TaskSuitability from "@/components/dashboard/TaskSuitability";
import { MdArrowOutward } from "react-icons/md";
import { SemiGauge } from "../ui/SemiGauge";
import RPAImplementationReport from "./RPAImplementationReport";
import CostBenefitKPIs from "./CostBenefitKPIs";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";


const data = [
    { name: "ITSO-K-NARA", team: 410, report: 50, email: 120, web: 180 },
    { name: "ITSO-K-NARA", team: 90, web: 450, email: 120 },
    { name: "ITSO-K-NARA", team: 130, web: 240, email: 70 },
    // { name: "ITSO-K-NARA", team: 170, web: 280, email: 100 },
];

export default function DashboardContent() {
    const router = useRouter();
    const { t } = useTranslation();
    return (
        <div className="space-y-6">
            {/* KPI GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_2fr_1fr] gap-6">
                <StatCard
                    className="lg:col-span-1"
                    title={t("dashboard.stats.totalRpaCandidates")}
                    value={
                        <span className="flex items-center gap-1">
                            <span className="text-5xl">7</span>
                            <MdArrowOutward className="text-indigo-600 text-xl" />
                        </span>
                    }
                    subtitle={t("dashboard.stats.increaseLastWeek")}
                />

                <StatCard
                    className="lg:col-span-1"
                    title={t("dashboard.stats.organizationalRoi")}
                    value={<span className="text-5xl">408.1%</span>}
                    subtitle={t("dashboard.stats.dealsClosed", { closed: 96, total: 100 })}
                />

                <StatCard
                    className="lg:col-span-1"
                    title={t("dashboard.stats.avgPaybackPeriod")}
                    value={
                        <div className="flex justify-center w-full">
                            <SemiGauge
                                value={2.4}
                                max={6}
                                label={t("dashboard.stats.months", { value: 2.4 })}
                            />
                        </div>
                    }
                />
            </div>


            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1.5fr] gap-5">
                <div
                    onClick={() => router.push("/user-activity")}
                    style={{ cursor: "pointer" }}
                >
                    <UserActivityTable />
                </div>
                <div className="space-y-4">
                    <div
                        onClick={() => router.push("/cost-benefit")}
                        style={{ cursor: "pointer" }}
                    >
                        <CostBenefitChart />
                    </div>
                    <CostBenefitKPIs />
                </div>
            </div>

            {/* BOTTOM GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr_1.5fr] gap-5 items-stretch">
                <div
                    onClick={() => router.push("/rpa-implementation")}
                    className="h-full cursor-pointer"
                >
                    <RPAImplementationReport
                        title={t("dashboard.reports.rpaImplementation")}
                        data={data}
                        showArrow
                    />
                </div>

                <div
                    onClick={() => router.push("/savings")}
                    className="h-full cursor-pointer"
                >
                    <ROIByTask showArrow />
                </div>

                <div
                    onClick={() => router.push("/task-suitability")}
                    className="h-full cursor-pointer"
                >
                    <TaskSuitability />
                </div>
            </div>

        </div>
    );
}
