"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    ReferenceLine,
} from "recharts";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";

const data = [
    { name: "Team Collaboration", cost: -500, benefit: 780 },
    { name: "Email Collaboration", cost: -850, benefit: 0 },
    { name: "CRM Customer management", cost: 0, benefit: 320 },
    { name: "Report Export Analysis", cost: 0, benefit: 900 },
    { name: "Team Collaboration", cost: -350, benefit: 380 },
    { name: "File Management", cost: -550, benefit: 260 },
    { name: "Web Research / Browsing", cost: 0, benefit: 480 },
];

const COLORS = {
    cost: "#FFFBA6",
    benefit: "#B9C3FF",
    grid: "#E5E7EB",
    axis: "#6B7280",
};

export default function CostBenefitChart() {
    return (
        <Card className="px-6 pt-5 pb-6">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                    Cost-Benefit Estimation
                </h3>
                <ArrowRight className="h-5 w-5 text-indigo-500" />
            </div>

            {/* Chart */}
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={data}
                        margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                        barSize={18}
                    >
                        {/* Grid */}
                        <CartesianGrid
                            stroke={COLORS.grid}
                            strokeDasharray="0"
                        />

                        {/* X Axis */}
                        <XAxis
                            type="number"
                            domain={[-1000, 1000]}
                            ticks={[-1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000]}
                            tick={{ fill: COLORS.axis, fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        {/* Y Axis */}
                        <YAxis
                            type="category"
                            dataKey="name"
                            tick={{ fill: COLORS.axis, fontSize: 13 }}
                            axisLine={false}
                            tickLine={false}
                            width={140}
                        />

                        {/* Center reference line */}
                        <ReferenceLine x={0} stroke="#9CA3AF" />

                        {/* Left (Cost) */}
                        <Bar
                            dataKey="cost"
                            fill={COLORS.cost}
                            radius={[0, 10, 10, 0]}
                        />

                        {/* Right (Benefit) */}
                        <Bar
                            dataKey="benefit"
                            fill={COLORS.benefit}
                            radius={[10, 0, 0, 10]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
