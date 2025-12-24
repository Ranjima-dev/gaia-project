"use client";

import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import { PAGE_TITLES } from "@/lib/pageTitles";

export default function Header() {
    const pathname = usePathname();

    const title = PAGE_TITLES[pathname] ?? "Dashboard";

    return (
        <header className="h-16 px-6 flex items-center justify-between mb-0">
            {/* Left */}
            <div className="flex items-center gap-4">
                <div className="px-4 py-2 bg-white rounded-md w-[280px]">
                    <span className="text-indigo-600 font-semibold">
                        RPA Opportunity Dashboard
                    </span>
                </div>

                <h1 className="text-lg font-semibold text-gray-900">
                    {title}
                </h1>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
                <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
                    <Bell className="h-5 w-5 text-gray-600" />
                </button>

                <div className="px-4 py-2 border rounded-lg text-sm text-gray-600">
                    Last updated: 2025-10-10
                </div>

                <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50">
                    Filter
                </button>

                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Export
                </button>
            </div>
        </header>
    );
}
