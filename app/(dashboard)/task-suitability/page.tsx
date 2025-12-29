'use client';

import TaskSummaryGrid from "@/components/task-details/TaskSummaryGrid";
import TaskDetailsTable from "@/components/task-details/TaskDetailsTable";

export default function TaskDetailsPage() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-3">
                <TaskDetailsTable />
                <TaskSummaryGrid />
            </div>
        </div>
    );
}
