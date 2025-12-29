import TaskQuadrantTable from "@/components/task-quadrant/TaskQuadrantTable";
import { TaskQuadrantItem } from "@/types/task-quadrant";

const data: TaskQuadrantItem[] = [
    {
        id: "1",
        task: "Team Collaboration",
        suitability: 91,
        roi: "320.0%",
        quadrant: "Quick Wins",
    },
    {
        id: "2",
        task: "File Management",
        suitability: 75,
        roi: "140.0%",
        quadrant: "High ROI but Complex",
    },
    {
        id: "3",
        task: "Web Research / Browsing",
        suitability: 41,
        roi: "20.0%",
        quadrant: "Re-evaluate",
    },
];

export default function ExamplePage() {
    return (
        <div className="space-y-6">
            <TaskQuadrantTable data={data} />
        </div>
    );
}
