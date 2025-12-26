"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import avatarImg from "@/assets/dashboard/avatar-img.png";
import {
    SIDEBAR_TOP_ITEMS,
    SIDEBAR_BOTTOM_ITEMS,
} from "@/lib/constants";
import { useRouter } from "next/navigation";
import type { SidebarLinkItem, SidebarActionItem } from "@/types/sidebar";

function isLinkItem(item: SidebarLinkItem | SidebarActionItem): item is SidebarLinkItem {
    return "href" in item;
}

export default function Sidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();

    return (
        <aside
            className={cn(
                "relative bg-white flex flex-col justify-between px-4 py-6 ml-5 mb-3 rounded-lg",
                "transition-all duration-300 ease-in-out",
                collapsed ? "w-[80px]" : "w-[280px]"
            )}
        >
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="
          absolute -right-3 top-1/2 -translate-y-1/2
          h-8 w-8 rounded-full bg-white
          border border-gray-200 shadow-md
          flex items-center justify-center
          hover:bg-gray-50 transition
          z-10
        "
            >
                {collapsed ? (
                    <ChevronRight className="h-4 w-4 text-gray-600" />
                ) : (
                    <ChevronLeft className="h-4 w-4 text-gray-600" />
                )}
            </button>

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
                            <item.icon className="h-5 w-5 shrink-0" />

                            <span
                                className={cn(
                                    "whitespace-nowrap transition-all duration-300",
                                    collapsed
                                        ? "opacity-0 w-0 overflow-hidden"
                                        : "opacity-100"
                                )}
                            >
                                {item.label}
                            </span>

                            {isActive && (
                                <span
                                    className={cn(
                                        "absolute top-2 bottom-2 w-1 rounded-full bg-[var(--button-primary)]",
                                        collapsed ? "right-1" : "right-0"
                                    )}
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="space-y-4">
                <div className="flex items-center gap-3 px-2">
                    <Image
                        src={avatarImg}
                        alt="User"
                        width={40}
                        height={40}
                        className="rounded-full"
                        priority
                    />

                    <div
                        className={cn(
                            "transition-all duration-300",
                            collapsed
                                ? "opacity-0 w-0 overflow-hidden"
                                : "opacity-100"
                        )}
                    >
                        <p className="text-sm font-semibold text-gray-800">
                            Indo Sakura
                        </p>
                        <span className="inline-block text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                            Admin
                        </span>
                    </div>
                </div>

                <div className="space-y-1">
                    {SIDEBAR_BOTTOM_ITEMS.map((item) => {
                        if ("action" in item && item.action === "logout") {
                            return (
                                <button
                                    key={item.label}
                                    type="button"
                                    onClick={() => {
                                        localStorage.removeItem("auth_token");
                                        document.cookie =
                                            "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                                        router.replace("/sign-in");
                                    }}
                                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                                >
                                    <item.icon className="h-5 w-5 shrink-0" />
                                    <span className={collapsed ? "opacity-0 w-0 overflow-hidden" : ""}>
                                        {item.label}
                                    </span>
                                </button>
                            );
                        }

                        if (isLinkItem(item)) {
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                                >
                                    <item.icon className="h-5 w-5 shrink-0" />
                                    <span className={collapsed ? "opacity-0 w-0 overflow-hidden" : ""}>
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        }

                        return null;
                    })}
                </div>

            </div>
        </aside>
    );
}
