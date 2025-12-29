import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";

/* ---------------- Types ---------------- */

type Variant = "dashboard" | "savings";

type ROIByTaskProps = {
    variant?: Variant;
    showArrow?: boolean;
};

type TaskItem = {
    label: string;
    value: string; // display value (%, K, etc.)
    score: number; // visual weight (0–100)
};

/* ---------------- Data ---------------- */

const data: TaskItem[] = [
    { label: "Team Collaboration", value: "561.4%", score: 100 },
    { label: "Email Communication", value: "3.6%", score: 45 },
    { label: "CRM Customer Management", value: "-3.5%", score: 20 },
    { label: "Report Export Analysis", value: "50K", score: 65 },
    { label: "File Management", value: "50K", score: 60 },
    { label: "Web Research / Browsing", value: "50K", score: 55 },
];

/* ---------------- Component ---------------- */

export default function ROIByTask({
    variant = "dashboard",
    showArrow = false,
}: ROIByTaskProps) {
    const barGradient =
        variant === "savings"
            ? "linear-gradient(90deg, #465FFF 0%, rgba(70, 95, 255, 0.6) 60%, rgba(70, 95, 255, 0) 100%)"
            : "linear-gradient(90deg, #FFF7A8 0%, #FFFBEA 70%)";

    const trackBg =
        variant === "savings" ? "bg-indigo-50" : "bg-[#FFF8E5]";

    return (
        <Card className="px-6 pt-5 pb-6 h-full">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">
                    ROI by Task
                </h3>

                {showArrow && (
                    <ArrowRight className="h-7 w-7 text-indigo-500" />
                )}
            </div>

            {/* List */}
            <div className="space-y-6">
                {data.map((item) => {
                    const width = Math.min(100, Math.max(0, item.score));

                    return (
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
                            <div
                                className={`h-5 w-full rounded-full overflow-hidden ${trackBg}`}
                            >
                                <div
                                    className="h-full"
                                    style={{
                                        width: `${width}%`,
                                        background: barGradient,
                                        WebkitMaskImage:
                                            variant === "savings"
                                                ? "linear-gradient(to right, black 85%, transparent 100%)"
                                                : undefined,
                                        maskImage:
                                            variant === "savings"
                                                ? "linear-gradient(to right, black 85%, transparent 100%)"
                                                : undefined,
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}
