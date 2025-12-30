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

type LegendItem = {
    key: string;
    label: string;
    color: string;
};

interface Props {
    title: string;
    data: any[];
    legend?: LegendItem[];
    showArrow?: boolean;
    xAxisLabel?: string;
    yAxisLabel?: string;
}

const DEFAULT_COLORS = [
    "#8FA2FF",
    "#FFCB85",
    "#BFE6E3",
    "#FFAF00",
    "#F1E2F4",
];

export default function RPAImplementationReport({
    title,
    data,
    legend,
    showArrow = false,
    xAxisLabel,
    yAxisLabel,
}: Props) {
    const barKeys =
        legend?.map(l => l.key) ??
        Object.keys(data?.[0] || {}).filter(k => k !== "name");

    return (
        <div className="rounded-3xl bg-white px-6 pt-5 pb-6 shadow-sm h-full">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                    {title}
                </h2>

                {showArrow && (
                    <ArrowRight className="h-5 w-5 text-indigo-500" />
                )}
            </div>

            <div className="h-[360px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        barSize={15}
                        margin={{
                            top: 10,
                            right: 20,
                            left: 30,
                            bottom: legend?.length ? 40 : 20,
                        }}
                    >
                        <CartesianGrid stroke="#EAECEF" vertical={false} />

                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            interval={0}
                            tick={{
                                fill: "#1F2937",
                                fontSize: 12,
                                fontWeight: 600,
                            }}
                            label={{
                                value: xAxisLabel,
                                position: "insideBottom",
                                offset: -20,
                                style: {
                                    fill: "#111827",
                                    fontSize: 13,
                                    fontWeight: 700,
                                },
                            }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#374151", fontSize: 12 }}
                            domain={[0, 800]}
                            ticks={[0, 200, 400, 600, 800]}
                            label={{
                                value: yAxisLabel,
                                angle: -90,
                                position: "insideLeft",
                                offset: 0,
                                style: {
                                    fill: "#111827",
                                    fontSize: 13,
                                    fontWeight: 700,
                                    textAnchor: "middle",
                                },
                            }}
                        />
                        {barKeys.map((key, index) => {
                            const color =
                                legend?.find(l => l.key === key)?.color ??
                                DEFAULT_COLORS[index % DEFAULT_COLORS.length];

                            return (
                                <Bar
                                    key={key}
                                    dataKey={key}
                                    stackId="a"
                                    fill={color}
                                    radius={
                                        index === barKeys.length - 1
                                            ? [12, 12, 0, 0]
                                            : [0, 0, 0, 0]
                                    }
                                />
                            );
                        })}
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {legend && legend.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                    {legend.map(item => (
                        <div
                            key={item.key}
                            className="flex items-center gap-2 text-sm font-medium text-gray-700"
                        >
                            <span
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
