import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";

const data = [
    {
        label: "Team Collaboration :",
        score: 91,
        color: "bg-green-500",
    },
    {
        label: "Email Communication :",
        score: 84,
        color: "bg-green-500",
    },
    {
        label: "File Management",
        score: 75,
        color: "bg-amber-500",
    },
    {
        label: "Report Export / Download",
        score: 62,
        color: "bg-amber-500",
    },
    {
        label: "Web Research / Browsing",
        score: 41,
        color: "bg-red-500",
    },
];

export default function TaskSuitability() {
    return (
        <Card className="px-3 pt-5 pb-6 h-full">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                    Task Suitability
                </h3>
                <ArrowRight className="h-5 w-5 text-indigo-500" />
            </div>

            {/* List */}
            <div className="space-y-4">
                {data.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center justify-between rounded-full bg-[#F5F8FF] px-5 py-4"
                    >
                        {/* Task Name */}
                        <p className="text-[14px] font-medium text-indigo-500">
                            {item.label}
                        </p>

                        {/* Score */}
                        <div className="flex items-center gap-3">
                            <span
                                className={`h-4 w-4 rounded-full ${item.color}`}
                            />
                            <span className="text-[14px] font-semibold text-indigo-500">
                                {item.score}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
