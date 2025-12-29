'use client';

import Card from "@/components/ui/Card";

type SummaryRowProps = {
    label: string;
    value: string;
};

function SummaryRow({ label, value }: SummaryRowProps) {
    return (
        <div className="flex items-center justify-between rounded-full bg-[#F5F8FF] px-6 py-3">
            <span className="text-sm font-medium text-indigo-600">
                {label} :
            </span>
            <span className="text-sm font-medium text-gray-800">
                {value}
            </span>
        </div>
    );
}

export default function SummaryCard() {
    return (
        <Card className="p-6 h-full">
            {/* Title */}
            <h2 className="text-lg font-bold text-gray-900 mb-8">
                Summary
            </h2>

            {/* Pills */}
            <div className="space-y-6">
                <SummaryRow
                    label="Total Annual Savings"
                    value="¥400,413"
                />

                <SummaryRow
                    label="Organization-wide ROI"
                    value="408.1%"
                />

                <SummaryRow
                    label="Average Payback"
                    value="2.4 months"
                />
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-gray-200" />

            {/* Footer text */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                ROI estimates are based on execution volume,
                time reduction potential, development and
                maintenance costs per task.
            </p>
        </Card>
    );
}



