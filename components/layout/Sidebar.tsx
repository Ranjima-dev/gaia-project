"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    SIDEBAR_TOP_ITEMS,
    SIDEBAR_BOTTOM_ITEMS,
} from "@/lib/constants";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-[280px] bg-white border-r border-gray-200 flex flex-col justify-between px-4 py-6 ml-5 mb-3">
            <nav className="space-y-2">
                {SIDEBAR_TOP_ITEMS.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                                isActive
                                    ? "text-indigo-600 bg-gray-50"
                                    : "text-gray-600 hover:bg-gray-100"
                            )}
                        >
                            <item.icon className="h-5 w-5" />

                            {item.label}

                            {isActive && (
                                <span className="absolute right-0 top-2 bottom-2 w-1 rounded-full bg-[var(--button-primary)]" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div className="space-y-4">
                {/* User Info */}
                <div className="flex items-center gap-3 px-2">
                    <Image
                        src="/avatar.jpg"
                        alt="User"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <p className="text-sm font-semibold text-gray-800">
                            Indo Sakura
                        </p>
                        <span className="inline-block text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                            Admin
                        </span>
                    </div>
                </div>

                {/* Bottom Links */}
                <div className="space-y-1">
                    {SIDEBAR_BOTTOM_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                                item.danger
                                    ? "text-red-600 hover:bg-red-50"
                                    : "text-gray-600 hover:bg-gray-100"
                            )}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
}
