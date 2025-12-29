import Card from "@/components/ui/Card";
import TaskInfoPill from "@/components/task-details/TaskInfoPill";

export default function TaskSummaryGrid() {
    return (
        <Card className="p-6 space-y-2">
            <div className="space-y-2">
                <h1 className="text-xl font-bold text-gray-900">
                    Task Details
                </h1>
                <h2 className="text-lg font-bold text-gray-900">
                    Team Collaboration
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <TaskInfoPill label="Suitability" value="91" />
                <TaskInfoPill label="ROI" value="320.20%" />
                <TaskInfoPill label="Category" value="Quick Win" />
                <TaskInfoPill label="Volume / year" value="120.0h" />
                <TaskInfoPill label="Risk" value="Low" />
                <TaskInfoPill label="Dev Effort" value="Medium" />
            </div>

            {/* Divider */}
            <div className="my-3 border-t border-indigo-200" />

            {/* Footer Note */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-4xl">
                This area can later be extended with: best practice workflow
                steps (from M7), detailed time distribution, and user-level
                performance gaps.
            </p>
        </Card>
    );
}
