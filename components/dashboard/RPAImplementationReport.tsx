"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import { ArrowRight } from "lucide-react";

const data = [
    {
        name: "ITSO-K-NARA",
        blue: 410,
        darkOrange: 200,
        orange: 120,
    },
    {
        name: "ITSO-K-NARA",
        blue: 90,
        lavender: 450,
        orange: 120,
    },
    {
        name: "ITSO-K-NARA",
        blue: 70,
        lavender: 230,
        orange: 60,
    },
    {
        name: "ITSO-K-NARA",
        blue: 90,
        teal: 450,
        orange: 120,
    },
    {
        name: "ITSO-K-NARA",
        blue: 90,
        lavender: 450,
        orange: 120,
    },
    {
        name: "ITSO-K-NARA",
        blue: 90,
        lavender: 450,
        orange: 120,
    },
];

const COLORS = {
    blue: "#8FA2FF",
    teal: "#BFE6E3",
    lavender: "#F1E2F4",
    orange: "#FFCB85",
    darkOrange: "#FFAF00",
};

export default function RPAImplementationReport() {
    return (
        <div className="rounded-3xl bg-white px-6 pt-5 pb-6 shadow-sm h-full">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                    RPA Implementation Report
                </h2>
                <ArrowRight className="h-7 w-7 text-indigo-500" />
            </div>

            {/* Chart */}
            <div className="h-[360px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        barSize={15}
                        margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
                    >
                        <CartesianGrid
                            stroke="#EAECEF"
                            strokeDasharray="0"
                            vertical={false}
                        />

                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#1F2937", fontSize: 12, fontWeight: 600 }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#374151", fontSize: 12 }}
                            domain={[0, 800]}
                            ticks={[0, 200, 400, 600, 800]}
                        />

                        {/* Stack order matters */}
                        <Bar dataKey="blue" stackId="a" fill={COLORS.blue} />
                        <Bar dataKey="teal" stackId="a" fill={COLORS.teal} />
                        <Bar dataKey="lavender" stackId="a" fill={COLORS.lavender} />
                        <Bar dataKey="darkOrange" stackId="a" fill={COLORS.darkOrange} />
                        <Bar
                            dataKey="orange"
                            stackId="a"
                            fill={COLORS.orange}
                            radius={[12, 12, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
