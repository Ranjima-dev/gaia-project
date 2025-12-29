'use client'

import SummaryCard from "@/components/dashboard/SummaryCard";
import ROIByTask from "@/components/dashboard/ROIByTask";

export default function SavingsPage() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3">
                <ROIByTask variant="savings" />
                <SummaryCard />
            </div>
        </div>
    );
}
