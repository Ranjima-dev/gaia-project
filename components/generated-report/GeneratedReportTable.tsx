'use client';

import { useState } from "react";
import Card from "@/components/ui/Card";
import GeneratedReportRow from "./GeneratedReportRow";
import { GeneratedReport } from "@/types/generated-report";
import { Search } from "lucide-react";

type Props = {
    data: GeneratedReport[];
};

export default function GeneratedReportTable({ data }: Props) {
    const [search, setSearch] = useState("");

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleDownload = (report: GeneratedReport) => {
        if (!report.downloadUrl) return;

        const link = document.createElement("a");
        link.href = report.downloadUrl;
        link.download = report.name;
        link.click();
    };

    const handlePreview = (report: GeneratedReport) => {
        if (!report.previewUrl) return;

        window.open(report.previewUrl, "_blank");
    };


    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                    All Generated Report:
                </h2>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Type to search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-9 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            {/* Table */}
            <Card className="p-4 bg-[#F4F7FF]">
                <table className="w-full border-separate border-spacing-y-3">
                    <thead>
                        <tr className="text-sm text-gray-600">
                            <th className="px-6 py-3 text-left">Name</th>
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="px-6 py-3 text-left">Time & Date</th>
                            <th className="px-6 py-3 text-left">Size</th>
                            <th className="px-6 py-3 text-left">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.map((report) => (
                            <GeneratedReportRow
                                key={report.id}
                                report={report}
                                onDownload={handleDownload}
                                onPreview={handlePreview}
                            />
                        ))}
                    </tbody>
                </table>
            </Card>

            {/* Footer */}
            <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    Show
                    <select className="border border-gray-200 rounded px-2 py-1">
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                    </select>
                    entries
                </div>

                <div className="flex items-center gap-3">
                    <button className="text-gray-400">&laquo;</button>
                    <button className="text-gray-400">&lsaquo;</button>
                    <span>Page 1 of 1</span>
                    <button className="text-gray-400">&rsaquo;</button>
                    <button className="text-gray-400">&raquo;</button>
                </div>
            </div>
        </div>
    );
}
