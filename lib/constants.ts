import {
  Home,
  BarChart2,
  CheckSquare,
  Activity,
  ListOrdered,
  Download,
  Settings,
  LogOut,
} from "lucide-react";

import type { SidebarLinkItem, SidebarActionItem } from "@/types/sidebar";

/* ✅ TOP items = LINKS ONLY */
export const SIDEBAR_TOP_ITEMS: SidebarLinkItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Savings & ROI", href: "/savings", icon: BarChart2 },
  { label: "Task Suitability", href: "/task-suitability", icon: CheckSquare },
  { label: "User Activity Overview", href: "/user-activity", icon: Activity },
  { label: "Task Prioritization", href: "/task-priority", icon: ListOrdered },
  { label: "Export", href: "/export", icon: Download },
];

/* ✅ BOTTOM items = LINKS + ACTIONS */
export const SIDEBAR_BOTTOM_ITEMS: (SidebarLinkItem | SidebarActionItem)[] = [
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Log out", icon: LogOut, danger: true, action: "logout" },
];
