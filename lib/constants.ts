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

export const SIDEBAR_TOP_ITEMS: SidebarLinkItem[] = [
  { label: "dashboard.menu.dashboard", href: "/dashboard", icon: Home },
  { label: "dashboard.menu.savingsRoi", href: "/savings", icon: BarChart2 },
  {
    label: "dashboard.menu.taskSuitability",
    href: "/task-suitability",
    icon: CheckSquare,
  },
  {
    label: "dashboard.menu.userActivity",
    href: "/user-activity",
    icon: Activity,
  },
  {
    label: "dashboard.menu.taskPrioritization",
    href: "/task-priority",
    icon: ListOrdered,
  },
  { label: "dashboard.export", href: "/export", icon: Download },
];

export const SIDEBAR_BOTTOM_ITEMS: (SidebarLinkItem | SidebarActionItem)[] = [
  { label: "dashboard.admin.settings", href: "/settings", icon: Settings },
  {
    label: "dashboard.admin.logout",
    icon: LogOut,
    danger: true,
    action: "logout",
  },
];
