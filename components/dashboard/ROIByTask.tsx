import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";

const data = [
    { label: "Team Collaboration", value: "561.4%", progress: 100 },
    { label: "Email Communication", value: "3.6%", progress: 75 },
    { label: "CRM Customer Management", value: "-3.5%", progress: 100 },
    { label: "Report Export Analysis", value: "50K", progress: 75 },
    { label: "File Management", value: "50K", progress: 75 },
    { label: "Web Research / Browsing", value: "50K", progress: 75 },
];

export default function ROIByTask() {
    return (
        <Card className="px-6 pt-5 pb-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">
                    ROI by Task
                </h3>
                <ArrowRight className="h-7 w-7 text-indigo-500" />
            </div>

            {/* List */}
            <div className="space-y-6">
                {data.map((item) => (
                    <div key={item.label}>
                        <div className="mb-1 flex items-center justify-between">
                            <p className="text-sm font-semibold text-gray-600">
                                {item.label}
                            </p>
                            <p className="text-sm font-medium text-gray-500">
                                {item.value}
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-5 w-full rounded-full bg-[#FFF8E5] overflow-hidden">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: `${item.progress}%`,
                                    background:
                                        "linear-gradient(90deg, #FFF7A8 0%, #FFFBEA 70%)",
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
